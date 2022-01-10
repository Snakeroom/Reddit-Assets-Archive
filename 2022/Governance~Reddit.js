// https://www.redditstatic.com/desktop2x/Governance~Reddit.d65e323f8d5f99a361ff.js
// Retrieved at 1/10/2022, 2:40:06 PM by Reddit Dataminer v1.0.0
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
				const t = Object(b.fb)(),
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
				return Ev
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
				ve = r("./src/reddit/actions/pages/countrySite/constants.ts"),
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
			const Le = he.m,
				ke = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([Ee]),
				xe = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = ke(t), e), {});
					return Oe()({
						...e
					}, r)
				};
			var Ue = (e = Le, t) => {
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
							...ke(t),
							isEnabled: !0
						}, e), {});
						return Oe()({
							...e
						}, r)
					}
					case ee.b: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = ke(t.award), e), {});
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
					case G.b:
					case x.w:
					case U.b:
					case ve.b:
					case ve.f:
					case we.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case Te.e:
					case Te.h:
					case F.f:
					case F.m:
					case F.p:
					case F.v:
					case je.r:
					case G.f:
					case ge.b:
					case De.b:
					case H.c:
					case B.b:
					case B.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ae.b:
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
							for (const e of t) r[e.id] = ke(Object(he.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = ke(Object(he.h)(e));
							s && (r[s.id] = ke(s))
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
				Ge = Object(j.c)({
					pending: Fe
				});
			const Be = {};
			var qe = (e = Be, t) => {
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
					api: Ge,
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
			const Xe = {};
			var Je = (e = Xe, t) => {
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
					pending: Je
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
			var vt = (e = jt, t) => {
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
				Tt = r("./src/reddit/actions/downToChat.ts");
			var Dt = (e = null, t) => {
				switch (t.type) {
					case Tt.f:
					case Tt.g:
						return null;
					case Tt.e: {
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
						case Tt.b:
						case Tt.f:
							return !0;
						case Tt.a:
						case Tt.c:
						case Tt.e:
						case Tt.g:
							return !1;
						default:
							return e
					}
				},
				Pt = Object(j.c)({
					error: Dt,
					pending: wt
				}),
				At = r("./node_modules/lodash/mapValues.js"),
				Ct = r.n(At);
			const Rt = {};
			var Nt = (e = Rt, t) => {
					switch (t.type) {
						case Tt.f:
						case Tt.e:
						case Tt.g: {
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
						case Tt.c: {
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
						case Tt.d:
							return {
								...Ct()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Tt.a:
						case Tt.b:
						default:
							return e
					}
				},
				Lt = Object(j.c)({
					api: Pt,
					subreddits: Nt
				}),
				kt = r("./src/reddit/actions/chat/init.ts");
			var xt = (e = !1, t) => {
					switch (t.type) {
						case kt.a:
							return !0;
						default:
							return e
					}
				},
				Ut = r("./src/lib/omitKey/index.ts"),
				Mt = r("./src/reddit/actions/pages/chatSettings.ts");
			const Ft = {};
			var Gt = (e = Ft, t) => {
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
			const Bt = {};
			var qt = (e = Bt, t) => {
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
					error: Gt,
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
				REQUEST_FAILED: Xt,
				REQUEST_PENDING: Jt,
				REQUEST_SUCCESS: Zt
			} = Qt;
			Object(Ce.a)(zt), Object(Ce.a)(Xt), Object(Ce.a)(Jt), Object(Ce.a)(Zt);
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
					downToChat: Lt,
					isInited: xt,
					subredditSettingsPage: $t,
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
				pr = Object(j.c)({
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
				mr = Object(j.c)({
					api: pr,
					code: br,
					showModal: fr
				}),
				yr = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var Or = (e = !0, t) => {
					switch (t.type) {
						case yr.a:
							return !1;
						case yr.b:
							return !0;
						default:
							return e
					}
				},
				_r = r("./src/reddit/actions/communityFlairs/constants.ts");
			const Er = {};
			var hr = (e = Er, t) => {
					switch (t.type) {
						case _r.a: {
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
				jr = r("./src/reddit/actions/contentControls/constants.ts");
			const vr = {};
			var Tr = (e = vr, t) => {
				switch (t.type) {
					case jr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case jr.c:
					case jr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Ut.a)(e, r)
					}
					default:
						return e
				}
			};
			const Dr = {};
			var wr = (e = Dr, t) => {
					switch (t.type) {
						case jr.c:
						case jr.a:
						case jr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === jr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Pr = Object(j.c)({
					error: Tr,
					pending: wr
				}),
				Ar = Object(j.c)({
					fetch: Pr
				}),
				Cr = r("./src/lib/safeGet/index.ts");
			const Rr = {};
			var Nr = (e = Rr, t) => {
					switch (t.type) {
						case jr.b: {
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
						case jr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, n = Object(Cr.a)(e, r);
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
				Lr = Object(j.c)({
					api: Ar,
					models: Nr
				}),
				kr = r("./src/reddit/actions/contentGate.ts"),
				xr = r("./src/reddit/actions/preferences.ts");
			const Ur = {};
			var Mr = (e = Ur, t) => {
				switch (t.type) {
					case kr.a: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Cr.a)(e, r)) {
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
					case kr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: n,
							isContributorRequestTimestamp: a,
							subredditId: c
						} = t.payload;
						if (s) {
							if (Object(Cr.a)(e, s)) {
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
					case kr.f: {
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
								...Object(Cr.a)(e, r) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: n,
								quarantineMessageHtml: a,
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
							if (Object(Cr.a)(e, r)) {
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
					case kr.i: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Cr.a)(e, r)) {
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
					case kr.j: {
						const {
							subredditName: r
						} = t.payload;
						if (r) {
							if (Object(Cr.a)(e, r)) {
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
					case kr.c:
					case kr.d:
					case kr.e: {
						const {
							profileName: r
						} = t.payload, s = Re.ic + r.toLocaleLowerCase(), n = Object(Cr.a)(e, s) || {}, a = {
							profileDeleted: t.type === kr.d,
							profileSuspended: t.type === kr.e,
							profileBlockedForLegalReason: t.type === kr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					case xr.q:
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
			const Fr = {};
			var Gr = (e = Fr, t) => {
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
				Br = Object(j.c)({
					models: Gr
				}),
				qr = r("./src/reddit/actions/correlationId/index.tsx"),
				Vr = r("./src/reddit/helpers/correlationIdTracker.ts");
			const Hr = {
				[Vr.a.AwardCreationFlow]: void 0,
				[Vr.a.AwardDeletionFlow]: void 0,
				[Vr.a.CommentComposer]: void 0,
				[Vr.a.Explore]: void 0,
				[Vr.a.GildingFlow]: void 0,
				[Vr.a.GiftPremiumFlow]: void 0,
				[Vr.a.GoldPayment]: void 0,
				[Vr.a.LinkedPosts]: void 0,
				[Vr.a.ModQueue]: void 0,
				[Vr.a.NsfwLinkedPosts]: void 0,
				[Vr.a.PostComposer]: void 0,
				[Vr.a.PowerupsFlow]: void 0,
				[Vr.a.PremiumSettings]: void 0,
				[Vr.a.SearchResults]: void 0,
				[Vr.a.SubredditCreation]: void 0,
				[Vr.a.VideoView]: void 0
			};
			var Wr = r("./src/reddit/actions/postCollection/constants.ts");
			var Qr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Wr.d:
					case Wr.c:
					case Wr.s:
					case Wr.r:
						return null;
					case Wr.b:
					case Wr.n:
						return t.payload;
					default:
						return e
				}
			};
			var Kr = (e = !1, t) => {
					switch (t.type) {
						case Wr.c:
						case Wr.r:
							return !0;
						case Wr.d:
						case Wr.b:
						case Wr.s:
						case Wr.n:
							return !1;
						default:
							return e
					}
				},
				$r = Object(j.c)({
					error: Qr,
					pending: Kr
				}),
				Yr = Object(j.c)({
					createOrUpdate: $r
				}),
				zr = r("./src/reddit/actions/postDraft.ts");
			const Xr = {};
			var Jr = (e = Xr, t) => {
				switch (t.type) {
					case zr.c:
					case zr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case zr.a: {
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
			const Zr = {};
			var es = (e = Zr, t) => {
					switch (t.type) {
						case zr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case zr.c:
						case zr.a: {
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
				ts = Object(j.c)({
					error: Jr,
					pending: es
				});
			var rs = (e = null, t) => {
				switch (t.type) {
					case zr.d:
						return t.payload;
					case zr.f:
					case zr.e:
						return null;
					default:
						return e
				}
			};
			var ss = (e = !1, t) => {
					switch (t.type) {
						case zr.f:
							return !0;
						case zr.e:
						case zr.d:
							return !1;
						default:
							return e
					}
				},
				ns = Object(j.c)({
					error: rs,
					pending: ss
				});
			const as = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var cs = (e = as, t) => {
				switch (t.type) {
					case zr.l:
					case zr.j:
						return as;
					case zr.i: {
						const e = t.payload;
						return {
							...as,
							apiError: e
						}
					}
					case zr.m: {
						const e = t.payload;
						return {
							...as,
							validationError: e
						}
					}
					case zr.k: {
						const e = t.payload;
						return {
							...as,
							submitValidationError: e
						}
					}
					case zr.h:
						return {
							...as, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var os = (e = !1, t) => {
					switch (t.type) {
						case zr.j:
							return !0;
						case zr.l:
						case zr.i:
						case zr.m:
						case zr.k:
						case zr.h:
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
					deleteDraft: ts,
					listing: ns,
					save: ds
				}),
				us = r("./src/reddit/actions/postCreation/constants.ts");
			const ls = {};
			var ps = (e = ls, t) => {
					switch (t.type) {
						case us.G: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case us.p: {
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
				bs = Object(j.c)({
					pending: ps
				});
			var fs = (e = null, t) => {
				switch (t.type) {
					case us.u:
					case us.v:
					case us.d:
					case us.e:
					case us.f:
					case us.i:
					case us.j:
					case us.n:
					case us.O:
						return null;
					case us.t:
						return t.payload;
					default:
						return e
				}
			};
			var ms = (e = !1, t) => {
					switch (t.type) {
						case us.u:
							return !0;
						case us.v:
						case us.t:
							return !1;
						default:
							return e
					}
				},
				ys = Object(j.c)({
					error: fs,
					pending: ms
				}),
				Os = Object(j.c)({
					converting: bs,
					mediaUpload: ys
				});
			const _s = {};
			var Es = (e = _s, t) => {
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
			const hs = {};
			var Is = (e = hs, t) => {
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
			const gs = {};
			var Ss = (e = gs, t) => {
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
				js = Object(j.c)({
					error: Es,
					fetched: Is,
					pending: Ss
				}),
				vs = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const Ts = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ds = (e = Ts, t) => {
				switch (t.type) {
					case us.P:
					case vs.h:
					case vs.k:
					case vs.b:
					case vs.d:
					case us.w:
					case us.c:
					case us.d:
					case us.e:
					case us.f:
					case us.i:
					case us.j:
					case us.n:
					case us.O:
					case us.E:
						return Ts;
					case us.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? Ts : e
					}
					case us.o: {
						const e = t.payload;
						return {
							...Ts,
							apiError: e
						}
					}
					case us.cb: {
						const e = t.payload;
						return {
							...Ts,
							validationError: e
						}
					}
					case us.K:
					case us.J: {
						const e = t.payload;
						return {
							...Ts,
							submitValidationError: e
						}
					}
					case us.a:
						return {
							...Ts, needsCaptcha: !0
						};
					case us.y:
						return {
							...Ts, pollError: t.payload
						};
					default:
						return e
				}
			};
			var ws = (e = !1, t) => {
					switch (t.type) {
						case us.w:
							return !0;
						case us.P:
						case vs.h:
						case us.o:
						case us.cb:
						case us.J:
						case us.K:
						case us.y:
						case us.a:
							return !1;
						default:
							return e
					}
				},
				Ps = Object(j.c)({
					error: Ds,
					pending: ws
				});
			var As = (e = null, t) => {
				switch (t.type) {
					case us.x:
					case us.H:
						return null;
					case us.m:
						return t.payload;
					default:
						return e
				}
			};
			var Cs = (e = !1, t) => {
					switch (t.type) {
						case us.x:
							return !0;
						case us.m:
						case us.l:
							return !1;
						default:
							return e
					}
				},
				Rs = Object(j.c)({
					error: As,
					pending: Cs
				}),
				Ns = Object(j.c)({
					submit: Ps,
					update: Rs
				});
			var Ls = (e = null, t) => {
				switch (t.type) {
					case us.O:
					case us.M:
					case us.N:
						return null;
					default:
						return e
				}
			};
			var ks = (e = !1, t) => {
					switch (t.type) {
						case us.N:
							return !0;
						case us.M:
						case us.O:
							return !1;
						default:
							return e
					}
				},
				xs = Object(j.c)({
					error: Ls,
					pending: ks
				}),
				Us = Object(j.c)({
					change: xs
				}),
				Ms = Object(j.c)({
					collection: Yr,
					draft: is,
					editor: Os,
					page: js,
					post: Ns,
					subreddit: Us
				}),
				Fs = r("./node_modules/lodash/omit.js"),
				Gs = r.n(Fs),
				Bs = r("./src/reddit/actions/pages/postDraft.ts");
			const qs = {};
			var Vs = (e = qs, t) => {
				switch (t.type) {
					case zr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || qs
					}
					case zr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Gs()(r, s)
					}
					case us.P: {
						const {
							draftId: r
						} = t.payload;
						return r ? Gs()(e, r) : e
					}
					case Bs.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Hs = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Ws = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Qs = r("./src/reddit/models/PostDraft/index.ts");
			var Ks = (e = "", t) => {
					switch (t.type) {
						case us.d:
							return t.payload || "";
						case us.E:
							return "";
						case u.b: {
							if (Hs(t) !== Re.Mb.POST_CREATION) return "";
							const r = Ws(t);
							return r && r.url ? r.url || "" : e
						}
						case zr.g: {
							const e = t.payload;
							return e.kind === Qs.b.Link && e.body || ""
						}
						case vs.b:
						case vs.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				$s = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ys = r("./src/reddit/models/ScheduledPost/index.ts");
			var zs = (e = "", t) => {
				switch (t.type) {
					case us.e:
						return t.payload || "";
					case us.E:
					case us.I:
						return "";
					case us.Q:
						return t.payload.editorMode === $s.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (Hs(t) !== Re.Mb.POST_CREATION) return "";
						const r = Ws(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case zr.g: {
						const e = t.payload;
						return e.kind === Qs.b.Markdown && e.body || ""
					}
					case vs.b:
					case vs.n: {
						const e = t.payload;
						return e.contentType === Ys.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Xs = {
				items: [],
				selectedKey: null
			};
			var Js = (e = Xs, t) => {
					switch (t.type) {
						case us.f:
							return t.payload || Xs;
						case us.E:
							return Xs;
						case u.b:
							return Hs(t) !== Re.Mb.POST_CREATION ? Xs : e;
						case zr.g:
							return Xs;
						case vs.b:
						case vs.n:
							return Xs;
						default:
							return e
					}
				},
				Zs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				en = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				tn = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const rn = Zs.a.createInitial;
			var sn = (e = rn(), t) => {
					switch (t.type) {
						case us.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case us.E:
							return Zs.a.createInitial();
						case us.Q: {
							const r = t.payload;
							return r.editorMode === $s.i.RICH_TEXT && r.editorKey === $s.h.POST_CREATION ? Zs.a.createInitial(r.content) : e
						}
						case u.b:
							return Hs(t) !== Re.Mb.POST_CREATION ? Zs.a.createInitial() : e;
						case zr.g: {
							const e = t.payload;
							return e.kind === Qs.b.RichText ? Zs.a.createInitial(e.body) : Zs.a.createInitial()
						}
						case vs.b:
						case vs.n: {
							const e = t.payload,
								r = Object(en.c)(e.mediaAssets);
							return Zs.a.createInitial(e.contentType === Ys.a.RTJSON ? Object(tn.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				nn = Object(j.c)({
					link: Ks,
					markdown: zs,
					media: Js,
					rte: sn
				});
			var an = (e = null, t) => {
					switch (t.type) {
						case us.b:
							return t.payload || null;
						case us.E:
						case zr.g:
						case vs.b:
						case vs.n:
						case us.O:
							return null;
						case u.b:
							return Hs(t) === Re.Mb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				cn = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var on = (e = null, t) => {
				switch (t.type) {
					case us.c:
						return t.payload || null;
					case vs.b:
					case vs.n: {
						const e = t.payload;
						return Object(cn.n)({
							scheduledPost: e
						}) || null
					}
					case us.E:
						return null;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION ? e : null;
					case zr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var dn = (e = null, t) => {
				switch (t.type) {
					case us.q:
						return t.payload.type || null;
					case vs.b:
					case vs.n:
					case us.i:
					case us.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case us.S:
						return t.payload || !1;
					case vs.b:
					case vs.n:
						return "CHAT" === t.payload.discussionType;
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case zr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var ln = (e = !1, t) => {
				switch (t.type) {
					case us.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case vs.b:
					case vs.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var pn = (e = !1, t) => {
				switch (t.type) {
					case us.U:
						return t.payload || !1;
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case zr.g:
						return t.payload.isNSFW || !1;
					case vs.b:
					case vs.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var bn = (e = !1, t) => {
				switch (t.type) {
					case us.V:
						return t.payload || !1;
					case us.E:
						return !1;
					case us.O: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case zr.g:
						return t.payload.isOriginalContent || !1;
					case vs.b:
					case vs.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var fn = (e = !1, t) => {
				switch (t.type) {
					case us.W:
						return t.payload || !1;
					case vs.b:
					case vs.n:
						return !!t.payload.poll;
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					default:
						return e
				}
			};
			var mn = (e = !1, t) => {
				switch (t.type) {
					case us.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case vs.b:
					case vs.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var yn = (e = !1, t) => {
				switch (t.type) {
					case vs.b:
					case vs.n:
					case us.E:
						return !1;
					case zr.n:
						return t.payload;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case zr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var On = (e = !1, t) => {
				switch (t.type) {
					case us.X:
						return t.payload || !1;
					case us.E:
						return !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case zr.g:
						return t.payload.isSpoiler || !1;
					case vs.b:
					case vs.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var _n = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case us.i:
					case us.q:
					case us.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var En = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case us.i:
					case us.q:
					case us.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var hn = (e = null, t) => {
					switch (t.type) {
						case us.N:
						case us.O:
							return t.payload;
						case us.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				In = r("./src/reddit/actions/polls.ts");
			var gn = (e = null, t) => {
					switch (t.type) {
						case In.a:
							return {
								...t.payload
							};
						case vs.b:
						case vs.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case us.E:
							return null;
						case u.b:
							return Hs(t) !== Re.Mb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Sn = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				jn = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var vn = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case us.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case us.E:
					case zr.g:
					case us.O:
						return null;
					case u.b:
						if (Hs(t) === Re.Mb.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Ys.m)(c)) {
								const t = Object(Sn.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...Sn.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Sn.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case vs.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case vs.b: {
						const e = t.payload;
						return {
							...Object(jn.h)(e)
						}
					}
					default:
						return e
				}
			};
			var Tn = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case us.Y:
						return s || !1;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case vs.b:
					case vs.n:
					case zr.g:
						return !1;
					default:
						return e
				}
			};
			var Dn = (e = "", t) => {
				switch (t.type) {
					case us.g:
						return t.payload || "";
					case u.b:
						return Hs(t) !== Re.Mb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var wn = (e = null, t) => {
				switch (t.type) {
					case u.b:
						return Hs(t) !== Re.Mb.POST_CREATION ? null : e;
					case us.E:
						return null;
					case vs.b:
					case vs.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Pn = (e = !0, t) => {
				switch (t.type) {
					case us.E:
						return !0;
					case us.Z:
						return t.payload;
					case u.b:
						return Hs(t) !== Re.Mb.POST_CREATION || e;
					case zr.g:
						return t.payload.sendReplies;
					case vs.b:
					case vs.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var An = (e = null, t) => {
				switch (t.type) {
					case us.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case us.E:
					case zr.g:
					case us.O:
						return null;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION ? e : null;
					case vs.b:
					case vs.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Cn = Re.Vb.POST;
			var Rn = (e = Cn, t) => {
				switch (t.type) {
					case us.E:
						return Cn;
					case us.r:
						return Re.Vb.CROSSPOST;
					case us.i:
						return t.payload.submissionType || Cn;
					case u.b: {
						if (Hs(t) !== Re.Mb.POST_CREATION) return Cn;
						const r = Ws(t);
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
					case zr.g: {
						const e = t.payload;
						return Qs.a[e.kind]
					}
					case vs.b:
					case vs.n: {
						const e = t.payload;
						return e.poll ? Re.Vb.POLL : e.url ? Re.Vb.LINK_ONLY : Re.Vb.POST
					}
					default:
						return e
				}
			};
			var Nn = (e = null, t) => {
					switch (t.type) {
						case us.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case us.E:
						case zr.g:
						case us.O:
							return null;
						case u.b:
							return Hs(t) === Re.Mb.POST_CREATION ? e : null;
						case vs.b:
						case vs.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Ln = r("./src/reddit/models/Poll/index.ts");
			const kn = e => `Should ${e||"username"} become the top moderator?`,
				xn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Un = (e = "", t) => {
				switch (t.type) {
					case us.r:
						return t.payload.postTitle || "";
					case us.j:
						return t.payload || "";
					case us.D: {
						const {
							title: r
						} = t.payload;
						return e || (r || "")
					}
					case us.E:
						return "";
					case u.b: {
						if (Hs(t) !== Re.Mb.POST_CREATION) return "";
						const r = Ws(t);
						return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
					}
					case zr.g:
						return t.payload.title;
					case us.q: {
						const {
							oldType: r,
							type: s
						} = t.payload;
						return s === Ln.a.ReplaceTopMod ? kn("") : s === Ln.a.Spinoff ? xn("") : r === Ln.a.ReplaceTopMod || r === Ln.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return kn(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return xn(e)
					}
					case us.i: {
						const {
							extra: r
						} = t.payload;
						return !r || r.govType !== Ln.a.ReplaceTopMod && r.govType !== Ln.a.Spinoff ? e : ""
					}
					case vs.b:
					case vs.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Mn = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Fn = (e = Mn, t) => {
					switch (t.type) {
						case us.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Gn = Object(j.c)({
					body: nn,
					eventSchedule: an,
					flair: on,
					govType: dn,
					isChatPost: un,
					isContestMode: ln,
					isNSFW: pn,
					isOC: bn,
					isPostAsMetaMod: mn,
					isPoll: fn,
					isPublicLink: yn,
					isSpoiler: On,
					newSubreddit: _n,
					newTopMod: En,
					nextSubreddit: hn,
					polls: gn,
					postSchedule: vn,
					postToTwitter: Tn,
					recaptcha: Dn,
					scheduledPostId: wn,
					sendReplies: Pn,
					stickyPosition: An,
					submissionType: Rn,
					suggestedSort: Nn,
					title: Un,
					tournament: Fn
				});
			var Bn = (e = null, t) => {
				switch (t.type) {
					case u.b: {
						if (Hs(t) !== Re.Mb.POST_CREATION) return null;
						const r = Ws(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? $s.i.MARKDOWN : e
					}
					case us.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case us.I:
						return null;
					case us.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case vs.b:
					case vs.n:
						return t.payload.contentType === Ys.a.RTJSON ? $s.i.RICH_TEXT : $s.i.MARKDOWN;
					default:
						return e
				}
			};
			const qn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Vn = (e = qn, t) => {
				switch (t.type) {
					case us.c:
					case us.d:
					case us.e:
						return e[Re.wb.BODY] ? {
							...e,
							[Re.wb.BODY]: []
						} : e;
					case us.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Re.wb.BODY] && r ? {
							...e,
							[Re.wb.BODY]: []
						} : e
					}
					case us.j:
						return e[Re.wb.TITLE] ? {
							...e,
							[Re.wb.TITLE]: []
						} : e;
					case us.L: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case us.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : qn
					}
					case us.K:
					case us.J:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object($s.w)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.b:
						return Hs(t) !== Re.Mb.POST_CREATION ? qn : e;
					default:
						return e
				}
			};
			var Hn = (e = !1, t) => {
				switch (t.type) {
					case us.b:
					case us.c:
					case us.d:
					case us.e:
					case us.f:
					case us.j:
					case us.i:
					case us.U:
					case us.V:
					case us.X:
					case zr.n:
					case us.Z:
					case us.ab:
						return !0;
					case us.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case us.P:
					case vs.h:
						return !1;
					case us.R:
						return t.payload;
					case u.b:
						return Hs(t) === Re.Mb.POST_CREATION && e;
					case us.E:
					case zr.l:
					case zr.g:
						return !1;
					default:
						return e
				}
			};
			const Wn = $s.r.Post;
			var Qn = (e = Wn, t) => {
					switch (t.type) {
						case us.w:
							return $s.r.Post;
						case us.F:
							return t.payload;
						case zr.j:
							return $s.r.Draft;
						case u.b:
							return Hs(t) !== Re.Mb.POST_CREATION ? Wn : e;
						default:
							return e
					}
				},
				Kn = Object(j.c)({
					editorMode: Bn,
					fieldValidation: Vn,
					isChanged: Hn,
					submitMode: Qn
				});
			var $n = (e = "", t) => {
				switch (t.type) {
					case us.H:
						return t.payload.editorMode === $s.i.MARKDOWN ? t.payload.postContent || "" : e;
					case us.I:
						return "";
					case us.Q:
						return t.payload.editorMode === $s.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Yn = Zs.a.createInitial;
			var zn = (e = Yn(), t) => {
					switch (t.type) {
						case us.I:
							return Zs.a.createInitial();
						case us.H: {
							const r = t.payload;
							return r.editorMode === $s.i.RICH_TEXT && "object" == typeof r.postContent ? Zs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case us.Q: {
							const r = t.payload;
							return r.editorMode === $s.i.RICH_TEXT && r.editorKey === $s.h.POST_EDITING ? Zs.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Xn = Object(j.c)({
					markdown: $n,
					rte: zn
				});
			var Jn = (e = null, t) => {
					switch (t.type) {
						case us.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case us.I:
							return null;
						default:
							return e
					}
				},
				Zn = Object(j.c)({
					draft: Xn,
					postId: Jn
				});
			var ea = (e = !1, t) => {
				switch (t.type) {
					case us.C:
					case us.B:
						return !1;
					case us.z:
						return !0;
					default:
						return e
				}
			};
			var ta = (e = !1, t) => {
					switch (t.type) {
						case us.z:
						case us.B:
							return !1;
						case us.C:
							return !0;
						default:
							return e
					}
				},
				ra = Object(j.c)({
					error: ea,
					pending: ta
				});
			var sa = (e = !1, t) => {
				switch (t.type) {
					case us.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case us.j:
					case us.d:
					case us.e:
					case us.i:
					case us.r:
					case zr.g:
						return !0;
					case us.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					default:
						return e
				}
			};
			const na = {};
			var aa = (e = na, t) => {
				switch (t.type) {
					case us.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const ca = [];
			var oa = (e = ca, t) => {
					switch (t.type) {
						case us.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				da = Object(j.c)({
					api: ra,
					isInputChanged: sa,
					model: aa,
					order: oa
				}),
				ia = Object(j.c)({
					api: Ms,
					drafts: Vs,
					formData: Gn,
					formState: Kn,
					postEditing: Zn,
					subredditRec: da
				}),
				ua = r("./src/reddit/actions/dashboard/constants.ts");
			const la = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var pa = (e = la, t) => {
				switch (t.type) {
					case ua.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ua.d: {
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
					case ua.c: {
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
			var ba = (e = null, t) => {
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
			var fa = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var ma = (e = !1, t) => {
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
				ya = Object(j.c)({
					error: ba,
					loaded: fa,
					pending: ma
				}),
				Oa = Object(j.c)({
					list: ya
				}),
				_a = r("./node_modules/lodash/isEmpty.js"),
				Ea = r.n(_a);
			const ha = {};
			var Ia = (e = ha, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return Ea()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ga = r("./node_modules/lodash/forOwn.js"),
				Sa = r.n(ga),
				ja = r("./src/reddit/helpers/name/index.ts");
			const va = {};
			var Ta = (e = va, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (Ea()(r)) return e;
							const s = {};
							return Sa()(r, e => {
								s[Object(ja.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Da = Object(j.c)({
					api: Oa,
					models: Ia,
					nameToId: Ta
				}),
				wa = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Pa = [];
			var Aa = (e = Pa, t) => {
					switch (t.type) {
						case wa.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				Ca = r("./src/reddit/actions/economics/banners/constants.ts");
			const Ra = {
				dismissedBanners: {}
			};
			var Na = (e = Ra, t) => {
					switch (t.type) {
						case Ca.c: {
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
						case Ca.d: {
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
						case Ca.a:
						case Ca.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === Ca.a;
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
				La = r("./src/reddit/models/Badge/managementPage.ts");
			const ka = {
				badgeType: La.a.Cosmetic,
				view: La.c.Gallery
			};
			var xa = (e = ka, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(La.d)(r.placement) : e.badgeType,
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
						return ka;
					default:
						return e
				}
			};
			var Ua = (e = null, t) => {
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
				Ma = r("./src/reddit/actions/economics/powerups/constants.ts");

			function Fa(e, t) {
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

			function Ga(e) {
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
						emotes: n.map(e => Fa(e, t))
					}
				}), r
			}
			const Ba = {};
			var qa = (e = Ba, t) => {
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
					case Ma.b: {
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
										[r.name]: Fa(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const Va = {};
			var Ha = (e = Va, t) => {
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
				Wa = r("./src/reddit/actions/economics/me/constants.ts");
			const Qa = {
				fetched: !1,
				data: {}
			};
			var Ka = (e = Qa, t) => {
					switch (t.type) {
						case Wa.a:
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
				$a = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ya = {
				fetched: !1,
				data: null
			};
			var za = (e = Ya, t) => {
					switch (t.type) {
						case Wa.b:
							return {
								fetched: !0, data: e.data
							};
						case Wa.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Xa = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ja = Object(j.c)({
					banners: Na,
					currentBadgeManagementScreen: xa,
					currentModalArgs: Ua,
					emotes: qa,
					gifs: Ha,
					me: Ka,
					paymentSystems: $a.b,
					pointsCopy: za,
					subredditPremium: Xa.b
				}),
				Za = r("./src/reddit/actions/emoji.ts");
			const ec = {};
			var tc = (e = ec, t) => {
					switch (t.type) {
						case Za.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Za.g:
						case Za.f: {
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
				rc = Object(j.c)({
					pending: tc
				}),
				sc = Object(j.c)({
					list: rc
				});
			const nc = {};
			var ac = (e = nc, t) => {
					switch (t.type) {
						case Za.f:
						case Za.c:
							return e;
						case Za.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Za.d: {
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
						case Za.i: {
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
						case Za.e: {
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
				cc = Object(j.c)({
					api: sc,
					models: ac
				}),
				oc = r("./src/reddit/actions/experiments.ts");
			const dc = /^experiment_(.*)$/i,
				ic = e => {
					const t = e.match(dc);
					if (null !== t) return t[1]
				},
				uc = {};
			var lc = (e = uc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Ws(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = ic(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return Ea()(s) ? e : {
								...e,
								...s
							}
						}
						case oc.b: {
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
				pc = r("./src/reddit/actions/externalAccount.ts");
			const bc = {};
			var fc = (e = bc, t) => {
				switch (t.type) {
					case pc.e:
					case pc.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case pc.d: {
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
			const mc = {};
			var yc = (e = mc, t) => {
					switch (t.type) {
						case pc.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case pc.f:
						case pc.d: {
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
				Oc = Object(j.c)({
					error: fc,
					pending: yc
				});
			const _c = {};
			var Ec = (e = _c, t) => {
				switch (t.type) {
					case pc.l:
					case pc.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case pc.j: {
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
			const hc = {};
			var Ic = (e = hc, t) => {
					switch (t.type) {
						case pc.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case pc.c:
						case pc.a: {
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
				gc = Object(j.c)({
					error: Ec,
					pending: Ic
				});
			const Sc = {};
			var jc = (e = Sc, t) => {
				switch (t.type) {
					case pc.i:
					case pc.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case pc.g: {
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
			const vc = {};
			var Tc = (e = vc, t) => {
				switch (t.type) {
					case pc.h: {
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
			const Dc = {};
			var wc = (e = Dc, t) => {
					switch (t.type) {
						case pc.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case pc.h:
						case pc.g: {
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
				Pc = Object(j.c)({
					error: jc,
					fetched: Tc,
					pending: wc
				});
			const Ac = {};
			var Cc = (e = Ac, t) => {
				switch (t.type) {
					case pc.l:
					case pc.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case pc.j: {
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
			const Rc = {};
			var Nc = (e = Rc, t) => {
					switch (t.type) {
						case pc.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case pc.k:
						case pc.j: {
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
				Lc = Object(j.c)({
					error: Cc,
					pending: Nc
				}),
				kc = Object(j.c)({
					connect: Oc,
					disconnect: gc,
					user: Lc,
					subreddit: Pc
				});
			const xc = {};
			var Uc = (e = xc, t) => {
				switch (t.type) {
					case pc.h: {
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
			const Mc = {};
			var Fc = (e = Mc, t) => {
					switch (t.type) {
						case pc.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case pc.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: Gs()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Gc = Object(j.c)({
					api: kc,
					user: Fc,
					subreddit: Uc
				}),
				Bc = r("./src/reddit/featureFlags/index.ts");
			const qc = new Set(["0", "disabled", "false", "off", ""]);
			var Vc = e => !qc.has(e.toLowerCase());
			const Hc = Bc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Wc = Bc.a.reduce((e, t) => (e[t] = null, e), {});
			var Qc = (e = Wc, t) => {
					switch (t.type) {
						case u.b: {
							const r = Ws(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Bc.g)(e);
									if (s) {
										const n = Hc[s.toLowerCase()];
										if (n) {
											const s = r[e],
												a = "string" != typeof s || Vc(s);
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
						case Bc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Bc.c: {
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
				Kc = Object(j.c)({
					overrides: Qc
				}),
				$c = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Yc = {
				focusedVerticalGqlError: null
			};
			var zc = (e = Yc, t) => {
				switch (t.type) {
					case $c.h:
					case $c.g:
					case $c.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case $c.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Xc = {
				focusedVerticalGqlPending: !1
			};
			var Jc = (e = Xc, t) => {
					switch (t.type) {
						case $c.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case $c.e:
						case $c.g:
						case $c.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Zc = Object(j.c)({
					error: zc,
					pending: Jc
				});
			var eo = (e = "", t) => {
				switch (t.type) {
					case $c.g:
					case $c.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const to = {
				dismissed: !0
			};
			var ro = (e = to, t) => {
				switch (t.type) {
					case $c.j:
						return {
							dismissed: !1
						};
					case $c.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var so = (e = null, t) => {
				switch (t.type) {
					case $c.g:
					case $c.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var no = (e = null, t) => {
				switch (t.type) {
					case $c.g:
					case $c.c:
					case $c.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var ao = (e = null, t) => {
					switch (t.type) {
						case $c.g:
						case $c.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				co = Object(j.c)({
					api: Zc,
					components: ro,
					interactedSubredditIds: so,
					recommendedSubredditIds: ao,
					category: eo,
					lastLoadedEnv: no
				});
			Object(Ce.a)("FONTS_FONT_FILES_PARSED");
			const oo = [];
			var io = (e = oo, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var uo = (e = null, t) => {
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
			var lo = (e = !1, t) => {
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
			var po = (e = !1, t) => {
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
				bo = Object(j.c)({
					error: uo,
					pending: lo,
					showLoader: po
				});
			var fo = (e = null, t) => {
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
			var mo = (e = null, t) => {
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
			var yo = (e = null, t) => {
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
			var Oo = (e = !1, t) => {
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var _o = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var Eo = (e = "", t) => {
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const ho = he.n;
			var Io = (e = ho, t) => {
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || ho
						}
						default:
							return e
					}
				},
				go = Object(j.c)({
					api: bo,
					correlationId: fo,
					gildModalThingId: yo,
					isAnonymous: Oo,
					isIframed: _o,
					message: Eo,
					gildedThing: mo,
					selectedAward: Io
				});
			var So = (e = null, t) => {
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
			var jo = (e = !1, t) => {
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
				vo = Object(j.c)({
					error: So,
					pending: jo
				});
			var To = (e = "", t) => {
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
				Do = Object(j.c)({
					api: vo,
					givePremiumModalAccountName: To
				}),
				wo = r("./src/reddit/actions/header.ts"),
				Po = r("./src/reddit/actions/overlayEvents.ts");
			var Ao = (e = !1, t) => {
					switch (t.type) {
						case wo.a:
							return !1;
						case wo.b:
							return !0;
						case wo.c:
							return !e;
						case Po.b:
							return !1;
						default:
							return e
					}
				},
				Co = Object(j.c)({
					isSubscriptionsDropdownOpen: Ao
				});
			var Ro = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				No = r("./src/reddit/actions/imageUploads.ts");
			const Lo = {};
			var ko = (e = Lo, t) => {
					switch (t.type) {
						case No.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case No.c:
						case No.e:
						case No.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case No.a: {
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
				xo = r("./src/reddit/actions/interceptedAction.ts");
			var Uo = (e = null, t) => {
					switch (t.type) {
						case xo.a:
							return t.payload;
						case xo.b:
							return null;
						default:
							return e
					}
				},
				Mo = r("./src/reddit/actions/changeUsername.ts");
			var Fo = (e = !0, t) => {
					switch (t.type) {
						case Mo.a:
							return !1;
						case Mo.b:
							return !0;
						default:
							return e
					}
				},
				Go = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var Bo = (e = !1, t) => {
					switch (t.type) {
						case Go.a:
							return !e;
						default:
							return e
					}
				},
				qo = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Vo = (e = !1, t) => {
					switch (t.type) {
						case qo.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
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
				Ho = r("./src/reddit/actions/jsApi.ts");
			const Wo = [];
			var Qo = (e = Wo, t) => {
					switch (t.type) {
						case Ho.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Ko = r("./src/reddit/actions/leaderboard/constants.ts");
			const $o = {};
			var Yo = (e = $o, t) => {
				switch (t.type) {
					case Ko.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ko.b:
					case Ko.c: {
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
			const zo = {};
			var Xo = (e = zo, t) => {
					switch (t.type) {
						case Ko.a:
						case Ko.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case Ko.b: {
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
				Jo = Object(j.c)({
					error: Yo,
					pending: Xo
				});
			const Zo = {};
			var ed = (e = Zo, t) => {
					switch (t.type) {
						case Ko.c: {
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
				td = Object(j.c)({
					api: Jo,
					models: ed
				});
			var rd = (e = "", t) => {
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
			const sd = {};
			var nd = (e = sd, t) => {
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
			const ad = {};
			var cd = (e = ad, t) => {
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
				od = Object(j.c)({
					error: nd,
					pending: cd
				});
			const dd = {};
			var id = (e = dd, t) => {
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
			const ud = {};
			var ld = (e = ud, t) => {
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
			const pd = {};
			var bd = (e = pd, t) => {
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
				fd = Object(j.c)({
					api: od,
					identifiers: ld,
					fetchedTokens: id,
					loadMore: bd
				});
			const md = {};
			var yd = (e = md, t) => {
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
			const Od = {};
			var _d = (e = Od, t) => {
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
				Ed = Object(j.c)({
					error: yd,
					pending: _d
				});
			const hd = {};
			var Id = (e = hd, t) => {
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
			const gd = {};
			var Sd = (e = gd, t) => {
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
			const jd = {};
			var vd = (e = jd, t) => {
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
				Td = Object(j.c)({
					api: Ed,
					identifiers: Sd,
					fetchedTokens: Id,
					loadMore: vd
				});
			const Dd = {};
			var wd = (e = Dd, t) => {
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
			const Pd = {};
			var Ad = (e = Pd, t) => {
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
				Cd = Object(j.c)({
					error: wd,
					pending: Ad
				});
			const Rd = {};
			var Nd = (e = Rd, t) => {
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
			const Ld = {};
			var kd = (e = Ld, t) => {
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
			const xd = {};
			var Ud = (e = xd, t) => {
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
				Md = Object(j.c)({
					api: Cd,
					identifiers: kd,
					fetchedTokens: Nd,
					loadMore: Ud
				}),
				Fd = r("./src/reddit/actions/eventPosts/constants.ts"),
				Gd = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Bd = r("./src/reddit/actions/pages/topic.ts");
			const qd = {};
			var Vd = (e = qd, t) => {
					switch (t.type) {
						case ve.c:
						case ve.b:
						case ve.g:
						case ve.f:
						case ge.c:
						case ge.b:
						case De.c:
						case De.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case Te.e:
						case Te.f:
						case Te.i:
						case Te.h:
						case je.s:
						case je.r:
						case Gd.b:
						case Gd.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case K.j:
						case Bd.TOPIC_DATA_PENDING:
						case Bd.TOPIC_DATA_LOADED:
						case Bd.MORE_POSTS_PENDING:
						case Bd.MORE_POSTS_LOADED:
						case K.i:
						case Fd.e:
						case Fd.c:
						case Fd.d: {
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
						case ve.a:
						case ve.e:
						case ge.a:
						case De.a:
						case W.SUBREDDIT_FAILED:
						case ge.e:
						case Te.g:
						case je.q:
						case Gd.a:
						case K.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case Bd.TOPIC_DATA_FAILED:
						case Bd.MORE_POSTS_FAILED:
						case Fd.b: {
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
				Hd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				Wd = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				Qd = r("./src/reddit/actions/subreddit/constants.ts");
			const Kd = {};
			var $d = (e = Kd, t) => {
					switch (t.type) {
						case ve.c:
						case ve.g:
						case ge.c:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case Pe.f:
						case W.SUBREDDIT_PENDING:
						case ge.g:
						case Te.f:
						case Te.i:
						case je.s:
						case Gd.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case K.j:
						case Bd.MORE_POSTS_PENDING:
						case Fd.e: {
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
						case ve.b:
						case ve.a:
						case ve.f:
						case ve.e:
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
						case Hd.b:
						case Hd.c:
						case Te.e:
						case Te.d:
						case Te.h:
						case Te.g:
						case je.r:
						case je.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case Wd.a:
						case Wd.b:
						case Qd.j:
						case Gd.b:
						case Gd.a:
						case K.i:
						case K.h:
						case Bd.MORE_POSTS_LOADED:
						case Bd.MORE_POSTS_FAILED:
						case Fd.c:
						case Fd.b:
						case Fd.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case Qd.r: {
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
				Yd = Object(j.c)({
					error: Vd,
					pending: $d
				});
			const zd = {};
			var Xd = (e = zd, t) => {
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
				Jd = r("./src/reddit/actions/postList.ts"),
				Zd = r("./node_modules/lodash/omitBy.js"),
				ei = r.n(Zd);

			function ti(e, t) {
				return t = t.toLowerCase(), ei()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ri = {};
			var si = (e = ri, t) => {
				switch (t.type) {
					case Jd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Jd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Gs()(e, [r]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return ti(e, t.payload);
					default:
						return e
				}
			};
			const ni = {};
			var ai = (e = ni, t) => {
					switch (t.type) {
						case ve.b:
						case Te.e:
						case ge.b:
						case De.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case Bd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case ve.f:
						case ge.f:
						case Te.h:
						case je.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case K.i:
						case Bd.MORE_POSTS_LOADED: {
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
							return ti(e, t.payload);
						default:
							return e
					}
				},
				ci = r("./src/reddit/actions/post.ts");
			const oi = {};
			var di = (e = oi, t) => {
					switch (t.type) {
						case ve.c:
						case ge.c:
						case Te.f:
						case De.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case Pe.f:
						case q.PROFILE_POSTS_PENDING:
						case Bd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Hd.c:
						case Te.e:
						case Wd.b:
						case ge.b:
						case ve.b:
						case De.b:
						case W.SUBREDDIT_LOADED:
						case Qd.j:
						case Gd.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Bd.TOPIC_DATA_LOADED:
						case Fd.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Qd.r: {
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
						case ve.f:
						case ge.f:
						case Te.h:
						case je.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case K.i:
						case Bd.MORE_POSTS_LOADED:
						case Fd.d: {
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
						case ci.o: {
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
							return ti(e, t.payload);
						default:
							return e
					}
				},
				ii = r("./src/lib/makeListingKey/index.ts");
			const ui = {};
			var li = (e = ui, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(ii.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case xr.a:
					case xr.q: {
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
			const pi = {};
			var bi = (e = pi, t) => {
				switch (t.type) {
					case ve.b:
					case ve.f:
					case ge.b:
					case De.b:
					case W.SUBREDDIT_LOADED:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case ge.f:
					case Te.e:
					case Te.h:
					case je.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case K.i:
					case Bd.TOPIC_DATA_LOADED:
					case Bd.MORE_POSTS_LOADED: {
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
						return ti(e, t.payload);
					default:
						return e
				}
			};
			const fi = {};
			var mi = (e = fi, t) => {
					switch (t.type) {
						case Fd.c:
						case Fd.d: {
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
				yi = Object(j.c)({
					api: Yd,
					correlationIds: Xd,
					endMarkers: si,
					fetchedTokens: ai,
					ids: di,
					listingSort: li,
					loadMore: bi,
					pageInfo: mi
				}),
				Oi = Object(j.c)({
					activeKey: rd,
					authorOrder: fd,
					communityOrder: Td,
					listingOrder: Md,
					postOrder: yi
				});
			var _i = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Ea()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Ei = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Ea()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var hi = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var Ii = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				gi = Object(j.c)({
					announcements: _i,
					featured: Ei,
					isFrontpageLoaded: hi,
					shouldShowAnnouncements: Ii
				}),
				Si = r("./src/reddit/actions/media.ts");
			const ji = {},
				vi = {};
			var Ti = (e = vi, t) => {
				switch (t.type) {
					case Si.b: {
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
			const Di = {};
			var wi = (e = Di, t) => {
					switch (t.type) {
						case Si.e: {
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
				Pi = Object(j.c)({
					currentSlideIndex: Ti,
					isGalleryTileLayout: wi
				});
			var Ai = (e = !0, t) => {
				switch (t.type) {
					case Si.c:
						return t.payload;
					default:
						return e
				}
			};
			var Ci = (e = .5, t) => {
					switch (t.type) {
						case Si.d:
							return t.payload;
						default:
							return e
					}
				},
				Ri = Object(j.c)({
					isMuted: Ai,
					volume: Ci
				}),
				Ni = r("./src/reddit/actions/meta.ts");
			const Li = {
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
			var ki = (e = Li, t) => {
					switch (t.type) {
						case Ni.b:
							return t.payload;
						case Ni.a:
							return {
								...e, ...t.payload
							};
						case Ni.e:
							return {
								...e, locale: t.payload
							};
						case Ni.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Ni.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Ni.d:
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
				xi = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Ui = {};
			var Mi = (e = Ui, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
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
					case Te.e:
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
					case xi.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Ut.a)(e, r)
					}
					case xi.S: {
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
			var Fi = (e = null, t) => {
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
			var Gi = (e = !1, t) => {
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
				Bi = Object(j.c)({
					error: Fi,
					pending: Gi
				});
			const qi = [];
			var Vi = (e = qi, t) => {
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
				Hi = Object(j.c)({
					api: Bi,
					names: Vi
				}),
				Wi = Object(j.c)({
					filteredSubreddits: Hi
				}),
				Qi = r("./src/reddit/actions/modMode.ts");
			var Ki = (e = !0, t) => {
				switch (t.type) {
					case Qi.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const $i = {};
			var Yi = (e = $i, t) => {
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
			const zi = {};
			var Xi = (e = zi, t) => {
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
				Ji = Object(j.c)({
					error: Yi,
					pending: Xi
				});
			const Zi = {};
			var eu = (e = Zi, t) => {
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
				tu = Object(j.c)({
					api: Ji,
					models: eu
				});
			var ru = (e = null, t) => {
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
			var su = (e = !1, t) => {
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
			var nu = (e = null, t) => {
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
				au = Object(j.c)({
					error: ru,
					fetched: su,
					pending: nu
				});
			var cu = (e = null, t) => {
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
			var ou = (e = !1, t) => {
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
			var du = (e = !1, t) => {
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
				iu = Object(j.c)({
					error: cu,
					fetched: ou,
					pending: du
				});
			var uu = (e = null, t) => {
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
			var lu = (e = !1, t) => {
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
			var pu = (e = !1, t) => {
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
				bu = Object(j.c)({
					error: uu,
					fetched: lu,
					pending: pu
				});
			var fu = (e = null, t) => {
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
			var mu = (e = !1, t) => {
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
			var yu = (e = !1, t) => {
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
				Ou = Object(j.c)({
					error: fu,
					fetched: mu,
					pending: yu
				});
			var _u = (e = null, t) => {
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
			var Eu = (e = !1, t) => {
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
			var hu = (e = !1, t) => {
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
				Iu = Object(j.c)({
					error: _u,
					fetched: Eu,
					pending: hu
				});
			var gu = (e = !1, t) => {
				switch (t.type) {
					case je.t:
						return !1;
					case je.u:
						return !0;
					default:
						return e
				}
			};
			var Su = (e = !1, t) => {
					switch (t.type) {
						case je.t:
							return !0;
						case je.u:
							return !1;
						default:
							return e
					}
				},
				ju = Object(j.c)({
					fetched: gu,
					pending: Su
				});
			var vu = (e = null, t) => {
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
			var Tu = (e = !1, t) => {
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
			var Du = (e = !0, t) => {
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
				wu = Object(j.c)({
					error: vu,
					fetched: Tu,
					pending: Du
				});
			var Pu = (e = null, t) => {
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
			var Au = (e = !1, t) => {
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
			var Cu = (e = null, t) => {
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
				Ru = Object(j.c)({
					error: Pu,
					fetched: Au,
					pending: Cu
				}),
				Nu = Object(j.c)({
					addSubreddit: au,
					create: iu,
					deleteMulti: bu,
					duplicate: Ou,
					edit: Iu,
					forUser: ju,
					recommendations: wu,
					removeSubreddit: Ru
				}),
				Lu = r("./node_modules/lodash/isEqual.js"),
				ku = r.n(Lu),
				xu = r("./node_modules/lodash/union.js"),
				Uu = r.n(xu);

			function Mu(e, t, r) {
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
			var Fu = r("./src/reddit/actions/profile/constants.ts");
			const Gu = {};
			var Bu = (e = Gu, t) => {
					switch (t.type) {
						case De.b:
						case je.r:
						case je.u:
						case Fu.h: {
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
								a[t] = Uu()(n, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return ku()(e, a) ? e : a
						}
						case je.g:
						case je.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Mu(n, s.url, (e, t) => e > t ? 1 : -1);
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
				qu = r("./src/reddit/actions/subscription/constants.ts"),
				Vu = r("./src/reddit/models/Multireddit/index.ts");
			const Hu = {};
			var Wu = (e = Hu, t) => {
				switch (t.type) {
					case De.b:
					case je.r:
					case je.u:
					case Fu.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Vu.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && ku()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return Ea()(r) ? e : {
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
					case qu.d: {
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
					case qu.e: {
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
			const Qu = {};
			var Ku = (e = Qu, t) => {
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
				$u = Object(j.c)({
					api: Nu,
					byUserId: Bu,
					models: Wu,
					recommendations: Ku
				}),
				Yu = r("./src/reddit/actions/notificationBanner.ts");
			var zu = (e = null, t) => {
					switch (t.type) {
						case Yu.b:
							return t.payload.notificationBannerId;
						case Yu.a:
							return null;
						default:
							return e
					}
				},
				Xu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var Ju = (e = !1, t) => {
				switch (t.type) {
					case Xu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Xu.e:
					case Xu.b:
						return !1;
					default:
						return e
				}
			};
			var Zu = (e = !1, t) => {
					switch (t.type) {
						case Xu.e:
							return !0;
						case Xu.a:
						case Xu.b:
							return !1;
						default:
							return e
					}
				},
				el = Object(j.c)({
					error: Ju,
					pending: Zu
				});
			var tl = (e = null, t) => {
				switch (t.type) {
					case Xu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var rl = (e = null, t) => {
				switch (t.type) {
					case Xu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const sl = [];
			var nl = (e = sl, t) => {
				switch (t.type) {
					case Xu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case Xu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case Xu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
					}
					case Xu.c: {
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
			var al = (e = null, t) => {
					switch (t.type) {
						case Xu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				cl = Object(j.c)({
					api: el,
					earlierDividerIndex: tl,
					notifications: nl,
					pageInfo: al,
					markAllAsReadTimestamp: rl
				}),
				ol = r("./src/reddit/actions/nps.ts");
			const dl = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var il = (e = dl, t) => {
					switch (t.type) {
						case ol.c:
							return {
								...dl, pending: !0
							};
						case ol.a:
							return dl;
						case ol.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...dl,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				ul = r("./src/reddit/actions/accountGender/constants.ts"),
				ll = r("./src/reddit/actions/onboarding/constants.ts");
			const pl = {
				success: !1,
				failure: !1
			};
			var bl = (e = pl, t) => {
					switch (t.type) {
						case ul.b:
							return {
								...pl, success: !0
							};
						case ul.c:
							return {
								...pl, failure: !0
							};
						case ll.a:
							return {
								...pl
							};
						default:
							return e
					}
				},
				fl = Object(j.c)({
					genderUpdateState: bl
				});
			const ml = e => {
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
			const yl = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = ml(r);
					return t
				},
				Ol = {};
			var _l = (e = Ol, t) => {
				switch (t.type) {
					case oc.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return yl(r)
					}
					default:
						return e
				}
			};
			var El = Object(j.c)({
					byName: _l,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case oc.a: {
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
				hl = Object(j.c)({
					experiments: El
				}),
				Il = r("./node_modules/history/esm/history.js"),
				gl = r("./src/reddit/constants/history.ts");
			const Sl = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var jl = (e = Sl, t) => {
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
						const o = Object(Il.e)(a),
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
									[gl.b.FeedCorrelationId]: r
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const vl = {};
			var Tl = (e = vl, t) => {
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
			const Dl = {};
			var wl = (e = Dl, t) => {
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
				Pl = Object(j.c)({
					error: Tl,
					pending: wl
				}),
				Al = Object(j.c)({
					voting: Pl
				}),
				Cl = r("./src/reddit/reducers/posts/models/helpers.ts"),
				Rl = r("./src/reddit/actions/economics/predictions/constants.ts");
			var Nl = r("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				Ll = r("./src/reddit/models/Prediction/index.ts");
			const kl = {};
			var xl = (e = kl, t) => {
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
					case Rl.l: {
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
						const s = Ct()(t.payload.posts, Object(Cl.h)([Cl.o])),
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
											type: Ln.a.GA,
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
										type: Ln.a.GA,
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
					case Rl.n:
					case Rl.m: {
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
					case Rl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return e[r] && Object(Ll.c)(e[r]) ? {
							...e,
							[r]: {
								...e[r],
								...Object(Nl.b)(s)
							}
						} : e
					}
					default:
						return e
				}
			};
			const Ul = {};
			var Ml = (e = Ul, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[Ln.b.ByVoters]: r, pollId: s
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
										[Ln.b.ByVoters]: n,
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
			const Fl = {};
			var Gl = (e = Fl, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[Ln.b.ByVotingPower]: r, pollId: s
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
											[Ln.b.ByVotingPower]: n,
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
				Bl = Object(j.c)({
					byVoters: Ml,
					byVotingPower: Gl
				});
			const ql = {};
			var Vl = (e = ql, t) => {
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
				Hl = Object(j.c)({
					api: Al,
					models: xl,
					results: Bl,
					rewards: Vl
				});
			const Wl = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Ql = (e = Wl, t) => {
				switch (t.type) {
					case Wr.i:
					case Wr.j:
						return {
							...e, reorderError: null
						};
					case Wr.h:
						return {
							...e, reorderError: t.payload
						};
					case Wr.l:
					case Wr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Wr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Wr.p:
					case Wr.q:
						return {
							...e, updateLayoutError: null
						};
					case Wr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Kl = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var $l = (e = Kl, t) => {
					switch (t.type) {
						case Wr.i:
							return {
								...e, reorderPending: !0
							};
						case Wr.h:
						case Wr.j:
							return {
								...e, reorderPending: !1
							};
						case Wr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Wr.k:
						case Wr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Wr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Wr.o:
						case Wr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Yl = Object(j.c)({
					error: Ql,
					pending: $l
				}),
				zl = r("./src/reddit/helpers/path/index.ts");
			const Xl = {},
				Jl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(zl.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Zl = (e = Xl, t) => {
				switch (t.type) {
					case ve.b:
					case ve.f:
					case we.PAGE_LOADED:
					case Te.e:
					case Te.h:
					case B.b:
					case B.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case W.SUBREDDIT_LOADED:
					case G.b:
					case G.f:
					case ci.j:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ne.g:
					case Ae.b:
					case H.c:
					case Wr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = Jl(s);
							n = Ct()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Wr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = Jl(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Wr.g: {
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
					case Wr.a: {
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
					case Wr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Wr.s: {
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
					case Wr.j: {
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
					case Wr.m: {
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
					case Wr.q: {
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
			const ep = {};
			var tp = (e = ep, t) => {
					switch (t.type) {
						case we.PAGE_LOADED:
						case Wr.f: {
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
						case Wr.d: {
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
						case Wr.e: {
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
				rp = Object(j.c)({
					models: Zl,
					subredditToIds: tp,
					api: Yl
				}),
				sp = r("./src/reddit/actions/postFlair.ts"),
				np = r("./src/reddit/models/Flair/index.ts");
			const ap = {},
				cp = {
					displaySettings: {
						isEnabled: !1,
						position: np.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				op = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...cp,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var dp = (e = ap, t) => {
					switch (t.type) {
						case ve.b:
						case ve.f:
						case we.PAGE_LOADED:
						case ge.f:
						case Te.e:
						case Te.h:
						case je.r:
						case Gd.b:
						case G.b:
						case G.f:
						case ge.b:
						case De.b:
						case H.c:
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case Q.e:
						case Ae.b:
						case Ae.b:
						case Pe.b:
						case Pe.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ne.g:
						case Ne.g:
						case K.i:
							return op(e, t.payload.postFlair);
						case sp.c: {
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
						case sp.a: {
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
						case sp.f: {
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
						case sp.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = Gs()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
									templates: o,
									templateIds: d
								}
							}
						}
						case sp.e:
						case sp.d: {
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
							return op(e, r.postFlair)
						}
						default:
							return e
					}
				},
				ip = r("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const up = {
				pending: !1,
				items: {}
			};
			var lp = (e = up, t) => {
				switch (t.type) {
					case ip.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case ip.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var pp = (e = null, t) => {
					switch (t.type) {
						case ci.c:
							return t.payload;
						default:
							return e
					}
				},
				bp = r("./src/reddit/actions/embedAndImage.ts");
			const fp = {};
			var mp = (e = fp, t) => {
					switch (t.type) {
						case bp.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case bp.a: {
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
				yp = Object(j.c)({
					loadable: mp
				});
			const Op = {};
			var _p = (e = Op, t) => {
				switch (t.type) {
					case ci.d: {
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
			var Ep = (e = null, t) => {
				switch (t.type) {
					case ci.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const hp = [];
			var Ip = (e = hp, t) => {
				switch (t.type) {
					case ci.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case ci.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case ci.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const gp = {};
			var Sp = (e = gp, t) => {
				switch (t.type) {
					case Te.e:
					case Te.h:
					case ge.b:
					case W.SUBREDDIT_LOADED:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case K.i:
					case Ne.g:
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
			var jp = (e = null, t) => {
					switch (t.type) {
						case ci.a:
							return t.payload;
						default:
							return e
					}
				},
				vp = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Tp = {};
			var Dp = (e = Tp, t) => {
				switch (t.type) {
					case vp.a: {
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
			const wp = {};
			var Pp = (e = wp, t) => {
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
						case Rl.l: {
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
				Ap = r("./src/reddit/actions/bulkActions/constants.ts"),
				Cp = r("./src/reddit/actions/constants.ts"),
				Rp = r("./src/reddit/actions/flairManagement/constants.ts"),
				Np = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Lp = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				kp = r("./src/reddit/actions/subredditTopContent.ts"),
				xp = r("./src/reddit/helpers/isPost.ts"),
				Up = r("./node_modules/lodash/pickBy.js"),
				Mp = r.n(Up);

			function Fp(e, t) {
				const r = Mp()(t, (t, r = "") => !e[r] || !ku()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Gp = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Bp = r("./src/reddit/models/Media/index.ts"),
				qp = r("./src/reddit/models/ModQueue/index.ts"),
				Vp = r("./src/reddit/models/Post/index.ts"),
				Hp = r("./src/reddit/models/Vote/index.ts"),
				Wp = r("./src/reddit/actions/subredditDuplicates.ts");
			const Qp = {};
			var Kp = (e = Qp, t) => {
				switch (t.type) {
					case u.b:
						if (Hs(t) === (Re.Mb.COMMENTS || Re.Mb.DUPLICATES)) {
							const r = Ws(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Vp.t)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: Object(Cl.c)(e[n], e[t])
								}
							}
						}
						return e;
					case G.b:
					case G.f: {
						const r = Object(Cl.g)(t.payload.meta);
						return {
							...e,
							...Ct()(t.payload.posts, Object(Cl.h)([r, Cl.d, Cl.m, Cl.n, Cl.o, Object(Cl.a)(e), Object(Cl.b)(e), Object(Cl.j)(e), Object(Cl.k)(e), Object(Cl.i)(e)]))
						}
					}
					case ci.j:
						return Fp(e, t.payload);
					case Wp.a:
						return Fp(e, t.payload.posts);
					case ve.b:
					case ve.f:
					case we.PAGE_LOADED:
					case Hd.c:
					case Wd.b:
					case Te.e:
					case Te.h:
					case B.b:
					case B.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case ge.b:
					case De.b:
					case Gd.b:
					case je.r:
					case ge.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case Qd.j:
					case K.i:
					case Ae.b:
					case Bd.TOPIC_DATA_LOADED:
					case Bd.MORE_POSTS_LOADED:
					case Fd.c:
					case Fd.d:
					case Rl.l: {
						const r = Object(Cl.g)(t.payload.meta);
						return {
							...e,
							...Ct()(t.payload.posts, Object(Cl.h)([r, Cl.d, Cl.m, Cl.n, Cl.o, Object(Cl.l)(e), Object(Cl.j)(e), Object(Cl.i)(e)]))
						}
					}
					case Qd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Object(Cl.g)(t.meta);
							Object.assign(r, Ct()(t.posts, Object(Cl.h)([n, Cl.d, Cl.m, Cl.n, Object(Cl.l)(e), Object(Cl.j)(e), Object(Cl.i)(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Gd.b: {
						const r = Object(Cl.g)(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Ct()(t.payload.posts, Object(Cl.h)([r, Cl.d, Cl.m, Cl.n, Object(Cl.l)(e), Object(Cl.j)(e), Object(Cl.i)(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Ne.g:
					case H.c: {
						const r = Object(Cl.g)(t.payload.meta),
							s = Ct()(t.payload.posts, Object(Cl.h)([r, Cl.m, Cl.d, Cl.n, Object(Cl.i)(e)]));
						return k()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case ci.k: {
						const r = t.payload;
						return k()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Cp.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Hp.c)(n, s)
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
					case ci.h: {
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
					case ci.i: {
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
							...r.reduce((e, t) => (e[t.post.id] = Object(Cl.h)([Cl.m])(Object(en.f)(t.post)), e), {})
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
								...Object(Gp.a)(c, s, n),
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
							[s]: Object(Gp.b)(n, r)
						} : e
					}
					case xi.n: {
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
							...Ct()(s, Object(Cl.h)([Cl.m, Cl.n]))
						}
					}
					case Ap.b:
					case F.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(xp.a)(e)), o = Object(qp.d)(e, r, c, n, a);
						return k()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Wr.t: {
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
					case Wr.e: {
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
					case Wr.g: {
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
					case Fd.f: {
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
					case Fd.a: {
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
					case $c.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Ct()(r.posts, Object(Cl.h)([Cl.m, Cl.n])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case kp.b:
						return {
							...Ct()(t.payload.posts, Object(Cl.h)([Cl.m, Cl.n])), ...e
						};
					case ci.m: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(Bp.K)(n.media) ? {
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
					case Rp.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Rp.b: {
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
					case Lp.b: {
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
					case Rl.q: {
						const {
							tournamentPostId: r,
							predictionId: s,
							selectedOptionId: n
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const a = {
							...e
						};
						return a[s] && (a[s] = Object(Cl.e)({
							post: e[s],
							selectedOptionId: n
						})), a[r] && (a[r] = Object(Cl.f)({
							post: e[r],
							selectedOptionId: n,
							predictionId: s
						})), a
					}
					case Rl.b: {
						const {
							postId: r,
							prediction: s
						} = t.payload;
						return {
							...e,
							[r]: Object(Cl.p)(e[r], Object(Nl.a)(s))
						}
					}
					case Lp.a:
						return {
							...e
						};
					case Np.b: {
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
					case Np.a:
						return {
							...e
						};
					case Hd.a: {
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
			var $p = (e = null, t) => {
					switch (t.type) {
						case ci.g:
							return t.payload;
						default:
							return e
					}
				},
				Yp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const zp = {};
			var Xp = (e = zp, t) => {
				switch (t.type) {
					case Yp.a: {
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
			const Jp = [];
			var Zp = (e = Jp, t) => {
					switch (t.type) {
						case ci.l: {
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
				eb = r("./node_modules/uuid/v4.js"),
				tb = r.n(eb);
			const rb = tb()();
			var sb = (e = rb, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case vs.h:
					case vs.a:
					case vs.m:
					case vs.f:
						return tb()();
					default:
						return e
				}
			};
			var nb = (e = null, t) => {
				switch (t.type) {
					case vs.d:
					case vs.o:
					case vs.k:
					case vs.g:
					case vs.a:
					case vs.m:
					case vs.f:
						return null;
					case vs.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case vs.e:
						return "error";
					default:
						return e
				}
			};
			var ab = (e = !0, t) => {
				switch (t.type) {
					case vs.g:
						return !0;
					case vs.m:
					case vs.a:
					case vs.f:
					case vs.e:
						return !1;
					default:
						return e
				}
			};
			var cb = (e = !1, t) => {
					switch (t.type) {
						case vs.k:
							return !0;
						case vs.j:
						case vs.e:
						case vs.o:
						case vs.d:
							return !1;
						default:
							return e
					}
				},
				ob = Object(j.c)({
					creationToken: sb,
					error: nb,
					pending: ab,
					pendingUpdate: cb
				});
			const db = {};
			var ib = (e = db, t) => {
				switch (t.type) {
					case vs.c: {
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
			const ub = {
				standalonePosts: {
					POSTS_LOADED: vs.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: vs.o
				},
				recurringPosts: {
					POSTS_LOADED: vs.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: vs.d
				}
			};

			function lb(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case ub[e].POSTS_LOADED:
						case vs.f: {
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
						case vs.i:
						case vs.l: {
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
						case vs.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case ub[e].MUTATION_SUCCEEDED: {
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
			const pb = {};

			function bb(e) {
				return (t = pb, r) => {
					switch (r.type) {
						case ub[e].POSTS_LOADED:
						case vs.f: {
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
						case vs.h: {
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
			var fb = r("./node_modules/lodash/uniq.js"),
				mb = r.n(fb);
			const yb = {};

			function Ob(e) {
				return (t = yb, r) => {
					switch (r.type) {
						case ub[e].POSTS_LOADED:
						case vs.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[ub[e].postIdsKey];
							return {
								...t,
								[n]: mb()([...t[n] || [], ...a])
							}
						}
						case vs.i:
						case vs.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case vs.h: {
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
			var _b = Object(j.c)({
					models: lb("recurringPosts"),
					pageInfo: bb("recurringPosts"),
					postOrder: Ob("recurringPosts"),
					editModal: ib
				}),
				Eb = Object(j.c)({
					models: lb("standalonePosts"),
					pageInfo: bb("standalonePosts"),
					postOrder: Ob("standalonePosts")
				}),
				hb = Object(j.c)({
					api: ob,
					standalonePosts: Eb,
					recurringPosts: _b
				});
			var Ib = (e = null, t) => {
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
			var gb = (e = !1, t) => {
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
				Sb = Object(j.c)({
					error: Ib,
					pending: gb
				});
			const jb = [];
			var vb = (e = jb, t) => {
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
							return jb;
						default:
							return e
					}
				},
				Tb = Object(j.c)({
					api: Sb,
					list: vb
				}),
				Db = r("./src/reddit/actions/video.ts");
			const wb = {};
			var Pb = (e = wb, t) => {
				switch (t.type) {
					case Db.e: {
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
			const Ab = {};
			var Cb = (e = Ab, t) => {
				switch (t.type) {
					case Db.a: {
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
			const Rb = {};
			var Nb = (e = Rb, t) => {
				switch (t.type) {
					case Db.b: {
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
			const Lb = {};
			var kb = (e = Lb, t) => {
				switch (t.type) {
					case Db.c: {
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
			const xb = {
				mutedInFeed: !0
			};
			var Ub = (e = xb, t) => {
				switch (t.type) {
					case Db.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Mb = (e = null, t) => {
				switch (t.type) {
					case Db.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Db.d:
						return null;
					default:
						return e
				}
			};
			const Fb = {};
			var Gb = (e = Fb, t) => {
				switch (t.type) {
					case Db.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Db.e: {
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
			const Bb = {};
			var qb = (e = Bb, t) => {
				switch (t.type) {
					case Db.h: {
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
					case Db.f: {
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
			const Vb = {};
			var Hb = (e = Vb, t) => {
				switch (t.type) {
					case Db.j: {
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
			const Wb = {};
			var Qb = (e = Wb, t) => {
				switch (t.type) {
					case Db.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Db.g: {
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
			const Kb = {};
			var $b = (e = Kb, t) => {
				switch (t.type) {
					case Db.i: {
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
			const Yb = {};
			var zb = (e = Yb, t) => {
					switch (t.type) {
						case Db.m: {
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
				Xb = r("./src/reddit/constants/video.ts");
			const Jb = {};
			var Zb = (e = Jb, t) => {
					switch (t.type) {
						case Db.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < Xb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				ef = Object(j.c)({
					autoPlayed: Pb,
					buffering: Cb,
					consumed: Nb,
					continuousViewStartedAt: kb,
					feed: Ub,
					fullscreen: Mb,
					loadable: Gb,
					loadTimes: qb,
					metadata: Hb,
					paused: Qb,
					playing: $b,
					started: zb,
					time: Zb
				}),
				tf = Object(j.c)({
					embedAndImage: yp,
					expanded: _p,
					focus: Ep,
					followed: Ip,
					instances: Sp,
					isAnimatingUpvote: jp,
					isTrackingCrossposts: Dp,
					metaMap: Pp,
					models: Kp,
					modToMemberShare: $p,
					crowdControl: pp,
					postLevelCrowdControl: Xp,
					recent: Zp,
					scheduledPosts: hb,
					topAwarded: Tb,
					video: ef,
					carousel: lp
				}),
				rf = r("./src/lib/reducers/addAuthentication/index.ts");
			const sf = {};
			var nf = Object(rf.a)((e = sf, t) => {
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
				}, sf),
				af = Object(j.c)({
					data: nf
				});
			const cf = {};
			var of = (e = cf, t) => {
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
			const df = {};
			var uf = (e = df, t) => {
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
				lf = Object(j.c)({
					error: of ,
					pending: uf
				});
			const pf = {};
			var bf = (e = pf, t) => {
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
			const ff = {};
			var mf = (e = ff, t) => {
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
				yf = Object(j.c)({
					error: bf,
					pending: mf
				}),
				Of = Object(j.c)({
					fetch: lf,
					purchase: yf
				});
			var _f = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Ef = {};
			var hf = (e = Ef, t) => {
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
				If = Object(j.c)({
					api: Of,
					currentlyPurchasing: _f,
					models: hf
				});
			const gf = {};
			var Sf = (e = gf, t) => {
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
			const jf = {};
			var vf = (e = jf, t) => {
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
				Tf = Object(j.c)({
					error: Sf,
					pending: vf
				});
			const Df = {};
			var wf = (e = Df, t) => {
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
				Pf = r("./src/reddit/actions/comment/list.ts");
			const Af = {};
			var Cf = (e = Af, t) => {
				switch (t.type) {
					case Pf.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Pf.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Gs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Rf = {};
			var Nf = (e = Rf, t) => {
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
			const Lf = {};
			var kf = (e = Lf, t) => {
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
							} : Object(Ut.a)(e, r)
						}
						default:
							return e
					}
				},
				xf = Object(j.c)({
					api: Tf,
					endMarkers: Cf,
					fetchedTokens: Nf,
					commentIds: wf,
					loadMore: kf
				}),
				Uf = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Mf = (e = !0, t) => {
					switch (t.type) {
						case Uf.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Ff = Object(j.c)({
					pending: Mf
				}),
				Gf = Object(j.c)({
					api: Ff
				});
			const Bf = {};
			var qf = (e = Bf, t) => (t.type, e);
			const Vf = {};
			var Hf = (e = Vf, t) => {
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
			const Wf = {};
			var Qf = (e = Wf, t) => {
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
				Kf = Object(j.c)({
					error: Hf,
					pending: Qf
				});
			const $f = {};
			var Yf = (e = $f, t) => {
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
			const zf = {};
			var Xf = (e = zf, t) => {
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
							} : zf
						}
						default:
							return e
					}
				},
				Jf = Object(j.c)({
					api: Kf,
					ids: Yf,
					pageInfo: Xf
				}),
				Zf = r("./src/reddit/constants/posts.ts");
			const em = {};
			var tm = (e = em, t) => {
					switch (t.type) {
						case H.c:
						case Ne.g:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Fu.k: {
							const r = t.payload;
							return r.profile ? {
								...e,
								[r.profile.id]: r.about
							} : e
						}
						case qu.h: {
							const {
								identifiers: r,
								userIsSubscriber: s
							} = t.payload, n = r.filter(e => e.type === Zf.a.PROFILE);
							return n.length ? n.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: s
							}, e), {
								...e
							}) : e
						}
						case xr.n: {
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
				rm = r("./src/reddit/models/Subreddit/index.ts");
			const sm = {};
			var nm = (e = sm, t) => {
				switch (t.type) {
					case ve.b:
					case ve.f:
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
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.b:
					case Te.e:
					case Te.h:
					case je.u:
					case Fu.h:
					case Gd.b:
					case Ne.g:
					case K.i:
					case Fu.m:
					case Q.b:
					case Q.e:
					case H.c:
					case we.PAGE_LOADED:
					case zr.e:
					case Bs.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case De.b:
					case "RECOMMENDED_POSTS_LOADED":
					case qu.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload, s = Object.values(r).reduce((e, t) => Object(rm.h)(t) ? {
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
					case Fu.l:
					case Fu.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(N.merge)(e, {
							[r.id]: r
						}) : e
					}
					case xr.n: {
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
					case xr.l:
					case xr.k: {
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
			const am = {};
			var cm = (e = am, t) => {
					switch (t.type) {
						case Fu.c:
						case Fu.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Fu.a:
						case Fu.b:
						case Fu.d:
						case Fu.e: {
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
				om = Object(j.c)({
					pending: cm
				});
			const dm = {};
			var im = (e = dm, t) => {
				switch (t.type) {
					case Fu.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case Fu.e:
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
			const um = {};
			var lm = (e = um, t) => {
					switch (t.type) {
						case Fu.e: {
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
				pm = Object(j.c)({
					api: om,
					models: im,
					pageInfo: lm
				});
			const bm = {};
			var fm = (e = bm, t) => {
					switch (t.type) {
						case Fu.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Fu.g:
						case Fu.h: {
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
				mm = Object(j.c)({
					pending: fm
				});
			const ym = {};
			var Om = (e = ym, t) => {
					switch (t.type) {
						case Fu.h: {
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
				_m = Object(j.c)({
					api: mm,
					pageInfo: Om
				}),
				Em = r("./src/reddit/actions/pinnedPost.ts");
			const hm = {};
			var Im = Object(rf.a)((e = hm, t) => {
				switch (t.type) {
					case Em.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Em.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Re.cb)
						}
					}
					case Em.g: {
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
			}, hm);
			const gm = {};
			var Sm = Object(rf.a)((e = gm, t) => {
				switch (t.type) {
					case Em.a: {
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
			}, gm);
			const jm = {};
			var vm = Object(rf.a)((e = jm, t) => {
					switch (t.type) {
						case Em.c:
						case Em.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case Em.b:
						case Em.e:
						case Em.d:
						case Em.g: {
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
				}, jm),
				Tm = Object(j.c)({
					data: Im,
					initialData: Sm,
					pending: vm
				}),
				Dm = r("./src/reddit/actions/trophyCase.ts");
			const wm = {};
			var Pm, Am, Cm = (e = wm, t) => {
					switch (t.type) {
						case Dm.a: {
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
				Rm = Object(j.c)({
					about: tm,
					models: nm,
					moderated: pm,
					multireddits: _m,
					pinnedPosts: Tm,
					trophyCases: Cm
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Pm || (Pm = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Am || (Am = {}));
			var Nm, Lm, km;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Nm || (Nm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Lm || (Lm = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(km || (km = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Nm || (Nm = {}));
			Object(Ce.a)("PROMO__SHOW_PROMO"), Object(Ce.a)("PROMO__HIDE_PROMO");
			const xm = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Um = (e = xm, t) => {
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
				Mm = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Fm = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Mm.d,
					viewer_streams_refresh: Mm.c,
					viewer_streams_refresh_slop: Mm.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Gm = (e = Fm, t) => {
				switch (t.type) {
					case Mm.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Mm.x: {
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
					case Mm.G:
						return {
							...e, isPending: !0
						};
					case Mm.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Mm.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Bm = (e = {}, t) => {
				switch (t.type) {
					case Mm.L:
						return {
							...e, [Mm.b]: t.payload.error
						};
					case Mm.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Mm.z: {
						const {
							[Mm.b]: t, ...r
						} = e;
						return r
					}
					case Mm.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const qm = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var Vm = (e = {}, t) => {
				switch (t.type) {
					case Mm.N:
						return qm(e, t.payload, !0);
					case Mm.O:
						return qm(e, Mm.b, !0);
					case Mm.y:
						return qm(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Mm.z:
						return qm(e, Mm.b, !1, t.payload.utcTimeStamp);
					case Mm.M:
						return qm(e, t.payload.streamId, !1);
					case Mm.L:
						return qm(e, Mm.b, !1);
					default:
						return e
				}
			};
			const Hm = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Wm = (e = Hm, t) => {
					switch (t.type) {
						case Mm.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Mm.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Mm.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				Qm = Object(j.c)({
					config: Gm,
					error: Bm,
					pending: Vm,
					recommendedViewerSubreddits: Wm
				});
			const Km = {};
			var $m = (e = Km, t) => {
				switch (t.type) {
					case Mm.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Mm.F:
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
			const Ym = {
				cursor: Mm.W,
				timestamps: {},
				visitOrder: []
			};
			var zm = (e = Ym, t) => {
				switch (t.type) {
					case Mm.P:
						return Ym;
					case Mm.X: {
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
						return Xm(e, t.payload.id);
					case Mm.E:
						return Xm(e, t.payload);
					case ci.k: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Jm(e, r)
					}
					case Mm.V: {
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
			const Xm = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				Jm = (e, t) => {
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
				Zm = {
					ended: [],
					removed: []
				};

			function ey(e) {
				return [...new Set(e)]
			}
			var ty = (e = Zm, t) => {
				switch (t.type) {
					case Mm.t:
						return {
							...e, ended: ey(e.ended.concat(t.payload))
						};
					case Mm.u:
						return {
							...e, removed: ey(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const ry = {};
			var sy = (e = ry, t) => {
				switch (t.type) {
					case Mm.z:
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
			const ny = {},
				ay = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Mm.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Mm.l - r
						}
					}), r)
				},
				cy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Mm.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var oy = (e = ny, t) => {
				switch (t.type) {
					case Mm.y:
						return cy(e, t.payload.model);
					case Mm.z:
						return ay(e, t.payload.models);
					case Mm.D: {
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
			const dy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var iy = (e = dy, t) => {
				switch (t.type) {
					case Mm.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Mm.A:
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
			const uy = {
				reported: []
			};
			var ly = (e = uy, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const py = {
				isIntroFinished: !1
			};
			var by = (e = py, t) => {
				switch (t.type) {
					case Mm.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const fy = {
				reportedStreams: []
			};
			var my = (e = fy, t) => {
					switch (t.type) {
						case Mm.C:
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
				yy = Object(j.c)({
					api: Qm,
					history: zm,
					hlsStreams: ty,
					listings: sy,
					models: oy,
					preloads: iy,
					reports: ly,
					theaterSettings: by,
					userSettings: my,
					automuteLevels: $m
				}),
				Oy = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				_y = r("./src/reddit/actions/session.ts");
			const Ey = [];
			var hy = (e = Ey, t) => {
				switch (t.type) {
					case _y.c:
					case _y.d:
						return Ey;
					case Oy.d:
						return ((e, t) => ku()(e, t) ? e : t)(e, t.subreddits);
					case Oy.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Oy.c)
					}
					case Oy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Oy.c)
					}
					default:
						return e
				}
			};
			const Iy = {};
			var gy = (e = Iy, t) => {
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
				Sy = r("./src/reddit/actions/pages/report/constants.ts");
			var jy = (e = null, t) => {
				switch (t.type) {
					case Sy.a:
						return t.payload;
					default:
						return e
				}
			};
			var vy = (e = null, t) => {
				switch (t.type) {
					case Sy.b:
						return t.payload;
					case Sy.c:
					case Sy.d:
						return !1;
					default:
						return e
				}
			};
			var Ty = (e = !1, t) => {
				switch (t.type) {
					case Sy.d:
						return !0;
					case Sy.c:
					case Sy.b:
						return !1;
					default:
						return e
				}
			};
			var Dy = (e = !1, t) => {
					switch (t.type) {
						case Sy.c:
							return !0;
						case Sy.b:
						case Sy.d:
							return !1;
						default:
							return e
					}
				},
				wy = Object(j.c)({
					error: vy,
					pending: Ty,
					success: Dy
				}),
				Py = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Ay = [];
			var Cy = (e = Ay, t) => {
					switch (t.type) {
						case Py.a:
							return t.payload;
						default:
							return e
					}
				},
				Ry = Object(j.c)({
					reportPageApi: wy,
					reportPageRules: Cy,
					initialReason: jy
				}),
				Ny = r("./src/reddit/actions/reportRules.ts");
			const Ly = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var ky = (e = Ly, t) => {
				switch (t.type) {
					case Ny.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Ny.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ce.a)("REQUEST_HOST_SET");
			var xy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ce.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Uy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var My = (e = Uy, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				Fy = r("./src/reddit/components/SearchDropdown/index.tsx");
			var Gy = (e = !1, t) => {
				switch (t.type) {
					case Ne.c:
						return !e;
					case Po.b: {
						const {
							event: r
						} = t.payload, s = r.target, n = document.getElementById(Fy.b), a = document.getElementById(Fy.a);
						return !(!s || !((null == n ? void 0 : n.contains(s)) || (null == a ? void 0 : a.contains(s)))) && e
					}
					case Ne.b:
					case Po.a:
					case Po.c:
						return !1;
					default:
						return e
				}
			};
			var By = (e = "", t) => {
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
			const qy = Object.create(null);
			var Vy = (e = qy, t) => {
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
				Hy = r("./src/reddit/models/Search/index.ts");
			const Wy = {};
			var Qy = (e = Wy, t) => {
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Hy.e)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Ky = Object(j.c)({
					idsByQuery: Vy,
					models: Qy
				});
			const $y = {};
			var Yy = (e = $y, t) => {
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
				zy = Object(j.c)({
					isDropdownOpen: Gy,
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
					searchQuery: By,
					typeahead: Ky,
					viewTreatment: Yy
				}),
				Xy = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Jy = {};
			var Zy = (e = Jy, t) => {
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
						if (i === Xy.c.Trending || r) {
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
			const eO = {};
			var tO = (e = eO, t) => {
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
			const rO = {};
			var sO = (e = rO, t) => {
					switch (t.type) {
						case H.c: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : rO
						}
						default:
							return e
					}
				},
				nO = Object(j.c)({
					headerContent: Zy,
					models: tO,
					order: sO
				});
			Object(Ce.a)("SEO__CRAWLER_RECEIVED");
			var aO = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				cO = r("./src/reddit/actions/seo/linksModule.ts");
			const oO = {};
			var dO = (e = oO, t) => {
					switch (t.type) {
						case cO.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case cO.c:
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
				iO = r("./src/reddit/actions/seo/topicLinks.ts");
			const uO = {};
			var lO = (e = uO, t) => {
					switch (t.type) {
						case iO.a:
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
				pO = Object(j.c)({
					crawler: aO,
					linksModule: dO,
					topicLinks: lO
				}),
				bO = r("./src/reddit/actions/shortcuts/constants.ts");
			var fO = (e = null, t) => {
				switch (t.type) {
					case bO.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var mO = (e = null, t) => {
					switch (t.type) {
						case bO.b:
							return t.payload || null;
						default:
							return e
					}
				},
				yO = r("./src/reddit/constants/shortcuts.ts"),
				OO = r("./src/reddit/helpers/history/index.ts");
			const _O = yO.d.Global,
				EO = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(OO.b)(gl.b.IsOverlay) ? yO.d.Lightbox : yO.d.CommentPage;
						case "rpan":
							return Object(OO.b)(gl.b.IsOverlay) ? yO.d.Lightbox : _O;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return yO.d.Listing;
						case "modQueuePages":
							return yO.d.Modqueue;
						default:
							return _O
					}
				};
			var hO = (e = _O, t) => {
					switch (t.type) {
						case u.b:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return EO(e)
							}
							return _O;
						default:
							return e
					}
				},
				IO = Object(j.c)({
					activeCommentId: fO,
					activePostId: mO,
					namespace: hO
				});
			var gO = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				SO = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				jO = Object(j.c)({
					firstFetch: gO,
					models: SO.b
				}),
				vO = r("./src/reddit/actions/streaming/modSettings.ts");
			var TO = (e = null, t) => {
				switch (t.type) {
					case vO.b:
					case vO.c:
						return null;
					case vO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var DO = (e = !1, t) => {
					switch (t.type) {
						case vO.b:
							return !0;
						case vO.c:
						case vO.a:
							return !1;
						default:
							return e
					}
				},
				wO = Object(j.c)({
					error: TO,
					pending: DO
				}),
				PO = r("./src/reddit/actions/streaming/constants.ts");
			const AO = {};
			var CO = (e = AO, t) => {
					switch (t.type) {
						case PO.a: {
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
				RO = Object(j.c)({
					api: wO,
					modSettings: CO
				}),
				NO = r("./src/reddit/models/StructuredStyles/index.ts");
			const LO = {};
			var kO = (e = LO, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return LO;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(NO.h)(e.styles)
						}
						default:
							return e
					}
				},
				xO = r("./src/reddit/actions/exportImportStyles.ts");
			var UO = (e = null, t) => {
				switch (t.type) {
					case xO.c:
					case xO.b:
						return null;
					case xO.a:
						return t.payload;
					default:
						return e
				}
			};
			var MO = (e = !1, t) => {
					switch (t.type) {
						case xO.c:
							return !0;
						case xO.b:
						case xO.a:
							return !1;
						default:
							return e
					}
				},
				FO = Object(j.c)({
					error: UO,
					pending: MO
				}),
				GO = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				BO = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const qO = {};
			var VO = (e = qO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case H.c:
						case Ne.g:
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED: {
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
						case GO.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case GO.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Ut.a)(e, r)
						}
						case sp.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Ut.a)(e, r)
						}
						case b.k:
							return qO;
						case BO.b: {
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
				HO = Object(j.c)({
					models: VO
				});
			const WO = {};
			var QO = (e = WO, t) => {
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
						return WO;
					default:
						return e
				}
			};
			var KO = (e = !1, t) => {
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
			var $O = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case xr.g:
						return null;
					default:
						return e
				}
			};
			const YO = {};
			var zO = (e = YO, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case G.b:
						case G.f:
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED: {
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
							if (Sa()(r.subreddits, (e, t) => {
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
								s = Object(NO.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Fu.k: {
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
						case xr.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Fp(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case xr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Fp(e, {
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
				XO = Object(j.c)({
					draft: kO,
					exportStyles: FO,
					flairTemplate: HO,
					imagePreviews: QO,
					isBladeEditorDirty: KO,
					isEditing: $O,
					models: zO
				});
			Object(Ce.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var JO = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				ZO = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const e_ = {};
			var t_ = (e = e_, t) => {
				switch (t.type) {
					case ZO.c:
					case ZO.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case ZO.a: {
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
			const r_ = {};
			var s_ = (e = r_, t) => {
					switch (t.type) {
						case ZO.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ZO.b:
						case ZO.a: {
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
				n_ = Object(j.c)({
					error: t_,
					pending: s_
				});
			const a_ = {};
			var c_ = (e = a_, t) => {
					switch (t.type) {
						case ZO.b: {
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
				o_ = Object(j.c)({
					api: n_,
					models: c_
				}),
				d_ = r("./src/reddit/actions/category/constants.ts"),
				i_ = r("./src/reddit/actions/subredditMention/constants.ts");
			const u_ = {};
			var l_ = (e = u_, t) => {
				switch (t.type) {
					case i_.d:
					case G.b:
					case G.f:
					case H.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Bs.PAGE_LOADED:
					case B.b:
					case B.e:
					case Pe.b:
					case Pe.a:
					case Pe.e:
					case Pe.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ne.g:
					case Bd.TOPIC_DATA_LOADED:
					case Qd.u: {
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
					case Za.a: {
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
					case qu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(e => e.type === Zf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case $c.g:
					case d_.f:
					case Qd.g:
					case Qd.o:
					case us.B: {
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
					case Za.b: {
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
			const p_ = {};
			var b_ = (e = p_, t) => {
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
			var f_ = (e = !1, t) => {
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
				m_ = Object(j.c)({
					error: b_,
					pending: f_
				}),
				y_ = r("./src/reddit/actions/subredditCreation.ts");
			const O_ = {
				apiError: null
			};
			var __ = (e = O_, t) => {
				switch (t.type) {
					case y_.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case y_.a:
					case y_.c:
					case y_.e:
						return O_;
					default:
						return e
				}
			};
			var E_ = (e = null, t) => {
				switch (t.type) {
					case y_.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case y_.a:
					case y_.c:
					case y_.e:
						return null;
					default:
						return e
				}
			};
			var h_ = (e = null, t) => {
				switch (t.type) {
					case y_.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case y_.c:
					case y_.b:
						return null;
					default:
						return e
				}
			};
			var I_ = (e = !1, t) => {
					switch (t.type) {
						case y_.c:
							return !0;
						case y_.e:
						case y_.b:
							return !1;
						default:
							return e
					}
				},
				g_ = Object(j.c)({
					error: __,
					lastCreatedSubredditId: h_,
					initialCrosspost: E_,
					pending: I_
				});
			var S_ = (e = !1, t) => {
					switch (t.type) {
						case Qd.w:
							return !0;
						case Qd.x:
						case Qd.v:
							return !1;
						default:
							return e
					}
				},
				j_ = Object(j.c)({
					pending: S_
				});
			const v_ = {};
			var T_ = (e = v_, t) => {
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
			const D_ = {};
			var w_ = (e = D_, t) => {
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
				P_ = Object(j.c)({
					error: T_,
					pending: w_
				});
			const A_ = {};
			var C_ = (e = A_, t) => {
					switch (t.type) {
						case Qd.f:
						case Qd.g:
							return {
								...e, [t.payload.key]: !1
							};
						case Qd.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				R_ = Object(j.c)({
					pending: C_
				});
			var N_ = (e = null, t) => {
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
			var L_ = (e = !1, t) => {
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
				k_ = Object(j.c)({
					error: N_,
					pending: L_
				});
			var x_ = (e = null, t) => {
				switch (t.type) {
					case Qd.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Qd.m:
					case Qd.l:
						return null;
					default:
						return e
				}
			};
			var U_ = (e = !1, t) => {
					switch (t.type) {
						case Qd.m:
							return !0;
						case Qd.l:
						case Qd.k:
							return !1;
						default:
							return e
					}
				},
				M_ = Object(j.c)({
					error: x_,
					pending: U_
				}),
				F_ = r("./src/reddit/actions/subredditRules/constants.ts");
			var G_ = (e = !1, t) => {
					switch (t.type) {
						case F_.c:
							return !0;
						case F_.a:
						case F_.b:
							return !1;
						default:
							return e
					}
				},
				B_ = r("./src/reddit/actions/subredditSettings.ts");
			var q_ = (e = !1, t) => {
					switch (t.type) {
						case B_.e:
							return !0;
						case B_.f:
						case B_.d:
							return !1;
						default:
							return e
					}
				},
				V_ = Object(j.c)({
					pending: q_
				});
			const H_ = {};
			var W_ = (e = H_, t) => {
					switch (t.type) {
						case Qd.n:
						case Qd.o:
							return {
								...e, [t.payload.key]: !1
							};
						case Qd.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Q_ = Object(j.c)({
					pending: W_
				}),
				K_ = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const $_ = {};
			var Y_ = (e = $_, t) => {
				switch (t.type) {
					case K_.c:
					case K_.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case K_.a: {
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
			const z_ = {};
			var X_ = (e = z_, t) => {
					switch (t.type) {
						case K_.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case K_.b:
						case K_.a: {
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
				J_ = Object(j.c)({
					error: Y_,
					pending: X_
				});
			const Z_ = {};
			var eE = (e = Z_, t) => {
				switch (t.type) {
					case kp.c:
					case kp.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case kp.a: {
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
						case kp.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case kp.b:
						case kp.a: {
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
				sE = Object(j.c)({
					error: eE,
					pending: rE
				}),
				nE = Object(j.c)({
					about: m_,
					create: g_,
					inlineEditing: j_,
					models: P_,
					onboarding: R_,
					productOffers: k_,
					rankings: M_,
					rules: G_,
					settings: V_,
					similar: Q_,
					topContent: sE,
					wiki: J_
				}),
				aE = r("./node_modules/lodash/isNil.js"),
				cE = r.n(aE);
			const oE = {};
			var dE = (e = oE, t) => {
					switch (t.type) {
						case K.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: cE()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				iE = Object(j.c)({
					meta: dE
				});
			const uE = {};
			var lE = (e = uE, t) => {
				switch (t.type) {
					case d_.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return Ea()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const pE = {
				pending: !1,
				items: {}
			};
			var bE = (e = pE, t) => {
				switch (t.type) {
					case ip.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case ip.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const fE = {};
			var mE = (e = fE, t) => {
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
				yE = r("./src/reddit/actions/subredditCrosspostable.ts");
			var OE = (e = null, t) => {
				switch (t.type) {
					case yE.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case yE.c:
					case yE.b:
						return null;
					default:
						return e
				}
			};
			var _E = (e = !1, t) => {
					switch (t.type) {
						case yE.c:
							return !0;
						case yE.b:
						case yE.a:
							return !1;
						default:
							return e
					}
				},
				EE = Object(j.c)({
					errors: OE,
					pending: _E
				});
			const hE = {};
			var IE = (e = hE, t) => {
					switch (t.type) {
						case yE.b: {
							const {
								subredditIds: r
							} = t.payload;
							return ku()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				gE = Object(j.c)({
					api: EE,
					ids: IE
				});
			const SE = {};
			var jE = (e = SE, t) => {
					switch (t.type) {
						case Wp.a: {
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
							return Fp(c, {
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
				vE = Object(j.c)({
					models: jE
				});
			const TE = {};
			var DE = (e = TE, t) => {
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
			const wE = {};
			var PE = (e = wE, t) => {
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
			const AE = {};
			var CE = (e = AE, t) => {
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
			const RE = {};
			var NE = (e = RE, t) => {
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
				LE = Object(j.c)({
					assets: DE,
					communityRaw: PE,
					distributions: CE,
					releaseNotes: NE
				}),
				kE = r("./node_modules/lodash/isEqualWith.js"),
				xE = r.n(kE),
				UE = r("./src/lib/forceHttps/index.ts");
			const ME = {},
				FE = (e, t) => {
					return !xE()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				GE = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !FE(c, o) || (s[a] = {
							...c,
							...o
						})
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var BE = (e = ME, t) => {
				switch (t.type) {
					case qu.c:
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
								return a.icon.url ? c.icon.url = Object(UE.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(N.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case ve.b:
					case ve.f:
					case Oy.b:
					case i_.d:
					case d_.f:
					case ge.f:
					case $c.g:
					case Hd.c:
					case Wd.b:
					case Te.e:
					case Te.h:
					case F.k:
					case je.r:
					case je.u:
					case Fu.h:
					case Gd.b:
					case G.b:
					case G.f:
					case ge.b:
					case De.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case Fu.e:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case zr.e:
					case Bs.PAGE_LOADED:
					case Fu.m:
					case Q.b:
					case Q.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.g:
					case K.c:
					case K.f:
					case K.i:
					case Qd.a:
					case Qd.g:
					case Qd.o:
					case Bd.TOPIC_DATA_LOADED:
					case Bd.MORE_POSTS_LOADED:
					case us.B:
						return GE(e, t.payload.subreddits || {});
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
						return GE(e, s)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return GE(e, r.subreddits || {})
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
						return GE(e, r)
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
					case B_.f: {
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
					case ZO.b: {
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
			var qE = (e = null, t) => {
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
			var VE = (e = !1, t) => {
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
			var HE = (e = !1, t) => {
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
				WE = Object(j.c)({
					errors: qE,
					fetched: VE,
					pending: HE
				});
			var QE = (e = null, t) => {
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
				KE = Object(j.c)({
					api: WE,
					order: QE
				});
			const $E = {};
			var YE = (e = $E, t) => {
				switch (t.type) {
					case B_.a: {
						const r = t.payload;
						return Object(N.merge)(e, r)
					}
					case B_.b: {
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
			const zE = {};
			var XE = (e = zE, t) => {
				switch (t.type) {
					case Qd.g: {
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
			const JE = {};
			var ZE = (e = JE, t) => {
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
			const eh = {};
			var th = (e = eh, t) => {
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
			const rh = {},
				sh = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						n = null == s ? void 0 : s.emotes;
					if (!n) return e;
					const a = Fa(r, t),
						c = [...n, a];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				nh = (e, t, r) => {
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
			var ah = (e = rh, t) => {
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Ga(r)
						}
					}
					case Ma.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: sh(n, r, s)
						}
					}
					case Ma.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: nh(n, r, s)
						}
					}
					default:
						return e
				}
			};
			const ch = {},
				oh = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var dh = (e = ch, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(oh)
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
								[r]: o.sort(oh)
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
									[r]: [t, ...e[r]].sort(oh)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				ih = r("./src/lib/makeProductOfferKey/index.ts");
			const uh = {};
			var lh = (e = uh, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const n = s.reduce((e, t) => {
							const s = Object(ih.a)(t.type, r);
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
			const ph = {};
			var bh = (e = ph, t) => {
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
				fh = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const mh = {};
			var yh = (e = mh, t) => {
				switch (t.type) {
					case Qd.y: {
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
						}) => fh.e.includes(e))))(s.cards);
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
			const Oh = {};
			var _h = (e = Oh, t) => {
				var r, s;
				switch (t.type) {
					case Qd.y: {
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
					case Qd.d: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(N.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case Qd.e:
						return Oh;
					default:
						return e
				}
			};
			const Eh = {};
			var hh = (e = Eh, t) => {
				switch (t.type) {
					case Qd.b: {
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
			const Ih = {};
			var gh = (e = Ih, t) => {
					switch (t.type) {
						case Qd.c: {
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
				Sh = r("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const jh = {};
			var vh = (e = jh, t) => {
				switch (t.type) {
					case Sh.a: {
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
			const Th = {};
			var Dh = (e = Th, t) => {
				switch (t.type) {
					case F_.b: {
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
					case F_.e: {
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
					case F_.f: {
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
					case F_.g:
					case F_.d: {
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
			const wh = {};
			var Ph = (e = wh, t) => {
				switch (t.type) {
					case B_.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case B_.f: {
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
					case xr.n: {
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
			const Ah = {};
			var Ch = (e = Ah, t) => {
				switch (t.type) {
					case Qd.o: {
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
			const Rh = {};
			var Nh = (e = Rh, t) => {
				switch (t.type) {
					case Qd.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Qd.z: {
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
			const Lh = {};
			var kh = (e = Lh, t) => {
				switch (t.type) {
					case $c.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case kp.b: {
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
			const xh = [];
			var Uh = (e = xh, t) => {
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
			const Mh = {};
			var Fh = (e = Mh, t) => {
					switch (t.type) {
						case i_.d:
						case us.B:
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
				Gh = Object(j.c)({
					about: l_,
					api: nE,
					appliedFilters: iE,
					byCategory: lE,
					carousel: bE,
					communityInfo: mE,
					crosspostable: gE,
					duplicates: vE,
					gov: LE,
					models: BE,
					moderated: KE,
					notificationSettings: YE,
					onboarding: XE,
					powerupRecentSupporters: ZE,
					powerups: th,
					powerupsEmojis: ah,
					powerupTopSupporters: dh,
					productOffers: lh,
					products: bh,
					progressModule: yh,
					questions: _h,
					rankings: hh,
					rankingsPageInfo: gh,
					related: vh,
					rules: Dh,
					settings: Ph,
					similar: Ch,
					survey: Nh,
					topContent: kh,
					trending: Uh,
					unavailableModels: Fh
				});
			const Bh = {};
			var qh = Object(rf.a)((e = Bh, t) => {
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
						case ci.o: {
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
				}, Bh),
				Vh = Object(j.c)({
					data: qh
				}),
				Hh = r("./node_modules/lodash/values.js"),
				Wh = r.n(Hh);
			const Qh = [];
			var Kh = (e = Qh, t) => {
				switch (t.type) {
					case qu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: n
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Mu(t, n, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, n), t
						}
						return e.filter(e => e !== n)
					}
					case je.u: {
						const {
							multireddits: e
						} = t.payload;
						return Wh()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case qu.e: {
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
			var $h = (e = null, t) => {
				switch (t.type) {
					case qu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case qu.b:
					case qu.c:
						return null;
					default:
						return e
				}
			};
			var Yh = (e = !1, t) => {
				switch (t.type) {
					case qu.b:
					case qu.c:
						return !0;
					case qu.a:
						return !1;
					default:
						return e
				}
			};
			var zh = (e = !1, t) => {
					switch (t.type) {
						case qu.b:
							return !0;
						case qu.c:
						case qu.a:
							return !1;
						default:
							return e
					}
				},
				Xh = Object(j.c)({
					errors: $h,
					fetched: Yh,
					pending: zh
				});
			const Jh = [];
			var Zh = (e = Jh, t) => {
				switch (t.type) {
					case qu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let n;
						return (n = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), n
					}
					case qu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Zf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Mu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case qu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Zf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const eI = [];
			var tI = (e = eI, t) => {
				switch (t.type) {
					case qu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case qu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: n
						} = t.payload, {
							id: a,
							type: c
						} = s;
						if (c !== Zf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Mu(o, a, (e, t) => n[e].displayText.toLowerCase() > n[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, a)
						} else {
							const e = o.indexOf(a);
							o.splice(e, 1)
						}
						return o
					}
					case qu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, n = r.filter(t => t.type === Zf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const rI = [],
				sI = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var nI = (e = rI, t) => {
					switch (t.type) {
						case je.u: {
							const {
								multireddits: r
							} = t.payload, s = Wh()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(sI(r));
							return ku()(e, s) ? e : s
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
								d = Uu()(e, c).sort(sI(o));
							return ku()(e, d) ? e : d
						}
						case qu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(sI(n)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(sI(n))
						}
						default:
							return e
					}
				},
				aI = r("./node_modules/lodash/difference.js"),
				cI = r.n(aI);
			const oI = [];
			var dI = (e = oI, t) => {
				switch (t.type) {
					case Fu.n: {
						const {
							profileOrder: r
						} = t.payload;
						return mb()([...e, ...r])
					}
					case qu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case qu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: n
						} = t.payload, a = r.filter(e => e.type === Zf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? mb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : cI()(e, c)
					}
					default:
						return e
				}
			};
			const iI = [];
			var uI = (e = iI, t) => {
					switch (t.type) {
						case Fu.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return mb()([...e, ...r])
						}
						case qu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case qu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: n
							} = t.payload, a = r.filter(e => e.type === Zf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? mb()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : cI()(e, c)
						}
						default:
							return e
					}
				},
				lI = Object(j.c)({
					api: Xh,
					favoriteMultiOrder: Kh,
					favoriteProfileOrder: Zh,
					favoriteSubredditOrder: tI,
					multiredditOrder: nI,
					profileOrder: dI,
					subredditOrder: uI
				}),
				pI = r("./src/reddit/actions/survey/constants.ts");
			var bI = (e = null, t) => {
				switch (t.type) {
					case pI.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var fI = (e = 1, t) => {
				switch (t.type) {
					case pI.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var mI = (e = !1, t) => {
				switch (t.type) {
					case pI.b:
						return !e;
					default:
						return e
				}
			};
			var yI = (e = !0, t) => {
					switch (t.type) {
						case pI.i:
							return !e;
						default:
							return e
					}
				},
				OI = Object(j.c)({
					activeDemoTrigger: bI,
					demoTriggerThreshold: fI,
					isDemoEnabled: mI,
					isSampleFactorEnabled: yI
				});
			var _I = (e = !1, t) => {
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
				EI = r("./src/reddit/actions/tags/constants.ts");
			const hI = {
				pending: !1,
				error: !1
			};
			var II = (e = hI, t) => {
				switch (t.type) {
					case EI.l:
						return {
							...e, pending: !0
						};
					case EI.m:
						return {
							error: !1, pending: !1
						};
					case EI.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const gI = {
				pending: !1,
				error: !1
			};
			var SI = (e = gI, t) => {
				switch (t.type) {
					case EI.o:
						return {
							...e, pending: !0
						};
					case EI.p:
						return {
							error: !1, pending: !1
						};
					case EI.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const jI = {
				pending: !1,
				error: !1
			};
			var vI = (e = jI, t) => {
				switch (t.type) {
					case EI.t:
						return {
							...e, pending: !0
						};
					case EI.s:
					case EI.r:
					case EI.e:
					case EI.j:
						return {
							error: !1, pending: !1
						};
					case EI.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const TI = {
				pending: !1,
				error: !1
			};
			var DI = (e = TI, t) => {
				switch (t.type) {
					case EI.v:
						return {
							...e, pending: !0
						};
					case EI.w:
						return {
							error: !1, pending: !1
						};
					case EI.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const wI = {
				pending: !1,
				error: !1
			};
			var PI = (e = wI, t) => {
					switch (t.type) {
						case EI.g:
							return {
								...e, pending: !0
							};
						case EI.h:
							return {
								error: !1, pending: !1
							};
						case EI.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				AI = Object(j.c)({
					create: II,
					deleteTag: SI,
					fetch: vI,
					update: DI,
					updatePrimaryTag: PI
				});
			const CI = {
				global: [],
				recommendedGlobal: []
			};
			var RI = (e = CI, t) => {
					switch (t.type) {
						case EI.w:
						case EI.r:
						case EI.e:
						case EI.j: {
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
				NI = r("./node_modules/lodash/uniqWith.js"),
				LI = r.n(NI),
				kI = r("./src/reddit/models/Option/index.ts");
			const xI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var UI = (e = xI, t) => {
					switch (t.type) {
						case EI.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: LI()([...e.selectedOptions || [], {
									...r
								}], kI.a)
							}
						}
						case EI.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(kI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case EI.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case EI.a: {
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
				MI = r("./src/reddit/helpers/tags/index.ts");
			const FI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var GI = (e = FI, t) => {
					switch (t.type) {
						case EI.j: {
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
						case EI.w:
						case EI.s:
						case EI.r: {
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
									[o]: Object(MI.a)(a[o] || {})
								}
							}
						}
						case EI.p: {
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
						case EI.e: {
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
						case EI.h: {
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
				BI = r("./src/reddit/reducers/tags/selected/index.ts"),
				qI = Object(j.c)({
					api: AI,
					availableGlobalTagOrder: RI,
					models: GI,
					selected: BI.b,
					creation: UI
				}),
				VI = r("./src/reddit/actions/redditEmbed.ts"),
				HI = r("./src/reddit/actions/theme.ts"),
				WI = r("./src/reddit/actions/users.ts"),
				QI = r("./src/reddit/models/Theme/index.ts");
			const KI = {
				current: QI.c,
				cached: {}
			};
			var $I = (e = KI, t) => {
					switch (t.type) {
						case HI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? QI.b : QI.c,
								cached: {}
							}
						}
						case kr.a:
						case kr.b:
						case kr.h:
						case kr.i:
						case kr.f:
						case kr.j:
						case ve.b:
						case ve.f:
						case Te.e:
						case Te.h:
						case G.a:
						case G.e:
						case G.b:
						case G.f:
						case G.d:
						case G.h:
						case ge.b:
						case W.SUBREDDIT_LOADED:
						case De.b:
						case De.a:
						case ge.f:
						case VI.b:
						case K.i:
						case Ne.g:
						case H.c:
						case xr.j:
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED:
						case WI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: QI.b,
									cached: {}
								} : {
									current: QI.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
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
								current: QI.b,
								cached: {}
							} : {
								current: QI.c,
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
									current: QI.b,
									cached: {}
								} : {
									current: QI.c,
									cached: {}
								}
							}
							return e;
						case xr.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: QI.b,
								cached: {}
							} : {
								current: QI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: QI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: QI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				YI = r("./src/reddit/actions/toaster.ts");
			const zI = [];
			var XI = (e = zI, t) => {
					switch (t.type) {
						case YI.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case YI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				JI = r("./src/reddit/actions/tooltip.ts"),
				ZI = r("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var eg = (e = null, t) => {
					switch (t.type) {
						case JI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case JI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case JI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case JI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case JI.d:
						case u.b:
						case Po.b:
						case Po.c:
						case Po.a:
							return t.type === u.b && e === ZI.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				tg = r("./src/reddit/actions/tracing.ts");
			const rg = {
				traceId: void 0
			};
			var sg = (e = rg, t) => {
					switch (t.type) {
						case tg.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				ng = r("./src/lib/asyncActions/index.ts"),
				ag = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const cg = Object(ng.c)(ag.c.requestedActionType, ag.c.succeededActionType, ag.c.failedActionType),
				og = Object(ng.c)(ag.a.requestedActionType, ag.a.succeededActionType, ag.a.failedActionType),
				dg = Object(ng.c)(ag.d.requestedActionType, ag.d.succeededActionType, ag.d.failedActionType);
			var ig = Object(j.c)({
					load: cg,
					execute: og,
					send: dg
				}),
				ug = r("./src/reddit/actions/tracking.ts");
			const lg = {};
			var pg = (e = lg, t) => {
					switch (t.type) {
						case ug.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ug.b: {
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
				bg = Object(j.c)({
					reCaptchaEnterprise: ig,
					viewportDataLoaded: pg
				}),
				fg = r("./src/reddit/actions/trafficStats/constants.ts");
			var mg = (e = !1, t) => {
				switch (t.type) {
					case fg.c:
						return !0;
					case fg.b:
					case fg.a:
						return !1;
					default:
						return e
				}
			};
			var yg = (e = null, t) => {
					switch (t.type) {
						case fg.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case fg.c:
							return null;
						default:
							return e
					}
				},
				Og = Object(j.c)({
					pending: mg,
					trafficStats: yg
				});
			var _g = (e = null, t) => {
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
			var Eg = (e = !1, t) => {
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
				hg = Object(j.c)({
					error: _g,
					pending: Eg
				});
			var Ig = (e = null, t) => {
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
			var gg = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var Sg = (e = null, t) => {
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
				jg = Object(j.c)({
					api: hg,
					contentId: Ig,
					initialRecipient: gg,
					publicAddress: Sg
				}),
				vg = Object(j.c)({
					communityPoints: jg
				}),
				Tg = r("./src/reddit/actions/search/trending.ts");
			const Dg = {};
			var wg = (e = Dg, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case Tg.a: {
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
				Pg = Object(j.c)({
					models: wg
				});
			var Ag = r("./src/reddit/routes/premium/index.ts");
			const Cg = {};
			var Rg = (e = Cg, t) => {
					switch (t.type) {
						case Dm.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = Ag.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Ng = r("./src/reddit/actions/upload.ts"),
				Lg = r("./src/reddit/models/Upload/index.ts");
			const kg = {};
			var xg = (e = kg, t) => {
					switch (t.type) {
						case Ng.d: {
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
									status: Lg.a.PENDING
								}
							}
						}
						case Ng.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Lg.a.UPLOADING
								}
							}
						}
						case Ng.c: {
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
						case Ng.e: {
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
						case Ng.g: {
							const {
								key: r,
								url: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Lg.a.SUCCESS,
									url: s
								}
							}
						}
						case Ng.b: {
							const {
								key: r,
								error: s
							} = t.payload, n = e[r];
							return {
								...e,
								[r]: {
									...n,
									status: Lg.a.FAILED,
									error: s
								}
							}
						}
						case Ng.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: Lg.a.CANCELED
								}
							}
						}
						case Ng.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Gs()(e, r)
						}
						default:
							return e
					}
				},
				Ug = r("./src/reddit/actions/upvotePrompt.ts");
			var Mg = (e = 0, t) => {
				switch (t.type) {
					case Ug.a:
						return ++e;
					default:
						return e
				}
			};
			const Fg = {};
			var Gg = (e = Fg, t) => {
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
			var Bg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				qg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				Vg = r("./src/reddit/actions/sso/constants.ts"),
				Hg = r("./src/reddit/endpoints/profile/info.ts");
			const Wg = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || ku()(s, t)) return e;
				const {
					karma: n
				} = t;
				return {
					...t,
					karma: {
						...Hg.a,
						...null == s ? void 0 : s.karma,
						...n
					},
					gender: r
				}
			};
			var Qg = Object(rf.a)((e = null, t) => {
				var r, n;
				switch (t.type) {
					case Bg.a:
					case Bg.b:
					case Sy.b:
					case Sy.c:
					case kr.a:
					case kr.b:
					case kr.f:
					case kr.h:
					case kr.i:
					case kr.j:
					case Te.e:
					case Te.h:
					case Te.g:
					case je.q:
					case je.r:
					case G.a:
					case G.e:
					case G.b:
					case G.f:
					case ge.a:
					case ge.b:
					case De.a:
					case De.b:
					case W.SUBREDDIT_FAILED:
					case Fu.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
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
					case Bs.PAGE_LOADED:
					case Ne.e:
					case Ne.g:
					case VI.a:
					case VI.b:
					case xr.j:
					case qg.b:
					case WI.c:
					case Bd.TOPIC_DATA_LOADED:
						return Wg(e, t.payload.account);
					case WI.o:
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
						return r ? Wg(e, r.account) : e
					}
					case WI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case xr.l:
					case xr.k: {
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
								...Hg.a,
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
					case Rl.n: {
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
					case Vg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case Vg.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Mo.c: {
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
					case ul.a:
					case ul.b: {
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
					case WI.l: {
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
			var Kg = (e = null, t) => {
				switch (t.type) {
					case WI.n:
					case WI.o:
						return null;
					case WI.m:
						return t.payload;
					default:
						return e
				}
			};
			var $g = (e = !1, t) => {
					switch (t.type) {
						case WI.n:
							return !0;
						case WI.o:
						case WI.m:
							return !1;
						default:
							return e
					}
				},
				Yg = Object(j.c)({
					error: Kg,
					pending: $g
				}),
				zg = Object(j.c)({
					api: Yg
				});
			var Xg = (e = !1, t) => {
				switch (t.type) {
					case WI.j:
						return !0;
					default:
						return e
				}
			};
			var Jg = (e = !1, t) => {
					switch (t.type) {
						case WI.i:
							return !0;
						case WI.j:
						case WI.h:
							return !1;
						default:
							return e
					}
				},
				Zg = Object(j.c)({
					pending: Jg,
					emailSent: Xg
				}),
				eS = Object(j.c)({
					api: Zg
				}),
				tS = Object(j.c)({
					changeEmail: zg,
					sendResetEmail: eS
				}),
				rS = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const sS = {};
			var nS = (e = sS, t) => {
				switch (t.type) {
					case Ot.f:
						return {
							...e, new: rS.a.pending
						};
					case Ot.d:
						return {
							...e, new: rS.a.error
						};
					case Ot.e:
						return {
							...e, new: rS.a.waitingForRequest
						};
					case Ot.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.pending
						}
					}
					case Ot.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.error
						}
					}
					case Ot.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const aS = [];
			var cS = (e = aS, t) => {
					switch (t.type) {
						case Ot.e:
							return [t.payload, ...e];
						case Ot.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case xr.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				oS = Object(j.c)({
					api: nS,
					data: cS
				}),
				dS = r("./src/reddit/actions/chat/constants.ts"),
				iS = r("./src/reddit/actions/chat/userSettings.ts");
			const uS = dS.a.anybody;
			var lS = (e = uS, t) => {
					switch (t.type) {
						case iS.a:
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
				pS = Object(j.c)({
					invitePolicy: lS
				});
			const bS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var fS = (e = null, t) => {
				switch (t.type) {
					case we.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && ku()(e, r) ? e : {
							...e,
							...r
						}
					}
					case us.P: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return bS(e, r)
					}
					case zr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return bS(e, r.length)
					}
					case zr.c:
					case zr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return bS(e, r)
					}
					default:
						return e
				}
			};
			const mS = {};
			var yS = (e = mS, t) => {
					switch (t.type) {
						case oc.a: {
							const e = t.payload.experimentVariants;
							return yl(e)
						}
						default:
							return e
					}
				},
				OS = r("./src/reddit/actions/global/constants.ts");
			const _S = {};
			var ES = (e = _S, t) => {
					switch (t.type) {
						case OS.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				hS = Object(j.c)({
					byName: yS,
					localPersisted: ES
				}),
				IS = r("./src/reddit/actions/googleOneTap/index.ts");
			var gS = (e = !1, t) => {
				switch (t.type) {
					case IS.a:
						return !0;
					default:
						return e
				}
			};
			var SS = (e = !1, t) => {
				switch (t.type) {
					case xr.f:
						return !0;
					case xr.e:
						return !1;
					default:
						return e
				}
			};
			var jS = (e = "", t) => {
				switch (t.type) {
					case xr.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const vS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var TS = (e = vS, t) => {
					switch (t.type) {
						case WI.b:
							return t.payload;
						default:
							return e
					}
				},
				DS = r("./src/reddit/actions/notifications/constants.ts"),
				wS = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var PS = (e = null, t) => {
				switch (t.type) {
					case wS.a:
					case wS.d:
					case DS.a:
						return t.payload && t.payload.error || null;
					case wS.c:
					case wS.f:
					case wS.a:
					case DS.c:
					case DS.b:
						return null;
					default:
						return e
				}
			};
			var AS = (e = !1, t) => {
				switch (t.type) {
					case DS.c:
						return !1;
					case DS.b:
						return !0;
					default:
						return e
				}
			};
			var CS = (e = !1, t) => {
					switch (t.type) {
						case DS.c:
							return !0;
						case DS.b:
						case DS.a:
							return !1;
						default:
							return e
					}
				},
				RS = Object(j.c)({
					error: PS,
					loaded: AS,
					pending: CS
				});
			var NS = (e = null, t) => {
				switch (t.type) {
					case DS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case DS.f:
					case DS.e:
						return null;
					default:
						return e
				}
			};
			var LS = (e = !1, t) => {
				switch (t.type) {
					case DS.f:
						return !1;
					case DS.e:
						return !0;
					default:
						return e
				}
			};
			var kS = (e = !1, t) => {
					switch (t.type) {
						case DS.f:
							return !0;
						case DS.e:
						case DS.d:
							return !1;
						default:
							return e
					}
				},
				xS = Object(j.c)({
					error: NS,
					loaded: LS,
					pending: kS
				}),
				US = Object(j.c)({
					getPreferences: RS,
					setPreferences: xS
				});
			const MS = {
				byId: {},
				allIds: []
			};
			var FS = (e = MS, t) => {
				switch (t.type) {
					case wS.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case wS.g: {
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
			const GS = {
				byId: {},
				allIds: []
			};
			var BS = (e = GS, t) => {
					switch (t.type) {
						case wS.b: {
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
				qS = Object(j.c)({
					sections: BS,
					rows: FS
				}),
				VS = r("./src/lib/notifications/constants.ts");
			var HS = (e = !1, t) => {
				switch (t.type) {
					case VS.j:
						return !0;
					case VS.b:
					case VS.d:
					case VS.e:
						return !1;
					default:
						return e
				}
			};
			const WS = {
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
			var QS = (e = WS, t) => {
				switch (t.type) {
					case DS.b:
					case DS.f:
					case DS.d: {
						const {
							preferences: r
						} = t.payload;
						return Ea()(r) ? e : r
					}
					default:
						return e
				}
			};
			const KS = {
				byId: {},
				allIds: []
			};
			var $S = (e = KS, t) => {
				switch (t.type) {
					case wS.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case wS.g: {
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
			const YS = {
				byId: {},
				allIds: []
			};
			var zS = (e = YS, t) => {
					switch (t.type) {
						case wS.e: {
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
				XS = Object(j.c)({
					sections: zS,
					rows: $S
				}),
				JS = Object(j.c)({
					api: US,
					emailSettingsLayout: qS,
					isNotificationPromptVisible: HS,
					preferences: QS,
					pushSettingsLayout: XS
				});
			const ZS = {};
			var ej = (e = ZS, t) => {
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
			const tj = {},
				rj = (e, t) => `${e}_${t||new Date}`;
			var sj = (e = tj, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[rj(t.subredditInfo.id, t.allocatedAt)]: t
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
							[rj(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = rj(r, n),
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
						} = t.payload, n = rj(r, s), a = e[n];
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
			var nj = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Gs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Gs()({
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
			var aj, cj = (e = !1, t) => {
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
				oj = Object(j.c)({
					allocationByKey: sj,
					data: nj,
					fetched: cj
				}),
				dj = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(aj || (aj = {}));
			const ij = {
				status: aj.UNFETCHED,
				subscriptions: []
			};
			var uj = (e = ij, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: aj.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: aj.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: aj.FAILED
						};
					default:
						return e
				}
			};
			var lj = (e = "", t) => {
				switch (t.type) {
					case WI.d:
						return t.payload;
					default:
						return e
				}
			};
			var pj = (e = null, t) => {
				switch (t.type) {
					case _y.a:
					case _y.b:
					case _y.c:
					case _y.e:
						return t.payload;
					case _y.d:
						return null;
					default:
						return e
				}
			};
			var bj = (e = !1, t) => {
				switch (t.type) {
					case _y.f:
						return !0;
					default:
						return e
				}
			};
			var fj = (e = "", t) => {
				switch (t.type) {
					case WI.k:
						return t.payload;
					default:
						return e
				}
			};
			var mj = (e = null, t) => {
				switch (t.type) {
					case oc.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var yj = (e = null, t) => {
					switch (t.type) {
						case oc.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				Oj = Object(j.c)({
					isEmployee: mj,
					isLoggedIn: yj
				});
			var _j = (e = null, t) => {
					switch (t.type) {
						case xr.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && ku()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Ej = r("./src/reddit/actions/userWhitelist.ts");
			const hj = {};
			var Ij = (e = hj, t) => {
				switch (t.type) {
					case Ej.e:
						return {
							...e, new: rS.a.pending
						};
					case Ej.d:
						return {
							...e, new: rS.a.error
						};
					case Ej.f:
						return {
							...e, new: rS.a.waitingForRequest
						};
					case Ej.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.pending
						}
					}
					case Ej.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.error
						}
					}
					case Ej.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: rS.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const gj = [];
			var Sj = (e = gj, t) => {
					switch (t.type) {
						case Ej.f:
							return [t.payload, ...e];
						case Ej.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case xr.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				jj = Object(j.c)({
					api: Ij,
					data: Sj
				}),
				vj = Object(j.c)({
					account: Qg,
					accountSettings: tS,
					blocked: oS,
					chatSettings: pS,
					drafts: fS,
					experiments: hS,
					googleOneTapEnabled: gS,
					isCustomizeFlyoutShowing: SS,
					topContentDismissalPrefsSet: _j,
					language: jS,
					loid: TS,
					notificationPrefs: JS,
					ownedBadges: ej,
					powerups: oj,
					prefs: dj.c,
					productOfferSubscriptions: uj,
					reddaid: lj,
					session: pj,
					sessionRefreshFailed: bj,
					sessionTracker: fj,
					temporaryGQL: Oj,
					wallets: Gg,
					whitelist: jj
				});
			var Tj = (e = null, t) => {
				switch (t.type) {
					case qg.a:
						return t.payload || null;
					case qg.b:
					case qg.c:
						return null;
					default:
						return e
				}
			};
			var Dj = (e = !1, t) => {
				switch (t.type) {
					case qg.c:
						return !0;
					case qg.b:
					case qg.a:
						return !1;
					default:
						return e
				}
			};
			var wj = (e = !1, t) => {
				switch (t.type) {
					case qg.b:
						return !0;
					case qg.a:
					case qg.c:
						return !1;
					default:
						return e
				}
			};
			var Pj = (e = !1, t) => {
					switch (t.type) {
						case qg.b:
							return t.payload.userDataExportEligibility;
						case qg.a:
						case qg.c:
							return !1;
						default:
							return e
					}
				},
				Aj = Object(j.c)({
					error: Tj,
					pending: Dj,
					success: wj,
					userDataExportEligibility: Pj
				}),
				Cj = Object(j.c)({
					userDataRequestPageApi: Aj
				});
			const Rj = {};
			var Nj = (e = Rj, t) => {
				switch (t.type) {
					case WI.g:
					case WI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case WI.e: {
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
			var Lj = (e = !1, t) => {
					switch (t.type) {
						case WI.g:
							return !0;
						case WI.f:
						case WI.e:
							return !1;
						default:
							return e
					}
				},
				kj = Object(j.c)({
					error: Nj,
					pending: Lj
				});
			const xj = {};
			var Uj = (e = xj, t) => {
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
			const Mj = {},
				Fj = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && ku()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var Gj = (e = Mj, t) => {
					switch (t.type) {
						case WI.f: {
							const {
								data: r
							} = t.payload;
							return Fj(e, r)
						}
						case Fu.k: {
							const {
								user: r
							} = t.payload;
							return Fj(e, {
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
							return c ? Fj(e, {
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
								...Hg.a,
								...s
							};
							return Fj(e, {
								[r.toLowerCase()]: {
									...n,
									karma: a
								}
							})
						}
						case xr.l:
						case xr.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? Fj(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						case WI.c:
							const r = t.payload.account;
							if (!r || !e) return e;
							const s = Object(Y.e)(r).toLowerCase(),
								n = e[s];
							return n ? Fj(e, {
								[s]: {
									...n,
									accountIcon: r.accountIcon,
									snoovatarFullBodyAsset: r.snoovatarFullBodyAsset
								}
							}) : e;
						case xr.n: {
							const {
								additional: r,
								settings: s
							} = t.payload;
							if (r.enableFollowers === r.prevEnableFollowers) return e;
							const n = s.currentUserName.toLowerCase(),
								a = e[n];
							return a ? Fj(e, {
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
				Bj = r("./src/reddit/actions/usernameAvailable.ts");
			const qj = {};
			var Vj = (e = qj, t) => {
				switch (t.type) {
					case Bj.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Bj.b.Available
						}
					}
					case Bj.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Bj.b.Error
						}
					}
					case Bj.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Bj.b.Pending
						}
					}
					case Bj.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: Bj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Hj = {};
			var Wj = (e = Hj, t) => {
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
			var Qj = (e = !1, t) => {
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
				Kj = Object(j.c)({
					allocationByKey: Wj,
					fetched: Qj
				});
			var $j = (e = null, t) => {
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
			var Yj = (e = !1, t) => {
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
				zj = Object(j.c)({
					error: $j,
					pending: Yj
				});
			var Xj = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Jj = {};
			var Zj = (e = Jj, t) => {
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
			const ev = {};
			var tv = (e = ev, t) => {
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
							return Gs()(e, [r])
						}
						default:
							return e
					}
				},
				rv = Object(j.c)({
					api: zj,
					currentPostId: Xj,
					currentRank: Zj,
					list: tv
				}),
				sv = Object(j.c)({
					api: kj,
					appliedBadges: Uj,
					models: Gj,
					nameAvailable: Vj,
					topAwarders: rv,
					powerups: Kj
				});
			const nv = {};
			var av = (e = nv, t) => {
					var r, s, n;
					switch (t.type) {
						case G.b:
						case G.f:
						case W.SUBREDDIT_LOADED:
						case K.i:
						case H.c:
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED: {
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
				cv = r("./src/reddit/actions/widgets/constants.ts");
			const ov = {};
			var dv = (e = ov, t) => {
					var r;
					switch (t.type) {
						case G.b:
						case G.f:
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
						case cv.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case cv.h: {
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
				iv = r("./src/reddit/helpers/widgets/index.tsx");
			const uv = {};
			var lv = (e = uv, t) => {
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
					case cv.b: {
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
								styles: Object(iv.g)()
							}
						}), t
					}
					case cv.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case cv.i:
					case cv.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case cv.h: {
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
					case we.PAGE_LOADED:
					case Bs.PAGE_LOADED: {
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
					case qu.h: {
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
					case B_.f: {
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
			const pv = {};
			var bv = (e = pv, t) => {
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case G.f:
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
			const fv = {};
			var mv = (e = fv, t) => {
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED: {
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
						case cv.e:
						case cv.b: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgets.layout.sidebar.order
							}
						}
						case cv.f: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.widgetIds
							}
						}
						case cv.g: {
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
						case cv.h: {
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
						case we.PAGE_LOADED:
						case Bs.PAGE_LOADED: {
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
				yv = Object(j.c)({
					idCardIds: av,
					menuIds: dv,
					models: lv,
					moderatorIds: bv,
					sidebar: mv
				}),
				Ov = r("./src/reddit/actions/wrappedReddit/constants.ts");
			const _v = {
				isImageLoading: !1,
				isCardsLoading: !1,
				cardsLoadingError: null,
				cards: [],
				shareCardWasOpened: !1,
				currentCardIndex: 0,
				subreddits: []
			};
			const Ev = {
				accountManagerModalData: a,
				activeModal: m,
				ads: h,
				apiRequestState: S,
				appBadges: C,
				authorFlair: Z,
				awards: Ke,
				badges: dt,
				blockedRedditors: yt,
				blockUser: St,
				brandSafety: vt,
				chat: or,
				claimGold: mr,
				commentsListTruncated: Or,
				communityFlairs: hr,
				connection: Sr,
				contentControls: Lr,
				contentGate: Mr,
				continueThreads: Br,
				correlationId: (e = Hr, t) => {
					switch (t.type) {
						case qr.a: {
							const {
								correlationId: r,
								key: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case qr.b: {
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
				creations: ia,
				dashboard: pa,
				discoveryUnits: Da,
				dismissedTruncationList: Aa,
				economics: Ja,
				emojis: cc,
				experimentOverrides: lc,
				externalAccount: Gc,
				featureFlags: Kc,
				focusedVerticals: co,
				fontFiles: io,
				gild: go,
				header: Co,
				htmlResponseStreaming: Ro,
				imageUploads: ko,
				interceptedAction: Uo,
				isChangeUsernameTooltipShowing: Fo,
				isEmailVerificationTooltipShowing: Bo,
				isModeratorWithPostPerms: Vo,
				jsApi: Qo,
				leaderboard: td,
				listings: Oi,
				live: gi,
				mediaEmbed: (e = ji, t) => {
					switch (t.type) {
						case Si.a:
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
				mediaGalleries: Pi,
				mediaPlayback: Ri,
				meta: ki,
				moderatingSubreddits: Mi,
				modListingPage: Wi,
				modModeEnabled: Ki,
				moreComments: tu,
				multireddits: $u,
				notificationBannerId: zu,
				notificationsInbox: cl,
				nps: il,
				onboardingModal: fl,
				page: hl,
				platform: jl,
				postCollection: rp,
				polls: Hl,
				postFlair: dp,
				posts: tf,
				postStickiedComments: af,
				givePremium: Do,
				products: If,
				profileCommentsPage: xf,
				profilePrivatePage: Jf,
				profileModSettingsPage: Gf,
				profilePostsPage: qf,
				profiles: Rm,
				promos: Um,
				publicAccessNetwork: yy,
				recentSubreddits: hy,
				recommendations: gy,
				reportPage: Ry,
				reportRules: ky,
				requestHost: xy,
				runTimeEnvVars: My,
				search: zy,
				searchDiscoveryUnits: nO,
				seo: pO,
				shortcuts: IO,
				sidebarPromotedPosts: jO,
				streaming: RO,
				structuredStyles: XO,
				stylesheets: JO,
				subredditAutocomplete: o_,
				subreddits: Gh,
				subredditStickyPosts: Vh,
				subscriptions: lI,
				survey: OI,
				tabBadged: _I,
				tags: qI,
				themes: $I,
				toaster: XI,
				tooltipId: eg,
				tracing: sg,
				tracking: bg,
				trafficStats: Og,
				transfers: vg,
				trending: Pg,
				trophies: Rg,
				uploads: xg,
				user: vj,
				userDataRequestPage: Cj,
				upvotePromptCountPerSess: Mg,
				users: sv,
				widgets: yv,
				wrappedReddit: (e = _v, t) => {
					switch (t.type) {
						case Ov.h:
							return {
								...e, shareCardWasOpened: !0
							};
						case Ov.d:
							return {
								...e, isImageLoading: !1
							};
						case Ov.e:
							return {
								...e, isImageLoading: !0
							};
						case Ov.c:
							return {
								...e, isCardsLoading: !0
							};
						case Ov.b: {
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
						case Ov.a: {
							const {
								error: r
							} = t.payload;
							return {
								...e,
								isCardsLoading: !1,
								cardsLoadingError: r
							}
						}
						case Ov.f:
							return {
								...e, ..._v
							};
						case Ov.g: {
							const {
								index: r
							} = t.payload;
							return {
								...e,
								isImageLoading: !1,
								currentCardIndex: r
							}
						}
						case Ov.i: {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.d65e323f8d5f99a361ff.js.map