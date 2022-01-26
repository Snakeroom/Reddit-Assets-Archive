// https://www.redditstatic.com/desktop2x/Governance~Reddit.d34561a639ea497adef1.js
// Retrieved at 1/26/2022, 12:00:05 PM by Reddit Dataminer v1.0.0
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
								...Object(o.m)(t)
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
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return C
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "q", (function() {
				return B
			})), r.d(t, "j", (function() {
				return G
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
				return J
			})), r.d(t, "n", (function() {
				return X
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
				T = r("./src/reddit/selectors/moderatingComments.ts"),
				v = r("./src/reddit/selectors/moderatorPermissions.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/comment/constants.ts");
			const P = {},
				C = Object(c.a)(w.o),
				A = e => async (t, r, {
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
					if (t(C({
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
							buttonAction: A(e)
						}))
					} else t(C({
						[e]: {
							isSaved: a.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, k = e => async (t, r) => {
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
				}, L = (e, t) => async (r, s) => {
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
						await r(Object(d.b)(u, p)), Object(v.h)(s(), {
							subredditId: i.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(M({
						moreCommentsItem: c,
						...O.error
					}))
				}, B = Object(f.a)(y.b, I.a.upvoted), G = Object(f.a)(y.b, I.a.downvoted), q = Object(c.a)(w.j), V = Object(c.a)(w.i), H = Object(c.a)(w.e), W = Object(c.a)(w.f), Q = (Object(c.a)(w.c), Object(c.a)(w.d), ({
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
						d = Object(T.b)(a, {
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
						d = Object(T.b)(c, {
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
				})), J = Object(c.a)(w.a), X = Object(c.a)(w.E), Z = Object(c.a)(w.b), ee = Object(c.a)(w.u)
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
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "e", (function() {
				return _
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
				m = Object(s.a)(b),
				y = Object(s.a)(p),
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
				}, _ = (e, t) => async (r, s, {
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
					r(m({
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
				return T
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return B
			})), r.d(t, "l", (function() {
				return G
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
				T = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				v = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				D = Object(p.a)(T),
				w = Object(p.a)(v),
				P = "GET_ALL_EMOJIS_PENDING",
				C = "GET_ALL_EMOJIS_LOADED",
				A = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				N = Object(p.a)(C),
				k = Object(p.a)(A),
				L = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(L),
				U = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: B(e)
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
				}, B = e => async (t, r, s) => {
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
							t(j(i)), t(G(a))
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
				}, G = e => async (t, r, {
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
					} else t(k({
						subredditId: e,
						error: c.error
					}))
				}, q = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(G(e))
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
				T = Object(n.a)(_.j),
				v = Object(n.a)(_.k),
				D = Object(n.a)(_.q),
				w = Object(n.a)(_.r),
				P = Object(n.a)(_.s),
				C = Object(n.a)(_.t),
				A = Object(n.a)(_.u),
				R = Object(n.a)(_.v),
				N = Object(n.a)(_.w),
				k = Object(n.a)(_.x),
				L = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: a
				}) => {
					let c, d = s().polls.models[e];
					if (r(T({
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
						} else r(v(c.body));
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
					p.ok ? (r(C({
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
					n.ok ? t(N(n.body)) : t(A({
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
				return T
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "x", (function() {
				return P
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
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				v = 10,
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
				return T
			})), r.d(t, "e", (function() {
				return v
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
			}, T = () => async e => e(i.m({
				title: c.b()
			})), v = e => async (t, s) => {
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
				return T
			})), r.d(t, "e", (function() {
				return A
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
				T = "UPDATE_CHAT_SETTINGS__LOADED",
				v = Object(d.a)(g),
				D = Object(d.a)(S),
				w = Object(d.a)(j),
				P = Object(d.a)(T),
				C = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(w(s)), !1)
				}, A = e => async (t, r, {
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
							d = !Object(h.a)(r(), n),
							i = Object(_.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(v(a));
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
					if (await n(C(e))) return [];
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
						subreddit: Object(y.hb)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(y.m)(e)
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
				return L
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return B
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
				...E.m(e),
				screen: E.Y(e),
				profile: E.P(e),
				subreddit: E.hb(e)
			});
			var g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Gold/Powerups/index.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				T = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/gold/powerups/index.ts"),
				D = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/actions/postCreation/constants.ts"),
				P = r("./src/reddit/actions/postCreation/general.ts");
			const C = Object(d.a)(w.u),
				A = Object(d.a)(w.v),
				R = Object(d.a)(w.t),
				N = e => async (t, r) => {
					t(C());
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
					t(a ? R(a.error) : A())
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
					let j = null,
						T = !1,
						w = !1,
						P = !1;
					const C = e => {
						if (!P && r && T) {
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
										...E.c(e),
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
						T = !0, Object(u.k)(l.id, () => {
							C(!0)
						});
						const {
							error: m,
							metadata: _
						} = await async function(e, t, r) {
							const n = r && r.allowedPostTypes,
								a = r && r.name,
								o = await Object(O.g)(t) || t.type,
								d = Object(O.b)(t) || void 0;
							if (!d) return k("UNSUPPORTED_BROWSER");
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
									return k(c.T, e)
								}
								if ("image/gif" === o) {
									if (t.size > c.Z) return k(c.L)
								} else if (t.size > c.bb) return k(c.R);
								const e = await Object(y.a)(d);
								i.width = e.width, i.height = e.height
							} else if (o.startsWith("video/")) {
								const o = !(null == r || !r.id) && Object(v.p)(e, {
										subredditId: r.id,
										benefit: S.a.HdVideo
									}),
									l = o ? 2 * c.fb : c.fb;
								if (t.size > l) return k(c.mc);
								let p;
								try {
									p = await Object(O.h)(d, !0)
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
					}, !0)), C(!1), o().uploads[t] || null
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
							kind: T.b.Error,
							text: Object(o.a)(e)
						}))), u > 0 && r(Object(i.f)({
							duration: i.a,
							kind: T.b.Error,
							text: s.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [s.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, B = (e, t) => async (r, n) => {
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
							kind: T.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(O.l)(e.type)) && r(Object(i.f)({
							kind: T.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(O.k)(e.type));
						const e = Math.max(0, l.b - o.length);
						f.length > e && (r(Object(i.f)({
							kind: T.b.Error,
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
				T = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function D(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const w = e => {
					switch (e.kind) {
						case T.p.CROSSPOST:
							return T.p.CROSSPOST;
						case T.p.LINK:
							return T.p.LINK;
						case T.p.POLL:
							return T.p.POLL;
						case T.p.MEDIA:
							return e.makeGif ? T.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				P = e => {
					switch (e.kind) {
						case T.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case T.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case T.p.LINK:
						case T.p.MEDIA:
							return {
								url: e.url
							};
						case T.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case T.p.POLL:
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
				C = e => {
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
						...e.kind !== T.p.POLL ? {
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
						...e.kind === T.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === T.p.MEDIA && e.makeGif ? {
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
							unlist: e.eventSchedule.submitTime === T.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				A = async (e, t) => {
					if (!e.ok) return Object(g.b)(e);
					const r = e.body.json.data;
					let n = r.url;
					n || t.kind !== T.p.MEDIA || (n = await ((e, t) => new Promise(r => {
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
				endpoint: Object(v.a)(Object(E.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: C(t)
			}).then(async e => await A(e, t));
			var N = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				k = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				L = r("./src/reddit/featureFlags/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				U = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				M = r("./src/reddit/helpers/trackers/postComposer.ts"),
				F = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				B = r("./src/reddit/models/User/index.ts"),
				G = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				q = r("./src/reddit/selectors/postCreations.ts"),
				V = r("./src/reddit/selectors/postDraft.ts"),
				H = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				W = r("./src/reddit/selectors/user.ts"),
				Q = r("./src/reddit/models/ScheduledPost/index.ts"),
				K = r("./src/reddit/actions/postCreation/constants.ts"),
				$ = r("./src/reddit/actions/postCreation/general.ts"),
				Y = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const z = Object(n.a)(K.w),
				J = Object(n.a)(K.P),
				X = Object(n.a)(K.o),
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
						if (e && e.thumbnail && !t[T.n]) return [{
							...e.thumbnail,
							uploadKey: T.n
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
						l = L.d.rteVideoPoster(c),
						p = ce(c),
						b = u === s.Vb.MEDIA;
					p && (l || b) && (await r(Y.f(p)), ce(n())) || (e === T.r.Draft ? await r(Object(i.r)(t.draftId)) : e === T.r.ScheduledPost && Object(H.r)(c) ? await r(de(t)) : e === T.r.ScheduledPost ? await r(ie(t)) : await r(ue(t)))
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
					}, _ = await Object(k.a)(s(), O);
					if (_.ok) return t(Object(u.e)({
						subredditId: d.id
					})), void t(Object(l.a)(ne(d.name), !1));
					const E = _.error;
					t(X(E))
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
					t(X(_))
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
					const I = u && L.d.spPolls(a);
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
										...Object(f.a)(C(t))
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
							}(n(), i, y) : u ? await ((e, t) => Object(m.a)(Object(O.a)(e, [_.a]), {
								endpoint: Object(v.a)(Object(E.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: C(t),
								type: "json"
							}).then(e => A(e, t)))(n(), {
								...i,
								kind: T.p.POLL,
								poll: y
							}) : i.kind === T.p.GALLERY ? await ((e, t) => Object(m.a)(Object(O.a)(e, [_.a]), {
								endpoint: Object(v.a)(Object(E.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: s.jb.POST,
								data: {
									...C(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => A(e, t)))(n(), i) : await R(n(), i)).ok) {
						const e = Object(W.k)(a),
							r = h.body;
						t(J({
							draftId: i.draftId,
							response: r
						})), I && t(Object(o.c)({
							poll: r.poll
						}));
						const s = Object(G.b)(a);
						i.kind !== T.p.LINK && i.kind !== T.p.RICH_TEXT && i.kind !== T.p.MARKDOWN || u || !s || t(Object(c.c)());
						const n = (r.path || `/user/${Object(B.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(d.subredditInvalidateListing)(i.destSubreddit.name)), t(Object(l.a)(n, !1))
					} else {
						if (u) {
							const e = h.error;
							t(Z(e))
						}
						const e = h.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(re()) : e.type === s.I.VALIDATION_ERROR ? t(ee(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(te(e)) : t(X(e))
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
				return C
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
				T = r("./src/reddit/selectors/meta.ts");
			const v = e => g.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				D = e => !!Object(j.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...a.d)),
					experimentName: b.ue
				}),
				w = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				A = e => u(e => p()([v, D, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(C.requested());
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
						})(s(), e), t(C.succeeded())
					} catch (n) {
						throw t(C.failed()), n
					}
				}),
				R = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				N = (e = d.a.PageLoad) => u(e => p()([v, D, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const a = r();
					try {
						await t((() => u(e => p()([v, D, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(w.requested());
							try {
								await d.b.loadScript(), e(w.succeeded())
							} catch (t) {
								throw e(w.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([v, D, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
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
						r && await t(A(r))
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
				return T
			})), r.d(t, "w", (function() {
				return v
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
				T = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => s.fbt._("Successfully edited scheduled post!", null, {
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
				return T
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return C
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
				T = Object(n.a)(a.h),
				v = (e, t) => {
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
					Object(d.f)(u, o) ? P(n, Object(i.e)(u.body.data), o) : v(n, o)
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
					Object(i.b)(t) ? e(h(t)) : Object(i.a)(t) ? e(g(t)) : Object(i.c)(t) ? e(I(t)) : v(e, r)
				}, C = (e, t) => async (r, n, a) => {
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
				return C
			})), r.d(t, "a", (function() {
				return A
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
				T = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/telemetry/index.ts");
			const D = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				w = "SUBREDDIT__CREATE_PENDING",
				P = "SUBREDDIT__CREATE_SUCCEEDED",
				C = "SUBREDDIT__CREATE_FAILED",
				A = "SUBREDDIT__CREATE_CLEARED",
				R = Object(a.a)(w),
				N = Object(a.a)(P),
				k = Object(a.a)(C),
				L = Object(a.a)(A),
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
					if (Object(T.j)(E)) return;
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
						Object(v.a)(Object(g.d)(D, e, a)(E)), t(N({
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
						await t(Object(s.b)(`${r.path}`)), f ? f === p.Xd.NewModule && t(Object(i.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(o.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(v.a)(Object(g.g)()(E))), Object(I.b)(I.a.SubredditCreation)
					} else P.error && Object(v.a)(Object(g.h)(P.error.type, h)(E)), t(k({
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
						t(k({
							subredditName: e,
							error: r
						})), r && Object(v.a)(Object(g.h)(r.type, e)(n))
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
					})), t(Object(n.A)());
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
				T = Object(o.a)(O),
				v = new Map,
				D = (e, t) => {
					const r = v.get(e) || [];
					r.push(t), v.set(e, r)
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
						const r = v.get(e);
						r && r.forEach(r => r(e, t)), v.delete(e)
					})(n.id, t), r(t ? T({
						key: e
					}) : j({
						key: e
					})))
				}, C = (e, t = !1) => (r, s) => {
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
							...Object(i.m)(e)
						}))(b))
					}));
					const j = [...g, Date.now()].slice(Math.max(g.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(i.m)(e)
					}))(b)), Object(d.Db)(), Object(d.Cb)(j), a(O()), r && r()
				}, m = e => async (t, r) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(i.m)(e)
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
				return k
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
				T = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = r("./src/lib/getShortenedLink.ts"),
				D = r("./src/reddit/components/FlairWrapper/index.tsx"),
				w = r("./node_modules/fbt/lib/FbtPublic.js"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = r("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				R = r.n(A);
			const N = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var k, L = Object(c.b)(N)((function(e) {
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
					})), t && a.a.createElement(C.a, {
						className: R.a.proposalExpiry,
						poll: t
					}))
				})),
				x = r("./src/reddit/components/SEOTitle/index.tsx"),
				U = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				F = r("./src/reddit/components/PostTitle/index.m.less"),
				B = r.n(F),
				G = r("./src/config.ts"),
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
			}(k || (k = {}));
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
						case k.ExtraLarge:
							i = B.a.ExtraLarge;
							break;
						case k.Large:
							i = B.a.Large;
							break;
						case k.Medium:
							i = B.a.Medium;
							break;
						case k.Small:
							i = B.a.Small;
							break;
						case k.ExtraSmall:
							i = B.a.ExtraSmall
					}
					return a.a.createElement("div", {
						className: Object(u.a)(B.a.Title, c, i, {
							[B.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(T.a)({
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
					className: Object(u.a)(e, B.a.styledLink, {
						[B.a.isVisitedEnabled]: !t
					})
				}), s),
				z = ({
					disableVisited: e,
					nowrap: t,
					className: r,
					children: s
				}) => a.a.createElement("div", {
					className: Object(u.a)(B.a.titleContainer, r, {
						[B.a.isNoWrap]: t,
						[B.a.isVisitedEnabled]: !e
					})
				}, s),
				J = Object(d.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: M.cb
				}),
				X = e => {
					const {
						post: t,
						subreddit: r
					} = e, {
						isSponsored: s
					} = t, n = Object(c.d)(), o = Object(q.a)(), d = Object(V.a)(p.gd) === p.nd.Enabled, u = Object(c.e)(U.b), l = e => {
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
					} = r, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, c = !t && !e.isCrosspost && e.size !== k.Large && !r.isSponsored && !(r.media && Object(S.H)(r.media)) && (r.source || r.media && (r.media.type === S.o.GIFVIDEO || r.media.type === S.o.IMAGE || r.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (c) return a.a.createElement(m.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: n
						}, Object(v.a)(r), !r.isSponsored && a.a.createElement(I.a, {
							name: "external_link",
							className: B.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== k.Large && e.size !== k.ExtraLarge) return a.a.createElement(m.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: n
					}, Object(v.a)(r), !r.isSponsored && a.a.createElement(I.a, {
						name: "external_link",
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class te extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${B.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(T.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(T.a)(this.props).titleText,Object(T.a)(this.props).body)};\n        }\n      `
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
						className: Object(u.a)(B.a.Component, e, o.id),
						ref: this.props.innerRef
					}, !d && m && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), !Object(j.b)(o) && a.a.createElement(X, K({}, this.props, {
						leftFlair: d ? p : void 0
					})), c && a.a.createElement(L, {
						className: B.a.pollMeta,
						pollId: c.id
					}), a.a.createElement(ee, this.props), y && a.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${G.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(b.fb)(),
					r = Object(b.w)(t),
					s = Object(H.a)(),
					n = Object(c.e)(n => J(n, {
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
			const T = Object(c.a)(f.b);

			function v({
				activeTooltipId: e,
				className: t,
				focusedItem: r,
				nightmode: s,
				recentSearch: c,
				searchOriginPage: p,
				indexOfItem: f,
				toggleTooltip: I,
				onClearSearchQuery: S,
				onRemoveRecentSearch: v,
				onUpdateSearchQuery: D,
				onSendSearchClickRecentEvent: w,
				onCloseDropdown: P
			}) {
				const {
					nsfwSessionSetting: C,
					refreshNsfwSessionSettingExpiryTime: A
				} = Object(m.c)(), R = Object(a.e)(h.db), N = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery, {
					url: k,
					qs: L
				} = Object(O.a)({
					includeNsfwResults: R && C,
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
						c.isTypeaheadSuggestion ? S() : D(c.searchQuery), w(c.searchQuery, c, f), P(), A()
					},
					key: x,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: k && u(k) || "",
						state: {
							...M,
							[y.b.SearchOriginPage]: p
						},
						search: L
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
						e.stopPropagation(), e.preventDefault(), v(c)
					}
				}), n.a.createElement(T, {
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
				C = r("./src/reddit/constants/adEvents.ts"),
				A = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				R = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				N = r("./src/reddit/helpers/correlationIdTracker.ts"),
				k = r("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function L({
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
						qs: T
					} = Object(O.a)({
						multireddit: null,
						searchItem: s,
						searchOptions: {
							source: g ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					v = n.a.createElement(i.a, {
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
							if (m(e), Object(N.e)(N.a.SearchResults), (e => I((t, r) => Object(k.v)(r(), e, k.a.SEARCH_DROPDOWN)))(s), g) {
								const {
									post: e
								} = s;
								e && h(e, C.a.Click)
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
							search: T
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
					}, s.post.title)), s.subredditInfo && n.a.createElement(A.a, {
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
				}, v) : v
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
				B = r("./src/reddit/controls/Dropdown/index.tsx"),
				G = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				q = r.n(G),
				V = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				H = r.n(V),
				W = r("./src/lib/constants/index.ts"),
				Q = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				K = r("./src/reddit/helpers/trackers/searchResults.ts"),
				$ = r("./src/reddit/hooks/usePageLayer.ts"),
				Y = r("./src/reddit/hooks/useTracking.ts"),
				z = r("./src/reddit/selectors/telemetry.ts");

			function J({
				searchOriginPage: e,
				searchItem: t,
				onTriggerSearch: r
			}) {
				var c;
				const u = (null === (c = t.searchQuery) || void 0 === c ? void 0 : c.trim()) || "",
					l = Object(Y.a)(),
					p = Object($.a)(),
					f = Object(a.e)(e => Object(Q.ab)(e, {
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
						url: T,
						qs: v
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
					l(Object(K.n)(D, f, p || void 0))
				}, []), n.a.createElement(i.a, {
					onClick: function(e) {
						l(Object(K.k)(z.a.FullSearchButton, D, f, p || void 0)), r(e)
					},
					to: {
						pathname: T,
						state: {
							[y.b.SearchOriginPage]: e
						},
						search: v
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
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = "SearchDropdown", ee = "SearchDropdownContent", te = 5, re = Object(c.a)(B.a);

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
				onSendSearchClickTypeaheadEvent: T,
				onSetRecentSearch: D,
				onUpdateSearchQuery: w
			}) {
				var P;
				const C = Object(a.d)(),
					[A, R] = Object(s.useState)(null),
					N = function(e) {
						const [t, r] = Object(s.useState)(null), n = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(n, [n]), Object(s.useEffect)(() => (window.addEventListener("resize", n), () => window.removeEventListener("resize", n)), [n]), t
					}(e),
					x = t.slice(0, te),
					[U, B] = Object(s.useState)(new Array(te).fill(!1)),
					G = !!(null === (P = m.searchQuery) || void 0 === P ? void 0 : P.trim()),
					V = G && c,
					W = 0 === l.length && !d && (!G || p >= 0),
					Q = Object(s.useMemo)(() => l.filter(e => e.isSubreddit), [l]),
					K = {
						width: N ? `${N}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				O && (K.zIndex = F.g), Object(s.useLayoutEffect)(() => {
					if (!r && c && document.getElementById(ee)) {
						const e = $();
						B(e), x.forEach((t, r) => {
							e[r] && C((e, r) => Object(k.w)(r(), t, k.a.SEARCH_DROPDOWN))
						})
					}
				}, [r, c, C]);
				const $ = () => {
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
					style: K,
					onDropdownMounted: () => {
						if (!r && x.length > 0) {
							const e = $();
							B(e), x.forEach((t, r) => {
								e[r] && C((e, r) => Object(k.w)(r(), t, k.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = $();
						x.forEach((t, r) => {
							U[r] || !e[r] || t.post && t.post.isSponsored || C((e, r) => Object(k.w)(r(), t, k.a.SEARCH_DROPDOWN))
						}), B(e)
					}
				}, l.map((e, t) => n.a.createElement(M, {
					focusedItem: l[p],
					indexOfItem: t,
					subredditSuggestions: Q,
					item: e,
					key: e.id,
					onClearSearchQuery: h,
					onSendSearchClickTypeaheadEvent: T,
					onSetRecentSearch: D,
					nightmode: f,
					onCloseDropdown: I
				})), W && u.map((e, t) => n.a.createElement(v, {
					searchOriginPage: y,
					activeTooltipId: A,
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
				})), W && !r && t && n.a.createElement("div", {
					className: Object(o.a)(b.a.title, j.a.listItemTitle, {
						[j.a.mWithBorder]: !!u.length
					})
				}, X._("Trending today", null, {
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
				})), W && x.map(e => n.a.createElement(L, {
					id: `${Z}-${e.id}`,
					key: e.id,
					focusedItem: i[p],
					searchOriginPage: y,
					fireAdPixelsOfType: E,
					onCloseDropdown: I,
					onSetRecentSearch: D,
					onUpdateSearchQuery: w,
					trendingItem: e
				})), V && n.a.createElement(J, {
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
				T = () => Object(f.c)({
					shouldLoadCTA: j
				}),
				v = Object(d.b)(T),
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
				w = Object(c.memo)(v(Object(_.c)(D)))
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
				return T
			})), r.d(t, "g", (function() {
				return v
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
				T = (e, t, r, n) => {
					let a = Object(p.a)(Object(m.a)(Object(f.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (a = Object(b.a)(a)), Object(d.a)(e, {
						data: r,
						endpoint: a,
						method: o.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, r, s) => Object(d.a)(Object(u.a)(e, [l.a]), {
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
					...n.m(e),
					profile: n.P(e),
					post: n.G(e, t),
					media: n.z(e, t),
					subreddit: n.hb(e),
					comment: n.h(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.m(e),
					profile: n.P(e),
					post: n.G(e, t),
					media: n.z(e, t),
					subreddit: n.hb(e),
					comment: n.h(e, t)
				}),
				o = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.ob(t),
					subreddit: n.hb(t),
					post: n.G(t, e),
					actionInfo: n.c(t),
					app: n.f(t),
					referrer: n.V(t),
					session: n.cb(t)
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
					...n.m(e),
					listing: n.x(e, t),
					subreddit: n.hb(e)
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
				return T
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "B", (function() {
				return w
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "u", (function() {
				return C
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "q", (function() {
				return R
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "A", (function() {
				return k
			})), r.d(t, "z", (function() {
				return L
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
				return J
			})), r.d(t, "o", (function() {
				return X
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
					...p.m(e),
					source: y,
					screen: p.Y(e),
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
					...p.m(e),
					source: "search",
					screen: p.Y(e),
					search: r ? {
						...p.Z(e, r),
						structureType: p.b.Trending
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
					post: p.G(e, r)
				}),
				S = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.b.PromotedTrend : p.b.Trending
				});
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const T = (e, t, r) => {
					Object(m.a)(D(e, t, r, c.c.CLICK))
				},
				v = (e, t, r) => {
					Object(m.a)(D(e, t, r, c.c.VIEW))
				},
				D = (e, t, r, s) => {
					const n = Object(b.a)(e, u.d.dropdown).filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.m(e),
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
						actionInfo: p.c(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? p.t(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.b.Trending,
							queryId: p.ab(e, o.a.SearchResults)
						}
					}
				},
				w = (e, t, r, s, n, a, o) => {
					Object(m.a)({
						...p.m(e),
						...Object(d.g)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				P = (e, t, r, s) => {
					Object(m.a)(g(e, t, r, s))
				},
				C = (e, t, r, s) => n => g(n, e, t, r, s),
				A = (e, t) => {
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
						post: p.G(a, t)
					}
				},
				k = (e, t, r, s) => n => a => Object(d.g)(a, n, e, t, r, s),
				L = (e, t, r, s) => n => a => Object(d.f)({
					action: c.c.CLICK,
					state: a,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: r,
					postId: n,
					discoveryUnit: s
				}),
				x = (e, t, r, s) => n => a => ({
					...Object(d.g)(a, n, e, t, r, s),
					noun: "ad"
				}),
				U = (e, t) => r => n => ({
					...e ? O(n, e, t) : {},
					source: y,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: p.G(n, r)
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
						post: p.G(n, t)
					}
				},
				B = () => ({
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
				G = (e, t, r) => p.c(e, {
					position: r
				}),
				q = (e, t, r) => {
					const s = B();
					return e => ({
						..._(e, s),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t)
					})
				},
				V = (e, t, r) => {
					const s = B();
					return e => ({
						...g(e, s, t),
						actionInfo: G(e, 0, r)
					})
				},
				H = (e, t, r) => {
					const n = B();
					return e => ({
						...O(e, n),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						source: y,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				W = (e, t, r) => {
					const n = B();
					return e => ({
						...O(e, n),
						actionInfo: G(e, 0, r),
						post: p.G(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				Q = (e, t, r, n) => {
					const a = B();
					return e => ({
						...O(e, a),
						actionInfo: G(e, 0, n),
						subreddit: p.ib(e, r) || null,
						post: p.G(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				K = (e, t, r) => {
					const n = B();
					return e => ({
						...O(e, n),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				$ = (e, t, r, n) => {
					const a = B();
					return e => ({
						...O(e, a),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						post: n ? p.G(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Y = (e, t, r, n) => {
					const a = B();
					return e => ({
						...O(e, a),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						post: n ? p.G(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				z = (e, t, r) => {
					const n = B();
					return e => ({
						...O(e, n),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				J = (e, t, r) => {
					const n = B();
					return e => ({
						...O(e, n),
						actionInfo: G(e, 0, r),
						subreddit: p.ib(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				X = (e, t) => r => ({
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
				return T
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "s", (function() {
				return C
			})), r.d(t, "v", (function() {
				return A
			})), r.d(t, "w", (function() {
				return R
			}));
			var s = r("./src/reddit/models/ScheduledPost/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...n.m(e),
					screen: n.Y(e),
					subreddit: n.hb(e),
					userSubreddit: n.qb(e)
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
					actionInfo: n.c(t, {
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
					actionInfo: n.c(c, {
						settingValue: t ? "true" : "false",
						pageType: r ? "recurring_posts" : "scheduled_posts"
					})
				}),
				T = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...a(e)
				}),
				v = () => e => ({
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
				C = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...a(e),
					scheduledPost: c(t)
				}),
				A = () => e => ({
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
					...n.m(t),
					actionInfo: n.c(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.e)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => a => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...n.m(a),
					actionInfo: n.c(a, {
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
					...n.m(e),
					actionInfo: n.c(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.m(r),
					actionInfo: n.c(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...n.m(e),
					actionInfo: n.c(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...n.m(e),
					actionInfo: n.c(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...n.m(e),
					actionInfo: n.c(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...n.m(e),
					actionInfo: n.c(e)
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
					...s.m(e),
					actionInfo: s.c(e, {
						settingValue: e.user.account && e.user.account.isMod ? "existing_mod" : "new_mod"
					})
				}),
				a = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "dismiss",
					...s.m(e),
					actionInfo: s.c(e)
				}),
				c = e => e => ({
					source: "post",
					noun: "forking_module",
					action: "view",
					...s.m(e),
					actionInfo: s.c(e)
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
			t.a = s.fb
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
				return kT
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
				T = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var v = (e = null, t) => {
				switch (t.type) {
					case T.a:
						return t.payload && t.payload.error || null;
					case T.b:
					case T.c:
						return null;
					default:
						return e
				}
			};
			var D = (e = !1, t) => {
					switch (t.type) {
						case T.c:
							return !0;
						case T.a:
						case T.b:
							return !1;
						default:
							return e
					}
				},
				w = Object(j.c)({
					error: v,
					pending: D
				});
			const P = {};
			var C = (e = P, t) => {
					switch (t.type) {
						case T.d:
						case T.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case T.c:
						case T.a:
						default:
							return e
					}
				},
				A = Object(j.c)({
					api: w,
					badges: C
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
				F = r("./src/reddit/actions/modQueue/constants.ts"),
				B = r("./src/reddit/actions/pages/constants.ts"),
				G = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				H = r("./src/reddit/actions/pages/search/index.ts"),
				W = r("./src/reddit/actions/pages/subreddit.ts"),
				Q = r("./src/reddit/actions/profileConversations.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				$ = r("./src/reddit/actions/userFlair/constants.ts"),
				Y = r("./src/reddit/models/User/index.ts");
			const z = {};
			var J = (e = z, t) => {
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
							return Object(N.merge)(e, r)
						}
						return e
					}
					case x.w:
					case W.SUBREDDIT_LOADED:
					case B.f:
					case G.b:
					case G.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case Q.e:
					case K.i:
						return X(e, t.payload);
					case F.i:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
						return X(e, t.payload.response);
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
			const X = (e, {
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
					models: J
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
				Te = r("./src/reddit/actions/pages/countrySite/constants.ts"),
				ve = r("./src/reddit/actions/pages/modListing/constants.ts"),
				De = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				we = r("./src/reddit/actions/pages/postCreation.ts"),
				Pe = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ce = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ae = r("./src/lib/makeActionCreator/index.ts"),
				Re = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ae.a)("RECOMMENDED_POSTS_LOADED"), Object(Ae.a)("RECOMMENDED_POSTS_FAILED");
			var Ne = r("./src/reddit/actions/search.ts");
			const ke = he.m,
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
					case B.b:
					case x.w:
					case U.b:
					case Te.b:
					case Te.f:
					case we.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case ve.e:
					case ve.h:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case je.r:
					case B.f:
					case ge.b:
					case De.b:
					case H.c:
					case G.b:
					case G.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ce.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.g:
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
			var Fe = (e = Me, t) => {
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
				Be = Object(j.c)({
					pending: Fe
				});
			const Ge = {};
			var qe = (e = Ge, t) => {
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
				Ve = Object(j.c)({
					api: Be,
					order: qe
				});
			const He = {};
			var We = (e = He, t) => {
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
				Qe = Object(j.c)({
					order: We
				}),
				Ke = Object(j.c)({
					blacklist: re,
					create: ce,
					manageable: me,
					models: Ue,
					sortedUsable: Ve,
					tags: Qe
				}),
				$e = r("./src/reddit/actions/badge.ts");
			const Ye = {};
			var ze = (e = Ye, t) => {
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
				Ze = Object(j.c)({
					error: ze,
					pending: Xe
				});
			const et = {};
			var tt = (e = et, t) => {
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
			const rt = {};
			var st = (e = rt, t) => {
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
				nt = Object(j.c)({
					error: tt,
					pending: st
				}),
				at = Object(j.c)({
					subreddit: Ze,
					user: nt
				});
			const ct = {};
			var ot = (e = ct, t) => {
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
				dt = Object(j.c)({
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
				bt = Object(j.c)({
					error: lt,
					pending: pt
				});
			const ft = {
				ids: []
			};
			var mt = (e = ft, t) => {
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
				yt = Object(j.c)({
					api: bt,
					list: mt
				}),
				Ot = r("./src/reddit/actions/userBlocks.ts");
			const _t = {};
			var Et = (e = _t, t) => {
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
			const ht = {};
			var It = (e = ht, t) => {
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
				gt = Object(j.c)({
					error: Et,
					pending: It
				}),
				St = Object(j.c)({
					api: gt
				});
			const jt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Tt = (e = jt, t) => {
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case W.SUBREDDIT_PENDING:
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
				vt = r("./src/reddit/actions/downToChat.ts");
			var Dt = (e = null, t) => {
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
			var wt = (e = !1, t) => {
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
				Pt = Object(j.c)({
					error: Dt,
					pending: wt
				}),
				Ct = r("./node_modules/lodash/mapValues.js"),
				At = r.n(Ct);
			const Rt = {};
			var Nt = (e = Rt, t) => {
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
				kt = Object(j.c)({
					api: Pt,
					subreddits: Nt
				}),
				Lt = r("./src/reddit/actions/chat/init.ts");
			var xt = (e = !1, t) => {
					switch (t.type) {
						case Lt.a:
							return !0;
						default:
							return e
					}
				},
				Ut = r("./src/lib/omitKey/index.ts"),
				Mt = r("./src/reddit/actions/pages/chatSettings.ts");
			const Ft = {};
			var Bt = (e = Ft, t) => {
				switch (t.type) {
					case Mt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Mt.a:
					case Mt.c:
					case Mt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Ut.a)(e, r)
					}
					default:
						return e
				}
			};
			const Gt = {};
			var qt = (e = Gt, t) => {
					switch (t.type) {
						case Mt.a:
						case Mt.b:
						case Mt.c:
						case Mt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Mt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Vt = Object(j.c)({
					error: Bt,
					pending: qt
				}),
				Ht = Object(j.c)({
					fetch: Vt
				});
			const Wt = {};
			var Qt, Kt = (e = Wt, t) => {
					switch (t.type) {
						case Mt.a:
						case Mt.d: {
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
				$t = Object(j.c)({
					api: Ht,
					models: Kt
				}),
				Yt = (r("./src/chat/actions/message/unreadCount.ts"), r("./src/chat/endpoints/sendbird/index.ts"), r("./src/reddit/actions/tabBadging.ts"));
			r("./src/reddit/selectors/chat.ts"), r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Qt || (Qt = {}));
			const {
				SYNC: zt,
				REQUEST_FAILED: Jt,
				REQUEST_PENDING: Xt,
				REQUEST_SUCCESS: Zt
			} = Qt;
			Object(Ae.a)(zt), Object(Ae.a)(Jt), Object(Ae.a)(Xt), Object(Ae.a)(Zt);
			Re.kb;
			const er = {
				apiError: null
			};
			var tr = (e = er, t) => {
				switch (t.type) {
					case Qt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...er,
							apiError: e
						}
					}
					case Qt.REQUEST_SUCCESS:
					case Qt.REQUEST_PENDING:
						return er;
					default:
						return e
				}
			};
			var rr = (e = !1, t) => {
					switch (t.type) {
						case Qt.REQUEST_PENDING:
							return !0;
						case Qt.REQUEST_FAILED:
						case Qt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				sr = Object(j.c)({
					error: tr,
					pending: rr
				});
			const nr = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var ar = (e = nr, t) => {
					switch (t.type) {
						case Qt.SYNC:
						case Qt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				cr = Object(j.c)({
					api: sr,
					count: ar
				}),
				or = Object(j.c)({
					downToChat: kt,
					isInited: xt,
					subredditSettingsPage: $t,
					unread: cr
				}),
				dr = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var ir = (e = !0, t) => {
					switch (t.type) {
						case dr.a:
							return !1;
						case dr.b:
							return !0;
						default:
							return e
					}
				},
				ur = r("./src/reddit/actions/communityFlairs/constants.ts");
			const lr = {};
			var pr = (e = lr, t) => {
					switch (t.type) {
						case ur.a: {
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
				br = r("./src/reddit/actions/connection/constants.ts");
			const fr = {
				showBanner: !1,
				online: !0
			};
			var mr = (e = fr, t) => {
					switch (t.type) {
						case br.a:
							return {
								online: !1, showBanner: !0
							};
						case br.b:
							return {
								online: !0, showBanner: !0
							};
						case br.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				yr = r("./src/reddit/actions/contentControls/constants.ts");
			const Or = {};
			var _r = (e = Or, t) => {
				switch (t.type) {
					case yr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case yr.c:
					case yr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Ut.a)(e, r)
					}
					default:
						return e
				}
			};
			const Er = {};
			var hr = (e = Er, t) => {
					switch (t.type) {
						case yr.c:
						case yr.a:
						case yr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === yr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ir = Object(j.c)({
					error: _r,
					pending: hr
				}),
				gr = Object(j.c)({
					fetch: Ir
				}),
				Sr = r("./src/lib/safeGet/index.ts");
			const jr = {};
			var Tr = (e = jr, t) => {
					switch (t.type) {
						case yr.b: {
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
						case yr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = Object(Sr.a)(e, r);
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
				vr = Object(j.c)({
					api: gr,
					models: Tr
				}),
				Dr = r("./src/reddit/actions/contentGate.ts"),
				wr = r("./src/reddit/actions/preferences.ts");
			const Pr = {};
			var Cr = (e = Pr, t) => {
				switch (t.type) {
					case Dr.b: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Sr.a)(e, r)) {
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
					case Dr.c: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (Object(Sr.a)(e, s)) {
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
					case Dr.g: {
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
								...Object(Sr.a)(e, r) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Dr.a: {
						const {
							interstitialWarningMessage: r,
							interstitialWarningMessageHtml: s,
							interstitialWarningMessageRTJson: n,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(Sr.a)(e, a) || {},
								interstitialWarningMessage: r,
								interstitialWarningMessageHtml: s,
								interstitialWarningMessageRTJson: n
							}
						} : e
					}
					case Dr.i: {
						const {
							subredditName: r,
							banMessage: s
						} = t.payload;
						if (r) {
							if (Object(Sr.a)(e, r)) {
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
					case Dr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Sr.a)(e, r)) {
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
					case Dr.k: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Sr.a)(e, r)) {
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
					case Dr.d:
					case Dr.e:
					case Dr.f: {
						const {
							profileName: r
						} = t.payload, s = Re.ic + r.toLocaleLowerCase(), n = Object(Sr.a)(e, s) || {}, a = {
							profileDeleted: t.type === Dr.e,
							profileSuspended: t.type === Dr.f,
							profileBlockedForLegalReason: t.type === Dr.d
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case wr.q:
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
			const Ar = {};
			var Rr = (e = Ar, t) => {
					switch (t.type) {
						case x.w:
						case B.b:
						case B.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Nr = Object(j.c)({
					models: Rr
				}),
				kr = r("./src/reddit/actions/correlationId/index.tsx"),
				Lr = r("./src/reddit/helpers/correlationIdTracker.ts");
			const xr = {
				[Lr.a.AwardCreationFlow]: void 0,
				[Lr.a.AwardDeletionFlow]: void 0,
				[Lr.a.CommentComposer]: void 0,
				[Lr.a.Explore]: void 0,
				[Lr.a.GildingFlow]: void 0,
				[Lr.a.GiftPremiumFlow]: void 0,
				[Lr.a.GoldPayment]: void 0,
				[Lr.a.LinkedPosts]: void 0,
				[Lr.a.ModQueue]: void 0,
				[Lr.a.NsfwLinkedPosts]: void 0,
				[Lr.a.PostComposer]: void 0,
				[Lr.a.PowerupsFlow]: void 0,
				[Lr.a.PremiumSettings]: void 0,
				[Lr.a.SearchResults]: void 0,
				[Lr.a.SubredditCreation]: void 0,
				[Lr.a.VideoView]: void 0
			};
			var Ur = r("./src/reddit/actions/postCollection/constants.ts");
			var Mr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Ur.d:
					case Ur.c:
					case Ur.s:
					case Ur.r:
						return null;
					case Ur.b:
					case Ur.n:
						return t.payload;
					default:
						return e
				}
			};
			var Fr = (e = !1, t) => {
					switch (t.type) {
						case Ur.c:
						case Ur.r:
							return !0;
						case Ur.d:
						case Ur.b:
						case Ur.s:
						case Ur.n:
							return !1;
						default:
							return e
					}
				},
				Br = Object(j.c)({
					error: Mr,
					pending: Fr
				}),
				Gr = Object(j.c)({
					createOrUpdate: Br
				}),
				qr = r("./src/reddit/actions/postDraft.ts");
			const Vr = {};
			var Hr = (e = Vr, t) => {
				switch (t.type) {
					case qr.c:
					case qr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case qr.a: {
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
			const Wr = {};
			var Qr = (e = Wr, t) => {
					switch (t.type) {
						case qr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case qr.c:
						case qr.a: {
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
				Kr = Object(j.c)({
					error: Hr,
					pending: Qr
				});
			var $r = (e = null, t) => {
				switch (t.type) {
					case qr.d:
						return t.payload;
					case qr.f:
					case qr.e:
						return null;
					default:
						return e
				}
			};
			var Yr = (e = !1, t) => {
					switch (t.type) {
						case qr.f:
							return !0;
						case qr.e:
						case qr.d:
							return !1;
						default:
							return e
					}
				},
				zr = Object(j.c)({
					error: $r,
					pending: Yr
				});
			const Jr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Xr = (e = Jr, t) => {
				switch (t.type) {
					case qr.l:
					case qr.j:
						return Jr;
					case qr.i: {
						const e = t.payload;
						return {
							...Jr,
							apiError: e
						}
					}
					case qr.m: {
						const e = t.payload;
						return {
							...Jr,
							validationError: e
						}
					}
					case qr.k: {
						const e = t.payload;
						return {
							...Jr,
							submitValidationError: e
						}
					}
					case qr.h:
						return {
							...Jr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var Zr = (e = !1, t) => {
					switch (t.type) {
						case qr.j:
							return !0;
						case qr.l:
						case qr.i:
						case qr.m:
						case qr.k:
						case qr.h:
							return !1;
						default:
							return e
					}
				},
				es = Object(j.c)({
					error: Xr,
					pending: Zr
				}),
				ts = Object(j.c)({
					deleteDraft: Kr,
					listing: zr,
					save: es
				}),
				rs = r("./src/reddit/actions/postCreation/constants.ts");
			const ss = {};
			var ns = (e = ss, t) => {
					switch (t.type) {
						case rs.G: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case rs.p: {
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
				as = Object(j.c)({
					pending: ns
				});
			var cs = (e = null, t) => {
				switch (t.type) {
					case rs.u:
					case rs.v:
					case rs.d:
					case rs.e:
					case rs.f:
					case rs.i:
					case rs.j:
					case rs.n:
					case rs.O:
						return null;
					case rs.t:
						return t.payload;
					default:
						return e
				}
			};
			var os = (e = !1, t) => {
					switch (t.type) {
						case rs.u:
							return !0;
						case rs.v:
						case rs.t:
							return !1;
						default:
							return e
					}
				},
				ds = Object(j.c)({
					error: cs,
					pending: os
				}),
				is = Object(j.c)({
					converting: as,
					mediaUpload: ds
				});
			const us = {};
			var ls = (e = us, t) => {
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
			const ps = {};
			var bs = (e = ps, t) => {
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
			const fs = {};
			var ms = (e = fs, t) => {
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
				ys = Object(j.c)({
					error: ls,
					fetched: bs,
					pending: ms
				}),
				Os = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const _s = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Es = (e = _s, t) => {
				switch (t.type) {
					case rs.P:
					case Os.h:
					case Os.k:
					case Os.b:
					case Os.d:
					case rs.w:
					case rs.c:
					case rs.d:
					case rs.e:
					case rs.f:
					case rs.i:
					case rs.j:
					case rs.n:
					case rs.O:
					case rs.E:
						return _s;
					case rs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? _s : e
					}
					case rs.o: {
						const e = t.payload;
						return {
							..._s,
							apiError: e
						}
					}
					case rs.cb: {
						const e = t.payload;
						return {
							..._s,
							validationError: e
						}
					}
					case rs.K:
					case rs.J: {
						const e = t.payload;
						return {
							..._s,
							submitValidationError: e
						}
					}
					case rs.a:
						return {
							..._s, needsCaptcha: !0
						};
					case rs.y:
						return {
							..._s, pollError: t.payload
						};
					default:
						return e
				}
			};
			var hs = (e = !1, t) => {
					switch (t.type) {
						case rs.w:
							return !0;
						case rs.P:
						case Os.h:
						case rs.o:
						case rs.cb:
						case rs.J:
						case rs.K:
						case rs.y:
						case rs.a:
							return !1;
						default:
							return e
					}
				},
				Is = Object(j.c)({
					error: Es,
					pending: hs
				});
			var gs = (e = null, t) => {
				switch (t.type) {
					case rs.x:
					case rs.H:
						return null;
					case rs.m:
						return t.payload;
					default:
						return e
				}
			};
			var Ss = (e = !1, t) => {
					switch (t.type) {
						case rs.x:
							return !0;
						case rs.m:
						case rs.l:
							return !1;
						default:
							return e
					}
				},
				js = Object(j.c)({
					error: gs,
					pending: Ss
				}),
				Ts = Object(j.c)({
					submit: Is,
					update: js
				});
			var vs = (e = null, t) => {
				switch (t.type) {
					case rs.O:
					case rs.M:
					case rs.N:
						return null;
					default:
						return e
				}
			};
			var Ds = (e = !1, t) => {
					switch (t.type) {
						case rs.N:
							return !0;
						case rs.M:
						case rs.O:
							return !1;
						default:
							return e
					}
				},
				ws = Object(j.c)({
					error: vs,
					pending: Ds
				}),
				Ps = Object(j.c)({
					change: ws
				}),
				Cs = Object(j.c)({
					collection: Gr,
					draft: ts,
					editor: is,
					page: ys,
					post: Ts,
					subreddit: Ps
				}),
				As = r("./node_modules/lodash/omit.js"),
				Rs = r.n(As),
				Ns = r("./src/reddit/actions/pages/postDraft.ts");
			const ks = {};
			var Ls = (e = ks, t) => {
				switch (t.type) {
					case qr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || ks
					}
					case qr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Rs()(r, s)
					}
					case rs.P: {
						const {
							draftId: r
						} = t.payload;
						return r ? Rs()(e, r) : e
					}
					case Ns.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const xs = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Us = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Ms = r("./src/reddit/models/PostDraft/index.ts");
			var Fs = (e = "", t) => {
					switch (t.type) {
						case rs.d:
							return t.payload || "";
						case rs.E:
							return "";
						case u.b: {
							if (xs(t) !== Re.Mb.POST_CREATION) return "";
							const r = Us(t);
							return r && r.url ? r.url || "" : e
						}
						case qr.g: {
							const e = t.payload;
							return e.kind === Ms.b.Link && e.body || ""
						}
						case Os.b:
						case Os.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Bs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Gs = r("./src/reddit/models/ScheduledPost/index.ts");
			var qs = (e = "", t) => {
				switch (t.type) {
					case rs.e:
						return t.payload || "";
					case rs.E:
					case rs.I:
						return "";
					case rs.Q:
						return t.payload.editorMode === Bs.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (xs(t) !== Re.Mb.POST_CREATION) return "";
						const r = Us(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case qr.g: {
						const e = t.payload;
						return e.kind === Ms.b.Markdown && e.body || ""
					}
					case Os.b:
					case Os.n: {
						const e = t.payload;
						return e.contentType === Gs.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Vs = {
				items: [],
				selectedKey: null
			};
			var Hs = (e = Vs, t) => {
					switch (t.type) {
						case rs.f:
							return t.payload || Vs;
						case rs.E:
							return Vs;
						case u.b:
							return xs(t) !== Re.Mb.POST_CREATION ? Vs : e;
						case qr.g:
							return Vs;
						case Os.b:
						case Os.n:
							return Vs;
						default:
							return e
					}
				},
				Ws = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Qs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ks = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const $s = Ws.a.createInitial;
			var Ys = (e = $s(), t) => {
					switch (t.type) {
						case rs.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case rs.E:
							return Ws.a.createInitial();
						case rs.Q: {
							const r = t.payload;
							return r.editorMode === Bs.i.RICH_TEXT && r.editorKey === Bs.h.POST_CREATION ? Ws.a.createInitial(r.content) : e
						}
						case u.b:
							return xs(t) !== Re.Mb.POST_CREATION ? Ws.a.createInitial() : e;
						case qr.g: {
							const e = t.payload;
							return e.kind === Ms.b.RichText ? Ws.a.createInitial(e.body) : Ws.a.createInitial()
						}
						case Os.b:
						case Os.n: {
							const e = t.payload,
								r = Object(Qs.c)(e.mediaAssets);
							return Ws.a.createInitial(e.contentType === Gs.a.RTJSON ? Object(Ks.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				zs = Object(j.c)({
					link: Fs,
					markdown: qs,
					media: Hs,
					rte: Ys
				});
			var Js = (e = null, t) => {
					switch (t.type) {
						case rs.b:
							return t.payload || null;
						case rs.E:
						case qr.g:
						case Os.b:
						case Os.n:
						case rs.O:
							return null;
						case u.b:
							return xs(t) === Re.Mb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Xs = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var Zs = (e = null, t) => {
				switch (t.type) {
					case rs.c:
						return t.payload || null;
					case Os.b:
					case Os.n: {
						const e = t.payload;
						return Object(Xs.n)({
							scheduledPost: e
						}) || null
					}
					case rs.E:
						return null;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION ? e : null;
					case qr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var en = (e = null, t) => {
				switch (t.type) {
					case rs.q:
						return t.payload.type || null;
					case Os.b:
					case Os.n:
					case rs.i:
					case rs.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var tn = (e = !1, t) => {
				switch (t.type) {
					case rs.S:
						return t.payload || !1;
					case Os.b:
					case Os.n:
						return "CHAT" === t.payload.discussionType;
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case qr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var rn = (e = !1, t) => {
				switch (t.type) {
					case rs.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case Os.b:
					case Os.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var sn = (e = !1, t) => {
				switch (t.type) {
					case rs.U:
						return t.payload || !1;
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case qr.g:
						return t.payload.isNSFW || !1;
					case Os.b:
					case Os.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var nn = (e = !1, t) => {
				switch (t.type) {
					case rs.V:
						return t.payload || !1;
					case rs.E:
						return !1;
					case rs.O: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case qr.g:
						return t.payload.isOriginalContent || !1;
					case Os.b:
					case Os.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var an = (e = !1, t) => {
				switch (t.type) {
					case rs.W:
						return t.payload || !1;
					case Os.b:
					case Os.n:
						return !!t.payload.poll;
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					default:
						return e
				}
			};
			var cn = (e = !1, t) => {
				switch (t.type) {
					case rs.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case Os.b:
					case Os.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var on = (e = !1, t) => {
				switch (t.type) {
					case Os.b:
					case Os.n:
					case rs.E:
						return !1;
					case qr.n:
						return t.payload;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case qr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case rs.X:
						return t.payload || !1;
					case rs.E:
						return !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case qr.g:
						return t.payload.isSpoiler || !1;
					case Os.b:
					case Os.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var un = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case rs.i:
					case rs.q:
					case rs.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ln = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case rs.i:
					case rs.q:
					case rs.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var pn = (e = null, t) => {
					switch (t.type) {
						case rs.N:
						case rs.O:
							return t.payload;
						case rs.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				bn = r("./src/reddit/actions/polls.ts");
			var fn = (e = null, t) => {
					switch (t.type) {
						case bn.a:
							return {
								...t.payload
							};
						case Os.b:
						case Os.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case rs.E:
							return null;
						case u.b:
							return xs(t) !== Re.Mb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				mn = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				yn = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var On = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case rs.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case rs.E:
					case qr.g:
					case rs.O:
						return null;
					case u.b:
						if (xs(t) === Re.Mb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Gs.m)(c)) {
								const t = Object(mn.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...mn.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(mn.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case Os.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Os.b: {
						const e = t.payload;
						return {
							...Object(yn.h)(e)
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
					case rs.Y:
						return s || !1;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case Os.b:
					case Os.n:
					case qr.g:
						return !1;
					default:
						return e
				}
			};
			var En = (e = "", t) => {
				switch (t.type) {
					case rs.g:
						return t.payload || "";
					case u.b:
						return xs(t) !== Re.Mb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var hn = (e = null, t) => {
				switch (t.type) {
					case u.b:
						return xs(t) !== Re.Mb.POST_CREATION ? null : e;
					case rs.E:
						return null;
					case Os.b:
					case Os.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var In = (e = !0, t) => {
				switch (t.type) {
					case rs.E:
						return !0;
					case rs.Z:
						return t.payload;
					case u.b:
						return xs(t) !== Re.Mb.POST_CREATION || e;
					case qr.g:
						return t.payload.sendReplies;
					case Os.b:
					case Os.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
				switch (t.type) {
					case rs.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case rs.E:
					case qr.g:
					case rs.O:
						return null;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION ? e : null;
					case Os.b:
					case Os.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Sn = Re.Vb.POST;
			var jn = (e = Sn, t) => {
				switch (t.type) {
					case rs.E:
						return Sn;
					case rs.r:
						return Re.Vb.CROSSPOST;
					case rs.i:
						return t.payload.submissionType || Sn;
					case u.b: {
						if (xs(t) !== Re.Mb.POST_CREATION) return Sn;
						const r = Us(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1,
							type: d = ""
						} = r, i = s && !a && !o;
						return c ? Re.Vb.MEDIA : void 0 !== n || i ? Re.Vb.LINK_ONLY : a || o ? Re.Vb.POST : d === Re.xb ? Re.Vb.POLL : e
					}
					case qr.g: {
						const e = t.payload;
						return Ms.a[e.kind]
					}
					case Os.b:
					case Os.n: {
						const e = t.payload;
						return e.poll ? Re.Vb.POLL : e.url ? Re.Vb.LINK_ONLY : Re.Vb.POST
					}
					default:
						return e
				}
			};
			var Tn = (e = null, t) => {
					switch (t.type) {
						case rs.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case rs.E:
						case qr.g:
						case rs.O:
							return null;
						case u.b:
							return xs(t) === Re.Mb.POST_CREATION ? e : null;
						case Os.b:
						case Os.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				vn = r("./src/reddit/models/Poll/index.ts");
			const Dn = e => `Should ${e||"username"} become the top moderator?`,
				wn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Pn = (e = "", t) => {
				switch (t.type) {
					case rs.r:
						return t.payload.postTitle || "";
					case rs.j:
						return t.payload || "";
					case rs.D: {
						const {
							title: r
						} = t.payload;
						return e || (r || "")
					}
					case rs.E:
						return "";
					case u.b: {
						if (xs(t) !== Re.Mb.POST_CREATION) return "";
						const r = Us(t);
						return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
					}
					case qr.g:
						return t.payload.title;
					case rs.q: {
						const {
							oldType: r,
							type: s
						} = t.payload;
						return s === vn.a.ReplaceTopMod ? Dn("") : s === vn.a.Spinoff ? wn("") : r === vn.a.ReplaceTopMod || r === vn.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return Dn(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return wn(e)
					}
					case rs.i: {
						const {
							extra: r
						} = t.payload;
						return !r || r.govType !== vn.a.ReplaceTopMod && r.govType !== vn.a.Spinoff ? e : ""
					}
					case Os.b:
					case Os.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Cn = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var An = (e = Cn, t) => {
					switch (t.type) {
						case rs.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Rn = Object(j.c)({
					body: zs,
					eventSchedule: Js,
					flair: Zs,
					govType: en,
					isChatPost: tn,
					isContestMode: rn,
					isNSFW: sn,
					isOC: nn,
					isPostAsMetaMod: cn,
					isPoll: an,
					isPublicLink: on,
					isSpoiler: dn,
					newSubreddit: un,
					newTopMod: ln,
					nextSubreddit: pn,
					polls: fn,
					postSchedule: On,
					postToTwitter: _n,
					recaptcha: En,
					scheduledPostId: hn,
					sendReplies: In,
					stickyPosition: gn,
					submissionType: jn,
					suggestedSort: Tn,
					title: Pn,
					tournament: An
				});
			var Nn = (e = null, t) => {
				switch (t.type) {
					case u.b: {
						if (xs(t) !== Re.Mb.POST_CREATION) return null;
						const r = Us(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Bs.i.MARKDOWN : e
					}
					case rs.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case rs.I:
						return null;
					case rs.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Os.b:
					case Os.n:
						return t.payload.contentType === Gs.a.RTJSON ? Bs.i.RICH_TEXT : Bs.i.MARKDOWN;
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
			var Ln = (e = kn, t) => {
				switch (t.type) {
					case rs.c:
					case rs.d:
					case rs.e:
						return e[Re.wb.BODY] ? {
							...e,
							[Re.wb.BODY]: []
						} : e;
					case rs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Re.wb.BODY] && r ? {
							...e,
							[Re.wb.BODY]: []
						} : e
					}
					case rs.j:
						return e[Re.wb.TITLE] ? {
							...e,
							[Re.wb.TITLE]: []
						} : e;
					case rs.L: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case rs.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : kn
					}
					case rs.K:
					case rs.J:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Bs.w)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.b:
						return xs(t) !== Re.Mb.POST_CREATION ? kn : e;
					default:
						return e
				}
			};
			var xn = (e = !1, t) => {
				switch (t.type) {
					case rs.b:
					case rs.c:
					case rs.d:
					case rs.e:
					case rs.f:
					case rs.j:
					case rs.i:
					case rs.U:
					case rs.V:
					case rs.X:
					case qr.n:
					case rs.Z:
					case rs.ab:
						return !0;
					case rs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case rs.P:
					case Os.h:
						return !1;
					case rs.R:
						return t.payload;
					case u.b:
						return xs(t) === Re.Mb.POST_CREATION && e;
					case rs.E:
					case qr.l:
					case qr.g:
						return !1;
					default:
						return e
				}
			};
			const Un = Bs.r.Post;
			var Mn = (e = Un, t) => {
					switch (t.type) {
						case rs.w:
							return Bs.r.Post;
						case rs.F:
							return t.payload;
						case qr.j:
							return Bs.r.Draft;
						case u.b:
							return xs(t) !== Re.Mb.POST_CREATION ? Un : e;
						default:
							return e
					}
				},
				Fn = Object(j.c)({
					editorMode: Nn,
					fieldValidation: Ln,
					isChanged: xn,
					submitMode: Mn
				});
			var Bn = (e = "", t) => {
				switch (t.type) {
					case rs.H:
						return t.payload.editorMode === Bs.i.MARKDOWN ? t.payload.postContent || "" : e;
					case rs.I:
						return "";
					case rs.Q:
						return t.payload.editorMode === Bs.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Gn = Ws.a.createInitial;
			var qn = (e = Gn(), t) => {
					switch (t.type) {
						case rs.I:
							return Ws.a.createInitial();
						case rs.H: {
							const r = t.payload;
							return r.editorMode === Bs.i.RICH_TEXT && "object" == typeof r.postContent ? Ws.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case rs.Q: {
							const r = t.payload;
							return r.editorMode === Bs.i.RICH_TEXT && r.editorKey === Bs.h.POST_EDITING ? Ws.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Vn = Object(j.c)({
					markdown: Bn,
					rte: qn
				});
			var Hn = (e = null, t) => {
					switch (t.type) {
						case rs.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case rs.I:
							return null;
						default:
							return e
					}
				},
				Wn = Object(j.c)({
					draft: Vn,
					postId: Hn
				});
			var Qn = (e = !1, t) => {
				switch (t.type) {
					case rs.C:
					case rs.B:
						return !1;
					case rs.z:
						return !0;
					default:
						return e
				}
			};
			var Kn = (e = !1, t) => {
					switch (t.type) {
						case rs.z:
						case rs.B:
							return !1;
						case rs.C:
							return !0;
						default:
							return e
					}
				},
				$n = Object(j.c)({
					error: Qn,
					pending: Kn
				});
			var Yn = (e = !1, t) => {
				switch (t.type) {
					case rs.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case rs.j:
					case rs.d:
					case rs.e:
					case rs.i:
					case rs.r:
					case qr.g:
						return !0;
					case rs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					default:
						return e
				}
			};
			const zn = {};
			var Jn = (e = zn, t) => {
				switch (t.type) {
					case rs.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Xn = [];
			var Zn = (e = Xn, t) => {
					switch (t.type) {
						case rs.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ea = Object(j.c)({
					api: $n,
					isInputChanged: Yn,
					model: Jn,
					order: Zn
				}),
				ta = Object(j.c)({
					api: Cs,
					drafts: Ls,
					formData: Rn,
					formState: Fn,
					postEditing: Wn,
					subredditRec: ea
				}),
				ra = r("./src/reddit/actions/dashboard/constants.ts");
			const sa = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var na = (e = sa, t) => {
				switch (t.type) {
					case ra.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ra.d: {
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
					case ra.c: {
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
			var aa = (e = null, t) => {
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
			var ca = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var oa = (e = !1, t) => {
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
				da = Object(j.c)({
					error: aa,
					loaded: ca,
					pending: oa
				}),
				ia = Object(j.c)({
					list: da
				}),
				ua = r("./node_modules/lodash/isEmpty.js"),
				la = r.n(ua);
			const pa = {};
			var ba = (e = pa, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return la()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				fa = r("./node_modules/lodash/forOwn.js"),
				ma = r.n(fa),
				ya = r("./src/reddit/helpers/name/index.ts");
			const Oa = {};
			var _a = (e = Oa, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (la()(r)) return e;
							const s = {};
							return ma()(r, e => {
								s[Object(ya.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Ea = Object(j.c)({
					api: ia,
					models: ba,
					nameToId: _a
				}),
				ha = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Ia = [];
			var ga = (e = Ia, t) => {
					switch (t.type) {
						case ha.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				Sa = r("./src/reddit/actions/economics/banners/constants.ts");
			const ja = {
				dismissedBanners: {}
			};
			var Ta = (e = ja, t) => {
					switch (t.type) {
						case Sa.c: {
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
						case Sa.d: {
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
						case Sa.a:
						case Sa.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === Sa.a;
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
				va = r("./src/reddit/models/Badge/managementPage.ts");
			const Da = {
				badgeType: va.a.Cosmetic,
				view: va.c.Gallery
			};
			var wa = (e = Da, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(va.d)(r.placement) : e.badgeType,
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
						return Da;
					default:
						return e
				}
			};
			var Pa = (e = null, t) => {
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
				Ca = r("./src/reddit/actions/economics/powerups/constants.ts");

			function Aa(e, t) {
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

			function Ra(e) {
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
						emotes: n.map(e => Aa(e, t))
					}
				}), r
			}
			const Na = {};
			var ka = (e = Na, t) => {
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
					case Ca.b: {
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
										[r.name]: Aa(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const La = {};
			var xa = (e = La, t) => {
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
				Ua = r("./src/reddit/actions/economics/me/constants.ts");
			const Ma = {
				fetched: !1,
				data: {}
			};
			var Fa = (e = Ma, t) => {
					switch (t.type) {
						case Ua.a:
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
				Ba = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ga = {
				fetched: !1,
				data: null
			};
			var qa = (e = Ga, t) => {
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
				Va = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ha = Object(j.c)({
					banners: Ta,
					currentBadgeManagementScreen: wa,
					currentModalArgs: Pa,
					emotes: ka,
					gifs: xa,
					me: Fa,
					paymentSystems: Ba.b,
					pointsCopy: qa,
					subredditPremium: Va.b
				}),
				Wa = r("./src/reddit/actions/emoji.ts");
			const Qa = {};
			var Ka = (e = Qa, t) => {
					switch (t.type) {
						case Wa.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Wa.g:
						case Wa.f: {
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
				$a = Object(j.c)({
					pending: Ka
				}),
				Ya = Object(j.c)({
					list: $a
				});
			const za = {};
			var Ja = (e = za, t) => {
					switch (t.type) {
						case Wa.f:
						case Wa.c:
							return e;
						case Wa.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Wa.d: {
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
						case Wa.i: {
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
						case Wa.e: {
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
				Xa = Object(j.c)({
					api: Ya,
					models: Ja
				}),
				Za = r("./src/reddit/actions/experiments.ts");
			const ec = /^experiment_(.*)$/i,
				tc = e => {
					const t = e.match(ec);
					if (null !== t) return t[1]
				},
				rc = {};
			var sc = (e = rc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Us(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = tc(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return la()(s) ? e : {
								...e,
								...s
							}
						}
						case Za.b: {
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
				nc = r("./src/reddit/actions/externalAccount.ts");
			const ac = {};
			var cc = (e = ac, t) => {
				switch (t.type) {
					case nc.e:
					case nc.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case nc.d: {
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
			const oc = {};
			var dc = (e = oc, t) => {
					switch (t.type) {
						case nc.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case nc.f:
						case nc.d: {
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
				ic = Object(j.c)({
					error: cc,
					pending: dc
				});
			const uc = {};
			var lc = (e = uc, t) => {
				switch (t.type) {
					case nc.l:
					case nc.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case nc.j: {
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
			const pc = {};
			var bc = (e = pc, t) => {
					switch (t.type) {
						case nc.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case nc.c:
						case nc.a: {
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
				fc = Object(j.c)({
					error: lc,
					pending: bc
				});
			const mc = {};
			var yc = (e = mc, t) => {
				switch (t.type) {
					case nc.i:
					case nc.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case nc.g: {
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
			const Oc = {};
			var _c = (e = Oc, t) => {
				switch (t.type) {
					case nc.h: {
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
			const Ec = {};
			var hc = (e = Ec, t) => {
					switch (t.type) {
						case nc.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case nc.h:
						case nc.g: {
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
				Ic = Object(j.c)({
					error: yc,
					fetched: _c,
					pending: hc
				});
			const gc = {};
			var Sc = (e = gc, t) => {
				switch (t.type) {
					case nc.l:
					case nc.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case nc.j: {
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
			const jc = {};
			var Tc = (e = jc, t) => {
					switch (t.type) {
						case nc.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case nc.k:
						case nc.j: {
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
				vc = Object(j.c)({
					error: Sc,
					pending: Tc
				}),
				Dc = Object(j.c)({
					connect: ic,
					disconnect: fc,
					user: vc,
					subreddit: Ic
				});
			const wc = {};
			var Pc = (e = wc, t) => {
				switch (t.type) {
					case nc.h: {
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
			const Cc = {};
			var Ac = (e = Cc, t) => {
					switch (t.type) {
						case nc.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case nc.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Rs()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Rc = Object(j.c)({
					api: Dc,
					user: Ac,
					subreddit: Pc
				}),
				Nc = r("./src/reddit/featureFlags/index.ts");
			const kc = new Set(["0", "disabled", "false", "off", ""]);
			var Lc = e => !kc.has(e.toLowerCase());
			const xc = Nc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Uc = Nc.a.reduce((e, t) => (e[t] = null, e), {});
			var Mc = (e = Uc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Us(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Nc.g)(e);
									if (s) {
										const n = xc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Lc(s);
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
						case Nc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Nc.c: {
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
				Fc = Object(j.c)({
					overrides: Mc
				}),
				Bc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Gc = {
				focusedVerticalGqlError: null
			};
			var qc = (e = Gc, t) => {
				switch (t.type) {
					case Bc.h:
					case Bc.g:
					case Bc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Bc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Vc = {
				focusedVerticalGqlPending: !1
			};
			var Hc = (e = Vc, t) => {
					switch (t.type) {
						case Bc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Bc.e:
						case Bc.g:
						case Bc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Wc = Object(j.c)({
					error: qc,
					pending: Hc
				});
			var Qc = (e = "", t) => {
				switch (t.type) {
					case Bc.g:
					case Bc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Kc = {
				dismissed: !0
			};
			var $c = (e = Kc, t) => {
				switch (t.type) {
					case Bc.j:
						return {
							dismissed: !1
						};
					case Bc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Yc = (e = null, t) => {
				switch (t.type) {
					case Bc.g:
					case Bc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var zc = (e = null, t) => {
				switch (t.type) {
					case Bc.g:
					case Bc.c:
					case Bc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Jc = (e = null, t) => {
					switch (t.type) {
						case Bc.g:
						case Bc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Xc = Object(j.c)({
					api: Wc,
					components: $c,
					interactedSubredditIds: Yc,
					recommendedSubredditIds: Jc,
					category: Qc,
					lastLoadedEnv: zc
				});
			Object(Ae.a)("FONTS_FONT_FILES_PARSED");
			const Zc = [];
			var eo = (e = Zc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var to = (e = null, t) => {
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
			var ro = (e = !1, t) => {
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
			var so = (e = !1, t) => {
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
				no = Object(j.c)({
					error: to,
					pending: ro,
					showLoader: so
				});
			var ao = (e = null, t) => {
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
			var co = (e = null, t) => {
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
			var oo = (e = null, t) => {
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
			var io = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var uo = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var lo = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const po = he.n;
			var bo = (e = po, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || po
						}
						default:
							return e
					}
				},
				fo = Object(j.c)({
					api: no,
					correlationId: ao,
					gildModalThingId: oo,
					isAnonymous: io,
					isIframed: uo,
					message: lo,
					gildedThing: co,
					selectedAward: bo
				});
			var mo = (e = null, t) => {
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
			var yo = (e = !1, t) => {
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
				Oo = Object(j.c)({
					error: mo,
					pending: yo
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
				Eo = Object(j.c)({
					api: Oo,
					givePremiumModalAccountName: _o
				}),
				ho = r("./src/reddit/actions/header.ts"),
				Io = r("./src/reddit/actions/overlayEvents.ts");
			var go = (e = !1, t) => {
					switch (t.type) {
						case ho.a:
							return !1;
						case ho.b:
							return !0;
						case ho.c:
							return !e;
						case Io.b:
							return !1;
						default:
							return e
					}
				},
				So = Object(j.c)({
					isSubscriptionsDropdownOpen: go
				});
			var jo = (e = !1, t) => {
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
			const vo = {};
			var Do = (e = vo, t) => {
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
				Co = r("./src/reddit/actions/changeUsername.ts");
			var Ao = (e = !0, t) => {
					switch (t.type) {
						case Co.a:
							return !1;
						case Co.b:
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
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case we.PAGE_LOADED: {
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
				Fo = r("./src/reddit/actions/langSite/index.ts");
			const Bo = {
				bannerClosedTime: 0
			};
			var Go = (e = Bo, t) => {
					switch (t.type) {
						case Fo.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				qo = r("./src/reddit/actions/leaderboard/constants.ts");
			const Vo = {};
			var Ho = (e = Vo, t) => {
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
			const Wo = {};
			var Qo = (e = Wo, t) => {
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
				Ko = Object(j.c)({
					error: Ho,
					pending: Qo
				});
			const $o = {};
			var Yo = (e = $o, t) => {
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
				zo = Object(j.c)({
					api: Ko,
					models: Yo
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
			var Zo = (e = Xo, t) => {
				switch (t.type) {
					case Ne.f:
					case Ne.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.ac.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.e:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.ac.Users) || n && n.authors ? e : {
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
						case Ne.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.g:
						case Ne.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				rd = Object(j.c)({
					error: Zo,
					pending: td
				});
			const sd = {};
			var nd = (e = sd, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.ac.Users)) return e;
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
					case Ne.g: {
						const {
							key: r,
							authorOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.ac.Users) && e[r] ? {
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
						return -1 === n.indexOf(Re.ac.Users) ? e : {
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
						case Ne.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.ac.Users) ? e : s.authors ? {
								...e,
								[r]: {
									token: null
								}
							} : Object(Ut.a)(e, r)
						}
						default:
							return e
					}
				},
				id = Object(j.c)({
					api: rd,
					identifiers: cd,
					fetchedTokens: nd,
					loadMore: dd
				});
			const ud = {};
			var ld = (e = ud, t) => {
				switch (t.type) {
					case Ne.f:
					case Ne.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.ac.Comments) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.e:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.ac.Comments) || n && n.comments ? e : {
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
						case Ne.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Comments) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.g:
						case Ne.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Comments) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				fd = Object(j.c)({
					error: ld,
					pending: bd
				});
			const md = {};
			var yd = (e = md, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.ac.Comments)) return e;
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
			var _d = (e = Od, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							key: r,
							commentOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.ac.Comments) && e[r] ? {
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
						return -1 === n.indexOf(Re.ac.Comments) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ed = {};
			var hd = (e = Ed, t) => {
					switch (t.type) {
						case Ne.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.ac.Comments) ? e : s.comments ? {
								...e,
								[r]: {
									token: s.comments
								}
							} : Object(Ut.a)(e, r)
						}
						default:
							return e
					}
				},
				Id = Object(j.c)({
					api: fd,
					identifiers: _d,
					fetchedTokens: yd,
					loadMore: hd
				});
			const gd = {};
			var Sd = (e = gd, t) => {
				switch (t.type) {
					case Ne.f:
					case Ne.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.ac.Subreddits) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.e:
					case H.a: {
						const {
							key: r,
							error: s,
							success: n,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.ac.Subreddits) || n && n.communities ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const jd = {};
			var Td = (e = jd, t) => {
					switch (t.type) {
						case Ne.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Subreddits) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.g:
						case Ne.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Subreddits) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				vd = Object(j.c)({
					error: Sd,
					pending: Td
				});
			const Dd = {};
			var wd = (e = Dd, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.ac.Subreddits)) return e;
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
			var Cd = (e = Pd, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							key: r,
							communityOrder: s,
							type: n
						} = t.payload;
						return -1 !== n.indexOf(Re.ac.Subreddits) && e[r] ? {
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
						return -1 === n.indexOf(Re.ac.Subreddits) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ad = {};
			var Rd = (e = Ad, t) => {
					switch (t.type) {
						case Ne.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.ac.Subreddits) ? e : s.communities ? {
								...e,
								[r]: {
									token: s.communities
								}
							} : Object(Ut.a)(e, r)
						}
						default:
							return e
					}
				},
				Nd = Object(j.c)({
					api: vd,
					identifiers: Cd,
					fetchedTokens: wd,
					loadMore: Rd
				});
			const kd = {};
			var Ld = (e = kd, t) => {
				switch (t.type) {
					case Ne.f:
					case Ne.g:
					case H.b:
					case H.c: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.ac.Subreddits) && -1 === s.indexOf(Re.ac.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ne.e:
					case H.a: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.ac.Subreddits) && -1 === n.indexOf(Re.ac.Users) ? e : {
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
						case Ne.f:
						case H.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Subreddits) && -1 === s.indexOf(Re.ac.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ne.g:
						case Ne.e:
						case H.c:
						case H.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Subreddits) && -1 === s.indexOf(Re.ac.Users) ? e : {
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
				Md = Object(j.c)({
					error: Ld,
					pending: Ud
				});
			const Fd = {};
			var Bd = (e = Fd, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Re.ac.Subreddits) && -1 === n.indexOf(Re.ac.Users)) return e;
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
			const Gd = {};
			var qd = (e = Gd, t) => {
				switch (t.type) {
					case Ne.g: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.ac.Subreddits) && -1 === n.indexOf(Re.ac.Users) ? e : {
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
						return -1 === n.indexOf(Re.ac.Subreddits) && -1 === n.indexOf(Re.ac.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Vd = {};
			var Hd = (e = Vd, t) => {
					switch (t.type) {
						case Ne.g:
						case H.c: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.ac.Subreddits) && -1 === n.indexOf(Re.ac.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Ut.a)(e, r)
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
				Wd = Object(j.c)({
					api: Md,
					identifiers: qd,
					fetchedTokens: Bd,
					loadMore: Hd
				});
			const Qd = {};
			var Kd = r("./src/reddit/actions/eventPosts/constants.ts"),
				$d = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Yd = r("./src/reddit/actions/pages/topic.ts");
			const zd = {};
			var Jd = (e = zd, t) => {
					switch (t.type) {
						case Te.c:
						case Te.b:
						case Te.g:
						case Te.f:
						case ge.c:
						case ge.b:
						case De.c:
						case De.b:
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
						case $d.b:
						case $d.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case K.j:
						case Yd.TOPIC_DATA_PENDING:
						case Yd.TOPIC_DATA_LOADED:
						case Yd.MORE_POSTS_PENDING:
						case Yd.MORE_POSTS_LOADED:
						case K.i:
						case Kd.e:
						case Kd.c:
						case Kd.d: {
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
						case Ne.f:
						case Ne.g: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case Te.a:
						case Te.e:
						case ge.a:
						case De.a:
						case W.SUBREDDIT_FAILED:
						case ge.e:
						case ve.g:
						case je.q:
						case $d.a:
						case K.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case Yd.TOPIC_DATA_FAILED:
						case Yd.MORE_POSTS_FAILED:
						case Kd.b: {
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
						case Ne.e: {
							const {
								error: r,
								key: s,
								success: n,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.ac.Posts) || n && n.posts ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Xd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				Zd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				ei = r("./src/reddit/actions/subreddit/constants.ts");
			const ti = {};
			var ri = (e = ti, t) => {
					switch (t.type) {
						case Te.c:
						case Te.g:
						case ge.c:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case Pe.f:
						case W.SUBREDDIT_PENDING:
						case ge.g:
						case ve.f:
						case ve.i:
						case je.s:
						case $d.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case K.j:
						case Yd.MORE_POSTS_PENDING:
						case Kd.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.b:
						case Ne.f: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case Te.b:
						case Te.a:
						case Te.f:
						case Te.e:
						case ge.b:
						case ge.a:
						case De.a:
						case De.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case Xd.b:
						case Xd.c:
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
						case Zd.a:
						case Zd.b:
						case ei.j:
						case $d.b:
						case $d.a:
						case K.i:
						case K.h:
						case Yd.MORE_POSTS_LOADED:
						case Yd.MORE_POSTS_FAILED:
						case Kd.c:
						case Kd.b:
						case Kd.d: {
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
						case Ne.g:
						case Ne.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.ac.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				si = Object(j.c)({
					error: Jd,
					pending: ri
				});
			const ni = {};
			var ai = (e = ni, t) => {
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
						return r in e ? Rs()(e, [r]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return ii(e, t.payload);
					default:
						return e
				}
			};
			const pi = {};
			var bi = (e = pi, t) => {
					switch (t.type) {
						case Te.b:
						case ve.e:
						case ge.b:
						case De.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case Yd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case Te.f:
						case ge.f:
						case ve.h:
						case je.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case K.i:
						case Yd.MORE_POSTS_LOADED: {
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
						case Ne.g: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Re.ac.Posts) > -1) {
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
							return ii(e, t.payload);
						default:
							return e
					}
				},
				fi = r("./src/reddit/actions/post.ts");
			const mi = {};
			var yi = (e = mi, t) => {
					switch (t.type) {
						case Te.c:
						case ge.c:
						case ve.f:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case Pe.f:
						case q.PROFILE_POSTS_PENDING:
						case Yd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Xd.c:
						case ve.e:
						case Zd.b:
						case ge.b:
						case Te.b:
						case De.b:
						case W.SUBREDDIT_LOADED:
						case ei.j:
						case $d.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Yd.TOPIC_DATA_LOADED:
						case Kd.c: {
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
						case Te.f:
						case ge.f:
						case ve.h:
						case je.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case K.i:
						case Yd.MORE_POSTS_LOADED:
						case Kd.d: {
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
							return -1 === n.indexOf(Re.ac.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Ne.g: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Re.ac.Posts) ? e : {
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
						case W.SUBREDDIT_INVALIDATE_LISTING:
							return ii(e, t.payload);
						default:
							return e
					}
				},
				Oi = r("./src/lib/makeListingKey/index.ts");
			const _i = {};
			var Ei = (e = _i, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
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
					case wr.a:
					case wr.q: {
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
			const hi = {};
			var Ii = (e = hi, t) => {
				switch (t.type) {
					case Te.b:
					case Te.f:
					case ge.b:
					case De.b:
					case W.SUBREDDIT_LOADED:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case ve.e:
					case ve.h:
					case je.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case K.i:
					case Yd.TOPIC_DATA_LOADED:
					case Yd.MORE_POSTS_LOADED: {
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
						} : Object(Ut.a)(e, r)
					}
					case Ne.g:
					case H.c: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Re.ac.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Ut.a)(e, r)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return ii(e, t.payload);
					default:
						return e
				}
			};
			const gi = {};
			var Si = (e = gi, t) => {
					switch (t.type) {
						case Kd.c:
						case Kd.d: {
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
				ji = Object(j.c)({
					api: si,
					correlationIds: ai,
					endMarkers: li,
					fetchedTokens: bi,
					ids: yi,
					listingSort: Ei,
					loadMore: Ii,
					pageInfo: Si,
					treatment: ((e, t) => (r = Qd, s) => {
						switch (s.type) {
							case H.c:
							case Ne.g: {
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
					})(Re.ac.Posts, Re.Zb.Posts)
				}),
				Ti = Object(j.c)({
					activeKey: Jo,
					authorOrder: id,
					commentOrder: Id,
					communityOrder: Nd,
					listingOrder: Wd,
					postOrder: ji
				});
			var vi = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return la()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Di = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return la()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
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
				Ci = Object(j.c)({
					announcements: vi,
					featured: Di,
					isFrontpageLoaded: wi,
					shouldShowAnnouncements: Pi
				}),
				Ai = r("./src/reddit/actions/media.ts");
			const Ri = {},
				Ni = {};
			var ki = (e = Ni, t) => {
				switch (t.type) {
					case Ai.b: {
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
						case Ai.e: {
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
				Ui = Object(j.c)({
					currentSlideIndex: ki,
					isGalleryTileLayout: xi
				});
			var Mi = (e = !0, t) => {
				switch (t.type) {
					case Ai.c:
						return t.payload;
					default:
						return e
				}
			};
			var Fi = (e = .5, t) => {
					switch (t.type) {
						case Ai.d:
							return t.payload;
						default:
							return e
					}
				},
				Bi = Object(j.c)({
					isMuted: Mi,
					volume: Fi
				}),
				Gi = r("./src/reddit/actions/meta.ts");
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
			var Vi = (e = qi, t) => {
					switch (t.type) {
						case Gi.b:
							return t.payload;
						case Gi.a:
							return {
								...e, ...t.payload
							};
						case Gi.e:
							return {
								...e, locale: t.payload
							};
						case Gi.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Gi.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Gi.d:
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
			const Wi = {};
			var Qi = (e = Wi, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case B.b:
					case B.f:
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
					case Hi.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Ut.a)(e, r)
					}
					case Hi.S: {
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
			var Ki = (e = null, t) => {
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
			var $i = (e = !1, t) => {
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
				Yi = Object(j.c)({
					error: Ki,
					pending: $i
				});
			const zi = [];
			var Ji = (e = zi, t) => {
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
				Xi = Object(j.c)({
					api: Yi,
					names: Ji
				}),
				Zi = Object(j.c)({
					filteredSubreddits: Xi
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
				cu = Object(j.c)({
					error: su,
					pending: au
				});
			const ou = {};
			var du = (e = ou, t) => {
					switch (t.type) {
						case x.w:
						case B.b:
						case B.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				iu = Object(j.c)({
					api: cu,
					models: du
				});
			var uu = (e = null, t) => {
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
			var lu = (e = !1, t) => {
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
			var pu = (e = null, t) => {
					switch (t.type) {
						case De.b:
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
				bu = Object(j.c)({
					error: uu,
					fetched: lu,
					pending: pu
				});
			var fu = (e = null, t) => {
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
			var mu = (e = !1, t) => {
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
			var yu = (e = !1, t) => {
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
				Ou = Object(j.c)({
					error: fu,
					fetched: mu,
					pending: yu
				});
			var _u = (e = null, t) => {
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
			var Eu = (e = !1, t) => {
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
			var hu = (e = !1, t) => {
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
				Iu = Object(j.c)({
					error: _u,
					fetched: Eu,
					pending: hu
				});
			var gu = (e = null, t) => {
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
			var Su = (e = !1, t) => {
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
			var ju = (e = !1, t) => {
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
				Tu = Object(j.c)({
					error: gu,
					fetched: Su,
					pending: ju
				});
			var vu = (e = null, t) => {
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
			var Du = (e = !1, t) => {
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
			var wu = (e = !1, t) => {
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
				Pu = Object(j.c)({
					error: vu,
					fetched: Du,
					pending: wu
				});
			var Cu = (e = !1, t) => {
				switch (t.type) {
					case je.t:
						return !1;
					case je.u:
						return !0;
					default:
						return e
				}
			};
			var Au = (e = !1, t) => {
					switch (t.type) {
						case je.t:
							return !0;
						case je.u:
							return !1;
						default:
							return e
					}
				},
				Ru = Object(j.c)({
					fetched: Cu,
					pending: Au
				});
			var Nu = (e = null, t) => {
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
			var ku = (e = !1, t) => {
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
			var Lu = (e = !0, t) => {
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
				xu = Object(j.c)({
					error: Nu,
					fetched: ku,
					pending: Lu
				});
			var Uu = (e = null, t) => {
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
			var Mu = (e = !1, t) => {
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
			var Fu = (e = null, t) => {
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
				Bu = Object(j.c)({
					error: Uu,
					fetched: Mu,
					pending: Fu
				}),
				Gu = Object(j.c)({
					addSubreddit: bu,
					create: Ou,
					deleteMulti: Iu,
					duplicate: Tu,
					edit: Pu,
					forUser: Ru,
					recommendations: xu,
					removeSubreddit: Bu
				}),
				qu = r("./node_modules/lodash/isEqual.js"),
				Vu = r.n(qu),
				Hu = r("./node_modules/lodash/union.js"),
				Wu = r.n(Hu);

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
			var Ku = r("./src/reddit/actions/profile/constants.ts");
			const $u = {};
			var Yu = (e = $u, t) => {
					switch (t.type) {
						case De.b:
						case je.r:
						case je.u:
						case Ku.h: {
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
								a[t] = Wu()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Vu()(e, a) ? e : a
						}
						case je.g:
						case je.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Qu(n, s.url, (e, t) => e > t ? 1 : -1);
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
				zu = r("./src/reddit/actions/subscription/constants.ts"),
				Ju = r("./src/reddit/models/Multireddit/index.ts");
			const Xu = {};
			var Zu = (e = Xu, t) => {
				switch (t.type) {
					case De.b:
					case je.r:
					case je.u:
					case Ku.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Ju.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Vu()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return la()(r) ? e : {
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
					case zu.d: {
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
					case zu.e: {
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
			const el = {};
			var tl = (e = el, t) => {
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
				rl = Object(j.c)({
					api: Gu,
					byUserId: Yu,
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
				dl = Object(j.c)({
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
				fl = Object(j.c)({
					api: dl,
					earlierDividerIndex: il,
					notifications: pl,
					pageInfo: bl,
					markAllAsReadTimestamp: ul
				}),
				ml = r("./src/reddit/actions/nps.ts");
			const yl = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Ol = (e = yl, t) => {
					switch (t.type) {
						case ml.c:
							return {
								...yl, pending: !0
							};
						case ml.a:
							return yl;
						case ml.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...yl,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				_l = r("./src/reddit/actions/accountGender/constants.ts"),
				El = r("./src/reddit/actions/onboarding/constants.ts");
			const hl = {
				success: !1,
				failure: !1
			};
			var Il = (e = hl, t) => {
					switch (t.type) {
						case _l.b:
							return {
								...hl, success: !0
							};
						case _l.c:
							return {
								...hl, failure: !0
							};
						case El.a:
							return {
								...hl
							};
						default:
							return e
					}
				},
				gl = Object(j.c)({
					genderUpdateState: Il
				});
			const Sl = e => {
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
					for (const r of e) t[r.experimentName.toLowerCase()] = Sl(r);
					return t
				},
				Tl = {};
			var vl = (e = Tl, t) => {
				switch (t.type) {
					case Za.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return jl(r)
					}
					default:
						return e
				}
			};
			var Dl = Object(j.c)({
					byName: vl,
					canonicalUrl: (e = null, t) => {
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
				wl = Object(j.c)({
					experiments: Dl
				}),
				Pl = r("./node_modules/history/esm/history.js"),
				Cl = r("./src/reddit/constants/history.ts");
			const Al = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Rl = (e = Al, t) => {
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
						const o = Object(Pl.e)(a),
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
					case B.b:
					case B.f:
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
									[Cl.b.FeedCorrelationId]: r
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const Nl = {};
			var kl = (e = Nl, t) => {
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
			const Ll = {};
			var xl = (e = Ll, t) => {
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
				Ul = Object(j.c)({
					error: kl,
					pending: xl
				}),
				Ml = Object(j.c)({
					voting: Ul
				}),
				Fl = r("./src/reddit/reducers/posts/models/helpers.ts"),
				Bl = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Gl = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				ql = r("./src/reddit/models/Prediction/index.ts");
			const Vl = {};
			var Hl = (e = Vl, t) => {
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
					case B.b:
					case B.f:
					case Bl.o: {
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
						const s = At()(t.payload.posts, Object(Fl.i)([Fl.p])),
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
											type: vn.a.GA,
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
										type: vn.a.GA,
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
					case Bl.q:
					case Bl.p: {
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
					case Bl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(ql.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Gl.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Wl = {};
			var Ql = (e = Wl, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[vn.b.ByVoters]: r, pollId: s
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
					case B.b:
					case B.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[vn.b.ByVoters]: n,
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
			const Kl = {};
			var $l = (e = Kl, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[vn.b.ByVotingPower]: r, pollId: s
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
						case B.b:
						case B.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[vn.b.ByVotingPower]: n,
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
				Yl = Object(j.c)({
					byVoters: Ql,
					byVotingPower: $l
				});
			const zl = {};
			var Jl = (e = zl, t) => {
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
				Xl = Object(j.c)({
					api: Ml,
					models: Hl,
					results: Yl,
					rewards: Jl
				});
			const Zl = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var ep = (e = Zl, t) => {
				switch (t.type) {
					case Ur.i:
					case Ur.j:
						return {
							...e, reorderError: null
						};
					case Ur.h:
						return {
							...e, reorderError: t.payload
						};
					case Ur.l:
					case Ur.m:
						return {
							...e, updateDescriptionError: null
						};
					case Ur.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Ur.p:
					case Ur.q:
						return {
							...e, updateLayoutError: null
						};
					case Ur.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const tp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var rp = (e = tp, t) => {
					switch (t.type) {
						case Ur.i:
							return {
								...e, reorderPending: !0
							};
						case Ur.h:
						case Ur.j:
							return {
								...e, reorderPending: !1
							};
						case Ur.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Ur.k:
						case Ur.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Ur.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Ur.o:
						case Ur.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				sp = Object(j.c)({
					error: ep,
					pending: rp
				}),
				np = r("./src/reddit/helpers/path/index.ts");
			const ap = {},
				cp = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(np.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var op = (e = ap, t) => {
				switch (t.type) {
					case Te.b:
					case Te.f:
					case we.PAGE_LOADED:
					case ve.e:
					case ve.h:
					case G.b:
					case G.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case W.SUBREDDIT_LOADED:
					case B.b:
					case B.f:
					case fi.j:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ne.g:
					case Ce.b:
					case H.c:
					case Ur.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = cp(s);
							n = At()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Ur.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = cp(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Ur.g: {
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
					case Ur.a: {
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
					case Ur.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Ur.s: {
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
					case Ur.j: {
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
					case Ur.m: {
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
					case Ur.q: {
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
			const dp = {};
			var ip = (e = dp, t) => {
					switch (t.type) {
						case we.PAGE_LOADED:
						case Ur.f: {
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
						case Ur.d: {
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
						case Ur.e: {
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
				up = Object(j.c)({
					models: op,
					subredditToIds: ip,
					api: sp
				}),
				lp = r("./src/reddit/actions/postFlair.ts"),
				pp = r("./src/reddit/models/Flair/index.ts");
			const bp = {},
				fp = {
					displaySettings: {
						isEnabled: !1,
						position: pp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				mp = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...fp,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var yp = (e = bp, t) => {
					switch (t.type) {
						case Te.b:
						case Te.f:
						case we.PAGE_LOADED:
						case ge.f:
						case ve.e:
						case ve.h:
						case je.r:
						case $d.b:
						case B.b:
						case B.f:
						case ge.b:
						case De.b:
						case H.c:
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case Q.e:
						case Ce.b:
						case Ce.b:
						case Pe.b:
						case Pe.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ne.g:
						case Ne.g:
						case K.i:
							return mp(e, t.payload.postFlair);
						case lp.c: {
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
						case lp.a: {
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
						case lp.f: {
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
						case lp.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = Rs()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case lp.e:
						case lp.d: {
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
							return mp(e, r.postFlair)
						}
						default:
							return e
					}
				},
				Op = r("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const _p = {
				pending: !1,
				items: {}
			};
			var Ep = (e = _p, t) => {
				switch (t.type) {
					case Op.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Op.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var hp = (e = null, t) => {
					switch (t.type) {
						case fi.c:
							return t.payload;
						default:
							return e
					}
				},
				Ip = r("./src/reddit/actions/embedAndImage.ts");
			const gp = {};
			var Sp = (e = gp, t) => {
					switch (t.type) {
						case Ip.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case Ip.a: {
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
				jp = Object(j.c)({
					loadable: Sp
				});
			const Tp = {};
			var vp = (e = Tp, t) => {
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
			var Dp = (e = null, t) => {
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
			const wp = [];
			var Pp = (e = wp, t) => {
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
			const Cp = {};
			var Ap = (e = Cp, t) => {
				switch (t.type) {
					case ve.e:
					case ve.h:
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ne.g:
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
			var Rp = (e = null, t) => {
					switch (t.type) {
						case fi.a:
							return t.payload;
						default:
							return e
					}
				},
				Np = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const kp = {};
			var Lp = (e = kp, t) => {
				switch (t.type) {
					case Np.a: {
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
			const xp = {};
			var Up = (e = xp, t) => {
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
						case B.b:
						case B.f:
						case Bl.o: {
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
				Mp = r("./src/reddit/actions/bulkActions/constants.ts"),
				Fp = r("./src/reddit/actions/constants.ts"),
				Bp = r("./src/reddit/actions/flairManagement/constants.ts"),
				Gp = r("./src/reddit/actions/googleQASchema/constants.ts"),
				qp = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Vp = r("./src/reddit/actions/subredditTopContent.ts"),
				Hp = r("./src/reddit/helpers/isPost.ts"),
				Wp = r("./node_modules/lodash/pickBy.js"),
				Qp = r.n(Wp);

			function Kp(e, t) {
				const r = Qp()(t, (t, r = "") => !e[r] || !Vu()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var $p = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Yp = r("./src/reddit/models/Media/index.ts"),
				zp = r("./src/reddit/models/ModQueue/index.ts"),
				Jp = r("./src/reddit/models/Post/index.ts"),
				Xp = r("./src/reddit/models/Vote/index.ts"),
				Zp = r("./src/reddit/actions/subredditDuplicates.ts");
			const eb = {};
			var tb = (e = eb, t) => {
				switch (t.type) {
					case u.b:
						if (xs(t) === (Re.Mb.COMMENTS || Re.Mb.DUPLICATES)) {
							const r = Us(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Jp.t)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: Object(Fl.c)(e[n], e[t])
								}
							}
						}
						return e;
					case B.b:
					case B.f: {
						const r = Object(Fl.h)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(Fl.i)([r, Fl.d, Fl.n, Fl.o, Fl.p, Object(Fl.a)(e), Object(Fl.b)(e), Object(Fl.k)(e), Object(Fl.l)(e), Object(Fl.j)(e)]))
						}
					}
					case fi.j:
						return Kp(e, t.payload);
					case Zp.a:
						return Kp(e, t.payload.posts);
					case Te.b:
					case Te.f:
					case we.PAGE_LOADED:
					case Xd.c:
					case Zd.b:
					case ve.e:
					case ve.h:
					case G.b:
					case G.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case $d.b:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ei.j:
					case K.i:
					case Ce.b:
					case Yd.TOPIC_DATA_LOADED:
					case Yd.MORE_POSTS_LOADED:
					case Kd.c:
					case Kd.d:
					case Bl.o: {
						const r = Object(Fl.h)(t.payload.meta);
						return {
							...e,
							...At()(t.payload.posts, Object(Fl.i)([r, Fl.d, Fl.n, Fl.o, Fl.p, Object(Fl.m)(e), Object(Fl.k)(e), Object(Fl.j)(e)]))
						}
					}
					case ei.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Object(Fl.h)(t.meta);
							Object.assign(r, At()(t.posts, Object(Fl.i)([n, Fl.d, Fl.n, Fl.o, Object(Fl.m)(e), Object(Fl.k)(e), Object(Fl.j)(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case $d.b: {
						const r = Object(Fl.h)(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...At()(t.payload.posts, Object(Fl.i)([r, Fl.d, Fl.n, Fl.o, Object(Fl.m)(e), Object(Fl.k)(e), Object(Fl.j)(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Ne.g:
					case H.c: {
						const r = Object(Fl.h)(t.payload.meta),
							s = At()(t.payload.posts, Object(Fl.i)([r, Fl.n, Fl.d, Fl.o, Object(Fl.j)(e)]));
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
					case Fp.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Xp.c)(n, s)
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
							...r.reduce((e, t) => (e[t.post.id] = Object(Fl.i)([Fl.n])(Object(Qs.f)(t.post)), e), {})
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
								...Object($p.a)(c, s, n),
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
							[s]: Object($p.b)(n, r)
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
							...At()(s, Object(Fl.i)([Fl.n, Fl.o]))
						}
					}
					case Mp.b:
					case F.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(Hp.a)(e)), o = Object(zp.d)(e, r, c, n, a);
						return L()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ur.t: {
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
					case Ur.e: {
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
					case Ur.g: {
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
					case Kd.f: {
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
					case Kd.a: {
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
					case Bc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...At()(r.posts, Object(Fl.i)([Fl.n, Fl.o])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Vp.b:
						return {
							...At()(t.payload.posts, Object(Fl.i)([Fl.n, Fl.o])), ...e
						};
					case fi.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Yp.K)(n.media) ? {
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
					case Bp.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Bp.b: {
						const r = t.payload;
						return Object(Ut.a)(e, r)
					}
					case y.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case qp.b: {
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
					case Bl.t: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = Object(Fl.e)({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = Object(Fl.f)({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case Bl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Object(Fl.q)(e[r], Object(Gl.a)(s))
						}
					}
					case qp.a:
						return {
							...e
						};
					case Gp.b: {
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
					case Gp.a:
						return {
							...e
						};
					case Xd.a: {
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
			var rb = (e = null, t) => {
					switch (t.type) {
						case fi.g:
							return t.payload;
						default:
							return e
					}
				},
				sb = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const nb = {};
			var ab = (e = nb, t) => {
				switch (t.type) {
					case sb.a: {
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
			const cb = [];
			var ob = (e = cb, t) => {
					switch (t.type) {
						case fi.l: {
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
				db = r("./node_modules/uuid/v4.js"),
				ib = r.n(db);
			const ub = ib()();
			var lb = (e = ub, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case Os.h:
					case Os.a:
					case Os.m:
					case Os.f:
						return ib()();
					default:
						return e
				}
			};
			var pb = (e = null, t) => {
				switch (t.type) {
					case Os.d:
					case Os.o:
					case Os.k:
					case Os.g:
					case Os.a:
					case Os.m:
					case Os.f:
						return null;
					case Os.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Os.e:
						return "error";
					default:
						return e
				}
			};
			var bb = (e = !0, t) => {
				switch (t.type) {
					case Os.g:
						return !0;
					case Os.m:
					case Os.a:
					case Os.f:
					case Os.e:
						return !1;
					default:
						return e
				}
			};
			var fb = (e = !1, t) => {
					switch (t.type) {
						case Os.k:
							return !0;
						case Os.j:
						case Os.e:
						case Os.o:
						case Os.d:
							return !1;
						default:
							return e
					}
				},
				mb = Object(j.c)({
					creationToken: lb,
					error: pb,
					pending: bb,
					pendingUpdate: fb
				});
			const yb = {};
			var Ob = (e = yb, t) => {
				switch (t.type) {
					case Os.c: {
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
			const _b = {
				standalonePosts: {
					POSTS_LOADED: Os.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Os.o
				},
				recurringPosts: {
					POSTS_LOADED: Os.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Os.d
				}
			};

			function Eb(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case _b[e].POSTS_LOADED:
						case Os.f: {
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
						case Os.i:
						case Os.l: {
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
						case Os.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case _b[e].MUTATION_SUCCEEDED: {
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
			const hb = {};

			function Ib(e) {
				return (t = hb, r) => {
					switch (r.type) {
						case _b[e].POSTS_LOADED:
						case Os.f: {
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
						case Os.h: {
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
			var gb = r("./node_modules/lodash/uniq.js"),
				Sb = r.n(gb);
			const jb = {};

			function Tb(e) {
				return (t = jb, r) => {
					switch (r.type) {
						case _b[e].POSTS_LOADED:
						case Os.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[_b[e].postIdsKey];
							return {
								...t,
								[n]: Sb()([...t[n] || [], ...a])
							}
						}
						case Os.i:
						case Os.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case Os.h: {
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
			var vb = Object(j.c)({
					models: Eb("recurringPosts"),
					pageInfo: Ib("recurringPosts"),
					postOrder: Tb("recurringPosts"),
					editModal: Ob
				}),
				Db = Object(j.c)({
					models: Eb("standalonePosts"),
					pageInfo: Ib("standalonePosts"),
					postOrder: Tb("standalonePosts")
				}),
				wb = Object(j.c)({
					api: mb,
					standalonePosts: Db,
					recurringPosts: vb
				});
			var Pb = (e = null, t) => {
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
			var Cb = (e = !1, t) => {
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
				Ab = Object(j.c)({
					error: Pb,
					pending: Cb
				});
			const Rb = [];
			var Nb = (e = Rb, t) => {
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
							return Rb;
						default:
							return e
					}
				},
				kb = Object(j.c)({
					api: Ab,
					list: Nb
				}),
				Lb = r("./src/reddit/actions/video.ts");
			const xb = {};
			var Ub = (e = xb, t) => {
				switch (t.type) {
					case Lb.e: {
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
			const Mb = {};
			var Fb = (e = Mb, t) => {
				switch (t.type) {
					case Lb.a: {
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
			const Bb = {};
			var Gb = (e = Bb, t) => {
				switch (t.type) {
					case Lb.b: {
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
			const qb = {};
			var Vb = (e = qb, t) => {
				switch (t.type) {
					case Lb.c: {
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
			const Hb = {
				mutedInFeed: !0
			};
			var Wb = (e = Hb, t) => {
				switch (t.type) {
					case Lb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Qb = (e = null, t) => {
				switch (t.type) {
					case Lb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Lb.d:
						return null;
					default:
						return e
				}
			};
			const Kb = {};
			var $b = (e = Kb, t) => {
				switch (t.type) {
					case Lb.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Lb.e: {
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
			const Yb = {};
			var zb = (e = Yb, t) => {
				switch (t.type) {
					case Lb.h: {
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
					case Lb.f: {
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
			const Jb = {};
			var Xb = (e = Jb, t) => {
				switch (t.type) {
					case Lb.j: {
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
			const Zb = {};
			var ef = (e = Zb, t) => {
				switch (t.type) {
					case Lb.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Lb.g: {
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
			const tf = {};
			var rf = (e = tf, t) => {
				switch (t.type) {
					case Lb.i: {
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
			const sf = {};
			var nf = (e = sf, t) => {
					switch (t.type) {
						case Lb.m: {
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
				af = r("./src/reddit/constants/video.ts");
			const cf = {};
			var of = (e = cf, t) => {
				switch (t.type) {
					case Lb.n: {
						const {
							postId: r,
							time: s
						} = t.payload;
						return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < af.l ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			}, df = Object(j.c)({
				autoPlayed: Ub,
				buffering: Fb,
				consumed: Gb,
				continuousViewStartedAt: Vb,
				feed: Wb,
				fullscreen: Qb,
				loadable: $b,
				loadTimes: zb,
				metadata: Xb,
				paused: ef,
				playing: rf,
				started: nf,
				time: of
			}), uf = Object(j.c)({
				embedAndImage: jp,
				expanded: vp,
				focus: Dp,
				followed: Pp,
				instances: Ap,
				isAnimatingUpvote: Rp,
				isTrackingCrossposts: Lp,
				metaMap: Up,
				models: tb,
				modToMemberShare: rb,
				crowdControl: hp,
				postLevelCrowdControl: ab,
				recent: ob,
				scheduledPosts: wb,
				topAwarded: kb,
				video: df,
				carousel: Ep
			}), lf = r("./src/lib/reducers/addAuthentication/index.ts");
			const pf = {};
			var bf = Object(lf.a)((e = pf, t) => {
					switch (t.type) {
						case B.b:
						case B.f: {
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
				}, pf),
				ff = Object(j.c)({
					data: bf
				});
			const mf = {};
			var yf = (e = mf, t) => {
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
			const Of = {};
			var _f = (e = Of, t) => {
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
				Ef = Object(j.c)({
					error: yf,
					pending: _f
				});
			const hf = {};
			var If = (e = hf, t) => {
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
			const gf = {};
			var Sf = (e = gf, t) => {
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
				jf = Object(j.c)({
					error: If,
					pending: Sf
				}),
				Tf = Object(j.c)({
					fetch: Ef,
					purchase: jf
				});
			var vf = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Df = {};
			var wf = (e = Df, t) => {
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
				Pf = Object(j.c)({
					api: Tf,
					currentlyPurchasing: vf,
					models: wf
				});
			const Cf = {};
			var Af = (e = Cf, t) => {
				switch (t.type) {
					case G.f:
					case G.e:
					case G.c:
					case G.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case G.d:
					case G.a: {
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
			const Rf = {};
			var Nf = (e = Rf, t) => {
					switch (t.type) {
						case G.f:
						case G.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case G.e:
						case G.d:
						case G.b:
						case G.a: {
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
				kf = Object(j.c)({
					error: Af,
					pending: Nf
				});
			const Lf = {};
			var xf = (e = Lf, t) => {
					switch (t.type) {
						case G.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case G.b: {
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
				Uf = r("./src/reddit/actions/comment/list.ts");
			const Mf = {};
			var Ff = (e = Mf, t) => {
				switch (t.type) {
					case Uf.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Uf.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Rs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Bf = {};
			var Gf = (e = Bf, t) => {
				switch (t.type) {
					case G.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case G.b: {
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
			const qf = {};
			var Vf = (e = qf, t) => {
					switch (t.type) {
						case G.e:
						case G.b: {
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
							} : Object(Ut.a)(e, r)
						}
						default:
							return e
					}
				},
				Hf = Object(j.c)({
					api: kf,
					endMarkers: Ff,
					fetchedTokens: Gf,
					commentIds: xf,
					loadMore: Vf
				}),
				Wf = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Qf = (e = !0, t) => {
					switch (t.type) {
						case Wf.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Kf = Object(j.c)({
					pending: Qf
				}),
				$f = Object(j.c)({
					api: Kf
				});
			const Yf = {};
			var zf = (e = Yf, t) => (t.type, e);
			const Jf = {};
			var Xf = (e = Jf, t) => {
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
			const Zf = {};
			var em = (e = Zf, t) => {
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
				tm = Object(j.c)({
					error: Xf,
					pending: em
				});
			const rm = {};
			var sm = (e = rm, t) => {
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
			const nm = {};
			var am = (e = nm, t) => {
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
							} : nm
						}
						default:
							return e
					}
				},
				cm = Object(j.c)({
					api: tm,
					ids: sm,
					pageInfo: am
				}),
				om = r("./src/reddit/constants/posts.ts");
			const dm = {};
			var im = (e = dm, t) => {
					switch (t.type) {
						case H.c:
						case Ne.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Ku.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case zu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === om.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case wr.n: {
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
				um = r("./src/reddit/models/Subreddit/index.ts");
			const lm = {};
			var pm = (e = lm, t) => {
				switch (t.type) {
					case Te.b:
					case Te.f:
					case ge.f:
					case B.b:
					case B.f:
					case ge.b:
					case G.b:
					case G.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ce.b:
					case ve.e:
					case ve.h:
					case je.u:
					case Ku.h:
					case $d.b:
					case Ne.g:
					case K.i:
					case Ku.m:
					case Q.b:
					case Q.e:
					case H.c:
					case we.PAGE_LOADED:
					case qr.e:
					case Ns.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case De.b:
					case "RECOMMENDED_POSTS_LOADED":
					case zu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(um.h)(t) ? {
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
					case Ku.l:
					case Ku.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(N.merge)(e, {
							[r.id]: r
						}) : e
					}
					case wr.n: {
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
					case wr.l:
					case wr.k: {
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
			const bm = {};
			var fm = (e = bm, t) => {
					switch (t.type) {
						case Ku.c:
						case Ku.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Ku.a:
						case Ku.b:
						case Ku.d:
						case Ku.e: {
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
				mm = Object(j.c)({
					pending: fm
				});
			const ym = {};
			var Om = (e = ym, t) => {
				switch (t.type) {
					case Ku.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case Ku.e:
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
			const _m = {};
			var Em = (e = _m, t) => {
					switch (t.type) {
						case Ku.e: {
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
				hm = Object(j.c)({
					api: mm,
					models: Om,
					pageInfo: Em
				});
			const Im = {};
			var gm = (e = Im, t) => {
					switch (t.type) {
						case Ku.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Ku.g:
						case Ku.h: {
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
				Sm = Object(j.c)({
					pending: gm
				});
			const jm = {};
			var Tm = (e = jm, t) => {
					switch (t.type) {
						case Ku.h: {
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
				vm = Object(j.c)({
					api: Sm,
					pageInfo: Tm
				}),
				Dm = r("./src/reddit/actions/pinnedPost.ts");
			const wm = {};
			var Pm = Object(lf.a)((e = wm, t) => {
				switch (t.type) {
					case Dm.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Dm.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Re.cb)
						}
					}
					case Dm.g: {
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
			}, wm);
			const Cm = {};
			var Am = Object(lf.a)((e = Cm, t) => {
				switch (t.type) {
					case Dm.a: {
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
			}, Cm);
			const Rm = {};
			var Nm = Object(lf.a)((e = Rm, t) => {
					switch (t.type) {
						case Dm.c:
						case Dm.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case Dm.b:
						case Dm.e:
						case Dm.d:
						case Dm.g: {
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
				}, Rm),
				km = Object(j.c)({
					data: Pm,
					initialData: Am,
					pending: Nm
				}),
				Lm = r("./src/reddit/actions/trophyCase.ts");
			const xm = {};
			var Um, Mm, Fm = (e = xm, t) => {
					switch (t.type) {
						case Lm.a: {
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
				Bm = Object(j.c)({
					about: im,
					models: pm,
					moderated: hm,
					multireddits: vm,
					pinnedPosts: km,
					trophyCases: Fm
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Um || (Um = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Mm || (Mm = {}));
			var Gm, qm, Vm;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Gm || (Gm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(qm || (qm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Vm || (Vm = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Gm || (Gm = {}));
			Object(Ae.a)("PROMO__SHOW_PROMO"), Object(Ae.a)("PROMO__HIDE_PROMO");
			const Hm = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Wm = (e = Hm, t) => {
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
				Qm = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Km = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Qm.d,
					viewer_streams_refresh: Qm.c,
					viewer_streams_refresh_slop: Qm.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var $m = (e = Km, t) => {
				switch (t.type) {
					case Qm.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Qm.x: {
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
					case Qm.G:
						return {
							...e, isPending: !0
						};
					case Qm.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Qm.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Ym = (e = {}, t) => {
				switch (t.type) {
					case Qm.L:
						return {
							...e, [Qm.b]: t.payload.error
						};
					case Qm.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Qm.z: {
						const {
							[Qm.b]: t, ...r
						} = e;
						return r
					}
					case Qm.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const zm = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var Jm = (e = {}, t) => {
				switch (t.type) {
					case Qm.N:
						return zm(e, t.payload, !0);
					case Qm.O:
						return zm(e, Qm.b, !0);
					case Qm.y:
						return zm(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Qm.z:
						return zm(e, Qm.b, !1, t.payload.utcTimeStamp);
					case Qm.M:
						return zm(e, t.payload.streamId, !1);
					case Qm.L:
						return zm(e, Qm.b, !1);
					default:
						return e
				}
			};
			const Xm = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Zm = (e = Xm, t) => {
					switch (t.type) {
						case Qm.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Qm.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Qm.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ey = Object(j.c)({
					config: $m,
					error: Ym,
					pending: Jm,
					recommendedViewerSubreddits: Zm
				});
			const ty = {};
			var ry = (e = ty, t) => {
				switch (t.type) {
					case Qm.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Qm.F:
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
			const sy = {
				cursor: Qm.W,
				timestamps: {},
				visitOrder: []
			};
			var ny = (e = sy, t) => {
				switch (t.type) {
					case Qm.P:
						return sy;
					case Qm.X: {
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
						return ay(e, t.payload.id);
					case Qm.E:
						return ay(e, t.payload);
					case fi.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return cy(e, r)
					}
					case Qm.V: {
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
			const ay = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				cy = (e, t) => {
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
				oy = {
					ended: [],
					removed: []
				};

			function dy(e) {
				return [...new Set(e)]
			}
			var iy = (e = oy, t) => {
				switch (t.type) {
					case Qm.t:
						return {
							...e, ended: dy(e.ended.concat(t.payload))
						};
					case Qm.u:
						return {
							...e, removed: dy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const uy = {};
			var ly = (e = uy, t) => {
				switch (t.type) {
					case Qm.z:
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
			const py = {},
				by = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Qm.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Qm.l - r
						}
					}), r)
				},
				fy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Qm.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var my = (e = py, t) => {
				switch (t.type) {
					case Qm.y:
						return fy(e, t.payload.model);
					case Qm.z:
						return by(e, t.payload.models);
					case Qm.D: {
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
			const yy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Oy = (e = yy, t) => {
				switch (t.type) {
					case Qm.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Qm.A:
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
			const _y = {
				reported: []
			};
			var Ey = (e = _y, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const hy = {
				isIntroFinished: !1
			};
			var Iy = (e = hy, t) => {
				switch (t.type) {
					case Qm.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const gy = {
				reportedStreams: []
			};
			var Sy = (e = gy, t) => {
					switch (t.type) {
						case Qm.C:
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
				jy = Object(j.c)({
					api: ey,
					history: ny,
					hlsStreams: iy,
					listings: ly,
					models: my,
					preloads: Oy,
					reports: Ey,
					theaterSettings: Iy,
					userSettings: Sy,
					automuteLevels: ry
				}),
				Ty = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				vy = r("./src/reddit/actions/session.ts");
			const Dy = [];
			var wy = (e = Dy, t) => {
				switch (t.type) {
					case vy.c:
					case vy.d:
						return Dy;
					case Ty.d:
						return ((e, t) => Vu()(e, t) ? e : t)(e, t.subreddits);
					case Ty.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Ty.c)
					}
					case Ty.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Ty.c)
					}
					default:
						return e
				}
			};
			const Py = {};
			var Cy = (e = Py, t) => {
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
				Ay = r("./src/reddit/actions/pages/report/constants.ts");
			var Ry = (e = null, t) => {
				switch (t.type) {
					case Ay.a:
						return t.payload;
					default:
						return e
				}
			};
			var Ny = (e = null, t) => {
				switch (t.type) {
					case Ay.b:
						return t.payload;
					case Ay.c:
					case Ay.d:
						return !1;
					default:
						return e
				}
			};
			var ky = (e = !1, t) => {
				switch (t.type) {
					case Ay.d:
						return !0;
					case Ay.c:
					case Ay.b:
						return !1;
					default:
						return e
				}
			};
			var Ly = (e = !1, t) => {
					switch (t.type) {
						case Ay.c:
							return !0;
						case Ay.b:
						case Ay.d:
							return !1;
						default:
							return e
					}
				},
				xy = Object(j.c)({
					error: Ny,
					pending: ky,
					success: Ly
				}),
				Uy = r("./src/reddit/actions/reportPageRules/constants.ts");
			const My = [];
			var Fy = (e = My, t) => {
					switch (t.type) {
						case Uy.a:
							return t.payload;
						default:
							return e
					}
				},
				By = Object(j.c)({
					reportPageApi: xy,
					reportPageRules: Fy,
					initialReason: Ry
				}),
				Gy = r("./src/reddit/actions/reportRules.ts");
			const qy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Vy = (e = qy, t) => {
				switch (t.type) {
					case Gy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Gy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ae.a)("REQUEST_HOST_SET");
			var Hy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ae.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Wy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Qy = (e = Wy, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				Ky = r("./src/reddit/components/SearchDropdown/index.tsx");
			var $y = (e = !1, t) => {
				switch (t.type) {
					case Ne.c:
						return !e;
					case Io.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(Ky.b), a = document.getElementById(Ky.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Ne.b:
					case Io.a:
					case Io.c:
						return !1;
					default:
						return e
				}
			};
			var Yy = (e = "", t) => {
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
			const zy = Object.create(null);
			var Jy = (e = zy, t) => {
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
				Xy = r("./src/reddit/models/Search/index.ts");
			const Zy = {};
			var eO = (e = Zy, t) => {
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Xy.e)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				tO = Object(j.c)({
					idsByQuery: Jy,
					models: eO
				});
			const rO = {};
			var sO = (e = rO, t) => {
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
				nO = Object(j.c)({
					isDropdownOpen: $y,
					isSubredditSearchEnabled: (e = !0, t) => {
						switch (t.type) {
							case Ne.a:
								return !1;
							case Ne.d:
								return !0;
							default:
								return e
						}
					},
					searchQuery: Yy,
					typeahead: tO,
					viewTreatment: sO
				}),
				aO = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const cO = {};
			var oO = (e = cO, t) => {
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
						if (i === aO.c.Trending || r) {
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
			const dO = {};
			var iO = (e = dO, t) => {
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
			const uO = {};
			var lO = (e = uO, t) => {
					switch (t.type) {
						case H.c: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : uO
						}
						default:
							return e
					}
				},
				pO = Object(j.c)({
					headerContent: oO,
					models: iO,
					order: lO
				});
			Object(Ae.a)("SEO__CRAWLER_RECEIVED");
			var bO = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				fO = r("./src/reddit/actions/seo/linksModule.ts");
			const mO = {};
			var yO = (e = mO, t) => {
					switch (t.type) {
						case fO.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case fO.c:
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
				OO = r("./src/reddit/actions/seo/topicLinks.ts");
			const _O = {};
			var EO = (e = _O, t) => {
					switch (t.type) {
						case OO.a:
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
				hO = Object(j.c)({
					crawler: bO,
					linksModule: yO,
					topicLinks: EO
				}),
				IO = r("./src/reddit/actions/shortcuts/constants.ts");
			var gO = (e = null, t) => {
				switch (t.type) {
					case IO.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var SO = (e = null, t) => {
					switch (t.type) {
						case IO.b:
							return t.payload || null;
						default:
							return e
					}
				},
				jO = r("./src/reddit/constants/shortcuts.ts"),
				TO = r("./src/reddit/helpers/history/index.ts");
			const vO = jO.d.Global,
				DO = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(TO.b)(Cl.b.IsOverlay) ? jO.d.Lightbox : jO.d.CommentPage;
						case "rpan":
							return Object(TO.b)(Cl.b.IsOverlay) ? jO.d.Lightbox : vO;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return jO.d.Listing;
						case "modQueuePages":
							return jO.d.Modqueue;
						default:
							return vO
					}
				};
			var wO = (e = vO, t) => {
					switch (t.type) {
						case u.b:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return DO(e)
							}
							return vO;
						default:
							return e
					}
				},
				PO = Object(j.c)({
					activeCommentId: gO,
					activePostId: SO,
					namespace: wO
				});
			var CO = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				AO = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				RO = Object(j.c)({
					firstFetch: CO,
					models: AO.b
				}),
				NO = r("./src/reddit/actions/streaming/modSettings.ts");
			var kO = (e = null, t) => {
				switch (t.type) {
					case NO.b:
					case NO.c:
						return null;
					case NO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var LO = (e = !1, t) => {
					switch (t.type) {
						case NO.b:
							return !0;
						case NO.c:
						case NO.a:
							return !1;
						default:
							return e
					}
				},
				xO = Object(j.c)({
					error: kO,
					pending: LO
				}),
				UO = r("./src/reddit/actions/streaming/constants.ts");
			const MO = {};
			var FO = (e = MO, t) => {
					switch (t.type) {
						case UO.a: {
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
				BO = Object(j.c)({
					api: xO,
					modSettings: FO
				}),
				GO = r("./src/reddit/models/StructuredStyles/index.ts");
			const qO = {};
			var VO = (e = qO, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return qO;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(GO.h)(e.styles)
						}
						default:
							return e
					}
				},
				HO = r("./src/reddit/actions/exportImportStyles.ts");
			var WO = (e = null, t) => {
				switch (t.type) {
					case HO.c:
					case HO.b:
						return null;
					case HO.a:
						return t.payload;
					default:
						return e
				}
			};
			var QO = (e = !1, t) => {
					switch (t.type) {
						case HO.c:
							return !0;
						case HO.b:
						case HO.a:
							return !1;
						default:
							return e
					}
				},
				KO = Object(j.c)({
					error: WO,
					pending: QO
				}),
				$O = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				YO = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const zO = {};
			var JO = (e = zO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case H.c:
						case Ne.g:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
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
						case $O.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case $O.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Ut.a)(e, r)
						}
						case lp.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Ut.a)(e, r)
						}
						case b.k:
							return zO;
						case YO.b: {
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
				XO = Object(j.c)({
					models: JO
				});
			const ZO = {};
			var e_ = (e = ZO, t) => {
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
						return ZO;
					default:
						return e
				}
			};
			var t_ = (e = !1, t) => {
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
			var r_ = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case wr.g:
						return null;
					default:
						return e
				}
			};
			const s_ = {};
			var n_ = (e = s_, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.f:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
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
						case Ne.g:
						case H.c: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (ma()(r.subreddits, (e, t) => {
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
								s = Object(GO.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Ku.k: {
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
						case wr.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Kp(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case wr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Kp(e, {
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
				a_ = Object(j.c)({
					draft: VO,
					exportStyles: KO,
					flairTemplate: XO,
					imagePreviews: e_,
					isBladeEditorDirty: t_,
					isEditing: r_,
					models: n_
				});
			Object(Ae.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var c_ = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				o_ = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const d_ = {};
			var i_ = (e = d_, t) => {
				switch (t.type) {
					case o_.c:
					case o_.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case o_.a: {
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
			const u_ = {};
			var l_ = (e = u_, t) => {
					switch (t.type) {
						case o_.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case o_.b:
						case o_.a: {
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
				p_ = Object(j.c)({
					error: i_,
					pending: l_
				});
			const b_ = {};
			var f_ = (e = b_, t) => {
					switch (t.type) {
						case o_.b: {
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
				m_ = Object(j.c)({
					api: p_,
					models: f_
				}),
				y_ = r("./src/reddit/actions/category/constants.ts"),
				O_ = r("./src/reddit/actions/subredditMention/constants.ts");
			const __ = {};
			var E_ = (e = __, t) => {
				switch (t.type) {
					case O_.d:
					case B.b:
					case B.f:
					case H.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Ns.PAGE_LOADED:
					case G.b:
					case G.e:
					case Pe.b:
					case Pe.a:
					case Pe.e:
					case Pe.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ne.g:
					case Yd.TOPIC_DATA_LOADED:
					case ei.u: {
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
					case Wa.a: {
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
					case zu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === om.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Bc.g:
					case y_.f:
					case ei.g:
					case ei.o:
					case rs.B: {
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
					case Wa.b: {
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
			const h_ = {};
			var I_ = (e = h_, t) => {
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
			var g_ = (e = !1, t) => {
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
				S_ = Object(j.c)({
					error: I_,
					pending: g_
				}),
				j_ = r("./src/reddit/actions/subredditCreation.ts");
			const T_ = {
				apiError: null
			};
			var v_ = (e = T_, t) => {
				switch (t.type) {
					case j_.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case j_.a:
					case j_.c:
					case j_.e:
						return T_;
					default:
						return e
				}
			};
			var D_ = (e = null, t) => {
				switch (t.type) {
					case j_.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case j_.a:
					case j_.c:
					case j_.e:
						return null;
					default:
						return e
				}
			};
			var w_ = (e = null, t) => {
				switch (t.type) {
					case j_.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case j_.c:
					case j_.b:
						return null;
					default:
						return e
				}
			};
			var P_ = (e = !1, t) => {
					switch (t.type) {
						case j_.c:
							return !0;
						case j_.e:
						case j_.b:
							return !1;
						default:
							return e
					}
				},
				C_ = Object(j.c)({
					error: v_,
					lastCreatedSubredditId: w_,
					initialCrosspost: D_,
					pending: P_
				});
			var A_ = (e = !1, t) => {
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
				R_ = Object(j.c)({
					pending: A_
				});
			const N_ = {};
			var k_ = (e = N_, t) => {
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
			const L_ = {};
			var x_ = (e = L_, t) => {
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
				U_ = Object(j.c)({
					error: k_,
					pending: x_
				});
			const M_ = {};
			var F_ = (e = M_, t) => {
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
				B_ = Object(j.c)({
					pending: F_
				});
			var G_ = (e = null, t) => {
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
			var q_ = (e = !1, t) => {
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
				V_ = Object(j.c)({
					error: G_,
					pending: q_
				});
			var H_ = (e = null, t) => {
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
			var W_ = (e = !1, t) => {
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
				Q_ = Object(j.c)({
					error: H_,
					pending: W_
				}),
				K_ = r("./src/reddit/actions/subredditRules/constants.ts");
			var $_ = (e = !1, t) => {
					switch (t.type) {
						case K_.c:
							return !0;
						case K_.a:
						case K_.b:
							return !1;
						default:
							return e
					}
				},
				Y_ = r("./src/reddit/actions/subredditSettings.ts");
			var z_ = (e = !1, t) => {
					switch (t.type) {
						case Y_.e:
							return !0;
						case Y_.f:
						case Y_.d:
							return !1;
						default:
							return e
					}
				},
				J_ = Object(j.c)({
					pending: z_
				});
			const X_ = {};
			var Z_ = (e = X_, t) => {
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
				eE = Object(j.c)({
					pending: Z_
				}),
				tE = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const rE = {};
			var sE = (e = rE, t) => {
				switch (t.type) {
					case tE.c:
					case tE.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case tE.a: {
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
			const nE = {};
			var aE = (e = nE, t) => {
					switch (t.type) {
						case tE.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case tE.b:
						case tE.a: {
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
				cE = Object(j.c)({
					error: sE,
					pending: aE
				});
			const oE = {};
			var dE = (e = oE, t) => {
				switch (t.type) {
					case Vp.c:
					case Vp.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Vp.a: {
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
			const iE = {};
			var uE = (e = iE, t) => {
					switch (t.type) {
						case Vp.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Vp.b:
						case Vp.a: {
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
				lE = Object(j.c)({
					error: dE,
					pending: uE
				}),
				pE = Object(j.c)({
					about: S_,
					create: C_,
					inlineEditing: R_,
					models: U_,
					onboarding: B_,
					productOffers: V_,
					rankings: Q_,
					rules: $_,
					settings: J_,
					similar: eE,
					topContent: lE,
					wiki: cE
				}),
				bE = r("./node_modules/lodash/isNil.js"),
				fE = r.n(bE);
			const mE = {};
			var yE = (e = mE, t) => {
					switch (t.type) {
						case K.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: fE()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				OE = Object(j.c)({
					meta: yE
				});
			const _E = {};
			var EE = (e = _E, t) => {
				switch (t.type) {
					case y_.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return la()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const hE = {
				pending: !1,
				items: {}
			};
			var IE = (e = hE, t) => {
				switch (t.type) {
					case Op.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Op.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const gE = {};
			var SE = (e = gE, t) => {
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
				jE = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const TE = {};
			var vE = (e = TE, t) => {
					switch (t.type) {
						case jE.b:
						case jE.c:
						case jE.a: {
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
				DE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var wE = (e = null, t) => {
				switch (t.type) {
					case DE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case DE.c:
					case DE.b:
						return null;
					default:
						return e
				}
			};
			var PE = (e = !1, t) => {
					switch (t.type) {
						case DE.c:
							return !0;
						case DE.b:
						case DE.a:
							return !1;
						default:
							return e
					}
				},
				CE = Object(j.c)({
					errors: wE,
					pending: PE
				});
			const AE = {};
			var RE = (e = AE, t) => {
					switch (t.type) {
						case DE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Vu()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				NE = Object(j.c)({
					api: CE,
					ids: RE
				});
			const kE = {};
			var LE = (e = kE, t) => {
					switch (t.type) {
						case Zp.a: {
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
							return Kp(c, {
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
				xE = Object(j.c)({
					models: LE
				});
			const UE = {};
			var ME = (e = UE, t) => {
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
			const FE = {};
			var BE = (e = FE, t) => {
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
			const GE = {};
			var qE = (e = GE, t) => {
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
			const VE = {};
			var HE = (e = VE, t) => {
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
				WE = Object(j.c)({
					assets: ME,
					communityRaw: BE,
					distributions: qE,
					releaseNotes: HE
				}),
				QE = r("./node_modules/lodash/isEqualWith.js"),
				KE = r.n(QE),
				$E = r("./src/lib/forceHttps/index.ts");
			const YE = {},
				zE = (e, t) => {
					return !KE()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				JE = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !zE(c, o) || (s[a] = {
							...c,
							...o
						})
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var XE = (e = YE, t) => {
				switch (t.type) {
					case zu.c:
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
								return a.icon.url ? c.icon.url = Object($E.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(N.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Te.b:
					case Te.f:
					case Ty.b:
					case O_.d:
					case y_.f:
					case ge.f:
					case Bc.g:
					case Xd.c:
					case Zd.b:
					case ve.e:
					case ve.h:
					case F.k:
					case je.r:
					case je.u:
					case Ku.h:
					case $d.b:
					case B.b:
					case B.f:
					case ge.b:
					case De.b:
					case G.b:
					case G.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case Ku.e:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case qr.e:
					case Ns.PAGE_LOADED:
					case Ku.m:
					case Q.b:
					case Q.e:
					case Ce.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.g:
					case K.c:
					case K.f:
					case K.i:
					case ei.a:
					case ei.g:
					case ei.o:
					case Yd.TOPIC_DATA_LOADED:
					case Yd.MORE_POSTS_LOADED:
					case rs.B:
						return JE(e, t.payload.subreddits || {});
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
						return JE(e, s)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return JE(e, r.subreddits || {})
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
						return JE(e, r)
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
					case Y_.f: {
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
					case o_.b: {
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
			var ZE = (e = null, t) => {
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
			var eh = (e = !1, t) => {
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
			var th = (e = !1, t) => {
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
				rh = Object(j.c)({
					errors: ZE,
					fetched: eh,
					pending: th
				});
			var sh = (e = null, t) => {
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
				nh = Object(j.c)({
					api: rh,
					order: sh
				});
			const ah = {};
			var ch = (e = ah, t) => {
				switch (t.type) {
					case Y_.a: {
						const r = t.payload;
						return Object(N.merge)(e, r)
					}
					case Y_.b: {
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
			const oh = {};
			var dh = (e = oh, t) => {
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
			const ih = {};
			var uh = (e = ih, t) => {
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
			const lh = {};
			var ph = (e = lh, t) => {
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
			const bh = {},
				fh = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = Aa(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				mh = (e, t, r) => {
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
			var yh = (e = bh, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Ra(r)
						}
					}
					case Ca.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: fh(n, r, s)
						}
					}
					case Ca.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: mh(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const Oh = {},
				_h = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var Eh = (e = Oh, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(_h)
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
								[r]: o.sort(_h)
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
									[r]: [t, ...e[r]].sort(_h)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				hh = r("./src/lib/makeProductOfferKey/index.ts");
			const Ih = {};
			var gh = (e = Ih, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(hh.a)(t.type, r);
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
			const Sh = {};
			var jh = (e = Sh, t) => {
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
				Th = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const vh = {};
			var Dh = (e = vh, t) => {
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
						}) => Th.e.includes(e))))(s.cards);
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
			const wh = {};
			var Ph = (e = wh, t) => {
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
						return wh;
					default:
						return e
				}
			};
			const Ch = {};
			var Ah = (e = Ch, t) => {
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
			const Rh = {};
			var Nh = (e = Rh, t) => {
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
				kh = r("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const Lh = {};
			var xh = (e = Lh, t) => {
				switch (t.type) {
					case kh.a: {
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
			const Uh = {};
			var Mh = (e = Uh, t) => {
				switch (t.type) {
					case K_.b: {
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
					case K_.e: {
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
					case K_.f: {
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
					case K_.g:
					case K_.d: {
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
			const Fh = {};
			var Bh = (e = Fh, t) => {
				switch (t.type) {
					case Y_.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case Y_.f: {
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
					case wr.n: {
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
			const Gh = {};
			var qh = (e = Gh, t) => {
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
			const Vh = {};
			var Hh = (e = Vh, t) => {
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
			const Wh = {};
			var Qh = (e = Wh, t) => {
				switch (t.type) {
					case Bc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Vp.b: {
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
			const Kh = [];
			var $h = (e = Kh, t) => {
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
			const Yh = {};
			var zh = (e = Yh, t) => {
					switch (t.type) {
						case O_.d:
						case rs.B:
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
				Jh = Object(j.c)({
					about: E_,
					api: pE,
					appliedFilters: OE,
					byCategory: EE,
					carousel: IE,
					communityInfo: SE,
					countrySiteSettings: vE,
					crosspostable: NE,
					duplicates: xE,
					gov: WE,
					models: XE,
					moderated: nh,
					notificationSettings: ch,
					onboarding: dh,
					powerupRecentSupporters: uh,
					powerups: ph,
					powerupsEmojis: yh,
					powerupTopSupporters: Eh,
					productOffers: gh,
					products: jh,
					progressModule: Dh,
					questions: Ph,
					rankings: Ah,
					rankingsPageInfo: Nh,
					related: xh,
					rules: Mh,
					settings: Bh,
					similar: qh,
					survey: Hh,
					topContent: Qh,
					trending: $h,
					unavailableModels: zh
				});
			const Xh = {};
			var Zh = Object(lf.a)((e = Xh, t) => {
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
				}, Xh),
				eI = Object(j.c)({
					data: Zh
				}),
				tI = r("./node_modules/lodash/values.js"),
				rI = r.n(tI);
			const sI = [];
			var nI = (e = sI, t) => {
				switch (t.type) {
					case zu.d: {
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
					case je.u: {
						const {
							multireddits: e
						} = t.payload;
						return rI()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case zu.e: {
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
			var aI = (e = null, t) => {
				switch (t.type) {
					case zu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case zu.b:
					case zu.c:
						return null;
					default:
						return e
				}
			};
			var cI = (e = !1, t) => {
				switch (t.type) {
					case zu.b:
					case zu.c:
						return !0;
					case zu.a:
						return !1;
					default:
						return e
				}
			};
			var oI = (e = !1, t) => {
					switch (t.type) {
						case zu.b:
							return !0;
						case zu.c:
						case zu.a:
							return !1;
						default:
							return e
					}
				},
				dI = Object(j.c)({
					errors: aI,
					fetched: cI,
					pending: oI
				});
			const iI = [];
			var uI = (e = iI, t) => {
				switch (t.type) {
					case zu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case zu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== om.a.PROFILE) return e;
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
					case zu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === om.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const lI = [];
			var pI = (e = lI, t) => {
				switch (t.type) {
					case zu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case zu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== om.a.SUBREDDIT) return e;
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
					case zu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === om.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const bI = [],
				fI = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var mI = (e = bI, t) => {
					switch (t.type) {
						case je.u: {
							const {
								multireddits: r
							} = t.payload, s = rI()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(fI(r));
							return Vu()(e, s) ? e : s
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
								d = Wu()(e, c).sort(fI(o));
							return Vu()(e, d) ? e : d
						}
						case zu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(fI(n)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(fI(n))
						}
						default:
							return e
					}
				},
				yI = r("./node_modules/lodash/difference.js"),
				OI = r.n(yI);
			const _I = [];
			var EI = (e = _I, t) => {
				switch (t.type) {
					case Ku.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Sb()([...e, ...r])
					}
					case zu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case zu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === om.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? Sb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : OI()(e, c)
					}
					default:
						return e
				}
			};
			const hI = [];
			var II = (e = hI, t) => {
					switch (t.type) {
						case Ku.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Sb()([...e, ...r])
						}
						case zu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case zu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === om.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? Sb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : OI()(e, c)
						}
						default:
							return e
					}
				},
				gI = Object(j.c)({
					api: dI,
					favoriteMultiOrder: nI,
					favoriteProfileOrder: uI,
					favoriteSubredditOrder: pI,
					multiredditOrder: mI,
					profileOrder: EI,
					subredditOrder: II
				}),
				SI = r("./src/reddit/actions/survey/constants.ts");
			var jI = (e = null, t) => {
				switch (t.type) {
					case SI.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var TI = (e = 1, t) => {
				switch (t.type) {
					case SI.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var vI = (e = !1, t) => {
				switch (t.type) {
					case SI.b:
						return !e;
					default:
						return e
				}
			};
			var DI = (e = !0, t) => {
					switch (t.type) {
						case SI.i:
							return !e;
						default:
							return e
					}
				},
				wI = Object(j.c)({
					activeDemoTrigger: jI,
					demoTriggerThreshold: TI,
					isDemoEnabled: vI,
					isSampleFactorEnabled: DI
				});
			var PI = (e = !1, t) => {
					switch (t.type) {
						case Yt.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				CI = r("./src/reddit/actions/tags/constants.ts");
			const AI = {
				pending: !1,
				error: !1
			};
			var RI = (e = AI, t) => {
				switch (t.type) {
					case CI.l:
						return {
							...e, pending: !0
						};
					case CI.m:
						return {
							error: !1, pending: !1
						};
					case CI.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const NI = {
				pending: !1,
				error: !1
			};
			var kI = (e = NI, t) => {
				switch (t.type) {
					case CI.o:
						return {
							...e, pending: !0
						};
					case CI.p:
						return {
							error: !1, pending: !1
						};
					case CI.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const LI = {
				pending: !1,
				error: !1
			};
			var xI = (e = LI, t) => {
				switch (t.type) {
					case CI.t:
						return {
							...e, pending: !0
						};
					case CI.s:
					case CI.r:
					case CI.e:
					case CI.j:
						return {
							error: !1, pending: !1
						};
					case CI.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const UI = {
				pending: !1,
				error: !1
			};
			var MI = (e = UI, t) => {
				switch (t.type) {
					case CI.v:
						return {
							...e, pending: !0
						};
					case CI.w:
						return {
							error: !1, pending: !1
						};
					case CI.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const FI = {
				pending: !1,
				error: !1
			};
			var BI = (e = FI, t) => {
					switch (t.type) {
						case CI.g:
							return {
								...e, pending: !0
							};
						case CI.h:
							return {
								error: !1, pending: !1
							};
						case CI.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				GI = Object(j.c)({
					create: RI,
					deleteTag: kI,
					fetch: xI,
					update: MI,
					updatePrimaryTag: BI
				});
			const qI = {
				global: [],
				recommendedGlobal: []
			};
			var VI = (e = qI, t) => {
					switch (t.type) {
						case CI.w:
						case CI.r:
						case CI.e:
						case CI.j: {
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
				HI = r("./node_modules/lodash/uniqWith.js"),
				WI = r.n(HI),
				QI = r("./src/reddit/models/Option/index.ts");
			const KI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var $I = (e = KI, t) => {
					switch (t.type) {
						case CI.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: WI()([...e.selectedOptions || [], {
									...r
								}], QI.a)
							}
						}
						case CI.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(QI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case CI.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case CI.a: {
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
				YI = r("./src/reddit/helpers/tags/index.ts");
			const zI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var JI = (e = zI, t) => {
					switch (t.type) {
						case CI.j: {
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
						case CI.w:
						case CI.s:
						case CI.r: {
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
									[o]: Object(YI.a)(a[o] || {})
								}
							}
						}
						case CI.p: {
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
						case CI.e: {
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
						case CI.h: {
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
				XI = r("./src/reddit/reducers/tags/selected/index.ts"),
				ZI = Object(j.c)({
					api: GI,
					availableGlobalTagOrder: VI,
					models: JI,
					selected: XI.b,
					creation: $I
				}),
				eg = r("./src/reddit/actions/redditEmbed.ts"),
				tg = r("./src/reddit/actions/theme.ts"),
				rg = r("./src/reddit/actions/users.ts"),
				sg = r("./src/reddit/models/Theme/index.ts");
			const ng = {
				current: sg.c,
				cached: {}
			};
			var ag = (e = ng, t) => {
					switch (t.type) {
						case tg.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? sg.b : sg.c,
								cached: {}
							}
						}
						case Dr.b:
						case Dr.c:
						case Dr.i:
						case Dr.j:
						case Dr.g:
						case Dr.a:
						case Dr.k:
						case Te.b:
						case Te.f:
						case ve.e:
						case ve.h:
						case B.a:
						case B.e:
						case B.b:
						case B.f:
						case B.d:
						case B.h:
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case De.b:
						case De.a:
						case ge.f:
						case eg.b:
						case K.i:
						case Ne.g:
						case H.c:
						case wr.j:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED:
						case rg.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: sg.b,
									cached: {}
								} : {
									current: sg.c,
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
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: sg.b,
								cached: {}
							} : {
								current: sg.c,
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
									current: sg.b,
									cached: {}
								} : {
									current: sg.c,
									cached: {}
								}
							}
							return e;
						case wr.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: sg.b,
								cached: {}
							} : {
								current: sg.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: sg.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: sg.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				cg = r("./src/reddit/actions/toaster.ts");
			const og = [];
			var dg = (e = og, t) => {
					switch (t.type) {
						case cg.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case cg.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				ig = r("./src/reddit/actions/tooltip.ts"),
				ug = r("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var lg = (e = null, t) => {
					switch (t.type) {
						case ig.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case ig.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case ig.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case ig.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case ig.d:
						case u.b:
						case Io.b:
						case Io.c:
						case Io.a:
							return t.type === u.b && e === ug.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				pg = r("./src/reddit/actions/tracing.ts");
			const bg = {
				traceId: void 0
			};
			var fg = (e = bg, t) => {
					switch (t.type) {
						case pg.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				mg = r("./src/lib/asyncActions/index.ts"),
				yg = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const Og = Object(mg.c)(yg.c.requestedActionType, yg.c.succeededActionType, yg.c.failedActionType),
				_g = Object(mg.c)(yg.a.requestedActionType, yg.a.succeededActionType, yg.a.failedActionType),
				Eg = Object(mg.c)(yg.d.requestedActionType, yg.d.succeededActionType, yg.d.failedActionType);
			var hg = Object(j.c)({
					load: Og,
					execute: _g,
					send: Eg
				}),
				Ig = r("./src/reddit/actions/tracking.ts");
			const gg = {};
			var Sg = (e = gg, t) => {
					switch (t.type) {
						case Ig.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ig.b: {
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
				jg = Object(j.c)({
					reCaptchaEnterprise: hg,
					viewportDataLoaded: Sg
				}),
				Tg = r("./src/reddit/actions/trafficStats/constants.ts");
			var vg = (e = !1, t) => {
				switch (t.type) {
					case Tg.c:
						return !0;
					case Tg.b:
					case Tg.a:
						return !1;
					default:
						return e
				}
			};
			var Dg = (e = null, t) => {
					switch (t.type) {
						case Tg.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case Tg.c:
							return null;
						default:
							return e
					}
				},
				wg = Object(j.c)({
					pending: vg,
					trafficStats: Dg
				});
			var Pg = (e = null, t) => {
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
			var Cg = (e = !1, t) => {
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
				Ag = Object(j.c)({
					error: Pg,
					pending: Cg
				});
			var Rg = (e = null, t) => {
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
			var Ng = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var kg = (e = null, t) => {
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
				Lg = Object(j.c)({
					api: Ag,
					contentId: Rg,
					initialRecipient: Ng,
					publicAddress: kg
				}),
				xg = Object(j.c)({
					communityPoints: Lg
				}),
				Ug = r("./src/reddit/actions/search/trending.ts");
			const Mg = {};
			var Fg = (e = Mg, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case Ug.a: {
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
				Bg = Object(j.c)({
					models: Fg
				});
			var Gg = r("./src/reddit/routes/premium/index.ts");
			const qg = {};
			var Vg = (e = qg, t) => {
					switch (t.type) {
						case Lm.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = Gg.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Hg = r("./src/reddit/actions/upload.ts"),
				Wg = r("./src/reddit/models/Upload/index.ts");
			const Qg = {};
			var Kg = (e = Qg, t) => {
					switch (t.type) {
						case Hg.d: {
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
									status: Wg.a.PENDING
								}
							}
						}
						case Hg.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Wg.a.UPLOADING
								}
							}
						}
						case Hg.c: {
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
						case Hg.e: {
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
						case Hg.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Wg.a.SUCCESS,
									url: s
								}
							}
						}
						case Hg.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Wg.a.FAILED,
									error: s
								}
							}
						}
						case Hg.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Wg.a.CANCELED
								}
							}
						}
						case Hg.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Rs()(e, r)
						}
						default:
							return e
					}
				},
				$g = r("./src/reddit/actions/upvotePrompt.ts");
			var Yg = (e = 0, t) => {
				switch (t.type) {
					case $g.a:
						return ++e;
					default:
						return e
				}
			};
			const zg = {};
			var Jg = (e = zg, t) => {
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
			var Xg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				Zg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				eS = r("./src/reddit/actions/sso/constants.ts"),
				tS = r("./src/reddit/endpoints/profile/info.ts");
			const rS = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Vu()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...tS.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var sS = Object(lf.a)((e = null, t) => {
				var r, n;
				switch (t.type) {
					case Xg.a:
					case Xg.b:
					case Ay.b:
					case Ay.c:
					case Dr.b:
					case Dr.c:
					case Dr.g:
					case Dr.a:
					case Dr.i:
					case Dr.j:
					case Dr.k:
					case ve.e:
					case ve.h:
					case ve.g:
					case je.q:
					case je.r:
					case B.a:
					case B.e:
					case B.b:
					case B.f:
					case ge.a:
					case ge.b:
					case De.a:
					case De.b:
					case W.SUBREDDIT_FAILED:
					case Ku.l:
					case G.b:
					case G.a:
					case G.e:
					case G.d:
					case V.c:
					case V.i:
					case Pe.e:
					case Pe.d:
					case Pe.b:
					case Pe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case H.a:
					case H.c:
					case we.PAGE_LOADED:
					case Ns.PAGE_LOADED:
					case Ne.e:
					case Ne.g:
					case eg.a:
					case eg.b:
					case wr.j:
					case Zg.b:
					case rg.c:
					case Yd.TOPIC_DATA_LOADED:
						return rS(e, t.payload.account);
					case rg.o:
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
						return r ? rS(e, r.account) : e
					}
					case rg.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case wr.l:
					case wr.k: {
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
								...tS.a,
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
					case Bl.q: {
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
					case eS.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case eS.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Co.c: {
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
					case _l.a:
					case _l.b: {
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
					case rg.l: {
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
			var nS = (e = null, t) => {
				switch (t.type) {
					case rg.n:
					case rg.o:
						return null;
					case rg.m:
						return t.payload;
					default:
						return e
				}
			};
			var aS = (e = !1, t) => {
					switch (t.type) {
						case rg.n:
							return !0;
						case rg.o:
						case rg.m:
							return !1;
						default:
							return e
					}
				},
				cS = Object(j.c)({
					error: nS,
					pending: aS
				}),
				oS = Object(j.c)({
					api: cS
				});
			var dS = (e = !1, t) => {
				switch (t.type) {
					case rg.j:
						return !0;
					default:
						return e
				}
			};
			var iS = (e = !1, t) => {
					switch (t.type) {
						case rg.i:
							return !0;
						case rg.j:
						case rg.h:
							return !1;
						default:
							return e
					}
				},
				uS = Object(j.c)({
					pending: iS,
					emailSent: dS
				}),
				lS = Object(j.c)({
					api: uS
				}),
				pS = Object(j.c)({
					changeEmail: oS,
					sendResetEmail: lS
				}),
				bS = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const fS = {};
			var mS = (e = fS, t) => {
				switch (t.type) {
					case Ot.f:
						return {
							...e, new: bS.a.pending
						};
					case Ot.d:
						return {
							...e, new: bS.a.error
						};
					case Ot.e:
						return {
							...e, new: bS.a.waitingForRequest
						};
					case Ot.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.pending
						}
					}
					case Ot.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.error
						}
					}
					case Ot.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const yS = [];
			var OS = (e = yS, t) => {
					switch (t.type) {
						case Ot.e:
							return [t.payload, ...e];
						case Ot.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case wr.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				_S = Object(j.c)({
					api: mS,
					data: OS
				}),
				ES = r("./src/reddit/actions/chat/constants.ts"),
				hS = r("./src/reddit/actions/chat/userSettings.ts");
			const IS = ES.a.anybody;
			var gS = (e = IS, t) => {
					switch (t.type) {
						case hS.a:
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
				SS = Object(j.c)({
					invitePolicy: gS
				});
			const jS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var TS = (e = null, t) => {
				switch (t.type) {
					case we.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Vu()(e, r) ? e : {
							...e,
							...r
						}
					}
					case rs.P: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return jS(e, r)
					}
					case qr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return jS(e, r.length)
					}
					case qr.c:
					case qr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return jS(e, r)
					}
					default:
						return e
				}
			};
			const vS = {};
			var DS = (e = vS, t) => {
					switch (t.type) {
						case Za.a: {
							const e = t.payload.experimentVariants;
							return jl(e)
						}
						default:
							return e
					}
				},
				wS = r("./src/reddit/actions/global/constants.ts");
			const PS = {};
			var CS = (e = PS, t) => {
					switch (t.type) {
						case wS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				AS = Object(j.c)({
					byName: DS,
					localPersisted: CS
				}),
				RS = r("./src/reddit/actions/googleOneTap/index.ts");
			var NS = (e = !1, t) => {
				switch (t.type) {
					case RS.a:
						return !0;
					default:
						return e
				}
			};
			var kS = (e = !1, t) => {
				switch (t.type) {
					case wr.f:
						return !0;
					case wr.e:
						return !1;
					default:
						return e
				}
			};
			var LS = (e = "", t) => {
				switch (t.type) {
					case wr.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const xS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var US = (e = xS, t) => {
					switch (t.type) {
						case rg.b:
							return t.payload;
						default:
							return e
					}
				},
				MS = r("./src/reddit/actions/notifications/constants.ts"),
				FS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var BS = (e = null, t) => {
				switch (t.type) {
					case FS.a:
					case FS.d:
					case FS.h:
					case MS.a:
						return t.payload && t.payload.error || null;
					case FS.c:
					case FS.f:
					case FS.j:
					case MS.c:
					case MS.b:
						return null;
					default:
						return e
				}
			};
			var GS = (e = !1, t) => {
				switch (t.type) {
					case MS.c:
						return !1;
					case MS.b:
						return !0;
					default:
						return e
				}
			};
			var qS = (e = !1, t) => {
					switch (t.type) {
						case MS.c:
						case FS.j:
							return !0;
						case MS.b:
						case MS.a:
						case FS.i:
						case FS.h:
							return !1;
						default:
							return e
					}
				},
				VS = Object(j.c)({
					error: BS,
					loaded: GS,
					pending: qS
				});
			var HS = (e = null, t) => {
				switch (t.type) {
					case MS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case MS.f:
					case MS.e:
						return null;
					default:
						return e
				}
			};
			var WS = (e = !1, t) => {
				switch (t.type) {
					case MS.f:
						return !1;
					case MS.e:
						return !0;
					default:
						return e
				}
			};
			var QS = (e = !1, t) => {
					switch (t.type) {
						case MS.f:
							return !0;
						case MS.e:
						case MS.d:
							return !1;
						default:
							return e
					}
				},
				KS = Object(j.c)({
					error: HS,
					loaded: WS,
					pending: QS
				}),
				$S = Object(j.c)({
					getPreferences: VS,
					setPreferences: KS
				});
			const YS = {
				byId: {},
				allIds: []
			};
			var zS = (e = YS, t) => {
				switch (t.type) {
					case FS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case FS.g: {
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
			var XS = (e = JS, t) => {
					switch (t.type) {
						case FS.b: {
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
				ZS = Object(j.c)({
					sections: XS,
					rows: zS
				}),
				ej = r("./src/lib/notifications/constants.ts");
			var tj = (e = !1, t) => {
				switch (t.type) {
					case ej.j:
						return !0;
					case ej.b:
					case ej.d:
					case ej.e:
						return !1;
					default:
						return e
				}
			};
			const rj = {
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
			var sj = (e = rj, t) => {
				switch (t.type) {
					case MS.b:
					case MS.f:
					case MS.d: {
						const {
							preferences: r
						} = t.payload;
						return la()(r) ? e : r
					}
					default:
						return e
				}
			};
			const nj = {
				byId: {},
				allIds: []
			};
			var aj = (e = nj, t) => {
				switch (t.type) {
					case FS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case FS.g: {
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
			const cj = {
				byId: {},
				allIds: []
			};
			var oj = (e = cj, t) => {
					switch (t.type) {
						case FS.e: {
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
				dj = Object(j.c)({
					sections: oj,
					rows: aj
				});
			var ij = (e = null, t) => {
				switch (t.type) {
					case FS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const uj = [];
			var lj = (e = uj, t) => {
					switch (t.type) {
						case FS.i: {
							const r = t.payload && t.payload.nodes;
							return [...e, ...r]
						}
						case FS.k: {
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
				pj = Object(j.c)({
					subreddits: lj,
					pageInfo: ij
				}),
				bj = Object(j.c)({
					api: $S,
					subscribedSubredditsSettings: pj,
					emailSettingsLayout: ZS,
					isNotificationPromptVisible: tj,
					preferences: sj,
					pushSettingsLayout: dj
				});
			const fj = {};
			var mj = (e = fj, t) => {
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
			const yj = {},
				Oj = (e, t) => `${e}_${t||new Date}`;
			var _j = (e = yj, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[Oj(t.subredditInfo.id, t.allocatedAt)]: t
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
							[Oj(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = Oj(r, n),
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
						} = t.payload, n = Oj(r, s), a = e[n];
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
			var Ej = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Rs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Rs()({
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
			var hj, Ij = (e = !1, t) => {
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
				gj = Object(j.c)({
					allocationByKey: _j,
					data: Ej,
					fetched: Ij
				}),
				Sj = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(hj || (hj = {}));
			const jj = {
				status: hj.UNFETCHED,
				subscriptions: []
			};
			var Tj = (e = jj, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: hj.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: hj.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: hj.FAILED
						};
					default:
						return e
				}
			};
			var vj = (e = "", t) => {
				switch (t.type) {
					case rg.d:
						return t.payload;
					default:
						return e
				}
			};
			var Dj = (e = null, t) => {
				switch (t.type) {
					case vy.a:
					case vy.b:
					case vy.c:
					case vy.e:
						return t.payload;
					case vy.d:
						return null;
					default:
						return e
				}
			};
			var wj = (e = !1, t) => {
				switch (t.type) {
					case vy.f:
						return !0;
					default:
						return e
				}
			};
			var Pj = (e = "", t) => {
				switch (t.type) {
					case rg.k:
						return t.payload;
					default:
						return e
				}
			};
			var Cj = (e = null, t) => {
				switch (t.type) {
					case Za.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var Aj = (e = null, t) => {
					switch (t.type) {
						case Za.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				Rj = Object(j.c)({
					isEmployee: Cj,
					isLoggedIn: Aj
				});
			var Nj = (e = null, t) => {
					switch (t.type) {
						case wr.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Vu()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				kj = r("./src/reddit/actions/userWhitelist.ts");
			const Lj = {};
			var xj = (e = Lj, t) => {
				switch (t.type) {
					case kj.e:
						return {
							...e, new: bS.a.pending
						};
					case kj.d:
						return {
							...e, new: bS.a.error
						};
					case kj.f:
						return {
							...e, new: bS.a.waitingForRequest
						};
					case kj.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.pending
						}
					}
					case kj.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.error
						}
					}
					case kj.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: bS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Uj = [];
			var Mj = (e = Uj, t) => {
					switch (t.type) {
						case kj.f:
							return [t.payload, ...e];
						case kj.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case wr.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				Fj = Object(j.c)({
					api: xj,
					data: Mj
				}),
				Bj = Object(j.c)({
					account: sS,
					accountSettings: pS,
					blocked: _S,
					chatSettings: SS,
					drafts: TS,
					experiments: AS,
					googleOneTapEnabled: NS,
					isCustomizeFlyoutShowing: kS,
					topContentDismissalPrefsSet: Nj,
					language: LS,
					loid: US,
					notificationPrefs: bj,
					ownedBadges: mj,
					powerups: gj,
					prefs: Sj.c,
					productOfferSubscriptions: Tj,
					reddaid: vj,
					session: Dj,
					sessionRefreshFailed: wj,
					sessionTracker: Pj,
					temporaryGQL: Rj,
					wallets: Jg,
					whitelist: Fj
				});
			var Gj = (e = null, t) => {
				switch (t.type) {
					case Zg.a:
						return t.payload || null;
					case Zg.b:
					case Zg.c:
						return null;
					default:
						return e
				}
			};
			var qj = (e = !1, t) => {
				switch (t.type) {
					case Zg.c:
						return !0;
					case Zg.b:
					case Zg.a:
						return !1;
					default:
						return e
				}
			};
			var Vj = (e = !1, t) => {
				switch (t.type) {
					case Zg.b:
						return !0;
					case Zg.a:
					case Zg.c:
						return !1;
					default:
						return e
				}
			};
			var Hj = (e = !1, t) => {
					switch (t.type) {
						case Zg.b:
							return t.payload.userDataExportEligibility;
						case Zg.a:
						case Zg.c:
							return !1;
						default:
							return e
					}
				},
				Wj = Object(j.c)({
					error: Gj,
					pending: qj,
					success: Vj,
					userDataExportEligibility: Hj
				}),
				Qj = Object(j.c)({
					userDataRequestPageApi: Wj
				});
			const Kj = {};
			var $j = (e = Kj, t) => {
				switch (t.type) {
					case rg.g:
					case rg.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case rg.e: {
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
			var Yj = (e = !1, t) => {
					switch (t.type) {
						case rg.g:
							return !0;
						case rg.f:
						case rg.e:
							return !1;
						default:
							return e
					}
				},
				zj = Object(j.c)({
					error: $j,
					pending: Yj
				});
			const Jj = {};
			var Xj = (e = Jj, t) => {
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
			const Zj = {},
				eT = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Vu()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var tT = (e = Zj, t) => {
					switch (t.type) {
						case rg.f: {
							const {
								data: r
							} = t.payload;
							return eT(e, r)
						}
						case Ku.k: {
							const {
								user: r
							} = t.payload;
							return eT(e, {
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
							return c ? eT(e, {
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
								...tS.a,
								...s
							};
							return eT(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case wr.l:
						case wr.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? eT(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case rg.c:
							const r = t.payload.account;
							if (!r || !e) return e;
							const s = Object(Y.e)(r).toLowerCase(),
								n = e[s];
							return n ? eT(e, {
								[s]: {
									...n,
									accountIcon: r.accountIcon,
									snoovatarFullBodyAsset: r.snoovatarFullBodyAsset
								}
							}) : e;
						case wr.n: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? eT(e, {
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
				rT = r("./src/reddit/actions/usernameAvailable.ts");
			const sT = {};
			var nT = (e = sT, t) => {
				switch (t.type) {
					case rT.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: rT.b.Available
						}
					}
					case rT.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: rT.b.Error
						}
					}
					case rT.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: rT.b.Pending
						}
					}
					case rT.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: rT.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const aT = {};
			var cT = (e = aT, t) => {
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
			var oT = (e = !1, t) => {
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
				dT = Object(j.c)({
					allocationByKey: cT,
					fetched: oT
				});
			var iT = (e = null, t) => {
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
			var uT = (e = !1, t) => {
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
				lT = Object(j.c)({
					error: iT,
					pending: uT
				});
			var pT = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const bT = {};
			var fT = (e = bT, t) => {
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
			const mT = {};
			var yT = (e = mT, t) => {
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
							return Rs()(e, [r])
						}
						default:
							return e
					}
				},
				OT = Object(j.c)({
					api: lT,
					currentPostId: pT,
					currentRank: fT,
					list: yT
				}),
				_T = Object(j.c)({
					api: zj,
					appliedBadges: Xj,
					models: tT,
					nameAvailable: nT,
					topAwarders: OT,
					powerups: dT
				});
			const ET = {};
			var hT = (e = ET, t) => {
					var r, s, n;
					switch (t.type) {
						case B.b:
						case B.f:
						case W.SUBREDDIT_LOADED:
						case K.i:
						case H.c:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
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
				IT = r("./src/reddit/actions/widgets/constants.ts");
			const gT = {};
			var ST = (e = gT, t) => {
					var r;
					switch (t.type) {
						case B.b:
						case B.f:
						case H.c:
						case K.i:
						case W.SUBREDDIT_LOADED:
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
						case IT.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case IT.h: {
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
				jT = r("./src/reddit/helpers/widgets/index.tsx");
			const TT = {};
			var vT = (e = TT, t) => {
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
					case IT.b: {
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
								styles: Object(jT.g)()
							}
						}), t
					}
					case IT.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case IT.i:
					case IT.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case IT.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case B.b:
					case B.f:
					case W.SUBREDDIT_LOADED:
					case K.i:
					case H.c:
					case we.PAGE_LOADED:
					case Ns.PAGE_LOADED: {
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
					case zu.h: {
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
					case Y_.f: {
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
			const DT = {};
			var wT = (e = DT, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case B.f:
					case K.i:
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
			const PT = {};
			var CT = (e = PT, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
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
						case IT.e:
						case IT.b: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgets.layout.sidebar.order
							}
						}
						case IT.f: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgetIds
							}
						}
						case IT.g: {
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
						case IT.h: {
							const r = t.payload;
							if (!e[r.subredditId]) return e;
							const s = e[r.subredditId].filter(e => e !== r.widgetId);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case B.b:
						case B.f:
						case W.SUBREDDIT_LOADED:
						case H.c:
						case K.i:
						case we.PAGE_LOADED:
						case Ns.PAGE_LOADED: {
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
				AT = Object(j.c)({
					idCardIds: hT,
					menuIds: ST,
					models: vT,
					moderatorIds: wT,
					sidebar: CT
				}),
				RT = r("./src/reddit/actions/wrappedReddit/constants.ts");
			const NT = {
				isImageLoading: !1,
				isCardsLoading: !1,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				subreddits: []
			};
			const kT = {
				accountManagerModalData: a,
				activeModal: m,
				ads: h,
				apiRequestState: S,
				appBadges: A,
				authorFlair: Z,
				awards: Ke,
				badges: dt,
				blockedRedditors: yt,
				blockUser: St,
				brandSafety: Tt,
				chat: or,
				commentsListTruncated: ir,
				communityFlairs: pr,
				connection: mr,
				contentControls: vr,
				contentGate: Cr,
				continueThreads: Nr,
				correlationId: (e = xr, t) => {
					switch (t.type) {
						case kr.a: {
							const {
								correlationId: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case kr.b: {
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
				creations: ta,
				dashboard: na,
				discoveryUnits: Ea,
				dismissedTruncationList: ga,
				economics: Ha,
				emojis: Xa,
				experimentOverrides: sc,
				externalAccount: Rc,
				featureFlags: Fc,
				focusedVerticals: Xc,
				fontFiles: eo,
				gild: fo,
				header: So,
				htmlResponseStreaming: jo,
				imageUploads: Do,
				interceptedAction: Po,
				isChangeUsernameTooltipShowing: Ao,
				isEmailVerificationTooltipShowing: No,
				isModeratorWithPostPerms: Lo,
				jsApi: Mo,
				langSite: Go,
				leaderboard: zo,
				listings: Ti,
				live: Ci,
				mediaEmbed: (e = Ri, t) => {
					switch (t.type) {
						case Ai.a:
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
				mediaPlayback: Bi,
				meta: Vi,
				moderatingSubreddits: Qi,
				modListingPage: Zi,
				modModeEnabled: tu,
				moreComments: iu,
				multireddits: rl,
				notificationBannerId: nl,
				notificationsInbox: fl,
				nps: Ol,
				onboardingModal: gl,
				page: wl,
				platform: Rl,
				postCollection: up,
				polls: Xl,
				postFlair: yp,
				posts: uf,
				postStickiedComments: ff,
				givePremium: Eo,
				products: Pf,
				profileCommentsPage: Hf,
				profilePrivatePage: cm,
				profileModSettingsPage: $f,
				profilePostsPage: zf,
				profiles: Bm,
				promos: Wm,
				publicAccessNetwork: jy,
				recentSubreddits: wy,
				recommendations: Cy,
				reportPage: By,
				reportRules: Vy,
				requestHost: Hy,
				runTimeEnvVars: Qy,
				search: nO,
				searchDiscoveryUnits: pO,
				seo: hO,
				shortcuts: PO,
				sidebarPromotedPosts: RO,
				streaming: BO,
				structuredStyles: a_,
				stylesheets: c_,
				subredditAutocomplete: m_,
				subreddits: Jh,
				subredditStickyPosts: eI,
				subscriptions: gI,
				survey: wI,
				tabBadged: PI,
				tags: ZI,
				themes: ag,
				toaster: dg,
				tooltipId: lg,
				tracing: fg,
				tracking: jg,
				trafficStats: wg,
				transfers: xg,
				trending: Bg,
				trophies: Vg,
				uploads: Kg,
				user: Bj,
				userDataRequestPage: Qj,
				upvotePromptCountPerSess: Yg,
				users: _T,
				widgets: AT,
				wrappedReddit: (e = NT, t) => {
					switch (t.type) {
						case RT.h:
							return {
								...e, shareCardWasOpened: !0
							};
						case RT.d:
							return {
								...e, isImageLoading: !1
							};
						case RT.e:
							return {
								...e, isImageLoading: !0
							};
						case RT.c:
							return {
								...e, isCardsLoading: !0
							};
						case RT.b: {
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
						case RT.a: {
							const {
								error: r
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: r
							}
						}
						case RT.f:
							return {
								...e, ...NT
							};
						case RT.g: {
							const {
								index: r
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: r
							}
						}
						case RT.i: {
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
					const r = Object(s.rb)(e, {
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
					}) === s.Wc
				},
				o = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.n
					}) === s.Wc
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
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(n.nf)(t))
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
				T = e => e.posts.scheduledPosts.api.pendingUpdate,
				v = e => e.posts.scheduledPosts.api.creationToken
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
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"abd8b9be540b"}')
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
			e.exports = JSON.parse('{"id":"035ff4eec929"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.d34561a639ea497adef1.js.map