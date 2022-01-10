// https://www.redditstatic.com/desktop2x/Governance~Reddit.68f3bb5e8bc935af14d9.js
// Retrieved at 1/10/2022, 2:00:04 PM by Reddit Dataminer v1.0.0
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

				function m(t, r, s) {
					e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent && e.attachEvent("on" + t, r)
				}

				function y(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function O(e) {
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
					E = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var n = function(t) {
							for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) a[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(a))
						};
						return m(t, n), {
							off: function() {
								y(t, n)
							}
						}
					},
					h = (t.receiveMessageOnce = function(e, t, s, n) {
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
					O(e) ? i = [s] : -1 === i.indexOf(e) && (h(s), i.push(e), u = d(i))
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
								return _(e, s, r.data, r.options)
							}));
							var a = new I(s, {
								detail: r.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var j = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), f || (m("message", S), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (y("message", S), f = !1))
				}, t.proxy = function(e, t) {
					j(e), Array.isArray(t) || (t = [t]);
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
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Media/index.ts"),
				n = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = r.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: n
				} = e;
				let c = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					c = n || Object(s.D)(e)
				} else c = Object(s.D)(e);
				const o = a.a.parse(c),
					d = o.path || "",
					i = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (o.hostname ? o.hostname.replace("www.", "") : "") + i
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
			const m = new class {
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
			t.b = m
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			const a = [n.pc, n.pb, n.B, n.Q, n.kb, n.Rb],
				c = {
					[n.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.pc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function d(e, t = !1, r = !1) {
				const d = Date.now(),
					i = new Date(e).getTime(),
					u = {
						[n.pc]: "",
						[n.pb]: "",
						[n.B]: "",
						[n.Q]: "",
						[n.kb]: "",
						[n.Rb]: ""
					};
				let l = i - d;
				if (l <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of a) {
					const e = Math.floor(l / s);
					e && (u[s] = (t ? o : c)[s](e).toString()), l -= e * s
				}
				const p = a.map(e => u[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? p : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
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
				return h
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
				m = Object(s.a)(o),
				y = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(d)),
				O = Object(s.a)(i),
				_ = Object(s.a)(u),
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
						l.ok || (r(m({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(n.a)(r, l.error))
					}
				}),
				h = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: n
				}) => {
					r(_({
						subredditId: e
					}));
					const c = await Object(a.b)(n(), e, t);
					c.ok ? r(y({
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
				return _
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
				m = Object(s.a)(u),
				y = Object(s.a)(l),
				O = Object(s.a)(p),
				_ = () => async (e, t, {
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
								if (e(y(s.map(e => e.node.id))), r) {
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
							e(m({
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
				return m
			})), r.d(t, "d", (function() {
				return _
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
				m = () => async (e, t, {
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
				}, y = Object(n.a)("USER_SETTINGS__SAVE_PENDING"), O = Object(n.a)("USER_SETTINGS__SAVE_FAILURE"), _ = e => async (t, r, {
					apiContext: n
				}) => {
					const l = r(),
						{
							invitePolicy: p
						} = e,
						b = Object.keys(u.a).find(e => u.a[e] === p);
					if (b) {
						t(y());
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
		"./src/reddit/actions/claimgold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "h", (function() {
				return T
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
			const m = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				y = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				O = Object(n.a)(m),
				_ = Object(n.a)(y),
				E = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(_()) : e(O())
				}, h = "CLAIMGOLD_UPDATE_CODE", I = Object(n.a)(h), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", j = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", v = "CLAIM_GOLD__CLAIM_GOLD_FAILED", T = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(P());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(N())
					} catch (n) {
						e(C(n))
					}
				}, D = Object(n.a)(g), w = Object(n.a)(S), P = () => async (e, t) => {
					e(w()), window.setTimeout(() => {
						t().claimGold.api.pending && e(D())
					}, 2e3)
				}, A = Object(n.a)(v), C = e => async (t, r) => {
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
				}, R = Object(n.a)(j), N = () => async (e, t) => {
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
				return L
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "q", (function() {
				return G
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "o", (function() {
				return Q
			})), r.d(t, "p", (function() {
				return K
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "a", (function() {
				return z
			})), r.d(t, "b", (function() {
				return X
			})), r.d(t, "n", (function() {
				return J
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
				m = r("./src/reddit/endpoints/comment/index.tsx"),
				y = r("./src/reddit/helpers/commentList/index.ts"),
				O = r("./src/reddit/helpers/trackers/comment.ts"),
				_ = r("./src/reddit/models/Comment/index.ts"),
				E = r("./src/reddit/models/Post/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/models/Vote/index.ts"),
				g = r("./src/reddit/selectors/comments.ts"),
				S = r("./src/reddit/selectors/commentSelector.ts"),
				j = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				v = r("./src/reddit/selectors/moderatingComments.ts"),
				T = r("./src/reddit/selectors/moderatorPermissions.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/comment/constants.ts");
			const P = {},
				A = Object(c.a)(w.o),
				C = e => async (t, r, {
					apiContext: s
				}) => {
					if (!Object(D.J)(r())) return t(Object(i.j)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(g.m)(r(), {
							commentId: e
						})
					}));
					const a = r().features.comments.models[e];
					if (!a) return;
					const c = a.isSaved ? m.m : m.i;
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
							kind: h.b.Undo,
							buttonText: s,
							buttonAction: C(e)
						}))
					} else t(A({
						[e]: {
							isSaved: a.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, L = e => async (t, r) => {
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
					}), N);
					P[e] = c
				}, k = (e, t) => async (r, s) => {
					const n = s(),
						c = R(e);
					if (Object(S.b)(n, {
							commentId: e
						}) && a.c.has(c)) {
						const r = a.c.end(c);
						!t && r < N && (clearTimeout(P[e]), delete P[e])
					}
				}, x = Object(c.a)(w.x), U = Object(c.a)(w.w), M = Object(c.a)(w.v), F = (e, t) => async (r, s, {
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
					const O = await Object(m.f)(n(), f, {
						token: c.token
					}, Object(j.a)(a));
					if (O.ok) {
						const t = O.body,
							n = Object(y.a)(t, f, a);
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
						await r(Object(d.b)(u, p)), Object(T.h)(s(), {
							subredditId: i.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(M({
						moreCommentsItem: c,
						...O.error
					}))
				}, G = Object(f.a)(y.b, I.a.upvoted), B = Object(f.a)(y.b, I.a.downvoted), q = Object(c.a)(w.j), V = Object(c.a)(w.i), H = Object(c.a)(w.e), W = Object(c.a)(w.f), Q = (Object(c.a)(w.c), Object(c.a)(w.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: r
				}) => async (s, n) => {
					const a = n(),
						c = Object(_.i)(e),
						o = Object(g.n)(a, {
							commentLink: c,
							commentsPageKey: t
						}),
						d = Object(v.b)(a, {
							commentId: e,
							commentsPageKey: t
						}),
						i = o.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== i || r(e, !0), Object(p.d)()
				}), K = ({
					commentId: e,
					commentsPageKey: t
				}) => async r => {
					r(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, $ = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: r,
					scrollToAndRemeasure: s
				}) => async (n, a) => {
					const c = a(),
						o = Object(y.e)(t, e, r, c),
						d = Object(v.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(H({
						commentId: o,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === r && s(o, !0), Object(p.d)()
				}, Y = Object(c.a)(w.r), z = e => t => t(Y({
					draftKey: e
				})), X = Object(c.a)(w.a), J = Object(c.a)(w.E), Z = Object(c.a)(w.b), ee = Object(c.a)(w.u)
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
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "f", (function() {
				return C
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
				return V
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "b", (function() {
				return W
			})), r.d(t, "n", (function() {
				return K
			})), r.d(t, "e", (function() {
				return $
			})), r.d(t, "o", (function() {
				return z
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
				m = r("./src/reddit/helpers/getGenericUploadError.ts"),
				y = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				O = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Emoji/index.ts"),
				E = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				j = Object(p.a)(S),
				v = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				T = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				D = Object(p.a)(v),
				w = Object(p.a)(T),
				P = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				N = Object(p.a)(A),
				L = Object(p.a)(C),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(k),
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
						l = Object(g.R)(a, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(O.g)(p),
						m = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.jb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(n.apiContext(), l, p.name, f);
					let y = !1;
					if (m.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(n.apiContext(), m.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(E.d)(e), !1;
							const n = decodeURIComponent(t.body.PostResponse.Location),
								a = m.body.websocketUrl,
								c = Object(E.n)(e, n, a);
							r(Object(b.j)(c)), y = !0
						} else {
							const s = Object(E.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(E.k)(e, m.error);
						r(Object(b.i)(t))
					}
					return y
				}, F = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, m = Object(y.a)(a.url), O = s(), _ = Object(g.R)(O, {
						subredditId: i
					}).name, h = await (async (e, t, r, s, n) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.jb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: n.modFlairOnly,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed
						}
					}))(n.apiContext(), _, m, l, p);
					if (!h.ok) {
						const s = Object(E.k)(a, h.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return h.ok
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
						d = await F(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(E.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(_.e)(c, r.url, a, o);
							t(j(i)), t(B(a))
						} else {
							const r = Object(m.a)(c),
								s = Object(E.k)(n, r);
							t(Object(b.i)(s)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(m.a)(c),
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
						t(N({
							subredditId: e,
							data: r
						}))
					} else t(L({
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
						r(D({
							emojiName: e,
							subredditId: t
						})), r(f.f({
							kind: h.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(w(p.error)), r(f.f({
						kind: h.b.Error,
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
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(W), K = (e, t) => async (r, n, {
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
					}))(a(), l, t)).ok ? r(Q({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, $ = "EMOJI_PERMISSIONS_UPDATED", Y = Object(p.a)($), z = (e, t, r, n) => async (a, i, {
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
					}))(l(), e, b, r)).ok ? (a(Y({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: n
					})), a(f.f({
						kind: h.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.f({
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
				m = Object(a.a)(p),
				y = Object(a.a)(b),
				O = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				_ = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				E = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				h = e => async (t, a) => {
					t(f());
					const c = a(),
						d = Object(u.R)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(m()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(b.error)), t(Object(o.f)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, a) => {
					t(O());
					const u = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(_()), t(Object(o.f)({
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
						s = Object(i.J)(r),
						n = Object(d.b)(r);
					s && Object(d.d)(n) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						a = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.f)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.qb
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
				return m
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return j
			})), r.d(t, "w", (function() {
				return v
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
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				E = "GOVERNANCE__TRANSFER_FAILURE",
				h = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				j = "GOVERNANCE__WALLETS_FETCH_PENDING",
				v = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
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
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "d", (function() {
				return k
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
				m = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				_ = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(n.a)(_.b),
				I = Object(n.a)(_.c),
				g = Object(n.a)(_.e),
				S = (Object(n.a)(_.f), Object(n.a)(_.g), Object(n.a)(_.h)),
				j = Object(n.a)(_.i),
				v = Object(n.a)(_.j),
				T = Object(n.a)(_.k),
				D = Object(n.a)(_.q),
				w = Object(n.a)(_.r),
				P = Object(n.a)(_.s),
				A = Object(n.a)(_.t),
				C = Object(n.a)(_.u),
				R = Object(n.a)(_.v),
				N = Object(n.a)(_.w),
				L = Object(n.a)(_.x),
				k = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: a
				}) => {
					let c, d = s().polls.models[e];
					if (r(v({
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
							t && t.voteState === y.a.notVoted && r(Object(o.jb)(e))
						}
					} else r(j({
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
						kind: m.b.SuccessCommunity,
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
				return o
			}));
			var s = r("./src/reddit/actions/comment/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/ModQueueTriggers.json");
			const o = ({
				commentIds: e = [],
				postIds: t = []
			}) => async (r, o, {
				gqlContext: d
			}) => {
				var i, u;
				if (!e.length && !t.length) return;
				const l = await ((e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}))(d(), {
					commentIds: e,
					postIds: t
				});
				if (l.ok) {
					const e = l.body;
					if (e.data.commentsByIds) {
						const t = Object.fromEntries(null === (i = e.data.commentsByIds) || void 0 === i ? void 0 : i.filter(e => {
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
						const t = Object.fromEntries(null === (u = e.data.postsInfoByIds) || void 0 === u ? void 0 : u.filter(e => {
							var t;
							return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
						}).map(e => {
							var t;
							return [null == e ? void 0 : e.id, {
								modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}]
						}));
						r(Object(n.S)(t))
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
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "B", (function() {
				return j
			})), r.d(t, "z", (function() {
				return v
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
				m = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				O = "MULTIREDDIT__EDIT_FAILURE",
				_ = "MULTIREDDIT__EDIT_PENDING",
				E = "MULTIREDDIT__EDIT_SUCCESS",
				h = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				v = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
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
				return m
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
				m = "NPS__URL_FAILED",
				y = Object(s.a)(b),
				O = Object(s.a)(f),
				_ = Object(s.a)(m);
			let E = !1;
			const h = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (E) return;
				e(y());
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
					t.dest ? (e(O(t)), p(t.dest), E = !0) : e(_())
				} else e(_())
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
				return j
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "e", (function() {
				return T
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
				m = Object(d.a)(p.a);
			var y = r("./src/reddit/actions/redditEmbed.ts"),
				O = r("./src/reddit/actions/users.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				E = r("./src/lib/makeListingKey/index.ts"),
				h = r("./src/lib/matchRoute/index.ts");
			const I = e => async t => {
				await t(Object(y.c)(e, !0))
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
					else e(m(n.error))
				})())
			}, S = (e, t, r) => async (c, o, {
				routes: d
			}) => {
				const i = o(),
					u = (t || i.platform.currentPage).routeMatch.match,
					l = Object(h.a)(u.url, d);
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
			}, j = () => async (e, t) => {
				const r = t();
				e(i.m({
					title: c.b()
				})), Object(_.J)(r) || await e(O.t())
			}, v = () => async e => e(i.m({
				title: c.b()
			})), T = e => async (t, s) => {
				const n = s();
				t(i.m({
					title: c.j()
				})), Object(_.J)(n) || await t(O.t());
				const a = Object(_.J)(n);
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
				return j
			})), r.d(t, "d", (function() {
				return v
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
			var m = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				y = r("./src/reddit/selectors/telemetry.ts"),
				O = r("./src/telemetry/models/Event.ts");
			var _ = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const g = "FETCH_CHAT_SETTINGS__LOADED",
				S = "FETCH_CHAT_SETTINGS__FAILED",
				j = "FETCH_CHAT_SETTINGS__PENDING",
				v = "UPDATE_CHAT_SETTINGS__LOADED",
				T = Object(d.a)(g),
				D = Object(d.a)(S),
				w = Object(d.a)(j),
				P = Object(d.a)(v),
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
							d = !Object(h.a)(r(), n),
							i = Object(_.c)(o, e, d);
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
						b = Object(_.b)(p);
					if (b && b.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: b
							},
							r = await m(d(), {
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
					})), n(L(t, p)), r) : (i && n(D({
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
						subreddit: Object(y.jb)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(y.o)(e)
					})
				}, L = (e, t) => async (r, s) => {
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
				return y
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
				m = Object(s.a)(p),
				y = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const u = t(),
						l = Object(d.k)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const y = await Object(n.a)(r());
					if (!y.ok || !y.body) return void e(m(y.error));
					if (!y.body.account) return void Object(o.a)(e, u);
					const O = await (e => Object(a.a)(e, {
						...c
					}))(s());
					if (!O.ok) return void e(m());
					const _ = y.body,
						E = O.body;
					e(f({
						account: _.account,
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
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "o", (function() {
				return g
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
				m = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				y = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				O = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				g = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return N
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return F
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
			var m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				y = r("./src/reddit/helpers/imagePreview/index.ts"),
				O = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Upload/index.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				h = r("./src/telemetry/index.ts");
			const I = e => ({
				...E.o(e),
				screen: E.ab(e),
				profile: E.R(e),
				subreddit: E.jb(e)
			});
			var g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
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
						const s = Object(O.a)(Object(O.c)(e), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(s);
					const n = r().uploads,
						a = e.map(({
							uploadKey: e
						}) => n[e]).find(e => e.status !== _.a.SUCCESS);
					t(a ? R(a.error) : C())
				}, L = (e, t) => ({
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
				x = "GALLERY",
				U = (e, t, r, n) => async (a, o, {
					apiContext: d
				}) => {
					const i = Object(D.h)(o()),
						l = Date.now();
					let j = null,
						v = !1,
						w = !1,
						P = !1;
					const A = e => {
						if (!P && r && v) {
							P = !0;
							const s = o(),
								n = Date.now() - l,
								a = Object(m.c)(m.a.PostComposer);
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
									d = s || o.status === _.a.CANCELED,
									{
										file: i,
										url: u,
										metadata: l,
										error: p
									} = o,
									b = l.mimetype || i.type,
									f = b.startsWith("video/"),
									m = o.status === _.a.SUCCESS;
								let y = "";
								p ? y = JSON.stringify(p) : d && (y = "canceled");
								const O = {
									width: l.width,
									height: l.height,
									duration: l.videoDuration && Math.round(1e3 * l.videoDuration)
								};
								Object(h.a)({
									source: f ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: c,
									noun: f ? "video" : "image",
									...I(e),
									actionInfo: {
										...E.d(e),
										success: m,
										...y ? {
											reason: y
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
								assetId: j,
								isCanceled: e,
								fileSource: r,
								uploadDuration: n,
								correlationId: a
							}) : g.x(s, t)
						}
					};
					return await a(Object(u.l)(e, t, async l => {
						v = !0, Object(u.k)(l.id, () => {
							A(!0)
						});
						const {
							error: m,
							metadata: _
						} = await async function(e, t, r) {
							const n = r && r.allowedPostTypes,
								a = r && r.name,
								o = await Object(O.g)(t) || t.type,
								d = Object(O.b)(t) || void 0;
							if (!d) return L("UNSUPPORTED_BROWSER");
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
									return L(c.T, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.Z) return L(c.L)
								} else if (t.size > c.bb) return L(c.R);
								const e = await Object(y.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(T.p)(e, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * c.fb : c.fb;
								if (t.size > l) return L(c.mc);
								let p;
								try {
									p = await Object(O.h)(d, !0)
								} catch (u) {
									return L(c.T)
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
										return L(c.T, e)
									}
									if (!t && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return L(c.T, e)
									}
								}
								const b = o ? 2 * c.eb : c.eb;
								if (p.duration > b) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return L(c.T, e)
								}
								if (p.duration < c.mb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", c.mb.toString())], {
										hk: "49PSW8"
									});
									return L(c.T, e)
								}
								if (p.height < c.nb || p.width < c.ob) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", c.ob.toString()), s.fbt._param("min_video_height", c.nb.toString())], {
										hk: "2HSUGl"
									});
									return L(c.T, e)
								}
								if (t.size / p.duration < c.lb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (c.lb / c.U).toString())], {
										hk: "1ehgDE"
									});
									return L(c.T, e)
								}
								i.height = p.height, i.width = p.width, i.videoDuration = p.duration, i.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: i
							}
						}(o(), e, i);
						if (m || !_) return {
							error: m
						};
						a(Object(u.m)({
							key: t,
							metadata: {
								fileSource: r,
								..._
							}
						})), w = !0, n && n();
						const E = e.name,
							h = await (async (e, t, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: c.jb.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(d(), E, _.mimetype);
						return h.ok ? (j = h.body.asset.asset_id, {
							uploadLease: h.body.args
						}) : {
							error: h.error || void 0
						}
					}, !0)), A(!1), o().uploads[t] || null
				}, M = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r().uploads[e];
					n && !Object(_.c)(n) && await t(U(n.file, n.key, n.metadata.fileSource, void 0))
				}, F = (e, t, r) => async (n, c) => {
					const d = e.map((e, s) => new Promise(async s => {
							const c = Object(_.d)(r, a()().slice(-6));
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
						} = n(), c = e.map(e => a[e]).filter(e => e.status === _.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = c.length > t ? t - 1 : c.length, u = c.length - d;
						c.slice(0, d).forEach(e => r(Object(i.f)({
							duration: i.a,
							kind: v.b.Error,
							text: Object(o.a)(e)
						}))), u > 0 && r(Object(i.f)({
							duration: i.a,
							kind: v.b.Error,
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
						if (Object(j.x)(c)) return void r(Object(i.f)({
							kind: v.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(O.l)(e.type)) && r(Object(i.f)({
							kind: v.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(O.k)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: v.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, r(Object(u.j)(x, !0));
					const m = await r(F(f, t, x));
					if (!m.length) return;
					const y = m.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						_ = 0 === o.length;
					r(Object(P.d)({
						...c,
						items: b ? y : [...o, ...y],
						selectedKey: _ ? m[0] : m[m.length - 1]
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
				m = r("./src/lib/makeApiRequest/index.ts"),
				y = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				O = r("./src/lib/omitHeaders/index.ts"),
				_ = r("./src/reddit/constants/headers.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				h = r("./src/reddit/helpers/flair.ts"),
				I = r("./src/reddit/helpers/name/index.ts"),
				g = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = r("./src/reddit/models/Poll/index.ts"),
				j = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				T = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function D(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const w = e => {
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
				P = e => {
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
						discussion_type: e.isChatPost ? j.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== v.p.POLL ? {
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
						...e.kind === v.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === v.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(h.g)(e.flair)
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
				C = async (e, t) => {
					if (!e.ok) return Object(g.b)(e);
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
			var R = (e, t) => Object(m.a)(Object(O.a)(e, [_.a]), {
				endpoint: Object(T.a)(Object(E.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: A(t)
			}).then(async e => await C(e, t));
			var N = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				L = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				k = r("./src/reddit/featureFlags/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				U = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				M = r("./src/reddit/helpers/trackers/postComposer.ts"),
				F = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				G = r("./src/reddit/models/User/index.ts"),
				B = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				q = r("./src/reddit/selectors/postCreations.ts"),
				V = r("./src/reddit/selectors/postDraft.ts"),
				H = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				W = r("./src/reddit/selectors/user.ts"),
				Q = r("./src/reddit/models/ScheduledPost/index.ts"),
				K = r("./src/reddit/actions/postCreation/constants.ts"),
				$ = r("./src/reddit/actions/postCreation/general.ts"),
				Y = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const z = Object(n.a)(K.w),
				X = Object(n.a)(K.P),
				J = Object(n.a)(K.o),
				Z = Object(n.a)(K.y),
				ee = Object(n.a)(K.cb),
				te = Object(n.a)(K.J),
				re = Object(n.a)(K.a),
				se = Object(n.a)(K.F),
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
					if (n === s.Vb.POST) return p.a.getPendingThumbnailUploads(a, t);
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
				oe = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					let c = n();
					const {
						pending: o
					} = c.creations.api.post.submit, d = Object(V.g)(c);
					if (o || d) return;
					r(se(e)), c = n();
					const u = Object(q.a)(c),
						l = k.d.rteVideoPoster(c),
						p = ce(c),
						b = u === s.Vb.MEDIA;
					p && (l || b) && (await r(Y.f(p)), ce(n())) || (e === v.r.Draft ? await r(Object(i.r)(t.draftId)) : e === v.r.ScheduledPost && Object(H.r)(c) ? await r(de(t)) : e === v.r.ScheduledPost ? await r(ie(t)) : await r(ue(t)))
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
					if (b && Object(a.a)(Object(F.r)(b)(n)), t(z(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					const {
						isPoll: f,
						polls: m
					} = Object(q.u)(n), y = ae(m, n), O = {
						...Object(N.e)({
							poll: f ? y : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: i
						})
					}, _ = await Object(L.a)(s(), O);
					if (_.ok) return t(Object(u.e)({
						subredditId: d.id
					})), void t(Object(l.a)(ne(d.name), !1));
					const E = _.error;
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
					if (t(z(o)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					const {
						isPoll: p,
						polls: b
					} = Object(q.u)(n), f = ae(b, n), m = {
						duration: f.duration,
						options: f.options
					}, y = {
						...Object(N.d)({
							poll: p ? m : void 0,
							submission: o,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: i
					}, O = await Object(N.a)(s(), y);
					if (O.ok) {
						t(Object(u.e)({
							subredditId: d.id
						}));
						const e = O.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(F.o)(Object(x.d)(e))(n)), void t(Object(l.a)(ne(d.name), !1))
					}
					const _ = O.error;
					t(J(_))
				}, ue = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						i = Object(q.eb)(a, e),
						{
							isPoll: u,
							polls: p
						} = Object(q.u)(a),
						y = ae(p, a);
					if (!i) return;
					if (t(z(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(q.x)(r()))) return;
					let h;
					const I = u && k.d.spPolls(a);
					if ((h = I ? await
							function(e, t, r) {
								const n = t.destSubreddit.id;
								return Object(m.a)(e, {
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
							}(n(), i, y) : u ? await ((e, t) => Object(m.a)(Object(O.a)(e, [_.a]), {
								endpoint: Object(T.a)(Object(E.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: A(t),
								type: "json"
							}).then(e => C(e, t)))(n(), {
								...i,
								kind: v.p.POLL,
								poll: y
							}) : i.kind === v.p.GALLERY ? await ((e, t) => Object(m.a)(Object(O.a)(e, [_.a]), {
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
						const e = Object(W.k)(a),
							r = h.body;
						t(X({
							draftId: i.draftId,
							response: r
						})), I && t(Object(o.c)({
							poll: r.poll
						}));
						const s = Object(B.b)(a);
						i.kind !== v.p.LINK && i.kind !== v.p.RICH_TEXT && i.kind !== v.p.MARKDOWN || u || !s || t(Object(c.c)());
						const n = (r.path || `/user/${Object(G.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(d.subredditInvalidateListing)(i.destSubreddit.name)), t(Object(l.a)(n, !1))
					} else {
						if (u) {
							const e = h.error;
							t(Z(e))
						}
						const e = h.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(re()) : e.type === s.I.VALIDATION_ERROR ? t(ee(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(te(e)) : t(J(e))
					}
					const g = Object($.o)(i.kind),
						S = h.ok && h.body && h.body.id && Object(j.t)(h.body.id),
						D = r();
					M.v(D, g, S, e.correlationId)
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
				m = Object(s.a)(i),
				y = Object(s.a)(u),
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
						t(y({
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
						} else t(m({
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
				m = r.n(f);
			const y = /\s+at.*(?:\(|\s)(.*)\)?/,
				O = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				_ = void 0 === m.a.homedir ? "" : m.a.homedir();
			const E = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? E(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(y);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !O.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(y, (e, t) => e.replace(t, t.replace(_, "~"))) : e).join("\n")
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
			var h = r("./src/lib/makeGqlRequest/index.ts"),
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
				j = r("./src/reddit/helpers/chooseVariant/index.ts"),
				v = r("./src/reddit/selectors/meta.ts");
			const T = e => g.d.reCaptchaEnterprise(e) && !Object(v.d)(e),
				D = e => !!Object(j.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...a.d)),
					experimentName: b.te
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
							const r = await Object(h.a)(e, {
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
							r = m(t.sitewide_rules);
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
							r = m(t.livestream_rules);
						e(p(r))
					}
				}, m = e => {
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
				return m
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return j
			})), r.d(t, "x", (function() {
				return v
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
				m = "RECURRING_POST__EDIT_MODAL_LOAD",
				y = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				_ = "SCHEDULED_POST__DELETE_SUCCESS",
				E = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				h = () => s.fbt._("Whoops! Invalid scheduled post", null, {
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
				j = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				v = () => s.fbt._("Successfully submitted scheduled post!", null, {
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
				m = r("./src/reddit/routes/postCreation/index.ts"),
				y = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(c.a)(d.n),
				_ = Object(c.a)(d.b),
				E = (e, t) => async (r, s, a) => {
					const c = Object(y.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					c && (await r(Object(n.b)(Object(m.c)(c.subreddit.name, c.collectionId))), r((Object(b.p)(c) ? _ : O)(c)))
				}, h = (e, t) => {
					Object(b.p)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, I = (e, t, r) => async (n, c, {
					gqlContext: m
				}) => {
					n(Object(o.g)());
					const O = Object(y.a)(c(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (O && Object(b.p)(O) && Object(a.a)(Object(p.u)()(c(), O)), !O) return void n(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void h(n, O);
					const _ = await Object(u.a)(m(), {
							...r,
							id: t
						}),
						E = _.body;
					if (!(_.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(i.f)(Object(i.e)(d.t(), f.b.Error, d.s(), I(e, t, r))));
					n(Object(i.f)(Object(i.e)(d.w(), f.b.SuccessCommunity))), h(n, Object(l.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "e", (function() {
				return v
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
			const m = Object(n.a)(a.g),
				y = Object(n.a)(a.k),
				O = Object(n.a)(a.j),
				_ = Object(n.a)(a.o),
				E = Object(n.a)(a.d),
				h = Object(n.a)(a.f),
				I = Object(n.a)(a.m),
				g = Object(n.a)(a.a),
				S = Object(n.a)(a.c),
				j = Object(n.a)(a.e),
				v = Object(n.a)(a.h),
				T = (e, t) => {
					e(j()), e(Object(o.f)(Object(o.e)(a.r(), p.b.Error, a.s(), D(t))))
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
					n(m());
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
					t(m());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: a
							}
						},
						o = await Object(d.b)(s(), c);
					o.ok ? P(t, Object(i.e)(o.body.data), c) : t(j())
				}, P = (e, t, r) => {
					Object(i.b)(t) ? e(h(t)) : Object(i.a)(t) ? e(g(t)) : Object(i.c)(t) ? e(I(t)) : T(e, r)
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
				return y
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
				m = Object(s.a)(f),
				y = e => async (t, r, {
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
						return t(m({
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
				return m
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "f", (function() {
				return h
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
				m = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(n.a)(b),
				O = Object(n.a)(f),
				_ = Object(n.a)(m),
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
				}, h = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					await r(I(t, e, n())), r(E(t))
				}, I = (e, t, r) => async (r, n, {
					gqlContext: a
				}) => {
					r(y({
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
						})), r(_({
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
				const m = f.body;
				m.data && m.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && o(i(null === (l = m.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === l ? void 0 : l.reduce((e, r) => ((null == r ? void 0 : r.id) && (e[t ? r.name.toLowerCase() : r.id] = r), e), {}))), (null === (b = m.data) || void 0 === b ? void 0 : b.postsInfoByIds) && o(p(m.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
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
				return k
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
				m = r("./src/lib/omitHeaders/index.ts"),
				y = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const _ = e => ({
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
				h = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var I = r("./src/reddit/helpers/correlationIdTracker.ts"),
				g = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				j = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/telemetry/index.ts");
			const D = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				w = "SUBREDDIT__CREATE_PENDING",
				P = "SUBREDDIT__CREATE_SUCCEEDED",
				A = "SUBREDDIT__CREATE_FAILED",
				C = "SUBREDDIT__CREATE_CLEARED",
				R = Object(a.a)(w),
				N = Object(a.a)(P),
				L = Object(a.a)(A),
				k = Object(a.a)(C),
				x = Object(a.a)(D),
				U = e => async (t, r, {
					apiContext: a
				}) => {
					const E = r(),
						{
							name: h,
							type: D,
							crosspostId: w
						} = e;
					if (Object(v.j)(E)) return;
					t(R({
						subredditName: h
					}));
					const P = await ((e, t) => Object(f.a)(Object(m.a)(e, [y.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.jb.POST,
						data: _(t)
					}))(a(), e);
					if (P.ok) {
						const r = P.body,
							a = r.fullname;
						Object(T.a)(Object(g.d)(D, e, a)(E)), t(N({
							subredditName: h
						}));
						const f = await Object(S.b)(E);
						if (w) {
							const e = Object(j.H)(E, {
								postId: w
							});
							t(Object(c.h)(e.title)), t(Object(c.g)({
								submissionType: n.Vb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: w,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(w)
						}
						await t(Object(s.b)(`${r.path}`)), f ? f === p.Wd.NewModule && t(Object(i.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(o.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(T.a)(Object(g.g)()(E))), Object(I.b)(I.a.SubredditCreation)
					} else P.error && Object(T.a)(Object(g.h)(P.error.type, h)(E)), t(L({
						subredditName: h,
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
							...h,
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
						t(L({
							subredditName: e,
							error: r
						})), r && Object(T.a)(Object(g.h)(r.type, e)(n))
					} else await t(k())
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
				return m
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
				m = () => async (e, t, {
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
					const m = await ((e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}))(s.gqlContext(), {
						subredditName: d
					});
					if (m.ok) {
						const e = m.body.data.subreddit;
						if (e) {
							const r = Object(o.c)(e);
							r && t(p({
								...r,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
						error: m.error
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
				return m
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "m", (function() {
				return h
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
				m = "UPLOAD_FAILED",
				y = "UPLOAD_CANCELED",
				O = "UPLOAD_REMOVED",
				_ = Object(o.a)(u),
				E = Object(o.a)(l),
				h = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(f),
				S = Object(o.a)(m),
				j = Object(o.a)(y),
				v = Object(o.a)(O),
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
					a(_({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: m
					} = await r(o().uploads[l]);
					if (b()) return;
					if (m || !f) return void a(S({
						key: l,
						error: m
					}));
					let y;
					D(p, () => {
						y && y.abort()
					}), a(E({
						key: l
					}));
					const O = await Object(d.a)(e, f, e => (y = e, s && e.on("progress", e => {
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
					if (y = null, !b())
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
					})(n.id, t), r(t ? v({
						key: e
					}) : j({
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
						_ = Date.now(),
						E = f && _ - f < 18e4,
						h = Object(l.c)(b, {
							postId: e
						}),
						I = b.upvotePromptCountPerSess,
						g = (() => {
							const e = Object(d.z)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !h || E || I >= 4 || g.length >= 1) return;
					const S = y(b, t);
					if (!S) return;
					a(Object(o.f)({
						text: S,
						buttonText: s.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${n.a.assetPath}/img/snoo-upvote.png`,
						duration: l.a,
						buttonAction: m(e),
						onClose: () => Object(p.a)((e => ({
							source: u,
							action: "click",
							noun: "close",
							...Object(i.o)(e)
						}))(b))
					}));
					const j = [...g, Date.now()].slice(Math.max(g.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(i.o)(e)
					}))(b)), Object(d.Cb)(), Object(d.Bb)(j), a(O()), r && r()
				}, m = e => async (t, r) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(i.o)(e)
					}))(r())), Object(l.c)(r(), {
						postId: e
					}) && t(Object(c.jb)(e))
				}, y = (e, t) => {
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
				return _
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "g", (function() {
				return j
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
				m = Object(n.a)(p),
				y = Object(n.a)(b),
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
					if (l.ok) l.body.name && t(m(l.body)), l.body.id && t(Object(a.f)(l.body.id)), t(c.g(p)), t(c.f({
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
						t(y(r)), t(n ? c.f({
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
				}, _ = "USER_UNBLOCK__PENDING", E = "USER_UNBLOCK__SUCCESS", h = "USER_UNBLOCK__FAILED", I = Object(n.a)(_), g = Object(n.a)(E), S = Object(n.a)(h), j = e => async (t, r, {
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
				return m
			})), r.d(t, "c", (function() {
				return y
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
				}, m = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", O = "USER_UNWHITELIST__FAILED", _ = Object(n.a)(m), E = Object(n.a)(y), h = Object(n.a)(O), I = e => async (t, r, {
					apiContext: n
				}) => {
					t(_({
						name: e
					})), (await Object(c.d)(n(), e)).ok ? (t(E({
						name: e
					})), t(a.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(h({
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
				usePreview: m
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
				usePreview: m
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
				m = r("./src/reddit/selectors/platform.ts"),
				y = r("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				O = r.n(y);
			const _ = Object(u.a)(p.a),
				E = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(d.a)(e => {
				const t = Object(c.e)(m.d),
					r = E,
					d = Object(c.d)(),
					u = e => {
						e.stopPropagation(), d(Object(i.h)({
							tooltipId: r
						}))
					};
				return Object(n.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(b.a)(), 500) : setTimeout(() => Object(b.b)(), 500)
				}, [d, e.isOpen]), t ? a.a.createElement(_, {
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/components/HumanDate/index.tsx"),
				a = r("./src/lib/timeUntil/index.ts"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function i(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? d._("Voting closed {timeAgo}", [d._param("timeAgo", o.a.createElement(n.d, {
					seconds: e.poll.endsAt / s.Rb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return L
			})), r.d(t, "a", (function() {
				return $
			}));
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				m = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				O = r("./src/reddit/actions/post.ts"),
				_ = r("./src/reddit/helpers/flair.ts"),
				E = r("./src/reddit/helpers/path/index.ts"),
				h = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/models/Flair/index.ts"),
				S = r("./src/reddit/models/Media/index.ts"),
				j = r("./src/reddit/models/Prediction/Tournament/index.ts"),
				v = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = r("./src/lib/getShortenedLink.ts"),
				D = r("./src/reddit/components/FlairWrapper/index.tsx"),
				w = r("./node_modules/fbt/lib/FbtPublic.js"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				A = r("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				C = r("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				R = r.n(C);
			const N = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var L, k = Object(c.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, s = r ? r.totalVotes : "0";
					return a.a.createElement("div", {
						className: Object(u.a)(e.className, R.a.proposalMetaData)
					}, a.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(P.a)(s)), w.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(A.a, {
						className: R.a.proposalExpiry,
						poll: t
					}))
				})),
				x = r("./src/reddit/components/SEOTitle/index.tsx"),
				U = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				F = r("./src/reddit/components/PostTitle/index.m.less"),
				G = r.n(F),
				B = r("./src/config.ts"),
				q = r("./src/reddit/hooks/useClickSourceData.ts"),
				V = r("./src/reddit/hooks/useExperimentVariant.ts"),
				H = r("./src/reddit/hooks/usePostContext.ts"),
				W = r("./src/reddit/hooks/useTheme.ts"),
				Q = r("./src/telemetry/models/Outbound.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(L || (L = {}));
			const $ = ({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: s,
					children: n,
					className: c,
					redditStyle: o
				}) => {
					const d = Object(W.a)();
					let i = "";
					switch (e) {
						case L.ExtraLarge:
							i = G.a.ExtraLarge;
							break;
						case L.Large:
							i = G.a.Large;
							break;
						case L.Medium:
							i = G.a.Medium;
							break;
						case L.Small:
							i = G.a.Small;
							break;
						case L.ExtraSmall:
							i = G.a.ExtraSmall
					}
					return a.a.createElement("div", {
						className: Object(u.a)(G.a.Title, c, i, {
							[G.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(v.a)({
								redditStyle: o,
								theme: d
							}).titleText
						}
					}, r ? a.a.createElement(x.b, {
						type: r
					}, n) : n)
				},
				Y = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					children: s,
					...n
				}) => a.a.createElement(o.a, K({}, n, {
					className: Object(u.a)(e, G.a.styledLink, {
						[G.a.isVisitedEnabled]: !t
					})
				}), s),
				z = ({
					disableVisited: e,
					nowrap: t,
					className: r,
					children: s
				}) => a.a.createElement("div", {
					className: Object(u.a)(G.a.titleContainer, r, {
						[G.a.isNoWrap]: t,
						[G.a.isVisitedEnabled]: !e
					})
				}, s),
				X = Object(d.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: M.cb
				}),
				J = e => {
					const {
						post: t,
						subreddit: r
					} = e, {
						isSponsored: s
					} = t, n = Object(c.d)(), o = Object(q.a)(), d = Object(V.a)(p.fd) === p.md.Enabled, u = Object(c.e)(U.b), l = e => {
						!u || t.media && Object(S.H)(t.media) || (e.preventDefault(), n(Object(O.ab)(Object(E.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(z, {
						nowrap: e.nowrap
					}, a.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(Z, e)); {
						const n = t.media && Object(S.H)(t.media) ? Object(h.c)(t.id, r.name) : t.permalink,
							c = e.isCommentPermalink ? Object(E.b)(n) : d ? Object(y.a)(n, void 0, o) : Object(y.a)(n);
						return a.a.createElement(z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: r
							} = Object(i.t)(e, t.imageGalleryCurrentItem);
							return r ? a.a.createElement(f.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, a.a.createElement(Z, t)) : a.a.createElement(Z, t)
						})(t, e) : a.a.createElement(Y, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c,
							onClick: l
						}, a.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: s
					} = e;
					let n = e.format ? e.format(s) : s.title;
					r && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const c = e.isCommentsPage ? x.a.PostComments : x.a.PostItem;
					return a.a.createElement($, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: c
					}, t && a.a.createElement(D.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent
					}), n)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: s
					} = r, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, c = !t && !e.isCrosspost && e.size !== L.Large && !r.isSponsored && !(r.media && Object(S.H)(r.media)) && (r.source || r.media && (r.media.type === S.o.GIFVIDEO || r.media.type === S.o.IMAGE || r.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return a.a.createElement(m.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: n
						}, Object(T.a)(r), !r.isSponsored && a.a.createElement(I.a, {
							name: "external_link",
							className: G.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== L.Large && e.size !== L.ExtraLarge) return a.a.createElement(m.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: n
					}, Object(T.a)(r), !r.isSponsored && a.a.createElement(I.a, {
						name: "external_link",
						className: G.a.outboundLinkIcon
					}));
					return null
				};
			class te extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${G.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(v.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(v.a)(this.props).titleText,Object(v.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: s,
						isOverlay: n,
						poll: c,
						post: o,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, i = r === g.b.Left, l = Object(D.b)(o), p = d ? l.filter(e => e.type === g.f.Nsfw || e.type === g.f.Spoiler) : i ? l.filter(e => Object(_.q)(e.type)) : [], b = d ? [] : i ? l.filter(e => !Object(_.q)(e.type)) : l, f = !n && !s, m = !t && p && p.length > 0 && f, y = !t && b && b.length > 0 && f;
					return a.a.createElement("div", {
						className: Object(u.a)(G.a.Component, e, o.id),
						ref: this.props.innerRef
					}, !d && m && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), !Object(j.b)(o) && a.a.createElement(J, K({}, this.props, {
						leftFlair: d ? p : void 0
					})), c && a.a.createElement(k, {
						className: G.a.pollMeta,
						pollId: c.id
					}), a.a.createElement(ee, this.props), y && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: G.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${B.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(b.eb)(),
					r = Object(b.w)(t),
					s = Object(H.a)(),
					n = Object(c.e)(n => X(n, {
						...s,
						...e,
						isCommentPermalink: r,
						pageLayer: t
					})),
					o = Object(W.a)(),
					d = Object(l.b)();
				return s ? a.a.createElement(te, K({
					pageLayer: t,
					isCommentPermalink: r
				}, s, n, e, {
					theme: o,
					sendEvent: d
				})) : null
			}))
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
				return Z
			})), r.d(t, "a", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return se
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
				m = r("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				y = r("./src/reddit/constants/history.ts"),
				O = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				E = r("./src/reddit/models/Search/index.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				I = r("./node_modules/uuid/v4.js"),
				g = r.n(I),
				S = r("./src/reddit/components/SearchDropdown/index.m.less"),
				j = r.n(S);
			const v = Object(c.a)(f.b);

			function T({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: s,
				recentSearch: c,
				searchOriginPage: p,
				indexOfItem: f,
				toggleTooltip: I,
				onClearSearchQuery: S,
				onRemoveRecentSearch: T,
				onUpdateSearchQuery: D,
				onSendSearchClickRecentEvent: w,
				onCloseDropdown: P
			}) {
				const {
					nsfwSessionSetting: A,
					refreshNsfwSessionSettingExpiryTime: C
				} = Object(m.c)(), R = Object(a.e)(h.db), N = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery, {
					url: L,
					qs: k
				} = Object(O.a)({
					includeNsfwResults: R && A,
					multireddit: null,
					searchItem: c,
					searchOptions: {
						source: l.a.Recent
					},
					subreddit: null
				}), x = N(c);
				let U;
				r && (U = N(r));
				const M = c.isProfile || c.isSubreddit ? {
					[y.b.ClickSource]: "search_dropdown",
					[y.b.ClickId]: g()()
				} : void 0;
				return n.a.createElement(i.a, {
					"aria-label": c.searchQuery,
					className: Object(o.a)(j.a.listItem, b.a.item, t, {
						[j.a.mFocused]: !(!r || r.section !== E.c.recent || U !== x)
					}),
					onClick: () => {
						c.isTypeaheadSuggestion ? S() : D(c.searchQuery), w(c.searchQuery, c, f), P(), C()
					},
					key: x,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: L && u(L) || "",
						state: {
							...M,
							[y.b.SearchOriginPage]: p
						},
						search: k
					}
				}, c.displayInfo && c.isTypeaheadSuggestion ? c.displayInfo.iconUrl ? n.a.createElement("div", {
					className: j.a.subredditIcon,
					style: {
						backgroundImage: `url('${c.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(_.a, {
					name: "community",
					isFilled: !s,
					className: Object(o.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: s
					})
				}) : n.a.createElement(_.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, x), n.a.createElement("div", {
					onMouseEnter: () => I(x),
					onMouseLeave: () => I(null),
					id: x
				}, n.a.createElement(_.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), T(c)
					}
				}), n.a.createElement(v, {
					className: j.a.fixedTextTooltip,
					isOpen: e === x,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: x,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var D = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = r("./src/reddit/components/PostTitle/index.tsx"),
				P = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				A = r("./src/reddit/constants/adEvents.ts"),
				C = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				R = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				N = r("./src/reddit/helpers/correlationIdTracker.ts"),
				L = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function k({
				className: e,
				focusedItem: t,
				id: r,
				trendingItem: s,
				searchOriginPage: c,
				onUpdateSearchQuery: p,
				onCloseDropdown: f,
				onSetRecentSearch: m,
				fireAdPixelsOfType: h
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
					T = n.a.createElement(i.a, {
						id: r,
						"aria-label": s.searchQuery,
						className: Object(o.a)(j.a.listItem, j.a.mTrending, b.a.item, b.a.trending, e, {
							[j.a.mFocused]: !(!t || t.section !== E.c.trending || s.searchQuery !== t.searchQuery)
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
							if (m(e), Object(N.e)(N.a.SearchResults), (e => I((t, r) => Object(L.v)(r(), e, L.a.SEARCH_DROPDOWN)))(s), g) {
								const {
									post: e
								} = s;
								e && h(e, A.a.Click)
							}
							f()
						},
						key: `trending-${s.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: S && u(S) || "",
							state: {
								[y.b.SearchOriginPage]: c
							},
							search: v
						}
					}, n.a.createElement("div", {
						className: b.a.trendingContent
					}, g && n.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), n.a.createElement("div", null, n.a.createElement(_.a, {
						name: "popular",
						className: j.a.trendingIcon
					}), n.a.createElement("span", null, n.a.createElement(w.a, {
						className: Object(o.a)(j.a.listItemText, j.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: w.b.Small
					}, s.searchQuery)), s.post && n.a.createElement("div", {
						className: j.a.postTitle
					}, s.post.title)), s.subredditInfo && n.a.createElement(C.a, {
						className: Object(o.a)(b.a.relatedSubredditMetaData, j.a.listItemSubtext, {
							[j.a.mNoPostTitle]: !s.post
						}),
						iconUrl: s.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", s.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), s.post && Object(R.a)(s.post) && n.a.createElement(D.a, {
						post: s.post,
						removeLink: !0,
						usePreview: g
					}));
				return g ? n.a.createElement(P.a, {
					post: s.post
				}, T) : T
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
				onCloseDropdown: m
			}) {
				const O = !r.isProfile || r.enableFollowers;
				return n.a.createElement(i.a, {
					"aria-label": r.searchQuery,
					className: Object(o.a)(j.a.listItem, j.a.mTypeahead, b.a.item, e, {
						[j.a.mFocused]: !(!t || t.searchQuery !== r.searchQuery)
					}),
					onClick: () => {
						p(r), l(r.searchQuery, r, s, c), f(), m()
					},
					key: r.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${u(r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery)}`,
						state: {
							[y.b.ClickSource]: "typeahead",
							[y.b.ClickId]: g()()
						}
					}
				}, r.displayInfo && r.displayInfo.iconUrl ? n.a.createElement("div", {
					className: j.a.subredditIcon,
					style: {
						backgroundImage: `url('${r.displayInfo.iconUrl}')`
					}
				}) : n.a.createElement(_.a, {
					name: "community",
					isFilled: !a,
					className: Object(o.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: a
					})
				}), n.a.createElement("div", null, r.displayInfo && r.displayInfo.subredditOrProfileName && n.a.createElement("div", {
					className: Object(o.a)(j.a.listItemText, j.a.mTypeahead, b.a.text)
				}, r.displayInfo.subredditOrProfileName), n.a.createElement("div", null, r.displayInfo && null != r.displayInfo.subscribers && O && n.a.createElement("div", {
					className: Object(o.a)(j.a.listItemSubtext, b.a.subText)
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
			var F = r("./src/reddit/constants/zIndex.ts"),
				G = r("./src/reddit/controls/Dropdown/index.tsx"),
				B = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				q = r.n(B),
				V = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				H = r.n(V),
				W = r("./src/lib/constants/index.ts"),
				Q = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				K = r("./src/reddit/helpers/trackers/searchResults.ts"),
				$ = r("./src/reddit/hooks/usePageLayer.ts"),
				Y = r("./src/reddit/hooks/useTracking.ts"),
				z = r("./src/reddit/selectors/telemetry.ts");

			function X({
				searchOriginPage: e,
				searchItem: t,
				onTriggerSearch: r
			}) {
				var c;
				const u = (null === (c = t.searchQuery) || void 0 === c ? void 0 : c.trim()) || "",
					l = Object(Y.a)(),
					p = Object($.a)(),
					f = Object(a.e)(e => Object(Q.Z)(e, {
						pageLayer: p
					})),
					E = Object(a.e)(e => Object(Q.s)(e, {
						pageLayer: p
					})),
					I = Object(a.e)(e => Object(Q.e)(e, {
						pageLayer: p
					})),
					g = Object(a.e)(h.db),
					{
						nsfwSessionSetting: S
					} = Object(m.c)(),
					{
						url: v,
						qs: T
					} = Object(O.a)({
						subreddit: E,
						multireddit: I,
						searchItem: t,
						shouldSearchSubreddit: f,
						includeNsfwResults: g && S
					}),
					D = {
						id: (null == E ? void 0 : E.id) || "",
						q: t.searchQuery,
						eventType: f ? "subreddit" : void 0,
						t: "all",
						type: f ? [W.ac.Posts] : [W.ac.Posts, W.ac.Subreddits, W.ac.Users],
						restrict_sr: f ? "1" : ""
					};
				return Object(s.useEffect)(() => {
					l(Object(K.m)(D, f, p || void 0))
				}, []), n.a.createElement(i.a, {
					onClick: function(e) {
						l(Object(K.j)(z.a.FullSearchButton, D, f, p || void 0)), r(e)
					},
					to: {
						pathname: v,
						state: {
							[y.b.SearchOriginPage]: e
						},
						search: T
					},
					className: Object(o.a)(j.a.listItem, b.a.item),
					"data-testid": "search-trigger-item"
				}, n.a.createElement(_.a, {
					name: "search"
				}), n.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", u)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = "SearchDropdown", ee = "SearchDropdownContent", te = 5, re = Object(c.a)(G.a);

			function se({
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
				searchItem: m,
				searchOriginPage: y,
				isFixed: O = !0,
				isOverlay: _ = !0,
				fireAdPixelsOfType: E,
				onClearSearchQuery: h,
				onClose: I,
				onRemoveRecentSearch: g,
				onSendSearchClickRecentEvent: S,
				onSendSearchClickTypeaheadEvent: v,
				onSetRecentSearch: D,
				onUpdateSearchQuery: w
			}) {
				var P;
				const A = Object(a.d)(),
					[C, R] = Object(s.useState)(null),
					N = function(e) {
						const [t, r] = Object(s.useState)(null), n = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(n, [n]), Object(s.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e),
					x = t.slice(0, te),
					[U, G] = Object(s.useState)(new Array(te).fill(!1)),
					B = !!(null === (P = m.searchQuery) || void 0 === P ? void 0 : P.trim()) && c,
					V = 0 === l.length && !d && !B,
					W = Object(s.useMemo)(() => l.filter(e => e.isSubreddit), [l]),
					Q = {
						width: N ? `${N}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				O && (Q.zIndex = F.g), Object(s.useLayoutEffect)(() => {
					if (!r && c && document.getElementById(ee)) {
						const e = K();
						G(e), x.forEach((t, r) => {
							e[r] && A((e, r) => Object(L.w)(r(), t, L.a.SEARCH_DROPDOWN))
						})
					}
				}, [r, c, A]);
				const K = () => {
					const e = new Array(x.length).fill(!1);
					return x.forEach((t, r) => {
						if (t.id) {
							const s = document.getElementById(`${Z}-${t.id}`),
								n = document.getElementById(ee);
							if (s && n) {
								const t = s.getBoundingClientRect(),
									a = n.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[r] = !0)
							}
						}
					}), e
				};
				return n.a.createElement(re, {
					className: Object(o.a)(j.a.dropdown, q.a.listContainer),
					id: ee,
					isFixed: O,
					isOpen: c,
					isOverlay: _,
					tooltipId: Z,
					noFocus: !0,
					renderContentsHidden: !0,
					style: Q,
					onDropdownMounted: () => {
						if (!r && x.length > 0) {
							const e = K();
							G(e), x.forEach((t, r) => {
								e[r] && A((e, r) => Object(L.w)(r(), t, L.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = K();
						x.forEach((t, r) => {
							U[r] || !e[r] || t.post && t.post.isSponsored || A((e, r) => Object(L.w)(r(), t, L.a.SEARCH_DROPDOWN))
						}), G(e)
					}
				}, l.map((e, t) => n.a.createElement(M, {
					focusedItem: l[p],
					indexOfItem: t,
					subredditSuggestions: W,
					item: e,
					key: e.id,
					onClearSearchQuery: h,
					onSendSearchClickTypeaheadEvent: v,
					onSetRecentSearch: D,
					nightmode: f,
					onCloseDropdown: I
				})), V && u.map((e, t) => n.a.createElement(T, {
					searchOriginPage: y,
					activeTooltipId: C,
					focusedItem: i[p],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: h,
					onRemoveRecentSearch: g,
					onSendSearchClickRecentEvent: S,
					onSetRecentSearch: D,
					onUpdateSearchQuery: w,
					recentSearch: e,
					toggleTooltip: R,
					nightmode: f,
					onCloseDropdown: I
				})), V && !r && t && n.a.createElement("div", {
					className: Object(o.a)(b.a.title, j.a.listItemTitle, {
						[j.a.mWithBorder]: !!u.length
					})
				}, J._("Trending today", null, {
					hk: "3nAMpY"
				})), (d || r) && 0 === l.length && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(o.a)(j.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(j.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(j.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(j.a.loadingItem, H.a.item)
				}), n.a.createElement("div", {
					className: Object(o.a)(j.a.loadingItem, H.a.item)
				})), V && x.map(e => n.a.createElement(k, {
					id: `${Z}-${e.id}`,
					key: e.id,
					focusedItem: i[p],
					searchOriginPage: y,
					fireAdPixelsOfType: E,
					onCloseDropdown: I,
					onSetRecentSearch: D,
					onUpdateSearchQuery: w,
					trendingItem: e
				})), B && n.a.createElement(X, {
					key: m.searchQuery,
					searchOriginPage: y,
					searchItem: m,
					onTriggerSearch: I
				}))
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
				m = r("./src/lib/cache/index.ts"),
				y = r("./src/lib/makeCommentsPageKey/index.ts"),
				O = r("./src/reddit/helpers/trackers/subredditForking.ts"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx");
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
				h = [{
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
						s = Object(y.a)(t.postId),
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
					let t = Object(m.b)(I);
					const r = Object.entries(t || {});
					r.length >= 99 && (t = r.sort(([, e], [, t]) => t - e).splice(0, 99).reduce((e, [t, r]) => (e[t] = r, e), {})), Object(m.d)(I, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				j = (e, t) => {
					var r;
					if (!Object(b.J)(e)) return !1;
					if (null === (r = Object(m.b)(I)) || void 0 === r ? void 0 : r[t.postId]) return !1;
					const s = Object(p.H)(e, t),
						n = Object(p.V)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == n ? void 0 : n.type) !== u.f.Public || n.isNSFW || n.isQuarantined || (null == s ? void 0 : s.isNSFW) || (null == s ? void 0 : s.source)) return !1;
					const a = h.find(({
						low: e,
						high: t
					}) => t >= n.subscribers && n.subscribers > e);
					return !(!a || !s.numComments || a.threshold > s.numComments) && !!g(e, t)
				},
				v = () => Object(f.c)({
					shouldLoadCTA: j
				}),
				T = Object(d.b)(v),
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
				w = Object(c.memo)(T(Object(_.c)(D)))
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
				return y
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
				m = r.n(f);
			const y = Object(a.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.w)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}))(e => n.a.createElement("div", {
				className: Object(o.a)(b.a.subText, m.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => n.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, n.a.createElement(u.b, {
				className: Object(o.a)(m.a.subredditIcon, m.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : n.a.createElement(u.b, {
				className: Object(o.a)(m.a.subredditIcon, e.iconClassName),
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
				return m
			})), r.d(t, "a", (function() {
				return y
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
				}), m = (e, t) => {
					const r = {
						channels: t
					};
					return Object(c.a)(e, {
						...d,
						variables: {
							input: r
						}
					})
				}, y = e => Object(c.a)(e, {
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
				return y
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "b", (function() {
				return w
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
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const y = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
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
				_ = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
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
				h = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
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
				j = (e, t) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, r, n) => {
					let a = Object(p.a)(Object(m.a)(Object(f.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (a = Object(b.a)(a)), Object(d.a)(e, {
						data: r,
						endpoint: a,
						method: o.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				T = (e, t, r, s) => Object(d.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/distinguish/${r}`),
					method: o.jb.POST,
					data: {
						id: t,
						sticky: s
					}
				}),
				D = {
					[o.G.NONE]: c.d.None,
					[o.G.MODERATOR]: c.d.ModDistinguished,
					[o.G.ADMIN]: c.d.AdminDistinguished,
					[o.G.ALUMNI_ADMIN]: c.d.AlumniDistinguished
				};

			function w(e, t, r) {
				const s = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === o.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: D[t]
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
				return m
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return _
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
				m = e => ({
					type: "claim",
					subredditId: e
				}),
				y = e => ({
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
			async function _(e, t) {
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
				return y
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
					...m(t),
					...E(r),
					assetIds: h(r)
				}),
				m = e => ({
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
				_ = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
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
									url: _(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				h = e => {
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

			function c({
				subreddit: e,
				multireddit: t,
				searchItem: r,
				searchOptions: c,
				shouldSearchSubreddit: o,
				includeNsfwResults: d
			}) {
				let i;
				const u = [];
				if (r.isTypeaheadSuggestion) i = `/${r.isProfile?r.searchQuery.replace("u/","user/"):r.searchQuery}`;
				else {
					if (u.push(`${n.q}=${Object(s.b)(r.rawQuery||r.searchQuery)}`), i = "/search/", r.section !== a.c.trending && r.section !== a.c.recent || c && c.source && u.push(`source=${c.source}`), e && o ? (i = `/r/${e.name}${i}`, u.push(`${n.t}=1`), u.push(`${n.z}=${e.isNSFW?"1":""}`)) : !e && r.subredditOrProfileRestrictedName && (i = `/${r.subredditOrProfileRestrictedName}${i}`, u.push(`${n.t}=1`)), t) {
						i = `/user/${t.url.split("/")[2]}/m/${t.name}${i}`, u.push(`${n.t}=1`), u.push(`${n.z}=${t.isNSFW?"1":""}`), u.push(`${n.k}=1`)
					}
					c && c.category && u.push(`${n.b}=${c.category}`), d && u.push(`${n.j}=1`)
				}
				return {
					url: i,
					qs: u.join("&")
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
				return m
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
				m = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : p(e)
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
						n = Object(f.db)(e.getState()) ? "1" : "";
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
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
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
				return u
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "g", (function() {
				return h
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
				m = e => {
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
				y = e => "string" == typeof e,
				O = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				_ = e => {
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
				h = (e, t) => {
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
					...n.o(e),
					profile: n.R(e),
					post: n.I(e, t),
					media: n.B(e, t),
					subreddit: n.jb(e),
					comment: n.j(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.o(e),
					profile: n.R(e),
					post: n.I(e, t),
					media: n.B(e, t),
					subreddit: n.jb(e),
					comment: n.j(e, t)
				}),
				o = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.qb(t),
					subreddit: n.jb(t),
					post: n.I(t, e),
					actionInfo: n.d(t),
					app: n.h(t),
					referrer: n.X(t),
					session: n.eb(t)
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
					...n.o(e),
					listing: n.z(e, t),
					subreddit: n.jb(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return T
			})), r.d(t, "B", (function() {
				return w
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "u", (function() {
				return A
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "q", (function() {
				return R
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "A", (function() {
				return L
			})), r.d(t, "z", (function() {
				return k
			})), r.d(t, "y", (function() {
				return x
			})), r.d(t, "p", (function() {
				return U
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "h", (function() {
				return V
			})), r.d(t, "m", (function() {
				return H
			})), r.d(t, "f", (function() {
				return W
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "i", (function() {
				return K
			})), r.d(t, "k", (function() {
				return $
			})), r.d(t, "l", (function() {
				return Y
			})), r.d(t, "j", (function() {
				return z
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "o", (function() {
				return J
			})), r.d(t, "x", (function() {
				return Z
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = (r("./src/reddit/helpers/widgets/index.tsx"), r("./src/reddit/models/DiscoveryUnit/index.ts")),
				u = r("./src/reddit/models/Search/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/reddit/selectors/trending.ts"),
				f = r("./src/reddit/selectors/widgets.ts"),
				m = r("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const y = "discovery_unit",
				O = (e, t, r) => ({
					...p.o(e),
					source: y,
					screen: p.ab(e),
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
					...O(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(m.a)(h(t)(e))
				},
				h = (e, t) => r => _(r, e, t),
				I = (e, t, r, s) => "unitName" in t ? O(e, t, s) : ((e, t, r) => ({
					...p.o(e),
					source: "search",
					screen: p.ab(e),
					search: r ? {
						...p.bb(e, r),
						structureType: p.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				g = (e, t, r, n, a) => ({
					...I(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: p.I(e, r)
				}),
				S = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.c.PromotedTrend : p.c.Trending
				});
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const v = (e, t, r) => {
					Object(m.a)(D(e, t, r, c.c.CLICK))
				},
				T = (e, t, r) => {
					Object(m.a)(D(e, t, r, c.c.VIEW))
				},
				D = (e, t, r, s) => {
					const n = Object(b.a)(e, u.d.dropdown).filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.o(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: S(t),
						discoveryUnit: r === j.POPULAR_CAROUSEL ? {
							name: i.k,
							id: i.k,
							title: i.k,
							type: "query"
						} : void 0,
						actionInfo: p.d(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? p.v(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.c.Trending,
							queryId: p.cb(e, o.a.SearchResults)
						}
					}
				},
				w = (e, t, r, s, n, a, o) => {
					Object(m.a)({
						...p.o(e),
						...Object(d.f)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				P = (e, t, r, s) => {
					Object(m.a)(g(e, t, r, s))
				},
				A = (e, t, r, s) => n => g(n, e, t, r, s),
				C = (e, t) => {
					Object(m.a)({
						...O(e, t),
						source: y,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				R = (e, t, r, s) => {
					Object(m.a)(N(t, r, s)(e))
				},
				N = (e, t, r, n) => a => {
					return {
						...I(a, e, r, n),
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: p.I(a, t)
					}
				},
				L = (e, t, r, s) => n => a => Object(d.f)(a, n, e, t, r, s),
				k = (e, t, r, s) => n => a => Object(d.e)(a, e, t, void 0, r, n, s),
				x = (e, t, r, s) => n => a => ({
					...Object(d.f)(a, n, e, t, r, s),
					noun: "ad"
				}),
				U = (e, t) => r => n => ({
					...e ? O(n, e, t) : {},
					source: y,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: p.I(n, r)
				}),
				M = (e, t, r, s) => {
					Object(m.a)(F(t, r, s)(e))
				},
				F = (e, t, r, s) => n => {
					const a = Object(l.c)(n, {
							postId: t
						}),
						o = a ? Object(f.b)(n, a) : void 0;
					return {
						...I(n, e, r, s),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: p.I(n, t)
					}
				},
				G = () => ({
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
				B = (e, t, r) => p.d(e, {
					position: r
				}),
				q = (e, t, r) => {
					const s = G();
					return e => ({
						..._(e, s),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t)
					})
				},
				V = (e, t, r) => {
					const s = G();
					return e => ({
						...g(e, s, t),
						actionInfo: B(e, 0, r)
					})
				},
				H = (e, t, r) => {
					const n = G();
					return e => ({
						...O(e, n),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						source: y,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				W = (e, t, r) => {
					const n = G();
					return e => ({
						...O(e, n),
						actionInfo: B(e, 0, r),
						post: p.I(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				Q = (e, t, r, n) => {
					const a = G();
					return e => ({
						...O(e, a),
						actionInfo: B(e, 0, n),
						subreddit: p.kb(e, r) || null,
						post: p.I(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				K = (e, t, r) => {
					const n = G();
					return e => ({
						...O(e, n),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				$ = (e, t, r, n) => {
					const a = G();
					return e => ({
						...O(e, a),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						post: n ? p.I(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Y = (e, t, r, n) => {
					const a = G();
					return e => ({
						...O(e, a),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						post: n ? p.I(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				z = (e, t, r) => {
					const n = G();
					return e => ({
						...O(e, n),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				X = (e, t, r) => {
					const n = G();
					return e => ({
						...O(e, n),
						actionInfo: B(e, 0, r),
						subreddit: p.kb(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				J = (e, t) => r => ({
					...O(r, e),
					...t && Object(f.b)(r, t),
					source: y,
					action: c.c.CLICK,
					noun: "item"
				}),
				Z = e => t => ({
					...O(t, e),
					source: y,
					action: c.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return o
			})), r.d(t, "y", (function() {
				return d
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "r", (function() {
				return m
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "s", (function() {
				return A
			})), r.d(t, "v", (function() {
				return C
			})), r.d(t, "w", (function() {
				return R
			}));
			var s = r("./src/reddit/models/ScheduledPost/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...n.o(e),
					screen: n.ab(e),
					subreddit: n.jb(e),
					userSubreddit: n.sb(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				o = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...a(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...a(e)
				}),
				i = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...a(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...a(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...a(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...a(e)
				}),
				b = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...a(t),
					scheduledPost: c(e)
				}),
				m = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...a(t),
					scheduledPost: c(e)
				}),
				y = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...a(e)
				}),
				O = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...a(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...a(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...a(e)
				}),
				h = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...a(t),
					actionInfo: n.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				I = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : I[e],
					...a(t)
				}),
				S = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...a(e)
				}),
				j = (e, t, r) => c => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...a(c),
					actionInfo: n.d(c, {
						settingValue: t ? "true" : "false",
						pageType: r ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...a(e)
				}),
				T = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...a(e)
				}),
				D = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...a(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...a(e),
					scheduledPost: c(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...a(e)
				}),
				A = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...a(e),
					scheduledPost: c(t)
				}),
				C = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...a(e)
				}),
				R = () => (e, t) => {
					const r = a(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: c(t)
					}
				}
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
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");

			function a(e, t = n.a) {
				return Object(s.e)(r => Object(n.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(s.useContext)(n.b)
			}
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
				return m
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "p", (function() {
				return T
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
			var b, f, m, y;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(b || (b = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(m || (m = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(y || (y = {}));
			const O = e => f[y[e]],
				_ = e => y[f[e]],
				E = e => m[f[e]],
				h = e => f[m[e]],
				I = e => y[m[e]];
			var g;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const S = e => {
					switch (e) {
						case g.Hourly:
						case g.Daily:
						case g.Weekly:
						case g.Monthly:
							return !0
					}
					return !1
				},
				j = "custom",
				v = e => {
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
				T = e => "frequency" in e && !!e.frequency
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
				return _v
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
			var m = (e = null, t) => {
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
				y = r("./src/reddit/actions/ads/constants.ts"),
				O = r("./src/reddit/actions/unload/constants.ts");
			const _ = {};

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
			var h = (e = _, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case y.d:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case y.n:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.k:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.e:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.j:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.i:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.g:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.f:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.h:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return E(e, r, n, `adVideoWatchedPercent${s}`)
						}
						case y.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return E(e, r, n, `adVideoWatchedSeconds${s}`)
						}
						case y.w:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.y:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.x:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case O.b:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.s:
							return E(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case y.c: {
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
				j = r("./node_modules/redux/es/redux.js"),
				v = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var T = (e = null, t) => {
				switch (t.type) {
					case v.a:
						return t.payload && t.payload.error || null;
					case v.b:
					case v.c:
						return null;
					default:
						return e
				}
			};
			var D = (e = !1, t) => {
					switch (t.type) {
						case v.c:
							return !0;
						case v.a:
						case v.b:
							return !1;
						default:
							return e
					}
				},
				w = Object(j.c)({
					error: T,
					pending: D
				});
			const P = {};
			var A = (e = P, t) => {
					switch (t.type) {
						case v.d:
						case v.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case v.c:
						case v.a:
						default:
							return e
					}
				},
				C = Object(j.c)({
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
				L = r("./node_modules/lodash/mergeWith.js"),
				k = r.n(L),
				x = r("./src/reddit/actions/comment/constants.ts"),
				U = r("./src/reddit/actions/comment/websocket/constants.ts"),
				M = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				F = r("./src/reddit/actions/modQueue/constants.ts"),
				G = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				H = r("./src/reddit/actions/pages/search/index.ts"),
				W = r("./src/reddit/actions/pages/subreddit.ts"),
				Q = r("./src/reddit/actions/profileConversations.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				$ = r("./src/reddit/actions/userFlair/constants.ts"),
				Y = r("./src/reddit/models/User/index.ts");
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
							return k()({
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
							return Object(N.merge)(e, r)
						}
						return e
					}
					case x.w:
					case W.SUBREDDIT_LOADED:
					case G.f:
					case B.b:
					case B.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case Q.e:
					case K.i:
						return J(e, t.payload);
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
						return J(e, t.payload.response);
					case $.r: {
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
					case $.a: {
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
					o = Object(Y.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(N.merge)(n, {
					[a]: {
						[o]: d
					}
				}) : n
			};
			var Z = Object(j.c)({
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
				ae = Object(j.c)({
					error: se,
					pending: ne
				}),
				ce = Object(j.c)({
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
				ue = Object(j.c)({
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
				me = Object(j.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				ye = r("./node_modules/lodash/merge.js"),
				Oe = r.n(ye);
			const _e = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var Ee = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : _e(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : _e(e.endsAt)), e),
				he = r("./src/reddit/models/Gold/Award.ts"),
				Ie = r("./src/reddit/actions/discoveryUnit.ts"),
				ge = r("./src/reddit/actions/frontpage/constants.ts"),
				Se = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				je = r("./src/reddit/actions/multireddit/constants.ts"),
				ve = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Te = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				De = r("./src/reddit/actions/pages/postCreation.ts"),
				we = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Pe = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ae = r("./src/lib/makeActionCreator/index.ts"),
				Ce = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ae.a)("RECOMMENDED_POSTS_LOADED"), Object(Ae.a)("RECOMMENDED_POSTS_FAILED");
			var Re = r("./src/reddit/actions/search.ts");
			const Ne = he.m,
				Le = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Ee]),
				ke = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Le(t), e), {});
					return Oe()({
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
						return ke(e, r)
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
					case De.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case ve.e:
					case ve.h:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case je.r:
					case G.f:
					case ge.b:
					case Te.b:
					case H.c:
					case B.b:
					case B.e:
					case Q.b:
					case Q.e:
					case we.b:
					case we.e:
					case Pe.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Re.g:
					case K.i:
					case W.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Le(Object(he.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Le(Object(he.h)(e));
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
					case Se.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return ke(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Se.h: {
						const {
							awards: r
						} = t.payload;
						return ke(e, r || [])
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
				Fe = Object(j.c)({
					pending: Me
				});
			const Ge = {};
			var Be = (e = Ge, t) => {
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
				qe = Object(j.c)({
					api: Fe,
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
				We = Object(j.c)({
					order: He
				}),
				Qe = Object(j.c)({
					blacklist: re,
					create: ce,
					manageable: me,
					models: xe,
					sortedUsable: qe,
					tags: We
				}),
				Ke = r("./src/reddit/actions/badge.ts");
			const $e = {};
			var Ye = (e = $e, t) => {
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
				Je = Object(j.c)({
					error: Ye,
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
				st = Object(j.c)({
					error: et,
					pending: rt
				}),
				nt = Object(j.c)({
					subreddit: Je,
					user: st
				});
			const at = {};
			var ct = (e = at, t) => {
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
				ot = Object(j.c)({
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
				pt = Object(j.c)({
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
				mt = Object(j.c)({
					api: pt,
					list: ft
				}),
				yt = r("./src/reddit/actions/userBlocks.ts");
			const Ot = {};
			var _t = (e = Ot, t) => {
				switch (t.type) {
					case yt.f:
					case yt.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case yt.d: {
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
			var ht = (e = Et, t) => {
					switch (t.type) {
						case yt.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case yt.e:
						case yt.d: {
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
				It = Object(j.c)({
					error: _t,
					pending: ht
				}),
				gt = Object(j.c)({
					api: It
				});
			const St = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var jt = (e = St, t) => {
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case W.SUBREDDIT_PENDING:
						case Te.c:
						case ge.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				vt = r("./src/reddit/actions/downToChat.ts");
			var Tt = (e = null, t) => {
				switch (t.type) {
					case vt.f:
					case vt.g:
						return null;
					case vt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Dt = (e = !1, t) => {
					switch (t.type) {
						case vt.b:
						case vt.f:
							return !0;
						case vt.a:
						case vt.c:
						case vt.e:
						case vt.g:
							return !1;
						default:
							return e
					}
				},
				wt = Object(j.c)({
					error: Tt,
					pending: Dt
				}),
				Pt = r("./node_modules/lodash/mapValues.js"),
				At = r.n(Pt);
			const Ct = {};
			var Rt = (e = Ct, t) => {
					switch (t.type) {
						case vt.f:
						case vt.e:
						case vt.g: {
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
						case vt.c: {
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
						case vt.d:
							return {
								...At()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case vt.a:
						case vt.b:
						default:
							return e
					}
				},
				Nt = Object(j.c)({
					api: wt,
					subreddits: Rt
				}),
				Lt = r("./src/reddit/actions/chat/init.ts");
			var kt = (e = !1, t) => {
					switch (t.type) {
						case Lt.a:
							return !0;
						default:
							return e
					}
				},
				xt = r("./src/lib/omitKey/index.ts"),
				Ut = r("./src/reddit/actions/pages/chatSettings.ts");
			const Mt = {};
			var Ft = (e = Mt, t) => {
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
			const Gt = {};
			var Bt = (e = Gt, t) => {
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
				qt = Object(j.c)({
					error: Ft,
					pending: Bt
				}),
				Vt = Object(j.c)({
					fetch: qt
				});
			const Ht = {};
			var Wt, Qt = (e = Ht, t) => {
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
				Kt = Object(j.c)({
					api: Vt,
					models: Qt
				}),
				$t = (r("./src/chat/actions/message/unreadCount.ts"), r("./src/chat/endpoints/sendbird/index.ts"), r("./src/reddit/actions/tabBadging.ts"));
			r("./src/reddit/selectors/chat.ts"), r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Wt || (Wt = {}));
			const {
				SYNC: Yt,
				REQUEST_FAILED: zt,
				REQUEST_PENDING: Xt,
				REQUEST_SUCCESS: Jt
			} = Wt;
			Object(Ae.a)(Yt), Object(Ae.a)(zt), Object(Ae.a)(Xt), Object(Ae.a)(Jt);
			Ce.kb;
			const Zt = {
				apiError: null
			};
			var er = (e = Zt, t) => {
				switch (t.type) {
					case Wt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Zt,
							apiError: e
						}
					}
					case Wt.REQUEST_SUCCESS:
					case Wt.REQUEST_PENDING:
						return Zt;
					default:
						return e
				}
			};
			var tr = (e = !1, t) => {
					switch (t.type) {
						case Wt.REQUEST_PENDING:
							return !0;
						case Wt.REQUEST_FAILED:
						case Wt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				rr = Object(j.c)({
					error: er,
					pending: tr
				});
			const sr = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var nr = (e = sr, t) => {
					switch (t.type) {
						case Wt.SYNC:
						case Wt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				ar = Object(j.c)({
					api: rr,
					count: nr
				}),
				cr = Object(j.c)({
					downToChat: Nt,
					isInited: kt,
					subredditSettingsPage: Kt,
					unread: ar
				}),
				or = r("./src/reddit/actions/claimgold.ts");
			var dr = (e = null, t) => {
				switch (t.type) {
					case or.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case or.d:
					case or.e:
					case or.c:
						return null;
					default:
						return e
				}
			};
			var ir = (e = !1, t) => {
				switch (t.type) {
					case or.d:
					case or.c:
					case or.a:
						return !1;
					case or.b:
						return !0;
					default:
						return e
				}
			};
			var ur = (e = !1, t) => {
					switch (t.type) {
						case or.b:
						case or.d:
						case or.c:
						case or.a:
							return !1;
						case or.f:
							return !0;
						default:
							return e
					}
				},
				lr = Object(j.c)({
					error: dr,
					pending: ir,
					showLoader: ur
				});
			var pr = (e = "", t) => {
				switch (t.type) {
					case or.g:
						return t.payload;
					case or.e:
						return "";
					default:
						return e
				}
			};
			var br = (e = !1, t) => {
					switch (t.type) {
						case or.e:
							return !0;
						case or.c:
						case or.d:
							return !1;
						default:
							return e
					}
				},
				fr = Object(j.c)({
					api: lr,
					code: pr,
					showModal: br
				}),
				mr = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var yr = (e = !0, t) => {
					switch (t.type) {
						case mr.a:
							return !1;
						case mr.b:
							return !0;
						default:
							return e
					}
				},
				Or = r("./src/reddit/actions/communityFlairs/constants.ts");
			const _r = {};
			var Er = (e = _r, t) => {
					switch (t.type) {
						case Or.a: {
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
				hr = r("./src/reddit/actions/connection/constants.ts");
			const Ir = {
				showBanner: !1,
				online: !0
			};
			var gr = (e = Ir, t) => {
					switch (t.type) {
						case hr.a:
							return {
								online: !1, showBanner: !0
							};
						case hr.b:
							return {
								online: !0, showBanner: !0
							};
						case hr.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				Sr = r("./src/reddit/actions/contentControls/constants.ts");
			const jr = {};
			var vr = (e = jr, t) => {
				switch (t.type) {
					case Sr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Sr.c:
					case Sr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(xt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Tr = {};
			var Dr = (e = Tr, t) => {
					switch (t.type) {
						case Sr.c:
						case Sr.a:
						case Sr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === Sr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				wr = Object(j.c)({
					error: vr,
					pending: Dr
				}),
				Pr = Object(j.c)({
					fetch: wr
				}),
				Ar = r("./src/lib/safeGet/index.ts");
			const Cr = {};
			var Rr = (e = Cr, t) => {
					switch (t.type) {
						case Sr.b: {
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
						case Sr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = Object(Ar.a)(e, r);
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
				Nr = Object(j.c)({
					api: Pr,
					models: Rr
				}),
				Lr = r("./src/reddit/actions/contentGate.ts"),
				kr = r("./src/reddit/actions/preferences.ts");
			const xr = {};
			var Ur = (e = xr, t) => {
				switch (t.type) {
					case Lr.a: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Ar.a)(e, r)) {
								const t = {
									[r]: {
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
								[r]: {
									goldSubreddit: !0
								}
							}
						}
						return e
					}
					case Lr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (Object(Ar.a)(e, s)) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r,
										isContributorRequestsDisabled: n,
										isContributorRequestTimestamp: a,
										subredditId: c
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
					case Lr.f: {
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
								...Object(Ar.a)(e, r) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Lr.h: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (Object(Ar.a)(e, r)) {
								const t = {
									[r]: {
										subredditBanned: !0,
										subredditBanMessage: s
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
									subredditBanned: !0,
									subredditBanMessage: s
								}
							}
						}
						return e
					}
					case Lr.i: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Ar.a)(e, r)) {
								const t = {
									[r]: {
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
								[r]: {
									subredditBlockedForLegalReason: !0
								}
							}
						}
						return e
					}
					case Lr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Ar.a)(e, r)) {
								const t = {
									[r]: {
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
								[r]: {
									subredditDoesNotExist: !0
								}
							}
						}
						return e
					}
					case Lr.c:
					case Lr.d:
					case Lr.e: {
						const {
							profileName: r
						} = t.payload, s = Ce.ic + r.toLocaleLowerCase(), n = Object(Ar.a)(e, s) || {}, a = {
							profileDeleted: t.type === Lr.d,
							profileSuspended: t.type === Lr.e,
							profileBlockedForLegalReason: t.type === Lr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case kr.q:
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
			var Fr = (e = Mr, t) => {
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
				Gr = Object(j.c)({
					models: Fr
				}),
				Br = r("./src/reddit/actions/correlationId/index.tsx"),
				qr = r("./src/reddit/helpers/correlationIdTracker.ts");
			const Vr = {
				[qr.a.AwardCreationFlow]: void 0,
				[qr.a.AwardDeletionFlow]: void 0,
				[qr.a.CommentComposer]: void 0,
				[qr.a.Explore]: void 0,
				[qr.a.GildingFlow]: void 0,
				[qr.a.GiftPremiumFlow]: void 0,
				[qr.a.GoldPayment]: void 0,
				[qr.a.LinkedPosts]: void 0,
				[qr.a.ModQueue]: void 0,
				[qr.a.NsfwLinkedPosts]: void 0,
				[qr.a.PostComposer]: void 0,
				[qr.a.PowerupsFlow]: void 0,
				[qr.a.PremiumSettings]: void 0,
				[qr.a.SearchResults]: void 0,
				[qr.a.SubredditCreation]: void 0,
				[qr.a.VideoView]: void 0
			};
			var Hr = r("./src/reddit/actions/postCollection/constants.ts");
			var Wr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Hr.d:
					case Hr.c:
					case Hr.s:
					case Hr.r:
						return null;
					case Hr.b:
					case Hr.n:
						return t.payload;
					default:
						return e
				}
			};
			var Qr = (e = !1, t) => {
					switch (t.type) {
						case Hr.c:
						case Hr.r:
							return !0;
						case Hr.d:
						case Hr.b:
						case Hr.s:
						case Hr.n:
							return !1;
						default:
							return e
					}
				},
				Kr = Object(j.c)({
					error: Wr,
					pending: Qr
				}),
				$r = Object(j.c)({
					createOrUpdate: Kr
				}),
				Yr = r("./src/reddit/actions/postDraft.ts");
			const zr = {};
			var Xr = (e = zr, t) => {
				switch (t.type) {
					case Yr.c:
					case Yr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Yr.a: {
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
			var Zr = (e = Jr, t) => {
					switch (t.type) {
						case Yr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Yr.c:
						case Yr.a: {
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
				es = Object(j.c)({
					error: Xr,
					pending: Zr
				});
			var ts = (e = null, t) => {
				switch (t.type) {
					case Yr.d:
						return t.payload;
					case Yr.f:
					case Yr.e:
						return null;
					default:
						return e
				}
			};
			var rs = (e = !1, t) => {
					switch (t.type) {
						case Yr.f:
							return !0;
						case Yr.e:
						case Yr.d:
							return !1;
						default:
							return e
					}
				},
				ss = Object(j.c)({
					error: ts,
					pending: rs
				});
			const ns = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var as = (e = ns, t) => {
				switch (t.type) {
					case Yr.l:
					case Yr.j:
						return ns;
					case Yr.i: {
						const e = t.payload;
						return {
							...ns,
							apiError: e
						}
					}
					case Yr.m: {
						const e = t.payload;
						return {
							...ns,
							validationError: e
						}
					}
					case Yr.k: {
						const e = t.payload;
						return {
							...ns,
							submitValidationError: e
						}
					}
					case Yr.h:
						return {
							...ns, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var cs = (e = !1, t) => {
					switch (t.type) {
						case Yr.j:
							return !0;
						case Yr.l:
						case Yr.i:
						case Yr.m:
						case Yr.k:
						case Yr.h:
							return !1;
						default:
							return e
					}
				},
				os = Object(j.c)({
					error: as,
					pending: cs
				}),
				ds = Object(j.c)({
					deleteDraft: es,
					listing: ss,
					save: os
				}),
				is = r("./src/reddit/actions/postCreation/constants.ts");
			const us = {};
			var ls = (e = us, t) => {
					switch (t.type) {
						case is.G: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case is.p: {
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
				ps = Object(j.c)({
					pending: ls
				});
			var bs = (e = null, t) => {
				switch (t.type) {
					case is.u:
					case is.v:
					case is.d:
					case is.e:
					case is.f:
					case is.i:
					case is.j:
					case is.n:
					case is.O:
						return null;
					case is.t:
						return t.payload;
					default:
						return e
				}
			};
			var fs = (e = !1, t) => {
					switch (t.type) {
						case is.u:
							return !0;
						case is.v:
						case is.t:
							return !1;
						default:
							return e
					}
				},
				ms = Object(j.c)({
					error: bs,
					pending: fs
				}),
				ys = Object(j.c)({
					converting: ps,
					mediaUpload: ms
				});
			const Os = {};
			var _s = (e = Os, t) => {
				switch (t.type) {
					case De.PAGE_LOADED:
					case De.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case De.PAGE_FAILED: {
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
			const Es = {};
			var hs = (e = Es, t) => {
				switch (t.type) {
					case De.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case De.PAGE_LOADED: {
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
			const Is = {};
			var gs = (e = Is, t) => {
					switch (t.type) {
						case De.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case De.PAGE_LOADED:
						case De.PAGE_FAILED: {
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
				Ss = Object(j.c)({
					error: _s,
					fetched: hs,
					pending: gs
				}),
				js = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const vs = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ts = (e = vs, t) => {
				switch (t.type) {
					case is.P:
					case js.h:
					case js.k:
					case js.b:
					case js.d:
					case is.w:
					case is.c:
					case is.d:
					case is.e:
					case is.f:
					case is.i:
					case is.j:
					case is.n:
					case is.O:
					case is.E:
						return vs;
					case is.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? vs : e
					}
					case is.o: {
						const e = t.payload;
						return {
							...vs,
							apiError: e
						}
					}
					case is.cb: {
						const e = t.payload;
						return {
							...vs,
							validationError: e
						}
					}
					case is.K:
					case is.J: {
						const e = t.payload;
						return {
							...vs,
							submitValidationError: e
						}
					}
					case is.a:
						return {
							...vs, needsCaptcha: !0
						};
					case is.y:
						return {
							...vs, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Ds = (e = !1, t) => {
					switch (t.type) {
						case is.w:
							return !0;
						case is.P:
						case js.h:
						case is.o:
						case is.cb:
						case is.J:
						case is.K:
						case is.y:
						case is.a:
							return !1;
						default:
							return e
					}
				},
				ws = Object(j.c)({
					error: Ts,
					pending: Ds
				});
			var Ps = (e = null, t) => {
				switch (t.type) {
					case is.x:
					case is.H:
						return null;
					case is.m:
						return t.payload;
					default:
						return e
				}
			};
			var As = (e = !1, t) => {
					switch (t.type) {
						case is.x:
							return !0;
						case is.m:
						case is.l:
							return !1;
						default:
							return e
					}
				},
				Cs = Object(j.c)({
					error: Ps,
					pending: As
				}),
				Rs = Object(j.c)({
					submit: ws,
					update: Cs
				});
			var Ns = (e = null, t) => {
				switch (t.type) {
					case is.O:
					case is.M:
					case is.N:
						return null;
					default:
						return e
				}
			};
			var Ls = (e = !1, t) => {
					switch (t.type) {
						case is.N:
							return !0;
						case is.M:
						case is.O:
							return !1;
						default:
							return e
					}
				},
				ks = Object(j.c)({
					error: Ns,
					pending: Ls
				}),
				xs = Object(j.c)({
					change: ks
				}),
				Us = Object(j.c)({
					collection: $r,
					draft: ds,
					editor: ys,
					page: Ss,
					post: Rs,
					subreddit: xs
				}),
				Ms = r("./node_modules/lodash/omit.js"),
				Fs = r.n(Ms),
				Gs = r("./src/reddit/actions/pages/postDraft.ts");
			const Bs = {};
			var qs = (e = Bs, t) => {
				switch (t.type) {
					case Yr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Bs
					}
					case Yr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Fs()(r, s)
					}
					case is.P: {
						const {
							draftId: r
						} = t.payload;
						return r ? Fs()(e, r) : e
					}
					case Gs.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Vs = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Hs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Ws = r("./src/reddit/models/PostDraft/index.ts");
			var Qs = (e = "", t) => {
					switch (t.type) {
						case is.d:
							return t.payload || "";
						case is.E:
							return "";
						case u.b: {
							if (Vs(t) !== Ce.Mb.POST_CREATION) return "";
							const r = Hs(t);
							return r && r.url ? r.url || "" : e
						}
						case Yr.g: {
							const e = t.payload;
							return e.kind === Ws.b.Link && e.body || ""
						}
						case js.b:
						case js.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Ks = r("./src/reddit/models/PostCreationForm/index.ts"),
				$s = r("./src/reddit/models/ScheduledPost/index.ts");
			var Ys = (e = "", t) => {
				switch (t.type) {
					case is.e:
						return t.payload || "";
					case is.E:
					case is.I:
						return "";
					case is.Q:
						return t.payload.editorMode === Ks.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (Vs(t) !== Ce.Mb.POST_CREATION) return "";
						const r = Hs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Yr.g: {
						const e = t.payload;
						return e.kind === Ws.b.Markdown && e.body || ""
					}
					case js.b:
					case js.n: {
						const e = t.payload;
						return e.contentType === $s.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const zs = {
				items: [],
				selectedKey: null
			};
			var Xs = (e = zs, t) => {
					switch (t.type) {
						case is.f:
							return t.payload || zs;
						case is.E:
							return zs;
						case u.b:
							return Vs(t) !== Ce.Mb.POST_CREATION ? zs : e;
						case Yr.g:
							return zs;
						case js.b:
						case js.n:
							return zs;
						default:
							return e
					}
				},
				Js = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Zs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				en = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const tn = Js.a.createInitial;
			var rn = (e = tn(), t) => {
					switch (t.type) {
						case is.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case is.E:
							return Js.a.createInitial();
						case is.Q: {
							const r = t.payload;
							return r.editorMode === Ks.i.RICH_TEXT && r.editorKey === Ks.h.POST_CREATION ? Js.a.createInitial(r.content) : e
						}
						case u.b:
							return Vs(t) !== Ce.Mb.POST_CREATION ? Js.a.createInitial() : e;
						case Yr.g: {
							const e = t.payload;
							return e.kind === Ws.b.RichText ? Js.a.createInitial(e.body) : Js.a.createInitial()
						}
						case js.b:
						case js.n: {
							const e = t.payload,
								r = Object(Zs.c)(e.mediaAssets);
							return Js.a.createInitial(e.contentType === $s.a.RTJSON ? Object(en.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				sn = Object(j.c)({
					link: Qs,
					markdown: Ys,
					media: Xs,
					rte: rn
				});
			var nn = (e = null, t) => {
					switch (t.type) {
						case is.b:
							return t.payload || null;
						case is.E:
						case Yr.g:
						case js.b:
						case js.n:
						case is.O:
							return null;
						case u.b:
							return Vs(t) === Ce.Mb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				an = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var cn = (e = null, t) => {
				switch (t.type) {
					case is.c:
						return t.payload || null;
					case js.b:
					case js.n: {
						const e = t.payload;
						return Object(an.n)({
							scheduledPost: e
						}) || null
					}
					case is.E:
						return null;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION ? e : null;
					case Yr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var on = (e = null, t) => {
				switch (t.type) {
					case is.q:
						return t.payload.type || null;
					case js.b:
					case js.n:
					case is.i:
					case is.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case is.S:
						return t.payload || !1;
					case js.b:
					case js.n:
						return "CHAT" === t.payload.discussionType;
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case Yr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case is.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case js.b:
					case js.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var ln = (e = !1, t) => {
				switch (t.type) {
					case is.U:
						return t.payload || !1;
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case Yr.g:
						return t.payload.isNSFW || !1;
					case js.b:
					case js.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var pn = (e = !1, t) => {
				switch (t.type) {
					case is.V:
						return t.payload || !1;
					case is.E:
						return !1;
					case is.O: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case Yr.g:
						return t.payload.isOriginalContent || !1;
					case js.b:
					case js.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var bn = (e = !1, t) => {
				switch (t.type) {
					case is.W:
						return t.payload || !1;
					case js.b:
					case js.n:
						return !!t.payload.poll;
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					default:
						return e
				}
			};
			var fn = (e = !1, t) => {
				switch (t.type) {
					case is.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case js.b:
					case js.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var mn = (e = !1, t) => {
				switch (t.type) {
					case js.b:
					case js.n:
					case is.E:
						return !1;
					case Yr.n:
						return t.payload;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case Yr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var yn = (e = !1, t) => {
				switch (t.type) {
					case is.X:
						return t.payload || !1;
					case is.E:
						return !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case Yr.g:
						return t.payload.isSpoiler || !1;
					case js.b:
					case js.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var On = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case is.i:
					case is.q:
					case is.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var _n = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case is.i:
					case is.q:
					case is.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var En = (e = null, t) => {
					switch (t.type) {
						case is.N:
						case is.O:
							return t.payload;
						case is.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				hn = r("./src/reddit/actions/polls.ts");
			var In = (e = null, t) => {
					switch (t.type) {
						case hn.a:
							return {
								...t.payload
							};
						case js.b:
						case js.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case is.E:
							return null;
						case u.b:
							return Vs(t) !== Ce.Mb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				gn = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				Sn = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var jn = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case is.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case is.E:
					case Yr.g:
					case is.O:
						return null;
					case u.b:
						if (Vs(t) === Ce.Mb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object($s.m)(c)) {
								const t = Object(gn.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...gn.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(gn.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case js.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case js.b: {
						const e = t.payload;
						return {
							...Object(Sn.h)(e)
						}
					}
					default:
						return e
				}
			};
			var vn = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case is.Y:
						return s || !1;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case js.b:
					case js.n:
					case Yr.g:
						return !1;
					default:
						return e
				}
			};
			var Tn = (e = "", t) => {
				switch (t.type) {
					case is.g:
						return t.payload || "";
					case u.b:
						return Vs(t) !== Ce.Mb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Dn = (e = null, t) => {
				switch (t.type) {
					case u.b:
						return Vs(t) !== Ce.Mb.POST_CREATION ? null : e;
					case is.E:
						return null;
					case js.b:
					case js.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var wn = (e = !0, t) => {
				switch (t.type) {
					case is.E:
						return !0;
					case is.Z:
						return t.payload;
					case u.b:
						return Vs(t) !== Ce.Mb.POST_CREATION || e;
					case Yr.g:
						return t.payload.sendReplies;
					case js.b:
					case js.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Pn = (e = null, t) => {
				switch (t.type) {
					case is.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case is.E:
					case Yr.g:
					case is.O:
						return null;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION ? e : null;
					case js.b:
					case js.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const An = Ce.Vb.POST;
			var Cn = (e = An, t) => {
				switch (t.type) {
					case is.E:
						return An;
					case is.r:
						return Ce.Vb.CROSSPOST;
					case is.i:
						return t.payload.submissionType || An;
					case u.b: {
						if (Vs(t) !== Ce.Mb.POST_CREATION) return An;
						const r = Hs(t);
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
					case Yr.g: {
						const e = t.payload;
						return Ws.a[e.kind]
					}
					case js.b:
					case js.n: {
						const e = t.payload;
						return e.poll ? Ce.Vb.POLL : e.url ? Ce.Vb.LINK_ONLY : Ce.Vb.POST
					}
					default:
						return e
				}
			};
			var Rn = (e = null, t) => {
					switch (t.type) {
						case is.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case is.E:
						case Yr.g:
						case is.O:
							return null;
						case u.b:
							return Vs(t) === Ce.Mb.POST_CREATION ? e : null;
						case js.b:
						case js.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Nn = r("./src/reddit/models/Poll/index.ts");
			const Ln = e => `Should ${e||"username"} become the top moderator?`,
				kn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var xn = (e = "", t) => {
				switch (t.type) {
					case is.r:
						return t.payload.postTitle || "";
					case is.j:
						return t.payload || "";
					case is.D: {
						const {
							title: r
						} = t.payload;
						return e || (r || "")
					}
					case is.E:
						return "";
					case u.b: {
						if (Vs(t) !== Ce.Mb.POST_CREATION) return "";
						const r = Hs(t);
						return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
					}
					case Yr.g:
						return t.payload.title;
					case is.q: {
						const {
							oldType: r,
							type: s
						} = t.payload;
						return s === Nn.a.ReplaceTopMod ? Ln("") : s === Nn.a.Spinoff ? kn("") : r === Nn.a.ReplaceTopMod || r === Nn.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return Ln(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return kn(e)
					}
					case is.i: {
						const {
							extra: r
						} = t.payload;
						return !r || r.govType !== Nn.a.ReplaceTopMod && r.govType !== Nn.a.Spinoff ? e : ""
					}
					case js.b:
					case js.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Un = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Mn = (e = Un, t) => {
					switch (t.type) {
						case is.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Fn = Object(j.c)({
					body: sn,
					eventSchedule: nn,
					flair: cn,
					govType: on,
					isChatPost: dn,
					isContestMode: un,
					isNSFW: ln,
					isOC: pn,
					isPostAsMetaMod: fn,
					isPoll: bn,
					isPublicLink: mn,
					isSpoiler: yn,
					newSubreddit: On,
					newTopMod: _n,
					nextSubreddit: En,
					polls: In,
					postSchedule: jn,
					postToTwitter: vn,
					recaptcha: Tn,
					scheduledPostId: Dn,
					sendReplies: wn,
					stickyPosition: Pn,
					submissionType: Cn,
					suggestedSort: Rn,
					title: xn,
					tournament: Mn
				});
			var Gn = (e = null, t) => {
				switch (t.type) {
					case u.b: {
						if (Vs(t) !== Ce.Mb.POST_CREATION) return null;
						const r = Hs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Ks.i.MARKDOWN : e
					}
					case is.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case is.I:
						return null;
					case is.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case js.b:
					case js.n:
						return t.payload.contentType === $s.a.RTJSON ? Ks.i.RICH_TEXT : Ks.i.MARKDOWN;
					default:
						return e
				}
			};
			const Bn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var qn = (e = Bn, t) => {
				switch (t.type) {
					case is.c:
					case is.d:
					case is.e:
						return e[Ce.wb.BODY] ? {
							...e,
							[Ce.wb.BODY]: []
						} : e;
					case is.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Ce.wb.BODY] && r ? {
							...e,
							[Ce.wb.BODY]: []
						} : e
					}
					case is.j:
						return e[Ce.wb.TITLE] ? {
							...e,
							[Ce.wb.TITLE]: []
						} : e;
					case is.L: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case is.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : Bn
					}
					case is.K:
					case is.J:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Ks.w)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.b:
						return Vs(t) !== Ce.Mb.POST_CREATION ? Bn : e;
					default:
						return e
				}
			};
			var Vn = (e = !1, t) => {
				switch (t.type) {
					case is.b:
					case is.c:
					case is.d:
					case is.e:
					case is.f:
					case is.j:
					case is.i:
					case is.U:
					case is.V:
					case is.X:
					case Yr.n:
					case is.Z:
					case is.ab:
						return !0;
					case is.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case is.P:
					case js.h:
						return !1;
					case is.R:
						return t.payload;
					case u.b:
						return Vs(t) === Ce.Mb.POST_CREATION && e;
					case is.E:
					case Yr.l:
					case Yr.g:
						return !1;
					default:
						return e
				}
			};
			const Hn = Ks.r.Post;
			var Wn = (e = Hn, t) => {
					switch (t.type) {
						case is.w:
							return Ks.r.Post;
						case is.F:
							return t.payload;
						case Yr.j:
							return Ks.r.Draft;
						case u.b:
							return Vs(t) !== Ce.Mb.POST_CREATION ? Hn : e;
						default:
							return e
					}
				},
				Qn = Object(j.c)({
					editorMode: Gn,
					fieldValidation: qn,
					isChanged: Vn,
					submitMode: Wn
				});
			var Kn = (e = "", t) => {
				switch (t.type) {
					case is.H:
						return t.payload.editorMode === Ks.i.MARKDOWN ? t.payload.postContent || "" : e;
					case is.I:
						return "";
					case is.Q:
						return t.payload.editorMode === Ks.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const $n = Js.a.createInitial;
			var Yn = (e = $n(), t) => {
					switch (t.type) {
						case is.I:
							return Js.a.createInitial();
						case is.H: {
							const r = t.payload;
							return r.editorMode === Ks.i.RICH_TEXT && "object" == typeof r.postContent ? Js.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case is.Q: {
							const r = t.payload;
							return r.editorMode === Ks.i.RICH_TEXT && r.editorKey === Ks.h.POST_EDITING ? Js.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				zn = Object(j.c)({
					markdown: Kn,
					rte: Yn
				});
			var Xn = (e = null, t) => {
					switch (t.type) {
						case is.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case is.I:
							return null;
						default:
							return e
					}
				},
				Jn = Object(j.c)({
					draft: zn,
					postId: Xn
				});
			var Zn = (e = !1, t) => {
				switch (t.type) {
					case is.C:
					case is.B:
						return !1;
					case is.z:
						return !0;
					default:
						return e
				}
			};
			var ea = (e = !1, t) => {
					switch (t.type) {
						case is.z:
						case is.B:
							return !1;
						case is.C:
							return !0;
						default:
							return e
					}
				},
				ta = Object(j.c)({
					error: Zn,
					pending: ea
				});
			var ra = (e = !1, t) => {
				switch (t.type) {
					case is.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case is.j:
					case is.d:
					case is.e:
					case is.i:
					case is.r:
					case Yr.g:
						return !0;
					case is.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					default:
						return e
				}
			};
			const sa = {};
			var na = (e = sa, t) => {
				switch (t.type) {
					case is.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const aa = [];
			var ca = (e = aa, t) => {
					switch (t.type) {
						case is.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oa = Object(j.c)({
					api: ta,
					isInputChanged: ra,
					model: na,
					order: ca
				}),
				da = Object(j.c)({
					api: Us,
					drafts: qs,
					formData: Fn,
					formState: Qn,
					postEditing: Jn,
					subredditRec: oa
				}),
				ia = r("./src/reddit/actions/dashboard/constants.ts");
			const ua = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var la = (e = ua, t) => {
				switch (t.type) {
					case ia.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ia.d: {
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
					case ia.c: {
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
			var pa = (e = null, t) => {
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
			var ba = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var fa = (e = !1, t) => {
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
				ma = Object(j.c)({
					error: pa,
					loaded: ba,
					pending: fa
				}),
				ya = Object(j.c)({
					list: ma
				}),
				Oa = r("./node_modules/lodash/isEmpty.js"),
				_a = r.n(Oa);
			const Ea = {};
			var ha = (e = Ea, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return _a()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Ia = r("./node_modules/lodash/forOwn.js"),
				ga = r.n(Ia),
				Sa = r("./src/reddit/helpers/name/index.ts");
			const ja = {};
			var va = (e = ja, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (_a()(r)) return e;
							const s = {};
							return ga()(r, e => {
								s[Object(Sa.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Ta = Object(j.c)({
					api: ya,
					models: ha,
					nameToId: va
				}),
				Da = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const wa = [];
			var Pa = (e = wa, t) => {
					switch (t.type) {
						case Da.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				Aa = r("./src/reddit/actions/economics/banners/constants.ts");
			const Ca = {
				dismissedBanners: {}
			};
			var Ra = (e = Ca, t) => {
					switch (t.type) {
						case Aa.c: {
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
						case Aa.d: {
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
						case Aa.a:
						case Aa.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === Aa.a;
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
				Na = r("./src/reddit/models/Badge/managementPage.ts");
			const La = {
				badgeType: Na.a.Cosmetic,
				view: Na.c.Gallery
			};
			var ka = (e = La, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(Na.d)(r.placement) : e.badgeType,
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
						return La;
					default:
						return e
				}
			};
			var xa = (e = null, t) => {
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
				Ua = r("./src/reddit/actions/economics/powerups/constants.ts");

			function Ma(e, t) {
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

			function Fa(e) {
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
						emotes: n.map(e => Ma(e, t))
					}
				}), r
			}
			const Ga = {};
			var Ba = (e = Ga, t) => {
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
					case Ua.b: {
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
										[r.name]: Ma(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const qa = {};
			var Va = (e = qa, t) => {
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
				Ha = r("./src/reddit/actions/economics/me/constants.ts");
			const Wa = {
				fetched: !1,
				data: {}
			};
			var Qa = (e = Wa, t) => {
					switch (t.type) {
						case Ha.a:
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
				Ka = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const $a = {
				fetched: !1,
				data: null
			};
			var Ya = (e = $a, t) => {
					switch (t.type) {
						case Ha.b:
							return {
								fetched: !0, data: e.data
							};
						case Ha.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				za = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Xa = Object(j.c)({
					banners: Ra,
					currentBadgeManagementScreen: ka,
					currentModalArgs: xa,
					emotes: Ba,
					gifs: Va,
					me: Qa,
					paymentSystems: Ka.b,
					pointsCopy: Ya,
					subredditPremium: za.b
				}),
				Ja = r("./src/reddit/actions/emoji.ts");
			const Za = {};
			var ec = (e = Za, t) => {
					switch (t.type) {
						case Ja.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ja.g:
						case Ja.f: {
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
				tc = Object(j.c)({
					pending: ec
				}),
				rc = Object(j.c)({
					list: tc
				});
			const sc = {};
			var nc = (e = sc, t) => {
					switch (t.type) {
						case Ja.f:
						case Ja.c:
							return e;
						case Ja.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Ja.d: {
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
						case Ja.i: {
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
						case Ja.e: {
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
				ac = Object(j.c)({
					api: rc,
					models: nc
				}),
				cc = r("./src/reddit/actions/experiments.ts");
			const oc = /^experiment_(.*)$/i,
				dc = e => {
					const t = e.match(oc);
					if (null !== t) return t[1]
				},
				ic = {};
			var uc = (e = ic, t) => {
					switch (t.type) {
						case u.b: {
							const r = Hs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = dc(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return _a()(s) ? e : {
								...e,
								...s
							}
						}
						case cc.b: {
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
				lc = r("./src/reddit/actions/externalAccount.ts");
			const pc = {};
			var bc = (e = pc, t) => {
				switch (t.type) {
					case lc.e:
					case lc.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case lc.d: {
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
			var mc = (e = fc, t) => {
					switch (t.type) {
						case lc.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case lc.f:
						case lc.d: {
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
				yc = Object(j.c)({
					error: bc,
					pending: mc
				});
			const Oc = {};
			var _c = (e = Oc, t) => {
				switch (t.type) {
					case lc.l:
					case lc.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case lc.j: {
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
			const Ec = {};
			var hc = (e = Ec, t) => {
					switch (t.type) {
						case lc.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case lc.c:
						case lc.a: {
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
				Ic = Object(j.c)({
					error: _c,
					pending: hc
				});
			const gc = {};
			var Sc = (e = gc, t) => {
				switch (t.type) {
					case lc.i:
					case lc.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case lc.g: {
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
			const jc = {};
			var vc = (e = jc, t) => {
				switch (t.type) {
					case lc.h: {
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
			const Tc = {};
			var Dc = (e = Tc, t) => {
					switch (t.type) {
						case lc.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case lc.h:
						case lc.g: {
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
				wc = Object(j.c)({
					error: Sc,
					fetched: vc,
					pending: Dc
				});
			const Pc = {};
			var Ac = (e = Pc, t) => {
				switch (t.type) {
					case lc.l:
					case lc.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case lc.j: {
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
			const Cc = {};
			var Rc = (e = Cc, t) => {
					switch (t.type) {
						case lc.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case lc.k:
						case lc.j: {
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
				Nc = Object(j.c)({
					error: Ac,
					pending: Rc
				}),
				Lc = Object(j.c)({
					connect: yc,
					disconnect: Ic,
					user: Nc,
					subreddit: wc
				});
			const kc = {};
			var xc = (e = kc, t) => {
				switch (t.type) {
					case lc.h: {
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
			const Uc = {};
			var Mc = (e = Uc, t) => {
					switch (t.type) {
						case lc.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case lc.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Fs()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Fc = Object(j.c)({
					api: Lc,
					user: Mc,
					subreddit: xc
				}),
				Gc = r("./src/reddit/featureFlags/index.ts");
			const Bc = new Set(["0", "disabled", "false", "off", ""]);
			var qc = e => !Bc.has(e.toLowerCase());
			const Vc = Gc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Hc = Gc.a.reduce((e, t) => (e[t] = null, e), {});
			var Wc = (e = Hc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Hs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Gc.g)(e);
									if (s) {
										const n = Vc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || qc(s);
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
						case Gc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Gc.c: {
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
				Qc = Object(j.c)({
					overrides: Wc
				}),
				Kc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const $c = {
				focusedVerticalGqlError: null
			};
			var Yc = (e = $c, t) => {
				switch (t.type) {
					case Kc.h:
					case Kc.g:
					case Kc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Kc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const zc = {
				focusedVerticalGqlPending: !1
			};
			var Xc = (e = zc, t) => {
					switch (t.type) {
						case Kc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Kc.e:
						case Kc.g:
						case Kc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Jc = Object(j.c)({
					error: Yc,
					pending: Xc
				});
			var Zc = (e = "", t) => {
				switch (t.type) {
					case Kc.g:
					case Kc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const eo = {
				dismissed: !0
			};
			var to = (e = eo, t) => {
				switch (t.type) {
					case Kc.j:
						return {
							dismissed: !1
						};
					case Kc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var ro = (e = null, t) => {
				switch (t.type) {
					case Kc.g:
					case Kc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var so = (e = null, t) => {
				switch (t.type) {
					case Kc.g:
					case Kc.c:
					case Kc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var no = (e = null, t) => {
					switch (t.type) {
						case Kc.g:
						case Kc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				ao = Object(j.c)({
					api: Jc,
					components: to,
					interactedSubredditIds: ro,
					recommendedSubredditIds: no,
					category: Zc,
					lastLoadedEnv: so
				});
			Object(Ae.a)("FONTS_FONT_FILES_PARSED");
			const co = [];
			var oo = (e = co, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var io = (e = null, t) => {
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
			var uo = (e = !1, t) => {
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
			var lo = (e = !1, t) => {
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
				po = Object(j.c)({
					error: io,
					pending: uo,
					showLoader: lo
				});
			var bo = (e = null, t) => {
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
			var fo = (e = null, t) => {
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
			var mo = (e = null, t) => {
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
			var yo = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var Oo = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var _o = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const Eo = he.n;
			var ho = (e = Eo, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || Eo
						}
						default:
							return e
					}
				},
				Io = Object(j.c)({
					api: po,
					correlationId: bo,
					gildModalThingId: mo,
					isAnonymous: yo,
					isIframed: Oo,
					message: _o,
					gildedThing: fo,
					selectedAward: ho
				});
			var go = (e = null, t) => {
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
			var So = (e = !1, t) => {
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
				jo = Object(j.c)({
					error: go,
					pending: So
				});
			var vo = (e = "", t) => {
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
				To = Object(j.c)({
					api: jo,
					givePremiumModalAccountName: vo
				}),
				Do = r("./src/reddit/actions/header.ts"),
				wo = r("./src/reddit/actions/overlayEvents.ts");
			var Po = (e = !1, t) => {
					switch (t.type) {
						case Do.a:
							return !1;
						case Do.b:
							return !0;
						case Do.c:
							return !e;
						case wo.b:
							return !1;
						default:
							return e
					}
				},
				Ao = Object(j.c)({
					isSubscriptionsDropdownOpen: Po
				});
			var Co = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				Ro = r("./src/reddit/actions/imageUploads.ts");
			const No = {};
			var Lo = (e = No, t) => {
					switch (t.type) {
						case Ro.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case Ro.c:
						case Ro.e:
						case Ro.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case Ro.a: {
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
				ko = r("./src/reddit/actions/interceptedAction.ts");
			var xo = (e = null, t) => {
					switch (t.type) {
						case ko.a:
							return t.payload;
						case ko.b:
							return null;
						default:
							return e
					}
				},
				Uo = r("./src/reddit/actions/changeUsername.ts");
			var Mo = (e = !0, t) => {
					switch (t.type) {
						case Uo.a:
							return !1;
						case Uo.b:
							return !0;
						default:
							return e
					}
				},
				Fo = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var Go = (e = !1, t) => {
					switch (t.type) {
						case Fo.a:
							return !e;
						default:
							return e
					}
				},
				Bo = r("./src/reddit/actions/moderatingSubreddits.ts");
			var qo = (e = !1, t) => {
					switch (t.type) {
						case Bo.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case De.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case F.i:
						case F.f:
						case F.m:
						case F.p:
						case F.v: {
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
				Vo = r("./src/reddit/actions/jsApi.ts");
			const Ho = [];
			var Wo = (e = Ho, t) => {
					switch (t.type) {
						case Vo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Qo = r("./src/reddit/actions/leaderboard/constants.ts");
			const Ko = {};
			var $o = (e = Ko, t) => {
				switch (t.type) {
					case Qo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Qo.b:
					case Qo.c: {
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
			const Yo = {};
			var zo = (e = Yo, t) => {
					switch (t.type) {
						case Qo.a:
						case Qo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case Qo.b: {
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
				Xo = Object(j.c)({
					error: $o,
					pending: zo
				});
			const Jo = {};
			var Zo = (e = Jo, t) => {
					switch (t.type) {
						case Qo.c: {
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
				ed = Object(j.c)({
					api: Xo,
					models: Zo
				});
			var td = (e = "", t) => {
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
			const rd = {};
			var sd = (e = rd, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.ac.Users) ? e : {
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
						return -1 === a.indexOf(Ce.ac.Users) || n && n.authors ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const nd = {};
			var ad = (e = nd, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.ac.Users) ? e : {
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
							return -1 === s.indexOf(Ce.ac.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				cd = Object(j.c)({
					error: sd,
					pending: ad
				});
			const od = {};
			var dd = (e = od, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.ac.Users)) return e;
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
			const id = {};
			var ud = (e = id, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							authorOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Ce.ac.Users) && e[r] ? {
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
						return -1 === n.indexOf(Ce.ac.Users) ? e : {
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
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.ac.Users) ? e : s.authors ? {
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
				bd = Object(j.c)({
					api: cd,
					identifiers: ud,
					fetchedTokens: dd,
					loadMore: pd
				});
			const fd = {};
			var md = (e = fd, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.ac.Subreddits) ? e : {
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
						return -1 === a.indexOf(Ce.ac.Subreddits) || n && n.communities ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const yd = {};
			var Od = (e = yd, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.ac.Subreddits) ? e : {
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
							return -1 === s.indexOf(Ce.ac.Subreddits) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				_d = Object(j.c)({
					error: md,
					pending: Od
				});
			const Ed = {};
			var hd = (e = Ed, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.ac.Subreddits)) return e;
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
			const Id = {};
			var gd = (e = Id, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							communityOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Ce.ac.Subreddits) && e[r] ? {
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
						return -1 === n.indexOf(Ce.ac.Subreddits) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Sd = {};
			var jd = (e = Sd, t) => {
					switch (t.type) {
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.ac.Subreddits) ? e : s.communities ? {
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
				vd = Object(j.c)({
					api: _d,
					identifiers: gd,
					fetchedTokens: hd,
					loadMore: jd
				});
			const Td = {};
			var Dd = (e = Td, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.ac.Subreddits) && -1 === s.indexOf(Ce.ac.Users) ? e : {
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
						return -1 === n.indexOf(Ce.ac.Subreddits) && -1 === n.indexOf(Ce.ac.Users) ? e : {
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
			const wd = {};
			var Pd = (e = wd, t) => {
					switch (t.type) {
						case Re.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.ac.Subreddits) && -1 === s.indexOf(Ce.ac.Users) ? e : {
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
							return -1 === s.indexOf(Ce.ac.Subreddits) && -1 === s.indexOf(Ce.ac.Users) ? e : {
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
				Ad = Object(j.c)({
					error: Dd,
					pending: Pd
				});
			const Cd = {};
			var Rd = (e = Cd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Ce.ac.Subreddits) && -1 === n.indexOf(Ce.ac.Users)) return e;
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
			const Nd = {};
			var Ld = (e = Nd, t) => {
				switch (t.type) {
					case Re.g: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Ce.ac.Subreddits) && -1 === n.indexOf(Ce.ac.Users) ? e : {
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
						return -1 === n.indexOf(Ce.ac.Subreddits) && -1 === n.indexOf(Ce.ac.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const kd = {};
			var xd = (e = kd, t) => {
					switch (t.type) {
						case Re.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Ce.ac.Subreddits) && -1 === n.indexOf(Ce.ac.Users) ? e : s.listings ? {
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
				Ud = Object(j.c)({
					api: Ad,
					identifiers: Ld,
					fetchedTokens: Rd,
					loadMore: xd
				}),
				Md = r("./src/reddit/actions/eventPosts/constants.ts"),
				Fd = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Gd = r("./src/reddit/actions/pages/topic.ts");
			const Bd = {};
			var qd = (e = Bd, t) => {
					switch (t.type) {
						case ge.c:
						case ge.b:
						case Te.c:
						case Te.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case ve.e:
						case ve.f:
						case ve.i:
						case ve.h:
						case je.s:
						case je.r:
						case Fd.b:
						case Fd.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case we.f:
						case we.e:
						case K.j:
						case Gd.TOPIC_DATA_PENDING:
						case Gd.TOPIC_DATA_LOADED:
						case Gd.MORE_POSTS_PENDING:
						case Gd.MORE_POSTS_LOADED:
						case K.i:
						case Md.e:
						case Md.c:
						case Md.d: {
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
							return -1 === s.indexOf(Ce.ac.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case ge.a:
						case Te.a:
						case W.SUBREDDIT_FAILED:
						case ge.e:
						case ve.g:
						case je.q:
						case Fd.a:
						case K.h:
						case Q.d:
						case we.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case Gd.TOPIC_DATA_FAILED:
						case Gd.MORE_POSTS_FAILED:
						case Md.b: {
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
							return -1 === a.indexOf(Ce.ac.Posts) || n && n.posts ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Vd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				Hd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				Wd = r("./src/reddit/actions/subreddit/constants.ts");
			const Qd = {};
			var Kd = (e = Qd, t) => {
					switch (t.type) {
						case ge.c:
						case Te.c:
						case q.PROFILE_POSTS_PENDING:
						case we.f:
						case W.SUBREDDIT_PENDING:
						case ge.g:
						case ve.f:
						case ve.i:
						case je.s:
						case Fd.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case K.j:
						case Gd.MORE_POSTS_PENDING:
						case Md.e: {
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
							return -1 === s.indexOf(Ce.ac.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case ge.b:
						case ge.a:
						case Te.a:
						case Te.b:
						case we.d:
						case we.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case Vd.b:
						case Vd.c:
						case ve.e:
						case ve.d:
						case ve.h:
						case ve.g:
						case je.r:
						case je.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case Hd.a:
						case Hd.b:
						case Wd.j:
						case Fd.b:
						case Fd.a:
						case K.i:
						case K.h:
						case Gd.MORE_POSTS_LOADED:
						case Gd.MORE_POSTS_FAILED:
						case Md.c:
						case Md.b:
						case Md.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case Wd.r: {
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
							return -1 === s.indexOf(Ce.ac.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				$d = Object(j.c)({
					error: qd,
					pending: Kd
				});
			const Yd = {};
			var zd = (e = Yd, t) => {
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
				Xd = r("./src/reddit/actions/postList.ts"),
				Jd = r("./node_modules/lodash/omitBy.js"),
				Zd = r.n(Jd);

			function ei(e, t) {
				return t = t.toLowerCase(), Zd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ti = {};
			var ri = (e = ti, t) => {
				switch (t.type) {
					case Xd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Xd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Fs()(e, [r]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return ei(e, t.payload);
					default:
						return e
				}
			};
			const si = {};
			var ni = (e = si, t) => {
					switch (t.type) {
						case ve.e:
						case ge.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case Gd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case ge.f:
						case ve.h:
						case je.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case K.i:
						case Gd.MORE_POSTS_LOADED: {
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
							if (n.indexOf(Ce.ac.Posts) > -1) {
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
							return ei(e, t.payload);
						default:
							return e
					}
				},
				ai = r("./src/reddit/actions/post.ts");
			const ci = {};
			var oi = (e = ci, t) => {
					switch (t.type) {
						case ge.c:
						case ve.f:
						case Te.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case we.f:
						case q.PROFILE_POSTS_PENDING:
						case Gd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Vd.c:
						case ve.e:
						case Hd.b:
						case ge.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case Wd.j:
						case Fd.b:
						case we.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Gd.TOPIC_DATA_LOADED:
						case Md.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Wd.r: {
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
						case ve.h:
						case je.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case K.i:
						case Gd.MORE_POSTS_LOADED:
						case Md.d: {
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
							return -1 === n.indexOf(Ce.ac.Posts) ? e : {
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
							return -1 === n.indexOf(Ce.ac.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case ai.o: {
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
							return ei(e, t.payload);
						default:
							return e
					}
				},
				di = r("./src/lib/makeListingKey/index.ts");
			const ii = {};
			var ui = (e = ii, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(di.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case kr.a:
					case kr.q: {
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
			const li = {};
			var pi = (e = li, t) => {
				switch (t.type) {
					case ge.b:
					case Te.b:
					case W.SUBREDDIT_LOADED:
					case we.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case ve.e:
					case ve.h:
					case je.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case K.i:
					case Gd.TOPIC_DATA_LOADED:
					case Gd.MORE_POSTS_LOADED: {
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
						return -1 === n.indexOf(Ce.ac.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(xt.a)(e, r)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return ei(e, t.payload);
					default:
						return e
				}
			};
			const bi = {};
			var fi = (e = bi, t) => {
					switch (t.type) {
						case Md.c:
						case Md.d: {
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
				mi = Object(j.c)({
					api: $d,
					correlationIds: zd,
					endMarkers: ri,
					fetchedTokens: ni,
					ids: oi,
					listingSort: ui,
					loadMore: pi,
					pageInfo: fi
				}),
				yi = Object(j.c)({
					activeKey: td,
					authorOrder: bd,
					communityOrder: vd,
					listingOrder: Ud,
					postOrder: mi
				});
			var Oi = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return _a()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var _i = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return _a()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Ei = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var hi = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ii = Object(j.c)({
					announcements: Oi,
					featured: _i,
					isFrontpageLoaded: Ei,
					shouldShowAnnouncements: hi
				}),
				gi = r("./src/reddit/actions/media.ts");
			const Si = {},
				ji = {};
			var vi = (e = ji, t) => {
				switch (t.type) {
					case gi.b: {
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
			const Ti = {};
			var Di = (e = Ti, t) => {
					switch (t.type) {
						case gi.e: {
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
				wi = Object(j.c)({
					currentSlideIndex: vi,
					isGalleryTileLayout: Di
				});
			var Pi = (e = !0, t) => {
				switch (t.type) {
					case gi.c:
						return t.payload;
					default:
						return e
				}
			};
			var Ai = (e = .5, t) => {
					switch (t.type) {
						case gi.d:
							return t.payload;
						default:
							return e
					}
				},
				Ci = Object(j.c)({
					isMuted: Pi,
					volume: Ai
				}),
				Ri = r("./src/reddit/actions/meta.ts");
			const Ni = {
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
			var Li = (e = Ni, t) => {
					switch (t.type) {
						case Ri.b:
							return t.payload;
						case Ri.a:
							return {
								...e, ...t.payload
							};
						case Ri.e:
							return {
								...e, locale: t.payload
							};
						case Ri.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Ri.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Ri.d:
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
				ki = r("./src/reddit/actions/subredditModeration/constants.ts");
			const xi = {};
			var Ui = (e = xi, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case De.PAGE_LOADED: {
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
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
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
					case K.f:
					case ve.e:
					case F.k: {
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
					case ki.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(xt.a)(e, r)
					}
					case ki.S: {
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
			var Mi = (e = null, t) => {
				switch (t.type) {
					case ve.b:
					case ve.k:
						return null;
					case ve.a:
					case ve.j:
						return t.payload;
					default:
						return e
				}
			};
			var Fi = (e = !1, t) => {
					switch (t.type) {
						case ve.b:
						case ve.k:
							return !0;
						case ve.c:
						case ve.a:
						case ve.l:
						case ve.j:
							return !1;
						default:
							return e
					}
				},
				Gi = Object(j.c)({
					error: Mi,
					pending: Fi
				});
			const Bi = [];
			var qi = (e = Bi, t) => {
					switch (t.type) {
						case ve.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case ve.j: {
							const r = t.payload;
							return [...e, r]
						}
						case ve.k:
						case ve.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				Vi = Object(j.c)({
					api: Gi,
					names: qi
				}),
				Hi = Object(j.c)({
					filteredSubreddits: Vi
				}),
				Wi = r("./src/reddit/actions/modMode.ts");
			var Qi = (e = !0, t) => {
				switch (t.type) {
					case Wi.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const Ki = {};
			var $i = (e = Ki, t) => {
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
			const Yi = {};
			var zi = (e = Yi, t) => {
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
				Xi = Object(j.c)({
					error: $i,
					pending: zi
				});
			const Ji = {};
			var Zi = (e = Ji, t) => {
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
				eu = Object(j.c)({
					api: Xi,
					models: Zi
				});
			var tu = (e = null, t) => {
				switch (t.type) {
					case je.b:
					case je.c:
						return null;
					case je.a:
						return t.payload;
					default:
						return e
				}
			};
			var ru = (e = !1, t) => {
				switch (t.type) {
					case je.a:
					case je.c:
						return !0;
					case je.b:
						return !1;
					default:
						return e
				}
			};
			var su = (e = null, t) => {
					switch (t.type) {
						case Te.b:
						case je.a:
						case je.c:
							return null;
						case je.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				nu = Object(j.c)({
					error: tu,
					fetched: ru,
					pending: su
				});
			var au = (e = null, t) => {
				switch (t.type) {
					case je.f:
					case je.g:
						return null;
					case je.e:
						return t.payload;
					default:
						return e
				}
			};
			var cu = (e = !1, t) => {
				switch (t.type) {
					case je.e:
					case je.g:
						return !0;
					case je.f:
						return !1;
					default:
						return e
				}
			};
			var ou = (e = !1, t) => {
					switch (t.type) {
						case je.e:
						case je.g:
							return !1;
						case je.f:
							return !0;
						default:
							return e
					}
				},
				du = Object(j.c)({
					error: au,
					fetched: cu,
					pending: ou
				});
			var iu = (e = null, t) => {
				switch (t.type) {
					case je.i:
					case je.j:
						return null;
					case je.h:
						return t.payload;
					default:
						return e
				}
			};
			var uu = (e = !1, t) => {
				switch (t.type) {
					case je.h:
					case je.j:
						return !0;
					case je.i:
						return !1;
					default:
						return e
				}
			};
			var lu = (e = !1, t) => {
					switch (t.type) {
						case je.h:
						case je.j:
							return !1;
						case je.i:
							return !0;
						default:
							return e
					}
				},
				pu = Object(j.c)({
					error: iu,
					fetched: uu,
					pending: lu
				});
			var bu = (e = null, t) => {
				switch (t.type) {
					case je.l:
					case je.m:
						return null;
					case je.k:
						return t.payload;
					default:
						return e
				}
			};
			var fu = (e = !1, t) => {
				switch (t.type) {
					case je.k:
					case je.m:
						return !0;
					case je.l:
						return !1;
					default:
						return e
				}
			};
			var mu = (e = !1, t) => {
					switch (t.type) {
						case je.k:
						case je.m:
							return !1;
						case je.l:
							return !0;
						default:
							return e
					}
				},
				yu = Object(j.c)({
					error: bu,
					fetched: fu,
					pending: mu
				});
			var Ou = (e = null, t) => {
				switch (t.type) {
					case je.o:
					case je.p:
						return null;
					case je.n:
						return t.payload;
					default:
						return e
				}
			};
			var _u = (e = !1, t) => {
				switch (t.type) {
					case je.n:
					case je.p:
						return !0;
					case je.o:
						return !1;
					default:
						return e
				}
			};
			var Eu = (e = !1, t) => {
					switch (t.type) {
						case je.n:
						case je.p:
							return !1;
						case je.o:
							return !0;
						default:
							return e
					}
				},
				hu = Object(j.c)({
					error: Ou,
					fetched: _u,
					pending: Eu
				});
			var Iu = (e = !1, t) => {
				switch (t.type) {
					case je.t:
						return !1;
					case je.u:
						return !0;
					default:
						return e
				}
			};
			var gu = (e = !1, t) => {
					switch (t.type) {
						case je.t:
							return !0;
						case je.u:
							return !1;
						default:
							return e
					}
				},
				Su = Object(j.c)({
					fetched: Iu,
					pending: gu
				});
			var ju = (e = null, t) => {
				switch (t.type) {
					case je.A:
					case je.B:
						return null;
					case je.z:
						return t.payload;
					default:
						return e
				}
			};
			var vu = (e = !1, t) => {
				switch (t.type) {
					case je.A:
					case je.z:
						return !1;
					case je.B:
						return !0;
					default:
						return e
				}
			};
			var Tu = (e = !0, t) => {
					switch (t.type) {
						case je.A:
							return !0;
						case je.B:
						case je.z:
							return !1;
						default:
							return e
					}
				},
				Du = Object(j.c)({
					error: ju,
					fetched: vu,
					pending: Tu
				});
			var wu = (e = null, t) => {
				switch (t.type) {
					case je.w:
					case je.x:
						return null;
					case je.v:
						return t.payload;
					default:
						return e
				}
			};
			var Pu = (e = !1, t) => {
				switch (t.type) {
					case je.v:
					case je.x:
						return !0;
					case je.w:
						return !1;
					default:
						return e
				}
			};
			var Au = (e = null, t) => {
					switch (t.type) {
						case je.v:
						case je.x:
							return null;
						case je.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Cu = Object(j.c)({
					error: wu,
					fetched: Pu,
					pending: Au
				}),
				Ru = Object(j.c)({
					addSubreddit: nu,
					create: du,
					deleteMulti: pu,
					duplicate: yu,
					edit: hu,
					forUser: Su,
					recommendations: Du,
					removeSubreddit: Cu
				}),
				Nu = r("./node_modules/lodash/isEqual.js"),
				Lu = r.n(Nu),
				ku = r("./node_modules/lodash/union.js"),
				xu = r.n(ku);

			function Uu(e, t, r) {
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
			var Mu = r("./src/reddit/actions/profile/constants.ts");
			const Fu = {};
			var Gu = (e = Fu, t) => {
					switch (t.type) {
						case Te.b:
						case je.r:
						case je.u:
						case Mu.h: {
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
								a[t] = xu()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Lu()(e, a) ? e : a
						}
						case je.g:
						case je.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Uu(n, s.url, (e, t) => e > t ? 1 : -1);
							return n.splice(a, 0, s.url), {
								...e,
								[r]: n
							}
						}
						case je.j: {
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
				Bu = r("./src/reddit/actions/subscription/constants.ts"),
				qu = r("./src/reddit/models/Multireddit/index.ts");
			const Vu = {};
			var Hu = (e = Vu, t) => {
				switch (t.type) {
					case Te.b:
					case je.r:
					case je.u:
					case Mu.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(qu.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Lu()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return _a()(r) ? e : {
							...e,
							...r
						}
					}
					case je.g:
					case je.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case je.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case je.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case je.x: {
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
					case Bu.d: {
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
					case Bu.e: {
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
					case je.c: {
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
			const Wu = {};
			var Qu = (e = Wu, t) => {
					switch (t.type) {
						case je.B: {
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
				Ku = Object(j.c)({
					api: Ru,
					byUserId: Gu,
					models: Hu,
					recommendations: Qu
				}),
				$u = r("./src/reddit/actions/notificationBanner.ts");
			var Yu = (e = null, t) => {
					switch (t.type) {
						case $u.b:
							return t.payload.notificationBannerId;
						case $u.a:
							return null;
						default:
							return e
					}
				},
				zu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var Xu = (e = !1, t) => {
				switch (t.type) {
					case zu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case zu.e:
					case zu.b:
						return !1;
					default:
						return e
				}
			};
			var Ju = (e = !1, t) => {
					switch (t.type) {
						case zu.e:
							return !0;
						case zu.a:
						case zu.b:
							return !1;
						default:
							return e
					}
				},
				Zu = Object(j.c)({
					error: Xu,
					pending: Ju
				});
			var el = (e = null, t) => {
				switch (t.type) {
					case zu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var tl = (e = null, t) => {
				switch (t.type) {
					case zu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const rl = [];
			var sl = (e = rl, t) => {
				switch (t.type) {
					case zu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case zu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case zu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					case zu.c: {
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
			var nl = (e = null, t) => {
					switch (t.type) {
						case zu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				al = Object(j.c)({
					api: Zu,
					earlierDividerIndex: el,
					notifications: sl,
					pageInfo: nl,
					markAllAsReadTimestamp: tl
				}),
				cl = r("./src/reddit/actions/nps.ts");
			const ol = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var dl = (e = ol, t) => {
					switch (t.type) {
						case cl.c:
							return {
								...ol, pending: !0
							};
						case cl.a:
							return ol;
						case cl.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...ol,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				il = r("./src/reddit/actions/accountGender/constants.ts"),
				ul = r("./src/reddit/actions/onboarding/constants.ts");
			const ll = {
				success: !1,
				failure: !1
			};
			var pl = (e = ll, t) => {
					switch (t.type) {
						case il.b:
							return {
								...ll, success: !0
							};
						case il.c:
							return {
								...ll, failure: !0
							};
						case ul.a:
							return {
								...ll
							};
						default:
							return e
					}
				},
				bl = Object(j.c)({
					genderUpdateState: pl
				});
			const fl = e => {
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
			const ml = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = fl(r);
					return t
				},
				yl = {};
			var Ol = (e = yl, t) => {
				switch (t.type) {
					case cc.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return ml(r)
					}
					default:
						return e
				}
			};
			var _l = Object(j.c)({
					byName: Ol,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case cc.a: {
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
				El = Object(j.c)({
					experiments: _l
				}),
				hl = r("./node_modules/history/esm/history.js"),
				Il = r("./src/reddit/constants/history.ts");
			const gl = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Sl = (e = gl, t) => {
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
						const o = Object(hl.e)(a),
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
									[Il.b.FeedCorrelationId]: r
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const jl = {};
			var vl = (e = jl, t) => {
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
			const Tl = {};
			var Dl = (e = Tl, t) => {
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
				wl = Object(j.c)({
					error: vl,
					pending: Dl
				}),
				Pl = Object(j.c)({
					voting: wl
				}),
				Al = r("./src/reddit/reducers/posts/models/helpers.ts"),
				Cl = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Rl = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Nl = r("./src/reddit/models/Prediction/index.ts");
			const Ll = {};
			var kl = (e = Ll, t) => {
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
					case G.b:
					case G.f:
					case Cl.l: {
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
						const s = At()(t.payload.posts, Object(Al.h)([Al.o])),
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
											userWonAmount: m,
											voteUpdatesRemained: y,
											votingEndTimestamp: O,
											predictionStatus: _
										}
									} = e;
									if (d) {
										return {
											id: t,
											createdAt: n,
											creatorId: r,
											subredditId: s.id,
											endsAt: O,
											voteUpdatesRemained: y,
											postId: t,
											title: a,
											options: i,
											totalVoters: p,
											type: Nn.a.GA,
											isNSFW: c,
											isPrediction: d,
											isSpoiler: o,
											totalStakeAmount: l || 0,
											tournamentId: b,
											userSelection: f,
											userWonAmount: m,
											resolvedOptionId: u,
											predictionStatus: _,
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
										type: Nn.a.GA,
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
					case Cl.n:
					case Cl.m: {
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
					case Cl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Nl.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Rl.b)(s)
							}
						} : e
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
							[Nn.b.ByVoters]: r, pollId: s
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
					case K.i:
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
										[Nn.b.ByVoters]: n,
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
			const Ml = {};
			var Fl = (e = Ml, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[Nn.b.ByVotingPower]: r, pollId: s
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
						case G.b:
						case G.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[Nn.b.ByVotingPower]: n,
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
				Gl = Object(j.c)({
					byVoters: Ul,
					byVotingPower: Fl
				});
			const Bl = {};
			var ql = (e = Bl, t) => {
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
				Vl = Object(j.c)({
					api: Pl,
					models: kl,
					results: Gl,
					rewards: ql
				});
			const Hl = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Wl = (e = Hl, t) => {
				switch (t.type) {
					case Hr.i:
					case Hr.j:
						return {
							...e, reorderError: null
						};
					case Hr.h:
						return {
							...e, reorderError: t.payload
						};
					case Hr.l:
					case Hr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Hr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Hr.p:
					case Hr.q:
						return {
							...e, updateLayoutError: null
						};
					case Hr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Ql = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Kl = (e = Ql, t) => {
					switch (t.type) {
						case Hr.i:
							return {
								...e, reorderPending: !0
							};
						case Hr.h:
						case Hr.j:
							return {
								...e, reorderPending: !1
							};
						case Hr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Hr.k:
						case Hr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Hr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Hr.o:
						case Hr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				$l = Object(j.c)({
					error: Wl,
					pending: Kl
				}),
				Yl = r("./src/reddit/helpers/path/index.ts");
			const zl = {},
				Xl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Yl.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Jl = (e = zl, t) => {
				switch (t.type) {
					case De.PAGE_LOADED:
					case ve.e:
					case ve.h:
					case B.b:
					case B.e:
					case we.e:
					case we.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case W.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case ai.j:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Re.g:
					case Pe.b:
					case H.c:
					case Hr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = Xl(s);
							n = At()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Hr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = Xl(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Hr.g: {
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
					case Hr.a: {
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
					case Hr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Hr.s: {
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
					case Hr.j: {
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
					case Hr.m: {
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
					case Hr.q: {
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
			const Zl = {};
			var ep = (e = Zl, t) => {
					switch (t.type) {
						case De.PAGE_LOADED:
						case Hr.f: {
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
						case Hr.d: {
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
						case Hr.e: {
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
				tp = Object(j.c)({
					models: Jl,
					subredditToIds: ep,
					api: $l
				}),
				rp = r("./src/reddit/actions/postFlair.ts"),
				sp = r("./src/reddit/models/Flair/index.ts");
			const np = {},
				ap = {
					displaySettings: {
						isEnabled: !1,
						position: sp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				cp = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...ap,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var op = (e = np, t) => {
					switch (t.type) {
						case De.PAGE_LOADED:
						case ge.f:
						case ve.e:
						case ve.h:
						case je.r:
						case Fd.b:
						case G.b:
						case G.f:
						case ge.b:
						case Te.b:
						case H.c:
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case Q.e:
						case Pe.b:
						case Pe.b:
						case we.b:
						case we.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Re.g:
						case Re.g:
						case K.i:
							return cp(e, t.payload.postFlair);
						case rp.c: {
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
						case rp.a: {
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
						case rp.f: {
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
						case rp.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = Fs()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case rp.e:
						case rp.d: {
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
						case F.i:
						case F.f:
						case F.m:
						case F.p:
						case F.v: {
							const {
								response: r
							} = t.payload;
							return cp(e, r.postFlair)
						}
						default:
							return e
					}
				},
				dp = r("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const ip = {
				pending: !1,
				items: {}
			};
			var up = (e = ip, t) => {
				switch (t.type) {
					case dp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case dp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var lp = (e = null, t) => {
					switch (t.type) {
						case ai.c:
							return t.payload;
						default:
							return e
					}
				},
				pp = r("./src/reddit/actions/embedAndImage.ts");
			const bp = {};
			var fp = (e = bp, t) => {
					switch (t.type) {
						case pp.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case pp.a: {
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
				mp = Object(j.c)({
					loadable: fp
				});
			const yp = {};
			var Op = (e = yp, t) => {
				switch (t.type) {
					case ai.d: {
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
			var _p = (e = null, t) => {
				switch (t.type) {
					case ai.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Ep = [];
			var hp = (e = Ep, t) => {
				switch (t.type) {
					case ai.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case ai.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case ai.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Ip = {};
			var gp = (e = Ip, t) => {
				switch (t.type) {
					case ve.e:
					case ve.h:
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Re.g:
					case H.c:
						return k()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var Sp = (e = null, t) => {
					switch (t.type) {
						case ai.a:
							return t.payload;
						default:
							return e
					}
				},
				jp = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const vp = {};
			var Tp = (e = vp, t) => {
				switch (t.type) {
					case jp.a: {
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
			const Dp = {};
			var wp = (e = Dp, t) => {
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
						case G.b:
						case G.f:
						case Cl.l: {
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
				Pp = r("./src/reddit/actions/bulkActions/constants.ts"),
				Ap = r("./src/reddit/actions/constants.ts"),
				Cp = r("./src/reddit/actions/flairManagement/constants.ts"),
				Rp = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Np = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Lp = r("./src/reddit/actions/subredditTopContent.ts"),
				kp = r("./src/reddit/helpers/isPost.ts"),
				xp = r("./node_modules/lodash/pickBy.js"),
				Up = r.n(xp);

			function Mp(e, t) {
				const r = Up()(t, (t, r = "") => !e[r] || !Lu()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Fp = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Gp = r("./src/reddit/models/Media/index.ts"),
				Bp = r("./src/reddit/models/ModQueue/index.ts"),
				qp = r("./src/reddit/models/Post/index.ts"),
				Vp = r("./src/reddit/models/Vote/index.ts"),
				Hp = r("./src/reddit/actions/subredditDuplicates.ts");
			const Wp = {};
			var Qp = (e = Wp, t) => {
				switch (t.type) {
					case u.b:
						if (Vs(t) === (Ce.Mb.COMMENTS || Ce.Mb.DUPLICATES)) {
							const r = Hs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(qp.t)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: Object(Al.c)(e[n], e[t])
								}
							}
						}
						return e;
					case G.b:
					case G.f: {
						const r = Object(Al.g)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(Al.h)([r, Al.d, Al.m, Al.n, Al.o, Object(Al.a)(e), Object(Al.b)(e), Object(Al.j)(e), Object(Al.k)(e), Object(Al.i)(e)]))
						}
					}
					case ai.j:
						return Mp(e, t.payload);
					case Hp.a:
						return Mp(e, t.payload.posts);
					case De.PAGE_LOADED:
					case Vd.c:
					case Hd.b:
					case ve.e:
					case ve.h:
					case B.b:
					case B.e:
					case we.e:
					case we.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case Fd.b:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case Wd.j:
					case K.i:
					case Pe.b:
					case Gd.TOPIC_DATA_LOADED:
					case Gd.MORE_POSTS_LOADED:
					case Md.c:
					case Md.d:
					case Cl.l: {
						const r = Object(Al.g)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(Al.h)([r, Al.d, Al.m, Al.n, Al.o, Object(Al.l)(e), Object(Al.j)(e), Object(Al.i)(e)]))
						}
					}
					case Wd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Object(Al.g)(t.meta);
							Object.assign(r, At()(t.posts, Object(Al.h)([n, Al.d, Al.m, Al.n, Object(Al.l)(e), Object(Al.j)(e), Object(Al.i)(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Fd.b: {
						const r = Object(Al.g)(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...At()(t.payload.posts, Object(Al.h)([r, Al.d, Al.m, Al.n, Object(Al.l)(e), Object(Al.j)(e), Object(Al.i)(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Re.g:
					case H.c: {
						const r = Object(Al.g)(t.payload.meta),
							s = At()(t.payload.posts, Object(Al.h)([r, Al.m, Al.d, Al.n, Object(Al.i)(e)]));
						return k()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case ai.k: {
						const r = t.payload;
						return k()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ap.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Vp.c)(n, s)
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
					case ai.h: {
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
					case ai.i: {
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
							...r.reduce((e, t) => (e[t.post.id] = Object(Al.h)([Al.m])(Object(Zs.f)(t.post)), e), {})
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
								...Object(Fp.a)(c, s, n),
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
							[s]: Object(Fp.b)(n, r)
						} : e
					}
					case ki.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...At()(s, Object(Al.h)([Al.m, Al.n]))
						}
					}
					case Pp.b:
					case F.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(kp.a)(e)), o = Object(Bp.d)(e, r, c, n, a);
						return k()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Hr.t: {
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
					case Hr.e: {
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
					case Hr.g: {
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
					case Md.f: {
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
					case Md.a: {
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
					case Kc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...At()(r.posts, Object(Al.h)([Al.m, Al.n])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Lp.b:
						return {
							...At()(t.payload.posts, Object(Al.h)([Al.m, Al.n])), ...e
						};
					case ai.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Gp.K)(n.media) ? {
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
					case Cp.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Cp.b: {
						const r = t.payload;
						return Object(xt.a)(e, r)
					}
					case y.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Np.b: {
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
					case Cl.q: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = Object(Al.e)({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = Object(Al.f)({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case Cl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Object(Al.p)(e[r], Object(Rl.a)(s))
						}
					}
					case Np.a:
						return {
							...e
						};
					case Rp.b: {
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
					case Rp.a:
						return {
							...e
						};
					case Vd.a: {
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
					case y.t:
					case y.q: {
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
			var Kp = (e = null, t) => {
					switch (t.type) {
						case ai.g:
							return t.payload;
						default:
							return e
					}
				},
				$p = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const Yp = {};
			var zp = (e = Yp, t) => {
				switch (t.type) {
					case $p.a: {
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
			const Xp = [];
			var Jp = (e = Xp, t) => {
					switch (t.type) {
						case ai.l: {
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
				Zp = r("./node_modules/uuid/v4.js"),
				eb = r.n(Zp);
			const tb = eb()();
			var rb = (e = tb, t) => {
				switch (t.type) {
					case De.PAGE_LOADED:
					case js.h:
					case js.a:
					case js.m:
					case js.f:
						return eb()();
					default:
						return e
				}
			};
			var sb = (e = null, t) => {
				switch (t.type) {
					case js.d:
					case js.o:
					case js.k:
					case js.g:
					case js.a:
					case js.m:
					case js.f:
						return null;
					case js.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case js.e:
						return "error";
					default:
						return e
				}
			};
			var nb = (e = !0, t) => {
				switch (t.type) {
					case js.g:
						return !0;
					case js.m:
					case js.a:
					case js.f:
					case js.e:
						return !1;
					default:
						return e
				}
			};
			var ab = (e = !1, t) => {
					switch (t.type) {
						case js.k:
							return !0;
						case js.j:
						case js.e:
						case js.o:
						case js.d:
							return !1;
						default:
							return e
					}
				},
				cb = Object(j.c)({
					creationToken: rb,
					error: sb,
					pending: nb,
					pendingUpdate: ab
				});
			const ob = {};
			var db = (e = ob, t) => {
				switch (t.type) {
					case js.c: {
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
			const ib = {
				standalonePosts: {
					POSTS_LOADED: js.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: js.o
				},
				recurringPosts: {
					POSTS_LOADED: js.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: js.d
				}
			};

			function ub(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case ib[e].POSTS_LOADED:
						case js.f: {
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
						case js.i:
						case js.l: {
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
						case js.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case ib[e].MUTATION_SUCCEEDED: {
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
			const lb = {};

			function pb(e) {
				return (t = lb, r) => {
					switch (r.type) {
						case ib[e].POSTS_LOADED:
						case js.f: {
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
						case js.h: {
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
			var bb = r("./node_modules/lodash/uniq.js"),
				fb = r.n(bb);
			const mb = {};

			function yb(e) {
				return (t = mb, r) => {
					switch (r.type) {
						case ib[e].POSTS_LOADED:
						case js.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[ib[e].postIdsKey];
							return {
								...t,
								[n]: fb()([...t[n] || [], ...a])
							}
						}
						case js.i:
						case js.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case js.h: {
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
			var Ob = Object(j.c)({
					models: ub("recurringPosts"),
					pageInfo: pb("recurringPosts"),
					postOrder: yb("recurringPosts"),
					editModal: db
				}),
				_b = Object(j.c)({
					models: ub("standalonePosts"),
					pageInfo: pb("standalonePosts"),
					postOrder: yb("standalonePosts")
				}),
				Eb = Object(j.c)({
					api: cb,
					standalonePosts: _b,
					recurringPosts: Ob
				});
			var hb = (e = null, t) => {
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
			var Ib = (e = !1, t) => {
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
				gb = Object(j.c)({
					error: hb,
					pending: Ib
				});
			const Sb = [];
			var jb = (e = Sb, t) => {
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
							return Sb;
						default:
							return e
					}
				},
				vb = Object(j.c)({
					api: gb,
					list: jb
				}),
				Tb = r("./src/reddit/actions/video.ts");
			const Db = {};
			var wb = (e = Db, t) => {
				switch (t.type) {
					case Tb.e: {
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
			const Pb = {};
			var Ab = (e = Pb, t) => {
				switch (t.type) {
					case Tb.a: {
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
			const Cb = {};
			var Rb = (e = Cb, t) => {
				switch (t.type) {
					case Tb.b: {
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
			const Nb = {};
			var Lb = (e = Nb, t) => {
				switch (t.type) {
					case Tb.c: {
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
			const kb = {
				mutedInFeed: !0
			};
			var xb = (e = kb, t) => {
				switch (t.type) {
					case Tb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Ub = (e = null, t) => {
				switch (t.type) {
					case Tb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Tb.d:
						return null;
					default:
						return e
				}
			};
			const Mb = {};
			var Fb = (e = Mb, t) => {
				switch (t.type) {
					case Tb.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Tb.e: {
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
			const Gb = {};
			var Bb = (e = Gb, t) => {
				switch (t.type) {
					case Tb.h: {
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
					case Tb.f: {
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
			const qb = {};
			var Vb = (e = qb, t) => {
				switch (t.type) {
					case Tb.j: {
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
			const Hb = {};
			var Wb = (e = Hb, t) => {
				switch (t.type) {
					case Tb.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Tb.g: {
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
			const Qb = {};
			var Kb = (e = Qb, t) => {
				switch (t.type) {
					case Tb.i: {
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
			const $b = {};
			var Yb = (e = $b, t) => {
					switch (t.type) {
						case Tb.m: {
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
				zb = r("./src/reddit/constants/video.ts");
			const Xb = {};
			var Jb = (e = Xb, t) => {
					switch (t.type) {
						case Tb.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < zb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Zb = Object(j.c)({
					autoPlayed: wb,
					buffering: Ab,
					consumed: Rb,
					continuousViewStartedAt: Lb,
					feed: xb,
					fullscreen: Ub,
					loadable: Fb,
					loadTimes: Bb,
					metadata: Vb,
					paused: Wb,
					playing: Kb,
					started: Yb,
					time: Jb
				}),
				ef = Object(j.c)({
					embedAndImage: mp,
					expanded: Op,
					focus: _p,
					followed: hp,
					instances: gp,
					isAnimatingUpvote: Sp,
					isTrackingCrossposts: Tp,
					metaMap: wp,
					models: Qp,
					modToMemberShare: Kp,
					crowdControl: lp,
					postLevelCrowdControl: zp,
					recent: Jp,
					scheduledPosts: Eb,
					topAwarded: vb,
					video: Zb,
					carousel: up
				}),
				tf = r("./src/lib/reducers/addAuthentication/index.ts");
			const rf = {};
			var sf = Object(tf.a)((e = rf, t) => {
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
				}, rf),
				nf = Object(j.c)({
					data: sf
				});
			const af = {};
			var cf = (e = af, t) => {
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
			const of = {};
			var df = (e = of , t) => {
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
				uf = Object(j.c)({
					error: cf,
					pending: df
				});
			const lf = {};
			var pf = (e = lf, t) => {
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
			const bf = {};
			var ff = (e = bf, t) => {
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
				mf = Object(j.c)({
					error: pf,
					pending: ff
				}),
				yf = Object(j.c)({
					fetch: uf,
					purchase: mf
				});
			var Of = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const _f = {};
			var Ef = (e = _f, t) => {
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
				hf = Object(j.c)({
					api: yf,
					currentlyPurchasing: Of,
					models: Ef
				});
			const If = {};
			var gf = (e = If, t) => {
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
			const Sf = {};
			var jf = (e = Sf, t) => {
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
				vf = Object(j.c)({
					error: gf,
					pending: jf
				});
			const Tf = {};
			var Df = (e = Tf, t) => {
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
				wf = r("./src/reddit/actions/comment/list.ts");
			const Pf = {};
			var Af = (e = Pf, t) => {
				switch (t.type) {
					case wf.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case wf.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Fs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Cf = {};
			var Rf = (e = Cf, t) => {
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
			const Nf = {};
			var Lf = (e = Nf, t) => {
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
				kf = Object(j.c)({
					api: vf,
					endMarkers: Af,
					fetchedTokens: Rf,
					commentIds: Df,
					loadMore: Lf
				}),
				xf = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Uf = (e = !0, t) => {
					switch (t.type) {
						case xf.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Mf = Object(j.c)({
					pending: Uf
				}),
				Ff = Object(j.c)({
					api: Mf
				});
			const Gf = {};
			var Bf = (e = Gf, t) => (t.type, e);
			const qf = {};
			var Vf = (e = qf, t) => {
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
			const Hf = {};
			var Wf = (e = Hf, t) => {
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
				Qf = Object(j.c)({
					error: Vf,
					pending: Wf
				});
			const Kf = {};
			var $f = (e = Kf, t) => {
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
			const Yf = {};
			var zf = (e = Yf, t) => {
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
							} : Yf
						}
						default:
							return e
					}
				},
				Xf = Object(j.c)({
					api: Qf,
					ids: $f,
					pageInfo: zf
				}),
				Jf = r("./src/reddit/constants/posts.ts");
			const Zf = {};
			var em = (e = Zf, t) => {
					switch (t.type) {
						case H.c:
						case Re.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Mu.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case Bu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === Jf.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case kr.n: {
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
				tm = r("./src/reddit/models/Subreddit/index.ts");
			const rm = {};
			var sm = (e = rm, t) => {
				switch (t.type) {
					case ge.f:
					case G.b:
					case G.f:
					case ge.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case we.b:
					case we.e:
					case q.PROFILE_POSTS_LOADED:
					case Pe.b:
					case ve.e:
					case ve.h:
					case je.u:
					case Mu.h:
					case Fd.b:
					case Re.g:
					case K.i:
					case Mu.m:
					case Q.b:
					case Q.e:
					case H.c:
					case De.PAGE_LOADED:
					case Yr.e:
					case Gs.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case Te.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Bu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Re.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(tm.h)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(s).length ? Object(N.merge)(e, s) : e
					}
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case F.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(N.merge)(e, s)
					}
					case Mu.l:
					case Mu.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(N.merge)(e, {
							[r.id]: r
						}) : e
					}
					case kr.n: {
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
					case kr.l:
					case kr.k: {
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
			const nm = {};
			var am = (e = nm, t) => {
					switch (t.type) {
						case Mu.c:
						case Mu.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Mu.a:
						case Mu.b:
						case Mu.d:
						case Mu.e: {
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
				cm = Object(j.c)({
					pending: am
				});
			const om = {};
			var dm = (e = om, t) => {
				switch (t.type) {
					case Mu.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case Mu.e:
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
			const im = {};
			var um = (e = im, t) => {
					switch (t.type) {
						case Mu.e: {
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
				lm = Object(j.c)({
					api: cm,
					models: dm,
					pageInfo: um
				});
			const pm = {};
			var bm = (e = pm, t) => {
					switch (t.type) {
						case Mu.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Mu.g:
						case Mu.h: {
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
				fm = Object(j.c)({
					pending: bm
				});
			const mm = {};
			var ym = (e = mm, t) => {
					switch (t.type) {
						case Mu.h: {
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
				Om = Object(j.c)({
					api: fm,
					pageInfo: ym
				}),
				_m = r("./src/reddit/actions/pinnedPost.ts");
			const Em = {};
			var hm = Object(tf.a)((e = Em, t) => {
				switch (t.type) {
					case _m.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case _m.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Ce.cb)
						}
					}
					case _m.g: {
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
			}, Em);
			const Im = {};
			var gm = Object(tf.a)((e = Im, t) => {
				switch (t.type) {
					case _m.a: {
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
			}, Im);
			const Sm = {};
			var jm = Object(tf.a)((e = Sm, t) => {
					switch (t.type) {
						case _m.c:
						case _m.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case _m.b:
						case _m.e:
						case _m.d:
						case _m.g: {
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
				}, Sm),
				vm = Object(j.c)({
					data: hm,
					initialData: gm,
					pending: jm
				}),
				Tm = r("./src/reddit/actions/trophyCase.ts");
			const Dm = {};
			var wm, Pm, Am = (e = Dm, t) => {
					switch (t.type) {
						case Tm.a: {
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
				Cm = Object(j.c)({
					about: em,
					models: sm,
					moderated: lm,
					multireddits: Om,
					pinnedPosts: vm,
					trophyCases: Am
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(wm || (wm = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Pm || (Pm = {}));
			var Rm, Nm, Lm;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Rm || (Rm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Nm || (Nm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Lm || (Lm = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Rm || (Rm = {}));
			Object(Ae.a)("PROMO__SHOW_PROMO"), Object(Ae.a)("PROMO__HIDE_PROMO");
			const km = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var xm = (e = km, t) => {
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
				Um = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Mm = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Um.d,
					viewer_streams_refresh: Um.c,
					viewer_streams_refresh_slop: Um.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Fm = (e = Mm, t) => {
				switch (t.type) {
					case Um.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Um.x: {
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
					case Um.G:
						return {
							...e, isPending: !0
						};
					case Um.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Um.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Gm = (e = {}, t) => {
				switch (t.type) {
					case Um.L:
						return {
							...e, [Um.b]: t.payload.error
						};
					case Um.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Um.z: {
						const {
							[Um.b]: t, ...r
						} = e;
						return r
					}
					case Um.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Bm = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var qm = (e = {}, t) => {
				switch (t.type) {
					case Um.N:
						return Bm(e, t.payload, !0);
					case Um.O:
						return Bm(e, Um.b, !0);
					case Um.y:
						return Bm(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Um.z:
						return Bm(e, Um.b, !1, t.payload.utcTimeStamp);
					case Um.M:
						return Bm(e, t.payload.streamId, !1);
					case Um.L:
						return Bm(e, Um.b, !1);
					default:
						return e
				}
			};
			const Vm = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Hm = (e = Vm, t) => {
					switch (t.type) {
						case Um.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Um.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Um.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				Wm = Object(j.c)({
					config: Fm,
					error: Gm,
					pending: qm,
					recommendedViewerSubreddits: Hm
				});
			const Qm = {};
			var Km = (e = Qm, t) => {
				switch (t.type) {
					case Um.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Um.F:
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
			const $m = {
				cursor: Um.W,
				timestamps: {},
				visitOrder: []
			};
			var Ym = (e = $m, t) => {
				switch (t.type) {
					case Um.P:
						return $m;
					case Um.X: {
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
						return zm(e, t.payload.id);
					case Um.E:
						return zm(e, t.payload);
					case ai.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Xm(e, r)
					}
					case Um.V: {
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
			const zm = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				Xm = (e, t) => {
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
				Jm = {
					ended: [],
					removed: []
				};

			function Zm(e) {
				return [...new Set(e)]
			}
			var ey = (e = Jm, t) => {
				switch (t.type) {
					case Um.t:
						return {
							...e, ended: Zm(e.ended.concat(t.payload))
						};
					case Um.u:
						return {
							...e, removed: Zm(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const ty = {};
			var ry = (e = ty, t) => {
				switch (t.type) {
					case Um.z:
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
			const sy = {},
				ny = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Um.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Um.l - r
						}
					}), r)
				},
				ay = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Um.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var cy = (e = sy, t) => {
				switch (t.type) {
					case Um.y:
						return ay(e, t.payload.model);
					case Um.z:
						return ny(e, t.payload.models);
					case Um.D: {
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
			const oy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var dy = (e = oy, t) => {
				switch (t.type) {
					case Um.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Um.A:
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
			const iy = {
				reported: []
			};
			var uy = (e = iy, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const ly = {
				isIntroFinished: !1
			};
			var py = (e = ly, t) => {
				switch (t.type) {
					case Um.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const by = {
				reportedStreams: []
			};
			var fy = (e = by, t) => {
					switch (t.type) {
						case Um.C:
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
				my = Object(j.c)({
					api: Wm,
					history: Ym,
					hlsStreams: ey,
					listings: ry,
					models: cy,
					preloads: dy,
					reports: uy,
					theaterSettings: py,
					userSettings: fy,
					automuteLevels: Km
				}),
				yy = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Oy = r("./src/reddit/actions/session.ts");
			const _y = [];
			var Ey = (e = _y, t) => {
				switch (t.type) {
					case Oy.c:
					case Oy.d:
						return _y;
					case yy.d:
						return ((e, t) => Lu()(e, t) ? e : t)(e, t.subreddits);
					case yy.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, yy.c)
					}
					case yy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, yy.c)
					}
					default:
						return e
				}
			};
			const hy = {};
			var Iy = (e = hy, t) => {
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
				gy = r("./src/reddit/actions/pages/report/constants.ts");
			var Sy = (e = null, t) => {
				switch (t.type) {
					case gy.a:
						return t.payload;
					default:
						return e
				}
			};
			var jy = (e = null, t) => {
				switch (t.type) {
					case gy.b:
						return t.payload;
					case gy.c:
					case gy.d:
						return !1;
					default:
						return e
				}
			};
			var vy = (e = !1, t) => {
				switch (t.type) {
					case gy.d:
						return !0;
					case gy.c:
					case gy.b:
						return !1;
					default:
						return e
				}
			};
			var Ty = (e = !1, t) => {
					switch (t.type) {
						case gy.c:
							return !0;
						case gy.b:
						case gy.d:
							return !1;
						default:
							return e
					}
				},
				Dy = Object(j.c)({
					error: jy,
					pending: vy,
					success: Ty
				}),
				wy = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Py = [];
			var Ay = (e = Py, t) => {
					switch (t.type) {
						case wy.a:
							return t.payload;
						default:
							return e
					}
				},
				Cy = Object(j.c)({
					reportPageApi: Dy,
					reportPageRules: Ay,
					initialReason: Sy
				}),
				Ry = r("./src/reddit/actions/reportRules.ts");
			const Ny = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Ly = (e = Ny, t) => {
				switch (t.type) {
					case Ry.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Ry.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ae.a)("REQUEST_HOST_SET");
			var ky = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ae.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const xy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Uy = (e = xy, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				My = r("./src/reddit/components/SearchDropdown/index.tsx");
			var Fy = (e = !1, t) => {
				switch (t.type) {
					case Re.c:
						return !e;
					case wo.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(My.b), a = document.getElementById(My.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Re.b:
					case wo.a:
					case wo.c:
						return !1;
					default:
						return e
				}
			};
			var Gy = (e = "", t) => {
				switch (t.type) {
					case H.c:
					case Re.i: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const By = Object.create(null);
			var qy = (e = By, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Re.h: {
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
				Vy = r("./src/reddit/models/Search/index.ts");
			const Hy = {};
			var Wy = (e = Hy, t) => {
					switch (t.type) {
						case Re.h: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Vy.e)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Qy = Object(j.c)({
					idsByQuery: qy,
					models: Wy
				});
			const Ky = {};
			var $y = (e = Ky, t) => {
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
				Yy = Object(j.c)({
					isDropdownOpen: Fy,
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
					searchQuery: Gy,
					typeahead: Qy,
					viewTreatment: $y
				}),
				zy = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Xy = {};
			var Jy = (e = Xy, t) => {
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
						if (i === zy.c.Trending || r) {
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
			const Zy = {};
			var eO = (e = Zy, t) => {
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
			const tO = {};
			var rO = (e = tO, t) => {
					switch (t.type) {
						case H.c: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : tO
						}
						default:
							return e
					}
				},
				sO = Object(j.c)({
					headerContent: Jy,
					models: eO,
					order: rO
				});
			Object(Ae.a)("SEO__CRAWLER_RECEIVED");
			var nO = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				aO = r("./src/reddit/actions/seo/linksModule.ts");
			const cO = {};
			var oO = (e = cO, t) => {
					switch (t.type) {
						case aO.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case aO.c:
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
				dO = r("./src/reddit/actions/seo/topicLinks.ts");
			const iO = {};
			var uO = (e = iO, t) => {
					switch (t.type) {
						case dO.a:
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
				lO = Object(j.c)({
					crawler: nO,
					linksModule: oO,
					topicLinks: uO
				}),
				pO = r("./src/reddit/actions/shortcuts/constants.ts");
			var bO = (e = null, t) => {
				switch (t.type) {
					case pO.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var fO = (e = null, t) => {
					switch (t.type) {
						case pO.b:
							return t.payload || null;
						default:
							return e
					}
				},
				mO = r("./src/reddit/constants/shortcuts.ts"),
				yO = r("./src/reddit/helpers/history/index.ts");
			const OO = mO.d.Global,
				_O = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(yO.b)(Il.b.IsOverlay) ? mO.d.Lightbox : mO.d.CommentPage;
						case "rpan":
							return Object(yO.b)(Il.b.IsOverlay) ? mO.d.Lightbox : OO;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return mO.d.Listing;
						case "modQueuePages":
							return mO.d.Modqueue;
						default:
							return OO
					}
				};
			var EO = (e = OO, t) => {
					switch (t.type) {
						case u.b:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return _O(e)
							}
							return OO;
						default:
							return e
					}
				},
				hO = Object(j.c)({
					activeCommentId: bO,
					activePostId: fO,
					namespace: EO
				});
			var IO = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				gO = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				SO = Object(j.c)({
					firstFetch: IO,
					models: gO.b
				}),
				jO = r("./src/reddit/actions/streaming/modSettings.ts");
			var vO = (e = null, t) => {
				switch (t.type) {
					case jO.b:
					case jO.c:
						return null;
					case jO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var TO = (e = !1, t) => {
					switch (t.type) {
						case jO.b:
							return !0;
						case jO.c:
						case jO.a:
							return !1;
						default:
							return e
					}
				},
				DO = Object(j.c)({
					error: vO,
					pending: TO
				}),
				wO = r("./src/reddit/actions/streaming/constants.ts");
			const PO = {};
			var AO = (e = PO, t) => {
					switch (t.type) {
						case wO.a: {
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
				CO = Object(j.c)({
					api: DO,
					modSettings: AO
				}),
				RO = r("./src/reddit/models/StructuredStyles/index.ts");
			const NO = {};
			var LO = (e = NO, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return NO;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(RO.h)(e.styles)
						}
						default:
							return e
					}
				},
				kO = r("./src/reddit/actions/exportImportStyles.ts");
			var xO = (e = null, t) => {
				switch (t.type) {
					case kO.c:
					case kO.b:
						return null;
					case kO.a:
						return t.payload;
					default:
						return e
				}
			};
			var UO = (e = !1, t) => {
					switch (t.type) {
						case kO.c:
							return !0;
						case kO.b:
						case kO.a:
							return !1;
						default:
							return e
					}
				},
				MO = Object(j.c)({
					error: xO,
					pending: UO
				}),
				FO = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				GO = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const BO = {};
			var qO = (e = BO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case H.c:
						case Re.g:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED: {
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
						case FO.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case FO.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(xt.a)(e, r)
						}
						case rp.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(xt.a)(e, r)
						}
						case b.k:
							return BO;
						case GO.b: {
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
				VO = Object(j.c)({
					models: qO
				});
			const HO = {};
			var WO = (e = HO, t) => {
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
						return HO;
					default:
						return e
				}
			};
			var QO = (e = !1, t) => {
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
			var KO = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case kr.g:
						return null;
					default:
						return e
				}
			};
			const $O = {};
			var YO = (e = $O, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED: {
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
							if (ga()(r.subreddits, (e, t) => {
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
								s = Object(RO.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Mu.k: {
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
						case kr.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Mp(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case kr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Mp(e, {
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
				zO = Object(j.c)({
					draft: LO,
					exportStyles: MO,
					flairTemplate: VO,
					imagePreviews: WO,
					isBladeEditorDirty: QO,
					isEditing: KO,
					models: YO
				});
			Object(Ae.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var XO = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				JO = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const ZO = {};
			var e_ = (e = ZO, t) => {
				switch (t.type) {
					case JO.c:
					case JO.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case JO.a: {
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
			const t_ = {};
			var r_ = (e = t_, t) => {
					switch (t.type) {
						case JO.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case JO.b:
						case JO.a: {
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
				s_ = Object(j.c)({
					error: e_,
					pending: r_
				});
			const n_ = {};
			var a_ = (e = n_, t) => {
					switch (t.type) {
						case JO.b: {
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
				c_ = Object(j.c)({
					api: s_,
					models: a_
				}),
				o_ = r("./src/reddit/actions/category/constants.ts"),
				d_ = r("./src/reddit/actions/subredditMention/constants.ts");
			const i_ = {};
			var u_ = (e = i_, t) => {
				switch (t.type) {
					case d_.d:
					case G.b:
					case G.f:
					case H.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Gs.PAGE_LOADED:
					case B.b:
					case B.e:
					case we.b:
					case we.a:
					case we.e:
					case we.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Re.g:
					case Gd.TOPIC_DATA_LOADED:
					case Wd.u: {
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
					case Ja.a: {
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
					case Bu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === Jf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Kc.g:
					case o_.f:
					case Wd.g:
					case Wd.o:
					case is.B: {
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
					case Ja.b: {
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
			const l_ = {};
			var p_ = (e = l_, t) => {
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
			var b_ = (e = !1, t) => {
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
				f_ = Object(j.c)({
					error: p_,
					pending: b_
				}),
				m_ = r("./src/reddit/actions/subredditCreation.ts");
			const y_ = {
				apiError: null
			};
			var O_ = (e = y_, t) => {
				switch (t.type) {
					case m_.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case m_.a:
					case m_.c:
					case m_.e:
						return y_;
					default:
						return e
				}
			};
			var __ = (e = null, t) => {
				switch (t.type) {
					case m_.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case m_.a:
					case m_.c:
					case m_.e:
						return null;
					default:
						return e
				}
			};
			var E_ = (e = null, t) => {
				switch (t.type) {
					case m_.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case m_.c:
					case m_.b:
						return null;
					default:
						return e
				}
			};
			var h_ = (e = !1, t) => {
					switch (t.type) {
						case m_.c:
							return !0;
						case m_.e:
						case m_.b:
							return !1;
						default:
							return e
					}
				},
				I_ = Object(j.c)({
					error: O_,
					lastCreatedSubredditId: E_,
					initialCrosspost: __,
					pending: h_
				});
			var g_ = (e = !1, t) => {
					switch (t.type) {
						case Wd.w:
							return !0;
						case Wd.x:
						case Wd.v:
							return !1;
						default:
							return e
					}
				},
				S_ = Object(j.c)({
					pending: g_
				});
			const j_ = {};
			var v_ = (e = j_, t) => {
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
			const T_ = {};
			var D_ = (e = T_, t) => {
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
				w_ = Object(j.c)({
					error: v_,
					pending: D_
				});
			const P_ = {};
			var A_ = (e = P_, t) => {
					switch (t.type) {
						case Wd.f:
						case Wd.g:
							return {
								...e, [t.payload.key]: !1
							};
						case Wd.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				C_ = Object(j.c)({
					pending: A_
				});
			var R_ = (e = null, t) => {
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
			var N_ = (e = !1, t) => {
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
				L_ = Object(j.c)({
					error: R_,
					pending: N_
				});
			var k_ = (e = null, t) => {
				switch (t.type) {
					case Wd.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Wd.m:
					case Wd.l:
						return null;
					default:
						return e
				}
			};
			var x_ = (e = !1, t) => {
					switch (t.type) {
						case Wd.m:
							return !0;
						case Wd.l:
						case Wd.k:
							return !1;
						default:
							return e
					}
				},
				U_ = Object(j.c)({
					error: k_,
					pending: x_
				}),
				M_ = r("./src/reddit/actions/subredditRules/constants.ts");
			var F_ = (e = !1, t) => {
					switch (t.type) {
						case M_.c:
							return !0;
						case M_.a:
						case M_.b:
							return !1;
						default:
							return e
					}
				},
				G_ = r("./src/reddit/actions/subredditSettings.ts");
			var B_ = (e = !1, t) => {
					switch (t.type) {
						case G_.e:
							return !0;
						case G_.f:
						case G_.d:
							return !1;
						default:
							return e
					}
				},
				q_ = Object(j.c)({
					pending: B_
				});
			const V_ = {};
			var H_ = (e = V_, t) => {
					switch (t.type) {
						case Wd.n:
						case Wd.o:
							return {
								...e, [t.payload.key]: !1
							};
						case Wd.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				W_ = Object(j.c)({
					pending: H_
				}),
				Q_ = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const K_ = {};
			var $_ = (e = K_, t) => {
				switch (t.type) {
					case Q_.c:
					case Q_.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case Q_.a: {
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
			const Y_ = {};
			var z_ = (e = Y_, t) => {
					switch (t.type) {
						case Q_.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case Q_.b:
						case Q_.a: {
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
				X_ = Object(j.c)({
					error: $_,
					pending: z_
				});
			const J_ = {};
			var Z_ = (e = J_, t) => {
				switch (t.type) {
					case Lp.c:
					case Lp.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Lp.a: {
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
			const eE = {};
			var tE = (e = eE, t) => {
					switch (t.type) {
						case Lp.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Lp.b:
						case Lp.a: {
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
				rE = Object(j.c)({
					error: Z_,
					pending: tE
				}),
				sE = Object(j.c)({
					about: f_,
					create: I_,
					inlineEditing: S_,
					models: w_,
					onboarding: C_,
					productOffers: L_,
					rankings: U_,
					rules: F_,
					settings: q_,
					similar: W_,
					topContent: rE,
					wiki: X_
				}),
				nE = r("./node_modules/lodash/isNil.js"),
				aE = r.n(nE);
			const cE = {};
			var oE = (e = cE, t) => {
					switch (t.type) {
						case K.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: aE()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				dE = Object(j.c)({
					meta: oE
				});
			const iE = {};
			var uE = (e = iE, t) => {
				switch (t.type) {
					case o_.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return _a()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const lE = {
				pending: !1,
				items: {}
			};
			var pE = (e = lE, t) => {
				switch (t.type) {
					case dp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case dp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const bE = {};
			var fE = (e = bE, t) => {
					switch (t.type) {
						case je.c: {
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
				mE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var yE = (e = null, t) => {
				switch (t.type) {
					case mE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case mE.c:
					case mE.b:
						return null;
					default:
						return e
				}
			};
			var OE = (e = !1, t) => {
					switch (t.type) {
						case mE.c:
							return !0;
						case mE.b:
						case mE.a:
							return !1;
						default:
							return e
					}
				},
				_E = Object(j.c)({
					errors: yE,
					pending: OE
				});
			const EE = {};
			var hE = (e = EE, t) => {
					switch (t.type) {
						case mE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Lu()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				IE = Object(j.c)({
					api: _E,
					ids: hE
				});
			const gE = {};
			var SE = (e = gE, t) => {
					switch (t.type) {
						case Hp.a: {
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
							return Mp(c, {
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
				jE = Object(j.c)({
					models: SE
				});
			const vE = {};
			var TE = (e = vE, t) => {
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
			const DE = {};
			var wE = (e = DE, t) => {
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
			const PE = {};
			var AE = (e = PE, t) => {
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
			const CE = {};
			var RE = (e = CE, t) => {
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
				NE = Object(j.c)({
					assets: TE,
					communityRaw: wE,
					distributions: AE,
					releaseNotes: RE
				}),
				LE = r("./node_modules/lodash/isEqualWith.js"),
				kE = r.n(LE),
				xE = r("./src/lib/forceHttps/index.ts");
			const UE = {},
				ME = (e, t) => {
					return !kE()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				FE = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !ME(c, o) || (s[a] = {
							...c,
							...o
						})
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var GE = (e = UE, t) => {
				switch (t.type) {
					case Bu.c:
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
								return a.icon.url ? c.icon.url = Object(xE.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(N.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case yy.b:
					case d_.d:
					case o_.f:
					case ge.f:
					case Kc.g:
					case Vd.c:
					case Hd.b:
					case ve.e:
					case ve.h:
					case F.k:
					case je.r:
					case je.u:
					case Mu.h:
					case Fd.b:
					case G.b:
					case G.f:
					case ge.b:
					case Te.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case we.b:
					case we.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case Mu.e:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Yr.e:
					case Gs.PAGE_LOADED:
					case Mu.m:
					case Q.b:
					case Q.e:
					case Pe.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Re.g:
					case K.c:
					case K.f:
					case K.i:
					case Wd.a:
					case Wd.g:
					case Wd.o:
					case Gd.TOPIC_DATA_LOADED:
					case Gd.MORE_POSTS_LOADED:
					case is.B:
						return FE(e, t.payload.subreddits || {});
					case F.f:
					case F.i:
					case F.m:
					case F.p:
					case F.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return FE(e, s)
					}
					case Re.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return FE(e, r.subreddits || {})
					}
					case je.B: {
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
						return FE(e, r)
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
					case G_.f: {
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
					case JO.b: {
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
			var BE = (e = null, t) => {
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
			var qE = (e = !1, t) => {
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
			var VE = (e = !1, t) => {
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
				HE = Object(j.c)({
					errors: BE,
					fetched: qE,
					pending: VE
				});
			var WE = (e = null, t) => {
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
				QE = Object(j.c)({
					api: HE,
					order: WE
				});
			const KE = {};
			var $E = (e = KE, t) => {
				switch (t.type) {
					case G_.a: {
						const r = t.payload;
						return Object(N.merge)(e, r)
					}
					case G_.b: {
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
			const YE = {};
			var zE = (e = YE, t) => {
				switch (t.type) {
					case Wd.g: {
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
			const XE = {};
			var JE = (e = XE, t) => {
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
									displayName: Object(Y.e)(n),
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
			const ZE = {};
			var eh = (e = ZE, t) => {
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
			const th = {},
				rh = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = Ma(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				sh = (e, t, r) => {
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
			var nh = (e = th, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Fa(r)
						}
					}
					case Ua.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: rh(n, r, s)
						}
					}
					case Ua.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: sh(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const ah = {},
				ch = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var oh = (e = ah, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(ch)
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
								[r]: o.sort(ch)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: n.id,
										displayName: Object(Y.e)(n),
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
									[r]: [t, ...e[r]].sort(ch)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				dh = r("./src/lib/makeProductOfferKey/index.ts");
			const ih = {};
			var uh = (e = ih, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(dh.a)(t.type, r);
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
			const lh = {};
			var ph = (e = lh, t) => {
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
				bh = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const fh = {};
			var mh = (e = fh, t) => {
				switch (t.type) {
					case Wd.y: {
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
						}) => bh.e.includes(e))))(s.cards);
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
			const yh = {};
			var Oh = (e = yh, t) => {
				var r, s;
				switch (t.type) {
					case Wd.y: {
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
					case Wd.d: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(N.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case Wd.e:
						return yh;
					default:
						return e
				}
			};
			const _h = {};
			var Eh = (e = _h, t) => {
				switch (t.type) {
					case Wd.b: {
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
			const hh = {};
			var Ih = (e = hh, t) => {
					switch (t.type) {
						case Wd.c: {
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
				gh = r("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const Sh = {};
			var jh = (e = Sh, t) => {
				switch (t.type) {
					case gh.a: {
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
			const vh = {};
			var Th = (e = vh, t) => {
				switch (t.type) {
					case M_.b: {
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
					case M_.e: {
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
					case M_.f: {
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
					case M_.g:
					case M_.d: {
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
			const Dh = {};
			var wh = (e = Dh, t) => {
				switch (t.type) {
					case G_.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case G_.f: {
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
					case kr.n: {
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
			const Ph = {};
			var Ah = (e = Ph, t) => {
				switch (t.type) {
					case Wd.o: {
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
			const Ch = {};
			var Rh = (e = Ch, t) => {
				switch (t.type) {
					case Wd.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Wd.z: {
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
			const Nh = {};
			var Lh = (e = Nh, t) => {
				switch (t.type) {
					case Kc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Lp.b: {
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
			const kh = [];
			var xh = (e = kh, t) => {
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
			const Uh = {};
			var Mh = (e = Uh, t) => {
					switch (t.type) {
						case d_.d:
						case is.B:
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
				Fh = Object(j.c)({
					about: u_,
					api: sE,
					appliedFilters: dE,
					byCategory: uE,
					carousel: pE,
					communityInfo: fE,
					crosspostable: IE,
					duplicates: jE,
					gov: NE,
					models: GE,
					moderated: QE,
					notificationSettings: $E,
					onboarding: zE,
					powerupRecentSupporters: JE,
					powerups: eh,
					powerupsEmojis: nh,
					powerupTopSupporters: oh,
					productOffers: uh,
					products: ph,
					progressModule: mh,
					questions: Oh,
					rankings: Eh,
					rankingsPageInfo: Ih,
					related: jh,
					rules: Th,
					settings: wh,
					similar: Ah,
					survey: Rh,
					topContent: Lh,
					trending: xh,
					unavailableModels: Mh
				});
			const Gh = {};
			var Bh = Object(tf.a)((e = Gh, t) => {
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
						case ai.o: {
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
				}, Gh),
				qh = Object(j.c)({
					data: Bh
				}),
				Vh = r("./node_modules/lodash/values.js"),
				Hh = r.n(Vh);
			const Wh = [];
			var Qh = (e = Wh, t) => {
				switch (t.type) {
					case Bu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Uu(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case je.u: {
						const {
							multireddits: e
						} = t.payload;
						return Hh()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Bu.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case je.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var Kh = (e = null, t) => {
				switch (t.type) {
					case Bu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Bu.b:
					case Bu.c:
						return null;
					default:
						return e
				}
			};
			var $h = (e = !1, t) => {
				switch (t.type) {
					case Bu.b:
					case Bu.c:
						return !0;
					case Bu.a:
						return !1;
					default:
						return e
				}
			};
			var Yh = (e = !1, t) => {
					switch (t.type) {
						case Bu.b:
							return !0;
						case Bu.c:
						case Bu.a:
							return !1;
						default:
							return e
					}
				},
				zh = Object(j.c)({
					errors: Kh,
					fetched: $h,
					pending: Yh
				});
			const Xh = [];
			var Jh = (e = Xh, t) => {
				switch (t.type) {
					case Bu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case Bu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Jf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Uu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Bu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Jf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const Zh = [];
			var eI = (e = Zh, t) => {
				switch (t.type) {
					case Bu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case Bu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Jf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Uu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case Bu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Jf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const tI = [],
				rI = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var sI = (e = tI, t) => {
					switch (t.type) {
						case je.u: {
							const {
								multireddits: r
							} = t.payload, s = Hh()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(rI(r));
							return Lu()(e, s) ? e : s
						}
						case Te.b: {
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
								d = xu()(e, c).sort(rI(o));
							return Lu()(e, d) ? e : d
						}
						case Bu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(rI(n)) : e.filter(e => e !== s)
						}
						case je.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case je.g:
						case je.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, n = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(rI(n))
						}
						default:
							return e
					}
				},
				nI = r("./node_modules/lodash/difference.js"),
				aI = r.n(nI);
			const cI = [];
			var oI = (e = cI, t) => {
				switch (t.type) {
					case Mu.n: {
						const {
							profileOrder: r
						} = t.payload;
						return fb()([...e, ...r])
					}
					case Bu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case Bu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === Jf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? fb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : aI()(e, c)
					}
					default:
						return e
				}
			};
			const dI = [];
			var iI = (e = dI, t) => {
					switch (t.type) {
						case Mu.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return fb()([...e, ...r])
						}
						case Bu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case Bu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === Jf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? fb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : aI()(e, c)
						}
						default:
							return e
					}
				},
				uI = Object(j.c)({
					api: zh,
					favoriteMultiOrder: Qh,
					favoriteProfileOrder: Jh,
					favoriteSubredditOrder: eI,
					multiredditOrder: sI,
					profileOrder: oI,
					subredditOrder: iI
				}),
				lI = r("./src/reddit/actions/survey/constants.ts");
			var pI = (e = null, t) => {
				switch (t.type) {
					case lI.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var bI = (e = 1, t) => {
				switch (t.type) {
					case lI.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var fI = (e = !1, t) => {
				switch (t.type) {
					case lI.b:
						return !e;
					default:
						return e
				}
			};
			var mI = (e = !0, t) => {
					switch (t.type) {
						case lI.i:
							return !e;
						default:
							return e
					}
				},
				yI = Object(j.c)({
					activeDemoTrigger: pI,
					demoTriggerThreshold: bI,
					isDemoEnabled: fI,
					isSampleFactorEnabled: mI
				});
			var OI = (e = !1, t) => {
					switch (t.type) {
						case $t.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				_I = r("./src/reddit/actions/tags/constants.ts");
			const EI = {
				pending: !1,
				error: !1
			};
			var hI = (e = EI, t) => {
				switch (t.type) {
					case _I.l:
						return {
							...e, pending: !0
						};
					case _I.m:
						return {
							error: !1, pending: !1
						};
					case _I.k:
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
					case _I.o:
						return {
							...e, pending: !0
						};
					case _I.p:
						return {
							error: !1, pending: !1
						};
					case _I.n:
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
			var jI = (e = SI, t) => {
				switch (t.type) {
					case _I.t:
						return {
							...e, pending: !0
						};
					case _I.s:
					case _I.r:
					case _I.e:
					case _I.j:
						return {
							error: !1, pending: !1
						};
					case _I.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const vI = {
				pending: !1,
				error: !1
			};
			var TI = (e = vI, t) => {
				switch (t.type) {
					case _I.v:
						return {
							...e, pending: !0
						};
					case _I.w:
						return {
							error: !1, pending: !1
						};
					case _I.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const DI = {
				pending: !1,
				error: !1
			};
			var wI = (e = DI, t) => {
					switch (t.type) {
						case _I.g:
							return {
								...e, pending: !0
							};
						case _I.h:
							return {
								error: !1, pending: !1
							};
						case _I.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				PI = Object(j.c)({
					create: hI,
					deleteTag: gI,
					fetch: jI,
					update: TI,
					updatePrimaryTag: wI
				});
			const AI = {
				global: [],
				recommendedGlobal: []
			};
			var CI = (e = AI, t) => {
					switch (t.type) {
						case _I.w:
						case _I.r:
						case _I.e:
						case _I.j: {
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
				RI = r("./node_modules/lodash/uniqWith.js"),
				NI = r.n(RI),
				LI = r("./src/reddit/models/Option/index.ts");
			const kI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var xI = (e = kI, t) => {
					switch (t.type) {
						case _I.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: NI()([...e.selectedOptions || [], {
									...r
								}], LI.a)
							}
						}
						case _I.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(LI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case _I.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case _I.a: {
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
				UI = r("./src/reddit/helpers/tags/index.ts");
			const MI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var FI = (e = MI, t) => {
					switch (t.type) {
						case _I.j: {
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
						case _I.w:
						case _I.s:
						case _I.r: {
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
									[o]: Object(UI.a)(a[o] || {})
								}
							}
						}
						case _I.p: {
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
						case _I.e: {
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
						case _I.h: {
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
				GI = r("./src/reddit/reducers/tags/selected/index.ts"),
				BI = Object(j.c)({
					api: PI,
					availableGlobalTagOrder: CI,
					models: FI,
					selected: GI.b,
					creation: xI
				}),
				qI = r("./src/reddit/actions/redditEmbed.ts"),
				VI = r("./src/reddit/actions/theme.ts"),
				HI = r("./src/reddit/actions/users.ts"),
				WI = r("./src/reddit/models/Theme/index.ts");
			const QI = {
				current: WI.c,
				cached: {}
			};
			var KI = (e = QI, t) => {
					switch (t.type) {
						case VI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? WI.b : WI.c,
								cached: {}
							}
						}
						case Lr.a:
						case Lr.b:
						case Lr.h:
						case Lr.i:
						case Lr.f:
						case Lr.j:
						case ve.e:
						case ve.h:
						case G.a:
						case G.e:
						case G.b:
						case G.f:
						case G.d:
						case G.h:
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case Te.b:
						case Te.a:
						case ge.f:
						case qI.b:
						case K.i:
						case Re.g:
						case H.c:
						case kr.j:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED:
						case HI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: WI.b,
									cached: {}
								} : {
									current: WI.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
						case we.a:
						case we.b:
						case we.d:
						case we.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: WI.b,
								cached: {}
							} : {
								current: WI.c,
								cached: {}
							} : e
						}
						case F.h:
						case F.j:
						case F.i:
						case F.g:
						case F.f:
						case F.n:
						case F.m:
						case F.p:
						case F.q:
						case F.w:
						case F.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: WI.b,
									cached: {}
								} : {
									current: WI.c,
									cached: {}
								}
							}
							return e;
						case kr.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: WI.b,
								cached: {}
							} : {
								current: WI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: WI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: WI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				$I = r("./src/reddit/actions/toaster.ts");
			const YI = [];
			var zI = (e = YI, t) => {
					switch (t.type) {
						case $I.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case $I.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				XI = r("./src/reddit/actions/tooltip.ts"),
				JI = r("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var ZI = (e = null, t) => {
					switch (t.type) {
						case XI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case XI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case XI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case XI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case XI.d:
						case u.b:
						case wo.b:
						case wo.c:
						case wo.a:
							return t.type === u.b && e === JI.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				eg = r("./src/reddit/actions/tracing.ts");
			const tg = {
				traceId: void 0
			};
			var rg = (e = tg, t) => {
					switch (t.type) {
						case eg.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				sg = r("./src/lib/asyncActions/index.ts"),
				ng = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const ag = Object(sg.c)(ng.c.requestedActionType, ng.c.succeededActionType, ng.c.failedActionType),
				cg = Object(sg.c)(ng.a.requestedActionType, ng.a.succeededActionType, ng.a.failedActionType),
				og = Object(sg.c)(ng.d.requestedActionType, ng.d.succeededActionType, ng.d.failedActionType);
			var dg = Object(j.c)({
					load: ag,
					execute: cg,
					send: og
				}),
				ig = r("./src/reddit/actions/tracking.ts");
			const ug = {};
			var lg = (e = ug, t) => {
					switch (t.type) {
						case ig.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ig.b: {
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
				pg = Object(j.c)({
					reCaptchaEnterprise: dg,
					viewportDataLoaded: lg
				}),
				bg = r("./src/reddit/actions/trafficStats/constants.ts");
			var fg = (e = !1, t) => {
				switch (t.type) {
					case bg.c:
						return !0;
					case bg.b:
					case bg.a:
						return !1;
					default:
						return e
				}
			};
			var mg = (e = null, t) => {
					switch (t.type) {
						case bg.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case bg.c:
							return null;
						default:
							return e
					}
				},
				yg = Object(j.c)({
					pending: fg,
					trafficStats: mg
				});
			var Og = (e = null, t) => {
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
			var _g = (e = !1, t) => {
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
				Eg = Object(j.c)({
					error: Og,
					pending: _g
				});
			var hg = (e = null, t) => {
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
			var Ig = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var gg = (e = null, t) => {
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
				Sg = Object(j.c)({
					api: Eg,
					contentId: hg,
					initialRecipient: Ig,
					publicAddress: gg
				}),
				jg = Object(j.c)({
					communityPoints: Sg
				}),
				vg = r("./src/reddit/actions/search/trending.ts");
			const Tg = {};
			var Dg = (e = Tg, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case vg.a: {
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
				wg = Object(j.c)({
					models: Dg
				});
			var Pg = r("./src/reddit/routes/premium/index.ts");
			const Ag = {};
			var Cg = (e = Ag, t) => {
					switch (t.type) {
						case Tm.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = Pg.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Rg = r("./src/reddit/actions/upload.ts"),
				Ng = r("./src/reddit/models/Upload/index.ts");
			const Lg = {};
			var kg = (e = Lg, t) => {
					switch (t.type) {
						case Rg.d: {
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
									status: Ng.a.PENDING
								}
							}
						}
						case Rg.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Ng.a.UPLOADING
								}
							}
						}
						case Rg.c: {
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
						case Rg.e: {
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
						case Rg.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Ng.a.SUCCESS,
									url: s
								}
							}
						}
						case Rg.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Ng.a.FAILED,
									error: s
								}
							}
						}
						case Rg.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Ng.a.CANCELED
								}
							}
						}
						case Rg.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Fs()(e, r)
						}
						default:
							return e
					}
				},
				xg = r("./src/reddit/actions/upvotePrompt.ts");
			var Ug = (e = 0, t) => {
				switch (t.type) {
					case xg.a:
						return ++e;
					default:
						return e
				}
			};
			const Mg = {};
			var Fg = (e = Mg, t) => {
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
			Object(Ae.a)("INBOX__COUNT_UPDATE");
			var Gg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				Bg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				qg = r("./src/reddit/actions/sso/constants.ts"),
				Vg = r("./src/reddit/endpoints/profile/info.ts");
			const Hg = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Lu()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...Vg.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var Wg = Object(tf.a)((e = null, t) => {
				var r, n;
				switch (t.type) {
					case Gg.a:
					case Gg.b:
					case gy.b:
					case gy.c:
					case Lr.a:
					case Lr.b:
					case Lr.f:
					case Lr.h:
					case Lr.i:
					case Lr.j:
					case ve.e:
					case ve.h:
					case ve.g:
					case je.q:
					case je.r:
					case G.a:
					case G.e:
					case G.b:
					case G.f:
					case ge.a:
					case ge.b:
					case Te.a:
					case Te.b:
					case W.SUBREDDIT_FAILED:
					case Mu.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case we.e:
					case we.d:
					case we.b:
					case we.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case H.a:
					case H.c:
					case De.PAGE_LOADED:
					case Gs.PAGE_LOADED:
					case Re.e:
					case Re.g:
					case qI.a:
					case qI.b:
					case kr.j:
					case Bg.b:
					case HI.c:
					case Gd.TOPIC_DATA_LOADED:
						return Hg(e, t.payload.account);
					case HI.o:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case F.h:
					case F.e:
					case F.l:
					case F.o:
					case F.u: {
						const {
							response: r
						} = t.payload;
						return r ? Hg(e, r.account) : e
					}
					case HI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case kr.l:
					case kr.k: {
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
						return r.toLowerCase() !== (e && Object(Y.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...Vg.a,
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
					case Cl.n: {
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
					case qg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case qg.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Uo.c: {
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
					case il.a:
					case il.b: {
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
					case HI.l: {
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
			var Qg = (e = null, t) => {
				switch (t.type) {
					case HI.n:
					case HI.o:
						return null;
					case HI.m:
						return t.payload;
					default:
						return e
				}
			};
			var Kg = (e = !1, t) => {
					switch (t.type) {
						case HI.n:
							return !0;
						case HI.o:
						case HI.m:
							return !1;
						default:
							return e
					}
				},
				$g = Object(j.c)({
					error: Qg,
					pending: Kg
				}),
				Yg = Object(j.c)({
					api: $g
				});
			var zg = (e = !1, t) => {
				switch (t.type) {
					case HI.j:
						return !0;
					default:
						return e
				}
			};
			var Xg = (e = !1, t) => {
					switch (t.type) {
						case HI.i:
							return !0;
						case HI.j:
						case HI.h:
							return !1;
						default:
							return e
					}
				},
				Jg = Object(j.c)({
					pending: Xg,
					emailSent: zg
				}),
				Zg = Object(j.c)({
					api: Jg
				}),
				eS = Object(j.c)({
					changeEmail: Yg,
					sendResetEmail: Zg
				}),
				tS = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const rS = {};
			var sS = (e = rS, t) => {
				switch (t.type) {
					case yt.f:
						return {
							...e, new: tS.a.pending
						};
					case yt.d:
						return {
							...e, new: tS.a.error
						};
					case yt.e:
						return {
							...e, new: tS.a.waitingForRequest
						};
					case yt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.pending
						}
					}
					case yt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.error
						}
					}
					case yt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const nS = [];
			var aS = (e = nS, t) => {
					switch (t.type) {
						case yt.e:
							return [t.payload, ...e];
						case yt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				cS = Object(j.c)({
					api: sS,
					data: aS
				}),
				oS = r("./src/reddit/actions/chat/constants.ts"),
				dS = r("./src/reddit/actions/chat/userSettings.ts");
			const iS = oS.a.anybody;
			var uS = (e = iS, t) => {
					switch (t.type) {
						case dS.a:
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
				lS = Object(j.c)({
					invitePolicy: uS
				});
			const pS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var bS = (e = null, t) => {
				switch (t.type) {
					case De.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Lu()(e, r) ? e : {
							...e,
							...r
						}
					}
					case is.P: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return pS(e, r)
					}
					case Yr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return pS(e, r.length)
					}
					case Yr.c:
					case Yr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return pS(e, r)
					}
					default:
						return e
				}
			};
			const fS = {};
			var mS = (e = fS, t) => {
					switch (t.type) {
						case cc.a: {
							const e = t.payload.experimentVariants;
							return ml(e)
						}
						default:
							return e
					}
				},
				yS = r("./src/reddit/actions/global/constants.ts");
			const OS = {};
			var _S = (e = OS, t) => {
					switch (t.type) {
						case yS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				ES = Object(j.c)({
					byName: mS,
					localPersisted: _S
				}),
				hS = r("./src/reddit/actions/googleOneTap/index.ts");
			var IS = (e = !1, t) => {
				switch (t.type) {
					case hS.a:
						return !0;
					default:
						return e
				}
			};
			var gS = (e = !1, t) => {
				switch (t.type) {
					case kr.f:
						return !0;
					case kr.e:
						return !1;
					default:
						return e
				}
			};
			var SS = (e = "", t) => {
				switch (t.type) {
					case kr.j:
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
			var vS = (e = jS, t) => {
					switch (t.type) {
						case HI.b:
							return t.payload;
						default:
							return e
					}
				},
				TS = r("./src/reddit/actions/notifications/constants.ts"),
				DS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var wS = (e = null, t) => {
				switch (t.type) {
					case DS.a:
					case DS.d:
					case TS.a:
						return t.payload && t.payload.error || null;
					case DS.c:
					case DS.f:
					case DS.a:
					case TS.c:
					case TS.b:
						return null;
					default:
						return e
				}
			};
			var PS = (e = !1, t) => {
				switch (t.type) {
					case TS.c:
						return !1;
					case TS.b:
						return !0;
					default:
						return e
				}
			};
			var AS = (e = !1, t) => {
					switch (t.type) {
						case TS.c:
							return !0;
						case TS.b:
						case TS.a:
							return !1;
						default:
							return e
					}
				},
				CS = Object(j.c)({
					error: wS,
					loaded: PS,
					pending: AS
				});
			var RS = (e = null, t) => {
				switch (t.type) {
					case TS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case TS.f:
					case TS.e:
						return null;
					default:
						return e
				}
			};
			var NS = (e = !1, t) => {
				switch (t.type) {
					case TS.f:
						return !1;
					case TS.e:
						return !0;
					default:
						return e
				}
			};
			var LS = (e = !1, t) => {
					switch (t.type) {
						case TS.f:
							return !0;
						case TS.e:
						case TS.d:
							return !1;
						default:
							return e
					}
				},
				kS = Object(j.c)({
					error: RS,
					loaded: NS,
					pending: LS
				}),
				xS = Object(j.c)({
					getPreferences: CS,
					setPreferences: kS
				});
			const US = {
				byId: {},
				allIds: []
			};
			var MS = (e = US, t) => {
				switch (t.type) {
					case DS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case DS.g: {
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
			const FS = {
				byId: {},
				allIds: []
			};
			var GS = (e = FS, t) => {
					switch (t.type) {
						case DS.b: {
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
				BS = Object(j.c)({
					sections: GS,
					rows: MS
				}),
				qS = r("./src/lib/notifications/constants.ts");
			var VS = (e = !1, t) => {
				switch (t.type) {
					case qS.j:
						return !0;
					case qS.b:
					case qS.d:
					case qS.e:
						return !1;
					default:
						return e
				}
			};
			const HS = {
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
			var WS = (e = HS, t) => {
				switch (t.type) {
					case TS.b:
					case TS.f:
					case TS.d: {
						const {
							preferences: r
						} = t.payload;
						return _a()(r) ? e : r
					}
					default:
						return e
				}
			};
			const QS = {
				byId: {},
				allIds: []
			};
			var KS = (e = QS, t) => {
				switch (t.type) {
					case DS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case DS.g: {
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
			const $S = {
				byId: {},
				allIds: []
			};
			var YS = (e = $S, t) => {
					switch (t.type) {
						case DS.e: {
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
				zS = Object(j.c)({
					sections: YS,
					rows: KS
				}),
				XS = Object(j.c)({
					api: xS,
					emailSettingsLayout: BS,
					isNotificationPromptVisible: VS,
					preferences: WS,
					pushSettingsLayout: zS
				});
			const JS = {};
			var ZS = (e = JS, t) => {
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
			const ej = {},
				tj = (e, t) => `${e}_${t||new Date}`;
			var rj = (e = ej, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[tj(t.subredditInfo.id, t.allocatedAt)]: t
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
							[tj(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = tj(r, n),
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
						} = t.payload, n = tj(r, s), a = e[n];
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
			var sj = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Fs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Fs()({
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
			var nj, aj = (e = !1, t) => {
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
				cj = Object(j.c)({
					allocationByKey: rj,
					data: sj,
					fetched: aj
				}),
				oj = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(nj || (nj = {}));
			const dj = {
				status: nj.UNFETCHED,
				subscriptions: []
			};
			var ij = (e = dj, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: nj.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: nj.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: nj.FAILED
						};
					default:
						return e
				}
			};
			var uj = (e = "", t) => {
				switch (t.type) {
					case HI.d:
						return t.payload;
					default:
						return e
				}
			};
			var lj = (e = null, t) => {
				switch (t.type) {
					case Oy.a:
					case Oy.b:
					case Oy.c:
					case Oy.e:
						return t.payload;
					case Oy.d:
						return null;
					default:
						return e
				}
			};
			var pj = (e = !1, t) => {
				switch (t.type) {
					case Oy.f:
						return !0;
					default:
						return e
				}
			};
			var bj = (e = "", t) => {
				switch (t.type) {
					case HI.k:
						return t.payload;
					default:
						return e
				}
			};
			var fj = (e = null, t) => {
				switch (t.type) {
					case cc.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var mj = (e = null, t) => {
					switch (t.type) {
						case cc.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				yj = Object(j.c)({
					isEmployee: fj,
					isLoggedIn: mj
				});
			var Oj = (e = null, t) => {
					switch (t.type) {
						case kr.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Lu()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				_j = r("./src/reddit/actions/userWhitelist.ts");
			const Ej = {};
			var hj = (e = Ej, t) => {
				switch (t.type) {
					case _j.e:
						return {
							...e, new: tS.a.pending
						};
					case _j.d:
						return {
							...e, new: tS.a.error
						};
					case _j.f:
						return {
							...e, new: tS.a.waitingForRequest
						};
					case _j.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.pending
						}
					}
					case _j.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.error
						}
					}
					case _j.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: tS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Ij = [];
			var gj = (e = Ij, t) => {
					switch (t.type) {
						case _j.f:
							return [t.payload, ...e];
						case _j.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Sj = Object(j.c)({
					api: hj,
					data: gj
				}),
				jj = Object(j.c)({
					account: Wg,
					accountSettings: eS,
					blocked: cS,
					chatSettings: lS,
					drafts: bS,
					experiments: ES,
					googleOneTapEnabled: IS,
					isCustomizeFlyoutShowing: gS,
					topContentDismissalPrefsSet: Oj,
					language: SS,
					loid: vS,
					notificationPrefs: XS,
					ownedBadges: ZS,
					powerups: cj,
					prefs: oj.c,
					productOfferSubscriptions: ij,
					reddaid: uj,
					session: lj,
					sessionRefreshFailed: pj,
					sessionTracker: bj,
					temporaryGQL: yj,
					wallets: Fg,
					whitelist: Sj
				});
			var vj = (e = null, t) => {
				switch (t.type) {
					case Bg.a:
						return t.payload || null;
					case Bg.b:
					case Bg.c:
						return null;
					default:
						return e
				}
			};
			var Tj = (e = !1, t) => {
				switch (t.type) {
					case Bg.c:
						return !0;
					case Bg.b:
					case Bg.a:
						return !1;
					default:
						return e
				}
			};
			var Dj = (e = !1, t) => {
				switch (t.type) {
					case Bg.b:
						return !0;
					case Bg.a:
					case Bg.c:
						return !1;
					default:
						return e
				}
			};
			var wj = (e = !1, t) => {
					switch (t.type) {
						case Bg.b:
							return t.payload.userDataExportEligibility;
						case Bg.a:
						case Bg.c:
							return !1;
						default:
							return e
					}
				},
				Pj = Object(j.c)({
					error: vj,
					pending: Tj,
					success: Dj,
					userDataExportEligibility: wj
				}),
				Aj = Object(j.c)({
					userDataRequestPageApi: Pj
				});
			const Cj = {};
			var Rj = (e = Cj, t) => {
				switch (t.type) {
					case HI.g:
					case HI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case HI.e: {
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
			var Nj = (e = !1, t) => {
					switch (t.type) {
						case HI.g:
							return !0;
						case HI.f:
						case HI.e:
							return !1;
						default:
							return e
					}
				},
				Lj = Object(j.c)({
					error: Rj,
					pending: Nj
				});
			const kj = {};
			var xj = (e = kj, t) => {
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
			const Uj = {},
				Mj = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Lu()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var Fj = (e = Uj, t) => {
					switch (t.type) {
						case HI.f: {
							const {
								data: r
							} = t.payload;
							return Mj(e, r)
						}
						case Mu.k: {
							const {
								user: r
							} = t.payload;
							return Mj(e, {
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
							return c ? Mj(e, {
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
								...Vg.a,
								...s
							};
							return Mj(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case kr.l:
						case kr.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? Mj(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case HI.c:
							const r = t.payload.account;
							if (!r || !e) return e;
							const s = Object(Y.e)(r).toLowerCase(),
								n = e[s];
							return n ? Mj(e, {
								[s]: {
									...n,
									accountIcon: r.accountIcon,
									snoovatarFullBodyAsset: r.snoovatarFullBodyAsset
								}
							}) : e;
						case kr.n: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? Mj(e, {
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
				Gj = r("./src/reddit/actions/usernameAvailable.ts");
			const Bj = {};
			var qj = (e = Bj, t) => {
				switch (t.type) {
					case Gj.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Gj.b.Available
						}
					}
					case Gj.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Gj.b.Error
						}
					}
					case Gj.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Gj.b.Pending
						}
					}
					case Gj.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Gj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Vj = {};
			var Hj = (e = Vj, t) => {
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
			var Wj = (e = !1, t) => {
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
				Qj = Object(j.c)({
					allocationByKey: Hj,
					fetched: Wj
				});
			var Kj = (e = null, t) => {
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
			var $j = (e = !1, t) => {
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
				Yj = Object(j.c)({
					error: Kj,
					pending: $j
				});
			var zj = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Xj = {};
			var Jj = (e = Xj, t) => {
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
			const Zj = {};
			var ev = (e = Zj, t) => {
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
							return Fs()(e, [r])
						}
						default:
							return e
					}
				},
				tv = Object(j.c)({
					api: Yj,
					currentPostId: zj,
					currentRank: Jj,
					list: ev
				}),
				rv = Object(j.c)({
					api: Lj,
					appliedBadges: xj,
					models: Fj,
					nameAvailable: qj,
					topAwarders: tv,
					powerups: Qj
				});
			const sv = {};
			var nv = (e = sv, t) => {
					var r, s, n;
					switch (t.type) {
						case G.b:
						case G.f:
						case W.SUBREDDIT_LOADED:
						case K.i:
						case H.c:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED: {
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
				av = r("./src/reddit/actions/widgets/constants.ts");
			const cv = {};
			var ov = (e = cv, t) => {
					var r;
					switch (t.type) {
						case G.b:
						case G.f:
						case H.c:
						case K.i:
						case W.SUBREDDIT_LOADED:
						case De.PAGE_LOADED: {
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
						case av.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case av.h: {
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
				dv = r("./src/reddit/helpers/widgets/index.tsx");
			const iv = {};
			var uv = (e = iv, t) => {
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
					case av.b: {
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
								styles: Object(dv.g)()
							}
						}), t
					}
					case av.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case av.i:
					case av.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case av.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case G.b:
					case G.f:
					case W.SUBREDDIT_LOADED:
					case K.i:
					case H.c:
					case De.PAGE_LOADED:
					case Gs.PAGE_LOADED: {
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
					case Bu.h: {
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
					case G_.f: {
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
			const lv = {};
			var pv = (e = lv, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case G.f:
					case K.i:
					case De.PAGE_LOADED: {
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
			const bv = {};
			var fv = (e = bv, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED: {
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
						case av.e:
						case av.b: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgets.layout.sidebar.order
							}
						}
						case av.f: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgetIds
							}
						}
						case av.g: {
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
						case av.h: {
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
						case W.SUBREDDIT_LOADED:
						case H.c:
						case K.i:
						case De.PAGE_LOADED:
						case Gs.PAGE_LOADED: {
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
				mv = Object(j.c)({
					idCardIds: nv,
					menuIds: ov,
					models: uv,
					moderatorIds: pv,
					sidebar: fv
				}),
				yv = r("./src/reddit/actions/wrappedReddit/constants.ts");
			const Ov = {
				isImageLoading: !1,
				isCardsLoading: !1,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				subreddits: []
			};
			const _v = {
				accountManagerModalData: a,
				activeModal: m,
				ads: h,
				apiRequestState: S,
				appBadges: C,
				authorFlair: Z,
				awards: Qe,
				badges: ot,
				blockedRedditors: mt,
				blockUser: gt,
				brandSafety: jt,
				chat: cr,
				claimGold: fr,
				commentsListTruncated: yr,
				communityFlairs: Er,
				connection: gr,
				contentControls: Nr,
				contentGate: Ur,
				continueThreads: Gr,
				correlationId: (e = Vr, t) => {
					switch (t.type) {
						case Br.a: {
							const {
								correlationId: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case Br.b: {
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
				creations: da,
				dashboard: la,
				discoveryUnits: Ta,
				dismissedTruncationList: Pa,
				economics: Xa,
				emojis: ac,
				experimentOverrides: uc,
				externalAccount: Fc,
				featureFlags: Qc,
				focusedVerticals: ao,
				fontFiles: oo,
				gild: Io,
				header: Ao,
				htmlResponseStreaming: Co,
				imageUploads: Lo,
				interceptedAction: xo,
				isChangeUsernameTooltipShowing: Mo,
				isEmailVerificationTooltipShowing: Go,
				isModeratorWithPostPerms: qo,
				jsApi: Wo,
				leaderboard: ed,
				listings: yi,
				live: Ii,
				mediaEmbed: (e = Si, t) => {
					switch (t.type) {
						case gi.a:
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
				mediaGalleries: wi,
				mediaPlayback: Ci,
				meta: Li,
				moderatingSubreddits: Ui,
				modListingPage: Hi,
				modModeEnabled: Qi,
				moreComments: eu,
				multireddits: Ku,
				notificationBannerId: Yu,
				notificationsInbox: al,
				nps: dl,
				onboardingModal: bl,
				page: El,
				platform: Sl,
				postCollection: tp,
				polls: Vl,
				postFlair: op,
				posts: ef,
				postStickiedComments: nf,
				givePremium: To,
				products: hf,
				profileCommentsPage: kf,
				profilePrivatePage: Xf,
				profileModSettingsPage: Ff,
				profilePostsPage: Bf,
				profiles: Cm,
				promos: xm,
				publicAccessNetwork: my,
				recentSubreddits: Ey,
				recommendations: Iy,
				reportPage: Cy,
				reportRules: Ly,
				requestHost: ky,
				runTimeEnvVars: Uy,
				search: Yy,
				searchDiscoveryUnits: sO,
				seo: lO,
				shortcuts: hO,
				sidebarPromotedPosts: SO,
				streaming: CO,
				structuredStyles: zO,
				stylesheets: XO,
				subredditAutocomplete: c_,
				subreddits: Fh,
				subredditStickyPosts: qh,
				subscriptions: uI,
				survey: yI,
				tabBadged: OI,
				tags: BI,
				themes: KI,
				toaster: zI,
				tooltipId: ZI,
				tracing: rg,
				tracking: pg,
				trafficStats: yg,
				transfers: jg,
				trending: wg,
				trophies: Cg,
				uploads: kg,
				user: jj,
				userDataRequestPage: Aj,
				upvotePromptCountPerSess: Ug,
				users: rv,
				widgets: mv,
				wrappedReddit: (e = Ov, t) => {
					switch (t.type) {
						case yv.h:
							return {
								...e, shareCardWasOpened: !0
							};
						case yv.d:
							return {
								...e, isImageLoading: !1
							};
						case yv.e:
							return {
								...e, isImageLoading: !0
							};
						case yv.c:
							return {
								...e, isCardsLoading: !0
							};
						case yv.b: {
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
						case yv.a: {
							const {
								error: r
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: r
							}
						}
						case yv.f:
							return {
								...e, ...Ov
							};
						case yv.g: {
							const {
								index: r
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: r
							}
						}
						case yv.i: {
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
						name: n.Mb.PREMIUM,
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
					const r = Object(s.mb)(e, {
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
				return y
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
				m = {
					emojis: {},
					snoomojis: {}
				},
				y = (e, {
					subredditId: t
				}) => u(e)[t] || m,
				O = (e, t) => !!e.emojis.api.list.pending[t]
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.g
					}) === s.a.Enabled
				},
				c = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.m
					}) === s.Vc
				},
				o = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.n
					}) === s.Vc
				}
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
					experimentName: n.qb,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.W.Onetap,
				l = e => e === n.W.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.J, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(n.if)(t))
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
				return m
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "o", (function() {
				return v
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
				m = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.recurringPosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.recurringPosts.models[t][r]),
				y = (e, {
					subredditId: t,
					scheduledPostId: r,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || p)[r] || void 0
				},
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => y(e, {
					subredditId: t,
					scheduledPostId: r,
					type: a.f.standalonePosts
				}),
				_ = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = y(e, {
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
				j = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				v = e => e.posts.scheduledPosts.api.pendingUpdate,
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
					const r = Object(c.H)(e, t),
						s = Object(o.I)(e);
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
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"eba3db8414d9"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"c946fc6566ab"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.68f3bb5e8bc935af14d9.js.map