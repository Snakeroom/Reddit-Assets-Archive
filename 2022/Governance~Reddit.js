// https://www.redditstatic.com/desktop2x/Governance~Reddit.8183414fbe5fae1d6256.js
// Retrieved at 4/7/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit", "reddit-components-BlankPost"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, n) {},
		"./node_modules/@r/frames/compiled.js": function(e, t, n) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = arguments,
					r = ".*",
					s = ".postMessage",
					a = {
						targetOrigin: "*"
					},
					o = /\..+$/;

				function c(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function i(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var d = [r],
					u = i(d),
					l = [s],
					p = c(l),
					b = {},
					f = !1;

				function h(t, n, r) {
					e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n)
				}

				function y(t, n) {
					e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent("on" + t, n)
				}

				function m(e) {
					return /\*/.test(e)
				}
				var g = t.postMessage = function(e, t, n) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						o.test(t) || (t += s);
						var c = r;
						Object.keys(a).forEach((function(e) {
							c[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: n,
							defaultedOptions: c
						}), c.targetOrigin)
					},
					v = t.receiveMessage = function(e, t, n, r) {
						"string" == typeof e && (r = n, n = t, t = e, e = null), r = r || void 0;
						var s = function(t) {
							for (var s = arguments.length, a = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
							e && e !== t.source && e.contentWindow !== t.source || n.apply(r, [t].concat(a))
						};
						return h(t, s), {
							off: function() {
								y(t, s)
							}
						}
					},
					O = (t.receiveMessageOnce = function(e, t, r, s) {
						var a = v(e, t, (function() {
							r && r.apply(void 0, n), a.off()
						}), s);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = d.indexOf(e); - 1 !== t && (d.splice(t, 1), u = i(d))
					}),
					E = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof E) {
					var _ = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(E = function(e, t) {
						t = t || _;
						var n = document.createEvent("CustomEvent");
						return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					m(e) ? d = [r] : -1 === d.indexOf(e) && (O(r), d.push(e), u = i(d))
				};

				function I(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var n = {};
						try {
							n = JSON.parse(t.data)
						} catch (t) {}
						var r = n.type;
						if (p.test(r)) {
							var s = r.split(".", 2)[1];
							if (b[s]) b[s].targets.forEach((function(e) {
								return g(e, r, n.data, n.options)
							}));
							var a = new E(r, {
								detail: n.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var S = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = c(l)), f || (h("message", I), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = c(l) : (y("message", I), f = !1))
				}, t.proxy = function(e, t) {
					S(e), Array.isArray(t) || (t = [t]);
					var n = b[e];
					n ? n.targets = [].concat(n.targets, t) : n = {
						targets: t
					}, b[e] = n
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/lodash/forOwn.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseForOwn.js"),
				s = n("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && r(e, s(t))
			}
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, n) {
				var s = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
				return void 0 === s ? r(e, t, void 0, n) : !!s
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(n);
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
		"./node_modules/lodash/omitBy.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/negate.js"),
				a = n("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, s(r(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseUniq.js"),
				o = n("./node_modules/lodash/isArrayLikeObject.js"),
				c = s((function(e) {
					return a(r(e, 1, o, !0))
				}));
			e.exports = c
		},
		"./node_modules/lodash/xorWith.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseXor.js"),
				o = n("./node_modules/lodash/isArrayLikeObject.js"),
				c = n("./node_modules/lodash/last.js"),
				i = s((function(e) {
					var t = c(e);
					return t = "function" == typeof t ? t : void 0, a(r(e, o), void 0, t)
				}));
			e.exports = i
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, n) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var r = n("./node_modules/ts-error/lib/helpers.js"),
				s = r.setPrototypeOf,
				a = r.getPrototypeOf,
				o = r.defineProperty,
				c = r.objectCreate,
				i = "[object Error]" === (new Error).toString(),
				d = "";

			function u(e) {
				var t, n = this.constructor,
					r = n.name || (null === (t = n.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : t[1]),
					c = "Error" === r,
					l = c ? d : r,
					p = Error.apply(this, arguments);
				if (s(p, a(this)), !(p instanceof n && p instanceof u)) {
					p = this;
					Error.apply(this, arguments), o(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (o(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: l,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, c ? u : n), void 0 === p.stack) {
					var b = new Error(e);
					b.name = p.name, p.stack = b.stack
				}
				return i && o(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			d = u.name || "ExtendableError", u.prototype = c(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = u, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, n) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var r = "function" == typeof Object.setPrototypeOf,
				s = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				o = "function" == typeof Object.create,
				c = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				r ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return s ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var i = !1;
			t.defineProperty = function e(t, n, r) {
				if (a && !i) try {
					Object.defineProperty(t, n, r)
				} catch (s) {
					i = !0, e(t, n, r)
				} else t[n] = r.value
			};
			var d = function(e, t) {
				return c ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = d;
			t.objectCreate = function(e, t) {
				if (o) return Object.create(e, t);
				var n = function() {};
				n.prototype = e;
				var r = new n;
				if (void 0 === t) return r;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var s in t) d(t, s) && (r[s] = t[s].value);
				return r
			}
		},
		"./src/lib/asyncActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = e => `${e}_REQUESTED`,
				a = e => `${e}_SUCCEEDED`,
				o = e => `${e}_FAILED`;

			function c(e) {
				const t = s(e),
					n = a(e),
					c = o(e);
				return {
					requestedActionType: t,
					requested: Object(r.a)(t),
					succeededActionType: n,
					succeeded: Object(r.a)(n),
					failedActionType: c,
					failed: Object(r.a)(c)
				}
			}
			var i;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(i || (i = {}));
			const d = (e, t, n) => (function() {
				let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.New,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case e:
						return r === i.New ? i.Pending : r;
					case t:
						return r === i.Pending ? i.Succeeded : r;
					case n:
						return r === i.Pending ? i.Failed : r;
					default:
						return r
				}
			})
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					a = new r.BigNumber(n.dividedBy(s)),
					o = new r.BigNumber("100").multipliedBy(a);
				return new r.BigNumber(o).toNumber()
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/intlList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/react/index.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function a(e, t) {
				for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
				if (s(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let n = 0;
						(e = new Error(t.replace(/%s/g, () => String(r[n++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const o = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				c = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			t.c = function(e, t, n) {
				const s = e.length;
				if (0 === s) return "";
				if (1 === s) return e[0];
				const i = e[s - 1];
				let d = e[0];
				for (let a = 1; a < s - 1; ++a) switch (n) {
					case c.SEMICOLON:
						d = r.fbt._("{previous items}; {following items}", [r.fbt._param("previous items", d), r.fbt._param("following items", e[a])], {
							hk: "4hs4xq"
						});
						break;
					default:
						d = r.fbt._("{previous items}, {following items}", [r.fbt._param("previous items", d), r.fbt._param("following items", e[a])], {
							hk: "2z8RMb"
						})
				}
				return function(e, t, n, s) {
					switch (n) {
						case o.AND:
							return r.fbt._("{list of items} and {last item }", [r.fbt._param("list of items", e), r.fbt._param("last item ", t)], {
								hk: "1ylan1"
							});
						case o.OR:
							return r.fbt._("{list of items} or {last item}", [r.fbt._param("list of items", e), r.fbt._param("last item", t)], {
								hk: "3q8AmB"
							});
						case o.NONE:
							switch (s) {
								case c.SEMICOLON:
									return r.fbt._("{previous item}; {last item}", [r.fbt._param("previous item", e), r.fbt._param("last item", t)], {
										hk: "1h77rJ"
									});
								default:
									return r.fbt._("{list of items}, {last item}", [r.fbt._param("list of items", e), r.fbt._param("last item", t)], {
										hk: "3Q0iaX"
									})
							}
							default:
								a(!1, "Invalid conjunction %s provided to intlList", n)
					}
				}(d, i, t || o.AND, n || c.COMMA)
			}
		},
		"./src/lib/omitKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (t in e) {
					const {
						[t]: n, ...r
					} = e;
					return r
				}
				return e
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			n("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = e => "object" == typeof e && null !== e,
				o = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				c = () => o() ? window.grecaptcha.enterprise : void 0,
				i = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(s.a)(i(e), o),
				u = e => new Promise(t => e.ready(t));
			var l, p = n("./node_modules/ts-error/lib/cjs.js"),
				b = n.n(p);
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
			const h = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.a.reCaptchaEnterprise.siteKey,
						n = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => i(this.siteKey), this.ensureSiteKey = () => {
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
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await d(e.siteKey);
							const t = c();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							n = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(n)[1]
						}
						return n
					}, this.setInstance(n || c())
				}
			};
			t.b = h
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, n) {},
		"./src/reddit/actions/accountGender/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "ACCOUNT_GENDER_LOADED",
				s = "ACCOUNT_GENDER_UPDATED",
				a = "ACCOUNT_GENDER_UPDATE_FAILED"
		},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "API_REQUEST_HEADERS__set";
			Object(r.a)(s)
		},
		"./src/reddit/actions/badge.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts");
			const o = "BADGE__BADGE_APPLICATION_SUCCESS",
				c = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(r.a)(o),
				h = Object(r.a)(c),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(i)),
				m = Object(r.a)(d),
				g = Object(r.a)(u),
				v = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(b), e => {
					let {
						badgeIds: t,
						subredditId: n
					} = e;
					return async (e, r, o) => {
						let {
							apiContext: c
						} = o;
						const i = r(),
							d = i.user.account;
						if (d) {
							const r = (i.users.appliedBadges[d.id] || {})[n] || [],
								o = t.length ? t[0] : r[0],
								u = !!t.length;
							e(f({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const l = await Object(a.a)(c(), n, o, u);
							l.ok || (e(h({
								badgeIds: t,
								subredditId: n,
								error: l.error,
								previousBadgeIds: r,
								userId: d.id
							})), Object(s.a)(e, l.error))
						}
					}
				}),
				O = e => {
					let {
						subredditId: t,
						userIds: n
					} = e;
					return async (e, r, s) => {
						let {
							apiContext: o
						} = s;
						e(g({
							subredditId: t
						}));
						const c = await Object(a.b)(o(), t, n);
						c.ok ? e(y({
							...c.body,
							subredditId: t
						})) : e(m({
							subredditId: t,
							error: c.error
						}))
					}
				}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const o = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var c = n("./src/reddit/selectors/blockedRedditors.ts");
			const i = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				u = "BLOCKED_REDDITORS_LIST__FAILED",
				l = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				b = Object(r.a)(i),
				f = Object(r.a)(d),
				h = Object(r.a)(u),
				y = Object(r.a)(l),
				m = Object(r.a)(p),
				g = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(c.a)(s);
					if (Object(c.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let i = !1,
						d = "";
					do {
						e(m());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await o(r(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: r
								} = t.blockedRedditorsInfo;
								if (e(y(r.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									i = e, d = t || ""
								}
							} else i = !1
						} else {
							i = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (i)
				}
		},
		"./src/reddit/actions/category/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = "CATEGORY__LIST_PENDING",
				s = "CATEGORY__LIST_LOADED",
				a = "CATEGORY__LIST_FAILED",
				o = "CATEGORY__SUBREDDITS_PENDING",
				c = "CATEGORY__SUBREDDITS_LOADED",
				i = "CATEGORY__SUBREDDITS_FAILED",
				d = "CATEGORY__RANK_SET"
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(r || (r = {}));
			const a = {
					[r.anybody]: () => s.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[r.account_age_30_days]: () => s.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[r.nobody]: () => s.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				o = e => {
					const t = a[e];
					return t && t()
				}
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/chat/userSettings.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			var i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/actions/chat/constants.ts");
			const l = Object(s.a)("USER_SETTINGS__FETCH_PENDING"),
				p = Object(s.a)("USER_SETTINGS__FETCH_FAILURE"),
				b = "USER_SETTINGS__UPDATE_SUCCESS",
				f = Object(s.a)(b),
				h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					e(l());
					const s = await Object(o.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(f({
							invitePolicy: u.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, y = Object(s.a)("USER_SETTINGS__SAVE_PENDING"), m = Object(s.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const p = n(),
						{
							invitePolicy: b
						} = e,
						h = Object.keys(u.a).find(e => u.a[e] === b);
					if (h) {
						t(y());
						const e = await Object(o.e)(h, l());
						if (Object(d.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(c.n)(t)
							}))(h)(p)), e.ok) {
							const e = u.a[h];
							t(f({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: i.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(m(e.error))
					}
				}, v = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					await Object(o.d)(r(), [])
				}
		},
		"./src/reddit/actions/comment/list.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				o = "COMMENTLIST__UNMARKED_END",
				c = Object(r.a)(a),
				i = Object(r.a)(o),
				d = (e, t) => async (n, r) => {
					const a = r();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? n(i({
						listingKey: e
					})) : Object(s.a)(a, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/commentsListTruncated/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "COMMENTS_LIST__EXPANDED",
				s = "COMMENTS_LIST__TRUNCATED"
		},
		"./src/reddit/actions/connection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "CONNECTION__GO_ONLINE",
				s = "CONNECTION__GO_OFFLINE",
				a = "CONNECTION__HIDE_BANNER"
		},
		"./src/reddit/actions/cooldownTime.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts");
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
			var o = e => Object(s.a)(e, {
					...a
				}),
				c = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const d = "FETCH_COOLDOWN_TIMER__PENDING",
				u = "FETCH_COOLDOWN_TIMER__SUCCESS",
				l = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(d),
				b = Object(r.a)(u),
				f = Object(r.a)(l),
				h = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(h),
				m = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(i.Q)(s),
						d = !!Object(c.b)(s),
						{
							expiresAt: u,
							api: {
								pending: l
							}
						} = s.cooldownTimer,
						h = u <= Date.now();
					if (!a || !r || !h || !d || l) return;
					e(p());
					const m = await o(r());
					if (m.ok && m.body) {
						const t = m.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(b())
					} else e(f({
						error: null == m ? void 0 : m.error
					}))
				}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return T
			}));
			var r = n("./node_modules/@sentry/minimal/esm/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const i = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var d = async (e, t) => Object(a.a)(e, {
				...c,
				variables: i(t)
			}), u = n("./node_modules/fbt/lib/FbtPublic.js"), l = n("./src/reddit/models/Toast/index.ts"), p = n("./node_modules/reselect/es/index.js"), b = n("./src/reddit/constants/experiments.ts"), f = n("./src/reddit/helpers/chooseVariant/index.ts"), h = n("./src/reddit/selectors/user.ts");
			const y = Object(p.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: h.Q,
				experimentName: b.Lb
			}), e => e === b.id);
			var m = n("./src/reddit/actions/toaster.ts");
			const g = "SUBREDDIT_COUNTRY_SITE__LOADED",
				v = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				O = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				E = Object(s.a)(g),
				_ = Object(s.a)(O),
				I = Object(s.a)(v),
				S = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var c;
					if (!e) return;
					const i = await (async (e, t) => Object(a.a)(e, {
							...o,
							variables: {
								subredditId: t
							}
						}))(s(), e),
						d = i.body;
					i && i.ok && d && t(E({
						subredditId: e,
						subredditCountrySite: null === (c = d.data) || void 0 === c ? void 0 : c.subredditInfoById.countrySiteSettings
					}))
				}, j = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					if (!e) return;
					const o = await d(a(), {
						subredditId: e,
						countryCode: t.countryCode,
						languageCode: t.languageCode
					});
					if (!o.ok) return n(Object(m.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const c = o.body;
					n(_({
						subredditId: e,
						subredditCountrySite: c.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, T = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					if (!e || !y(s())) return;
					const c = {
							subredditId: e,
							countryCode: "",
							languageCode: t
						},
						i = await d(o(), c);
					if (i.ok) {
						const t = i.body;
						n(_({
							subredditId: e,
							subredditCountrySite: t.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else r.l(e => {
						e.setExtra("subredditCountryLanginfo", c), r.c(i.error)
					})
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/postCreation/general.ts"),
				a = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts");
			var o = n("./src/lib/initializeClient/installReducer.ts");
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER":
						return !0;
					case "CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER":
						return !1;
					default:
						return e
				}
			};
			Object(o.a)({
				features: {
					shouldTryToShowCrosspostModal: c
				}
			});
			const i = Object(r.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				d = Object(r.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				u = e => async (t, n) => {
					const r = n();
					if (!Object(a.b)(r)) return;
					const o = e.title,
						c = Object(a.d)(e),
						i = Object(a.c)(e);
					t(Object(s.j)(o, c, i, t => {
						const n = e.belongsTo.id === t.id,
							r = "isCrosspostDestination" in t && t.isCrosspostDestination;
						return n || !r
					}))
				}
		},
		"./src/reddit/actions/dismissedTruncationList/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "DISMISSED_TRUNCATION_LIST__ADD_SUBREDDIT_ID"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				a = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				o = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			}));
			const r = 120,
				s = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				a = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				c = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "p", (function() {
				return F
			})), n.d(t, "l", (function() {
				return G
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "n", (function() {
				return $
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "o", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/forEach.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/lib/uploadToS3/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(c.a)(Object(i.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: o.jb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const n = a()(e, (e, n) => ("snoomojis" !== n && (t = n), a()(e, (t, n) => {
					e[n] = {
						name: n,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: n[t],
						snoomojis: n.snoomojis
					}
				}
			})(e.body)), e));
			var p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/imageUploads.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/getGenericUploadError.ts"),
				y = n("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/models/Emoji/index.ts"),
				v = n("./src/reddit/models/Image/index.tsx"),
				O = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/emojis.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const I = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				S = Object(p.a)(I),
				j = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				T = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				w = Object(p.a)(j),
				D = Object(p.a)(T),
				P = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				N = Object(p.a)(A),
				x = Object(p.a)(C),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				L = Object(p.a)(k),
				U = e => ({
					text: r.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: r.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: F(e)
				}),
				M = e => {
					let {
						imageData: t,
						subredditId: n
					} = e;
					return async (e, r, s) => {
						const a = r(),
							l = Object(_.S)(a, {
								subredditId: n
							}).name;
						e(Object(b.k)(t));
						const p = t.file,
							f = await Object(m.h)(p),
							h = await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [u.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.jb.POST,
								data: {
									filepath: n,
									mimetype: r
								}
							}))(s.apiContext(), l, p.name, f);
						let y = !1;
						if (h.ok) {
							const n = await (async (e, t, n) => Object(d.a)(n, t))(s.apiContext(), h.body.s3UploadLease, p);
							if (n.ok) {
								if (!r().imageUploads[t.id]) return Object(v.d)(t), !1;
								const s = decodeURIComponent(n.body.PostResponse.Location),
									a = h.body.websocketUrl,
									o = Object(v.n)(t, s, a);
								e(Object(b.j)(o)), y = !0
							} else {
								const r = Object(v.k)(t, n.error);
								e(Object(b.i)(r))
							}
						} else {
							const n = Object(v.k)(t, h.error);
							e(Object(b.i)(n))
						}
						return y
					}
				},
				B = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: d,
						emojiName: l,
						settings: p
					} = e, h = Object(y.a)(a.url), m = r(), g = Object(_.S)(m, {
						subredditId: d
					}).name, O = await (async (e, t, n, r, s) => Object(c.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: o.jb.POST,
						data: {
							s3_key: n,
							name: r,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), g, h, l, p);
					if (!O.ok) {
						const r = Object(v.k)(a, O.error);
						n(Object(b.i)(r)), n(Object(f.f)(U(e))), t && t.close()
					}
					return O.ok
				}, F = e => async (t, n, r) => {
					const {
						imageData: s,
						subredditId: a,
						emojiName: o,
						settings: c
					} = e;
					if (t(Object(b.k)(s)), !s.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let i;
					const d = new WebSocket(s.websocketUrl);
					return d.onopen = async () => {
						i = await B(e, d)(t, n, r)
					}, d.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							i = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(s, e);
							t(Object(b.l)(n));
							const d = Object(g.e)(o, n.url, a, c);
							t(S(d)), t(G(a))
						} else {
							const n = Object(h.a)(o),
								r = Object(v.k)(s, n);
							t(Object(b.i)(r)), t(Object(f.f)(U(e)))
						}
						d.close()
					}, d.onerror = n => {
						i = !1;
						const r = Object(h.a)(o),
							a = Object(v.k)(s, r);
						t(Object(b.i)(a)), t(Object(f.f)(U(e))), d.close()
					}, i
				}, G = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(E.a)(a, e)) return;
					const o = Object(_.S)(a, {
						subredditId: e
					}).name;
					t(R(e));
					const c = await l(s(), o);
					if (c.ok) {
						const n = c.body;
						t(N({
							subredditId: e,
							data: n
						}))
					} else t(x({
						subredditId: e,
						error: c.error
					}))
				}, q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					n().emojis[e] || await t(G(e))
				}, H = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.S)(l, {
							subredditId: t
						}).name,
						b = await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.jb.DELETE,
							type: "json"
						}))(d(), e, p);
					if (b.ok) {
						n(w({
							emojiName: e,
							subredditId: t
						})), n(f.f({
							kind: O.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(D(b.error)), n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.S)(l, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.jb.POST,
							data: {
								subreddit: t,
								enable: n
							}
						}))(d(), p, t)).ok) {
						n(L({
							subredditId: e,
							emojisEnabled: t
						}))
					} else n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(V), $ = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.S)(l, {
							subredditId: e
						}).name;
					(await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: o.jb.POST,
						data: n
					}))(d(), p, t)).ok ? n(Q({
						subredditId: e,
						emojiCustomSize: t
					})) : n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, K = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(K), Y = (e, t, n, s) => async (a, d, l) => {
					let {
						apiContext: p
					} = l;
					const b = d(),
						h = Object(_.S)(b, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: o.jb.POST,
						data: {
							name: t,
							post_flair_allowed: r.postFlairAllowed,
							user_flair_allowed: r.userFlairAllowed,
							mod_flair_only: r.modFlairOnly
						}
					}))(p(), e, h, n)).ok ? (a(z({
						emojiName: e,
						isSnoomoji: t,
						settings: n,
						subredditId: s
					})), a(f.f({
						kind: O.b.SuccessCommunityGreen,
						text: r.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.f({
						kind: O.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/experiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			n("./src/reddit/endpoints/user/index.ts"), n("./src/reddit/models/Post/index.ts"), n("./src/reddit/selectors/telemetry.ts");
			const s = "EXPERIMENTS__REQUEST_LOADED",
				a = (Object(r.a)("EXPERIMENTS__REQUEST_PENDING"), Object(r.a)("EXPERIMENTS__REQUEST_FAILED"), Object(r.a)(s), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				o = Object(r.a)(a)
		},
		"./src/reddit/actions/exportImportStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/StructuredStyles/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(a.a)(l),
				h = Object(a.a)(p),
				y = Object(a.a)(b),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				O = e => async (t, a) => {
					t(f());
					const o = a(),
						i = Object(u.S)(o, {
							subredditId: e
						}).name,
						l = o.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, i);
					b.ok ? (t(h()), t(Object(c.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(b.error)), t(Object(c.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, E = e => async (t, a) => {
					t(m());
					const u = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(g()), t(Object(c.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(o.d)(Object(i.j)(l.attributes)))) : (t(v(l.error)), t(Object(c.f)({
						kind: d.b.Error,
						text: r.fbt._("Sorry, theme failed to import", null, {
							hk: "4BqW32"
						})
					})))
				}
		},
		"./src/reddit/actions/flairManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				s = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
		},
		"./src/reddit/actions/global/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "LOCAL_STORAGE_LOADED"
		},
		"./src/reddit/actions/googleOneTap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = "GOOGLE_ONE_TAP_ENABLED",
				l = Object(r.a)(u),
				p = () => async (e, t) => {
					const n = t(),
						r = Object(d.Q)(n),
						s = Object(i.b)(n);
					r && Object(i.d)(s) && e(l())
				}, b = () => async (e, t) => {
					const n = t(),
						r = Object(d.Q)(n),
						a = Object(i.b)(n),
						o = !!Object(c.a)(n);
					r || o || !Object(i.e)(a) && !Object(i.d)(a) || e(Object(s.f)())
				}, f = e => {
					Object(o.d)(e, {
						experimentName: a.vb
					})
				}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return T
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				a = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				m = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				_ = "GOVERNANCE__TRANSFER_SUCCESS",
				I = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				S = "GOVERNANCE__WALLETS_FETCH_PENDING",
				j = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				T = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/redditGQL/operations/PollVote.json"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var f = n("./src/reddit/endpoints/governance/wallet.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/models/Vote/index.ts"),
				m = n("./src/reddit/selectors/crypto/points.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const O = Object(s.a)(g.b),
				E = Object(s.a)(g.c),
				_ = Object(s.a)(g.e),
				I = (Object(s.a)(g.f), Object(s.a)(g.g), Object(s.a)(g.h)),
				S = Object(s.a)(g.i),
				j = Object(s.a)(g.j),
				T = Object(s.a)(g.k),
				w = Object(s.a)(g.q),
				D = Object(s.a)(g.r),
				P = Object(s.a)(g.s),
				A = Object(s.a)(g.t),
				C = Object(s.a)(g.u),
				R = Object(s.a)(g.v),
				N = Object(s.a)(g.w),
				x = Object(s.a)(g.x),
				k = (e, t) => async (n, r, s) => {
					let a, {
							apiContext: o,
							gqlContext: i
						} = s,
						f = r().polls.models[e];
					if (n(j({
							pollId: e
						})), (a = f.type === l.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(i(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(o(), f.subredditId, e, t)).ok) {
						if (f.type === l.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(_({
								pollId: f.id,
								optionId: t,
								options: e
							}))
						} else n(T(a.body));
						const s = r();
						if ((f = s.polls.models[e]) && Object(l.d)(f)) {
							const {
								postId: e
							} = f, t = s.posts.models[e];
							t && t.voteState === y.a.notVoted && n(Object(c.kb)(e))
						}
					} else n(S({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(v.a)(n, a.error || a.errors[0].messsage)
				}, L = (e, t) => async (n, s, c) => {
					let {
						apiContext: u
					} = c;
					var l;
					n(P());
					const p = s().transfers.communityPoints.contentId || void 0,
						f = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(u(), {
						...e,
						contentId: p
					});
					f.ok ? (n(A({
						...f.body,
						subredditId: e.subredditId
					})), n(Object(i.f)({
						kind: h.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(a.a)(e.amount)), r.fbt._param("tokenName", (null === (l = Object(m.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(w({
						error: f.error
					})), Object(v.a)(n, f.error))
				}, U = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(R());
					const a = await Object(f.a)(s(), e);
					a.ok ? t(N(a.body)) : t(C({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			}));
			const r = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				s = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				i = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				d = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "IMAGE_OCR_ALT_TEXT__LOADED",
				s = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inAppNotifications/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "IN_APP_NOTIFICATIONS__SHOULD_HIDE"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/post/index.tsx");
			const a = "TRACKING_CROSSPOSTS_LOADED",
				o = Object(r.a)(a),
				c = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const c = await Object(s.c)(a(), {
						postId: e
					});
					if (c.ok) {
						const {
							isTrackingCrossposts: n
						} = c.body.data.postInfoById;
						t(o({
							[e]: n
						}))
					}
				}
		},
		"./src/reddit/actions/langSite/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "LANG_SITE_BANNER_CLOSED",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/leaderboard/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				s = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				a = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "LINKED_POSTS__POSTS_LOADED",
				s = "LINKED_POSTS__POSTS_FAILED",
				a = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return s
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "t", (function() {
				return o
			})), n.d(t, "u", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "y", (function() {
				return T
			})), n.d(t, "v", (function() {
				return w
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "d", (function() {
				return A
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				s = "MULTIREDDIT__MORE_POSTS_LOADED",
				a = "MULTIREDDIT__MORE_POSTS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				i = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				f = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				m = "MULTIREDDIT__EDIT_FAILURE",
				g = "MULTIREDDIT__EDIT_PENDING",
				v = "MULTIREDDIT__EDIT_SUCCESS",
				O = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				E = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				T = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var A;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(A || (A = {}))
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notifications/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "PUSH__GET_PREFERENCES_PENDING",
				s = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				o = "PUSH__SET_PREFERENCES_PENDING",
				c = "PUSH__SET_PREFERENCES_LOADED",
				i = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			const r = "INBOX_NOTIFICATIONS__PENDING",
				s = "INBOX_NOTIFICATIONS__LOADED",
				a = "INBOX_NOTIFICATIONS__FAILED",
				o = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				c = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				i = "INBOX_NOTIFS__MARK_AS_READ",
				d = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				u = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/nps.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			var d = n("./node_modules/@r/frames/compiled.js"),
				u = n("./node_modules/lodash/debounce.js"),
				l = n.n(u),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const n = l()((function() {
							t && t.contentWindow && d.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), d.listen("embedjail"), d.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var r;
								r = e.detail, t.style.width = r.dimensions.width, t.style.height = r.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", n)
							})), d.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), d.stopListening("asknicely"), window.removeEventListener("resize", n), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && d.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const b = "NPS__URL_PENDING",
				f = "NPS__URL_LOADED",
				h = "NPS__URL_FAILED",
				y = Object(r.a)(b),
				m = Object(r.a)(f),
				g = Object(r.a)(h);
			let v = !1;
			const O = () => async (e, t, n) => {
				const r = t();
				if (r.nps.pending) return;
				if (v) return;
				e(y());
				const d = r.platform.currentPage && r.platform.currentPage.queryParams.feature || "",
					u = !!r.user.account,
					l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.jb.GET,
						traceRequestName: "get_nps_survey"
					}))(n.apiContext(), d, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(m(t)), p(t.dest), v = !0) : e(g())
				} else e(g())
			}
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "NSFW_LINKED_POSTS__POSTS_LOADED",
				s = "NSFW_LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/page.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return T
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/pageTitle/index.ts"),
				c = n("./src/config.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/endpoints/me/index.ts"),
				l = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${c.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				f = Object(i.a)(p.b),
				h = Object(i.a)(p.a);
			var y = n("./src/reddit/actions/redditEmbed.ts"),
				m = n("./src/reddit/actions/users.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				v = n("./src/lib/makeListingKey/index.ts"),
				O = n("./src/lib/matchRoute/index.ts");
			const E = e => async t => {
				await t(Object(y.c)(e, !0))
			}, _ = () => async e => {
				await e((() => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const s = t(),
						a = await Object(u.a)(r());
					if (a.ok && a.body)
						if (a.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(a.body));
					else Object(l.a)(e, s);
					else e(h(a.error))
				})())
			}, I = (e, t, n) => async (o, c, i) => {
				let {
					routes: d
				} = i;
				const u = c(),
					l = (t || u.platform.currentPage).routeMatch.match,
					p = Object(O.a)(l.url, d);
				if (!p) return;
				const b = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Nb.INDEX || p.route.meta.name === a.Nb.MULTIREDDIT || p.route.meta.name === a.Nb.SUBREDDIT)) b ? window.open(l.url) : n ? o(Object(r.b)(l.url)) : await o(p.route.action(l, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (b) window.open(t);
					else if (n) o(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.W.HOT);
						await o(Object(r.b)(t)), o(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, S = () => async (e, t) => {
				const n = t();
				e(d.m({
					title: o.b()
				})), Object(g.Q)(n) || await e(m.t())
			}, j = () => async e => e(d.m({
				title: o.b()
			})), T = e => async (t, r) => {
				const s = r();
				t(d.m({
					title: o.k()
				})), Object(g.Q)(s) || await t(m.t());
				const a = Object(g.Q)(s);
				if (e.queryParams.thanks && a) {
					const e = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted),
						r = await n.e("GoldPurchasePaymentActions").then(n.bind(null, "./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts")).then(e => e.openPremiumPurchaseModal);
					setTimeout(() => {
						t(r()), t(e({
							confirmed: !1
						}))
					}, 1e3)
				}
			}
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "APPEAL_PAGE_LOADED",
				s = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return R
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/difference.js"),
				a = n.n(s),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = n("./src/redditGQL/operations/UpdateSubredditChatSettings.json");
			var h = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				y = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Event.ts");
			var g = n("./src/reddit/models/ChatSettingsPage/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/chat.ts"),
				E = n("./src/reddit/selectors/chatSettingsPage.ts");
			const _ = "FETCH_CHAT_SETTINGS__LOADED",
				I = "FETCH_CHAT_SETTINGS__FAILED",
				S = "FETCH_CHAT_SETTINGS__PENDING",
				j = "UPDATE_CHAT_SETTINGS__LOADED",
				T = Object(i.a)(_),
				w = Object(i.a)(I),
				D = Object(i.a)(S),
				P = Object(i.a)(j),
				A = e => async (t, n) => {
					const r = {
						subredditId: e
					};
					return !!Object(E.b)(n(), r) || (t(D(r)), !1)
				}, C = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = {
						subredditId: e
					};
					if (await t(A(e))) return;
					let o = null;
					const i = await b(s(), a);
					if (i.ok) {
						const t = i.body || {},
							r = t.data && t.data.subredditInfoById,
							s = r && r.chatSettings,
							c = !Object(O.a)(n(), a),
							d = Object(g.c)(s, e, c);
						o = {
							...a,
							chatSettings: d
						}
					}
					if (o) t(T(o));
					else {
						const n = i.error || {
							type: c.I.UNKNOWN_ERROR
						};
						t(w({
							...a,
							error: n
						})), d.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: i.body,
								responseOk: i.ok
							}), d.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, R = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					if (await s(A(e))) return [];
					let l, p = !1;
					const b = a()(n, t),
						f = Object(g.b)(b);
					if (f && f.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: f
							},
							n = await h(d(), {
								input: t
							});
						if (n.ok) {
							const e = (n.body || {}).data.updateSubredditChatSettings;
							p = !!e && e.ok
						} else l = n && n.error || {
							type: c.I.UNKNOWN_ERROR
						}
					}
					return p ? (s(P({
						subredditId: e,
						chatSettings: n
					})), s(x(t, b)), n) : (l && s(w({
						subredditId: e,
						error: l
					})), s(P({
						subredditId: e,
						chatSettings: t
					})), s(Object(u.f)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: v.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, N = {
					start_chatting_opt_out: (e, t, n) => ({
						source: m.b.Chat,
						action: m.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(y.gb)(e),
						setting: {
							oldValue: t,
							value: n
						},
						...Object(y.n)(e)
					})
				}, x = (e, t) => async (n, r) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const n = N[t.settingId],
								s = e.find(e => e.settingId === t.settingId);
							if (n && s) {
								const e = n(r(), s.state, t.state);
								Object(o.a)(e)
							}
						}
					})
				}
		},
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PROFILE_MOD_SETTINGS_LOADED", (function() {
				return u
			})), n.d(t, "profileModSettingsRequested", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/actions/profile/index.ts"),
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/helpers/trackers/screenview.ts"),
				i = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(r.a)(u),
				p = e => async (t, n) => {
					const r = [t(s.A()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const u = Object(d.k)(n());
					u ? (await t(Object(a.b)(Object(i.e)(u))), t(l()), Object(c.p)(n(), !0)) : Object(o.a)(t, n())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "REPORT_PAGE__FAILED",
				s = "REPORT_PAGE__PENDING",
				a = "REPORT_PAGE__LOADED",
				o = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				s = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/me/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/UserDataExportEligibility.json"),
				c = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(r.a)(u),
				f = Object(r.a)(l),
				h = Object(r.a)(p),
				y = () => async (e, t, n) => {
					let {
						apiContext: r,
						gqlContext: u
					} = n;
					const l = t(),
						p = Object(i.k)(l),
						y = Object(d.b)(l);
					if (p && y.success) return;
					e(b());
					const m = await Object(s.a)(r());
					if (!m.ok || !m.body) return void e(h(m.error));
					if (!m.body.account) return void Object(c.a)(e, l);
					const g = await (e => Object(a.a)(e, {
						...o
					}))(u());
					if (!g.ok) return void e(h());
					const v = m.body,
						O = g.body;
					e(f({
						account: v.account,
						userDataExportEligibility: O.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "POLLS__POLL_CREATION_UPDATED",
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return N
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "d", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/actions/upload.ts"),
				l = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/helpers/imagePreview/index.ts"),
				m = n("./src/reddit/helpers/media/index.ts"),
				g = n("./src/reddit/models/Upload/index.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/telemetry/index.ts");
			const E = e => ({
				...v.n(e),
				screen: v.Y(e),
				profile: v.Q(e),
				subreddit: v.gb(e)
			});
			var _ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				I = n("./src/reddit/models/Gold/Powerups/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/reddit/selectors/postCreations.ts"),
				D = n("./src/reddit/actions/postCreation/constants.ts"),
				P = n("./src/reddit/actions/postCreation/general.ts");
			const A = Object(i.a)(D.u),
				C = Object(i.a)(D.v),
				R = Object(i.a)(D.t),
				N = e => async (t, n) => {
					t(A());
					const r = e.map(e => {
						let {
							url: n,
							uploadKey: r
						} = e;
						const s = Object(m.b)(Object(m.d)(n), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(r);
					const s = n().uploads,
						a = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== g.a.SUCCESS);
					t(a ? R(a.error) : C())
				}, x = (e, t) => ({
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
			const k = "RTE",
				L = "GALLERY",
				U = (e, t, n, s) => async (a, c, i) => {
					let {
						apiContext: d
					} = i;
					const l = Object(w.h)(c()),
						S = Date.now();
					let j = null,
						D = !1,
						P = !1,
						A = !1;
					const C = e => {
						if (!A && n && D) {
							A = !0;
							const r = c(),
								s = Date.now() - S,
								a = Object(h.c)(h.a.PostComposer);
							P ? (async e => {
								let {
									state: t,
									uploadKey: n,
									assetId: r,
									isCanceled: s,
									fileSource: a,
									uploadDuration: o,
									correlationId: c
								} = e;
								const i = t.uploads[n],
									d = s || i.status === g.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: p,
										error: b
									} = i,
									f = p.mimetype || u.type,
									h = f.startsWith("video/"),
									y = i.status === g.a.SUCCESS;
								let m = "";
								b ? m = JSON.stringify(b) : d && (m = "canceled");
								const _ = {
									width: p.width,
									height: p.height,
									duration: p.videoDuration && Math.round(1e3 * p.videoDuration)
								};
								Object(O.a)({
									source: "post_composer",
									action: "upload",
									correlationId: c,
									noun: h ? "video" : "image",
									...E(t),
									actionInfo: {
										...v.d(t),
										success: y,
										...m ? {
											reason: m
										} : {}
									},
									media: {
										mimetype: f,
										uploadDuration: o,
										source: a,
										fileName: u.name,
										size: u.size,
										type: h ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...l ? {
											url: l
										} : {},
										..._
									}
								})
							})({
								state: r,
								uploadKey: t,
								assetId: j,
								isCanceled: e,
								fileSource: n,
								uploadDuration: s,
								correlationId: a
							}) : _.D(r, t)
						}
					};
					return await a(Object(u.l)(e, t, async i => {
						D = !0, Object(u.k)(i.id, () => {
							C(!0)
						});
						const {
							error: h,
							metadata: g
						} = await async function(e, t, n) {
							const s = n && n.allowedPostTypes,
								a = n && n.name,
								c = await Object(m.h)(t) || t.type,
								i = Object(m.c)(t) || void 0;
							if (!i) return x("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: i,
								mimetype: c
							};
							if (!c || !Object(m.j)(c)) return {
								error: {
									type: o.T
								}
							};
							if (c.startsWith("image/")) {
								if (s && !s.images) {
									const e = r.fbt._("Images are not allowed in r/{subredditName}", [r.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return x(o.T, e)
								}
								if ("image/gif" === c) {
									if (t.size > o.Z) return x(o.L)
								} else if (t.size > o.bb) return x(o.R);
								const e = await Object(y.a)(i);
								d.width = e.width, d.height = e.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(T.p)(e, {
										subredditId: n.id,
										benefit: I.a.HdVideo
									}),
									l = c ? 2 * o.fb : o.fb;
								if (t.size > l) return x(o.oc);
								let p;
								try {
									p = await Object(m.i)(i, !0)
								} catch (u) {
									return x(o.T)
								}
								if (s) {
									const {
										videos: e,
										images: t
									} = s;
									if (t && !e && p.duration > o.gb) {
										const e = r.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [r.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return x(o.T, e)
									}
									if (!t && !e) {
										const e = r.fbt._("Videos are not allowed in r/{subredditName}", [r.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return x(o.T, e)
									}
								}
								const b = c ? 2 * o.eb : o.eb;
								if (p.duration > b) {
									const e = r.fbt._("Video is too long. Maximum video length is {duration} minutes.", [r.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return x(o.T, e)
								}
								if (p.duration < o.mb) {
									const e = r.fbt._("Video is too short. Minimum video length is {duration} seconds.", [r.fbt._param("duration", o.mb.toString())], {
										hk: "49PSW8"
									});
									return x(o.T, e)
								}
								if (0 === p.height || 0 === p.width) {
									const e = r.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return x(o.T, e)
								}
								if (p.height < o.nb || p.width < o.ob) {
									const e = r.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [r.fbt._param("min_video_width", o.ob.toString()), r.fbt._param("min_video_height", o.nb.toString())], {
										hk: "2HSUGl"
									});
									return x(o.T, e)
								}
								if (t.size / p.duration < o.lb) {
									const e = r.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [r.fbt._param("min_bitrate", (o.lb / o.U).toString())], {
										hk: "1ehgDE"
									});
									return x(o.T, e)
								}
								d.height = p.height, d.width = p.width, d.videoDuration = p.duration, d.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: d
							}
						}(c(), e, l);
						if (h || !g) return {
							error: h
						};
						a(Object(u.m)({
							key: t,
							metadata: {
								fileSource: n,
								...g
							}
						})), P = !0, s && s();
						const v = e.name,
							O = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: o.jb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(d(), v, g.mimetype);
						return O.ok ? (j = O.body.asset.asset_id, {
							uploadLease: O.body.args
						}) : {
							error: O.error || void 0
						}
					}, !0)), C(!1), c().uploads[t] || null
				}, M = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n().uploads[e];
					a && !Object(g.c)(a) && await t(U(a.file, a.key, a.metadata.fileSource, void 0))
				}, B = (e, t, n) => async (s, o) => {
					const i = e.map((e, r) => new Promise(async r => {
							const o = Object(g.d)(n, a()().slice(-6));
							await s(U(e, o, t, () => r({
								uploadKey: o,
								isValid: !0
							}))), r({
								uploadKey: o,
								isValid: !1
							})
						})),
						u = await Promise.all(i),
						l = u.map(e => e.uploadKey);
					return s(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, s) => {
							const {
								uploads: a
							} = s(), o = e.map(e => a[e]).filter(e => e.status === g.a.FAILED && !e.metadata.mimetype).map(e => e.error), i = o.length > t ? t - 1 : o.length, u = o.length - i;
							o.slice(0, i).forEach(e => n(Object(d.f)({
								duration: d.a,
								kind: j.b.Error,
								text: Object(c.a)(e)
							}))), u > 0 && n(Object(d.f)({
								duration: d.a,
								kind: j.b.Error,
								text: r.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [r.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, F = (e, t) => async (n, s) => {
					const a = s(),
						o = Object(w.W)(a),
						{
							items: c
						} = o,
						i = !c.length && 1 === e.length,
						p = Object(w.N)(a) && !i;
					let b = !1,
						f = e;
					if (p) {
						if (Object(S.x)(o)) return void n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(m.m)(e.type)) && n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(m.l)(e.type));
						const e = Math.max(0, l.b - c.length);
						f.length > e && (n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("You have hit the limit of {images_limit} images", [r.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, n(Object(u.j)(L, !0));
					const h = await n(B(f, t, L));
					if (!h.length) return;
					const y = h.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						g = 0 === c.length;
					n(Object(P.d)({
						...o,
						items: b ? y : [...c, ...y],
						selectedKey: g ? h[0] : h[h.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return q
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "b", (function() {
				return X
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				c = n("./src/reddit/actions/governance/index.ts"),
				i = n("./src/reddit/actions/pages/subreddit.ts"),
				d = n("./src/reddit/actions/postDraft.ts"),
				u = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/urlRequested.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				b = n("./src/config.ts"),
				f = n("./src/lib/convertToCamelCase/index.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/reddit/endpoints/post/create.ts");
			var m = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				g = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				v = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				E = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				_ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				I = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				S = n("./src/reddit/models/Poll/index.ts"),
				j = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/User/index.ts"),
				w = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				D = n("./src/reddit/selectors/postCreations.ts"),
				P = n("./src/reddit/selectors/postDraft.ts"),
				A = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/models/Post/index.ts"),
				N = n("./src/reddit/models/ScheduledPost/index.ts"),
				x = n("./src/reddit/actions/postCreation/constants.ts"),
				k = n("./src/reddit/actions/postCreation/general.ts"),
				L = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			const U = Object(s.a)(x.w),
				M = Object(s.a)(x.P),
				B = Object(s.a)(x.o),
				F = Object(s.a)(x.y),
				G = Object(s.a)(x.cb),
				q = Object(s.a)(x.J),
				H = Object(s.a)(x.a),
				W = Object(s.a)(x.F),
				V = e => `/r/${e}/about/${N.r}`,
				Q = (e, t) => {
					const n = e || {
							duration: r.B,
							options: []
						},
						{
							govType: s,
							newSubreddit: a,
							newTopMod: o
						} = Object(D.u)(t),
						c = {
							...n
						};
					return s && (c.type = s), c.type === S.a.ReplaceTopMod ? (c.params = {
						userName: o
					}, c.options = S.f[S.a.ReplaceTopMod]()) : c.type === S.a.Spinoff ? (c.params = {
						subreddit: a
					}, c.options = S.f[S.a.Spinoff](a)) : c.options = c.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), c
				},
				$ = e => {
					const t = e.uploads,
						n = Object(D.W)(e),
						s = Object(D.a)(e),
						a = Object(D.gb)(e);
					if (s === r.Wb.POST) return p.a.getPendingThumbnailUploads(a, t);
					if (s === r.Wb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[j.n]) return [{
							...e.thumbnail,
							uploadKey: j.n
						}]
					}
				},
				K = (e, t) => async (n, s, a) => {
					let {
						apiContext: o
					} = a, c = s();
					const {
						pending: i
					} = c.creations.api.post.submit, u = Object(P.g)(c);
					if (i || u) return;
					n(W(e)), c = s();
					const l = Object(D.a)(c),
						p = v.d.rteVideoPoster(c),
						b = $(c),
						f = l === r.Wb.MEDIA;
					b && (p || f) && (await n(L.f(b)), $(s())) || (e === j.r.Draft ? await n(Object(d.r)(t.draftId)) : e === j.r.ScheduledPost && Object(A.r)(c) ? await n(z(t)) : e === j.r.ScheduledPost ? await n(Y(t)) : await n(X(t)))
				}, z = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						i = Object(D.eb)(o, e),
						d = Object(D.h)(o),
						p = Object(A.r)(o);
					if (!(i && d.id && c && Object(E.f)(p))) return;
					const b = d.id,
						f = Object(A.a)(o, {
							subredditId: b,
							scheduledPostId: p
						});
					if (f && Object(a.a)(Object(I.r)(f)(o)), t(U(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: h,
						polls: y
					} = Object(D.u)(o), v = Q(y, o), O = {
						...Object(m.e)({
							poll: h ? v : void 0,
							submission: i,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: p
						})
					}, _ = await Object(g.a)(s(), O);
					if (_.ok) return t(Object(u.e)({
						subredditId: d.id
					})), void t(Object(l.a)(V(d.name), !1));
					const S = _.error;
					t(B(S))
				}, Y = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						i = Object(D.eb)(o, e),
						d = Object(D.h)(o),
						p = Object(A.b)(o);
					if (!i || !d.id || !c) return;
					if (t(U(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: b,
						polls: f
					} = Object(D.u)(o), h = Q(f, o), y = {
						duration: h.duration,
						options: h.options
					}, g = {
						...Object(m.d)({
							poll: b ? y : void 0,
							submission: i,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: p
					}, v = await Object(m.a)(s(), g);
					if (v.ok) {
						t(Object(u.e)({
							subredditId: d.id
						}));
						const e = v.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(I.o)(Object(O.d)(e))(o)), void t(Object(l.a)(V(d.name), !1))
					}
					const E = v.error;
					t(B(E))
				}, X = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const d = n(),
						u = Object(D.eb)(d, e),
						{
							isPoll: p,
							polls: m
						} = Object(D.u)(d),
						g = Q(m, d);
					if (!u) return;
					if (t(U(u)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					let O;
					const E = p && v.d.spPolls(d);
					if ((O = E ? await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(h.a)(e, {
									method: r.jb.POST,
									endpoint: `${b.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: n,
										subredditId: s,
										...Object(f.a)(Object(y.d)(t))
									}
								}).then(async e => {
									const n = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										r = await Object(y.e)(n, t);
									if (r.ok) {
										return {
											body: {
												...r.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: r.body,
										ok: !1,
										status: e.status
									}
								})
							}(a(), u, g) : p ? await Object(y.b)(a(), {
								...u,
								kind: j.p.POLL,
								poll: g
							}) : u.kind === j.p.GALLERY ? await Object(y.a)(a(), u) : await Object(y.c)(a(), u)).ok) {
						const e = Object(C.k)(d),
							n = O.body;
						t(M({
							draftId: u.draftId,
							response: n
						})), E && t(Object(c.c)({
							poll: n.poll
						}));
						const r = Object(w.b)(d);
						u.kind !== j.p.LINK && u.kind !== j.p.RICH_TEXT && u.kind !== j.p.MARKDOWN || p || !r || t(Object(o.c)());
						const s = (n.path || `/user/${Object(T.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(i.subredditInvalidateListing)(u.destSubreddit.name)), t(Object(l.a)(s, !1))
					} else {
						if (p) {
							const e = O.error;
							t(F(e))
						}
						const e = O.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(H()) : e.type === r.I.VALIDATION_ERROR ? t(G(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(q(e)) : t(B(e))
					}
					const I = Object(k.o)(u.kind),
						S = O.ok && O.body && O.body.id && Object(R.t)(O.body.id),
						P = n();
					_.B(P, I, S, e.correlationId)
				}
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/crowdControl/index.ts");
			const a = "POST_LEVEL_CC_LOADED",
				o = Object(r.a)(a),
				c = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const c = await Object(s.a)(a(), e);
					if (c.ok) {
						const n = c.body.data.postInfoById.crowdControlLevel;
						t(o({
							[e]: n
						}))
					}
				}
		},
		"./src/reddit/actions/product.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				o = n("./src/reddit/endpoints/governance/products/badges.ts");
			const c = "PRODUCT__BADGE_PURCHASE_OPENED",
				i = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				d = "PRODUCT__BADGE_PURCHASE_FAILURE",
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				b = "PRODUCT__FETCH_PENDING",
				f = (Object(r.a)(c), Object(r.a)(i)),
				h = Object(r.a)(d),
				y = Object(r.a)(u),
				m = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(b), e => {
					let {
						productId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: c
						} = r;
						const i = n(),
							d = i.products.models[t],
							u = i.user.account,
							l = !!i.products.api.purchase.pending[t];
						if (d && d.price && !l) {
							e(y({
								productId: t
							}));
							const n = await Object(o.c)(c(), {
								price: d.price,
								products: [{
									productId: t,
									quantity: "1"
								}],
								subredditId: d.subredditId
							});
							let r;
							if (n.ok && u && (r = await Object(a.c)(c(), d.subredditId, u.id)), n.ok) {
								if (r && r.ok) {
									const {
										badges: t,
										userOwnedBadges: s
									} = r.body;
									e(f({
										product: d,
										badges: t,
										userOwnedBadges: s,
										wallet: n.body.wallet
									}))
								}
							} else e(h({
								productId: t,
								error: n.error
							})), Object(s.a)(e, n.error)
						}
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./src/lib/asyncActions/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/constants/euCookiePolicy.ts"),
				o = n("./node_modules/ts-error/lib/cjs.js"),
				c = n.n(o);
			class GraphQLRequestError_GraphQLRequestError extends c.a {
				constructor(e) {
					super(`An error occurred during a GraphQL request. The following response was received:\n\n${JSON.stringify(e,void 0,2)}`), this.response = e
				}
			}
			var i = n("./src/lib/reCaptchaEnterprise/index.ts"),
				d = n("./src/lib/sentry/index.ts");

			function u(e) {
				return t => async (n, r, s) => {
					const a = r();
					if (e(a)) return t(n, r, s)
				}
			}
			var l = n("./node_modules/lodash/every.js"),
				p = n.n(l),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./node_modules/os-browserify/browser.js"),
				h = n.n(f);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				m = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				g = void 0 === h.a.homedir ? "" : h.a.homedir();
			const v = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? v(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(y);
							if (null === t || !t[1]) return !0;
							const n = t[1];
							return !n.includes(".app/Contents/Resources/electron.asar") && !n.includes(".app/Contents/Resources/default_app.asar") && !m.test(n)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(y, (e, t) => e.replace(t, t.replace(g, "~"))) : e).join("\n")
					}(e.stack)) : String(e)).join("\n");
					super(t = "\n" + function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
						const n = {
							indent: " ",
							includeEmptyLines: !1,
							...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
						};
						if ("string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
						if ("number" != typeof t) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
						if ("string" != typeof n.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);
						if (0 === t) return e;
						const r = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(r, n.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var O = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/redditGQL/operations/VerifyRecaptchaToken.json");
			class MissingDataError_MissingDataError extends c.a {
				constructor() {
					super("Missing data in GraphQL response")
				}
			}
			class RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError extends c.a {
				constructor() {
					super("GraphQL request failed without errors")
				}
			}
			var _ = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/featureFlags/utils.ts"),
				S = n("./src/reddit/helpers/chooseVariant/index.ts"),
				j = n("./src/reddit/selectors/meta.ts");
			const T = e => _.d.reCaptchaEnterprise(e) && !Object(j.d)(e),
				w = e => !!Object(S.c)(e, {
					experimentEligibilitySelector: Object(I.d)(Object(I.b)(...a.d)),
					experimentName: b.Ge
				}),
				D = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = () => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(D.requested());
					try {
						await i.b.loadScript(), e(D.succeeded())
					} catch (t) {
						throw e(D.failed()), t
					}
				}),
				A = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = e => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
					t(A.requested());
					try {
						const n = await i.b.execute(e);
						return t(A.succeeded({
							token: n
						})), n
					} catch (n) {
						throw t(A.failed()), n
					}
				}),
				R = Object(r.b)("SEND_RECAPTCHA_TOKEN"),
				N = e => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.send === r.a.New && e.tracking.reCaptchaEnterprise.execute === r.a.Succeeded && e.tracking.reCaptchaEnterprise.load === r.a.Succeeded], t => t(e)))(async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					t(R.requested());
					try {
						await (async (e, t) => {
							const n = await Object(O.a)(e, {
								...E,
								variables: {
									input: {
										token: t
									}
								}
							});
							if (!n.ok) throw new GraphQLRequestError_GraphQLRequestError(n);
							if (!("data" in n.body)) throw new MissingDataError_MissingDataError;
							const {
								ok: r,
								errors: s
							} = n.body.data.verifyRecaptchaToken;
							if (s && s.length > 0) throw new AggregateError_AggregateError(s);
							if (!r) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(R.succeeded())
					} catch (a) {
						throw t(R.failed()), a
					}
				}),
				x = (e, t) => Object(I.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.a.PageLoad;
					return u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async (t, n) => {
						const r = n();
						try {
							await t(P());
							const n = await t(C({
								action: x(e, r)
							}));
							n && await t(N(n))
						} catch (a) {
							if (a instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof a.response.error && null !== a.response.error && a.response.error.type === s.j) return;
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(a)
							})
						}
					})
				}
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = "REPORT__PENDING",
				s = "REPORT__LOADED",
				a = "REPORT__FAILED",
				o = "REPORT_FLOW__TARGET_SET",
				c = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				i = "REPORT_FLOW__OPEN_CATEGORY",
				d = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "REPORT_PAGE_RULES__LOADED"
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(s.a)(d),
				p = Object(s.a)(u),
				b = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.jb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = h(t.sitewide_rules);
						e(l(n))
					}
				}, f = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: a.jb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = h(t.livestream_rules);
						e(p(n))
					}
				}, h = e => {
					let t = [];
					if (e && e.length > 2) {
						const n = {
							reasonTextToShow: r.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && n.nextStepReasons && n.nextStepReasons.push(e[3]), t.push(n), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "m", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "w", (function() {
				return T
			})), n.d(t, "t", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = "SCHEDULED_POSTS_REQUESTED",
				a = "SCHEDULED_POSTS_LOADED",
				o = "STANDALONE_SCHEDULED_POSTS_LOADED",
				c = "RECURRING_SCHEDULED_POSTS_LOADED",
				i = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				b = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST__EDIT_MODAL_LOAD",
				y = "RECURRING_POST__EDIT_LOAD",
				m = "STANDALONE_POST__EDIT_LOAD",
				g = "SCHEDULED_POST__DELETE_SUCCESS",
				v = () => r.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				O = () => r.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				E = () => r.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				_ = () => r.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				I = () => r.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				S = () => r.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				j = () => r.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				T = () => r.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				w = () => r.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/index.ts"),
				i = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				b = n("./src/reddit/models/ScheduledPost/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/routes/postCreation/index.ts"),
				y = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const m = Object(o.a)(i.n),
				g = Object(o.a)(i.b),
				v = (e, t) => async (n, r, a) => {
					const o = Object(y.a)(r(), {
						scheduledPostId: t,
						subredditId: e
					});
					o && (await n(Object(s.b)(Object(h.c)(o.subreddit.name, o.collectionId))), n((Object(b.p)(o) ? g : m)(o)))
				}, O = (e, t) => {
					Object(b.p)(t) ? e(Object(c.d)({
						scheduledPost: t
					})) : e(Object(c.h)({
						scheduledPost: t
					}))
				}, E = (e, t, n) => async (s, o, h) => {
					let {
						gqlContext: m
					} = h;
					s(Object(c.g)());
					const g = Object(y.a)(o(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(b.p)(g) && Object(a.a)(Object(p.u)()(o(), g)), !g) return void s(Object(c.f)({
						message: r.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void O(s, g);
					const v = await Object(u.a)(m(), {
							...n,
							id: t
						}),
						_ = v.body;
					if (!(v.ok && _ && _.data && _.data.updateScheduledPost && _.data.updateScheduledPost.ok && _.data.updateScheduledPost.scheduledPost)) return s(Object(c.f)({
						message: v.error && v.error.fields && v.error.fields.length && v.error.fields[0].msg || r.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(d.f)(Object(d.e)(i.t(), f.b.Error, i.s(), E(e, t, n))));
					s(Object(d.f)(Object(d.e)(i.w(), f.b.SuccessCommunity))), O(s, Object(l.d)(_.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "b", (function() {
				return R
			}));
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = n("./src/telemetry/index.ts");
			const h = 25,
				y = 1e4,
				m = Object(s.a)(a.g),
				g = Object(s.a)(a.k),
				v = Object(s.a)(a.j),
				O = Object(s.a)(a.o),
				E = Object(s.a)(a.d),
				_ = Object(s.a)(a.f),
				I = Object(s.a)(a.m),
				S = Object(s.a)(a.a),
				j = Object(s.a)(a.c),
				T = Object(s.a)(a.e),
				w = Object(s.a)(a.h),
				D = (e, t) => {
					e(T()), e(Object(c.f)(Object(c.e)(a.r(), p.b.Error, a.s(), P(t))))
				},
				P = e => {
					let {
						subredditId: t,
						includeStandalone: n = {
							standaloneFirst: h
						},
						includeRecurring: r = {
							recurringFirst: y
						},
						...s
					} = e;
					return async (e, a, o) => {
						let {
							gqlContext: c
						} = o;
						if (Object(b.h)(a(), {
								subredditId: t
							})) return;
						e(m());
						const u = {
								subredditId: t,
								includeRecurring: r,
								includeStandalone: n,
								...s
							},
							l = await Object(i.b)(c(), u);
						Object(i.f)(l, u) ? C(e, Object(d.e)(l.body.data), u) : D(e, u)
					}
				},
				A = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n();
					if (!Object(b.h)(a, {
							subredditId: e
						})) return t(P({
						subredditId: e
					}));
					if (!Object(b.g)(a, {
							subredditId: e,
							type: l.f.standalonePosts
						})) return;
					const o = Object(b.c)(a, {
						subredditId: e,
						type: l.f.standalonePosts
					});
					if (!o) return;
					t(m());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: h,
								standaloneAfter: o
							}
						},
						u = await Object(i.b)(s(), c);
					u.ok ? C(t, Object(d.e)(u.body.data), c) : t(T())
				}, C = (e, t, n) => {
					Object(d.b)(t) ? e(_(t)) : Object(d.a)(t) ? e(S(t)) : Object(d.c)(t) ? e(I(t)) : D(e, n)
				}, R = (e, t) => async (n, s, a) => {
					const c = {},
						i = s();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							c[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							c.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(r.a)(e)
					}
					Object(f.a)(Object(u.t)(e, c[e], Object(l.p)(t))(i)), n(Object(o.a)(t.subreddit.id, t.id, c))
				}
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));
			var i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = n("./src/reddit/models/Search/index.ts");
			var b = (e, t) => {
				const n = {
					withAds: 1,
					ad: Object(c.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(i.a)(Object(d.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: o.jb.GET,
					data: n
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(f),
				y = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const o = await b(s(), e);
					if (o.ok) {
						const n = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const n = e.body.trending_searches.length;
								for (let r = 0; r < n; r++) {
									const n = e.body.trending_searches[r],
										s = n.results.data.children.length > 0 ? n.results.data.children[0].data : null,
										o = {
											id: a()(),
											post: s ? Object(l.a)(s) : null,
											rawQuery: n.query_string,
											searchQuery: n.display_string,
											section: p.c.trending,
											isWhitelisted: n.is_subreddit_whitelisted,
											subredditInfo: s ? {
												icon: s.sr_detail.community_icon || s.sr_detail.icon_img,
												displayText: s.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: n.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(o)
								}
							}
							return t
						})(o);
						return t(h({
							items: n,
							subplacement: e
						})), n
					}
					return null
				}
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "SHORTCUTS__ACTIVE_COMMENT_SET",
				s = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "LINKED_IDENTITY__ADD",
				s = "LINKED_IDENTITY__REMOVE"
		},
		"./src/reddit/actions/streaming/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "SUBREDDIT__STREAMING_MOD_SETTINGS_LOADED"
		},
		"./src/reddit/actions/streaming/modSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/streaming/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const p = Object(s.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				h = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(s.a)(b),
				m = Object(s.a)(f),
				g = Object(s.a)(h),
				v = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const d = Object(l.S)(n(), {
						subredditId: e
					});
					if (void 0 === d) {
						const e = r.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							n = Object(o.e)(e, u.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const b = await ((e, t) => Object(c.a)(e, {
						...i,
						variables: {
							subredditId: t
						}
					}))(a(), e);
					if (!b.ok) {
						const e = r.fbt._("Could not fetch settings for {subredditName}", [r.fbt._param("subredditName", d.name)], {
								hk: "2G8rnU"
							}),
							n = Object(o.e)(e, u.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const f = b.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: f.liveStreamingInfo
					})), {}
				}, O = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					await n(E(t, e, a())), n(v(t))
				}, E = (e, t, n) => async (n, s, a) => {
					let {
						gqlContext: i
					} = a;
					n(y({
						subredditId: e
					}));
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(i(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!l.ok || !l.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = l.error && l.error.fields ? l.error.fields[0].msg : r.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							s = Object(o.e)(t, u.b.Error);
						await n(Object(o.f)({
							...s,
							duration: o.a
						})), n(g({
							subredditId: e
						}))
					}
					const p = r.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						b = Object(o.e)(p, u.b.SuccessCommunity);
					await n(Object(o.f)({
						...b,
						duration: o.a
					})), n(m({
						subredditId: e
					}))
				}, _ = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = [...n.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await r(E(e, {
						whitelistedRedditors: c
					}, o())), await r(v(e))
				}, I = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = n.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await r(E(e, {
						whitelistedRedditors: c
					}, o())), await r(v(e))
				}
		},
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/subreddit/recommendations.ts");
			const a = (e, t) => async (n, r, a) => {
				let {
					gqlContext: o
				} = a;
				var i;
				const d = await Object(s.a)(o(), {
					subredditIds: [e],
					count: t
				});
				if (!d.ok) return;
				const u = d.body;
				(null === (i = u.data.subredditRecommendations.recommendations) || void 0 === i ? void 0 : i.length) && n(c({
					subredditId: e,
					relatedSubreddits: u.data.subredditRecommendations.recommendations.reduce((e, t) => {
						let {
							id: n
						} = t;
						return n && e.push(n), e
					}, [])
				}))
			}, o = "RELATED_SUBREDDITS__LOADED", c = Object(r.a)(o)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditsCarousel.json");
			const o = (e, t, n, r, o) => async (c, i, u) => {
				let {
					gqlContext: l
				} = u;
				var b, f;
				if (i().subreddits.carousel.pending) return;
				const h = await ((e, t) => Object(s.a)(e, {
					...a,
					variables: t
				}))(l(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: n || [],
					hasPostIds: r || !1,
					postIds: o || []
				});
				if (!h.ok) return;
				const y = h.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && c(d(null === (b = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === b ? void 0 : b.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (f = y.data) || void 0 === f ? void 0 : f.postsInfoByIds) && c(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, c = "SUBREDDITS_CAROUSEL__LOADED", i = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(c), u = (Object(r.a)(i), "POST_CAROUSEL__LOADED"), l = "POST_CAROUSEL__PENDING", p = Object(r.a)(u);
			Object(r.a)(l)
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				a = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return A
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "i", (function() {
				return G
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/postCreation/submit.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = n("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/modals.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const g = e => ({
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
			var v = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var E = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				I = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				D = n("./src/telemetry/index.ts"),
				P = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const A = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				C = "SUBREDDIT__CREATE_PENDING",
				R = "SUBREDDIT__CREATE_SUCCEEDED",
				N = "SUBREDDIT__CREATE_FAILED",
				x = "SUBREDDIT__CREATE_CLEARED",
				k = Object(a.a)(C),
				L = Object(a.a)(R),
				U = Object(a.a)(N),
				M = Object(a.a)(x),
				B = Object(a.a)(A),
				F = e => async (t, n, a) => {
					let {
						apiContext: v
					} = a;
					var O;
					const A = n(),
						{
							name: C,
							type: R,
							crosspostId: N
						} = e;
					if (Object(T.j)(A)) return;
					t(k({
						subredditName: C
					}));
					const x = await ((e, t) => Object(f.a)(Object(h.a)(e, [y.a]), {
						endpoint: Object(m.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: s.jb.POST,
						data: g(t)
					}))(v(), e);
					if (x.ok) {
						const n = x.body,
							a = n.fullname;
						Object(D.a)(Object(_.d)(R, e, a)(A)), t(L({
							subredditName: C
						}));
						const f = await Object(I.b)(A);
						if (N) {
							const e = Object(j.G)(A, {
								postId: N
							});
							t(Object(o.h)(e.title)), t(Object(o.g)({
								submissionType: s.Wb.CROSSPOST
							})), await t(Object(i.b)({
								destSubreddit: {
									...n,
									isProfile: !1
								},
								sourcePostId: N,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(N)
						}
						await t(Object(r.b)(`${n.path}`)), f ? f === p.ie.NewModule && t(Object(d.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(c.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(D.a)(Object(_.g)()(A))), Object(E.b)(E.a.SubredditCreation), t(Object(P.f)(a, null !== (O = Object(w.bb)(A)) && void 0 !== O ? O : Object(S.i)(A)))
					} else x.error && Object(D.a)(Object(_.h)(x.error.type, C)(A)), t(U({
						subredditName: C,
						error: x.error
					}))
				}, G = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n(),
						o = {
							name: e
						},
						c = await ((e, t) => Object(v.a)(e, {
							...O,
							variables: t
						}))(s(), {
							input: o
						});
					let i = null;
					if (c.ok) {
						i = c.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (i) {
						const n = {
							fields: [{
								field: i[0].field,
								msg: i[0].message
							}],
							type: i[0].code
						};
						t(U({
							subredditName: e,
							error: n
						})), n && Object(D.a)(Object(_.h)(n.type, e)(a))
					} else await t(M())
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				b = (Object(r.a)(u), Object(r.a)(l)),
				f = Object(r.a)(p),
				h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					await e(s.f());
					const {
						api: u,
						ids: l
					} = t().subreddits.crosspostable;
					if (u.pending || Object.keys(l).length) return;
					const p = await ((e, t) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.jb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (p.ok) {
						const n = t(),
							r = p.body && p.body.length ? p.body.map(e => Object(d.D)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(b({
							subredditIds: r
						}))
					} else e(f({
						error: p.error
					}))
				}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "SUBREDDIT_MENTION_LOADED",
				s = "SUBREDDIT__MODEL_SUCCEEDED",
				a = "SUBREDDIT__MODEL_PENDING",
				o = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/SubredditTopContent.json"),
				c = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const i = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(r.a)(i),
				p = Object(r.a)(d),
				b = Object(r.a)(u),
				f = e => async (t, n, r) => {
					const i = e.toLowerCase(),
						d = n(),
						{
							api: u,
							topContent: f
						} = d.subreddits;
					if (u.topContent.pending[i] || f[i]) return;
					t(l({
						subredditName: i
					})), t(Object(s.A)());
					const h = await ((e, t) => Object(a.a)(e, {
						...o,
						variables: t
					}))(r.gqlContext(), {
						subredditName: i
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const n = Object(c.c)(e);
							n && t(p({
								...n,
								subredditName: i
							}))
						}
					} else t(b({
						subredditName: i,
						error: h.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "THEME_CHANGED",
				a = (Object(r.a)(s), "BOOTUP_THEME"),
				o = Object(r.a)(a)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "TRACKING__VIEWPORT_DATA_LOADED",
				a = "TRACKING__VIEWPORT_DATA_UNLOADED",
				o = Object(r.a)(s);
			Object(r.a)(a)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				s = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				a = "SUBREDDIT__TRAFFIC_STATS_FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "j", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				a = n("./node_modules/uuid/v4.js"),
				o = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				y = "UPLOAD_CANCELED",
				m = "UPLOAD_REMOVED",
				g = Object(c.a)(u),
				v = Object(c.a)(l),
				O = Object(c.a)(p),
				E = Object(c.a)(b),
				_ = Object(c.a)(f),
				I = Object(c.a)(h),
				S = Object(c.a)(y),
				j = Object(c.a)(m),
				T = new Map,
				w = (e, t) => {
					const n = T.get(e) || [];
					n.push(t), T.set(e, n)
				},
				D = (e, t) => {
					const n = T.get(e);
					n && n.forEach(n => n(e, t)), T.delete(e)
				},
				P = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (a, c, u) => {
						let {
							apiContext: l
						} = u;
						const p = t;
						if (c().uploads[p] && Object(d.c)(c().uploads[p])) return;
						const b = o()(),
							f = () => {
								const e = c().uploads[p];
								return !e || e.id !== b || e.status === d.a.CANCELED
							};
						a(g({
							key: p,
							id: b,
							file: e
						}));
						const {
							uploadLease: h,
							error: y
						} = await n(c().uploads[p]);
						if (f()) return;
						if (y || !h) return void a(I({
							key: p,
							error: y
						}));
						let m;
						w(b, () => {
							m && m.abort()
						}), a(v({
							key: p
						}));
						const O = await Object(i.a)(e, h, e => (m = e, r && e.on("progress", e => {
							if (!f() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								a(E({
									key: p,
									progress: t
								}))
							}
						}), e));
						if (m = null, !f())
							if (O.ok) {
								const e = decodeURIComponent(O.body.PostResponse.Location);
								a(_({
									key: p,
									url: e
								}))
							} else {
								const e = s()(O, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								a(I({
									key: p,
									error: t
								}))
							}
					}
				},
				A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, r) => {
						const s = r().uploads[e];
						s && (D(s.id, t), n(t ? j({
							key: e
						}) : S({
							key: e
						})))
					}
				},
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, r) => {
						Object.keys(r().uploads).forEach(r => {
							r.startsWith(e) && n(A(r, t))
						})
					}
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/selectors/telemetry.ts");
			const u = "upvote_prompt";
			var l = n("./src/reddit/selectors/upvotePrompt.ts"),
				p = n("./src/telemetry/index.ts");
			const b = "INCREMENT_SEEN_COUNT_PER_SESS",
				f = (e, t, n) => async (a, o) => {
					const b = o(),
						f = Object(i.A)(),
						g = Date.now(),
						v = f && g - f < 18e4,
						O = Object(l.c)(b, {
							postId: e
						}),
						E = b.upvotePromptCountPerSess,
						_ = (() => {
							const e = Object(i.z)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !O || v || E >= 4 || _.length >= 1) return;
					const I = y(b, t);
					if (!I) return;
					a(Object(c.f)({
						text: I,
						buttonText: r.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${s.a.assetPath}/img/snoo-upvote.png`,
						duration: l.a,
						buttonAction: h(e),
						onClose: () => Object(p.a)((e => ({
							source: u,
							action: "click",
							noun: "close",
							...Object(d.n)(e)
						}))(b))
					}));
					const S = [..._, Date.now()].slice(Math.max(_.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(d.n)(e)
					}))(b)), Object(i.Eb)(), Object(i.Db)(S), a(m()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(d.n)(e)
					}))(n())), Object(l.c)(n(), {
						postId: e
					}) && t(Object(o.kb)(e))
				}, y = (e, t) => {
					return t ? r.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : r.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, m = Object(a.a)(b)
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				a = n("./node_modules/react-router-redux/es/index.js");
			const o = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, o, c) => {
					let {
						routes: i
					} = c;
					const d = o();
					Object(r.a)(e, i, d) ? n(Object(a.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/blockedRedditors.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/accounts/index.ts"),
				i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				b = "USER_BLOCK__FAILED",
				f = Object(s.a)(l),
				h = Object(s.a)(p),
				y = Object(s.a)(b),
				m = e => async (t, n, s) => {
					let {
						apiContext: u
					} = s;
					const l = n();
					if (l.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const p = await Object(c.a)(u(), e),
						b = `error-block-${e}`;
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(o.g(b)), t(o.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
								type: p.error ? p.error.type : "Unknown error",
								username: e
							},
							s = Object(d.d)(l) && "REBLOCK_RATE_LIMIT" === p.body.reason;
						t(y(n)), t(s ? o.f({
							id: b,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: m(e)
						}) : o.f({
							id: b,
							kind: i.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: m(e)
						}))
					}
				}, g = "USER_UNBLOCK__PENDING", v = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", E = Object(s.a)(g), _ = Object(s.a)(v), I = Object(s.a)(O), S = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					const l = n(),
						p = Object(u.k)(l),
						b = p ? p.id : void 0,
						f = l.user.blocked.data.filter(t => t.name === e)[0];
					b && (t(E({
						name: e
					})), (await Object(c.c)(d(), b, e)).ok ? (t(_({
						name: e
					})), f && f.id && t(Object(a.h)(f.id)), t(o.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(o.f({
						kind: i.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(I({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "h", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts");
			const i = "USER_WHITELIST__PENDING",
				d = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(s.a)(i),
				p = Object(s.a)(d),
				b = Object(s.a)(u),
				f = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(l());
					const d = await Object(o.e)(i(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", m = "USER_UNWHITELIST__FAILED", g = Object(s.a)(h), v = Object(s.a)(y), O = Object(s.a)(m), E = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(g({
						name: e
					})), (await Object(o.d)(i(), e)).ok ? (t(v({
						name: e
					})), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(O({
						name: e
					})), t(a.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}
		},
		"./src/reddit/actions/usernameAvailable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return f
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(r || (r = {}));
			const o = "USERNAME_AVAILABLE__AVAILABLE",
				c = "USERNAME_AVAILABLE__FAILURE",
				i = "USERNAME_AVAILABLE__PENDING",
				d = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(s.a)(o),
				l = Object(s.a)(c),
				p = Object(s.a)(i),
				b = Object(s.a)(d),
				f = e => {
					let {
						username: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: o
						} = s;
						const c = n().users.nameAvailable;
						if (!c[t] || c[t] === r.Error) {
							e(p({
								username: t
							}));
							const n = await Object(a.a)(o(), {
								username: t
							});
							n.ok ? n.body ? e(u({
								username: t
							})) : e(b({
								username: t
							})) : e(l({
								username: t
							}))
						}
					}
				}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(o.a)(null),
				u = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(a.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(c.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(i.b)(d(u))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Thumbnail/index.tsx"),
				c = n("./src/reddit/components/ClassicPost/index.m.less"),
				i = n.n(c);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: c,
					isMeta: d,
					post: u,
					redditStyle: l,
					removeLink: p,
					templatePlaceholderImage: b,
					thumbnailContainerClassName: f,
					url: h,
					usePreview: y
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.thumbnailContainer, t)
				}, s.a.createElement(o.a, {
					className: Object(a.a)(i.a.thumbnail, n),
					containerClassName: f,
					crosspost: r,
					forceShowNSFW: c,
					isMeta: d,
					post: u,
					redditStyle: l,
					removeLink: p,
					templatePlaceholderImage: b,
					url: p ? void 0 : h,
					usePreview: y
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				creatorStatsContainer: "_2I70Qhfz-GbGzP54PWXR3P",
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
				shouldShowOverflow: "_3FOlcZoWAvyAWZYSVd8-WD",
				shouldUseRoundedBorder: "_2g8Jz2obQVOELSfntlgVsJ",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModWelcomeTooltip/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModWelcomeTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MOD_WELCOME_TOOLTIP_ID", (function() {
				return v
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				m = n.n(y);
			const g = Object(u.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(o.e)(h.d),
					n = v,
					i = Object(o.d)(),
					u = e => {
						e.stopPropagation(), i(Object(d.h)({
							tooltipId: n
						}))
					};
				return Object(s.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(b.a)(), 500) : setTimeout(() => Object(b.b)(), 500)
				}, [i, e.isOpen]), t ? a.a.createElement(g, {
					className: m.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: n,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(c.a)(m.a.Overlay, {
							[m.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
					}, a.a.createElement("div", {
						className: Object(c.a)(m.a.DropdownPadding, {
							[m.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
					}), t)
				}, a.a.createElement("div", {
					className: m.a.TooltipContent
				}, a.a.createElement("div", {
					className: m.a.Title
				}, r.fbt._("Welcome to your community, r/{subredditName}!", [r.fbt._param("subredditName", t)], {
					hk: "e3rbC"
				})), a.a.createElement("div", {
					className: m.a.Description
				}, r.fbt._("We’ll walk you through how to get started here, and you can get more tips and advice through Reddit’s", null, {
					hk: "lffxe"
				}), " ", a.a.createElement("a", {
					className: m.a.modLink,
					style: {
						color: Object(f.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), a.a.createElement(l.t, {
					className: m.a.Button,
					onClick: u
				}, r.fbt._("Let's go", null, {
					hk: "4hWwxv"
				})))) : null
			})
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = 20,
				s = 180
		},
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/models/ScheduledPost/index.ts");
			const a = {
					frequency: s.d.Hourly,
					interval: 1,
					byMonthDays: [],
					byWeekDays: []
				},
				o = () => {
					const e = new Date;
					return e.setMinutes(60), {
						submitDate: Object(r.g)(e),
						timezoneName: Object(r.b)() || r.a,
						frequencyOption: null,
						recurrenceInfo: null
					}
				},
				c = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
					const r = Object(s.q)(e.getDay()),
						o = e.getDate();
					let c = n ? {
						...n
					} : null;
					switch (t) {
						case s.d.Monthly:
							c = {
								...a,
								...n,
								frequency: t,
								byMonthDays: [o]
							};
							break;
						case s.d.Weekly:
							c = {
								...a,
								...n,
								frequency: t,
								byWeekDays: [r]
							};
							break;
						case s.d.Daily:
						case s.d.Hourly:
							c = {
								...a,
								...n,
								frequency: t
							};
							break;
						case null:
							return null
					}
					return c
				}
		},
		"./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./src/reddit/constants/history.ts"),
				u = n("./src/reddit/helpers/clickSourceData/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/Flair/index.ts"),
				b = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = n.n(b),
				h = n("./node_modules/uuid/v4.js"),
				y = n.n(h),
				m = n("./src/reddit/helpers/ensureEndSlash/index.ts"),
				g = n("./src/reddit/helpers/trackers/searchResults.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/components/SearchDropdown/index.m.less"),
				_ = n.n(E);
			const I = () => ({
				[d.b.ClickSource]: u.a.TYPEAHEAD,
				[d.b.ClickId]: y()()
			});

			function S(e) {
				let {
					className: t,
					focusedItem: n,
					item: d,
					indexOfItem: u,
					nightmode: b,
					subredditSuggestions: h,
					onSendSearchClickTypeaheadEvent: y,
					onSetRecentSearch: E,
					onClearSearchQuery: S,
					onCloseDropdown: j
				} = e;
				const T = Object(v.a)(),
					w = !d.isProfile || d.enableFollowers;
				Object(s.useEffect)(() => {
					const e = d.isProfile ? g.a.PEOPLE : g.a.SUBREDDIT,
						t = {
							displayQuery: d.searchQuery,
							rawQuery: d.rawQuery || d.searchQuery,
							searchQuery: d.searchQuery,
							structureType: O.c.Search
						};
					T(Object(g.w)(e, t, u))
				}, []);
				return a.a.createElement(c.a, {
					"aria-label": d.searchQuery,
					className: Object(o.a)(_.a.listItem, _.a.mTypeahead, f.a.item, t, {
						[_.a.mFocused]: !(!n || n.searchQuery !== d.searchQuery)
					}),
					onClick: () => {
						E(d), y(d.searchQuery, d, u, h), S(!1), j(!1)
					},
					key: d.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${Object(m.a)(d.isProfile?d.searchQuery.replace("u/","user/"):d.searchQuery)}`,
						state: I()
					}
				}, d.displayInfo && d.displayInfo.iconUrl ? a.a.createElement("div", {
					className: _.a.subredditIcon,
					style: {
						backgroundImage: `url('${d.displayInfo.iconUrl}')`
					}
				}) : a.a.createElement(l.a, {
					name: "community",
					isFilled: !b,
					className: Object(o.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: b
					})
				}), a.a.createElement("div", null, d.displayInfo && d.displayInfo.subredditOrProfileName && a.a.createElement("div", {
					className: Object(o.a)(_.a.listItemText, _.a.mTypeahead, f.a.text)
				}, d.displayInfo.subredditOrProfileName), a.a.createElement("div", null, d.displayInfo && null != d.displayInfo.subscribers && w && a.a.createElement("div", {
					className: Object(o.a)(_.a.listItemSubtext, f.a.subText)
				}, r.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [r.fbt._plural(d.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), d.displayInfo && d.displayInfo.isNSFW && a.a.createElement(i.b, {
					flair: {
						type: p.f.Nsfw,
						text: r.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}
		},
		"./src/reddit/components/SearchDropdown/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return J
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return ne
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/reddit/helpers/ensureEndSlash/index.ts"),
				l = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = n.n(p),
				f = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				y = n("./src/reddit/constants/history.ts"),
				m = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/Search/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./node_modules/uuid/v4.js"),
				j = n.n(S),
				T = n("./src/reddit/components/SearchDropdown/index.m.less"),
				w = n.n(T);
			const D = Object(o.a)(f.b);

			function P(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: o,
					nightmode: p,
					recentSearch: f,
					searchOriginPage: S,
					indexOfItem: T,
					toggleTooltip: P,
					onClearSearchQuery: A,
					onRemoveRecentSearch: C,
					onUpdateSearchQuery: R,
					onSendSearchClickRecentEvent: N,
					onCloseDropdown: x
				} = e;
				const k = Object(_.a)(),
					{
						nsfwSessionSetting: L,
						refreshNsfwSessionSettingExpiryTime: U
					} = Object(h.b)(),
					M = Object(a.e)(O.kb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: f.searchQuery,
						rawQuery: f.rawQuery || f.searchQuery,
						searchQuery: f.searchQuery,
						structureType: I.c.Recent
					};
					k(Object(E.w)(E.a.RECENT, e, T))
				}, []);
				const B = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery,
					{
						url: F,
						qs: G
					} = Object(m.a)({
						includeNsfwResults: M && L,
						multireddit: null,
						searchItem: f,
						searchOptions: {
							source: l.a.Recent
						},
						subreddit: null
					}),
					q = B(f);
				let H;
				o && (H = B(o));
				const W = f.isProfile || f.isSubreddit ? {
					[y.b.ClickSource]: "search_dropdown",
					[y.b.ClickId]: j()()
				} : void 0;
				return s.a.createElement(d.a, {
					"aria-label": f.searchQuery,
					className: Object(c.a)(w.a.listItem, b.a.item, n, {
						[w.a.mFocused]: !(!o || o.section !== v.c.recent || H !== q)
					}),
					onClick: () => {
						f.isTypeaheadSuggestion ? A() : R(f.searchQuery), N(f.searchQuery, f, T), x(), U()
					},
					key: q,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: F && Object(u.a)(F) || "",
						state: {
							...W,
							[y.b.SearchOriginPage]: S
						},
						search: G
					}
				}, f.displayInfo && f.isTypeaheadSuggestion ? f.displayInfo.iconUrl ? s.a.createElement("div", {
					className: w.a.subredditIcon,
					style: {
						backgroundImage: `url('${f.displayInfo.iconUrl}')`
					}
				}) : s.a.createElement(g.a, {
					name: "community",
					isFilled: !p,
					className: Object(c.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: p
					})
				}) : s.a.createElement(g.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: b.a.text
				}, q), s.a.createElement("div", {
					onMouseEnter: () => P(q),
					onMouseLeave: () => P(null),
					id: q
				}, s.a.createElement(g.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), C(f)
					}
				}), s.a.createElement(D, {
					className: w.a.fixedTextTooltip,
					isOpen: t === q,
					text: i.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: q,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var A = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				C = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				N = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				U = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				M = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function B(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: o,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: h,
					onSetRecentSearch: O,
					fireAdPixelsOfType: E
				} = e;
				const _ = Object(a.d)(),
					I = !(!o.post || !o.post.isSponsored),
					{
						url: S,
						qs: j
					} = Object(m.a)({
						multireddit: null,
						searchItem: o,
						searchOptions: {
							source: I ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					T = s.a.createElement(d.a, {
						id: r,
						"aria-label": o.searchQuery,
						className: Object(c.a)(w.a.listItem, w.a.mTrending, b.a.item, b.a.trending, t, {
							[w.a.mFocused]: !(!n || n.section !== v.c.trending || o.searchQuery !== n.searchQuery)
						}),
						onClick: () => {
							f(o.searchQuery);
							const e = (() => {
								const {
									post: e,
									subredditInfo: t,
									subredditOccurrences: n,
									...r
								} = o;
								return r
							})();
							if (O(e), Object(L.e)(L.a.SearchResults), (e => _((t, n) => Object(M.u)({
									state: n(),
									trendingSearch: e,
									telemetrySource: U.a.Typeahead
								})))(o), I) {
								const {
									post: e
								} = o;
								e && E(e, N.a.Click)
							}
							h()
						},
						key: `trending-${o.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: S && Object(u.a)(S) || "",
							state: {
								[y.b.SearchOriginPage]: p
							},
							search: j
						}
					}, s.a.createElement("div", {
						className: b.a.trendingContent
					}, I && s.a.createElement("div", {
						className: b.a.promoted
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(g.a, {
						name: "popular",
						className: w.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(C.a, {
						className: Object(c.a)(w.a.listItemText, w.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: C.b.Small
					}, o.searchQuery)), o.post && s.a.createElement("div", {
						className: w.a.postTitle
					}, o.post.title)), o.subredditInfo && s.a.createElement(x.a, {
						className: Object(c.a)(b.a.relatedSubredditMetaData, w.a.listItemSubtext, {
							[w.a.mNoPostTitle]: !o.post
						}),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", o.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), o.post && Object(k.a)(o.post) && s.a.createElement(A.a, {
						post: o.post,
						removeLink: !0,
						usePreview: I
					}));
				return I ? s.a.createElement(R.a, {
					post: o.post
				}, T) : T
			}
			var F = n("./src/reddit/components/SearchDropdown/TypeaheadSuggestion.tsx"),
				G = n("./src/reddit/constants/zIndex.ts"),
				q = n("./src/reddit/controls/Dropdown/index.tsx"),
				H = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				W = n.n(H),
				V = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Q = n.n(V),
				$ = n("./src/lib/constants/index.ts"),
				K = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				z = n("./src/reddit/hooks/usePageLayer.ts");

			function Y(e) {
				let {
					searchOriginPage: t,
					searchItem: n,
					position: o,
					onTriggerSearch: u
				} = e;
				var l;
				const p = (null === (l = n.searchQuery) || void 0 === l ? void 0 : l.trim()) || "",
					f = Object(_.a)(),
					v = Object(z.a)(),
					S = Object(a.e)(e => Object(K.ab)(e, {
						pageLayer: v
					})),
					j = Object(a.e)(e => Object(K.s)(e, {
						pageLayer: v
					})),
					T = Object(a.e)(e => Object(K.e)(e, {
						pageLayer: v
					})),
					D = Object(a.e)(O.kb),
					{
						nsfwSessionSetting: P
					} = Object(h.b)(),
					{
						url: A,
						qs: C
					} = Object(m.a)({
						subreddit: j,
						multireddit: T,
						searchItem: n,
						shouldSearchSubreddit: S,
						includeNsfwResults: D && P
					}),
					R = {
						id: (null == j ? void 0 : j.id) || "",
						q: n.searchQuery,
						eventType: S ? "subreddit" : void 0,
						t: "all",
						type: S ? [$.bc.Posts] : [$.bc.Posts, $.bc.Subreddits, $.bc.Users],
						restrict_sr: S ? "1" : ""
					};
				return Object(r.useEffect)(() => {
					f(Object(E.s)(R, S, o, v || void 0))
				}, []), s.a.createElement(d.a, {
					onClick: function(e) {
						f(Object(E.o)(I.a.FullSearchButton, R, S, U.a.Typeahead, v || void 0)), u(e)
					},
					to: {
						pathname: A,
						state: {
							[y.b.SearchOriginPage]: t
						},
						search: C
					},
					className: Object(c.a)(w.a.listItem, b.a.item),
					"data-testid": "search-trigger-item"
				}, s.a.createElement(g.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: b.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", p)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = "SearchDropdown", Z = "SearchDropdownContent", ee = 5, te = Object(o.a)(q.a);

			function ne(e) {
				let {
					container: t,
					trendingItems: n,
					isTrendingPending: o,
					isOpen: i,
					isTypeaheadPending: d,
					itemList: u,
					recentSearches: l,
					typeaheadSuggestions: p,
					focusedItemIndex: f,
					nightmode: h,
					searchItem: y,
					searchOriginPage: m,
					isFixed: g = !0,
					isOverlay: v = !0,
					fireAdPixelsOfType: O,
					onClearSearchQuery: E,
					onClose: _,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSendSearchClickTypeaheadEvent: j,
					onSetRecentSearch: T,
					onUpdateSearchQuery: D
				} = e;
				var A;
				const C = Object(a.d)(),
					[R, N] = Object(r.useState)(null),
					x = function(e) {
						const [t, n] = Object(r.useState)(null), s = Object(r.useCallback)(() => {
							e && n(e.offsetWidth)
						}, [e]);
						return Object(r.useLayoutEffect)(s, [s]), Object(r.useEffect)(() => (window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), [s]), t
					}(t),
					k = n.slice(0, ee),
					[L, q] = Object(r.useState)(new Array(ee).fill(!1)),
					H = !!(null === (A = y.searchQuery) || void 0 === A ? void 0 : A.trim()),
					V = d || o,
					$ = 0 === p.length && !d && (!H || f >= 0),
					K = Object(r.useMemo)(() => p.filter(e => e.isSubreddit), [p]),
					z = {
						width: x ? `${x}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				g && (z.zIndex = G.g), Object(r.useLayoutEffect)(() => {
					if (!o && i && document.getElementById(Z)) {
						const e = ne();
						q(e), k.forEach((t, n) => {
							e[n] && C((e, n) => Object(M.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: U.a.Typeahead
							}))
						})
					}
				}, [o, i, C]);
				const ne = () => {
					const e = new Array(k.length).fill(!1);
					return k.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${J}-${t.id}`),
								s = document.getElementById(Z);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				return s.a.createElement(te, {
					className: Object(c.a)(w.a.dropdown, W.a.listContainer),
					id: Z,
					isFixed: g,
					isOpen: i,
					isOverlay: v,
					tooltipId: J,
					noFocus: !0,
					style: z,
					onDropdownMounted: () => {
						if (!o && k.length > 0) {
							const e = ne();
							q(e), k.forEach((t, n) => {
								e[n] && C((e, n) => Object(M.v)({
									state: n(),
									trendingSearch: t,
									telemetrySource: U.a.Typeahead,
									offset: l.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = ne();
						k.forEach((t, n) => {
							L[n] || !e[n] || t.post && t.post.isSponsored || C((e, n) => Object(M.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: U.a.Typeahead,
								offset: l.length
							}))
						}), q(e)
					}
				}, $ && s.a.createElement(s.a.Fragment, null, l.map((e, t) => s.a.createElement(P, {
					searchOriginPage: m,
					activeTooltipId: R,
					focusedItem: u[f],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: E,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSetRecentSearch: T,
					onUpdateSearchQuery: D,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: h,
					onCloseDropdown: _
				})), !o && n.length && s.a.createElement("div", {
					className: Object(c.a)(b.a.title, w.a.listItemTitle, {
						[w.a.mWithBorder]: !!l.length
					})
				}, X._("Trending today", null, {
					hk: "3nAMpY"
				})), k.map(e => s.a.createElement(B, {
					id: `${J}-${e.id}`,
					key: e.id,
					focusedItem: u[f],
					searchOriginPage: m,
					fireAdPixelsOfType: O,
					onCloseDropdown: _,
					onSetRecentSearch: T,
					onUpdateSearchQuery: D,
					trendingItem: e
				}))), V && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(w.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(w.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(w.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(w.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(w.a.loadingItem, Q.a.item)
				})), H && !d && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(F.a, {
					focusedItem: p[f],
					indexOfItem: t,
					subredditSuggestions: K,
					item: e,
					key: e.id,
					onClearSearchQuery: E,
					onSendSearchClickTypeaheadEvent: j,
					onSetRecentSearch: T,
					nightmode: h,
					onCloseDropdown: _
				})), s.a.createElement(Y, {
					key: y.searchQuery,
					searchOriginPage: m,
					searchItem: y,
					position: p.length,
					onTriggerSearch: _
				})))
			}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return D
			}));
			var r = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(r),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/constants/comments.ts"),
				u = n("./src/reddit/models/Subreddit/index.ts"),
				l = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/cache/index.ts"),
				y = n("./src/lib/makeCommentsPageKey/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditForking.ts"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx");
			const v = Object(a.a)({
					resolved: {},
					chunkName: () => "SubredditForkingCTA",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditForkingCTA").then(n.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx"
					}
				}),
				O = [{
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
				E = "subreddit-forking.dismissals",
				_ = (e, t) => {
					const n = Object(b.k)(e),
						r = Object(y.a)(t.postId),
						s = Object(p.G)(e, t),
						a = Object(l.o)(e, {
							...t,
							commentsPageKey: r
						}),
						o = Object(l.k)(e, {
							...t,
							commentsPageKey: r
						}).reduce((t, n) => {
							var r;
							const s = Object(l.l)(e, {
								commentLink: n
							});
							return n.type !== d.a.Comment && 0 !== (null === (r = a[n.id]) || void 0 === r ? void 0 : r.depth) || t.push(s), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == n ? void 0 : n.id) === s.authorId || !!o.find(e => e.authorId === (null == n ? void 0 : n.id))
				},
				I = e => {
					let t = Object(h.b)(E);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(h.d)(E, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(b.Q)(e)) return !1;
					if (null === (n = Object(h.b)(E)) || void 0 === n ? void 0 : n[t.postId]) return !1;
					const r = Object(p.G)(e, t),
						s = Object(p.U)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == s ? void 0 : s.type) !== u.f.Public || s.isNSFW || s.isQuarantined || (null == r ? void 0 : r.isNSFW) || (null == r ? void 0 : r.source)) return !1;
					const a = O.find(e => {
						let {
							low: t,
							high: n
						} = e;
						return n >= s.subscribers && s.subscribers > t
					});
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!_(e, t)
				},
				j = () => Object(f.c)({
					shouldLoadCTA: S
				}),
				T = Object(i.b)(j),
				w = e => {
					let {
						shouldLoadCTA: t,
						postId: n,
						sendEvent: r
					} = e;
					const [s, a] = Object(o.useState)(!1);
					return s || !t ? null : c.a.createElement(v, {
						onClose: () => {
							I(n), a(!0), r(Object(m.b)(n))
						},
						postId: n
					})
				},
				D = Object(o.memo)(T(Object(g.c)(w)))
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/components/BlankPost/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts");
			const i = Object(c.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(o.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = i(d)
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = n.n(p),
				f = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(f);
			const y = Object(a.b)(() => Object(o.c)({
				subredditsByName: Object(i.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(l.x)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(c.a)(b.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(u.b, {
				className: Object(c.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(u.b, {
				className: Object(c.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && s.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), u = async (e, t, n) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), l = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.jb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.jb.POST
			}), b = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(i.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.jb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/userSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				l = n("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				b = e => Object(a.a)(Object(c.a)(e, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.GET
				}),
				f = async (e, t) => Object(a.a)(Object(c.a)(t, [d.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), h = (e, t) => {
					const n = {
						channels: t
					};
					return Object(o.a)(e, {
						...i,
						variables: {
							input: n
						}
					})
				}, y = e => Object(o.a)(e, {
					...u,
					variables: {
						input: {
							customType: l.b.Direct
						}
					}
				})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r, s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/CrowdControlLevelInfo.json");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(r || (r = {}));
			const o = (e, t) => Object(s.a)(e, {
				...a,
				variables: {
					postId: t
				}
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, n) {
				const a = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					o = await a;
				if (o.ok) {
					const e = {},
						t = {},
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, n) {
				const a = await Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (a.ok) {
					const e = {},
						t = [],
						n = a.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
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

			function c(e, t, n) {
				let a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: a
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "n", (function() {
				return g
			}));
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function p(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const b = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				y = e => ({
					type: "subscribe",
					subredditId: e
				}),
				m = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.jb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: r
						}
					}
					return e
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.jb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/create.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/name/index.ts"),
				l = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/PostCreationForm/index.ts"),
				h = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function y(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const m = e => {
					switch (e.kind) {
						case f.p.CROSSPOST:
							return f.p.CROSSPOST;
						case f.p.LINK:
							return f.p.LINK;
						case f.p.POLL:
							return f.p.POLL;
						case f.p.MEDIA:
							return e.makeGif ? f.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				g = e => {
					switch (e.kind) {
						case f.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.p.LINK:
						case f.p.MEDIA:
							return {
								url: e.url
							};
						case f.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.p.POLL:
							return e.poll.type === p.a.Prediction ? {
								duration: 999999,
								end_timestamp: y(e.poll.endDate),
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
				v = e => {
					const t = Object(u.g)(e.destSubreddit.name);
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
						discussion_type: e.isChatPost ? b.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== f.p.POLL ? {
							kind: m(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...g(e),
						...e.kind === f.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(d.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === f.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				O = e => {
					const t = /comments\/(\w+)\/.*$/.exec(e),
						n = t && t[1];
					return n ? `${s.Ib.Post}_${n}` : ""
				},
				E = async (e, t) => {
					if (!e.ok) return Object(l.b)(e);
					const n = e.body.json.data;
					let s = n.url;
					s || t.kind !== f.p.MEDIA || (s = await ((e, t) => new Promise(n => {
						const r = new WebSocket(e),
							s = e => {
								r.close(), clearTimeout(a), n(e)
							},
							a = setTimeout(() => {
								s("")
							}, t);
						r.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							s(n)
						}, r.onerror = e => {
							s("")
						}
					}))(n.websocket_url, 3e4));
					const a = n.id || O(s),
						o = Object(r.parse)(s).path,
						c = n.drafts_count;
					return {
						...e,
						body: {
							id: a,
							path: o,
							draftsCount: c
						}
					}
				}, _ = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.jb.POST,
					data: v(t),
					type: "json"
				}).then(e => E(e, t)), I = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: s.jb.POST,
					data: {
						...v(t),
						items: t.galleryItems.map(e => ({
							caption: e.caption,
							outbound_url: e.url,
							media_id: e.assetId
						}))
					},
					type: "json"
				}).then(e => E(e, t));
			t.c = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: v(t)
			}).then(async e => await E(e, t))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Post/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				i = n("./src/reddit/models/ScheduledPost/index.ts"),
				d = n("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = n("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(r.a)(e, {
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
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				b = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, i.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, i.f.recurringPosts))(e))),
				f = e => {
					let {
						poll: t,
						schedule: n,
						submission: r,
						subredditId: a
					} = e;
					return {
						collectionId: r.collectionId || "",
						discussionType: r.isChatPost ? o.b.Chat : o.b.Comment,
						isContestMode: r.isContestMode,
						isPostAsMetaMod: r.isPostAsMetaMod,
						isSpoiler: r.isSpoiler,
						isNsfw: r.isNSFW,
						poll: t && E(t),
						title: r.title,
						isOriginalContent: r.isOC,
						flair: r.flair ? {
							id: r.flair.templateId,
							text: Object(s.g)(r.flair)
						} : {},
						sticky: r.sticky,
						subredditId: a,
						suggestedCommentSort: r.suggestedSort,
						isSendReplies: r.sendReplies,
						...h(n),
						...v(r),
						assetIds: O(r)
					}
				},
				h = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				y = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				m = e => {
					let {
						poll: t,
						schedule: n,
						scheduledPostId: r,
						submission: s,
						subredditId: a
					} = e;
					const o = f({
						poll: t,
						schedule: n,
						submission: s,
						subredditId: a
					});
					return {
						id: r,
						...o,
						flair: Object.keys(o.flair || {}).length ? {
							...o.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				g = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				v = e => {
					switch (e.kind) {
						case c.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case c.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case c.p.LINK:
							return {
								content: {}, link: {
									url: g(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				O = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(a.d)(n)
					}
					return t
				},
				E = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				_ = (e, t) => Object(r.a)(e, {
					...d,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/redditGQL/operations/UpdateScheduledPost.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(s.a)(e, {
				...r,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			const c = (e, t) => Object(s.a)(Object(a.a)(e, [o.a]), {
				method: r.jb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/thumbnails.ts"),
				s = n("./src/reddit/models/Media/index.ts");

			function a(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(s.E)(e.media))
			}
		},
		"./src/reddit/helpers/ensureEndSlash/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => e.endsWith("/") ? e : `${e}/`
		},
		"./src/reddit/helpers/getSearchUrl/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/search/index.ts"),
				s = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/models/Search/index.ts");

			function o(e) {
				let t, {
					subreddit: n,
					multireddit: o,
					searchItem: c,
					searchOptions: i,
					shouldSearchSubreddit: d,
					includeNsfwResults: u,
					searchType: l
				} = e;
				const p = [];
				if (c.isTypeaheadSuggestion) t = `/${c.isProfile?c.searchQuery.replace("u/","user/"):c.searchQuery}`;
				else {
					if (p.push(`${s.r}=${Object(r.b)(c.rawQuery||c.searchQuery)}`), t = "/search/", c.section !== a.c.trending && c.section !== a.c.recent || i && i.source && p.push(`source=${i.source}`), n && d ? (t = `/r/${n.name}${t}`, p.push(`${s.u}=1`), p.push(`${s.C}=${n.isNSFW?"1":""}`)) : !n && c.subredditOrProfileRestrictedName && (t = `/${c.subredditOrProfileRestrictedName}${t}`, p.push(`${s.u}=1`)), o) {
						t = `/user/${o.url.split("/")[2]}/m/${o.name}${t}`, p.push(`${s.u}=1`), p.push(`${s.C}=${o.isNSFW?"1":""}`), p.push(`${s.l}=1`)
					}
					i && i.category && p.push(`${s.c}=${i.category}`), u && p.push(`${s.k}=1`), l && p.push(`${s.F}=${l}`)
				}
				return {
					url: t,
					qs: p.join("&")
				}
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			}));
			const r = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: b(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				s = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
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
							...r(e),
							...s(e)
						}
					}
				}),
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				c = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				i = e => o(e) && c(e),
				d = e => !o(e) && c(e),
				u = e => o(e) && !c(e),
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
				h = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : p(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/isEqual.js"),
				s = n.n(r),
				a = n("./node_modules/lodash/xorWith.js"),
				o = n.n(a);
			t.a = (e, t) => {
				const n = o()(e, t, s.a);
				return !(!n || 0 !== n.length)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts");
			const a = "https://js.stripe.com/v3/",
				o = "https://www.paypalobjects.com/api/checkout.js",
				c = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${r.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function i(e, t) {
				return t() ? Promise.resolve() : new Promise((n, r) => s.a.write(() => {
					t() && n();
					const s = document.head;
					let a = s.querySelector(`script[src='${e}']`);

					function o() {
						this.removeEventListener("load", o), this.removeEventListener("error", c), n()
					}

					function c() {
						this.removeEventListener("load", o), this.removeEventListener("error", c), a && s.removeChild(a), r()
					}
					a || ((a = document.createElement("script")).src = e, s.appendChild(a)), a.addEventListener("load", o), a.addEventListener("error", c)
				}))
			}

			function d() {
				return i(a, () => "undefined" != typeof Stripe)
			}

			function u() {
				return i(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(c).map(e => {
					const t = "__" + e;
					return i(c[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts");
			const a = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(a.map((function(e) {
					return e + ".reddit.com"
				}))).concat(a.map((function(e) {
					return e + ".reddit.local"
				}))),
				c = ["mod.reddit.com"],
				i = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: o.concat("redd.it"),
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
						hostnames: c,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: c,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = i[e];
				if (!i) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || o).indexOf(r.hostname)) return;
				const a = r.pathname.match(n.pathname);
				if (a) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = a[n + 1], e
						}), {})
					}
				}
			}

			function u(e) {
				return (e.match(new RegExp(s.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(i).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/onBeforeRequestFactory/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/addQueryParams/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/subreddit.ts"));
			const i = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				d = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				u = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				l = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var b = (e, t, n) => {
					const r = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (r.add("identity"), r.add("prefs"), r.add("prefsAccount")), (e => !i.test(e.pathname || ""))(t) && r.add("identity")), !e.live.isFrontpageLoaded && (e => l.test(e.pathname || ""))(t) && r.add("featuredLiveThread");
					const s = t.pathname || "";
					if (d.test(s) || u.test(s)) {
						const s = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, n),
							a = e.platform.currentPage,
							o = a && a.urlParams.subredditName,
							i = s || o || "",
							d = Object(c.D)(e, i);
						d && e.structuredStyles.models[d] || r.add("structuredStyles"), e.user.prefs.subreddit[d] || r.add("prefsSubreddit")
					}
					return [...r].join(",")
				},
				f = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: c
					} = n;
				if (`${c}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = Object(f.kb)(e.getState()) ? "1" : "";
					r.allow_over18 = s, r.include = b(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
				}
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					n = e % 100;
				return e + (t[(n - 20) % 10] || t[n] || t[0])
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/intlList/index.ts"),
				a = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/helpers/isArrayEqual.ts"),
				c = n("./src/reddit/helpers/ordinal/index.ts"),
				i = n("./src/reddit/models/ScheduledPost/index.ts");
			const d = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				u = (e, t) => {
					if (e && t) {
						const n = Object(a.f)(p(e, t)),
							s = d(n);
						return r.fbt._("At {time}", [r.fbt._param("time", s)], {
							hk: "25s5Tg"
						})
					}
					return r.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				l = e => e.slice(0, 5),
				p = (e, t) => `${e}T${l(t)}:00`,
				b = e => {
					const [t, n] = e.split("T");
					return [t, l(n)]
				},
				f = e => {
					const [t, n] = b(e);
					if (t && n) {
						const e = Object(a.f)(p(t, n));
						return d(e)
					}
					return ""
				},
				h = e => {
					const t = Object(a.d)(e);
					let n, r = e;
					if (t) {
						n = t.offset, r = `(GMT${Object(a.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: r,
						offset: n
					}
				},
				y = e => "string" == typeof e,
				m = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				g = e => {
					const t = (e => {
						const [t, n] = b(e);
						if (t && n) {
							return Object(a.f)(p(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === i.d.Hourly) return 2 === e.interval ? r.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? r.fbt._("Every {hour interval} hours", [r.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : r.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === i.d.Daily) return 2 === e.interval ? r.fbt._("Every other day at {start time}", [r.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? r.fbt._("Every {day interval} days at {start time}", [r.fbt._param("day interval", e.interval.toString()), r.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : r.fbt._("Every day at {start time}", [r.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === i.d.Weekly) {
						const n = (e => Object(s.c)(e.map(i.k).sort((e, t) => e - t).map(m), s.a.AND, s.b.COMMA))(e.byWeekDays);
						return 2 === e.interval ? r.fbt._("Every other week on {days of week } at {start time}", [r.fbt._param("days of week ", n), r.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? r.fbt._("Every {interval} weeks on {days of week} at {start time}", [r.fbt._param("interval", e.interval.toString()), r.fbt._param("days of week", n), r.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : r.fbt._("Every week on {days of week} at {start time}", [r.fbt._param("days of week", n), r.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => Object(s.c)(e.sort((e, t) => e - t).map(c.a), s.a.AND, s.b.COMMA))(e.byMonthDays);
					return 2 === e.interval ? r.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? r.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [r.fbt._param("interval", e.interval.toString()), r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : r.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				v = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = i.b);
					const n = Object(a.f)(e.publishAt),
						r = Object(i.q)(n.getDay()),
						s = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== r && (t = i.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== s && (t = i.b), {
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
				O = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const n in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(n)) {
							if (Array.isArray(e[n]) && (!Array.isArray(t[n]) || !Object(o.a)(e[n], t[n]))) return !1;
							if (e[n] !== t[n]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/trackers/commentList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
				Object(r.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...s.n(e),
					listing: s.y(e, t),
					subreddit: s.gb(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "A", (function() {
				return R
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "y", (function() {
				return B
			})), n.d(t, "x", (function() {
				return F
			})), n.d(t, "o", (function() {
				return G
			})), n.d(t, "r", (function() {
				return q
			})), n.d(t, "m", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return $
			})), n.d(t, "l", (function() {
				return K
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "h", (function() {
				return X
			})), n.d(t, "j", (function() {
				return J
			})), n.d(t, "k", (function() {
				return Z
			})), n.d(t, "i", (function() {
				return ee
			})), n.d(t, "d", (function() {
				return te
			})), n.d(t, "n", (function() {
				return ne
			})), n.d(t, "w", (function() {
				return re
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				i = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				u = n("./src/reddit/models/Search/index.ts"),
				l = n("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/trending.ts"),
				h = n("./src/reddit/selectors/widgets.ts"),
				y = n("./src/telemetry/index.ts"),
				m = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const g = "discovery_unit",
				v = (e, t, n) => ({
					...b.n(e),
					source: g,
					screen: b.Y(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				O = (e, t, n) => ({
					...v(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(y.a)(_(t)(e))
				},
				_ = (e, t) => n => O(n, e, t),
				I = (e, t, n, r) => "unitName" in t ? v(e, t, r) : ((e, t, n) => ({
					...b.n(e),
					source: "search",
					screen: b.Y(e),
					search: n ? {
						...b.Z(e, n, c.a.SERP),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				S = (e, t, n, s, a) => ({
					...I(e, t, s, a),
					action: "view",
					noun: r.ITEM_POST,
					post: b.H(e, n)
				}),
				j = e => {
					let {
						post: t,
						rawQuery: n,
						searchQuery: r
					} = e;
					return {
						displayQuery: decodeURIComponent(r),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: t && t.isSponsored ? b.c.PromotedTrend : b.c.Trending
					}
				};
			var T;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(T || (T = {}));
			const w = e => {
					Object(y.a)(C({
						...e,
						action: o.c.CLICK
					}))
				},
				D = e => {
					Object(y.a)(C({
						...e,
						action: o.c.VIEW
					}))
				},
				P = {
					[c.a.Popular]: T.POPULAR_CAROUSEL,
					[c.a.Typeahead]: T.SEARCH_DROPDOWN
				},
				A = {
					[c.a.Popular]: u.d.tile,
					[c.a.Typeahead]: u.d.dropdown
				},
				C = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: a,
						trendingSearch: o
					} = e;
					const c = P[a],
						i = A[a],
						u = Object(f.a)(s, i).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + n;
					return {
						...b.n(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: j(o),
						discoveryUnit: c === T.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(s, {
							paneName: c,
							position: u
						}),
						search: {
							originElement: c === T.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: s.platform.currentPage ? b.u(s.platform.currentPage) : void 0,
							query: o.rawQuery,
							structureType: b.c.Trending,
							impressionId: Object(l.a)(s) ? m.a.get(a) : void 0,
							queryId: b.ab(s, a)
						}
					}
				},
				R = (e, t, n, r, s, a, c) => {
					Object(y.a)({
						...b.n(e),
						...Object(i.l)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: a,
							discoveryUnit: t
						}),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				N = (e, t, n, r) => {
					Object(y.a)(S(e, t, n, r))
				},
				x = (e, t, n, r) => s => S(s, e, t, n, r),
				k = (e, t) => {
					Object(y.a)({
						...v(e, t),
						source: g,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				L = (e, t, n, r) => {
					Object(y.a)(U(t, n, r)(e))
				},
				U = (e, t, n, s) => a => {
					return {
						...I(a, e, n, s),
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_POST,
						post: b.H(a, t)
					}
				},
				M = (e, t, n, r) => s => a => Object(i.l)({
					state: a,
					postId: s,
					searchOptions: e,
					pageLayer: t,
					key: n,
					discoveryUnit: r
				}),
				B = (e, t, n, r) => s => a => Object(i.j)({
					action: o.c.CLICK,
					state: a,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				F = (e, t, n, r) => s => a => ({
					...Object(i.l)({
						state: a,
						postId: s,
						searchOptions: e,
						pageLayer: t,
						key: n,
						discoveryUnit: r
					}),
					noun: "ad"
				}),
				G = (e, t) => n => s => ({
					...e ? v(s, e, t) : {},
					source: g,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: b.H(s, n)
				}),
				q = (e, t, n, r) => {
					Object(y.a)(H(t, n, r)(e))
				},
				H = (e, t, n, r) => s => {
					const a = Object(p.c)(s, {
							postId: t
						}),
						c = a ? Object(h.b)(s, a) : void 0;
					return {
						...I(s, e, n, r),
						...c,
						source: g,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.H(s, t)
					}
				},
				W = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				V = (e, t, n) => b.d(e, {
					position: n
				}),
				Q = (e, t, n) => {
					const r = W();
					return e => ({
						...O(e, r),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t)
					})
				},
				$ = (e, t, n) => {
					const r = W();
					return e => ({
						...S(e, r, t),
						actionInfo: V(e, 0, n)
					})
				},
				K = (e, t, n) => {
					const s = W();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						source: g,
						action: o.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				z = (e, t, n) => {
					const s = W();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						post: b.H(e, t) || null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				Y = (e, t, n, s) => {
					const a = W();
					return e => ({
						...v(e, a),
						actionInfo: V(e, 0, s),
						subreddit: b.hb(e, n) || null,
						post: b.H(e, t) || null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				X = (e, t, n) => {
					const s = W();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				J = (e, t, n, s) => {
					const a = W();
					return e => ({
						...v(e, a),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						post: s ? b.H(e, s) : null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Z = (e, t, n, s) => {
					const a = W();
					return e => ({
						...v(e, a),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						post: s ? b.H(e, s) : null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ee = (e, t, n) => {
					const s = W();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						source: g,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				te = (e, t, n) => {
					const s = W();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: b.hb(e, t) || null,
						source: g,
						action: o.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				ne = (e, t) => n => ({
					...v(n, e),
					...t && Object(h.b)(n, t),
					source: g,
					action: o.c.CLICK,
					noun: "item"
				}),
				re = e => t => ({
					...v(t, e),
					source: g,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return p
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.n(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.e)(r.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.n(a),
					actionInfo: s.d(a, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				i = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.n(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.n(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditForking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "click",
					...r.n(e),
					actionInfo: r.d(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...r.n(e),
					actionInfo: r.d(e)
				}),
				o = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...r.n(e),
					actionInfo: r.d(e)
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.fb
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(r || (r = {}));
			const s = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return e && Array.isArray(e) && e.length ? e.reduce((e, s) => {
						if (s && s.id && s.type && s.title && s.hasOwnProperty("state")) switch (s.type) {
							case r.Toggle:
								e.push({
									settingType: r.Toggle,
									settingId: s.id,
									subredditId: t,
									description: s.description,
									descriptionUrl: s.descriptionUrl,
									groupName: s.groupName,
									isEditable: !n && s.isEditable,
									state: "true" === String(s.state).toLowerCase(),
									title: s.title
								});
								break;
							default:
								e.push({
									settingType: r.Unknown,
									settingId: s.id,
									subredditId: t,
									description: s.description,
									descriptionUrl: s.descriptionUrl,
									groupName: s.groupName,
									isEditable: !n && s.isEditable,
									state: s.state,
									title: s.title
								})
						}
						return e
					}, []) : []
				},
				a = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			}));
			const r = 24,
				s = 64e3,
				a = 128,
				o = 128,
				c = (e, t, n, r) => ({
					name: e,
					url: t,
					subredditId: n,
					...r
				})
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "new_community_setup",
				s = "ncp_v3_module",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var o, c, i;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(o || (o = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(i || (i = {}))
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(r || (r = {}))
		},
		"./src/reddit/reducers/features/categories/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/category/constants.ts");
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b:
					case s.c:
						return null;
					case s.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.c:
						return !1;
					case s.b:
						return !0;
					default:
						return e
				}
			};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.c:
							return !0;
						case s.b:
						case s.a:
							return !1;
						default:
							return e
					}
				},
				i = Object(r.c)({
					error: a,
					loaded: o,
					pending: c
				});
			const d = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.g:
					case s.f: {
						const {
							categoryId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case s.e: {
						const {
							categoryId: n,
							error: r
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
			const l = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.g: {
						const {
							categoryId: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case s.f: {
						const {
							categoryId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								categoryId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								categoryId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				h = Object(r.c)({
					error: u,
					loaded: p,
					pending: f
				}),
				y = Object(r.c)({
					list: i,
					subreddits: h
				}),
				m = n("./node_modules/lodash/isEmpty.js"),
				g = n.n(m);
			const v = [];
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b: {
						const {
							categoryIds: n
						} = t.payload;
						return g()(n) ? e : n
					}
					default:
						return e
				}
			};
			const E = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							return g()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				I = n("./node_modules/lodash/forOwn.js"),
				S = n.n(I),
				j = n("./src/reddit/helpers/name/index.ts");
			const T = {};
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b: {
							const {
								categories: n
							} = t.payload;
							if (g()(n)) return e;
							const r = {};
							return S()(n, e => {
								r[Object(j.g)(e.name)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				D = n("./src/reddit/actions/global/constants.ts"),
				P = n("./src/reddit/constants/localStorage.ts");
			const A = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.a:
						return t.payload[P.b.CATEGORIES_RANKING_STORE] || e;
					case s.d: {
						const {
							categoryId: n,
							rank: r
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
			t.a = Object(r.c)({
				api: y,
				ids: O,
				models: _,
				nameToId: w,
				ranking: C
			})
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/governance/constants.ts");
			const d = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, n, r, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == o ? void 0 : o.contracts,
					i = null == c ? void 0 : c.unlocked,
					d = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = (null == i ? void 0 : i.decimals) || 0,
					b = "1" + "0".repeat(p);
				return {
					blockchainProvider: d,
					contractAddress: (null == i ? void 0 : i.address) || "",
					contracts: c,
					decimals: p,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == i ? void 0 : i.token) || ""
				}
			}
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: l(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: r[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: c,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return eT
			}));
			var r = n("./src/reddit/actions/modal.ts");
			const s = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return s;
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				o = n("./src/reddit/actions/authorFlair.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/actions/governance/constants.ts"),
				d = n("./src/reddit/actions/harbergerTax/constants.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/product.ts"),
				p = n("./src/reddit/actions/reportFlow/constants.ts"),
				b = n("./src/reddit/actions/structuredStyles/constants.ts"),
				f = n("./src/reddit/constants/modals.ts");
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.c: {
							const {
								id: n,
								args: r
							} = t.payload;
							return (null == e ? void 0 : e.id) === n ? null : {
								id: n,
								args: r
							}
						}
						case r.b:
						case r.d:
						case u.b:
						case p.f:
							return t.type === u.b && (null == e ? void 0 : e.id) === f.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case b.e:
							return (null == e ? void 0 : e.id) === f.a.BLADE_UNSAVED_CHANGES ? null : e;
						case b.d:
							return (null == e ? void 0 : e.id) === f.a.BLADE_NIGHTMODE ? null : e;
						case o.a:
							return (null == e ? void 0 : e.id) === f.a.USER_FLAIR_MODAL_ID ? null : {
								id: f.a.USER_FLAIR_MODAL_ID
							};
						case l.b:
							return {
								id: f.a.BADGE_PURCHASE
							};
						case i.d:
							return {
								id: f.a.GOVERNANCE_OPT_OUT
							};
						case i.r:
							return {
								id: f.a.TRANSFER_POINTS
							};
						case i.o:
							return {
								id: f.a.GOVERNANCE_RELEASE_NOTES
							};
						case d.e:
							return {
								id: f.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case d.c:
							return {
								id: f.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case d.b:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case d.a:
							return {
								id: f.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case i.x:
							return {
								id: f.a.WALLET_REGISTRATION_MODAL
							};
						case c.c:
							return {
								id: f.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				y = n("./src/reddit/actions/ads/constants.ts"),
				m = n("./src/reddit/actions/unload/constants.ts");
			const g = {};

			function v(e, t, n, r) {
				const s = e[t];
				return {
					...e,
					[t]: {
						...s,
						[r]: n
					}
				}
			}
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (!t.payload) return e;
					switch (t.type) {
						case y.d:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case y.n:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.k:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.e:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.j:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.i:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.g:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.f:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.h:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.l: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedPercent${r}`)
						}
						case y.m: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedSeconds${r}`)
						}
						case y.w:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.y:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.x:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case m.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.s:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case y.c: {
							const {
								postId: n,
								vendorMetadata: r,
								eventType: s
							} = t.payload;
							return v(e, n, r, `adGalleryItemImpression${s}`)
						}
						default:
							return e
					}
				},
				E = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/apiRequestState.ts"));
			const _ = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.d:
						case E.a:
						case E.b: {
							const n = t.payload;
							return {
								...e,
								[n.apiRequestId]: n
							}
						}
						case E.c: {
							const n = t.payload;
							if (!(n in e)) return e;
							if (1 === Object.keys(e).length) return _;
							const r = {
								...e
							};
							return delete r[n], r
						}
						default:
							return e
					}
				},
				S = n("./node_modules/redux/es/redux.js"),
				j = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				D = Object(S.c)({
					error: T,
					pending: w
				});
			const P = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.d:
						case j.b: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case j.c:
						case j.a:
						default:
							return e
					}
				},
				C = Object(S.c)({
					api: D,
					badges: A
				});
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.a:
							return t.payload;
						default:
							return e
					}
				},
				N = n("./node_modules/icepick/icepick.js"),
				x = n("./node_modules/lodash/mergeWith.js"),
				k = n.n(x),
				L = n("./src/reddit/actions/comment/constants.ts"),
				U = n("./src/reddit/actions/comment/websocket/constants.ts"),
				M = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				B = n("./src/reddit/actions/modQueue/constants.ts"),
				F = n("./src/reddit/actions/pages/constants.ts"),
				G = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = n("./src/reddit/actions/pages/profilePosts.ts"),
				H = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				W = n("./src/reddit/actions/pages/search/index.ts"),
				V = n("./src/reddit/actions/pages/subreddit.ts"),
				Q = n("./src/reddit/actions/profileConversations.ts"),
				$ = n("./src/reddit/actions/subreddit.ts"),
				K = n("./src/reddit/actions/userFlair/constants.ts"),
				z = n("./src/reddit/models/User/index.ts");
			const Y = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.b:
					case U.c: {
						const n = t.payload,
							{
								authorFlair: r
							} = n;
						if (r) {
							return k()({
								...e
							}, r, (e, t, n) => {
								if ("richtext" === n) return t
							})
						}
						return e
					}
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case W.c: {
						const {
							authorFlair: n
						} = t.payload;
						if (n) {
							return Object(N.merge)(e, n)
						}
						return e
					}
					case L.w:
					case V.SUBREDDIT_LOADED:
					case F.f:
					case G.b:
					case G.e:
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
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [n, r], a ? s : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: n,
							userName: r,
							applied: s
						} = t.payload;
						return e[n] && e[n][r] ? Object(N.setIn)(e, [n, r], s) : e
					}
					case K.a: {
						const {
							subredditId: n,
							userName: r,
							applied: s,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(N.setIn)(e, [n, r], a ? s : null)
					}
					default:
						return e
				}
			};
			const J = (e, t) => {
				let {
					account: n,
					authorFlair: r,
					userFlair: s
				} = t;
				const a = Object(N.merge)(e, r);
				if (!s || !n) return a;
				const o = Object.keys(s)[0];
				if (!o) return a;
				const c = s[o],
					i = Object(z.e)(n),
					d = c.applied,
					u = c.displaySettings && c.displaySettings.isUserEnabled;
				return i && d && u ? Object(N.merge)(a, {
					[o]: {
						[i]: d
					}
				}) : a
			};
			var Z = Object(S.c)({
					inContext: R,
					models: X
				}),
				ee = n("./src/reddit/actions/gold/constants.ts");
			const te = {};
			var ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.d: {
						const {
							disabled: n,
							subredditOrProfileId: r
						} = t.payload;
						return n ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ae = Object(S.c)({
					error: re,
					pending: se
				}),
				oe = Object(S.c)({
					api: ae
				});
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const ie = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.H: {
							const {
								subredditOrProfileId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case ee.d:
						case ee.G:
						case ee.M:
						case ee.F: {
							const {
								subredditOrProfileId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ue = Object(S.c)({
					error: ce,
					pending: de
				});
			const le = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.M: {
						const {
							awards: n,
							subredditOrProfileId: r
						} = t.payload, s = {};
						return n.forEach(e => {
							s[e.id] = e.isEnabled
						}), {
							...e,
							[r]: s
						}
					}
					case ee.l: {
						const {
							awardId: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !1
							}
						}
					}
					case ee.o: {
						const {
							awardId: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.G: {
							const {
								awards: n,
								subredditOrProfileId: r
							} = t.payload, s = n.map(e => e.id);
							return {
								...e,
								[r]: s
							}
						}
						case ee.i: {
							const {
								award: n,
								subredditId: r
							} = t.payload;
							if (n && n.id) {
								if (!e[r]) return {
									...e,
									[r]: [n.id]
								};
								if (-1 === e[r].indexOf(n.id)) return {
									...e,
									[r]: [n.id, ...e[r]]
								}
							}
							return e
						}
						default:
							return e
					}
				},
				he = Object(S.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				ye = n("./node_modules/lodash/merge.js"),
				me = n.n(ye);
			const ge = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var ve = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : ge(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : ge(e.endsAt)), e),
				Oe = n("./src/reddit/models/Gold/Award.ts"),
				Ee = n("./src/reddit/actions/discoveryUnit.ts"),
				_e = n("./src/reddit/actions/frontpage/constants.ts"),
				Ie = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Se = n("./src/reddit/actions/multireddit/constants.ts"),
				je = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				Te = n("./src/reddit/actions/pages/modListing/constants.ts"),
				we = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				De = n("./src/reddit/actions/pages/postCreation.ts"),
				Pe = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ae = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ce = n("./src/lib/makeActionCreator/index.ts"),
				Re = (n("./src/config.ts"), n("./src/lib/constants/index.ts"));
			n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ce.a)("RECOMMENDED_POSTS_LOADED"), Object(Ce.a)("RECOMMENDED_POSTS_FAILED");
			var Ne = n("./src/reddit/actions/search.ts");
			const xe = Oe.m,
				ke = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([ve]),
				Le = (e, t) => {
					const n = t.reduce((e, t) => (e[t.id] = ke(t), e), {});
					return me()({
						...e
					}, n)
				};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case ee.G: {
						const {
							awards: n
						} = t.payload;
						return Le(e, n)
					}
					case ee.M: {
						const n = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...ke(t),
							isEnabled: !0
						}, e), {});
						return me()({
							...e
						}, n)
					}
					case ee.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = ke(t.award), e), {});
						return me()({
							...e
						}, r)
					}
					case ee.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? me()({
							...e
						}, {
							[n.id]: ke(n)
						}) : {
							...e,
							[n.id]: ke(n)
						} : e
					}
					case ee.kb: {
						const {
							awardId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: {
								...e[n],
								isEnabled: !1
							}
						} : e
					}
					case F.b:
					case L.w:
					case U.b:
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case Ee.e:
					case _e.f:
					case Te.e:
					case Te.h:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
					case Se.r:
					case F.f:
					case _e.b:
					case we.b:
					case W.c:
					case G.b:
					case G.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ae.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case H.c:
					case H.e:
					case H.i:
					case H.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.i:
					case V.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = ke(Object(Oe.h)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = ke(Object(Oe.h)(e));
							r && (n[r.id] = ke(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), me()({
							...e
						}, n)
					}
					case ee.tb: {
						const n = {},
							{
								topAwardedPosts: r
							} = t.payload;
						return r.map(e => {
							const {
								post: t
							} = e, r = t.awardings || [];
							for (const s of r) {
								const e = s.award;
								n[e.id] = e
							}
						}), me()({
							...e
						}, n)
					}
					case Ie.s: {
						const {
							freeAwardEvent: r
						} = t.payload;
						return Le(e, (null === (n = null == r ? void 0 : r.freeAwards) || void 0 === n ? void 0 : n.awards) || [])
					}
					case Ie.h: {
						const {
							awards: n
						} = t.payload;
						return Le(e, n || [])
					}
					default:
						return e
				}
			};
			const Me = {};
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.c: {
							const {
								subredditOrProfileId: n,
								thingId: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									[r]: !0
								}
							}
						}
						case ee.b:
						case ee.a: {
							const {
								subredditOrProfileId: n,
								thingId: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									[r]: !1
								}
							}
						}
						default:
							return e
					}
				},
				Fe = Object(S.c)({
					pending: Be
				});
			const Ge = {};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.b: {
							const {
								awards: n,
								subredditOrProfileId: r,
								thingId: s
							} = t.payload, a = n.map(e => {
								let {
									award: t,
									total: n
								} = e;
								return {
									award: {
										id: t.id
									},
									total: n
								}
							});
							return {
								...e,
								[r]: {
									...e[r],
									[s]: a
								}
							}
						}
						default:
							return e
					}
				},
				He = Object(S.c)({
					api: Fe,
					order: qe
				});
			const We = {};
			var Ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.b: {
							const {
								tags: n,
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Qe = Object(S.c)({
					order: Ve
				}),
				$e = Object(S.c)({
					blacklist: ne,
					create: oe,
					manageable: he,
					models: Ue,
					sortedUsable: He,
					tags: Qe
				}),
				Ke = n("./src/reddit/actions/badge.ts");
			const ze = {};
			var Ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ze,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.d:
					case Ke.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Ke.c: {
						const {
							subredditId: n,
							error: r
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
			const Xe = {};
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ke.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ke.e:
						case Ke.c: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ze = Object(S.c)({
					error: Ye,
					pending: Je
				});
			const et = {};
			var tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.g:
					case Ke.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Ke.f: {
						const {
							subredditId: n,
							error: r
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
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ke.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ke.h:
						case Ke.f: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				st = Object(S.c)({
					error: tt,
					pending: rt
				}),
				at = Object(S.c)({
					subreddit: Ze,
					user: st
				});
			const ot = {};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case Ke.e:
						case Ke.h:
						case l.d: {
							const {
								badges: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				it = Object(S.c)({
					api: at,
					models: ct
				}),
				dt = n("./src/reddit/actions/blockedRedditors.ts");
			const ut = {
				message: ""
			};
			var lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				bt = Object(S.c)({
					error: lt,
					pending: pt
				});
			const ft = {
				ids: []
			};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case dt.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case dt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				yt = Object(S.c)({
					api: bt,
					list: ht
				}),
				mt = n("./src/reddit/actions/userBlocks.ts");
			const gt = {};
			var vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mt.f:
					case mt.e: {
						const {
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case mt.d: {
						const {
							userId: n,
							type: r
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
			const Ot = {};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mt.f: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case mt.e:
						case mt.d: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				_t = Object(S.c)({
					error: vt,
					pending: Et
				}),
				It = Object(S.c)({
					api: _t
				});
			const St = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case V.SUBREDDIT_PENDING:
						case we.c:
						case _e.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Tt = n("./src/reddit/actions/chat/init.ts");
			var wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tt.a:
							return !0;
						default:
							return e
					}
				},
				Dt = n("./src/lib/omitKey/index.ts"),
				Pt = n("./src/reddit/actions/pages/chatSettings.ts");
			const At = {};
			var Ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pt.b: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Pt.a:
					case Pt.c:
					case Pt.d: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					default:
						return e
				}
			};
			const Rt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pt.a:
						case Pt.b:
						case Pt.c:
						case Pt.d: {
							const {
								subredditId: n
							} = t.payload, r = t.type === Pt.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				xt = Object(S.c)({
					error: Ct,
					pending: Nt
				}),
				kt = Object(S.c)({
					fetch: xt
				});
			const Lt = {};
			var Ut, Mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pt.a:
						case Pt.d: {
							const {
								subredditId: n,
								chatSettings: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Bt = Object(S.c)({
					api: kt,
					models: Mt
				}),
				Ft = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Ut || (Ut = {}));
			const {
				SYNC: Gt,
				REQUEST_FAILED: qt,
				REQUEST_PENDING: Ht,
				REQUEST_SUCCESS: Wt
			} = Ut;
			Object(Ce.a)(Gt), Object(Ce.a)(qt), Object(Ce.a)(Ht), Object(Ce.a)(Wt);
			Re.kb;
			const Vt = {
				apiError: null
			};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Kt = Object(S.c)({
					error: Qt,
					pending: $t
				});
			const zt = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Xt = Object(S.c)({
					api: Kt,
					count: Yt
				}),
				Jt = Object(S.c)({
					isInited: wt,
					subredditSettingsPage: Bt,
					unread: Xt
				}),
				Zt = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var en = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zt.a:
							return !1;
						case Zt.b:
							return !0;
						default:
							return e
					}
				},
				tn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const nn = {};
			var rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tn.a: {
							const {
								models: n,
								sortedKeys: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									sortedKeys: r,
									models: n
								}
							}
						}
						default:
							return e
					}
				},
				sn = n("./src/reddit/actions/connection/constants.ts");
			const an = {
				showBanner: !1,
				online: !0
			};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sn.a:
							return {
								online: !1, showBanner: !0
							};
						case sn.b:
							return {
								online: !0, showBanner: !0
							};
						case sn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				cn = n("./src/reddit/actions/contentControls/constants.ts");
			const dn = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cn.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case cn.c:
					case cn.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					default:
						return e
				}
			};
			const ln = {};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cn.c:
						case cn.a:
						case cn.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === cn.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				bn = Object(S.c)({
					error: un,
					pending: pn
				}),
				fn = Object(S.c)({
					fetch: bn
				}),
				hn = n("./src/lib/safeGet/index.ts");
			const yn = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cn.b: {
							const {
								subredditName: n,
								postRequirements: r,
								hatefulContentFilters: s
							} = t.payload;
							return {
								...e,
								[n]: {
									hatefulContentFilters: s,
									postRequirements: r
								}
							}
						}
						case cn.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(hn.a)(e, n);
							return s ? {
								...e,
								[n]: {
									hatefulContentFilters: {
										...s.hatefulContentFilters,
										...r.hatefulContentFilters || {}
									},
									postRequirements: {
										...s.postRequirements,
										...r.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				gn = Object(S.c)({
					api: fn,
					models: mn
				}),
				vn = n("./src/reddit/actions/contentGate.ts"),
				On = n("./src/reddit/actions/preferences.ts");
			const En = {};
			var _n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : En,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
								const t = {
									[n]: {
										goldSubreddit: !0
									}
								};
								return k()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									goldSubreddit: !0
								}
							}
						}
						return e
					}
					case vn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(hn.a)(e, r)) {
								const t = {
									[r]: {
										privateSubreddit: !0,
										subredditDescription: n,
										isContributorRequestsDisabled: s,
										isContributorRequestTimestamp: a,
										subredditId: o
									}
								};
								return k()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[r]: {
									privateSubreddit: !0,
									subredditDescription: n,
									isContributorRequestsDisabled: s,
									isContributorRequestTimestamp: a,
									subredditId: o
								}
							}
						}
						return e
					}
					case vn.g: {
						const {
							subredditName: n,
							quarantineRequiresEmail: r,
							quarantineMessage: s,
							quarantineMessageHtml: a,
							quarantineMessageRTJson: o
						} = t.payload;
						return n ? {
							...e,
							[n]: {
								...Object(hn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
							}
						} : e
					}
					case vn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(hn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case vn.k: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
								const t = {
									[n]: {
										subredditBanned: !0,
										subredditBanMessage: r
									}
								};
								return k()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditBanned: !0,
									subredditBanMessage: r
								}
							}
						}
						return e
					}
					case vn.l: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
								const t = {
									[n]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return k()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditBlockedForLegalReason: !0
								}
							}
						}
						return e
					}
					case vn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
								const t = {
									[n]: {
										subredditDoesNotExist: !0
									}
								};
								return k()({
									...e
								}, {
									...t
								})
							}
							return {
								...e,
								[n]: {
									subredditDoesNotExist: !0
								}
							}
						}
						return e
					}
					case vn.d:
					case vn.e:
					case vn.f: {
						const {
							profileName: n
						} = t.payload, r = Re.jc + n.toLocaleLowerCase(), s = Object(hn.a)(e, r) || {}, a = {
							profileDeleted: t.type === vn.e,
							profileSuspended: t.type === vn.f,
							profileBlockedForLegalReason: t.type === vn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case On.q:
						const {
							subredditId: n, prefs: r
						} = t.payload;
						if (r.isContributorRequestTimestamp || 0 === r.isContributorRequestTimestamp)
							for (const t in e)
								if (e[t].subredditId === n) {
									const n = e[t];
									return {
										...e,
										[t]: {
											...n,
											isContributorRequestTimestamp: r.isContributorRequestTimestamp
										}
									}
								} return e;
					default:
						return e
				}
			};
			const In = {};
			var Sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				jn = Object(S.c)({
					models: Sn
				}),
				Tn = n("./src/reddit/actions/cooldownTime.ts");
			var wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tn.b:
					case Tn.c:
						return null;
					case Tn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tn.b:
							return !0;
						case Tn.a:
						case Tn.c:
							return !1;
						default:
							return e
					}
				},
				Pn = Object(S.c)({
					error: wn,
					pending: Dn
				});
			var An = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Cn = Object(S.c)({
					api: Pn,
					expiresAt: An
				}),
				Rn = n("./src/reddit/actions/postCollection/constants.ts");
			var Nn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Rn.d:
					case Rn.c:
					case Rn.s:
					case Rn.r:
						return null;
					case Rn.b:
					case Rn.n:
						return t.payload;
					default:
						return e
				}
			};
			var xn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rn.c:
						case Rn.r:
							return !0;
						case Rn.d:
						case Rn.b:
						case Rn.s:
						case Rn.n:
							return !1;
						default:
							return e
					}
				},
				kn = Object(S.c)({
					error: Nn,
					pending: xn
				}),
				Ln = Object(S.c)({
					createOrUpdate: kn
				}),
				Un = n("./src/reddit/actions/postDraft.ts");
			const Mn = {};
			var Bn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.c:
					case Un.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Un.a: {
						const {
							apiError: n,
							draftId: r
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
			const Fn = {};
			var Gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Un.c:
						case Un.a: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				qn = Object(S.c)({
					error: Bn,
					pending: Gn
				});
			var Hn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.d:
						return t.payload;
					case Un.f:
					case Un.e:
						return null;
					default:
						return e
				}
			};
			var Wn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.f:
							return !0;
						case Un.e:
						case Un.d:
							return !1;
						default:
							return e
					}
				},
				Vn = Object(S.c)({
					error: Hn,
					pending: Wn
				});
			const Qn = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var $n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.l:
					case Un.j:
						return Qn;
					case Un.i: {
						const e = t.payload;
						return {
							...Qn,
							apiError: e
						}
					}
					case Un.m: {
						const e = t.payload;
						return {
							...Qn,
							validationError: e
						}
					}
					case Un.k: {
						const e = t.payload;
						return {
							...Qn,
							submitValidationError: e
						}
					}
					case Un.h:
						return {
							...Qn, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var Kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.j:
							return !0;
						case Un.l:
						case Un.i:
						case Un.m:
						case Un.k:
						case Un.h:
							return !1;
						default:
							return e
					}
				},
				zn = Object(S.c)({
					error: $n,
					pending: Kn
				}),
				Yn = Object(S.c)({
					deleteDraft: qn,
					listing: Vn,
					save: zn
				}),
				Xn = n("./src/reddit/actions/postCreation/constants.ts");
			const Jn = {};
			var Zn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Xn.p: {
							const n = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				er = Object(S.c)({
					pending: Zn
				});
			var tr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.u:
					case Xn.v:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.i:
					case Xn.j:
					case Xn.n:
					case Xn.O:
						return null;
					case Xn.t:
						return t.payload;
					default:
						return e
				}
			};
			var nr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.u:
							return !0;
						case Xn.v:
						case Xn.t:
							return !1;
						default:
							return e
					}
				},
				rr = Object(S.c)({
					error: tr,
					pending: nr
				}),
				sr = Object(S.c)({
					converting: er,
					mediaUpload: rr
				});
			const ar = {};
			var or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED:
					case De.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case De.PAGE_FAILED: {
						const {
							key: n,
							error: r
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
			const cr = {};
			var ir = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case De.PAGE_LOADED: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const dr = {};
			var ur = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case De.PAGE_LOADED:
						case De.PAGE_FAILED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				lr = Object(S.c)({
					error: or,
					fetched: ir,
					pending: ur
				}),
				pr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const br = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var fr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.P:
					case pr.h:
					case pr.k:
					case pr.b:
					case pr.d:
					case Xn.w:
					case Xn.c:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.i:
					case Xn.j:
					case Xn.n:
					case Xn.O:
					case Xn.E:
						return br;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? br : e
					}
					case Xn.o: {
						const e = t.payload;
						return {
							...br,
							apiError: e
						}
					}
					case Xn.cb: {
						const e = t.payload;
						return {
							...br,
							validationError: e
						}
					}
					case Xn.K:
					case Xn.J: {
						const e = t.payload;
						return {
							...br,
							submitValidationError: e
						}
					}
					case Xn.a:
						return {
							...br, needsCaptcha: !0
						};
					case Xn.y:
						return {
							...br, pollError: t.payload
						};
					default:
						return e
				}
			};
			var hr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.w:
							return !0;
						case Xn.P:
						case pr.h:
						case Xn.o:
						case Xn.cb:
						case Xn.J:
						case Xn.K:
						case Xn.y:
						case Xn.a:
							return !1;
						default:
							return e
					}
				},
				yr = Object(S.c)({
					error: fr,
					pending: hr
				});
			var mr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.x:
					case Xn.H:
						return null;
					case Xn.m:
						return t.payload;
					default:
						return e
				}
			};
			var gr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.x:
							return !0;
						case Xn.m:
						case Xn.l:
							return !1;
						default:
							return e
					}
				},
				vr = Object(S.c)({
					error: mr,
					pending: gr
				}),
				Or = Object(S.c)({
					submit: yr,
					update: vr
				});
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.O:
					case Xn.M:
					case Xn.N:
						return null;
					default:
						return e
				}
			};
			var _r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.N:
							return !0;
						case Xn.M:
						case Xn.O:
							return !1;
						default:
							return e
					}
				},
				Ir = Object(S.c)({
					error: Er,
					pending: _r
				}),
				Sr = Object(S.c)({
					change: Ir
				}),
				jr = Object(S.c)({
					collection: Ln,
					draft: Yn,
					editor: sr,
					page: lr,
					post: Or,
					subreddit: Sr
				}),
				Tr = n("./node_modules/lodash/omit.js"),
				wr = n.n(Tr),
				Dr = n("./src/reddit/actions/pages/postDraft.ts");
			const Pr = {};
			var Ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Pr
					}
					case Un.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return wr()(n, r)
					}
					case Xn.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? wr()(e, n) : e
					}
					case Dr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Cr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Rr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Nr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var xr = n("./src/reddit/models/PostDraft/index.ts");
			var kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.d:
							return t.payload || "";
						case Xn.E:
							return "";
						case u.b: {
							if (Cr(t) !== Re.Nb.POST_CREATION) return "";
							const n = Rr(t);
							return n && n.url ? n.url || "" : e
						}
						case Un.g: {
							const e = t.payload;
							return e.kind === xr.b.Link && e.body || ""
						}
						case pr.b:
						case pr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Lr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Ur = n("./src/reddit/models/ScheduledPost/index.ts");
			const Mr = e => e ? e.replace(/\+/g, " ") : "";
			var Br = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.e:
						return t.payload || "";
					case Xn.E:
					case Xn.I:
						return "";
					case Xn.Q:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return "";
						const n = Rr(t);
						return n && n.text ? Mr(n.text) : e
					}
					case Un.g: {
						const e = t.payload;
						return e.kind === xr.b.Markdown && e.body || ""
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.contentType === Ur.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Fr = {
				items: [],
				selectedKey: null
			};
			var Gr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.f:
							return t.payload || Fr;
						case Xn.E:
							return Fr;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? Fr : e;
						case Un.g:
							return Fr;
						case pr.b:
						case pr.n:
							return Fr;
						default:
							return e
					}
				},
				qr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Hr = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Wr = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Vr = qr.a.createInitial;
			var Qr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case Xn.E:
							return qr.a.createInitial();
						case Xn.Q: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && n.editorKey === Lr.h.POST_CREATION ? qr.a.createInitial(n.content) : e
						}
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? qr.a.createInitial() : e;
						case Un.g: {
							const e = t.payload;
							return e.kind === xr.b.RichText ? qr.a.createInitial(e.body) : qr.a.createInitial()
						}
						case pr.b:
						case pr.n: {
							const e = t.payload,
								n = Object(Hr.c)(e.mediaAssets);
							return qr.a.createInitial(e.contentType === Ur.a.RTJSON ? Object(Wr.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				$r = Object(S.c)({
					link: kr,
					markdown: Br,
					media: Gr,
					rte: Qr
				});
			var Kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.b:
							return t.payload || null;
						case Xn.E:
						case Un.g:
						case pr.b:
						case pr.n:
						case Xn.O:
							return null;
						case u.b:
							return Cr(t) === Re.Nb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				zr = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var Yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.c:
						return t.payload || null;
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return Object(zr.n)({
							scheduledPost: e
						}) || null
					}
					case Xn.E:
						return null;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION ? e : null;
					case Un.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var Xr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.q:
						return t.payload.type || null;
					case pr.b:
					case pr.n:
					case Xn.i:
					case Xn.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var Jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.S:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return "CHAT" === t.payload.discussionType;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var Zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var es = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.U:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isNSFW || !1;
					case pr.b:
					case pr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.V:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case Xn.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isOriginalContent || !1;
					case pr.b:
					case pr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ns = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.W:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return !!t.payload.poll;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					default:
						return e
				}
			};
			var rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.b:
					case pr.n:
					case Xn.E:
						return !1;
					case Un.n:
						return t.payload;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var as = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.X:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isSpoiler || !1;
					case pr.b:
					case pr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.N:
						case Xn.O:
							return t.payload;
						case Xn.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				ds = n("./src/reddit/actions/polls.ts");
			var us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ds.a:
							return {
								...t.payload
							};
						case pr.b:
						case pr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case i.h:
						case Xn.E:
							return null;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				ls = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				ps = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case Xn.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case Xn.E:
					case Un.g:
					case Xn.O:
						return null;
					case u.b:
						if (Cr(t) === Re.Nb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(Ur.m)(o)) {
								const t = Object(ls.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...ls.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(ls.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
					case pr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case pr.b: {
						const e = t.payload;
						return {
							...Object(ps.h)(e)
						}
					}
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case Xn.Y:
						return r || !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
					case Un.g:
						return !1;
					default:
						return e
				}
			};
			var hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.g:
						return t.payload || "";
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? null : e;
					case Xn.E:
						return null;
					case pr.b:
					case pr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var ms = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.E:
						return !0;
					case Xn.Z:
						return t.payload;
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION || e;
					case Un.g:
						return t.payload.sendReplies;
					case pr.b:
					case pr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case Xn.E:
					case Un.g:
					case Xn.O:
						return null;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION ? e : null;
					case pr.b:
					case pr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const vs = Re.Wb.POST;
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.E:
						return vs;
					case Xn.r:
						return Re.Wb.CROSSPOST;
					case Xn.i:
						return t.payload.submissionType || vs;
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return vs;
						const n = Rr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: i = ""
						} = n, d = r && !a && !c;
						return o ? Re.Wb.MEDIA : void 0 !== s || d ? Re.Wb.LINK_ONLY : a || c ? Re.Wb.POST : i === Re.xb ? Re.Wb.POLL : e
					}
					case Un.g: {
						const e = t.payload;
						return xr.a[e.kind]
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.poll ? Re.Wb.POLL : e.url ? Re.Wb.LINK_ONLY : Re.Wb.POST
					}
					default:
						return e
				}
			};
			var Es = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case Xn.E:
						case Un.g:
						case Xn.O:
							return null;
						case u.b:
							return Cr(t) === Re.Nb.POST_CREATION ? e : null;
						case pr.b:
						case pr.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				_s = n("./src/reddit/models/Poll/index.ts");
			const Is = e => e ? e.replace(/\+/g, " ") : "",
				Ss = e => `Should ${e||"username"} become the top moderator?`,
				js = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.r:
						return t.payload.postTitle || "";
					case Xn.j:
						return t.payload || "";
					case Xn.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case Xn.E:
						return "";
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return "";
						const n = Rr(t);
						return n && n.title ? Is(n.title) : e
					}
					case Un.g:
						return t.payload.title;
					case Xn.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === _s.a.ReplaceTopMod ? Ss("") : r === _s.a.Spinoff ? js("") : n === _s.a.ReplaceTopMod || n === _s.a.Spinoff ? "" : e
					}
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Ss(e)
					}
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return js(e)
					}
					case Xn.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== _s.a.ReplaceTopMod && n.govType !== _s.a.Spinoff ? e : ""
					}
					case pr.b:
					case pr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const ws = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Ds = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ws,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ps = Object(S.c)({
					body: $r,
					eventSchedule: Kr,
					flair: Yr,
					govType: Xr,
					isChatPost: Jr,
					isContestMode: Zr,
					isNSFW: es,
					isOC: ts,
					isPostAsMetaMod: rs,
					isPoll: ns,
					isPublicLink: ss,
					isSpoiler: as,
					newSubreddit: os,
					newTopMod: cs,
					nextSubreddit: is,
					polls: us,
					postSchedule: bs,
					postToTwitter: fs,
					recaptcha: hs,
					scheduledPostId: ys,
					sendReplies: ms,
					stickyPosition: gs,
					submissionType: Os,
					suggestedSort: Es,
					title: Ts,
					tournament: Ds
				});
			const As = e => e ? e.replace(/\+/g, " ") : "";
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return null;
						const n = Rr(t);
						return n && n.text && As(n.text) ? Lr.i.MARKDOWN : e
					}
					case Xn.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Xn.I:
						return null;
					case Xn.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case pr.b:
					case pr.n:
						return t.payload.contentType === Ur.a.RTJSON ? Lr.i.RICH_TEXT : Lr.i.MARKDOWN;
					default:
						return e
				}
			};
			const Rs = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Ns = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Lr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.c:
					case Xn.d:
					case Xn.e:
						return e[Re.wb.BODY] ? {
							...e,
							[Re.wb.BODY]: []
						} : e;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[Re.wb.BODY] && n ? {
							...e,
							[Re.wb.BODY]: []
						} : e
					}
					case Xn.j:
						return e[Re.wb.TITLE] ? {
							...e,
							[Re.wb.TITLE]: []
						} : e;
					case Xn.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case Xn.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : Rs
					}
					case Xn.K:
					case Xn.J: {
						const n = t.payload;
						return Ns(e, n)
					}
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? Rs : e;
					default:
						return e
				}
			};
			var ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.b:
					case Xn.c:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.j:
					case Xn.i:
					case Xn.U:
					case Xn.V:
					case Xn.X:
					case Un.n:
					case Xn.Z:
					case Xn.ab:
						return !0;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case Xn.P:
					case pr.h:
						return !1;
					case Xn.R:
						return t.payload;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Xn.E:
					case Un.l:
					case Un.g:
						return !1;
					default:
						return e
				}
			};
			const Ls = Lr.r.Post;
			var Us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ls,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.w:
							return Lr.r.Post;
						case Xn.F:
							return t.payload;
						case Un.j:
							return Lr.r.Draft;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? Ls : e;
						default:
							return e
					}
				},
				Ms = Object(S.c)({
					editorMode: Cs,
					fieldValidation: xs,
					isChanged: ks,
					submitMode: Us
				});
			var Bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.H:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case Xn.I:
						return "";
					case Xn.Q:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Fs = qr.a.createInitial;
			var Gs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.I:
							return qr.a.createInitial();
						case Xn.H: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && "object" == typeof n.postContent ? qr.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case Xn.Q: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && n.editorKey === Lr.h.POST_EDITING ? qr.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				qs = Object(S.c)({
					markdown: Bs,
					rte: Gs
				});
			var Hs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case Xn.I:
							return null;
						default:
							return e
					}
				},
				Ws = Object(S.c)({
					draft: qs,
					postId: Hs
				});
			var Vs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.C:
					case Xn.B:
						return !1;
					case Xn.z:
						return !0;
					default:
						return e
				}
			};
			var Qs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.z:
						case Xn.B:
							return !1;
						case Xn.C:
							return !0;
						default:
							return e
					}
				},
				$s = Object(S.c)({
					error: Vs,
					pending: Qs
				});
			var Ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case Xn.j:
					case Xn.d:
					case Xn.e:
					case Xn.i:
					case Xn.r:
					case Un.g:
						return !0;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const zs = {};
			var Ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Xs = [];
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Zs = Object(S.c)({
					api: $s,
					isInputChanged: Ks,
					model: Ys,
					order: Js
				}),
				ea = Object(S.c)({
					api: jr,
					drafts: Ar,
					formData: Ps,
					formState: Ms,
					postEditing: Ws,
					subredditRec: Zs
				}),
				ta = n("./src/reddit/actions/dashboard/constants.ts");
			const na = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var ra = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : na,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ta.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ta.d: {
						const n = t.payload,
							r = e.subredditLoaded[n];
						return {
							...e,
							subredditPending: !r,
							subredditLoaded: {
								...e.subredditLoaded,
								[n]: r || !1
							}
						}
					}
					case ta.c: {
						const n = t.payload;
						return {
							...e,
							subredditPending: !1,
							subredditLoaded: {
								...e.subredditLoaded,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			var sa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ee.b:
					case Ee.c:
						return null;
					case Ee.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var aa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ee.c:
						return !1;
					case Ee.b:
						return !0;
					default:
						return e
				}
			};
			var oa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.c:
							return !0;
						case Ee.b:
						case Ee.a:
							return !1;
						default:
							return e
					}
				},
				ca = Object(S.c)({
					error: sa,
					loaded: aa,
					pending: oa
				}),
				ia = Object(S.c)({
					list: ca
				}),
				da = n("./node_modules/lodash/isEmpty.js"),
				ua = n.n(da);
			const la = {};
			var pa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : la,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return ua()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				ba = n("./node_modules/lodash/forOwn.js"),
				fa = n.n(ba),
				ha = n("./src/reddit/helpers/name/index.ts");
			const ya = {};
			var ma = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ya,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (ua()(n)) return e;
							const r = {};
							return fa()(n, e => {
								r[Object(ha.g)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ga = Object(S.c)({
					api: ia,
					models: pa,
					nameToId: ma
				}),
				va = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Oa = [];
			var Ea = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case va.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				_a = n("./src/reddit/actions/economics/banners/constants.ts");
			const Ia = {
				dismissedBanners: {}
			};
			var Sa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ia,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _a.c: {
							const n = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...e.dismissedBanners[n],
										pending: !0
									}
								}
							}
						}
						case _a.d: {
							const {
								subredditId: n,
								data: r
							} = t.payload;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...e.dismissedBanners[n],
										pending: !1,
										data: r
									}
								}
							}
						}
						case _a.a:
						case _a.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === _a.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[n]: {
										...s,
										data: {
											...s.data,
											[r]: a
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				ja = n("./src/reddit/models/Badge/managementPage.ts");
			const Ta = {
				badgeType: ja.a.Cosmetic,
				view: ja.c.Gallery
			};
			var wa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ta,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(ja.d)(n.placement) : e.badgeType,
							view: r
						} : e
					}
					case c.b: {
						const n = t.payload;
						return {
							...e,
							badgeType: n
						}
					}
					case c.d: {
						const n = t.payload;
						return {
							...e,
							view: n
						}
					}
					case r.b:
						return Ta;
					default:
						return e
				}
			};
			var Da = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.c:
							return {
								badge: t.payload.badge
							};
						case r.b:
							return null;
						default:
							return e
					}
				},
				Pa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Aa(e, t) {
				const {
					name: n,
					emojiIcon: r,
					stickerIcon: s
				} = e;
				return {
					id: n,
					fullId: `emote|${t}|${n}`,
					imageType: r.mimeType,
					emoji: {
						x: r.x,
						y: r.y,
						path: r.url,
						type: r.mimeType
					},
					sticker: {
						x: s.x,
						y: s.y,
						path: s.url,
						type: s.mimeType
					}
				}
			}

			function Ca(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, n = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: r,
						emotes: s
					} = e;
					n[t] = {
						id: t,
						name: r,
						emotes: s.map(e => Aa(e, t))
					}
				}), n
			}
			const Ra = {};

			function Na(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Aa(n, t)
						}
					})
				}
			}
			var xa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.e: {
						const {
							emotes: n,
							emoteCollections: r
						} = t.payload.products, s = {};
						return n.forEach(e => {
							const t = e.extra && e.extra.assets,
								n = Object.keys(e.collections || {})[0] || e.title,
								a = r[n];
							s[n] || (s[n] = {
								emotes: {},
								position: a ? a.position : 0,
								title: a ? a.title : e.title
							}), t && Object.keys(t).forEach(r => {
								const a = t[r];
								s[n].emotes[r] = {
									id: r,
									emoji: a.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${r}`,
									imageType: a.emoji.type,
									sticker: a.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(s).map(e => s[e]).sort((e, t) => e.position - t.position)
						}
					}
					case ee.pb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						if (n && n.mediaPacks) {
							const t = n.mediaPacks.map(e => ({
								title: e.name,
								emotes: e.emotes.reduce((t, n) => ({
									...t,
									[n.name]: {
										id: n.name,
										fullId: `emote|${e.id}|${n.name}`,
										imageType: n.emojiIcon.mimeType,
										emoji: {
											x: n.emojiIcon.x,
											y: n.emojiIcon.y,
											path: n.emojiIcon.url,
											type: n.emojiIcon.mimeType
										},
										sticker: {
											x: n.stickerIcon.x,
											y: n.stickerIcon.y,
											path: n.stickerIcon.url,
											type: n.stickerIcon.mimeType
										}
									}
								}), {})
							}));
							return {
								...e,
								[r]: e[r] ? [...e[r], ...t] : t
							}
						}
						return e
					}
					case Pa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Na(e, n, r)
					}
					default:
						return e
				}
			};
			const ka = {};
			var La = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ka,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.e: {
							const n = t.payload.products.giphy.length > 0;
							return {
								...e,
								[t.payload.subredditId]: {
									hasGifProduct: n
								}
							}
						}
						default:
							return e
					}
				},
				Ua = n("./src/reddit/actions/economics/me/constants.ts");
			const Ma = {
				fetched: !1,
				data: {}
			};
			var Ba = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ua.a:
							return {
								fetched: !0, data: t.payload
							};
						case c.h: {
							const {
								subredditId: n
							} = t.payload;
							return e.data.specialMemberships && e.data.specialMemberships[n] ? {
								...e,
								data: {
									...e.data,
									specialMemberships: {
										...e.data.specialMemberships,
										[n]: {
											...e.data[n],
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
				Fa = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ga = {
				fetched: !1,
				data: null
			};
			var qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ga,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ua.b:
							return {
								fetched: !0, data: e.data
							};
						case Ua.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Ha = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Wa = Object(S.c)({
					banners: Sa,
					currentBadgeManagementScreen: wa,
					currentModalArgs: Da,
					emotes: xa,
					gifs: La,
					me: Ba,
					paymentSystems: Fa.b,
					pointsCopy: qa,
					subredditPremium: Ha.b
				}),
				Va = n("./src/reddit/actions/emoji.ts");
			const Qa = {};
			var $a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Va.h: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Va.g:
						case Va.f: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						default:
							return e
					}
				},
				Ka = Object(S.c)({
					pending: $a
				}),
				za = Object(S.c)({
					list: Ka
				});
			const Ya = {};
			var Xa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Va.f:
						case Va.c:
							return e;
						case Va.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Va.d: {
							const {
								emojiName: n,
								subredditId: r
							} = t.payload, s = e[r].emojis, {
								[n]: a,
								...o
							} = s;
							return {
								...e,
								[r]: {
									...e[r],
									emojis: o
								}
							}
						}
						case Va.i: {
							const n = t.payload,
								r = e[n.subredditId].emojis,
								s = {
									url: n.url,
									name: n.name,
									userFlairAllowed: n.userFlairAllowed,
									postFlairAllowed: n.postFlairAllowed,
									modFlairOnly: n.modFlairOnly
								},
								a = {
									...r,
									[n.name]: s
								};
							return {
								...e,
								[n.subredditId]: {
									...e[n.subredditId],
									emojis: a
								}
							}
						}
						case Va.e: {
							const {
								emojiName: n,
								isSnoomoji: r,
								settings: s,
								subredditId: a
							} = t.payload, o = r ? "snoomojis" : "emojis", c = e[a][o], i = {
								...c,
								[n]: {
									...c[n],
									...s
								}
							};
							return {
								...e,
								[a]: {
									...e[a],
									[o]: i
								}
							}
						}
						default:
							return e
					}
				},
				Ja = Object(S.c)({
					api: za,
					models: Xa
				}),
				Za = n("./src/reddit/actions/experiments.ts");
			const eo = /^experiment_(.*)$/i,
				to = e => {
					const t = e.match(eo);
					if (null !== t) return t[1]
				},
				no = {};
			var ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = to(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return ua()(r) ? e : {
								...e,
								...r
							}
						}
						case Za.b: {
							const {
								experimentName: n,
								override: r
							} = t.payload;
							return n ? {
								...e,
								[n]: r || ""
							} : e
						}
						default:
							return e
					}
				},
				so = n("./src/reddit/actions/externalAccount.ts");
			const ao = {};
			var oo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.e:
					case so.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.d: {
						const {
							provider: n,
							error: r
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
			const co = {};
			var io = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.f:
						case so.d: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				uo = Object(S.c)({
					error: oo,
					pending: io
				});
			const lo = {};
			var po = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.l:
					case so.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.j: {
						const {
							provider: n,
							error: r
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
			const bo = {};
			var fo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.c:
						case so.a: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ho = Object(S.c)({
					error: po,
					pending: fo
				});
			const yo = {};
			var mo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.i:
					case so.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.g: {
						const {
							subredditName: n,
							apiError: r
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
			const go = {};
			var vo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : go,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const Oo = {};
			var Eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.h:
						case so.g: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				_o = Object(S.c)({
					error: mo,
					fetched: vo,
					pending: Eo
				});
			const Io = {};
			var So = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.l:
					case so.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.j: {
						const {
							username: n,
							apiError: r
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
			const jo = {};
			var To = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.k:
						case so.j: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				wo = Object(S.c)({
					error: So,
					pending: To
				}),
				Do = Object(S.c)({
					connect: uo,
					disconnect: ho,
					user: wo,
					subreddit: _o
				});
			const Po = {};
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Po,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.h: {
						const {
							subredditName: n,
							accountsData: r
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
			const Co = {};
			var Ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case so.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: wr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				No = Object(S.c)({
					api: Do,
					user: Ro,
					subreddit: Ao
				}),
				xo = n("./src/reddit/featureFlags/index.ts");
			const ko = new Set(["0", "disabled", "false", "off", ""]);
			var Lo = e => !ko.has(e.toLowerCase());
			const Uo = xo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Mo = xo.a.reduce((e, t) => (e[t] = null, e), {});
			var Bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(xo.g)(e);
									if (r) {
										const s = Uo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || Lo(r);
											t[s] = a
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
						case xo.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case xo.c: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return {
								...e,
								[n]: !r
							}
						}
						default:
							return e
					}
				},
				Fo = Object(S.c)({
					overrides: Bo
				}),
				Go = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const qo = {
				focusedVerticalGqlError: null
			};
			var Ho = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.h:
					case Go.g:
					case Go.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Go.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Wo = {
				focusedVerticalGqlPending: !1
			};
			var Vo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Go.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Go.e:
						case Go.g:
						case Go.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Qo = Object(S.c)({
					error: Ho,
					pending: Vo
				});
			var $o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.g:
					case Go.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Ko = {
				dismissed: !0
			};
			var zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ko,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.j:
						return {
							dismissed: !1
						};
					case Go.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Yo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.g:
					case Go.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.g:
					case Go.c:
					case Go.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Go.g:
						case Go.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Zo = Object(S.c)({
					api: Qo,
					components: zo,
					interactedSubredditIds: Yo,
					recommendedSubredditIds: Jo,
					category: $o,
					lastLoadedEnv: Xo
				});
			Object(Ce.a)("FONTS_FONT_FILES_PARSED");
			const ec = [];
			var tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var rc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ac = Object(S.c)({
					error: nc,
					pending: rc,
					showLoader: sc
				});
			var oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var cc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var ic = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const n = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return n.thingId;
					case ee.s:
					case u.b:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var dc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const pc = Oe.n;
			var bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || pc
						}
						default:
							return e
					}
				},
				fc = Object(S.c)({
					api: ac,
					correlationId: oc,
					gildModalThingId: ic,
					isAnonymous: dc,
					isIframed: uc,
					message: lc,
					gildedThing: cc,
					selectedAward: bc
				});
			var hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var yc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				mc = Object(S.c)({
					error: hc,
					pending: yc
				});
			var gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				vc = Object(S.c)({
					api: mc,
					givePremiumModalAccountName: gc
				}),
				Oc = n("./src/reddit/actions/header.ts"),
				Ec = n("./src/reddit/actions/overlayEvents.ts");
			var _c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oc.a:
							return !1;
						case Oc.b:
							return !0;
						case Oc.c:
							return !e;
						case Ec.b:
							return !1;
						default:
							return e
					}
				},
				Ic = Object(S.c)({
					isSubscriptionsDropdownOpen: _c
				});
			var Sc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				jc = n("./src/reddit/actions/imageUploads.ts");
			const Tc = {};
			var wc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case jc.c:
					case jc.e:
					case jc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case jc.a: {
						const n = t.payload;
						if (!e[n.id]) return e;
						const r = {
							...e
						};
						return delete r[n.id], r
					}
					default:
						return e
				}
			};
			var Dc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case _e.b: {
						const r = t.payload;
						return ua()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Pc = {
				notifications: null,
				id: null
			};
			var Ac = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case _e.b: {
							const s = t.payload;
							return ua()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				Cc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var Rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cc.a:
							return !0;
						default:
							return e
					}
				},
				Nc = Object(S.c)({
					inFeedPosition: Dc,
					notifications: Ac,
					shouldHideInAppNotifications: Rc
				}),
				xc = n("./src/reddit/actions/interceptedAction.ts");
			var kc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xc.a:
							return t.payload;
						case xc.b:
							return null;
						default:
							return e
					}
				},
				Lc = n("./src/reddit/actions/changeUsername.ts");
			var Uc = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lc.a:
							return !1;
						case Lc.b:
							return !0;
						default:
							return e
					}
				},
				Mc = n("./src/reddit/actions/emailVerificationTooltip.ts");
			var Bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mc.a:
							return !e;
						default:
							return e
					}
				},
				Fc = n("./src/reddit/actions/moderatingSubreddits.ts");
			var Gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fc.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case V.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case De.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: n
							} = t;
							return n.subredditPermissions && n.subreddits ? !!n.subredditPermissions.posts : e
						}
						case B.i:
						case B.f:
						case B.m:
						case B.p:
						case B.v: {
							if (e) return e;
							const {
								response: n
							} = t.payload, {
								moderatingSubreddits: r,
								moderatingProfiles: s
							} = n;
							let a = Object.keys(r).some(e => !0 === r[e].posts);
							if (!a) {
								a = Object.keys(s).some(e => !0 === r[e].posts)
							}
							return a
						}
						default:
							return e
					}
				},
				qc = n("./src/reddit/actions/jsApi.ts");
			const Hc = [];
			var Wc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qc.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				Vc = n("./src/reddit/actions/langSite/index.ts");
			const Qc = {
				bannerClosedTime: 0
			};
			var $c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vc.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				Kc = n("./src/reddit/actions/leaderboard/constants.ts");
			const zc = {};
			var Yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kc.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Kc.b:
					case Kc.c: {
						const {
							subredditId: n
						} = t.payload, {
							[n]: r,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Xc = {};
			var Jc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kc.a:
						case Kc.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case Kc.b: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				Zc = Object(S.c)({
					error: Yc,
					pending: Jc
				});
			const ei = {};
			var ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kc.c: {
							const {
								subredditId: n,
								data: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				ni = Object(S.c)({
					api: Zc,
					models: ti
				});
			var ri = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						const {
							listingKey: n
						} = t.payload;
						return n || e
					}
					default:
						return e
				}
			};
			const si = {};
			var ai = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : si,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const oi = {};
			var ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ii = Object(S.c)({
					error: ai,
					pending: ci
				});
			const di = {};
			var ui = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.bc.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const li = {};
			var pi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.bc.Users) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const bi = {};
			var fi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				hi = Object(S.c)({
					api: ii,
					identifiers: pi,
					fetchedTokens: ui,
					loadMore: fi
				});
			const yi = {};
			var mi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.bc.Comments) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Comments) || s && s.comments ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const gi = {};
			var vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Comments) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Oi = Object(S.c)({
					error: mi,
					pending: vi
				});
			const Ei = {};
			var _i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ei,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.bc.Comments)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const Ii = {};
			var Si = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.bc.Comments) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ji = {};
			var Ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				wi = Object(S.c)({
					api: Oi,
					identifiers: Si,
					fetchedTokens: _i,
					loadMore: Ti
				});
			const Di = {};
			var Pi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Di,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.bc.Subreddits) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.bc.Subreddits) || s && s.communities ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ai = {};
			var Ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ai,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Subreddits) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ri = Object(S.c)({
					error: Pi,
					pending: Ci
				});
			const Ni = {};
			var xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.bc.Subreddits)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const ki = {};
			var Li = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ki,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.bc.Subreddits) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ui = {};
			var Mi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				Bi = Object(S.c)({
					api: Ri,
					identifiers: Li,
					fetchedTokens: xi,
					loadMore: Mi
				});
			const Fi = {};
			var Gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.bc.Subreddits) && -1 === r.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case W.a: {
						const {
							key: n,
							error: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					case Ee.f:
					case Ee.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ee.d: {
						const {
							key: n,
							error: r
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
			const qi = {};
			var Hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Subreddits) && -1 === r.indexOf(Re.bc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Subreddits) && -1 === r.indexOf(Re.bc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						case Ee.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ee.e:
						case Ee.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Wi = Object(S.c)({
					error: Gi,
					pending: Hi
				});
			const Vi = {};
			var Qi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					case Ee.e: {
						const {
							fetchedToken: n,
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const $i = {};
			var Ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: e[n].concat(r)
						}
					}
					case W.c: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const zi = {};
			var Yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Subreddits) && -1 === s.indexOf(Re.bc.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(Dt.a)(e, n)
						}
						case Ee.e: {
							const {
								key: n,
								token: r
							} = t.payload;
							return {
								...e,
								[n]: {
									token: r
								}
							}
						}
						default:
							return e
					}
				},
				Xi = Object(S.c)({
					api: Wi,
					identifiers: Ki,
					fetchedTokens: Qi,
					loadMore: Yi
				});
			const Ji = {};
			var Zi = n("./src/reddit/actions/eventPosts/constants.ts"),
				ed = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				td = n("./src/reddit/actions/pages/topic.ts");
			const nd = {};
			var rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.b:
						case je.g:
						case je.f:
						case _e.c:
						case _e.b:
						case we.c:
						case we.b:
						case V.SUBREDDIT_PENDING:
						case V.SUBREDDIT_LOADED:
						case _e.g:
						case _e.f:
						case Te.e:
						case Te.f:
						case Te.i:
						case Te.h:
						case Se.s:
						case Se.r:
						case ed.b:
						case ed.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case $.j:
						case td.TOPIC_DATA_PENDING:
						case td.TOPIC_DATA_LOADED:
						case td.MORE_POSTS_PENDING:
						case td.MORE_POSTS_LOADED:
						case $.i:
						case Zi.e:
						case Zi.c:
						case Zi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: null
							}
						}
						case W.b:
						case W.c:
						case Ne.d:
						case Ne.e: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Posts) ? e : {
								...e,
								[n]: null
							}
						}
						case je.a:
						case je.e:
						case _e.a:
						case we.a:
						case V.SUBREDDIT_FAILED:
						case _e.e:
						case Te.g:
						case Se.q:
						case ed.a:
						case $.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case td.TOPIC_DATA_FAILED:
						case td.MORE_POSTS_FAILED:
						case Zi.b: {
							const {
								key: n,
								error: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case W.a:
						case Ne.c: {
							const {
								error: n,
								key: r,
								success: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.bc.Posts) || s && s.posts ? e : {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				sd = n("./src/reddit/actions/linkedPosts/constants.ts"),
				ad = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				od = n("./src/reddit/actions/subreddit/constants.ts");
			const cd = {};
			var id = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.g:
						case _e.c:
						case we.c:
						case q.PROFILE_POSTS_PENDING:
						case Pe.f:
						case V.SUBREDDIT_PENDING:
						case _e.g:
						case Te.f:
						case Te.i:
						case Se.s:
						case ed.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case td.MORE_POSTS_PENDING:
						case Zi.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case W.b:
						case Ne.d: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Posts) ? e : {
								...e,
								[n]: !0
							}
						}
						case je.b:
						case je.a:
						case je.f:
						case je.e:
						case _e.b:
						case _e.a:
						case we.a:
						case we.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case V.SUBREDDIT_LOADED:
						case V.SUBREDDIT_FAILED:
						case _e.f:
						case _e.e:
						case sd.b:
						case sd.c:
						case Te.e:
						case Te.d:
						case Te.h:
						case Te.g:
						case Se.r:
						case Se.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case ad.a:
						case ad.b:
						case od.j:
						case ed.b:
						case ed.a:
						case $.i:
						case $.h:
						case td.MORE_POSTS_LOADED:
						case td.MORE_POSTS_FAILED:
						case Zi.c:
						case Zi.b:
						case Zi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case od.r: {
							if (!t.payload || !t.payload.length) return e;
							const n = {};
							for (const e of t.payload) {
								n[e.key] = !1
							}
							return {
								...e,
								...n
							}
						}
						case W.c:
						case W.a:
						case Ne.e:
						case Ne.c: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.bc.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				dd = Object(S.c)({
					error: rd,
					pending: id
				});
			const ud = {};
			var ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _e.b:
						case V.SUBREDDIT_LOADED: {
							const {
								key: n,
								correlationId: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				pd = n("./src/reddit/actions/postList.ts"),
				bd = n("./node_modules/lodash/omitBy.js"),
				fd = n.n(bd);

			function hd(e, t) {
				return t = t.toLowerCase(), fd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const yd = {};
			var md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pd.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case pd.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? wr()(e, [n]) : e
					}
					case V.SUBREDDIT_INVALIDATE_LISTING:
						return hd(e, t.payload);
					default:
						return e
				}
			};
			const gd = {};
			var vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case Te.e:
						case _e.b:
						case we.b:
						case V.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case td.TOPIC_DATA_LOADED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: {}
							}
						}
						case je.f:
						case _e.f:
						case Te.h:
						case Se.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case $.i:
						case td.MORE_POSTS_LOADED: {
							const {
								key: n,
								fetchedToken: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									[r]: !0
								}
							}
						}
						case Ne.e: {
							const {
								fetchedToken: n,
								key: r,
								type: s
							} = t.payload;
							if (s.indexOf(Re.bc.Posts) > -1) {
								const t = e[r];
								return {
									...e,
									[r]: {
										...t,
										[n]: !0
									}
								}
							}
							return e
						}
						case V.SUBREDDIT_INVALIDATE_LISTING:
							return hd(e, t.payload);
						default:
							return e
					}
				},
				Od = n("./src/reddit/actions/post.ts");
			const Ed = {};
			var _d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ed,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case _e.c:
						case Te.f:
						case we.c:
						case q.PROFILE_POSTS_PENDING:
						case V.SUBREDDIT_PENDING:
						case Pe.f:
						case q.PROFILE_POSTS_PENDING:
						case td.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case Ee.e:
						case sd.c:
						case Te.e:
						case ad.b:
						case _e.b:
						case je.b:
						case we.b:
						case V.SUBREDDIT_LOADED:
						case od.j:
						case ed.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case td.TOPIC_DATA_LOADED:
						case Zi.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case od.r: {
							if (!t.payload || !t.payload.length) return e;
							const n = {};
							for (const e of t.payload) {
								const t = e;
								n[t.key] = t.postIds
							}
							return {
								...e,
								...n
							}
						}
						case je.f:
						case _e.f:
						case Te.h:
						case Se.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case $.i:
						case td.MORE_POSTS_LOADED:
						case Zi.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case W.c: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Posts) ? e : {
								...e,
								[n]: r
							}
						}
						case Ne.e: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.bc.Posts) ? e : {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case Od.o: {
							const {
								newStickiedPostList: n,
								listingKey: r
							} = t.payload;
							if (!e[r]) return e;
							const s = [...e[r]].filter(e => !n.includes(e));
							return s.unshift(...n), {
								...e,
								[r]: s
							}
						}
						case V.SUBREDDIT_INVALIDATE_LISTING:
							return hd(e, t.payload);
						default:
							return e
					}
				},
				Id = n("./src/lib/makeListingKey/index.ts");
			const Sd = {};
			var jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Id.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case On.a:
					case On.q: {
						const t = {};
						return Object.keys(e).forEach(n => {
							t[n] = {
								...e[n],
								hasChanged: !0
							}
						}), t
					}
					default:
						return e
				}
			};
			const Td = {};
			var wd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Td,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case _e.b:
					case we.b:
					case V.SUBREDDIT_LOADED:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case _e.f:
					case Te.e:
					case Te.h:
					case Se.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case $.i:
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED: {
						const {
							key: n,
							token: r,
							dist: s
						} = t.payload;
						return r ? {
							...e,
							[n]: {
								token: r,
								dist: s
							}
						} : Object(Dt.a)(e, n)
					}
					case Ne.e:
					case W.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.bc.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(Dt.a)(e, n)
					}
					case V.SUBREDDIT_INVALIDATE_LISTING:
						return hd(e, t.payload);
					default:
						return e
				}
			};
			const Dd = {};
			var Pd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zi.c:
						case Zi.d: {
							const {
								pageInfo: n,
								key: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Ad = Object(S.c)({
					api: dd,
					correlationIds: ld,
					endMarkers: md,
					fetchedTokens: vd,
					ids: _d,
					listingSort: jd,
					loadMore: wd,
					pageInfo: Pd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ji,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case W.c:
							case Ne.e: {
								const {
									key: s,
									treatment: a,
									type: o
								} = r.payload;
								return -1 === o.indexOf(e) ? n : {
									...n,
									[s]: a[t]
								}
							}
							default:
								return n
						}
					}))(Re.bc.Posts, Re.ac.Posts)
				}),
				Cd = Object(S.c)({
					activeKey: ri,
					authorOrder: hi,
					commentOrder: wi,
					communityOrder: Bi,
					listingOrder: Xi,
					postOrder: Ad
				});
			var Rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b: {
						const n = t.payload;
						return ua()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Nd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b: {
						const n = t.payload;
						return ua()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b:
						return !0;
					default:
						return e
				}
			};
			var kd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ld = Object(S.c)({
					announcements: Rd,
					featured: Nd,
					isFrontpageLoaded: xd,
					shouldShowAnnouncements: kd
				}),
				Ud = n("./src/reddit/actions/media.ts");
			const Md = {},
				Bd = {};
			var Fd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ud.b: {
						const {
							postId: n,
							index: r
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
			const Gd = {};
			var qd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.e: {
							const {
								postId: n,
								isTileLayout: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Hd = Object(S.c)({
					currentSlideIndex: Fd,
					isGalleryTileLayout: qd
				});
			var Wd = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ud.c:
						return t.payload;
					default:
						return e
				}
			};
			var Vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.d:
							return t.payload;
						default:
							return e
					}
				},
				Qd = Object(S.c)({
					isMuted: Wd,
					volume: Vd
				}),
				$d = n("./src/reddit/actions/meta.ts");
			const Kd = {
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
			var zd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $d.b:
							return t.payload;
						case $d.a:
							return {
								...e, ...t.payload
							};
						case $d.e:
							return {
								...e, locale: t.payload
							};
						case $d.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case $d.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case $d.d:
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
				Yd = n("./src/reddit/actions/subredditModeration/constants.ts");
			const Xd = {};
			var Jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case De.PAGE_LOADED: {
						const {
							payload: n
						} = t;
						if (!n.subredditPermissions || !n.subreddits) return e;
						const r = Object.keys(n.subredditAboutInfo || {});
						if (1 !== r.length) return e;
						const s = r[0];
						return {
							...e,
							[s]: n.subredditPermissions
						}
					}
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v: {
						const {
							response: n
						} = t.payload, {
							moderatingSubreddits: r,
							moderatingProfiles: s
						} = n;
						return {
							...e,
							...r,
							...s
						}
					}
					case $.f:
					case Te.e:
					case B.k: {
						const n = t.payload,
							{
								moderatingSubreddits: r,
								moderatingProfiles: s
							} = n;
						return {
							...e,
							...r,
							...s
						}
					}
					case Yd.gb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					case Yd.Z: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			var Zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var eu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				tu = Object(S.c)({
					error: Zd,
					pending: eu
				});
			const nu = [];
			var ru = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Te.e: {
							const n = t.payload,
								{
									filteredSubreddits: r
								} = n;
							return r || e
						}
						case Te.j: {
							const n = t.payload;
							return [...e, n]
						}
						case Te.k:
						case Te.a: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						default:
							return e
					}
				},
				su = Object(S.c)({
					api: tu,
					names: ru
				}),
				au = Object(S.c)({
					filteredSubreddits: su
				}),
				ou = n("./src/reddit/actions/modMode.ts");
			var cu = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ou.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const iu = {};
			var du = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.x: {
						const {
							moreCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case L.w: {
						const {
							moreCommentsItem: n
						} = t.payload;
						return {
							...e,
							[n.id]: null
						}
					}
					case L.v: {
						const {
							moreCommentsItem: n,
							...r
						} = t.payload;
						return {
							...e,
							[n.id]: r || {}
						}
					}
					default:
						return e
				}
			};
			const uu = {};
			var lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.x: {
							const {
								moreCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case L.v:
						case L.w: {
							const {
								moreCommentsItem: n
							} = t.payload;
							return {
								...e,
								[n.id]: !1
							}
						}
						default:
							return e
					}
				},
				pu = Object(S.c)({
					error: du,
					pending: lu
				});
			const bu = {};
			var fu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				hu = Object(S.c)({
					api: pu,
					models: fu
				});
			var yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.b:
					case Se.c:
						return null;
					case Se.a:
						return t.payload;
					default:
						return e
				}
			};
			var mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.a:
					case Se.c:
						return !0;
					case Se.b:
						return !1;
					default:
						return e
				}
			};
			var gu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.b:
						case Se.a:
						case Se.c:
							return null;
						case Se.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				vu = Object(S.c)({
					error: yu,
					fetched: mu,
					pending: gu
				});
			var Ou = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.f:
					case Se.g:
						return null;
					case Se.e:
						return t.payload;
					default:
						return e
				}
			};
			var Eu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.e:
					case Se.g:
						return !0;
					case Se.f:
						return !1;
					default:
						return e
				}
			};
			var _u = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.e:
						case Se.g:
							return !1;
						case Se.f:
							return !0;
						default:
							return e
					}
				},
				Iu = Object(S.c)({
					error: Ou,
					fetched: Eu,
					pending: _u
				});
			var Su = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.i:
					case Se.j:
						return null;
					case Se.h:
						return t.payload;
					default:
						return e
				}
			};
			var ju = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.h:
					case Se.j:
						return !0;
					case Se.i:
						return !1;
					default:
						return e
				}
			};
			var Tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.h:
						case Se.j:
							return !1;
						case Se.i:
							return !0;
						default:
							return e
					}
				},
				wu = Object(S.c)({
					error: Su,
					fetched: ju,
					pending: Tu
				});
			var Du = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.l:
					case Se.m:
						return null;
					case Se.k:
						return t.payload;
					default:
						return e
				}
			};
			var Pu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.k:
					case Se.m:
						return !0;
					case Se.l:
						return !1;
					default:
						return e
				}
			};
			var Au = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.k:
						case Se.m:
							return !1;
						case Se.l:
							return !0;
						default:
							return e
					}
				},
				Cu = Object(S.c)({
					error: Du,
					fetched: Pu,
					pending: Au
				});
			var Ru = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.o:
					case Se.p:
						return null;
					case Se.n:
						return t.payload;
					default:
						return e
				}
			};
			var Nu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.n:
					case Se.p:
						return !0;
					case Se.o:
						return !1;
					default:
						return e
				}
			};
			var xu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.n:
						case Se.p:
							return !1;
						case Se.o:
							return !0;
						default:
							return e
					}
				},
				ku = Object(S.c)({
					error: Ru,
					fetched: Nu,
					pending: xu
				});
			var Lu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.t:
						return !1;
					case Se.u:
						return !0;
					default:
						return e
				}
			};
			var Uu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.t:
							return !0;
						case Se.u:
							return !1;
						default:
							return e
					}
				},
				Mu = Object(S.c)({
					fetched: Lu,
					pending: Uu
				});
			var Bu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.A:
					case Se.B:
						return null;
					case Se.z:
						return t.payload;
					default:
						return e
				}
			};
			var Fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.A:
					case Se.z:
						return !1;
					case Se.B:
						return !0;
					default:
						return e
				}
			};
			var Gu = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.A:
							return !0;
						case Se.B:
						case Se.z:
							return !1;
						default:
							return e
					}
				},
				qu = Object(S.c)({
					error: Bu,
					fetched: Fu,
					pending: Gu
				});
			var Hu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.w:
					case Se.x:
						return null;
					case Se.v:
						return t.payload;
					default:
						return e
				}
			};
			var Wu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.v:
					case Se.x:
						return !0;
					case Se.w:
						return !1;
					default:
						return e
				}
			};
			var Vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.v:
						case Se.x:
							return null;
						case Se.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				Qu = Object(S.c)({
					error: Hu,
					fetched: Wu,
					pending: Vu
				}),
				$u = Object(S.c)({
					addSubreddit: vu,
					create: Iu,
					deleteMulti: wu,
					duplicate: Cu,
					edit: ku,
					forUser: Mu,
					recommendations: qu,
					removeSubreddit: Qu
				}),
				Ku = n("./node_modules/lodash/isEqual.js"),
				zu = n.n(Ku),
				Yu = n("./node_modules/lodash/union.js"),
				Xu = n.n(Yu);

			function Ju(e, t, n) {
				let r, s, a = e.length - 1,
					o = 0;
				for (; o <= a;) {
					const c = n(r = e[s = (o + a) / 2 | 0], t);
					if (c < 0) {
						if ((o = s + 1) > a) return o
					} else {
						if (!(c > 0)) return s;
						if ((a = s - 1) < o) return a + 1
					}
				}
				return (o + a) / 2 | 0
			}
			var Zu = n("./src/reddit/actions/profile/constants.ts");
			const el = {};
			var tl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.b:
						case Se.r:
						case Se.u:
						case Zu.h: {
							const {
								multireddits: n,
								multiredditsByUser: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...e
							}, o = {
								...n,
								...s
							};
							for (const t in r) {
								const n = r[t],
									s = e[t];
								a[t] = Xu()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return zu()(e, a) ? e : a
						}
						case Se.g:
						case Se.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = Ju(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case Se.j: {
							const n = t.payload;
							for (const t in e) {
								const r = e[t];
								if (r.indexOf(n) > -1) return {
									...e,
									[t]: r.filter(e => e !== n)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				nl = n("./src/reddit/actions/subscription/constants.ts"),
				rl = n("./src/reddit/models/Multireddit/index.ts");
			const sl = {};
			var al = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b:
					case Se.r:
					case Se.u:
					case Zu.h: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(rl.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && zu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return ua()(n) ? e : {
							...e,
							...n
						}
					}
					case Se.g:
					case Se.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Se.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case Se.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Se.x: {
						const {
							id: n,
							multipath: r,
							type: s
						} = t.payload, a = e[r], o = "subreddit" === s ? (a.subredditIds || []).filter(e => e !== n) : a.subredditIds, c = "profile" === s ? (a.profileIds || []).filter(e => e !== n) : a.profileIds;
						return {
							...e,
							[r]: {
								...a,
								profileIds: c,
								subredditIds: o
							}
						}
					}
					case nl.d: {
						const {
							makeFavorite: n,
							multiredditPath: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFavorited: n
							}
						}
					}
					case nl.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								isFollowed: n,
								isFavorited: !1
							}
						}
					}
					case Se.c: {
						const {
							id: n,
							multipaths: r,
							type: s
						} = t.payload, a = r.reduce((t, r) => {
							const a = e[r],
								o = "subreddit" === s ? [...a.subredditIds || [], n] : a.subredditIds,
								c = "profile" === s ? [...a.profileIds || [], n] : a.profileIds;
							return {
								...t,
								[r]: {
									...a,
									subredditIds: o,
									profileIds: c
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
			const ol = {};
			var cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ol,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.B: {
							const {
								multipath: n,
								subreddits: r
							} = t.payload;
							return {
								...e,
								[n]: Object.keys(r)
							}
						}
						default:
							return e
					}
				},
				il = Object(S.c)({
					api: $u,
					byUserId: tl,
					models: al,
					recommendations: cl
				}),
				dl = n("./src/reddit/actions/notificationBanner.ts");
			var ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dl.b:
							return t.payload.notificationBannerId;
						case dl.a:
							return null;
						default:
							return e
					}
				},
				ll = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ll.e:
					case ll.b:
						return !1;
					default:
						return e
				}
			};
			var bl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ll.e:
							return !0;
						case ll.a:
						case ll.b:
							return !1;
						default:
							return e
					}
				},
				fl = Object(S.c)({
					error: pl,
					pending: bl
				});
			var hl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var yl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const ml = [];
			var gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ml,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.b: {
						const n = t.payload && t.payload.nodes;
						return [...e, ...n]
					}
					case ll.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case ll.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case ll.c: {
						const n = t.payload && t.payload.now;
						return e.map(e => e.readAt ? e : {
							...e,
							readAt: n
						})
					}
					default:
						return e
				}
			};
			var vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ll.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Ol = Object(S.c)({
					api: fl,
					earlierDividerIndex: hl,
					notifications: gl,
					pageInfo: vl,
					markAllAsReadTimestamp: yl
				}),
				El = n("./src/reddit/actions/nps.ts");
			const _l = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _l,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case El.c:
							return {
								..._l, pending: !0
							};
						case El.a:
							return _l;
						case El.b: {
							const {
								dest: e
							} = t.payload;
							return {
								..._l,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Sl = n("./src/reddit/actions/accountGender/constants.ts"),
				jl = n("./src/reddit/actions/onboarding/constants.ts");
			const Tl = {
				success: !1,
				failure: !1
			};
			var wl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sl.b:
						return {
							...Tl, success: !0
						};
					case Sl.c:
						return {
							...Tl, failure: !0
						};
					case jl.a:
						return {
							...Tl
						};
					default:
						return e
				}
			};
			var Dl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case _e.b:
						case jl.b: {
							const e = t.payload;
							return (null == e ? void 0 : e.interestTopicRecommendations) && !ua()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
						}
						default:
							return e
					}
				},
				Pl = Object(S.c)({
					genderUpdateState: wl,
					interestTopicRecommendationsState: Dl
				});
			const Al = e => {
				const {
					id: t,
					experimentName: n,
					name: r,
					version: s
				} = e;
				return {
					id: parseInt(t),
					name: n,
					variant: r || void 0,
					version: s
				}
			};
			const Cl = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Al(n);
					return t
				},
				Rl = {};
			var Nl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Za.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Cl(n)
					}
					default:
						return e
				}
			};
			var xl = Object(S.c)({
					byName: Nl,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Za.a: {
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
				kl = Object(S.c)({
					experiments: xl
				}),
				Ll = n("./node_modules/history/esm/history.js"),
				Ul = n("./src/reddit/constants/history.ts");
			const Ml = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				Bl = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				Fl = (e, t, n, r) => {
					const {
						action: s,
						...a
					} = n.route;
					return {
						key: e,
						locationState: r.state,
						meta: n.route.meta,
						queryParams: n.match.queryParams,
						routeMatch: {
							...n,
							route: a
						},
						status: 200,
						url: t,
						urlParams: n.match.params
					}
				};
			var Gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ml,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						const n = e.currentPage,
							r = t.payload,
							{
								routeMatch: s,
								location: a
							} = r,
							{
								key: o
							} = a;
						if (void 0 === o) return e;
						const c = Object(Ll.e)(a),
							i = s ? Fl(o, c, s, a) : Bl(o, c);
						let {
							referrers: d
						} = e;
						if ("PUSH" === r.action) {
							const e = n && n.url || "";
							d = {
								...d,
								[o]: e
							}
						} else if ("REPLACE" === r.action && n && d[n.key]) {
							const {
								[n.key]: e, ...t
							} = d;
							d = {
								...t,
								[o]: e
							}
						}
						return {
							...e,
							referrers: d,
							currentPage: i,
							lastPage: n
						}
					}
					case u.f: {
						const n = t.payload,
							{
								key: r,
								meta: s
							} = n;
						return {
							...e,
							metas: {
								...e.metas,
								[r]: s
							}
						}
					}
					case u.g: {
						if (!e.currentPage) return e;
						const n = t.payload,
							r = {
								...e.currentPage,
								status: n
							};
						return {
							...e,
							currentPage: r
						}
					}
					case F.b:
					case F.f:
						return !e.currentPage || t.payload.postMeta, e;
					case u.c:
						return e;
					case u.e: {
						const {
							allowNavigationCallback: n
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: n
						}
					}
					case u.d:
						return {
							...e, allowNavigationCallback: null
						};
					case _e.b:
					case u.a:
					case V.SUBREDDIT_LOADED: {
						const {
							correlationId: n
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[Ul.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const ql = {};
			var Hl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ql,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							pollId: n
						} = t.payload.pollResults, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case i.j: {
						const {
							pollId: n
						} = t.payload, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case i.i: {
						const {
							pollId: n,
							error: r
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
			const Wl = {};
			var Vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								pollId: n
							} = t.payload.pollResults;
							return {
								...e,
								[n]: !1
							}
						}
						case i.i: {
							const {
								pollId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case i.j: {
							const {
								pollId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				Ql = Object(S.c)({
					error: Hl,
					pending: Vl
				}),
				$l = Object(S.c)({
					voting: Ql
				}),
				Kl = n("./node_modules/lodash/mapValues.js"),
				zl = n.n(Kl),
				Yl = n("./src/reddit/reducers/posts/models/helpers.ts"),
				Xl = n("./src/reddit/actions/economics/predictions/constants.ts");
			const Jl = e => {
				const {
					options: t,
					totalVoteCount: n,
					userSelection: r
				} = e;
				return {
					options: t.reduce((e, t) => {
						let {
							id: n,
							voteCount: s
						} = t;
						return {
							...e,
							[n.toString()]: {
								id: n,
								votes: (s || 0).toString(),
								userSelected: n === r
							}
						}
					}, {}),
					totalVotes: n.toString()
				}
			};
			var Zl = e => {
					if (!e.pollData) return null;
					const {
						id: t,
						authorId: n,
						belongsTo: r,
						created: s,
						title: a,
						isNSFW: o,
						isSpoiler: c,
						pollData: {
							isPrediction: i,
							options: d,
							resolvedOptionId: u,
							totalStakeAmount: l,
							totalVoteCount: p,
							tournamentId: b,
							userSelection: f,
							userWonAmount: h,
							voteUpdatesRemained: y,
							votingEndTimestamp: m,
							predictionStatus: g
						}
					} = e;
					if (i) {
						return {
							id: t,
							createdAt: s,
							creatorId: n,
							subredditId: r.id,
							endsAt: m,
							voteUpdatesRemained: y,
							postId: t,
							title: a,
							options: d,
							totalVoters: p,
							type: _s.a.GA,
							isNSFW: o,
							isPrediction: i,
							isSpoiler: c,
							totalStakeAmount: l || 0,
							tournamentId: b,
							userSelection: f,
							userWonAmount: h,
							resolvedOptionId: u,
							predictionStatus: g,
							totalVoteCount: p
						}
					}
					return {
						id: t,
						createdAt: s,
						creatorId: n,
						subredditId: r.id,
						endsAt: m,
						postId: t,
						options: d,
						totalVoters: p,
						type: _s.a.GA,
						isPrediction: i,
						userSelection: f
					}
				},
				ep = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				tp = n("./src/reddit/models/Prediction/index.ts");

			function np(e, t) {
				let {
					wonAmount: n,
					id: r,
					title: s,
					totalVoteCount: a,
					totalStakeAmount: o,
					status: c,
					selectedOptionId: i,
					...d
				} = e, {
					tournamentId: u,
					subredditId: l,
					creatorId: p
				} = t;
				return {
					id: r,
					isPrediction: !0,
					predictionStatus: c,
					title: s || "",
					creatorId: p,
					tournamentId: u,
					subredditId: l,
					userSelection: i,
					userWonAmount: n,
					postId: r,
					totalStakeAmount: o || 0,
					totalVoteCount: a || 0,
					totalVoters: a || 0,
					...d
				}
			}
			const rp = {};
			var sp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.h: {
						const {
							poll: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case _e.b:
					case V.SUBREDDIT_LOADED:
					case $.i:
					case _e.f:
					case F.b:
					case F.f:
					case Xl.o: {
						const {
							governance: n
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t].poll;
								return e[r.id] = r, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const r = zl()(t.payload.posts, Object(Yl.i)([Yl.p])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = Zl(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = np(t, {
										tournamentId: e,
										creatorId: a.author,
										createdAt: a.created,
										subredditId: a.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...s
						}
					}
					case Xl.q:
					case Xl.p: {
						const {
							pollId: n,
							prediction: {
								options: r,
								selectedOptionId: s,
								totalVoteCount: a,
								...o
							}
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...o,
								userSelection: s,
								options: r.map(t => {
									let {
										id: r,
										redditorStakeAmount: s,
										totalStakeAmount: a,
										voteCount: o
									} = t;
									return {
										...e[n].options.find(e => e.id === r),
										totalStakeAmount: a,
										userStakeAmount: s,
										voteCount: o
									}
								}),
								totalVoters: a
							}
						}
					}
					case Xl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(tp.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(ep.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const ap = {};
			var op = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ap,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							[_s.b.ByVoters]: n, pollId: r
						} = t.payload.pollResults;
						return {
							...e,
							[r]: n
						}
					}
					case i.e: {
						const {
							pollId: n,
							optionId: r,
							options: s
						} = t.payload;
						let a = 0;
						const o = {};
						for (const e of s) a += e.voteCount, o[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === r,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[n]: {
								options: o,
								totalVotes: a.toString()
							}
						}
					}
					case _e.b:
					case V.SUBREDDIT_LOADED:
					case $.i:
					case _e.f:
					case F.b:
					case F.f: {
						const {
							governance: n,
							posts: r
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t],
									{
										[_s.b.ByVoters]: s,
										pollId: a
									} = r.pollResults;
								return e[a] = s, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const s = Object.keys(r).reduce((e, t) => {
							var n;
							if (!(null === (n = r[t]) || void 0 === n ? void 0 : n.pollData)) return e;
							const s = Jl(r[t].pollData);
							return s ? (e[t] = s, e) : e
						}, {});
						return Object.keys(s).length ? {
							...e,
							...s
						} : e
					}
					default:
						return e
				}
			};
			const cp = {};
			var ip = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								[_s.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case _e.b:
						case V.SUBREDDIT_LOADED:
						case $.i:
						case _e.f:
						case F.b:
						case F.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[_s.b.ByVotingPower]: s,
											pollId: a
										} = r.pollResults;
									return e[a] = s, e
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
				dp = Object(S.c)({
					byVoters: op,
					byVotingPower: ip
				});
			const up = {};
			var lp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : up,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
							const {
								pollId: n,
								rewardPoints: r
							} = t.payload.pollResults;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						default:
							return e
					}
				},
				pp = Object(S.c)({
					api: $l,
					models: sp,
					results: dp,
					rewards: lp
				});
			const bp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rn.i:
					case Rn.j:
						return {
							...e, reorderError: null
						};
					case Rn.h:
						return {
							...e, reorderError: t.payload
						};
					case Rn.l:
					case Rn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Rn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Rn.p:
					case Rn.q:
						return {
							...e, updateLayoutError: null
						};
					case Rn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const hp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var yp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rn.i:
							return {
								...e, reorderPending: !0
							};
						case Rn.h:
						case Rn.j:
							return {
								...e, reorderPending: !1
							};
						case Rn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Rn.k:
						case Rn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Rn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Rn.o:
						case Rn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				mp = Object(S.c)({
					error: fp,
					pending: yp
				}),
				gp = n("./src/reddit/helpers/path/index.ts");
			const vp = {},
				Op = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(gp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Ep = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case Te.e:
					case Te.h:
					case G.b:
					case G.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case V.SUBREDDIT_LOADED:
					case _e.b:
					case we.b:
					case V.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Od.j:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case Ae.b:
					case W.c:
					case Rn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Op(r);
							s = zl()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Rn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Op(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Rn.g: {
						const {
							collectionId: n,
							postId: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								postIds: s.postIds.filter(e => e !== r)
							}
						} : e
					}
					case Rn.a: {
						const {
							collectionId: n,
							postId: r
						} = t.payload, s = e[n];
						return s && r ? {
							...e,
							[n]: {
								...s,
								postIds: [...s.postIds, r]
							}
						} : e
					}
					case Rn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Rn.s: {
						const {
							collectionId: n,
							newTitle: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								title: r
							}
						} : e
					}
					case Rn.j: {
						const {
							collectionId: n,
							postIds: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								postIds: [...r]
							}
						} : e
					}
					case Rn.m: {
						const {
							collectionId: n,
							newDescription: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								description: r
							}
						} : e
					}
					case Rn.q: {
						const {
							collectionId: n,
							newLayout: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								displayLayout: r
							}
						} : e
					}
					default:
						return e
				}
			};
			const _p = {};
			var Ip = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.PAGE_LOADED:
						case Rn.f: {
							const {
								collections: n
							} = t.payload;
							if (!n) return e;
							const r = Object.keys(n);
							if (!r.length) return e;
							const {
								subredditId: s
							} = n[r[0]];
							return {
								...e,
								[s]: r
							}
						}
						case Rn.d: {
							const {
								collection: n
							} = t.payload, {
								subredditId: r
							} = n, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n.id]
							}
						}
						case Rn.e: {
							const {
								collectionId: n,
								collection: r
							} = t.payload;
							if (!r) return e;
							const s = r && e[r.subredditId];
							return s ? {
								...e,
								[r.subredditId]: s.filter(e => e !== n)
							} : e
						}
						default:
							return e
					}
				},
				Sp = Object(S.c)({
					models: Ep,
					subredditToIds: Ip,
					api: mp
				}),
				jp = n("./src/reddit/actions/postFlair.ts"),
				Tp = n("./src/reddit/models/Flair/index.ts");
			const wp = {},
				Dp = {
					displaySettings: {
						isEnabled: !1,
						position: Tp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Pp = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Dp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Ap = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case je.f:
						case De.PAGE_LOADED:
						case _e.f:
						case Te.e:
						case Te.h:
						case Se.r:
						case ed.b:
						case F.b:
						case F.f:
						case _e.b:
						case we.b:
						case W.c:
						case V.SUBREDDIT_LOADED:
						case G.b:
						case G.e:
						case H.c:
						case H.i:
						case H.e:
						case H.g:
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
							return Pp(e, t.payload.postFlair);
						case jp.c: {
							const {
								subredditId: n,
								isEnabled: r
							} = t.payload, s = {
								...e[n].displaySettings,
								isEnabled: r
							};
							return {
								...e,
								[n]: {
									...e[n],
									displaySettings: s
								}
							}
						}
						case jp.a: {
							const {
								subredditId: n,
								canAssignOwn: r
							} = t.payload, s = {
								...e[n].permissions,
								canAssignOwn: r
							};
							return {
								...e,
								[n]: {
									...e[n],
									permissions: s
								}
							}
						}
						case jp.f: {
							const {
								subredditId: n,
								template: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = {
								...a,
								[r.id]: r
							}, i = [...o];
							return i.includes(r.id) || i.push(r.id), {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case jp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = wr()(a, r), i = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case jp.e:
						case jp.d: {
							const n = t.payload,
								r = e[n.subredditId];
							return {
								...e,
								[n.subredditId]: {
									...r,
									templateIds: n.templateIds
								}
							}
						}
						case B.i:
						case B.f:
						case B.m:
						case B.p:
						case B.v: {
							const {
								response: n
							} = t.payload;
							return Pp(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Cp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Rp = {
				pending: !1,
				items: {}
			};
			var Np = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Cp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.c:
							return t.payload;
						default:
							return e
					}
				},
				kp = n("./src/reddit/actions/embedAndImage.ts");
			const Lp = {};
			var Up = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kp.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case kp.a: {
							const {
								postId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
					}
					return e
				},
				Mp = Object(S.c)({
					loadable: Up
				});
			const Bp = {};
			var Fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Od.d: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !e[n]
						}
					}
					default:
						return e
				}
			};
			var Gp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const qp = [];
			var Hp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qp,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const Wp = {};
			var Vp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Te.e:
					case Te.h:
					case _e.b:
					case V.SUBREDDIT_LOADED:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case W.c:
						return k()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var Qp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.a:
							return t.payload;
						default:
							return e
					}
				},
				$p = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const Kp = {};
			var zp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $p.a: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const Yp = {};
			var Xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.h: {
							const {
								poll: n
							} = t.payload;
							return {
								...e,
								[n.postId]: n.id
							}
						}
						case _e.b:
						case V.SUBREDDIT_LOADED:
						case $.i:
						case _e.f:
						case F.b:
						case F.f:
						case Xl.o: {
							const {
								governance: n,
								posts: r
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t];
									return e[t] = r.poll.id, e
								}, {});
								return {
									...e,
									...t
								}
							}
							const s = Object.keys(r).reduce((e, t) => {
								var n, s;
								const a = r[t];
								if ((null == a ? void 0 : a.pollData) && (e[t] = t), null === (s = null === (n = a.predictionTournament) || void 0 === n ? void 0 : n.predictions) || void 0 === s ? void 0 : s.length) {
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
								...s
							}
						}
						default:
							return e
					}
				},
				Jp = n("./src/reddit/actions/bulkActions/constants.ts"),
				Zp = n("./src/reddit/actions/constants.ts"),
				eb = n("./src/reddit/actions/flairManagement/constants.ts"),
				tb = n("./src/reddit/actions/googleQASchema/constants.ts"),
				nb = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				rb = n("./src/reddit/actions/subredditTopContent.ts"),
				sb = n("./src/reddit/helpers/isPost.ts"),
				ab = n("./node_modules/lodash/pickBy.js"),
				ob = n.n(ab);

			function cb(e, t) {
				const n = ob()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !zu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var ib = n("./src/reddit/models/Gold/Gild/index.tsx"),
				db = n("./src/reddit/models/Media/index.ts"),
				ub = n("./src/reddit/models/ModQueue/index.ts"),
				lb = n("./src/reddit/models/Post/index.ts"),
				pb = n("./src/reddit/models/Vote/index.ts"),
				bb = n("./src/reddit/actions/subredditDuplicates.ts");
			const fb = {};
			var hb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						if (Cr(t) === (Re.Nb.COMMENTS || Re.Nb.DUPLICATES)) {
							const n = Rr(t),
								r = Nr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(lb.t)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(Yl.c)(e[s], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const n = Object(Yl.h)(t.payload.meta);
						return {
							...e,
							...zl()(t.payload.posts, Object(Yl.i)([n, Yl.d, Yl.n, Yl.o, Yl.p, Object(Yl.a)(e), Object(Yl.b)(e), Object(Yl.k)(e), Object(Yl.l)(e), Object(Yl.j)(e)]))
						}
					}
					case Od.j:
						return cb(e, t.payload);
					case bb.a:
						return cb(e, t.payload.posts);
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case sd.c:
					case ad.b:
					case Te.e:
					case Te.h:
					case G.b:
					case G.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case V.SUBREDDIT_LOADED:
					case _e.b:
					case we.b:
					case ed.b:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case od.j:
					case $.i:
					case Ae.b:
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED:
					case Zi.c:
					case Zi.d:
					case Xl.o: {
						const n = Object(Yl.h)(t.payload.meta);
						return {
							...e,
							...zl()(t.payload.posts, Object(Yl.i)([n, Yl.d, Yl.n, Yl.o, Yl.p, Object(Yl.m)(e), Object(Yl.k)(e), Object(Yl.j)(e)]))
						}
					}
					case od.r: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(Yl.h)(t.meta);
							Object.assign(n, zl()(t.posts, Object(Yl.i)([s, Yl.d, Yl.n, Yl.o, Object(Yl.m)(e), Object(Yl.k)(e), Object(Yl.j)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case ed.b: {
						const n = Object(Yl.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...zl()(t.payload.posts, Object(Yl.i)([n, Yl.d, Yl.n, Yl.o, Object(Yl.m)(e), Object(Yl.k)(e), Object(Yl.j)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ee.e:
					case Ne.e:
					case W.c: {
						const n = Object(Yl.h)(t.payload.meta),
							r = zl()(t.payload.posts, Object(Yl.i)([n, Yl.n, Yl.d, Yl.o, Object(Yl.j)(e)]));
						return k()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Od.k: {
						const n = t.payload;
						return k()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case Zp.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(pb.c)(s, r)
						} : e
					}
					case U.b:
					case L.K: {
						const n = t.payload.comment.postId,
							r = e[n];
						if (r) {
							const s = void 0 !== t.payload.numComments ? t.payload.numComments : r.numComments + 1;
							return {
								...e,
								[n]: {
									...r,
									numComments: s
								}
							}
						}
						return e
					}
					case Od.h: {
						const {
							postId: n,
							delta: r
						} = t.payload, s = e[n];
						if (s) {
							let t = s.numComments + r;
							return t < 0 && (t = 0), {
								...e,
								[n]: {
									...s,
									numComments: t
								}
							}
						}
						return e
					}
					case Od.i: {
						const {
							postId: n,
							delta: r
						} = t.payload, s = e[n];
						if (s) {
							let t = s.score + r;
							return t < 0 && (t = 0), {
								...e,
								[n]: {
									...s,
									score: t
								}
							}
						}
						return e
					}
					case L.B: {
						const n = t.payload.postId,
							r = e[n];
						return r ? {
							...e,
							[n]: {
								...r,
								numComments: r.numComments - 1
							}
						} : e
					}
					case ee.tb: {
						const {
							topAwardedPosts: n
						} = t.payload;
						return {
							...e,
							...n.reduce((e, t) => (e[t.post.id] = Object(Yl.i)([Yl.n])(Object(Hr.f)(t.post)), e), {})
						}
					}
					case ee.s: {
						const {
							id: n,
							awardings: r,
							gilder: s,
							treatmentTags: a
						} = t.payload, o = e[n];
						return o ? {
							...e,
							[n]: {
								...Object(ib.a)(o, r, s),
								treatmentTags: a
							}
						} : e
					}
					case ee.D: {
						const {
							awardId: n,
							thingId: r
						} = t.payload, s = e[r];
						return s ? {
							...e,
							[r]: Object(ib.b)(s, n)
						} : e
					}
					case Yd.n: {
						const {
							posts: n
						} = t.payload;
						return k()({
							...e
						}, n)
					}
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v: {
						const {
							response: n
						} = t.payload, {
							posts: r
						} = n;
						return {
							...e,
							...zl()(r, Object(Yl.i)([Yl.n, Yl.o]))
						}
					}
					case Jp.b:
					case B.s: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(sb.a)(e)), c = Object(ub.d)(e, n, o, s, a);
						return k()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Rn.t: {
						const {
							postId: n,
							collectionId: r
						} = t.payload, s = e[n];
						if (s && r) {
							const t = s.collectionIds || [];
							return t.push(r), {
								...e,
								[n]: {
									...s,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Rn.e: {
						const {
							collectionId: n,
							collection: r
						} = t.payload, s = r && r.postIds || [], a = {};
						return s.forEach(t => {
							const r = e[t],
								s = r && r.collectionIds;
							if (s) {
								const e = s.filter(e => e !== n);
								a[t] = {
									...r,
									collectionIds: e
								}
							}
						}), {
							...e,
							...a
						}
					}
					case Rn.g: {
						const {
							collectionId: n,
							postId: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[r],
							a = s && s.collectionIds;
						if (!a) return e;
						const o = a.filter(e => e !== n);
						return {
							...e,
							[r]: {
								...s,
								collectionIds: o
							}
						}
					}
					case Zi.f: {
						const {
							postId: n
						} = t.payload;
						if (!n) return e;
						const r = e[n];
						if (!r || !r.eventInfo) return e;
						const s = r.eventInfo;
						return {
							...e,
							[n]: {
								...r,
								eventInfo: {
									...s,
									eventIsLive: !0
								}
							}
						}
					}
					case Zi.a: {
						const {
							postId: n,
							eventInfo: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[n];
						return s ? {
							...e,
							[n]: {
								...s,
								eventInfo: {
									...r
								}
							}
						} : e
					}
					case Go.g: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...zl()(n.posts, Object(Yl.i)([Yl.n, Yl.o])),
							...e
						} : e
					}
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case rb.b:
						return {
							...zl()(t.payload.posts, Object(Yl.i)([Yl.n, Yl.o])), ...e
						};
					case Od.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(db.K)(s.media) ? {
							...e,
							[n]: {
								...s,
								media: {
									...s.media,
									richtextContent: r,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case eb.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case eb.b: {
						const n = t.payload;
						return Object(Dt.a)(e, n)
					}
					case y.o: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case nb.b: {
						const {
							altText: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								media: {
									...e[r].media,
									altText: n
								}
							}
						}
					}
					case Xl.t: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(Yl.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(Yl.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case Xl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(Yl.q)(e[n], Object(ep.a)(r))
						}
					}
					case nb.a:
						return {
							...e
						};
					case tb.b: {
						const {
							postId: n,
							isEligibleForQASchema: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								isEligibleForQASchema: r
							}
						}
					}
					case tb.a:
						return {
							...e
						};
					case sd.a: {
						const {
							postId: n,
							isEligibleForLinkedPosts: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								isEligibleForLinkedPosts: r
							}
						}
					}
					case y.t:
					case y.q: {
						const n = {};
						for (const e in t.payload) {
							const r = t.payload[e];
							n[r.id] = r
						}
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			var yb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.g:
							return t.payload;
						default:
							return e
					}
				},
				mb = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const gb = {};
			var vb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mb.a: {
						const n = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const Ob = [];
			var Eb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case _e.b:
						case V.SUBREDDIT_LOADED: {
							const {
								recentPostIds: n
							} = t.payload;
							return n && n.length ? n : e
						}
						default:
							return e
					}
				},
				_b = n("./node_modules/uuid/v4.js"),
				Ib = n.n(_b);
			const Sb = Ib()();
			var jb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED:
					case pr.h:
					case pr.a:
					case pr.m:
					case pr.f:
						return Ib()();
					default:
						return e
				}
			};
			var Tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.d:
					case pr.o:
					case pr.k:
					case pr.g:
					case pr.a:
					case pr.m:
					case pr.f:
						return null;
					case pr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case pr.e:
						return "error";
					default:
						return e
				}
			};
			var wb = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.g:
						return !0;
					case pr.m:
					case pr.a:
					case pr.f:
					case pr.e:
						return !1;
					default:
						return e
				}
			};
			var Db = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pr.k:
							return !0;
						case pr.j:
						case pr.e:
						case pr.o:
						case pr.d:
							return !1;
						default:
							return e
					}
				},
				Pb = Object(S.c)({
					creationToken: jb,
					error: Tb,
					pending: wb,
					pendingUpdate: Db
				});
			const Ab = {};
			var Cb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ab,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.c: {
						const {
							subredditId: e,
							id: n
						} = t.payload;
						return {
							subredditId: e,
							scheduledPostId: n
						}
					}
					default:
						return e
				}
			};
			const Rb = {
				standalonePosts: {
					POSTS_LOADED: pr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: pr.o
				},
				recurringPosts: {
					POSTS_LOADED: pr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: pr.d
				}
			};

			function Nb(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case Rb[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: t
							} = r.payload, {
								id: s
							} = t, a = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...n,
								[s]: {
									...n[s] || {},
									...a
								}
							}
						}
						case pr.i:
						case pr.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = r.payload, s = n[e] || {};
							return {
								...n,
								[e]: {
									...Object.keys(s).filter(e => e !== t).reduce((e, t) => (e[t] = s[t], e), {})
								}
							}
						}
						case pr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case Rb[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = r.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = r.payload.scheduledPost
							}
							const s = t.subreddit.id,
								a = n[s][t.id],
								o = {
									[t.id]: {
										...a,
										...t
									}
								};
							return {
								...n,
								[s]: {
									...n[s] || {},
									...o
								}
							}
						}
						default:
							return n
					}
				}
			}
			const xb = {};

			function kb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Rb[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, {
								pageInfo: a
							} = r.scheduledPosts[e];
							return {
								...t,
								[s]: {
									...a
								}
							}
						}
						case pr.h: {
							const {
								subredditId: e
							} = n.payload;
							return Object.keys(t).reduce((n, r) => (r !== e && (n[r] = t[r]), n), {})
						}
						default:
							return t
					}
				}
			}
			var Lb = n("./node_modules/lodash/uniq.js"),
				Ub = n.n(Lb);
			const Mb = {};

			function Bb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Rb[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[Rb[e].postIdsKey];
							return {
								...t,
								[s]: Ub()([...t[s] || [], ...a])
							}
						}
						case pr.i:
						case pr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case pr.h: {
							const {
								subredditId: e
							} = n.payload;
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
			var Fb = Object(S.c)({
					models: Nb("recurringPosts"),
					pageInfo: kb("recurringPosts"),
					postOrder: Bb("recurringPosts"),
					editModal: Cb
				}),
				Gb = Object(S.c)({
					models: Nb("standalonePosts"),
					pageInfo: kb("standalonePosts"),
					postOrder: Bb("standalonePosts")
				}),
				qb = Object(S.c)({
					api: Pb,
					standalonePosts: Gb,
					recurringPosts: Fb
				});
			var Hb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Wb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Vb = Object(S.c)({
					error: Hb,
					pending: Wb
				});
			const Qb = [];
			var $b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qb,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
							return Qb;
						default:
							return e
					}
				},
				Kb = Object(S.c)({
					api: Vb,
					list: $b
				}),
				zb = n("./src/reddit/actions/video.ts");
			const Yb = {};
			var Xb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.e: {
						const {
							auto: n,
							postId: r
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
			const Jb = {};
			var Zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.a: {
						const {
							postId: n,
							isBuffering: r
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
			const ef = {};
			var tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.b: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const nf = {};
			var rf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.c: {
						const {
							postId: n,
							time: r
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
			const sf = {
				mutedInFeed: !0
			};
			var af = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var of = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case zb.d:
						return null;
					default:
						return e
				}
			};
			const cf = {};
			var df = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case zb.e: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
				}
				return e
			};
			const uf = {};
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.h: {
						const {
							postId: n,
							time: r
						} = t.payload, s = e[n] || {
							cached: !0,
							start: r
						};
						return r < s.start ? e : {
							...e,
							[n]: {
								...s,
								playable: r
							}
						}
					}
					case zb.f: {
						const {
							postId: n,
							time: r
						} = t.payload;
						return {
							...e,
							[n]: {
								cached: !1,
								start: r
							}
						}
					}
					default:
						return e
				}
			};
			const pf = {};
			var bf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.j: {
						const {
							postId: n,
							metadata: r
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
			const ff = {};
			var hf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ff,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case zb.g: {
						const {
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
				}
				return e
			};
			const yf = {};
			var mf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zb.i: {
						const {
							postId: n,
							isPlaying: r
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
			const gf = {};
			var vf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zb.m: {
							const {
								postId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				Of = n("./src/reddit/constants/video.ts");
			const Ef = {};
			var _f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ef,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zb.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Of.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				If = Object(S.c)({
					autoPlayed: Xb,
					buffering: Zb,
					consumed: tf,
					continuousViewStartedAt: rf,
					feed: af,
					fullscreen: of ,
					loadable: df,
					loadTimes: lf,
					metadata: bf,
					paused: hf,
					playing: mf,
					started: vf,
					time: _f
				}),
				Sf = Object(S.c)({
					embedAndImage: Mp,
					expanded: Fp,
					focus: Gp,
					followed: Hp,
					instances: Vp,
					isAnimatingUpvote: Qp,
					isTrackingCrossposts: zp,
					metaMap: Xp,
					models: hb,
					modToMemberShare: yb,
					crowdControl: xp,
					postLevelCrowdControl: vb,
					recent: Eb,
					scheduledPosts: qb,
					topAwarded: Kb,
					video: If,
					carousel: Np
				}),
				jf = n("./src/lib/reducers/addAuthentication/index.ts");
			const Tf = {};
			var wf = Object(jf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.b:
						case F.f: {
							const {
								postId: n,
								commentLists: r,
								comments: s
							} = t.payload, a = r[n] && r[n].head;
							return a && s[a.id] && s[a.id].isStickied ? {
								...e,
								[n]: a.id
							} : e
						}
						case L.G: {
							const {
								id: e,
								postId: n
							} = t.payload;
							return {
								[n]: e
							}
						}
						default:
							return e
					}
				}), Tf),
				Df = Object(S.c)({
					data: wf
				});
			const Pf = {};
			var Af = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.f:
					case l.g: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case l.e: {
						const {
							subredditId: n,
							error: r
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
			const Cf = {};
			var Rf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.f: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case l.g:
						case l.e: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Nf = Object(S.c)({
					error: Af,
					pending: Rf
				});
			const xf = {};
			var kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d: {
						const {
							product: n
						} = t.payload;
						return {
							...e,
							[n.id]: void 0
						}
					}
					case l.c:
					case d.f:
					case d.g:
					case d.i:
					case d.j: {
						const {
							productId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case l.a:
					case d.d:
					case d.h: {
						const {
							productId: n,
							error: r
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
			const Lf = {};
			var Uf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.c:
						case d.f: {
							const {
								productId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case l.d: {
							const {
								product: n
							} = t.payload;
							return {
								...e,
								[n.id]: !1
							}
						}
						case l.a:
						case d.d:
						case d.g: {
							const {
								productId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Mf = Object(S.c)({
					error: kf,
					pending: Uf
				}),
				Bf = Object(S.c)({
					fetch: Nf,
					purchase: Mf
				});
			var Ff = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case r.b:
						return null;
					default:
						return e
				}
			};
			const Gf = {};
			var qf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case l.g: {
							const {
								products: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Hf = Object(S.c)({
					api: Bf,
					currentlyPurchasing: Ff,
					models: qf
				});
			const Wf = {};
			var Vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.f:
					case G.e:
					case G.c:
					case G.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case G.d:
					case G.a: {
						const {
							key: n,
							error: r
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
			const Qf = {};
			var $f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.f:
						case G.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case G.e:
						case G.d:
						case G.b:
						case G.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Kf = Object(S.c)({
					error: Vf,
					pending: $f
				});
			const zf = {};
			var Yf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.e: {
							const {
								key: n,
								commentIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case G.b: {
							const {
								key: n,
								commentIds: r
							} = t.payload, s = e[n] || [];
							return {
								...e,
								[n]: s.concat(r)
							}
						}
						default:
							return e
					}
				},
				Xf = n("./src/reddit/actions/comment/list.ts");
			const Jf = {};
			var Zf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Xf.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? wr()(e, n) : e
					}
					default:
						return e
				}
			};
			const eh = {};
			var th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case G.b: {
						const {
							key: n,
							fetchedToken: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: {
								...s,
								[r]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const nh = {};
			var rh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case G.e:
						case G.b: {
							const {
								key: n,
								dist: r,
								token: s
							} = t.payload;
							return s ? {
								...e,
								[n]: {
									dist: r,
									token: s
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				sh = Object(S.c)({
					api: Kf,
					endMarkers: Zf,
					fetchedTokens: th,
					commentIds: Yf,
					loadMore: rh
				}),
				ah = n("./src/reddit/actions/pages/profileModSettings.ts");
			var oh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ah.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				ch = Object(S.c)({
					pending: oh
				}),
				ih = Object(S.c)({
					api: ch
				});
			const dh = {};
			var uh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const lh = {};
			var ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.a:
					case H.d: {
						const {
							listingKey: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case H.b:
					case H.c:
					case H.i:
					case H.f:
					case H.e:
					case H.g: {
						const {
							listingKey: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					default:
						return e
				}
			};
			const bh = {};
			var fh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.b:
						case H.f: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case H.a:
						case H.d:
						case H.c:
						case H.i:
						case H.e:
						case H.g: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				hh = Object(S.c)({
					error: ph,
					pending: fh
				});
			const yh = {};
			var mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
						const {
							listingKey: n,
							itemIds: r
						} = t.payload;
						return {
							...e,
							[n]: [...e[n] || [], ...r]
						}
					}
					default:
						return e
				}
			};
			const gh = {};
			var vh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.i:
						case H.c:
						case H.e:
						case H.g: {
							const {
								pageInfo: n,
								listingKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : gh
						}
						default:
							return e
					}
				},
				Oh = Object(S.c)({
					api: hh,
					ids: mh,
					pageInfo: vh
				}),
				Eh = n("./src/reddit/constants/posts.ts");
			const _h = {};
			var Ih = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _h,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c:
						case Ne.e:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Zu.k: {
							const n = t.payload;
							return n.profile ? {
								...e,
								[n.profile.id]: n.about
							} : e
						}
						case nl.h: {
							const {
								identifiers: n,
								userIsSubscriber: r
							} = t.payload, s = n.filter(e => e.type === Eh.a.PROFILE);
							return s.length ? s.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: r
							}, e), {
								...e
							}) : e
						}
						case On.n: {
							const n = t.payload,
								r = e[n.subredditId];
							if (!r) return e;
							if (r.publicDescription === n.settings.publicDescription) return e;
							const s = {
								...r,
								publicDescription: n.settings.publicDescription
							};
							return {
								...e,
								[n.subredditId]: s
							}
						}
						default:
							return e
					}
				},
				Sh = n("./src/reddit/models/Subreddit/index.ts");
			const jh = {};
			var Th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case _e.f:
					case F.b:
					case F.f:
					case _e.b:
					case G.b:
					case G.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.b:
					case Te.e:
					case Te.h:
					case Se.u:
					case Zu.h:
					case ed.b:
					case Ne.e:
					case $.i:
					case Zu.m:
					case Q.b:
					case Q.e:
					case W.c:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case V.SUBREDDIT_LOADED:
					case we.b:
					case "RECOMMENDED_POSTS_LOADED":
					case nl.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload, r = Object.values(n).reduce((e, t) => Object(Sh.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(r).length ? Object(N.merge)(e, r) : e
					}
					case B.i:
					case B.f:
					case B.m:
					case B.p:
					case B.v:
					case B.k: {
						const {
							response: n
						} = t.payload, r = n && n.profiles;
						return Object(N.merge)(e, r)
					}
					case Zu.l:
					case Zu.k: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(N.merge)(e, {
							[n.id]: n
						}) : e
					}
					case On.n: {
						const n = t.payload,
							{
								title: r,
								over18: s
							} = n.settings,
							a = e[n.subredditId];
						return !a || a.title === r && a.isNSFW === s ? e : {
							...e,
							[n.subredditId]: {
								...a,
								id: n.subredditId,
								title: r,
								isNSFW: s
							}
						}
					}
					case On.l:
					case On.k: {
						const {
							imageUrl: n,
							key: r,
							subredditId: s
						} = t.payload;
						if ("profileIcon" !== r) return e;
						const a = e[s];
						return a ? {
							...e,
							[s]: {
								...a,
								icon: {
									height: null,
									url: n,
									width: null
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const wh = {};
			var Dh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.c:
						case Zu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case Zu.a:
						case Zu.b:
						case Zu.d:
						case Zu.e: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Ph = Object(S.c)({
					pending: Dh
				});
			const Ah = {};
			var Ch = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ah,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case Zu.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
						const {
							profileName: n,
							moderatedSubredditIds: r
						} = t.payload;
						return r ? {
							...e,
							[n]: [...e[n] || [], ...r]
						} : e
					}
					default:
						return e
				}
			};
			const Rh = {};
			var Nh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.e: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case H.c:
						case H.i: {
							const {
								moderatedPageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				xh = Object(S.c)({
					api: Ph,
					models: Ch,
					pageInfo: Nh
				});
			const kh = {};
			var Lh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case Zu.g:
						case Zu.h: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Uh = Object(S.c)({
					pending: Lh
				});
			const Mh = {};
			var Bh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.h: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Fh = Object(S.c)({
					api: Uh,
					pageInfo: Bh
				}),
				Gh = n("./src/reddit/actions/pinnedPost.ts");
			const qh = {};
			var Hh = Object(jf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gh.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case Gh.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-Re.cb)
						}
					}
					case Gh.g: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: s.filter(e => e !== n)
						}
					}
					default:
						return e
				}
			}), qh);
			const Wh = {};
			var Vh = Object(jf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gh.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			}), Wh);
			const Qh = {};
			var $h = Object(jf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gh.c:
						case Gh.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case Gh.b:
						case Gh.e:
						case Gh.d:
						case Gh.g: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: s.filter(e => e !== n)
							}
						}
						default:
							return e
					}
				}), Qh),
				Kh = Object(S.c)({
					data: Hh,
					initialData: Vh,
					pending: $h
				}),
				zh = n("./src/reddit/actions/trophyCase.ts");
			const Yh = {};
			var Xh, Jh, Zh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zh.a: {
							const {
								profileId: n,
								trophyIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				ey = Object(S.c)({
					about: Ih,
					models: Th,
					moderated: xh,
					multireddits: Fh,
					pinnedPosts: Kh,
					trophyCases: Zh
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Xh || (Xh = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Jh || (Jh = {}));
			var ty, ny, ry;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(ty || (ty = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ny || (ny = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ry || (ry = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(ty || (ty = {}));
			Object(Ce.a)("PROMO__SHOW_PROMO"), Object(Ce.a)("PROMO__HIDE_PROMO");
			const sy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var ay = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "PROMO__SHOW_PROMO": {
							const {
								promoType: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case "PROMO__HIDE_PROMO": {
							const {
								promoType: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				oy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const cy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: oy.d,
					viewer_streams_refresh: oy.c,
					viewer_streams_refresh_slop: oy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var iy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case oy.x: {
						const n = t.payload.name.toLowerCase();
						return {
							...e,
							isError: !1,
							isPending: !1,
							subreddits: {
								...e.subreddits,
								[n]: {
									...t.payload.config
								}
							}
						}
					}
					case oy.G:
						return {
							...e, isPending: !0
						};
					case oy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case oy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var dy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.L:
						return {
							...e, [oy.b]: t.payload.error
						};
					case oy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case oy.z: {
						const {
							[oy.b]: t, ...n
						} = e;
						return n
					}
					case oy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const uy = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var ly = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.N:
						return uy(e, t.payload, !0);
					case oy.O:
						return uy(e, oy.b, !0);
					case oy.y:
						return uy(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case oy.z:
						return uy(e, oy.b, !1, t.payload.utcTimeStamp);
					case oy.M:
						return uy(e, t.payload.streamId, !1);
					case oy.L:
						return uy(e, oy.b, !1);
					default:
						return e
				}
			};
			const py = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var by = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case oy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case oy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				fy = Object(S.c)({
					config: iy,
					error: dy,
					pending: ly,
					recommendedViewerSubreddits: by
				});
			const hy = {};
			var yy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case oy.F:
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
			const my = {
				cursor: oy.W,
				timestamps: {},
				visitOrder: []
			};
			var gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.P:
						return my;
					case oy.X: {
						const n = t.payload,
							r = e.visitOrder.includes(n) ? e.visitOrder : [...e.visitOrder, n],
							s = r.indexOf(n);
						return r === e.visitOrder && s === e.cursor ? e : {
							...e,
							visitOrder: r,
							cursor: s
						}
					}
					case p.d:
						return vy(e, t.payload.id);
					case oy.E:
						return vy(e, t.payload);
					case Od.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Oy(e, n)
					}
					case oy.V: {
						const {
							streamId: n,
							timestamp: r
						} = t.payload;
						return {
							...e,
							timestamps: {
								...e.timestamps,
								[n]: r
							}
						}
					}
					default:
						return e
				}
			};
			const vy = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				Oy = (e, t) => {
					const n = e.visitOrder[e.cursor],
						r = new Set(t),
						s = e.visitOrder.filter(e => !r.has(e)),
						a = s.indexOf(n),
						o = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return s.length !== e.visitOrder.length ? {
						...e,
						cursor: o,
						visitOrder: s
					} : e
				},
				Ey = {
					ended: [],
					removed: []
				};

			function _y(e) {
				return [...new Set(e)]
			}
			var Iy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ey,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.t:
						return {
							...e, ended: _y(e.ended.concat(t.payload))
						};
					case oy.u:
						return {
							...e, removed: _y(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const Sy = {};
			var jy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.z:
						const {
							listingName: n, models: r
						} = t.payload;
						if (!n) return e;
						const s = r.map(e => e.post.id),
							a = e[n] || [],
							o = [...new Set([...s, ...a])];
						return {
							...e, [n]: o
						};
					default:
						return e
				}
			};
			const Ty = {},
				wy = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: oy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: oy.l - n
						}
					}), n)
				},
				Dy = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : oy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var Py = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.y:
						return Dy(e, t.payload.model);
					case oy.z:
						return wy(e, t.payload.models);
					case oy.D: {
						const n = t.payload.streamId,
							r = t.payload.isUnsetting ? -1 : 1,
							s = (t.payload.isUp ? 1 : 0) * r,
							a = (t.payload.isUp ? 0 : 1) * r;
						return {
							...e,
							[n]: {
								...e[n],
								downvotes: e[n].downvotes + a,
								upvotes: e[n].upvotes + s
							}
						}
					}
					default:
						return e
				}
			};
			const Ay = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Cy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ay,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case oy.A:
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
			const Ry = {
				reported: []
			};
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ry,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const xy = {
				isIntroFinished: !1
			};
			var ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Ly = {
				reportedStreams: []
			};
			var Uy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ly,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oy.C:
							return {
								...e, ...t.payload
							};
						case p.d: {
							const n = t.payload.id;
							return e.reportedStreams.includes(n) ? e : {
								...e,
								reportedStreams: [...e.reportedStreams, n]
							}
						}
						default:
							return e
					}
				},
				My = Object(S.c)({
					api: fy,
					history: gy,
					hlsStreams: Iy,
					listings: jy,
					models: Py,
					preloads: Cy,
					reports: Ny,
					theaterSettings: ky,
					userSettings: Uy,
					automuteLevels: yy
				}),
				By = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				Fy = n("./src/reddit/actions/session.ts");
			const Gy = [],
				qy = (e, t) => zu()(e, t) ? e : t;
			var Hy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.c:
					case Fy.d:
						return Gy;
					case By.d:
						return qy(e, t.subreddits);
					case By.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, By.c)
					}
					case By.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, By.c)
					}
					default:
						return e
				}
			};
			const Wy = {};
			var Vy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Qy = n("./src/reddit/actions/pages/report/constants.ts");
			var $y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Yy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Xy = Object(S.c)({
					error: Ky,
					pending: zy,
					success: Yy
				}),
				Jy = n("./src/reddit/actions/reportPageRules/constants.ts");
			const Zy = [];
			var em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jy.a:
							return t.payload;
						default:
							return e
					}
				},
				tm = Object(S.c)({
					reportPageApi: Xy,
					reportPageRules: em,
					initialReason: $y
				}),
				nm = n("./src/reddit/actions/reportRules.ts");
			const rm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var sm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nm.b:
						return {
							...e, sitewideRules: t.payload
						};
					case nm.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ce.a)("REQUEST_HOST_SET");
			var am = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const om = "RUN_TIME_ENV_VARS__IS_STAGING",
				cm = (Object(Ce.a)(om), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case om:
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				dm = n("./src/reddit/components/SearchDropdown/index.tsx");
			var um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.g:
						return !0;
					case Ec.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = document.getElementById(dm.b), a = document.getElementById(dm.a);
						return !(!r || !((null == s ? void 0 : s.contains(r)) || (null == a ? void 0 : a.contains(r)))) && e
					}
					case Ne.f:
					case Ec.a:
					case Ec.c:
						return !1;
					default:
						return e
				}
			};
			var lm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c:
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
			const pm = Object.create(null);
			var bm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ne.h: {
							const {
								order: n,
								searchQuery: r
							} = t.payload;
							return Object.assign(Object.create(null), e, {
								...e,
								[r.toLowerCase()]: n
							})
						}
						default:
							return e
					}
				},
				fm = n("./src/reddit/models/Search/index.ts");
			const hm = {};
			var ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(fm.e)(t)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				mm = Object(S.c)({
					idsByQuery: bm,
					models: ym
				});
			const gm = {};
			var vm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c: {
							const {
								viewTreatment: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				Om = Object(S.c)({
					isDropdownOpen: um,
					isSubredditSearchEnabled: function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Ne.a:
								return !1;
							case Ne.b:
								return !0;
							default:
								return e
						}
					},
					searchQuery: lm,
					typeahead: mm,
					viewTreatment: vm
				}),
				Em = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const _m = {};
			var Im = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c: {
						const {
							key: n,
							listingOrder: r,
							postOrder: s,
							posts: a,
							searchQuery: o,
							subreddits: c,
							viewTreatment: i
						} = t.payload, d = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: o
						};
						if (i === Em.c.Trending) {
							const e = [];
							if (r && r.map(t => {
									!e.includes(t.id) && c[t.id] && (e.push(t.id), d.subredditIcons.push({
										url: c[t.id].icon.url,
										subredditName: c[t.id].name
									}), d.displayText || (d.displayText = c[t.id].displayText))
								}), s)
								for (let t = 0; t < s.length; t++) {
									const n = a[s[t]],
										r = n && n.belongsTo ? n.belongsTo.id : void 0;
									r && !e.includes(r) && c[r] && (e.push(r), d.subredditIcons.push({
										url: c[r].icon.url,
										subredditName: c[r].name
									}))
								}
							c && (d.subredditOccurrences = Object.keys(c).length - 1)
						}
						return {
							...e,
							[n]: d
						}
					}
					default:
						return e
				}
			};
			const Sm = {};
			var jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c: {
						const {
							key: n,
							searchDiscoveryUnits: r
						} = t.payload;
						return r && Object.keys(r).length ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const Tm = {};
			var wm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : Tm
						}
						default:
							return e
					}
				},
				Dm = Object(S.c)({
					headerContent: Im,
					models: jm,
					order: wm
				}),
				Pm = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Am = {};
			Object(Ce.a)("SEO__CRAWLER_RECEIVED");
			var Cm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Rm = n("./src/reddit/actions/seo/linksModule.ts");
			const Nm = {};
			var xm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Rm.c:
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
				km = n("./src/reddit/actions/seo/topicLinks.ts");
			const Lm = {};
			var Um = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case km.a:
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
				Mm = Object(S.c)({
					crawler: Cm,
					linksModule: xm,
					topicLinks: Um
				}),
				Bm = n("./src/reddit/actions/shortcuts/constants.ts");
			var Fm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bm.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var Gm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				qm = n("./src/reddit/constants/shortcuts.ts"),
				Hm = n("./src/reddit/helpers/history/index.ts");
			const Wm = qm.d.Global,
				Vm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Hm.b)(Ul.b.IsOverlay) ? qm.d.Lightbox : qm.d.CommentPage;
						case "rpan":
							return Object(Hm.b)(Ul.b.IsOverlay) ? qm.d.Lightbox : Wm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return qm.d.Listing;
						case "modQueuePages":
							return qm.d.Modqueue;
						default:
							return Wm
					}
				};
			var Qm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Vm(e)
							}
							return Wm;
						default:
							return e
					}
				},
				$m = Object(S.c)({
					activeCommentId: Fm,
					activePostId: Gm,
					namespace: Qm
				});
			var Km = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				zm = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Ym = Object(S.c)({
					firstFetch: Km,
					models: zm.b
				}),
				Xm = n("./src/reddit/actions/streaming/modSettings.ts");
			var Jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xm.b:
					case Xm.c:
						return null;
					case Xm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Zm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xm.b:
							return !0;
						case Xm.c:
						case Xm.a:
							return !1;
						default:
							return e
					}
				},
				eg = Object(S.c)({
					error: Jm,
					pending: Zm
				}),
				tg = n("./src/reddit/actions/streaming/constants.ts");
			const ng = {};
			var rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ng,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tg.a: {
							const {
								subredditId: n,
								modSettings: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				sg = Object(S.c)({
					api: eg,
					modSettings: rg
				}),
				ag = n("./src/reddit/models/StructuredStyles/index.ts");
			const og = {};
			var cg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : og,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return og;
						case b.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(ag.h)(e.styles)
						}
						default:
							return e
					}
				},
				ig = n("./src/reddit/actions/exportImportStyles.ts");
			var dg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ig.c:
					case ig.b:
						return null;
					case ig.a:
						return t.payload;
					default:
						return e
				}
			};
			var ug = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ig.c:
							return !0;
						case ig.b:
						case ig.a:
							return !1;
						default:
							return e
					}
				},
				lg = Object(S.c)({
					error: dg,
					pending: ug
				}),
				pg = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				bg = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const fg = {};
			var hg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case W.c:
						case Ne.e:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							const r = n.structuredStyles.data.flairTemplate;
							return {
								...e,
								...r
							}
						}
						case pg.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case pg.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(Dt.a)(e, n)
						}
						case jp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(Dt.a)(e, n)
						}
						case b.k:
							return fg;
						case bg.b: {
							const {
								templates: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				yg = Object(S.c)({
					models: hg
				});
			const mg = {};
			var gg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.f: {
						const n = t.payload;
						return {
							...e,
							[n.imageKey]: n.uploadId
						}
					}
					case b.k:
					case b.e:
						return mg;
					default:
						return e
				}
			};
			var vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Og = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case On.g:
						return null;
					default:
						return e
				}
			};
			const Eg = {};
			var _g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							const r = Object.keys(n.subredditAboutInfo || {});
							if (1 !== r.length) return e;
							const s = r[0],
								a = n.structuredStyles.data.style;
							return {
								...e,
								[s]: a
							}
						}
						case Ne.e:
						case W.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (fa()(n.subreddits, (e, t) => {
									if (e.name.toLowerCase() === n.subredditName.toLowerCase()) return r = t, !1
								}), !r) return e;
							const s = n.structuredStyles.data.style;
							return {
								...e,
								[r]: s
							}
						}
						case b.m: {
							const n = t.payload,
								r = e[n.subredditId];
							return {
								...e,
								[n.subredditId]: {
									...r,
									...n.styles
								}
							}
						}
						case b.h: {
							const n = t.payload;
							return {
								...e,
								[n.subredditId]: n.styles
							}
						}
						case b.k: {
							const n = t.payload,
								r = Object(ag.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case Zu.k: {
							const n = t.payload,
								{
									banner: r,
									profile: s
								} = n;
							if (!r || !s) return e;
							const a = e[s.id];
							return {
								...e,
								[s.id]: {
									...a,
									bannerBackgroundImage: r.url
								}
							}
						}
						case On.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return cb(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case On.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return cb(e, {
									[n.subredditId]: {
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
				Ig = Object(S.c)({
					draft: cg,
					exportStyles: lg,
					flairTemplate: yg,
					imagePreviews: gg,
					isBladeEditorDirty: vg,
					isEditing: Og,
					models: _g
				});
			Object(Ce.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				jg = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Tg = {};
			var wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jg.c:
					case jg.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case jg.a: {
						const {
							key: n,
							error: r
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
			const Dg = {};
			var Pg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jg.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case jg.b:
						case jg.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ag = Object(S.c)({
					error: wg,
					pending: Pg
				});
			const Cg = {};
			var Rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jg.b: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: t.payload
							}
						}
						default:
							return e
					}
				},
				Ng = Object(S.c)({
					api: Ag,
					models: Rg
				}),
				xg = n("./src/reddit/actions/category/constants.ts"),
				kg = n("./src/reddit/actions/subredditMention/constants.ts");
			const Lg = {};
			var Ug = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kg.d:
					case F.b:
					case F.f:
					case W.c:
					case V.SUBREDDIT_FAILED:
					case V.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED:
					case G.b:
					case G.e:
					case Pe.b:
					case Pe.a:
					case Pe.e:
					case Pe.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ne.e:
					case td.TOPIC_DATA_LOADED:
					case od.u: {
						const n = t.payload.subredditAboutInfo;
						if (!n) return e;
						const r = Object.keys(n);
						return 0 === r.length ? e : r.reduce((e, t) => (n[t] && (e[t] ? e[t] = {
							...e[t],
							...n[t],
							allowedPostTypes: {
								...e[t].allowedPostTypes,
								...n[t].allowedPostTypes
							}
						} : e[t] = n[t]), e), {
							...e
						})
					}
					case Va.a: {
						const {
							subredditId: n,
							emojisEnabled: r
						} = t.payload, s = {
							...e[n],
							emojisEnabled: r
						};
						return {
							...e,
							[n]: s
						}
					}
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Eh.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case Go.g:
					case xg.f:
					case od.g:
					case od.o:
					case Xn.B: {
						const {
							subredditsAboutInfo: n
						} = t.payload;
						if (!n) return e;
						const r = Object.keys(n);
						return 0 === r.length ? e : r.reduce((e, t) => (n[t] && (e[t] = e[t] ? {
							...e[t],
							...n[t]
						} : n[t]), e), {
							...e
						})
					}
					case Va.b: {
						const n = t.payload,
							{
								emojiCustomSize: r,
								subredditId: s
							} = n,
							a = e[s];
						if (!a) return e;
						const o = {
							...a
						};
						if (r) {
							const {
								width: e,
								height: t
							} = r;
							o.emojisCustomSize = [e, t]
						} else delete o.emojisCustomSize;
						return {
							...e,
							[s]: o
						}
					}
					case $.c: {
						const {
							data: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case jg.b: {
						const {
							subreddits: n
						} = t.payload, r = n.reduce((e, t) => (t.allowedPostTypes && (e[t.id] = {
							allowedPostTypes: t.allowedPostTypes
						}), e), {});
						return Object(N.merge)(e, r)
					}
					case ee.s: {
						const {
							subredditId: n,
							subredditCoins: r
						} = t.payload;
						if (!n || !r) return e;
						const s = e[n];
						if (!s) return e;
						const a = {
							...s,
							coins: r
						};
						return {
							...e,
							[n]: a
						}
					}
					default:
						return e
				}
			};
			const Mg = {};
			var Bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.b:
					case $.c: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case $.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			var Fg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Gg = Object(S.c)({
					error: Bg,
					pending: Fg
				}),
				qg = n("./src/reddit/actions/subredditCreation.ts");
			const Hg = {
				apiError: null
			};
			var Wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case qg.a:
					case qg.c:
					case qg.e:
						return Hg;
					default:
						return e
				}
			};
			var Vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case qg.a:
					case qg.c:
					case qg.e:
						return null;
					default:
						return e
				}
			};
			var Qg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qg.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case qg.c:
					case qg.b:
						return null;
					default:
						return e
				}
			};
			var $g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qg.c:
							return !0;
						case qg.e:
						case qg.b:
							return !1;
						default:
							return e
					}
				},
				Kg = Object(S.c)({
					error: Wg,
					lastCreatedSubredditId: Qg,
					initialCrosspost: Vg,
					pending: $g
				});
			var zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Yg = Object(S.c)({
					pending: zg
				});
			const Xg = {};
			var Jg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.l:
					case $.m: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case $.k: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			const Zg = {};
			var ev = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.l: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case $.m:
						case $.k: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				tv = Object(S.c)({
					error: Jg,
					pending: ev
				});
			const nv = {};
			var rv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nv,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				sv = Object(S.c)({
					pending: rv
				});
			var av = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var ov = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				cv = Object(S.c)({
					error: av,
					pending: ov
				});
			var iv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				uv = Object(S.c)({
					error: iv,
					pending: dv
				}),
				lv = n("./src/reddit/actions/subredditRules/constants.ts");
			var pv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lv.c:
							return !0;
						case lv.a:
						case lv.b:
							return !1;
						default:
							return e
					}
				},
				bv = n("./src/reddit/actions/subredditSettings.ts");
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bv.e:
							return !0;
						case bv.f:
						case bv.d:
							return !1;
						default:
							return e
					}
				},
				hv = Object(S.c)({
					pending: fv
				});
			const yv = {};
			var mv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yv,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				gv = Object(S.c)({
					pending: mv
				}),
				vv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Ov = {};
			var Ev = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ov,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vv.c:
					case vv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case vv.a: {
						const n = t.payload,
							{
								options: r,
								error: s
							} = n,
							{
								subredditName: a
							} = r;
						return {
							...e,
							[a.toLowerCase()]: s
						}
					}
					default:
						return e
				}
			};
			const _v = {};
			var Iv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _v,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case vv.b:
						case vv.a: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Sv = Object(S.c)({
					error: Ev,
					pending: Iv
				});
			const jv = {};
			var Tv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rb.c:
					case rb.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case rb.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			const wv = {};
			var Dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rb.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case rb.b:
						case rb.a: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !1
							}
						}
						default:
							return e
					}
				},
				Pv = Object(S.c)({
					error: Tv,
					pending: Dv
				}),
				Av = Object(S.c)({
					about: Gg,
					create: Kg,
					inlineEditing: Yg,
					models: tv,
					onboarding: sv,
					productOffers: cv,
					rankings: uv,
					rules: pv,
					settings: hv,
					similar: gv,
					topContent: Pv,
					wiki: Sv
				}),
				Cv = n("./node_modules/lodash/isNil.js"),
				Rv = n.n(Cv);
			const Nv = {};
			var xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Rv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				kv = Object(S.c)({
					meta: xv
				});
			const Lv = {};
			var Uv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xg.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return ua()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Mv = {
				pending: !1,
				items: {}
			};
			var Bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Cp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Fv = {};
			var Gv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.c: {
							const {
								communityInfo: n,
								id: r,
								type: s
							} = t.payload;
							return n && "subreddit" === s ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				qv = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const Hv = {};
			var Wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qv.b:
						case qv.c:
						case qv.a: {
							const {
								subredditId: n,
								subredditCountrySite: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Vv = n("./src/reddit/actions/subredditCrosspostable.ts");
			var Qv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vv.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Vv.c:
					case Vv.b:
						return null;
					default:
						return e
				}
			};
			var $v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vv.c:
							return !0;
						case Vv.b:
						case Vv.a:
							return !1;
						default:
							return e
					}
				},
				Kv = Object(S.c)({
					errors: Qv,
					pending: $v
				});
			const zv = {};
			var Yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vv.b: {
							const {
								subredditIds: n
							} = t.payload;
							return zu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				Xv = Object(S.c)({
					api: Kv,
					ids: Yv
				});
			const Jv = {};
			var Zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bb.a: {
							const n = t.payload,
								{
									subredditId: r,
									distinguishKey: s,
									postIds: a
								} = n;
							if (!(r in e)) return {
								...e,
								[r]: {
									[s]: a
								}
							};
							const o = e[r];
							return cb(o, {
								[s]: a
							}) === o ? e : {
								...e,
								[r]: {
									...o,
									[s]: a
								}
							}
						}
						default:
							return e
					}
				},
				eO = Object(S.c)({
					models: Zv
				});
			const tO = {};
			var nO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							assets: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case d.g:
					case d.j: {
						const {
							subredditId: n,
							mainHeader: r
						} = t.payload, s = e[n] || {};
						return {
							...e,
							[n]: {
								...s,
								mainHeader: r
							}
						}
					}
					default:
						return e
				}
			};
			const rO = {};
			var sO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: t.payload
						}
					}
					case c.i: {
						const {
							communityRaw: n,
							subredditId: r
						} = t.payload;
						return n ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const aO = {};
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n,
							distribution: r
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
			const cO = {};
			var iO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.p: {
							const {
								subredditId: n,
								releaseNotes: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				dO = Object(S.c)({
					assets: nO,
					communityRaw: sO,
					distributions: oO,
					releaseNotes: iO
				}),
				uO = n("./node_modules/lodash/isEqualWith.js"),
				lO = n.n(uO),
				pO = n("./src/lib/forceHttps/index.ts");
			const bO = {},
				fO = (e, t) => {
					const n = Object.keys(t);
					return n.length ? n.reduce((n, r) => {
						const s = e[r],
							a = t[r],
							o = s ? {
								...s,
								...a
							} : {
								...a
							};
						return a.icon.url ? o.icon.url = Object(pO.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), Object(N.set)(n, r, o)
					}, e) : e
				},
				hO = (e, t) => {
					return !lO()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				yO = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !hO(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var mO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c:
						return fO(e, t.payload.subreddits || {});
					case je.b:
					case je.f:
					case By.b:
					case kg.d:
					case xg.f:
					case _e.f:
					case Go.g:
					case sd.c:
					case ad.b:
					case Te.e:
					case Te.h:
					case B.k:
					case Se.r:
					case Se.u:
					case Zu.h:
					case ed.b:
					case F.b:
					case F.f:
					case _e.b:
					case we.b:
					case G.b:
					case G.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case Zu.e:
					case W.c:
					case V.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case Zu.m:
					case Q.b:
					case Q.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.c:
					case $.f:
					case $.i:
					case od.a:
					case od.g:
					case od.o:
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED:
					case Xn.B:
						return yO(e, t.payload.subreddits || {});
					case B.f:
					case B.i:
					case B.m:
					case B.p:
					case B.v: {
						const {
							response: n
						} = t.payload, {
							subreddits: r
						} = n;
						return yO(e, r)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload;
						return yO(e, n.subreddits || {})
					}
					case Se.B: {
						const {
							subreddits: n
						} = t.payload;
						return {
							...n,
							...e
						}
					}
					case c.g: {
						const n = t.payload;
						return yO(e, n)
					}
					case b.m: {
						const n = t.payload,
							{
								subredditId: r,
								styles: s
							} = n;
						return "communityIcon" in s && e[r] && "string" == typeof s.communityIcon ? {
							...e,
							[r]: {
								...e[r],
								communityIcon: s.communityIcon
							}
						} : e
					}
					case bv.f: {
						const {
							settings: n
						} = t.payload, {
							subredditId: r,
							title: s
						} = n;
						return e[r] && void 0 !== s ? {
							...e,
							[r]: {
								...e[r],
								title: s
							}
						} : e
					}
					case jg.b: {
						const n = t.payload,
							{
								subreddits: r
							} = n,
							s = {};
						for (const e of r) s[e.id] = {
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
						return Object(N.merge)(e, s)
					}
					default:
						return e
				}
			};
			var gO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var vO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var OO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				EO = Object(S.c)({
					errors: gO,
					fetched: vO,
					pending: OO
				});
			var _O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.f: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						default:
							return e
					}
				},
				IO = Object(S.c)({
					api: EO,
					order: _O
				});
			const SO = {};
			var jO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bv.a: {
						const n = t.payload;
						return Object(N.merge)(e, n)
					}
					case bv.b: {
						const {
							subredditId: n,
							notificationSettings: r
						} = t.payload;
						return Object(N.merge)(e, {
							[n]: r
						})
					}
					default:
						return e
				}
			};
			const TO = {};
			var wO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.g: {
						const {
							key: n,
							subredditIds: r
						} = t.payload;
						return 0 === r.length ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const DO = {};
			var PO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.pb: {
						const {
							recentSupporters: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case ee.S:
					case ee.V: {
						const {
							subredditId: n,
							powerupsCount: r,
							user: s
						} = t.payload;
						if (r > 0) {
							const t = {
								score: r,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: s.id,
									displayName: Object(z.e)(s),
									icon: {
										url: s.accountIcon
									},
									profile: {
										isNsfw: s.isNSFW
									}
								}
							};
							return {
								...e,
								[n]: [t, ...e[n]]
							}
						}
						return e
					}
					default:
						return e
				}
			};
			const AO = {};
			var CO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						let s = null;
						if (n) {
							const {
								mediaPacks: e,
								...t
							} = n;
							s = t
						}
						return {
							...e,
							[r]: s
						}
					}
					case ee.I: {
						const {
							subredditsPowerupsInfo: n
						} = t.payload, r = n.reduce((e, t) => {
							let {
								id: n,
								powerups: r
							} = t;
							return {
								...e,
								[n]: r
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					case ee.S:
					case ee.V: {
						const {
							subredditId: r,
							powerupsCount: s
						} = t.payload;
						if (e[r] && s > 0) {
							const t = e[r],
								a = t.tier + 1,
								o = t.tiersInfo[a - 1],
								c = o && o.benefits;
							return {
								...e,
								[r]: {
									...e[r],
									benefits: c || (null === (n = e[r]) || void 0 === n ? void 0 : n.benefits),
									count: t.count + s,
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
			const RO = {},
				NO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Aa(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				xO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = s.filter(e => e.id !== n);
					return {
						...e,
						[t]: {
							...r,
							emotes: a
						}
					}
				};
			var kO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: Ca(n)
						}
					}
					case Pa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: NO(s, n, r)
						}
					}
					case Pa.c: {
						const {
							subredditId: n,
							emojiId: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: xO(s, n, r)
						}
					}
					default:
						return e
				}
			};
			const LO = {},
				UO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var MO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n.sort(UO)
							}
						}
						case ee.S:
						case ee.V: {
							const {
								subredditId: n,
								powerupsCount: r,
								user: s,
								isAnonymous: a
							} = t.payload;
							if (!e[n] && r < 0) return e;
							let o = !1;
							const c = e[n].map(e => {
								var t;
								return a && !e.supporterInfo || !a && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === s.id ? (o = !0, {
									...e,
									lastSupportedAt: r > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + r
								}) : e
							}).filter(e => e.score > 0);
							if (o) return {
								...e,
								[n]: c.sort(UO)
							};
							if (r > 0) {
								const t = {
									score: r,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: s.id,
										displayName: Object(z.e)(s),
										icon: {
											url: s.accountIcon
										},
										profile: {
											isNsfw: s.isNSFW
										}
									}
								};
								return {
									...e,
									[n]: [t, ...e[n]].sort(UO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				BO = n("./src/lib/makeProductOfferKey/index.ts");
			const FO = {};
			var GO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(BO.a)(t.type, n);
							return e[r] = e[r] ? [...e[r], t] : [t], e
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const qO = {};
			var HO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.g: {
							const {
								subredditId: n,
								products: r
							} = t.payload, s = Object.keys(r).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				WO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const VO = {},
				QO = e => e.filter(e => {
					let {
						id: t
					} = e;
					return "invite_contributor" !== t
				}).filter(e => {
					let {
						buttons: t
					} = e;
					return t.every(e => {
						let {
							__typename: t
						} = e;
						return WO.e.includes(t)
					})
				});
			var $O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.y: {
						const {
							id: n,
							progressModule: r
						} = t.payload;
						if (!r) {
							const t = {
								...e
							};
							return delete t[n], t
						}
						const s = QO(r.cards);
						return {
							...e,
							[n]: {
								...r,
								cards: s
							}
						}
					}
					default:
						return e
				}
			};
			const KO = {};
			var zO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case od.y: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case _e.f:
					case _e.b: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(N.assign)(e, s)
					}
					case od.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(N.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case od.e:
						return KO;
					default:
						return e
				}
			};
			const YO = {};
			var XO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.b: {
						const {
							categoryRankingsKey: n
						} = t.payload, r = e[n], s = r && r.length ? [...r, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const JO = {};
			var ZO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.c: {
							const {
								categoryRankingsKey: n,
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
				},
				eE = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const tE = {};
			var nE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eE.a: {
						const {
							subredditId: n,
							relatedSubreddits: r
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
			const rE = {};
			var sE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lv.b: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: n.rules
							}
						};
						return {
							...e,
							...s
						}
					}
					case lv.e: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: [...e[r].rules, ...n.rules]
							}
						};
						return {
							...e,
							...s
						}
					}
					case lv.f: {
						const {
							rules: n,
							subredditId: r,
							oldName: s
						} = t.payload;
						n.rules.shortName !== s && (e[r].rules = e[r].rules.filter(e => e.shortName !== s));
						const a = {
							[r]: {
								rules: [...n.rules, ...e[r].rules]
							}
						};
						return a[r].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...a
						}
					}
					case lv.g:
					case lv.d: {
						const {
							rules: n,
							subredditId: r
						} = t.payload, s = {
							[r]: {
								rules: n.rules
							}
						};
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const aE = {};
			var oE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case bv.f: {
						const n = t.payload.settings,
							r = e[n.subredditId] || {};
						return {
							...e,
							[n.subredditId]: {
								...r,
								...n
							}
						}
					}
					case On.n: {
						const n = t.payload,
							r = {
								...e[n.subredditId] || {},
								...n.settings
							};
						return {
							...e,
							[n.subredditId]: r
						}
					}
					default:
						return e
				}
			};
			const cE = {};
			var iE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.o: {
						const {
							key: n,
							subredditIds: r
						} = t.payload;
						return 0 === r.length ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const dE = {};
			var uE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.y: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case od.z: {
						const {
							id: n,
							response: r
						} = t.payload, s = Object(N.setIn)(e, [n, "response"], r);
						return Object(N.setIn)(s, [n, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const lE = {};
			var pE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Go.g: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case rb.b: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const bE = [];
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b:
					case V.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: n
						} = t.payload;
						return n && n.length ? n : e
					}
					default:
						return e
				}
			};
			const hE = {};
			var yE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kg.d:
						case Xn.B:
							const {
								unavailableSubreddits: n
							} = t.payload;
							return {
								...e, ...n
							};
						default:
							return e
					}
				},
				mE = Object(S.c)({
					about: Ug,
					api: Av,
					appliedFilters: kv,
					byCategory: Uv,
					carousel: Bv,
					communityInfo: Gv,
					countrySiteSettings: Wv,
					crosspostable: Xv,
					duplicates: eO,
					gov: dO,
					models: mO,
					moderated: IO,
					notificationSettings: jO,
					onboarding: wO,
					powerupRecentSupporters: PO,
					powerups: CO,
					powerupsEmojis: kO,
					powerupTopSupporters: MO,
					productOffers: GO,
					products: HO,
					progressModule: $O,
					questions: zO,
					rankings: XO,
					rankingsPageInfo: ZO,
					related: nE,
					rules: sE,
					settings: oE,
					similar: iE,
					survey: uE,
					topContent: pE,
					trending: fE,
					unavailableModels: yE
				});
			const gE = {};
			var vE = Object(jf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.SUBREDDIT_LOADED: {
							const {
								postIds: n,
								posts: r
							} = t.payload, s = n.slice(0, 2).reduce((e, t) => {
								if (r[t].isStickied) {
									const n = r[t].belongsTo.id;
									e[n] ? e[n].push(t) : e[n] = [t]
								}
								return e
							}, {});
							return me()({
								...e
							}, s)
						}
						case Od.o: {
							const {
								newStickiedPostList: n,
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
				}), gE),
				OE = Object(S.c)({
					data: vE
				}),
				EE = n("./node_modules/lodash/values.js"),
				_E = n.n(EE);
			const IE = [];
			var SE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = Ju(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case Se.u: {
						const {
							multireddits: e
						} = t.payload;
						return _E()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case nl.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case Se.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var jE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case nl.b:
					case nl.c:
						return null;
					default:
						return e
				}
			};
			var TE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.b:
					case nl.c:
						return !0;
					case nl.a:
						return !1;
					default:
						return e
				}
			};
			var wE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nl.b:
							return !0;
						case nl.c:
						case nl.a:
							return !1;
						default:
							return e
					}
				},
				DE = Object(S.c)({
					errors: jE,
					fetched: TE,
					pending: wE
				});
			const PE = [];
			var AE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case nl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Eh.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Ju(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Eh.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const CE = [];
			var RE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case nl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Eh.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Ju(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Eh.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const NE = [],
				xE = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var kE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.u: {
							const {
								multireddits: n
							} = t.payload, r = _E()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(xE(n));
							return zu()(e, r) ? e : r
						}
						case we.b: {
							const {
								account: n,
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: a
							} = t.payload;
							if (!n) return e;
							const o = s[n.id];
							if (!o || !o.length) return e;
							const c = {
									...a,
									...r
								},
								i = Xu()(e, o).sort(xE(c));
							return zu()(e, i) ? e : i
						}
						case nl.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(xE(s)) : e.filter(e => e !== r)
						}
						case Se.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case Se.g:
						case Se.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(xE(s))
						}
						default:
							return e
					}
				},
				LE = n("./node_modules/lodash/difference.js"),
				UE = n.n(LE);
			const ME = [];
			var BE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ME,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zu.n: {
						const {
							profileOrder: n
						} = t.payload;
						return Ub()([...e, ...n])
					}
					case nl.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case nl.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === Eh.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? Ub()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : UE()(e, o)
					}
					default:
						return e
				}
			};
			const FE = [];
			var GE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.n: {
							const {
								subredditOrder: n
							} = t.payload;
							return Ub()([...e, ...n])
						}
						case nl.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case nl.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === Eh.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? Ub()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : UE()(e, o)
						}
						default:
							return e
					}
				},
				qE = Object(S.c)({
					api: DE,
					favoriteMultiOrder: SE,
					favoriteProfileOrder: AE,
					favoriteSubredditOrder: RE,
					multiredditOrder: kE,
					profileOrder: BE,
					subredditOrder: GE
				}),
				HE = n("./src/reddit/actions/survey/constants.ts");
			var WE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case HE.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var VE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case HE.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var QE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case HE.b:
						return !e;
					default:
						return e
				}
			};
			var $E = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case HE.i:
							return !e;
						default:
							return e
					}
				},
				KE = Object(S.c)({
					activeDemoTrigger: WE,
					demoTriggerThreshold: VE,
					isDemoEnabled: QE,
					isSampleFactorEnabled: $E
				});
			var zE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ft.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				YE = n("./src/reddit/actions/tags/constants.ts");
			const XE = {
				pending: !1,
				error: !1
			};
			var JE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YE.l:
						return {
							...e, pending: !0
						};
					case YE.m:
						return {
							error: !1, pending: !1
						};
					case YE.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const ZE = {
				pending: !1,
				error: !1
			};
			var e_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YE.o:
						return {
							...e, pending: !0
						};
					case YE.p:
						return {
							error: !1, pending: !1
						};
					case YE.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const t_ = {
				pending: !1,
				error: !1
			};
			var n_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YE.t:
						return {
							...e, pending: !0
						};
					case YE.s:
					case YE.r:
					case YE.e:
					case YE.j:
						return {
							error: !1, pending: !1
						};
					case YE.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const r_ = {
				pending: !1,
				error: !1
			};
			var s_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case YE.v:
						return {
							...e, pending: !0
						};
					case YE.w:
						return {
							error: !1, pending: !1
						};
					case YE.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const a_ = {
				pending: !1,
				error: !1
			};
			var o_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YE.g:
							return {
								...e, pending: !0
							};
						case YE.h:
							return {
								error: !1, pending: !1
							};
						case YE.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				c_ = Object(S.c)({
					create: JE,
					deleteTag: e_,
					fetch: n_,
					update: s_,
					updatePrimaryTag: o_
				});
			const i_ = {
				global: [],
				recommendedGlobal: []
			};
			var d_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YE.w:
						case YE.r:
						case YE.e:
						case YE.j: {
							const {
								globalSubredditTags: e
							} = t.payload, n = Object.keys(e), r = n.filter(t => e[t].isRecommended);
							return {
								global: n,
								recommendedGlobal: r
							}
						}
						default:
							return e
					}
				},
				u_ = n("./node_modules/lodash/uniqWith.js"),
				l_ = n.n(u_),
				p_ = n("./src/reddit/models/Option/index.ts");
			const b_ = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var f_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YE.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: l_()([...e.selectedOptions || [], {
									...n
								}], p_.a)
							}
						}
						case YE.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(p_.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case YE.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case YE.a: {
							const {
								primaryTagId: n
							} = t.payload, r = e.selectedOptions.findIndex(e => e.id === n), s = [...e.selectedOptions];
							return r >= 0 && s.splice(r, 1), {
								...e,
								selectedPrimaryTagId: n,
								selectedOptions: s
							}
						}
						default:
							return e
					}
				},
				h_ = n("./src/reddit/helpers/tags/index.ts");
			const y_ = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var m_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case YE.j: {
							const {
								globalSubredditTags: n,
								subredditScopedTags: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...n
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[s]: {
										...e.subredditScopedTags[s] || {},
										...r[s] || {}
									}
								}
							}
						}
						case YE.w:
						case YE.s:
						case YE.r: {
							const {
								primaryTag: n,
								globalSubredditTags: r,
								subredditScopedTags: s,
								itemTags: a,
								suggestedItemTags: o,
								subredditId: c,
								geoPlace: i
							} = t.payload, d = {
								...e.subredditPrimaryTagId
							};
							return n ? d[c] = n.tag.id : delete d[c], {
								subredditPrimaryTagId: d,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[c]: {
										...e.subredditScopedTags[c] || {},
										...s[c] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[c]: {
										...a[c] || {}
									}
								},
								geoPlaces: i ? Object(N.set)(e.geoPlaces, c, i) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[c]: {
										...o[c] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[c]: Object(h_.a)(a[c] || {})
								}
							}
						}
						case YE.p: {
							const {
								subredditId: n,
								tags: r
							} = t.payload, s = r.reduce((e, t) => {
								let {
									tagId: n
								} = t;
								return delete e[n], e
							}, {
								...e.subredditScopedTags[n] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[n]: s
								}
							}
						}
						case YE.e: {
							const {
								globalSubredditTags: n
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...n
								}
							}
						}
						case YE.h: {
							const {
								subredditId: n,
								primaryTagId: r,
								secondaryTags: s
							} = t.payload;
							return r && n ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[n]: r
								},
								itemTags: {
									...e.itemTags,
									[n]: {
										...s || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				g_ = n("./src/reddit/reducers/tags/selected/index.ts"),
				v_ = Object(S.c)({
					api: c_,
					availableGlobalTagOrder: d_,
					models: m_,
					selected: g_.b,
					creation: f_
				}),
				O_ = n("./src/reddit/actions/redditEmbed.ts"),
				E_ = n("./src/reddit/actions/theme.ts"),
				__ = n("./src/reddit/actions/users.ts"),
				I_ = n("./src/reddit/models/Theme/index.ts");
			const S_ = {
				current: I_.c,
				cached: {}
			};
			var j_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E_.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? I_.b : I_.c,
								cached: {}
							}
						}
						case vn.b:
						case vn.c:
						case vn.k:
						case vn.l:
						case vn.g:
						case vn.a:
						case vn.m:
						case je.b:
						case je.f:
						case Te.e:
						case Te.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case _e.b:
						case V.SUBREDDIT_LOADED:
						case we.b:
						case we.a:
						case _e.f:
						case O_.b:
						case $.i:
						case Ne.e:
						case W.c:
						case On.j:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED:
						case __.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: I_.b,
									cached: {}
								} : {
									current: I_.c,
									cached: {}
								}
							}
							return e;
						case G.d:
						case G.e:
						case Pe.a:
						case Pe.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: I_.b,
								cached: {}
							} : {
								current: I_.c,
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
									current: I_.b,
									cached: {}
								} : {
									current: I_.c,
									cached: {}
								}
							}
							return e;
						case On.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: I_.b,
								cached: {}
							} : {
								current: I_.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: I_.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: I_.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				T_ = n("./src/reddit/actions/toaster.ts");
			const w_ = [];
			var D_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T_.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case T_.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				P_ = n("./src/reddit/actions/tooltip.ts");
			var A_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.c:
						case P_.b:
						case P_.e:
						case P_.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				C_ = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var R_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case P_.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case P_.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case P_.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case ee.K:
						case P_.d:
						case u.b:
						case Ec.b:
						case Ec.c:
						case Ec.a:
							return t.type === u.b && e === C_.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				N_ = Object(S.c)({
					params: A_,
					tooltipId: R_
				}),
				x_ = n("./src/reddit/actions/tracing.ts");
			const k_ = {
				traceId: void 0
			};
			var L_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x_.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				U_ = n("./src/lib/asyncActions/index.ts"),
				M_ = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const B_ = Object(U_.c)(M_.c.requestedActionType, M_.c.succeededActionType, M_.c.failedActionType),
				F_ = Object(U_.c)(M_.a.requestedActionType, M_.a.succeededActionType, M_.a.failedActionType),
				G_ = Object(U_.c)(M_.d.requestedActionType, M_.d.succeededActionType, M_.d.failedActionType);
			var q_ = Object(S.c)({
					load: B_,
					execute: F_,
					send: G_
				}),
				H_ = n("./src/reddit/actions/tracking.ts");
			const W_ = {};
			var V_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H_.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case H_.b: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Q_ = Object(S.c)({
					reCaptchaEnterprise: q_,
					viewportDataLoaded: V_
				}),
				$_ = n("./src/reddit/actions/trafficStats/constants.ts");
			var K_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $_.c:
						return !0;
					case $_.b:
					case $_.a:
						return !1;
					default:
						return e
				}
			};
			var z_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $_.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case $_.c:
							return null;
						default:
							return e
					}
				},
				Y_ = Object(S.c)({
					pending: K_,
					trafficStats: z_
				});
			var X_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.s:
					case i.t:
						return null;
					case i.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var J_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.s:
							return !0;
						case i.q:
						case i.t:
							return !1;
						default:
							return e
					}
				},
				Z_ = Object(S.c)({
					error: X_,
					pending: J_
				});
			var eI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case r.b:
					case i.t:
						return null;
					default:
						return e
				}
			};
			var tI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case i.t:
						return "";
					default:
						return e
				}
			};
			var nI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.r:
							return t.payload && t.payload.publicAddress || null;
						case r.b:
						case i.t:
							return null;
						default:
							return e
					}
				},
				rI = Object(S.c)({
					api: Z_,
					contentId: eI,
					initialRecipient: tI,
					publicAddress: nI
				}),
				sI = Object(S.c)({
					communityPoints: rI
				}),
				aI = n("./src/reddit/actions/search/trending.ts");
			const oI = {};
			var cI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.SUBREDDIT_LOADED:
						case aI.a: {
							const {
								items: n,
								subplacement: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						default:
							return e
					}
				},
				iI = Object(S.c)({
					models: cI
				});
			var dI = n("./src/reddit/routes/premium/index.ts");
			const uI = {};
			var lI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zh.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = dI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				pI = n("./src/reddit/actions/upload.ts"),
				bI = n("./src/reddit/models/Upload/index.ts");
			const fI = {};
			var hI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pI.d: {
							const {
								key: n,
								id: r,
								file: s
							} = t.payload, a = e[n], o = a && a.file === s ? {
								...a.metadata
							} : {};
							return {
								...e,
								[n]: {
									key: n,
									id: r,
									file: s,
									metadata: o,
									url: void 0,
									status: bI.a.PENDING
								}
							}
						}
						case pI.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: bI.a.UPLOADING
								}
							}
						}
						case pI.c: {
							const {
								key: n,
								metadata: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									metadata: r
								}
							}
						}
						case pI.e: {
							const {
								key: n,
								progress: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									progress: r
								}
							}
						}
						case pI.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: bI.a.SUCCESS,
									url: r
								}
							}
						}
						case pI.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: bI.a.FAILED,
									error: r
								}
							}
						}
						case pI.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: bI.a.CANCELED
								}
							}
						}
						case pI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), wr()(e, n)
						}
						default:
							return e
					}
				},
				yI = n("./src/reddit/actions/upvotePrompt.ts");
			var mI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yI.a:
						return ++e;
					default:
						return e
				}
			};
			const gI = {};

			function vI(e, t) {
				if (!t) return e;
				const {
					subredditId: n
				} = t, r = e[n] || {};
				return {
					...e,
					[n]: {
						latest: t,
						byDate: {
							...r.byDate || {},
							[t.at]: t
						}
					}
				}
			}
			var OI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d:
					case i.a:
					case c.f:
					case i.t: {
						const {
							wallet: n
						} = t.payload;
						return vI(e, n)
					}
					case i.w: {
						const n = t.payload,
							r = {
								...e
							};
						return Object.keys(n).forEach(t => {
							const s = n[t],
								a = e[t],
								o = {
									latest: a ? a.latest.at <= s.at ? s : a.latest : s,
									byDate: {
										...a ? a.byDate : {},
										[s.at]: s
									}
								};
							r[t] = o
						}), r
					}
					default:
						return e
				}
			};
			Object(Ce.a)("INBOX__COUNT_UPDATE");
			var EI = n("./src/reddit/actions/pages/appeal/constants.ts"),
				_I = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				II = n("./src/reddit/actions/sso/constants.ts"),
				SI = n("./src/reddit/endpoints/profile/info.ts");
			const jI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || zu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...SI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var TI = Object(jf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case EI.a:
					case EI.b:
					case Qy.b:
					case Qy.c:
					case vn.b:
					case vn.c:
					case vn.g:
					case vn.a:
					case vn.k:
					case vn.l:
					case vn.m:
					case Te.e:
					case Te.h:
					case Te.g:
					case Se.q:
					case Se.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case _e.a:
					case _e.b:
					case we.a:
					case we.b:
					case V.SUBREDDIT_FAILED:
					case Zu.l:
					case G.b:
					case G.a:
					case G.e:
					case G.d:
					case H.c:
					case H.i:
					case Pe.e:
					case Pe.d:
					case Pe.b:
					case Pe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case V.SUBREDDIT_LOADED:
					case W.a:
					case W.c:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED:
					case Ne.c:
					case Ne.e:
					case O_.a:
					case O_.b:
					case On.j:
					case _I.b:
					case __.c:
					case td.TOPIC_DATA_LOADED:
						return jI(e, t.payload.account);
					case __.o:
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
							response: n
						} = t.payload;
						return n ? jI(e, n.account) : e
					}
					case __.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case On.l:
					case On.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case ee.B:
					case ee.s: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case ee.eb: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(z.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...SI.a,
								...null == e ? void 0 : e.karma,
								...r
							}
						}
					}
					case Ie.A: {
						const {
							coins: n,
							coinsDiff: r
						} = t.payload;
						return n && e ? {
							...e,
							coins: n
						} : r && e ? {
							...e,
							coins: e.coins + r
						} : e
					}
					case Xl.q: {
						const {
							price: n
						} = t.payload;
						return (null == e ? void 0 : e.coins) && n ? {
							...e,
							coins: e.coins - n
						} : e
					}
					case "INBOX__COUNT_UPDATE": {
						const {
							inboxCount: n
						} = t.payload;
						return e ? {
							...e,
							inboxCount: n
						} : e
					}
					case II.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case II.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case Lc.c: {
						const {
							username: n
						} = t.payload;
						return e ? {
							...e,
							displayText: n,
							isNameEditable: !1,
							url: `/user/${n}`,
							username: n
						} : e
					}
					case Sl.a:
					case Sl.b: {
						if (!(null == t ? void 0 : t.payload)) return e;
						const n = t.payload;
						return e ? {
							...e,
							gender: {
								genderCategory: n.genderCategory,
								definedGender: n.definedGender
							}
						} : e
					}
					case __.l: {
						if (!(null === (s = null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.avatar) || void 0 === s ? void 0 : s.headshot_image_url) || !e) return e;
						const r = t.payload;
						return {
							...e,
							accountIcon: r.avatar.headshot_image_url,
							snoovatarFullBodyAsset: r.avatar.image_url
						}
					}
					default:
						return e
				}
			}), null);
			var wI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case __.n:
					case __.o:
						return null;
					case __.m:
						return t.payload;
					default:
						return e
				}
			};
			var DI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.n:
							return !0;
						case __.o:
						case __.m:
							return !1;
						default:
							return e
					}
				},
				PI = Object(S.c)({
					error: wI,
					pending: DI
				}),
				AI = Object(S.c)({
					api: PI
				});
			var CI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case __.j:
						return !0;
					default:
						return e
				}
			};
			var RI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.i:
							return !0;
						case __.j:
						case __.h:
							return !1;
						default:
							return e
					}
				},
				NI = Object(S.c)({
					pending: RI,
					emailSent: CI
				}),
				xI = Object(S.c)({
					api: NI
				}),
				kI = Object(S.c)({
					changeEmail: AI,
					sendResetEmail: xI
				}),
				LI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const UI = {};
			var MI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mt.f:
						return {
							...e, new: LI.a.pending
						};
					case mt.d:
						return {
							...e, new: LI.a.error
						};
					case mt.e:
						return {
							...e, new: LI.a.waitingForRequest
						};
					case mt.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.pending
						}
					}
					case mt.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.error
						}
					}
					case mt.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const BI = [];
			var FI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case mt.e:
							return [t.payload, ...e];
						case mt.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case On.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				GI = Object(S.c)({
					api: MI,
					data: FI
				}),
				qI = n("./src/reddit/actions/chat/constants.ts"),
				HI = n("./src/reddit/actions/chat/userSettings.ts");
			const WI = qI.a.anybody;
			var VI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case HI.a:
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
				QI = Object(S.c)({
					invitePolicy: VI
				});
			const $I = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var KI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && zu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case Xn.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return $I(e, n)
					}
					case Un.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return $I(e, n.length)
					}
					case Un.c:
					case Un.l: {
						const {
							draftsCount: n
						} = t.payload;
						return $I(e, n)
					}
					default:
						return e
				}
			};
			const zI = {};
			var YI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Za.a: {
							const e = t.payload.experimentVariants;
							return Cl(e)
						}
						default:
							return e
					}
				},
				XI = n("./src/reddit/actions/global/constants.ts");
			const JI = {};
			var ZI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XI.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				eS = Object(S.c)({
					byName: YI,
					localPersisted: ZI
				}),
				tS = n("./src/reddit/actions/googleOneTap/index.ts");
			var nS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tS.a:
						return !0;
					default:
						return e
				}
			};
			var rS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.f:
						return !0;
					case On.e:
						return !1;
					default:
						return e
				}
			};
			var sS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const aS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var oS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.b:
							return t.payload;
						default:
							return e
					}
				},
				cS = n("./src/reddit/actions/notifications/constants.ts"),
				iS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var dS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.a:
					case iS.d:
					case iS.h:
					case cS.a:
						return t.payload && t.payload.error || null;
					case iS.c:
					case iS.f:
					case iS.j:
					case cS.c:
					case cS.b:
						return null;
					default:
						return e
				}
			};
			var uS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.c:
						return !1;
					case cS.b:
						return !0;
					default:
						return e
				}
			};
			var lS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.c:
						case iS.j:
							return !0;
						case cS.b:
						case cS.a:
						case iS.i:
						case iS.h:
							return !1;
						default:
							return e
					}
				},
				pS = Object(S.c)({
					error: dS,
					loaded: uS,
					pending: lS
				});
			var bS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case cS.f:
					case cS.e:
						return null;
					default:
						return e
				}
			};
			var fS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.f:
						return !1;
					case cS.e:
						return !0;
					default:
						return e
				}
			};
			var hS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.f:
							return !0;
						case cS.e:
						case cS.d:
							return !1;
						default:
							return e
					}
				},
				yS = Object(S.c)({
					error: bS,
					loaded: fS,
					pending: hS
				}),
				mS = Object(S.c)({
					getPreferences: pS,
					setPreferences: yS
				});
			const gS = {
				byId: {},
				allIds: []
			};
			var vS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case iS.g: {
						const n = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[n]: {
									...e.byId[n],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const OS = {
				byId: {},
				allIds: []
			};
			var ES = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.b: {
							const {
								sections: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				_S = Object(S.c)({
					sections: ES,
					rows: vS
				}),
				IS = n("./src/lib/notifications/constants.ts");
			var SS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IS.j:
						return !0;
					case IS.b:
					case IS.d:
					case IS.e:
						return !1;
					default:
						return e
				}
			};
			const jS = {
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
			var TS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.b:
					case cS.f:
					case cS.d: {
						const {
							preferences: n
						} = t.payload;
						return ua()(n) ? e : n
					}
					default:
						return e
				}
			};
			const wS = {
				byId: {},
				allIds: []
			};
			var DS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case iS.g: {
						const n = t.payload && t.payload.messageType;
						return {
							...e,
							byId: {
								...e.byId,
								[n]: {
									...e.byId[n],
									...t.payload
								}
							}
						}
					}
					default:
						return e
				}
			};
			const PS = {
				byId: {},
				allIds: []
			};
			var AS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.e: {
							const {
								sections: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				CS = Object(S.c)({
					sections: AS,
					rows: DS
				});
			var RS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case iS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const NS = [];
			var xS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case iS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case iS.k: {
							if (!t.payload) return [];
							const n = t.payload && t.payload.subredditId,
								r = t.payload && t.payload.notificationLevel,
								s = e.findIndex(e => e.id === n);
							return -1 === s ? e : [...e.slice(0, s), {
								...e[s],
								notificationLevel: r
							}, ...e.slice(s + 1)]
						}
						default:
							return e
					}
				},
				kS = Object(S.c)({
					subreddits: xS,
					pageInfo: RS
				}),
				LS = Object(S.c)({
					api: mS,
					subscribedSubredditsSettings: kS,
					emailSettingsLayout: _S,
					isNotificationPromptVisible: SS,
					preferences: TS,
					pushSettingsLayout: CS
				});
			const US = {};
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : US,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
					case Ke.h: {
						const {
							subredditId: n,
							userOwnedBadges: r
						} = t.payload, s = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[n]: {
								...e[n] || {},
								...s
							}
						}
					}
					case l.d: {
						const {
							userOwnedBadges: n,
							product: r
						} = t.payload, s = n.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r.subredditId]: {
								...e[r.subredditId] || {},
								...s
							}
						}
					}
					default:
						return e
				}
			};
			const BS = {},
				FS = (e, t) => `${e}_${t||new Date}`;
			var GS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						if (n) {
							const {
								allocation: t
							} = n, r = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[FS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...r
							}
						}
						return e
					}
					case ee.pb: {
						const {
							userPowerups: n
						} = t.payload, r = ((null == n ? void 0 : n.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[FS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...r
						}
					}
					case ee.U: {
						const {
							subredditId: n,
							powerupsCount: r,
							allocatedAt: s
						} = t.payload;
						if (r < 0) {
							const t = FS(n, s),
								a = e[t];
							if (a && a.isPremium) return {
								...e,
								[t]: {
									...a,
									powerups: a.powerups + r,
									isActive: !1,
									isDeallocationAllowed: !1
								}
							}
						}
						return e
					}
					case ee.P: {
						const {
							subredditId: n,
							allocatedAt: r
						} = t.payload, s = FS(n, r), a = e[s];
						return a && !a.isPremium ? {
							...e,
							[s]: {
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
			var qS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						return n ? wr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? wr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.U: {
						const {
							powerupsCount: n
						} = t.payload;
						if (n < 0) {
							const t = Math.max((e.freeCount || 0) - n, 0);
							if (e) return {
								...e,
								freeCount: t
							}
						}
						return e
					}
					case ee.V: {
						const {
							powerupsCount: n
						} = t.payload;
						if (n > 0) {
							const t = Math.max((e.freeCount || 0) - n, 0);
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
			var HS, WS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				VS = Object(S.c)({
					allocationByKey: GS,
					data: qS,
					fetched: WS
				}),
				QS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(HS || (HS = {}));
			const $S = {
				status: HS.UNFETCHED,
				subscriptions: []
			};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: HS.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: HS.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: HS.FAILED
						};
					default:
						return e
				}
			};
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case __.d:
						return t.payload;
					default:
						return e
				}
			};
			var YS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.a:
					case Fy.b:
					case Fy.c:
					case Fy.e:
						return t.payload;
					case Fy.d:
						return null;
					default:
						return e
				}
			};
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fy.f:
						return !0;
					default:
						return e
				}
			};
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case __.k:
						return t.payload;
					default:
						return e
				}
			};
			var ZS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Za.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var ej = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Za.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				tj = Object(S.c)({
					isEmployee: ZS,
					isLoggedIn: ej
				});
			var nj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case On.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && zu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				rj = n("./src/reddit/actions/userWhitelist.ts");
			const sj = {};
			var aj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rj.e:
						return {
							...e, new: LI.a.pending
						};
					case rj.d:
						return {
							...e, new: LI.a.error
						};
					case rj.f:
						return {
							...e, new: LI.a.waitingForRequest
						};
					case rj.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.pending
						}
					}
					case rj.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.error
						}
					}
					case rj.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: LI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const oj = [];
			var cj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rj.f:
							return [t.payload, ...e];
						case rj.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case On.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				ij = Object(S.c)({
					api: aj,
					data: cj
				}),
				dj = Object(S.c)({
					account: TI,
					accountSettings: kI,
					blocked: GI,
					chatSettings: QI,
					drafts: KI,
					experiments: eS,
					googleOneTapEnabled: nS,
					isCustomizeFlyoutShowing: rS,
					topContentDismissalPrefsSet: nj,
					language: sS,
					loid: oS,
					notificationPrefs: LS,
					ownedBadges: MS,
					powerups: VS,
					prefs: QS.c,
					productOfferSubscriptions: KS,
					reddaid: zS,
					session: YS,
					sessionRefreshFailed: XS,
					sessionTracker: JS,
					temporaryGQL: tj,
					wallets: OI,
					whitelist: ij
				});
			var uj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _I.a:
						return t.payload || null;
					case _I.b:
					case _I.c:
						return null;
					default:
						return e
				}
			};
			var lj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _I.c:
						return !0;
					case _I.b:
					case _I.a:
						return !1;
					default:
						return e
				}
			};
			var pj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _I.b:
						return !0;
					case _I.a:
					case _I.c:
						return !1;
					default:
						return e
				}
			};
			var bj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _I.b:
							return t.payload.userDataExportEligibility;
						case _I.a:
						case _I.c:
							return !1;
						default:
							return e
					}
				},
				fj = Object(S.c)({
					error: uj,
					pending: lj,
					success: pj,
					userDataExportEligibility: bj
				}),
				hj = Object(S.c)({
					userDataRequestPageApi: fj
				});
			const yj = {};
			var mj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case __.g:
					case __.f: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case __.e: {
						const {
							username: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: r
						}
					}
					default:
						return e
				}
			};
			var gj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.g:
							return !0;
						case __.f:
						case __.e:
							return !1;
						default:
							return e
					}
				},
				vj = Object(S.c)({
					error: mj,
					pending: gj
				});
			const Oj = {};
			var Ej = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.e: {
						const {
							subredditId: n,
							usersAppliedBadges: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							const a = r[s];
							return t[s] = {
								...e[s] || {},
								[n]: a
							}, t
						}, {});
						return {
							...e,
							...s
						}
					}
					case Ke.b: {
						const {
							badgeIds: n,
							subredditId: r,
							userId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					case Ke.a: {
						const {
							previousBadgeIds: n,
							subredditId: r,
							userId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					case c.a: {
						const {
							badge: n,
							currentAppliedBadges: r,
							placement: s,
							subredditId: a,
							userId: o
						} = t.payload, c = r.filter(e => e.placement !== s).concat(n).filter(Boolean).map(e => e.id);
						return {
							...e,
							[o]: {
								...e[o] || {},
								[a]: c
							}
						}
					}
					default:
						return e
				}
			};
			const _j = {},
				Ij = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && zu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var Sj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.f: {
							const {
								data: n
							} = t.payload;
							return Ij(e, n)
						}
						case Zu.k: {
							const {
								user: n
							} = t.payload;
							return Ij(e, {
								[n.username]: n
							})
						}
						case ee.s: {
							const {
								gildee: n
							} = t.payload;
							if (!n) return e;
							const r = e[n.toLowerCase()];
							if (!r) return e;
							const s = r.awardedLastMonth,
								a = s ? s.totalCount + 1 : 1,
								o = s && s.topAward;
							return o ? Ij(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...SI.a,
								...r
							};
							return Ij(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case On.l:
						case On.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? Ij(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case __.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(z.e)(n).toLowerCase(),
								s = e[r];
							return s ? Ij(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case On.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? Ij(e, {
								[s]: {
									...a,
									enableFollowers: n.enableFollowers
								}
							}) : e
						}
						default:
							return e
					}
				},
				jj = n("./src/reddit/actions/usernameAvailable.ts");
			const Tj = {};
			var wj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jj.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Available
						}
					}
					case jj.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Error
						}
					}
					case jj.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Pending
						}
					}
					case jj.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Dj = {};
			var Pj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.gb: {
						const {
							userId: n,
							supportedSubreddits: r
						} = t.payload, s = {
							[n]: r
						};
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			var Aj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Cj = Object(S.c)({
					allocationByKey: Pj,
					fetched: Aj
				});
			var Rj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Nj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				xj = Object(S.c)({
					error: Rj,
					pending: Nj
				});
			var kj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Lj = {};
			var Uj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.wb: {
						const {
							postId: n,
							currentRank: r
						} = t.payload;
						return r ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const Mj = {};
			var Bj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.wb: {
							const {
								postId: n,
								topAwardersRank: r
							} = t.payload;
							return {
								...e,
								[n]: (r || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ee.s: {
							const {
								id: n
							} = t.payload;
							return wr()(e, [n])
						}
						default:
							return e
					}
				},
				Fj = Object(S.c)({
					api: xj,
					currentPostId: kj,
					currentRank: Uj,
					list: Bj
				}),
				Gj = Object(S.c)({
					api: vj,
					appliedBadges: Ej,
					models: Sj,
					nameAvailable: wj,
					topAwarders: Fj,
					powerups: Cj
				});
			const qj = {};
			var Hj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case F.b:
						case F.f:
						case V.SUBREDDIT_LOADED:
						case $.i:
						case W.c:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
							const {
								structuredStyles: a
							} = t.payload;
							if (!(null === (s = null === (r = null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.content) || void 0 === r ? void 0 : r.widgets) || void 0 === s ? void 0 : s.layout)) return e;
							const o = a.data.content.widgets.layout.idCardWidget,
								c = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== c.length) return e;
							const i = c[0];
							return {
								...e,
								[i]: o
							}
						}
						default:
							return e
					}
				},
				Wj = n("./src/reddit/actions/widgets/constants.ts");
			const Vj = {};
			var Qj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case F.b:
						case F.f:
						case W.c:
						case $.i:
						case V.SUBREDDIT_LOADED:
						case De.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = null === (n = r.data.content.widgets) || void 0 === n ? void 0 : n.items,
								a = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!a.length) return e;
							const o = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== o.length) return e;
							const c = o[0];
							return {
								...e,
								[c]: a[0]
							}
						}
						case Wj.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case Wj.h: {
							const n = t.payload;
							return e[n.subredditId] === n.widgetId ? {
								...e,
								[n.subredditId]: null
							} : e
						}
						default:
							return e
					}
				},
				$j = n("./src/reddit/helpers/widgets/index.tsx");
			const Kj = {};
			var zj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.SUBREDDIT_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = r.widgets;
						return {
							...e,
							...s.items
						}
					}
					case Wj.b: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case b.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object($j.g)()
							}
						}), t
					}
					case Wj.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case Wj.i:
					case Wj.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case Wj.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case F.b:
					case F.f:
					case V.SUBREDDIT_LOADED:
					case $.i:
					case W.c:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets;
						return {
							...e,
							...r.items
						}
					}
					case nl.h: {
						const {
							userIsSubscriber: n,
							nameIdentifiers: r,
							widgetId: s
						} = t.payload;
						if (!s || !e[s] || "community-list" !== e[s].kind) return {
							...e
						};
						const a = n,
							o = e[s],
							c = o.data.map(e => {
								const t = {
									...e
								};
								return r.some(e => e.name === t.name) && (t.isSubscribed = a), t
							});
						return {
							...e,
							[s]: {
								...o,
								data: c
							}
						}
					}
					case bv.f: {
						const {
							settings: n,
							idCardWidgetId: r
						} = t.payload;
						return r && e[r] && "publicDescription" in n && n.publicDescription !== e[r].description ? {
							...e,
							[r]: {
								...e[r],
								description: n.publicDescription || ""
							}
						} : e
					}
					default:
						return e
				}
			};
			const Yj = {};
			var Xj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.SUBREDDIT_LOADED:
					case F.f:
					case $.i:
					case De.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets.layout.moderatorWidget,
							s = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0];
						return {
							...e,
							[a]: r
						}
					}
					default:
						return e
				}
			};
			const Jj = {};
			var Zj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = Object.keys(n.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0],
							o = r.widgets.layout.sidebar.order;
						return {
							...e,
							[a]: o
						}
					}
					case Wj.e:
					case Wj.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case Wj.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case Wj.g: {
						const n = t.payload;
						if ("menu" === n.widget.kind) return e;
						if (!e[n.subredditId]) return {
							...e,
							[n.subredditId]: [n.widgetId]
						};
						const r = e[n.subredditId].concat(n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case Wj.h: {
						const n = t.payload;
						if (!e[n.subredditId]) return e;
						const r = e[n.subredditId].filter(e => e !== n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case F.b:
					case F.f:
					case V.SUBREDDIT_LOADED:
					case W.c:
					case $.i:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
						const {
							structuredStyles: n
						} = t.payload;
						if (!(n && n.data && n.data.content)) return e;
						const r = n.data.content.widgets.layout.sidebar.order,
							s = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0];
						return {
							...e,
							[a]: r
						}
					}
					default:
						return e
				}
			};
			const eT = {
				accountManagerModalData: a,
				activeModal: h,
				ads: O,
				apiRequestState: I,
				appBadges: C,
				authorFlair: Z,
				awards: $e,
				badges: it,
				blockedRedditors: yt,
				blockUser: It,
				brandSafety: jt,
				chat: Jt,
				cooldownTimer: Cn,
				commentsListTruncated: en,
				communityFlairs: rn,
				connection: on,
				contentControls: gn,
				contentGate: _n,
				continueThreads: jn,
				creations: ea,
				dashboard: ra,
				discoveryUnits: ga,
				dismissedTruncationList: Ea,
				economics: Wa,
				emojis: Ja,
				experimentOverrides: ro,
				externalAccount: No,
				featureFlags: Fo,
				focusedVerticals: Zo,
				fontFiles: tc,
				gild: fc,
				header: Ic,
				htmlResponseStreaming: Sc,
				imageUploads: wc,
				inAppNotifications: Nc,
				interceptedAction: kc,
				isChangeUsernameTooltipShowing: Uc,
				isEmailVerificationTooltipShowing: Bc,
				isModeratorWithPostPerms: Gc,
				jsApi: Wc,
				langSite: $c,
				leaderboard: ni,
				listings: Cd,
				live: Ld,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Md,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.a:
							const {
								isDeleted: n, height: r, postId: s
							} = t.payload;
							return {
								...e, [s]: {
									height: r,
									isDeleted: n
								}
							};
						default:
							return e
					}
				},
				mediaGalleries: Hd,
				mediaPlayback: Qd,
				meta: zd,
				moderatingSubreddits: Jd,
				modListingPage: au,
				modModeEnabled: cu,
				moreComments: hu,
				multireddits: il,
				notificationBannerId: ul,
				notificationsInbox: Ol,
				nps: Il,
				onboarding: Pl,
				page: kl,
				platform: Gl,
				postCollection: Sp,
				polls: pp,
				postFlair: Ap,
				posts: Sf,
				postStickiedComments: Df,
				givePremium: vc,
				products: Hf,
				profileCommentsPage: sh,
				profilePrivatePage: Oh,
				profileModSettingsPage: ih,
				profilePostsPage: uh,
				profiles: ey,
				promos: ay,
				publicAccessNetwork: My,
				recentSubreddits: Hy,
				recommendations: Vy,
				reportPage: tm,
				reportRules: sm,
				requestHost: am,
				runTimeEnvVars: im,
				search: Om,
				searchDiscoveryUnits: Dm,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pm.a:
							return t.payload;
						case Pm.b:
							return Am;
						default:
							return e
					}
				},
				seo: Mm,
				shortcuts: $m,
				sidebarPromotedPosts: Ym,
				streaming: sg,
				structuredStyles: Ig,
				stylesheets: Sg,
				subredditAutocomplete: Ng,
				subreddits: mE,
				subredditStickyPosts: OE,
				subscriptions: qE,
				survey: KE,
				tabBadged: zE,
				tags: v_,
				themes: j_,
				toaster: D_,
				tooltip: N_,
				tracing: L_,
				tracking: Q_,
				trafficStats: Y_,
				transfers: sI,
				trending: iI,
				trophies: lI,
				uploads: hI,
				user: dj,
				userDataRequestPage: hj,
				upvotePromptCountPerSess: mI,
				users: Gj,
				widgets: Object(S.c)({
					idCardIds: Hj,
					menuIds: Qj,
					models: zj,
					moderatorIds: Xj,
					sidebar: Zj
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/page.ts");
			const o = "/premium",
				c = Object(r.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("Premium")]).then(n.bind(null, "./src/reddit/pages/Premium/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Premium/index.tsx"
					}
				}),
				i = {
					action: a.e,
					chunk: s.s.PREMIUM,
					component: c,
					exact: !0,
					meta: {
						name: s.Nb.PREMIUM,
						isResponsive: !0
					},
					path: o
				};
			t.a = i
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				a = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				a = n("./src/reddit/selectors/moderatorPermissions.ts");
			Object(r.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: n
					} = s.c;
					return Object(a.b)(n)(e, t)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/models/ChatSettingsPage/index.ts");
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!e.chat.subredditSettingsPage.api.fetch.pending[n]
				},
				a = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.chat.subredditSettingsPage.models[n] || []).filter(e => e && e.settingType !== r.a.Unknown)
				}
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: c.a
				}
			});
			const i = (e, t) => {
				var n, r, s;
				return t ? null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function d() {
				const e = Object(s.fb)(),
					t = Object(r.e)(t => Object(s.r)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const u = (e, t) => {
				var n;
				const r = null === (n = i(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby || r === a.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/models/Flair/index.ts"),
				c = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const d = [],
				u = e => e.emojis.models,
				l = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => {
					const n = e[t];
					return n ? [...s()(n.emojis), ...s()(n.snoomojis)] : d
				}),
				p = Object(a.a)(l, c.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, n, r) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !n) && (!(!e.userFlairAllowed && r === o.d.UserFlair) && !(!e.postFlairAllowed && r === o.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(i.u)(e, {
					subredditName: t
				}).emojisEnabled,
				h = {
					emojis: {},
					snoomojis: {}
				},
				y = (e, t) => {
					let {
						subredditId: n
					} = t;
					return u(e)[n] || h
				},
				m = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/googleOneTap.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const i = Object(r.a)(o.c, e => !e),
				d = Object(r.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: e => i(e),
					experimentName: s.vb,
					expEventOverride: !1
				}), e => e),
				u = e => e === s.V.Onetap,
				l = e => e === s.V.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(r.a)(c.Q, d, (e, t) => !e && !!t),
				f = Object(r.a)(c.Q, d, (e, t) => !e && !!t && !Object(s.Af)(t))
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = () => !0,
				l = Object(r.a)(d.X, d.O, (e, t) => !(e || t)),
				p = e => {
					if (!l(e)) return;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: u,
						experimentName: a.Dd,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				b = e => {
					var t;
					const n = p(e);
					if (!n) return !1;
					let r = Object(i.r)(e),
						a = Object(i.d)(e);
					if ("undefined" != typeof window && !a) {
						const e = Object(c.a)("subreddit", window.location.href);
						(a = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Nb.SUBREDDIT)
					}
					if (a && n) {
						const e = (null == a ? void 0 : a.toLocaleLowerCase()) === n;
						return r === s.Nb.SUBREDDIT && e
					}
					return !1
				},
				f = e => !!p(e) && Object(o.c)(e, {
					experimentEligibilitySelector: l,
					experimentName: a.Ed,
					expEventOverride: !1
				}) !== a.Fd.Readonly
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			}));
			var r = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				a = n("./src/reddit/models/ScheduledPost/index.ts");
			const o = (e, t) => {
					let {
						subredditId: n
					} = t;
					return ((e, t) => {
						let {
							subredditId: n,
							type: r
						} = t;
						return !!e.posts.scheduledPosts[r].models[n]
					})(e, {
						subredditId: n,
						type: a.f.standalonePosts
					})
				},
				c = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return !!e.posts.scheduledPosts[r].pageInfo[n] && e.posts.scheduledPosts[r].pageInfo[n].hasNextPage
				},
				i = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return e.posts.scheduledPosts[r].pageInfo[n] ? e.posts.scheduledPosts[r].pageInfo[n].endCursor : null
				},
				d = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				p = {},
				b = [],
				f = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[n] || b).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[n][t])
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[n] || b).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[n][t])
				},
				y = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r,
						type: s
					} = t;
					return (e.posts.scheduledPosts[s].models[n] || p)[r] || void 0
				},
				m = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					return y(e, {
						subredditId: n,
						scheduledPostId: r,
						type: a.f.standalonePosts
					})
				},
				g = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					const s = y(e, {
						subredditId: n,
						scheduledPostId: r,
						type: a.f.recurringPosts
					});
					return s || s
				},
				v = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					return m(e, {
						subredditId: n,
						scheduledPostId: r
					}) || g(e, {
						subredditId: n,
						scheduledPostId: r
					})
				},
				O = e => e.creations.formData.scheduledPostId,
				E = e => {
					let {
						scheduledPost: t
					} = e;
					return (e => {
						let {
							flair: t,
							isNsfw: n,
							isSpoiler: a,
							isOriginalContent: o
						} = e;
						const c = [];
						return o && c.push({
							text: "OC",
							type: s.f.Oc
						}), t && c.push(...Object(r.b)(t)), a && c.push({
							text: "spoiler",
							type: s.f.Spoiler
						}), n && c.push({
							text: "nsfw",
							type: s.f.Nsfw
						}), c
					})(t)
				},
				_ = e => {
					let {
						scheduledPost: t
					} = e;
					const n = E({
							scheduledPost: t
						}),
						r = n.find(e => e.type === s.f.Richtext);
					return r || (n.find(e => e.type === s.f.Text) || null)
				},
				I = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				S = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				j = e => e.posts.scheduledPosts.api.pendingUpdate,
				T = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				s = (e, t) => e.trending.models[t] || []
		},
		"./src/reddit/selectors/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/User/index.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const i = 5e3,
				d = 12e3,
				u = 6 * r.pb,
				l = (e, t) => {
					const n = Object(o.G)(e, t),
						r = Object(c.P)(e);
					let i = !1;
					const d = Object(c.k)(e);
					if (d) {
						i = (Object(s.d)(d) || (new Date).getTime()) > (new Date).getTime() - u
					}
					const l = n && !n.isArchived && (1 === (null == n ? void 0 : n.score) || 0 === (null == n ? void 0 : n.score)) && (null == n ? void 0 : n.voteState) === a.a.notVoted;
					return r && i && l
				}
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				s = e => e.userDataRequestPage.userDataRequestPageApi
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
			e.exports = JSON.parse('{"id":"d5f4502401d3"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.8183414fbe5fae1d6256.js.map