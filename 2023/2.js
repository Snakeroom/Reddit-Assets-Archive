// https://www.redditstatic.com/desktop2x/2.4a32ed378f2ca54f6efe.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/@walletconnect/crypto/dist/esm/browser/aes.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/@walletconnect/crypto/dist/esm/lib/browser.js");

			function r(e, t, n) {
				return Object(o.b)(e, t, n)
			}

			function i(e, t, n) {
				return Object(o.a)(e, t, n)
			}
		},
		"./node_modules/@walletconnect/crypto/dist/esm/browser/hmac.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/@walletconnect/crypto/dist/esm/lib/browser.js");
			n("./node_modules/@walletconnect/crypto/dist/esm/helpers/index.js");
			async function r(e, t) {
				return await Object(o.c)(e, t)
			}
		},
		"./node_modules/@walletconnect/crypto/dist/esm/browser/index.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/randombytes/dist/esm/browser/index.js");
			n.d(t, "randomBytes", (function() {
				return o.a
			}));
			var r = n("./node_modules/@walletconnect/crypto/dist/esm/browser/aes.js");
			n.d(t, "aesCbcDecrypt", (function() {
				return r.a
			})), n.d(t, "aesCbcEncrypt", (function() {
				return r.b
			}));
			var i = n("./node_modules/@walletconnect/crypto/dist/esm/browser/hmac.js");
			n.d(t, "hmacSha256Sign", (function() {
				return i.a
			}));
			n("./node_modules/@walletconnect/crypto/dist/esm/browser/sha2.js"), n("./node_modules/@walletconnect/crypto/dist/esm/helpers/index.js"), n("./node_modules/@walletconnect/crypto/dist/esm/constants/index.js")
		},
		"./node_modules/@walletconnect/crypto/dist/esm/browser/sha2.js": function(e, t, n) {
			"use strict";
			n("./node_modules/@walletconnect/crypto/dist/esm/lib/browser.js")
		},
		"./node_modules/@walletconnect/crypto/dist/esm/constants/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "l", (function() {
				return h
			}));
			const o = 512,
				r = 256,
				i = 256,
				s = "AES-CBC",
				c = `SHA-${r}`,
				a = "HMAC",
				l = "SHA-256",
				u = "SHA-512",
				d = "encrypt",
				f = "decrypt",
				_ = "sign",
				h = "verify"
		},
		"./node_modules/@walletconnect/crypto/dist/esm/helpers/env.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/environment/dist/cjs/index.js");
			n.o(o, "isConstantTime") && n.d(t, "isConstantTime", (function() {
				return o.isConstantTime
			}))
		},
		"./node_modules/@walletconnect/crypto/dist/esm/helpers/index.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/crypto/dist/esm/helpers/env.js");
			n.o(o, "isConstantTime") && n.d(t, "isConstantTime", (function() {
				return o.isConstantTime
			}));
			n("./node_modules/@walletconnect/crypto/dist/esm/helpers/pkcs7.js");
			var r = n("./node_modules/@walletconnect/crypto/dist/esm/helpers/types.js");
			n.o(r, "isConstantTime") && n.d(t, "isConstantTime", (function() {
				return r.isConstantTime
			}));
			var i = n("./node_modules/@walletconnect/crypto/dist/esm/helpers/validators.js");
			n.d(t, "isConstantTime", (function() {
				return i.a
			}))
		},
		"./node_modules/@walletconnect/crypto/dist/esm/helpers/pkcs7.js": function(e, t, n) {
			"use strict"
		},
		"./node_modules/@walletconnect/crypto/dist/esm/helpers/types.js": function(e, t) {},
		"./node_modules/@walletconnect/crypto/dist/esm/helpers/validators.js": function(e, t, n) {
			"use strict";

			function o(e, t) {
				if (e.length !== t.length) return !1;
				let n = 0;
				for (let o = 0; o < e.length; o++) n |= e[o] ^ t[o];
				return 0 === n
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./node_modules/@walletconnect/crypto/dist/esm/lib/browser.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return d
			}));
			var o = n("./node_modules/@walletconnect/environment/dist/cjs/index.js"),
				r = n("./node_modules/@walletconnect/crypto/dist/esm/constants/index.js");
			async function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a;
				return o.getSubtleCrypto().importKey("raw", e, function(e) {
					return e === r.a ? {
						length: r.b,
						name: r.a
					} : {
						hash: {
							name: r.f
						},
						name: r.e
					}
				}(t), !0, function(e) {
					return e === r.a ? [r.d, r.c] : [r.k, r.l]
				}(t))
			}
			async function s(e, t, n) {
				const s = o.getSubtleCrypto(),
					c = await i(t, r.a),
					a = await s.encrypt({
						iv: e,
						name: r.a
					}, c, n);
				return new Uint8Array(a)
			}
			async function c(e, t, n) {
				const s = o.getSubtleCrypto(),
					c = await i(t, r.a),
					a = await s.decrypt({
						iv: e,
						name: r.a
					}, c, n);
				return new Uint8Array(a)
			}
			async function a(e, t) {
				const n = o.getSubtleCrypto(),
					s = await i(e, r.e),
					c = await n.sign({
						length: r.g,
						name: r.e
					}, s, t);
				return new Uint8Array(c)
			}
			async function l(e, t) {
				const n = o.getSubtleCrypto(),
					s = await i(e, r.e),
					c = await n.sign({
						length: r.h,
						name: r.e
					}, s, t);
				return new Uint8Array(c)
			}
			async function u(e) {
				const t = o.getSubtleCrypto(),
					n = await t.digest({
						name: r.i
					}, e);
				return new Uint8Array(n)
			}
			async function d(e) {
				const t = o.getSubtleCrypto(),
					n = await t.digest({
						name: r.j
					}, e);
				return new Uint8Array(n)
			}
		},
		"./node_modules/@walletconnect/encoding/dist/esm/index.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "f", (function() {
					return p
				})), n.d(t, "g", (function() {
					return m
				})), n.d(t, "i", (function() {
					return g
				})), n.d(t, "h", (function() {
					return y
				})), n.d(t, "b", (function() {
					return w
				})), n.d(t, "c", (function() {
					return v
				})), n.d(t, "e", (function() {
					return b
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "o", (function() {
					return R
				})), n.d(t, "n", (function() {
					return S
				})), n.d(t, "q", (function() {
					return O
				})), n.d(t, "p", (function() {
					return I
				})), n.d(t, "D", (function() {
					return x
				})), n.d(t, "C", (function() {
					return j
				})), n.d(t, "E", (function() {
					return C
				})), n.d(t, "F", (function() {
					return k
				})), n.d(t, "w", (function() {
					return N
				})), n.d(t, "v", (function() {
					return T
				})), n.d(t, "x", (function() {
					return M
				})), n.d(t, "y", (function() {
					return A
				})), n.d(t, "t", (function() {
					return D
				})), n.d(t, "s", (function() {
					return U
				})), n.d(t, "u", (function() {
					return B
				})), n.d(t, "r", (function() {
					return H
				})), n.d(t, "m", (function() {
					return J
				})), n.d(t, "l", (function() {
					return W
				})), n.d(t, "k", (function() {
					return F
				})), n.d(t, "j", (function() {
					return z
				})), n.d(t, "A", (function() {
					return Q
				})), n.d(t, "a", (function() {
					return G
				})), n.d(t, "B", (function() {
					return K
				})), n.d(t, "z", (function() {
					return Y
				}));
				var o = n("./node_modules/is-typedarray/index.js"),
					r = n.n(o),
					i = n("./node_modules/typedarray-to-buffer/index.js"),
					s = n.n(i);
				const c = "hex",
					a = "utf8",
					l = "binary",
					u = "buffer",
					d = "array",
					f = "typed-array",
					_ = "array-buffer",
					h = "0";

				function p(e) {
					return new Uint8Array(e)
				}

				function m(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = e.toString(c);
					return t ? G(n) : n
				}

				function g(e) {
					return e.toString(a)
				}

				function y(e) {
					return e.readUIntBE(0, e.length)
				}

				function w(e) {
					return s()(e)
				}

				function v(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return m(w(e), t)
				}

				function b(e) {
					return g(w(e))
				}

				function E(e) {
					return y(w(e))
				}

				function R(t) {
					return e.from(Q(t), c)
				}

				function S(e) {
					return p(R(e))
				}

				function O(e) {
					return g(R(e))
				}

				function I(e) {
					return E(S(e))
				}

				function x(t) {
					return e.from(t, a)
				}

				function j(e) {
					return p(x(e))
				}

				function C(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return m(x(e), t)
				}

				function k(e) {
					const t = parseInt(e, 10);
					return function(e, t) {
						if (!e) throw new Error(t)
					}(! function(e) {
						return void 0 === e
					}(t), "Number can only safely store up to 53 bits"), t
				}

				function N(e) {
					return w(q(L(e)))
				}

				function T(e) {
					return q(L(e))
				}

				function M(e, t) {
					return P(L(e), t)
				}

				function A(e) {
					return `${e}`
				}

				function L(e) {
					return $((e >>> 0).toString(2))
				}

				function q(e) {
					return new Uint8Array(V(e).map(e => parseInt(e, 2)))
				}

				function P(e, t) {
					return v(q(e), t)
				}

				function D(e, t) {
					return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
				}

				function U(t) {
					return e.isBuffer(t)
				}

				function B(e) {
					return r.a.strict(e) && !U(e)
				}

				function H(e) {
					return !B(e) && !U(e) && void 0 !== e.byteLength
				}

				function J(e) {
					return U(e) ? u : B(e) ? f : H(e) ? _ : Array.isArray(e) ? d : typeof e
				}

				function W(e) {
					return function(e) {
						return !("string" != typeof e || !new RegExp(/^[01]+$/).test(e)) && e.length % 8 == 0
					}(e) ? l : D(e) ? c : a
				}

				function F() {
					for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
					return e.concat(n)
				}

				function z() {
					let e = [];
					for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
					return n.forEach(t => e = e.concat(Array.from(t))), new Uint8Array([...e])
				}

				function V(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
					const n = $(e).match(new RegExp(`.{${t}}`, "gi"));
					return Array.from(n || [])
				}

				function $(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
					return function(e, t) {
						let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
						return Z(e, t, !0, n)
					}(e, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
						const n = e % t;
						return n ? (e - n) / t * t + t : e
					}(e.length, t), n)
				}

				function Q(e) {
					return e.replace(/^0x/, "")
				}

				function G(e) {
					return e.startsWith("0x") ? e : `0x${e}`
				}

				function K(e) {
					return (e = $(e = Q(e), 2)) && (e = G(e)), e
				}

				function Y(e) {
					const t = e.startsWith("0x");
					return e = (e = Q(e)).startsWith(h) ? e.substring(1) : e, t ? G(e) : e
				}

				function Z(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h;
					const r = t - e.length;
					let i = e;
					if (r > 0) {
						const t = o.repeat(r);
						i = n ? t + e : e + t
					}
					return i
				}
			}).call(this, n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/@walletconnect/environment/dist/cjs/crypto.js": function(e, t, n) {
			"use strict";
			(function(e) {
				function n() {
					return (null == e ? void 0 : e.crypto) || (null == e ? void 0 : e.msCrypto) || {}
				}

				function o() {
					const e = n();
					return e.subtle || e.webkitSubtle
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = n, t.getSubtleCrypto = o, t.isBrowserCryptoAvailable = function() {
					return !!n() && !!o()
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@walletconnect/environment/dist/cjs/env.js": function(e, t, n) {
			"use strict";
			(function(e) {
				function n() {
					return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
				}

				function o() {
					return void 0 !== e && void 0 !== e.versions && void 0 !== e.versions.node
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = o, t.isBrowser = function() {
					return !n() && !o()
				}
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/@walletconnect/environment/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const o = n("./node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js");
			o.__exportStar(n("./node_modules/@walletconnect/environment/dist/cjs/crypto.js"), t), o.__exportStar(n("./node_modules/@walletconnect/environment/dist/cjs/env.js"), t)
		},
		"./node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return r
			})), n.d(t, "__assign", (function() {
				return i
			})), n.d(t, "__rest", (function() {
				return s
			})), n.d(t, "__decorate", (function() {
				return c
			})), n.d(t, "__param", (function() {
				return a
			})), n.d(t, "__metadata", (function() {
				return l
			})), n.d(t, "__awaiter", (function() {
				return u
			})), n.d(t, "__generator", (function() {
				return d
			})), n.d(t, "__createBinding", (function() {
				return f
			})), n.d(t, "__exportStar", (function() {
				return _
			})), n.d(t, "__values", (function() {
				return h
			})), n.d(t, "__read", (function() {
				return p
			})), n.d(t, "__spread", (function() {
				return m
			})), n.d(t, "__spreadArrays", (function() {
				return g
			})), n.d(t, "__await", (function() {
				return y
			})), n.d(t, "__asyncGenerator", (function() {
				return w
			})), n.d(t, "__asyncDelegator", (function() {
				return v
			})), n.d(t, "__asyncValues", (function() {
				return b
			})), n.d(t, "__makeTemplateObject", (function() {
				return E
			})), n.d(t, "__importStar", (function() {
				return R
			})), n.d(t, "__importDefault", (function() {
				return S
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return O
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function r(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var i = function() {
				return (i = Object.assign || function(e) {
					for (var t, n = 1, o = arguments.length; n < o; n++)
						for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					return e
				}).apply(this, arguments)
			};

			function s(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
				}
				return n
			}

			function c(e, t, n, o) {
				var r, i = arguments.length,
					s = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
				else
					for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, n, s) : r(t, n)) || s);
				return i > 3 && s && Object.defineProperty(t, n, s), s
			}

			function a(e, t) {
				return function(n, o) {
					t(n, o, e)
				}
			}

			function l(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function u(e, t, n, o) {
				return new(n || (n = Promise))((function(r, i) {
					function s(e) {
						try {
							a(o.next(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						try {
							a(o.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function a(e) {
						var t;
						e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(s, c)
					}
					a((o = o.apply(e, t || [])).next())
				}))
			}

			function d(e, t) {
				var n, o, r, i, s = {
					label: 0,
					sent: function() {
						if (1 & r[0]) throw r[1];
						return r[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: c(0),
					throw: c(1),
					return: c(2)
				}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
					return this
				}), i;

				function c(i) {
					return function(c) {
						return function(i) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; s;) try {
								if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
								switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
									case 0:
									case 1:
										r = i;
										break;
									case 4:
										return s.label++, {
											value: i[1],
											done: !1
										};
									case 5:
										s.label++, o = i[1], i = [0];
										continue;
									case 7:
										i = s.ops.pop(), s.trys.pop();
										continue;
									default:
										if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
											s = 0;
											continue
										}
										if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
											s.label = i[1];
											break
										}
										if (6 === i[0] && s.label < r[1]) {
											s.label = r[1], r = i;
											break
										}
										if (r && s.label < r[2]) {
											s.label = r[2], s.ops.push(i);
											break
										}
										r[2] && s.ops.pop(), s.trys.pop();
										continue
								}
								i = t.call(e, s)
							} catch (c) {
								i = [6, c], o = 0
							} finally {
								n = r = 0
							}
							if (5 & i[0]) throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}([i, c])
					}
				}
			}

			function f(e, t, n, o) {
				void 0 === o && (o = n), e[o] = t[n]
			}

			function _(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function h(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					o = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && o >= e.length && (e = void 0), {
							value: e && e[o++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function p(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var o, r, i = n.call(e),
					s = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(o = i.next()).done;) s.push(o.value)
				} catch (c) {
					r = {
						error: c
					}
				} finally {
					try {
						o && !o.done && (n = i.return) && n.call(i)
					} finally {
						if (r) throw r.error
					}
				}
				return s
			}

			function m() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
				return e
			}

			function g() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var o = Array(e),
					r = 0;
				for (t = 0; t < n; t++)
					for (var i = arguments[t], s = 0, c = i.length; s < c; s++, r++) o[r] = i[s];
				return o
			}

			function y(e) {
				return this instanceof y ? (this.v = e, this) : new y(e)
			}

			function w(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var o, r = n.apply(e, t || []),
					i = [];
				return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
					return this
				}, o;

				function s(e) {
					r[e] && (o[e] = function(t) {
						return new Promise((function(n, o) {
							i.push([e, t, n, o]) > 1 || c(e, t)
						}))
					})
				}

				function c(e, t) {
					try {
						(n = r[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(a, l) : u(i[0][2], n)
					} catch (o) {
						u(i[0][3], o)
					}
					var n
				}

				function a(e) {
					c("next", e)
				}

				function l(e) {
					c("throw", e)
				}

				function u(e, t) {
					e(t), i.shift(), i.length && c(i[0][0], i[0][1])
				}
			}

			function v(e) {
				var t, n;
				return t = {}, o("next"), o("throw", (function(e) {
					throw e
				})), o("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function o(o, r) {
					t[o] = e[o] ? function(t) {
						return (n = !n) ? {
							value: y(e[o](t)),
							done: "return" === o
						} : r ? r(t) : t
					} : r
				}
			}

			function b(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = h(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function o(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(o, r) {
							(function(e, t, n, o) {
								Promise.resolve(o).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(o, r, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function E(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function R(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function S(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function O(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				r = n("./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js"),
				i = n.n(r),
				s = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js"),
				c = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
			const a = {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					method: "POST"
				},
				l = 10;
			class u {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (this.url = e, this.disableProviderPing = t, this.events = new o.EventEmitter, this.isAvailable = !1, this.registering = !1, !Object(c.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
					this.url = e, this.disableProviderPing = t
				}
				get connected() {
					return this.isAvailable
				}
				get connecting() {
					return this.registering
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async open() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
					await this.register(e)
				}
				async close() {
					if (!this.isAvailable) throw new Error("Connection already closed");
					this.onClose()
				}
				async send(e, t) {
					this.isAvailable || await this.register();
					try {
						const t = Object(s.b)(e),
							n = await i()(this.url, Object.assign(Object.assign({}, a), {
								body: t
							})),
							o = await n.json();
						this.onPayload({
							data: o
						})
					} catch (n) {
						this.onError(e.id, n)
					}
				}
				async register() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
					if (!Object(c.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
					if (this.registering) {
						const e = this.events.getMaxListeners();
						return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
							this.events.once("register_error", e => {
								this.resetMaxListeners(), t(e)
							}), this.events.once("open", () => {
								if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
								e()
							})
						})
					}
					this.url = e, this.registering = !0;
					try {
						if (!this.disableProviderPing) {
							const t = Object(s.b)({
								id: 1,
								jsonrpc: "2.0",
								method: "test",
								params: []
							});
							await i()(e, Object.assign(Object.assign({}, a), {
								body: t
							}))
						}
						this.onOpen()
					} catch (t) {
						const e = this.parseError(t);
						throw this.events.emit("register_error", e), this.onClose(), e
					}
				}
				onOpen() {
					this.isAvailable = !0, this.registering = !1, this.events.emit("open")
				}
				onClose() {
					this.isAvailable = !1, this.registering = !1, this.events.emit("close")
				}
				onPayload(e) {
					if (void 0 === e.data) return;
					const t = "string" == typeof e.data ? Object(s.a)(e.data) : e.data;
					this.events.emit("payload", t)
				}
				onError(e, t) {
					const n = this.parseError(t),
						o = n.message || n.toString(),
						r = Object(c.formatJsonRpcError)(e, o);
					this.events.emit("payload", r)
				}
				parseError(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
					return Object(c.parseConnectionError)(e, t, "HTTP")
				}
				resetMaxListeners() {
					this.events.getMaxListeners() > l && this.events.setMaxListeners(l)
				}
			}
			var d = u;
			t.b = d
		},
		"./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js": function(e, t) {
			var n = "undefined" != typeof self ? self : this,
				o = function() {
					function e() {
						this.fetch = !1, this.DOMException = n.DOMException
					}
					return e.prototype = n, new e
				}();
			! function(e) {
				! function(t) {
					var n = {
						searchParams: "URLSearchParams" in e,
						iterable: "Symbol" in e && "iterator" in Symbol,
						blob: "FileReader" in e && "Blob" in e && function() {
							try {
								return new Blob, !0
							} catch (e) {
								return !1
							}
						}(),
						formData: "FormData" in e,
						arrayBuffer: "ArrayBuffer" in e
					};
					if (n.arrayBuffer) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
						r = ArrayBuffer.isView || function(e) {
							return e && o.indexOf(Object.prototype.toString.call(e)) > -1
						};

					function i(e) {
						if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
						return e.toLowerCase()
					}

					function s(e) {
						return "string" != typeof e && (e = String(e)), e
					}

					function c(e) {
						var t = {
							next: function() {
								var t = e.shift();
								return {
									done: void 0 === t,
									value: t
								}
							}
						};
						return n.iterable && (t[Symbol.iterator] = function() {
							return t
						}), t
					}

					function a(e) {
						this.map = {}, e instanceof a ? e.forEach((function(e, t) {
							this.append(t, e)
						}), this) : Array.isArray(e) ? e.forEach((function(e) {
							this.append(e[0], e[1])
						}), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
							this.append(t, e[t])
						}), this)
					}

					function l(e) {
						if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
						e.bodyUsed = !0
					}

					function u(e) {
						return new Promise((function(t, n) {
							e.onload = function() {
								t(e.result)
							}, e.onerror = function() {
								n(e.error)
							}
						}))
					}

					function d(e) {
						var t = new FileReader,
							n = u(t);
						return t.readAsArrayBuffer(e), n
					}

					function f(e) {
						if (e.slice) return e.slice(0);
						var t = new Uint8Array(e.byteLength);
						return t.set(new Uint8Array(e)), t.buffer
					}

					function _() {
						return this.bodyUsed = !1, this._initBody = function(e) {
							var t;
							this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : n.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : n.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : n.arrayBuffer && n.blob && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || r(e)) ? this._bodyArrayBuffer = f(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
						}, n.blob && (this.blob = function() {
							var e = l(this);
							if (e) return e;
							if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
							if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
							if (this._bodyFormData) throw new Error("could not read FormData body as blob");
							return Promise.resolve(new Blob([this._bodyText]))
						}, this.arrayBuffer = function() {
							return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
						}), this.text = function() {
							var e, t, n, o = l(this);
							if (o) return o;
							if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = u(t), t.readAsText(e), n;
							if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
								for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
								return n.join("")
							}(this._bodyArrayBuffer));
							if (this._bodyFormData) throw new Error("could not read FormData body as text");
							return Promise.resolve(this._bodyText)
						}, n.formData && (this.formData = function() {
							return this.text().then(m)
						}), this.json = function() {
							return this.text().then(JSON.parse)
						}, this
					}
					a.prototype.append = function(e, t) {
						e = i(e), t = s(t);
						var n = this.map[e];
						this.map[e] = n ? n + ", " + t : t
					}, a.prototype.delete = function(e) {
						delete this.map[i(e)]
					}, a.prototype.get = function(e) {
						return e = i(e), this.has(e) ? this.map[e] : null
					}, a.prototype.has = function(e) {
						return this.map.hasOwnProperty(i(e))
					}, a.prototype.set = function(e, t) {
						this.map[i(e)] = s(t)
					}, a.prototype.forEach = function(e, t) {
						for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
					}, a.prototype.keys = function() {
						var e = [];
						return this.forEach((function(t, n) {
							e.push(n)
						})), c(e)
					}, a.prototype.values = function() {
						var e = [];
						return this.forEach((function(t) {
							e.push(t)
						})), c(e)
					}, a.prototype.entries = function() {
						var e = [];
						return this.forEach((function(t, n) {
							e.push([n, t])
						})), c(e)
					}, n.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
					var h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

					function p(e, t) {
						var n, o, r = (t = t || {}).body;
						if (e instanceof p) {
							if (e.bodyUsed) throw new TypeError("Already read");
							this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new a(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, r || null == e._bodyInit || (r = e._bodyInit, e.bodyUsed = !0)
						} else this.url = String(e);
						if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new a(t.headers)), this.method = (n = t.method || this.method || "GET", o = n.toUpperCase(), h.indexOf(o) > -1 ? o : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
						this._initBody(r)
					}

					function m(e) {
						var t = new FormData;
						return e.trim().split("&").forEach((function(e) {
							if (e) {
								var n = e.split("="),
									o = n.shift().replace(/\+/g, " "),
									r = n.join("=").replace(/\+/g, " ");
								t.append(decodeURIComponent(o), decodeURIComponent(r))
							}
						})), t
					}

					function g(e, t) {
						t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new a(t.headers), this.url = t.url || "", this._initBody(e)
					}
					p.prototype.clone = function() {
						return new p(this, {
							body: this._bodyInit
						})
					}, _.call(p.prototype), _.call(g.prototype), g.prototype.clone = function() {
						return new g(this._bodyInit, {
							status: this.status,
							statusText: this.statusText,
							headers: new a(this.headers),
							url: this.url
						})
					}, g.error = function() {
						var e = new g(null, {
							status: 0,
							statusText: ""
						});
						return e.type = "error", e
					};
					var y = [301, 302, 303, 307, 308];
					g.redirect = function(e, t) {
						if (-1 === y.indexOf(t)) throw new RangeError("Invalid status code");
						return new g(null, {
							status: t,
							headers: {
								location: e
							}
						})
					}, t.DOMException = e.DOMException;
					try {
						new t.DOMException
					} catch (v) {
						t.DOMException = function(e, t) {
							this.message = e, this.name = t;
							var n = Error(e);
							this.stack = n.stack
						}, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
					}

					function w(e, o) {
						return new Promise((function(r, i) {
							var s = new p(e, o);
							if (s.signal && s.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
							var c = new XMLHttpRequest;

							function l() {
								c.abort()
							}
							c.onload = function() {
								var e, t, n = {
									status: c.status,
									statusText: c.statusText,
									headers: (e = c.getAllResponseHeaders() || "", t = new a, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
										var n = e.split(":"),
											o = n.shift().trim();
										if (o) {
											var r = n.join(":").trim();
											t.append(o, r)
										}
									})), t)
								};
								n.url = "responseURL" in c ? c.responseURL : n.headers.get("X-Request-URL");
								var o = "response" in c ? c.response : c.responseText;
								r(new g(o, n))
							}, c.onerror = function() {
								i(new TypeError("Network request failed"))
							}, c.ontimeout = function() {
								i(new TypeError("Network request failed"))
							}, c.onabort = function() {
								i(new t.DOMException("Aborted", "AbortError"))
							}, c.open(s.method, s.url, !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && n.blob && (c.responseType = "blob"), s.headers.forEach((function(e, t) {
								c.setRequestHeader(t, e)
							})), s.signal && (s.signal.addEventListener("abort", l), c.onreadystatechange = function() {
								4 === c.readyState && s.signal.removeEventListener("abort", l)
							}), c.send(void 0 === s._bodyInit ? null : s._bodyInit)
						}))
					}
					w.polyfill = !0, e.fetch || (e.fetch = w, e.Headers = a, e.Request = p, e.Response = g), t.Headers = a, t.Request = p, t.Response = g, t.fetch = w, Object.defineProperty(t, "__esModule", {
						value: !0
					})
				}({})
			}(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
			var r = o;
			(t = r.fetch).default = r.fetch, t.fetch = r.fetch, t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response, e.exports = t
		},
		"./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
			class i extends r.IJsonRpcProvider {
				constructor(e) {
					super(e), this.events = new o.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
				}
				async connect() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
					await this.open(e)
				}
				async disconnect() {
					await this.close()
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async request(e, t) {
					return this.requestStrict(Object(r.formatJsonRpcRequest)(e.method, e.params || [], e.id || Object(r.getBigIntRpcId)().toString()), t)
				}
				async requestStrict(e, t) {
					return new Promise(async (n, o) => {
						if (!this.connection.connected) try {
							await this.open()
						} catch (i) {
							o(i)
						}
						this.events.on(`${e.id}`, e => {
							Object(r.isJsonRpcError)(e) ? o(e.error) : n(e.result)
						});
						try {
							await this.connection.send(e, t)
						} catch (i) {
							o(i)
						}
					})
				}
				setConnection() {
					return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
				}
				onPayload(e) {
					this.events.emit("payload", e), Object(r.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
						type: e.method,
						data: e.params
					})
				}
				onClose(e) {
					e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
				}
				async open() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
					this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
				}
				async close() {
					await this.connection.close()
				}
				registerEventListeners() {
					this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
				}
			}
		},
		"./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			class o {}
			class r extends o {
				constructor(e) {
					super()
				}
			}
			class i extends o {
				constructor() {
					super()
				}
			}
			class s extends i {
				constructor(e) {
					super()
				}
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			const o = "INTERNAL_ERROR",
				r = "SERVER_ERROR",
				i = [-32700, -32600, -32601, -32602, -32603],
				s = [-32e3, -32099],
				c = {
					PARSE_ERROR: {
						code: -32700,
						message: "Parse error"
					},
					INVALID_REQUEST: {
						code: -32600,
						message: "Invalid Request"
					},
					METHOD_NOT_FOUND: {
						code: -32601,
						message: "Method not found"
					},
					INVALID_PARAMS: {
						code: -32602,
						message: "Invalid params"
					},
					[o]: {
						code: -32603,
						message: "Internal error"
					},
					[r]: {
						code: -32e3,
						message: "Server error"
					}
				},
				a = r
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/environment/dist/cjs/index.js");
			n.o(o, "IJsonRpcProvider") && n.d(t, "IJsonRpcProvider", (function() {
				return o.IJsonRpcProvider
			})), n.o(o, "formatJsonRpcError") && n.d(t, "formatJsonRpcError", (function() {
				return o.formatJsonRpcError
			})), n.o(o, "formatJsonRpcRequest") && n.d(t, "formatJsonRpcRequest", (function() {
				return o.formatJsonRpcRequest
			})), n.o(o, "formatJsonRpcResult") && n.d(t, "formatJsonRpcResult", (function() {
				return o.formatJsonRpcResult
			})), n.o(o, "getBigIntRpcId") && n.d(t, "getBigIntRpcId", (function() {
				return o.getBigIntRpcId
			})), n.o(o, "isHttpUrl") && n.d(t, "isHttpUrl", (function() {
				return o.isHttpUrl
			})), n.o(o, "isJsonRpcError") && n.d(t, "isJsonRpcError", (function() {
				return o.isJsonRpcError
			})), n.o(o, "isJsonRpcRequest") && n.d(t, "isJsonRpcRequest", (function() {
				return o.isJsonRpcRequest
			})), n.o(o, "isJsonRpcResponse") && n.d(t, "isJsonRpcResponse", (function() {
				return o.isJsonRpcResponse
			})), n.o(o, "isJsonRpcResult") && n.d(t, "isJsonRpcResult", (function() {
				return o.isJsonRpcResult
			})), n.o(o, "isLocalhostUrl") && n.d(t, "isLocalhostUrl", (function() {
				return o.isLocalhostUrl
			})), n.o(o, "isReactNative") && n.d(t, "isReactNative", (function() {
				return o.isReactNative
			})), n.o(o, "isWsUrl") && n.d(t, "isWsUrl", (function() {
				return o.isWsUrl
			})), n.o(o, "payloadId") && n.d(t, "payloadId", (function() {
				return o.payloadId
			}));
			o.isNode
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");

			function r(e) {
				return o.c.includes(e)
			}

			function i(e) {
				return Object.keys(o.f).includes(e) ? o.f[e] : o.f[o.a]
			}

			function s(e) {
				const t = Object.values(o.f).find(t => t.code === e);
				return t || o.f[o.a]
			}

			function c(e, t, n) {
				return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${t}`) : e
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js"),
				r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");

			function i() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
				return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
			}

			function s() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
				return BigInt(i(e))
			}

			function c(e, t, n) {
				return {
					id: n || i(),
					jsonrpc: "2.0",
					method: e,
					params: t
				}
			}

			function a(e, t) {
				return {
					id: e,
					jsonrpc: "2.0",
					result: t
				}
			}

			function l(e, t, n) {
				return {
					id: e,
					jsonrpc: "2.0",
					error: u(t, n)
				}
			}

			function u(e, t) {
				return void 0 === e ? Object(o.a)(r.b) : ("string" == typeof e && (e = Object.assign(Object.assign({}, Object(o.a)(r.d)), {
					message: e
				})), void 0 !== t && (e.data = t), Object(o.c)(e.code) && (e = Object(o.b)(e.code)), e)
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");
			var o = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js");
			n.d(t, "parseConnectionError", (function() {
				return o.d
			}));
			var r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js");
			n.o(r, "IJsonRpcProvider") && n.d(t, "IJsonRpcProvider", (function() {
				return r.IJsonRpcProvider
			})), n.o(r, "formatJsonRpcError") && n.d(t, "formatJsonRpcError", (function() {
				return r.formatJsonRpcError
			})), n.o(r, "formatJsonRpcRequest") && n.d(t, "formatJsonRpcRequest", (function() {
				return r.formatJsonRpcRequest
			})), n.o(r, "formatJsonRpcResult") && n.d(t, "formatJsonRpcResult", (function() {
				return r.formatJsonRpcResult
			})), n.o(r, "getBigIntRpcId") && n.d(t, "getBigIntRpcId", (function() {
				return r.getBigIntRpcId
			})), n.o(r, "isHttpUrl") && n.d(t, "isHttpUrl", (function() {
				return r.isHttpUrl
			})), n.o(r, "isJsonRpcError") && n.d(t, "isJsonRpcError", (function() {
				return r.isJsonRpcError
			})), n.o(r, "isJsonRpcRequest") && n.d(t, "isJsonRpcRequest", (function() {
				return r.isJsonRpcRequest
			})), n.o(r, "isJsonRpcResponse") && n.d(t, "isJsonRpcResponse", (function() {
				return r.isJsonRpcResponse
			})), n.o(r, "isJsonRpcResult") && n.d(t, "isJsonRpcResult", (function() {
				return r.isJsonRpcResult
			})), n.o(r, "isLocalhostUrl") && n.d(t, "isLocalhostUrl", (function() {
				return r.isLocalhostUrl
			})), n.o(r, "isReactNative") && n.d(t, "isReactNative", (function() {
				return r.isReactNative
			})), n.o(r, "isWsUrl") && n.d(t, "isWsUrl", (function() {
				return r.isWsUrl
			})), n.o(r, "payloadId") && n.d(t, "payloadId", (function() {
				return r.payloadId
			}));
			var i = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js");
			n.d(t, "formatJsonRpcError", (function() {
				return i.a
			})), n.d(t, "formatJsonRpcRequest", (function() {
				return i.b
			})), n.d(t, "formatJsonRpcResult", (function() {
				return i.c
			})), n.d(t, "getBigIntRpcId", (function() {
				return i.d
			})), n.d(t, "payloadId", (function() {
				return i.e
			}));
			n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js");
			var s = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js");
			n.d(t, "IJsonRpcProvider", (function() {
				return s.a
			}));
			var c = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js");
			n.d(t, "isHttpUrl", (function() {
				return c.a
			})), n.d(t, "isLocalhostUrl", (function() {
				return c.b
			})), n.d(t, "isWsUrl", (function() {
				return c.c
			}));
			var a = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js");
			n.d(t, "isJsonRpcError", (function() {
				return a.a
			})), n.d(t, "isJsonRpcRequest", (function() {
				return a.b
			})), n.d(t, "isJsonRpcResponse", (function() {
				return a.c
			})), n.d(t, "isJsonRpcResult", (function() {
				return a.d
			}))
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js": function(e, t, n) {
			"use strict"
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js");
			n.d(t, "a", (function() {
				return o.b
			}))
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			const o = "^https?:",
				r = "^wss?:";

			function i(e, t) {
				const n = function(e) {
					const t = e.match(new RegExp(/^\w+:/, "gi"));
					if (t && t.length) return t[0]
				}(e);
				return void 0 !== n && new RegExp(t).test(n)
			}

			function s(e) {
				return i(e, o)
			}

			function c(e) {
				return i(e, r)
			}

			function a(e) {
				return new RegExp("wss?://localhost(:d{2,5})?").test(e)
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js": function(e, t, n) {
			"use strict";

			function o(e) {
				return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
			}

			function r(e) {
				return o(e) && "method" in e
			}

			function i(e) {
				return o(e) && (s(e) || c(e))
			}

			function s(e) {
				return "result" in e
			}

			function c(e) {
				return "error" in e
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}))
		},
		"./node_modules/@walletconnect/legacy-client/dist/esm/network.js": function(e, t, n) {
			"use strict";
			t.a = class {
				constructor() {
					this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
				}
				on(e, t) {
					this._eventEmitters.push({
						event: e,
						callback: t
					})
				}
				trigger(e) {
					let t = [];
					e && (t = this._eventEmitters.filter(t => t.event === e)), t.forEach(e => {
						e.callback()
					})
				}
			}
		},
		"./node_modules/@walletconnect/legacy-client/dist/esm/socket.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var o = n("./node_modules/@walletconnect/legacy-utils/dist/esm/index.js"),
					r = n("./node_modules/@walletconnect/legacy-client/dist/esm/network.js");
				const i = void 0 !== e.WebSocket ? e.WebSocket : n("./node_modules/ws/browser.js");
				t.a = class {
					constructor(e) {
						if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new r.a, !e.url || "string" != typeof e.url) throw new Error("Missing or invalid WebSocket url");
						this._url = e.url, this._netMonitor.on("online", () => this._socketCreate())
					}
					set readyState(e) {}
					get readyState() {
						return this._socket ? this._socket.readyState : -1
					}
					set connecting(e) {}
					get connecting() {
						return 0 === this.readyState
					}
					set connected(e) {}
					get connected() {
						return 1 === this.readyState
					}
					set closing(e) {}
					get closing() {
						return 2 === this.readyState
					}
					set closed(e) {}
					get closed() {
						return 3 === this.readyState
					}
					open() {
						this._socketCreate()
					}
					close() {
						this._socketClose()
					}
					send(e, t, n) {
						if (!t || "string" != typeof t) throw new Error("Missing or invalid topic field");
						this._socketSend({
							topic: t,
							type: "pub",
							payload: e,
							silent: !!n
						})
					}
					subscribe(e) {
						this._socketSend({
							topic: e,
							type: "sub",
							payload: "",
							silent: !0
						})
					}
					on(e, t) {
						this._events.push({
							event: e,
							callback: t
						})
					}
					_socketCreate() {
						if (this._nextSocket) return;
						const e = function(e, t, n) {
							var r, i;
							const s = (e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e).split("?"),
								c = Object(o.isBrowser)() ? {
									protocol: t,
									version: n,
									env: "browser",
									host: (null === (r = Object(o.getLocation)()) || void 0 === r ? void 0 : r.host) || ""
								} : {
									protocol: t,
									version: n,
									env: (null === (i = Object(o.detectEnv)()) || void 0 === i ? void 0 : i.name) || ""
								},
								a = Object(o.appendToQueryString)(Object(o.getQueryString)(s[1] || ""), c);
							return s[0] + "?" + a
						}(this._url, this._protocol, this._version);
						if (this._nextSocket = new i(e), !this._nextSocket) throw new Error("Failed to create socket");
						this._nextSocket.onmessage = e => this._socketReceive(e), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = e => this._socketError(e), this._nextSocket.onclose = () => {
							setTimeout(() => {
								this._nextSocket = null, this._socketCreate()
							}, 1e3)
						}
					}
					_socketOpen() {
						this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
					}
					_socketClose() {
						this._socket && (this._socket.onclose = () => {}, this._socket.close())
					}
					_socketSend(e) {
						const t = JSON.stringify(e);
						this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate())
					}
					async _socketReceive(e) {
						let t;
						try {
							t = JSON.parse(e.data)
						} catch (n) {
							return
						}
						if (this._socketSend({
								topic: t.topic,
								type: "ack",
								payload: "",
								silent: !0
							}), this._socket && 1 === this._socket.readyState) {
							const e = this._events.filter(e => "message" === e.event);
							e && e.length && e.forEach(e => e.callback(t))
						}
					}
					_socketError(e) {
						const t = this._events.filter(e => "error" === e.event);
						t && t.length && t.forEach(t => t.callback(e))
					}
					_queueSubscriptions() {
						this._subscriptions.forEach(e => this._queue.push({
							topic: e,
							type: "sub",
							payload: "",
							silent: !0
						})), this._subscriptions = this.opts.subscriptions || []
					}
					_setToQueue(e) {
						this._queue.push(e)
					}
					_pushQueue() {
						this._queue.forEach(e => this._socketSend(e)), this._queue = []
					}
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@walletconnect/legacy-modal/dist/cjs/index.js": function(e, t, n) {
			(function(t) {
				function o(e) {
					return e && "object" == typeof e && "default" in e ? e.default : e
				}
				var r = n("./node_modules/@walletconnect/legacy-utils/dist/esm/index.js"),
					i = o(n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/browser.js")),
					s = o(n("./node_modules/copy-to-clipboard/index.js")),
					c = n("./node_modules/@walletconnect/legacy-modal/node_modules/preact/compat/dist/compat.module.js");
				var a = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
				"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
				var l = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
					u = "WalletConnect",
					d = 300,
					f = "rgb(64, 153, 255)",
					_ = "walletconnect-wrapper",
					h = "walletconnect-style-sheet",
					p = "walletconnect-qrcode-modal",
					m = "walletconnect-qrcode-close",
					g = "walletconnect-qrcode-text",
					y = "walletconnect-connect-button";

				function w(e) {
					return c.createElement("div", {
						className: "walletconnect-modal__header"
					}, c.createElement("img", {
						src: l,
						className: "walletconnect-modal__headerLogo"
					}), c.createElement("p", null, u), c.createElement("div", {
						className: "walletconnect-modal__close__wrapper",
						onClick: e.onClose
					}, c.createElement("div", {
						id: m,
						className: "walletconnect-modal__close__icon"
					}, c.createElement("div", {
						className: "walletconnect-modal__close__line1"
					}), c.createElement("div", {
						className: "walletconnect-modal__close__line2"
					}))))
				}

				function v(e) {
					return c.createElement("a", {
						className: "walletconnect-connect__button",
						href: e.href,
						id: y + "-" + e.name,
						onClick: e.onClick,
						rel: "noopener noreferrer",
						style: {
							backgroundColor: e.color
						},
						target: "_blank"
					}, e.name)
				}
				var b = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";

				function E(e) {
					var t = e.color,
						n = e.href,
						o = e.name,
						r = e.logo,
						i = e.onClick;
					return c.createElement("a", {
						className: "walletconnect-modal__base__row",
						href: n,
						onClick: i,
						rel: "noopener noreferrer",
						target: "_blank"
					}, c.createElement("h3", {
						className: "walletconnect-modal__base__row__h3"
					}, o), c.createElement("div", {
						className: "walletconnect-modal__base__row__right"
					}, c.createElement("div", {
						className: "walletconnect-modal__base__row__right__app-icon",
						style: {
							background: "url('" + r + "') " + t,
							backgroundSize: "100%"
						}
					}), c.createElement("img", {
						src: b,
						className: "walletconnect-modal__base__row__right__caret"
					})))
				}

				function R(e) {
					var t = e.color,
						n = e.href,
						o = e.name,
						r = e.logo,
						i = e.onClick,
						s = window.innerWidth < 768 ? (o.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
					return c.createElement("a", {
						className: "walletconnect-connect__button__icon_anchor",
						href: n,
						onClick: i,
						rel: "noopener noreferrer",
						target: "_blank"
					}, c.createElement("div", {
						className: "walletconnect-connect__button__icon",
						style: {
							background: "url('" + r + "') " + t,
							backgroundSize: "100%"
						}
					}), c.createElement("div", {
						style: {
							fontSize: s
						},
						className: "walletconnect-connect__button__text"
					}, o))
				}
				var S = 5,
					O = 12;

				function I(e) {
					var t = r.isAndroid(),
						n = c.useState(""),
						o = n[0],
						i = n[1],
						s = c.useState(""),
						a = s[0],
						l = s[1],
						u = c.useState(1),
						d = u[0],
						_ = u[1],
						h = a ? e.links.filter((function(e) {
							return e.name.toLowerCase().includes(a.toLowerCase())
						})) : e.links,
						p = e.errorMessage,
						m = a || h.length > S,
						y = Math.ceil(h.length / O),
						w = [(d - 1) * O + 1, d * O],
						b = h.length ? h.filter((function(e, t) {
							return t + 1 >= w[0] && t + 1 <= w[1]
						})) : [],
						I = !(t || !(y > 1)),
						x = void 0;
					return c.createElement("div", null, c.createElement("p", {
						id: g,
						className: "walletconnect-qrcode__text"
					}, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), !t && c.createElement("input", {
						className: "walletconnect-search__input",
						placeholder: "Search",
						value: o,
						onChange: function(e) {
							i(e.target.value), clearTimeout(x), e.target.value ? x = setTimeout((function() {
								l(e.target.value), _(1)
							}), 1e3) : (i(""), l(""), _(1))
						}
					}), c.createElement("div", {
						className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : m && h.length ? "__wrap" : "")
					}, t ? c.createElement(v, {
						name: e.text.connect,
						color: f,
						href: e.uri,
						onClick: c.useCallback((function() {
							r.saveMobileLinkInfo({
								name: "Unknown",
								href: e.uri
							})
						}), [])
					}) : b.length ? b.map((function(t) {
						var n = t.color,
							o = t.name,
							i = t.shortName,
							s = t.logo,
							a = r.formatIOSMobile(e.uri, t),
							l = c.useCallback((function() {
								r.saveMobileLinkInfo({
									name: o,
									href: a
								})
							}), [b]);
						return m ? c.createElement(R, {
							color: n,
							href: a,
							name: i || o,
							logo: s,
							onClick: l
						}) : c.createElement(E, {
							color: n,
							href: a,
							name: o,
							logo: s,
							onClick: l
						})
					})) : c.createElement(c.Fragment, null, c.createElement("p", null, p.length ? e.errorMessage : e.links.length && !h.length ? e.text.no_wallets_found : e.text.loading))), I && c.createElement("div", {
						className: "walletconnect-modal__footer"
					}, Array(y).fill(0).map((function(e, t) {
						var n = t + 1,
							o = d === n;
						return c.createElement("a", {
							style: {
								margin: "auto 10px",
								fontWeight: o ? "bold" : "normal"
							},
							onClick: function() {
								return _(n)
							}
						}, n)
					}))))
				}

				function x(e) {
					var t = !!e.message.trim();
					return c.createElement("div", {
						className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
					}, e.message)
				}
				var j = function(e) {
					try {
						var t = "";
						return Promise.resolve(i.toString(e, {
							margin: 0,
							type: "svg"
						})).then((function(e) {
							return "string" == typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t
						}))
					} catch (n) {
						return Promise.reject(n)
					}
				};

				function C(e) {
					var t = c.useState(""),
						n = t[0],
						o = t[1],
						r = c.useState(""),
						i = r[0],
						a = r[1];
					c.useEffect((function() {
						try {
							return Promise.resolve(j(e.uri)).then((function(e) {
								a(e)
							}))
						} catch (t) {
							Promise.reject(t)
						}
					}), []);
					return c.createElement("div", null, c.createElement("p", {
						id: g,
						className: "walletconnect-qrcode__text"
					}, e.text.scan_qrcode_with_wallet), c.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: i
						}
					}), c.createElement("div", {
						className: "walletconnect-modal__footer"
					}, c.createElement("a", {
						onClick: function() {
							s(e.uri) ? (o(e.text.copied_to_clipboard), setInterval((function() {
								return o("")
							}), 1200)) : (o("Error"), setInterval((function() {
								return o("")
							}), 1200))
						}
					}, e.text.copy_to_clipboard)), c.createElement(x, {
						message: n
					}))
				}

				function k(e) {
					var t = r.isAndroid(),
						n = r.isMobile(),
						o = n ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0,
						i = c.useState(!1),
						s = i[0],
						a = i[1],
						l = c.useState(!1),
						u = l[0],
						d = l[1],
						f = c.useState(!n),
						_ = f[0],
						h = f[1],
						m = {
							mobile: n,
							text: e.text,
							uri: e.uri,
							qrcodeModalOptions: e.qrcodeModalOptions
						},
						g = c.useState(""),
						y = g[0],
						v = g[1],
						b = c.useState(!1),
						E = b[0],
						R = b[1],
						S = c.useState([]),
						O = S[0],
						x = S[1],
						j = c.useState(""),
						k = j[0],
						N = j[1],
						T = function() {
							u || s || o && !o.length || O.length > 0 || c.useEffect((function() {
								! function() {
									try {
										if (t) return Promise.resolve();
										a(!0);
										var i = function(e, t) {
											try {
												var n = e()
											} catch (o) {
												return t(o)
											}
											return n && n.then ? n.then(void 0, t) : n
										}((function() {
											var t = e.qrcodeModalOptions && e.qrcodeModalOptions.registryUrl ? e.qrcodeModalOptions.registryUrl : r.getWalletRegistryUrl();
											return Promise.resolve(fetch(t)).then((function(t) {
												return Promise.resolve(t.json()).then((function(t) {
													var i = t.listings,
														s = n ? "mobile" : "desktop",
														c = r.getMobileLinkRegistry(r.formatMobileRegistry(i, s), o);
													a(!1), d(!0), N(c.length ? "" : e.text.no_supported_wallets), x(c);
													var l = 1 === c.length;
													l && (v(r.formatIOSMobile(e.uri, c[0])), h(!0)), R(l)
												}))
											}))
										}), (function(t) {
											a(!1), d(!0), N(e.text.something_went_wrong), console.error(t)
										}));
										Promise.resolve(i && i.then ? i.then((function() {})) : void 0)
									} catch (s) {
										return Promise.reject(s)
									}
								}()
							}))
						};
					T();
					var M = n ? _ : !_;
					return c.createElement("div", {
						id: p,
						className: "walletconnect-qrcode__base animated fadeIn"
					}, c.createElement("div", {
						className: "walletconnect-modal__base"
					}, c.createElement(w, {
						onClose: e.onClose
					}), E && _ ? c.createElement("div", {
						className: "walletconnect-modal__single_wallet"
					}, c.createElement("a", {
						onClick: function() {
							return r.saveMobileLinkInfo({
								name: O[0].name,
								href: y
							})
						},
						href: y,
						rel: "noopener noreferrer",
						target: "_blank"
					}, e.text.connect_with + " " + (E ? O[0].name : "") + " ›")) : t || s || !s && O.length ? c.createElement("div", {
						className: "walletconnect-modal__mobile__toggle" + (M ? " right__selected" : "")
					}, c.createElement("div", {
						className: "walletconnect-modal__mobile__toggle_selector"
					}), n ? c.createElement(c.Fragment, null, c.createElement("a", {
						onClick: function() {
							return h(!1), T()
						}
					}, e.text.mobile), c.createElement("a", {
						onClick: function() {
							return h(!0)
						}
					}, e.text.qrcode)) : c.createElement(c.Fragment, null, c.createElement("a", {
						onClick: function() {
							return h(!0)
						}
					}, e.text.qrcode), c.createElement("a", {
						onClick: function() {
							return h(!1), T()
						}
					}, e.text.desktop))) : null, c.createElement("div", null, _ || !t && !s && !O.length ? c.createElement(C, Object.assign({}, m)) : c.createElement(I, Object.assign({}, m, {
						links: O,
						errorMessage: k
					})))))
				}
				var N = {
					de: {
						choose_preferred_wallet: "Wähle bevorzugte Wallet",
						connect_mobile_wallet: "Verbinde mit Mobile Wallet",
						scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
						connect: "Verbinden",
						qrcode: "QR-Code",
						mobile: "Mobile",
						desktop: "Desktop",
						copy_to_clipboard: "In die Zwischenablage kopieren",
						copied_to_clipboard: "In die Zwischenablage kopiert!",
						connect_with: "Verbinden mit Hilfe von",
						loading: "Laden...",
						something_went_wrong: "Etwas ist schief gelaufen",
						no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
						no_wallets_found: "keine Wallet gefunden"
					},
					en: {
						choose_preferred_wallet: "Choose your preferred wallet",
						connect_mobile_wallet: "Connect to Mobile Wallet",
						scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
						connect: "Connect",
						qrcode: "QR Code",
						mobile: "Mobile",
						desktop: "Desktop",
						copy_to_clipboard: "Copy to clipboard",
						copied_to_clipboard: "Copied to clipboard!",
						connect_with: "Connect with",
						loading: "Loading...",
						something_went_wrong: "Something went wrong",
						no_supported_wallets: "There are no supported wallets yet",
						no_wallets_found: "No wallets found"
					},
					es: {
						choose_preferred_wallet: "Elige tu billetera preferida",
						connect_mobile_wallet: "Conectar a billetera móvil",
						scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
						connect: "Conectar",
						qrcode: "Código QR",
						mobile: "Móvil",
						desktop: "Desktop",
						copy_to_clipboard: "Copiar",
						copied_to_clipboard: "Copiado!",
						connect_with: "Conectar mediante",
						loading: "Cargando...",
						something_went_wrong: "Algo salió mal",
						no_supported_wallets: "Todavía no hay billeteras compatibles",
						no_wallets_found: "No se encontraron billeteras"
					},
					fr: {
						choose_preferred_wallet: "Choisissez votre portefeuille préféré",
						connect_mobile_wallet: "Se connecter au portefeuille mobile",
						scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
						connect: "Se connecter",
						qrcode: "QR Code",
						mobile: "Mobile",
						desktop: "Desktop",
						copy_to_clipboard: "Copier",
						copied_to_clipboard: "Copié!",
						connect_with: "Connectez-vous à l'aide de",
						loading: "Chargement...",
						something_went_wrong: "Quelque chose a mal tourné",
						no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
						no_wallets_found: "Aucun portefeuille trouvé"
					},
					ko: {
						choose_preferred_wallet: "원하는 지갑을 선택하세요",
						connect_mobile_wallet: "모바일 지갑과 연결",
						scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
						connect: "연결",
						qrcode: "QR 코드",
						mobile: "모바일",
						desktop: "데스크탑",
						copy_to_clipboard: "클립보드에 복사",
						copied_to_clipboard: "클립보드에 복사되었습니다!",
						connect_with: "와 연결하다",
						loading: "로드 중...",
						something_went_wrong: "문제가 발생했습니다.",
						no_supported_wallets: "아직 지원되는 지갑이 없습니다",
						no_wallets_found: "지갑을 찾을 수 없습니다"
					},
					pt: {
						choose_preferred_wallet: "Escolha sua carteira preferida",
						connect_mobile_wallet: "Conectar-se à carteira móvel",
						scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
						connect: "Conectar",
						qrcode: "Código QR",
						mobile: "Móvel",
						desktop: "Desktop",
						copy_to_clipboard: "Copiar",
						copied_to_clipboard: "Copiado!",
						connect_with: "Ligar por meio de",
						loading: "Carregamento...",
						something_went_wrong: "Algo correu mal",
						no_supported_wallets: "Ainda não há carteiras suportadas",
						no_wallets_found: "Nenhuma carteira encontrada"
					},
					zh: {
						choose_preferred_wallet: "选择你的钱包",
						connect_mobile_wallet: "连接至移动端钱包",
						scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
						connect: "连接",
						qrcode: "二维码",
						mobile: "移动",
						desktop: "桌面",
						copy_to_clipboard: "复制到剪贴板",
						copied_to_clipboard: "复制到剪贴板成功！",
						connect_with: "通过以下方式连接",
						loading: "正在加载...",
						something_went_wrong: "出了问题",
						no_supported_wallets: "目前还没有支持的钱包",
						no_wallets_found: "没有找到钱包"
					},
					fa: {
						choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
						connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
						scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
						connect: "اتصال",
						qrcode: "کد QR",
						mobile: "سیار",
						desktop: "دسکتاپ",
						copy_to_clipboard: "کپی به کلیپ بورد",
						copied_to_clipboard: "در کلیپ بورد کپی شد!",
						connect_with: "ارتباط با",
						loading: "...بارگذاری",
						something_went_wrong: "مشکلی پیش آمد",
						no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
						no_wallets_found: "هیچ کیف پولی پیدا نشد"
					}
				};

				function T() {
					var e = r.getDocumentOrThrow(),
						t = e.getElementById(p);
					t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
						var t = e.getElementById(_);
						t && e.body.removeChild(t)
					}), d))
				}

				function M(e) {
					return function() {
						T(), e && e()
					}
				}

				function A(e, t, n) {
					! function() {
						var e = r.getDocumentOrThrow(),
							t = e.getElementById(h);
						t && e.head.removeChild(t);
						var n = e.createElement("style");
						n.setAttribute("id", h), n.innerText = a, e.head.appendChild(n)
					}();
					var o, i = function() {
						var e = r.getDocumentOrThrow(),
							t = e.createElement("div");
						return t.setAttribute("id", _), e.body.appendChild(t), t
					}();
					c.render(c.createElement(k, {
						text: (o = r.getNavigatorOrThrow().language.split("-")[0] || "en", N[o] || N.en),
						uri: e,
						onClose: M(t),
						qrcodeModalOptions: n
					}), i)
				}
				var L = function() {
					return void 0 !== t && void 0 !== t.versions && void 0 !== t.versions.node
				};
				var q = {
					open: function(e, t, n) {
						console.log(e), L() ? function(e) {
							i.toString(e, {
								type: "terminal"
							}).then(console.log)
						}(e) : A(e, t, n)
					},
					close: function() {
						L() || T()
					}
				};
				e.exports = q
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/preact/compat/dist/compat.module.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Component", (function() {
				return b
			})), n.d(t, "Fragment", (function() {
				return v
			})), n.d(t, "createContext", (function() {
				return F
			})), n.d(t, "createElement", (function() {
				return g
			})), n.d(t, "createRef", (function() {
				return w
			})), n.d(t, "useCallback", (function() {
				return de
			})), n.d(t, "useContext", (function() {
				return fe
			})), n.d(t, "useDebugValue", (function() {
				return _e
			})), n.d(t, "useEffect", (function() {
				return se
			})), n.d(t, "useErrorBoundary", (function() {
				return he
			})), n.d(t, "useId", (function() {
				return pe
			})), n.d(t, "useImperativeHandle", (function() {
				return le
			})), n.d(t, "useLayoutEffect", (function() {
				return ce
			})), n.d(t, "useMemo", (function() {
				return ue
			})), n.d(t, "useReducer", (function() {
				return ie
			})), n.d(t, "useRef", (function() {
				return ae
			})), n.d(t, "useState", (function() {
				return re
			})), n.d(t, "Children", (function() {
				return Te
			})), n.d(t, "PureComponent", (function() {
				return Ie
			})), n.d(t, "StrictMode", (function() {
				return pt
			})), n.d(t, "Suspense", (function() {
				return Le
			})), n.d(t, "SuspenseList", (function() {
				return De
			})), n.d(t, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", (function() {
				return st
			})), n.d(t, "cloneElement", (function() {
				return ut
			})), n.d(t, "createFactory", (function() {
				return at
			})), n.d(t, "createPortal", (function() {
				return Je
			})), n.d(t, "default", (function() {
				return bt
			})), n.d(t, "findDOMNode", (function() {
				return ft
			})), n.d(t, "flushSync", (function() {
				return ht
			})), n.d(t, "forwardRef", (function() {
				return ke
			})), n.d(t, "hydrate", (function() {
				return Ke
			})), n.d(t, "isValidElement", (function() {
				return lt
			})), n.d(t, "lazy", (function() {
				return Pe
			})), n.d(t, "memo", (function() {
				return xe
			})), n.d(t, "render", (function() {
				return Ge
			})), n.d(t, "startTransition", (function() {
				return mt
			})), n.d(t, "unmountComponentAtNode", (function() {
				return dt
			})), n.d(t, "unstable_batchedUpdates", (function() {
				return _t
			})), n.d(t, "useDeferredValue", (function() {
				return gt
			})), n.d(t, "useInsertionEffect", (function() {
				return wt
			})), n.d(t, "useSyncExternalStore", (function() {
				return vt
			})), n.d(t, "useTransition", (function() {
				return yt
			})), n.d(t, "version", (function() {
				return ct
			}));
			var o, r, i, s, c, a, l, u, d = {},
				f = [],
				_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
				h = Array.isArray;

			function p(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}

			function m(e) {
				var t = e.parentNode;
				t && t.removeChild(e)
			}

			function g(e, t, n) {
				var r, i, s, c = {};
				for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : c[s] = t[s];
				if (arguments.length > 2 && (c.children = arguments.length > 3 ? o.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
					for (s in e.defaultProps) void 0 === c[s] && (c[s] = e.defaultProps[s]);
				return y(e, c, r, i, null)
			}

			function y(e, t, n, o, s) {
				var c = {
					type: e,
					props: t,
					key: n,
					ref: o,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: null == s ? ++i : s
				};
				return null == s && null != r.vnode && r.vnode(c), c
			}

			function w() {
				return {
					current: null
				}
			}

			function v(e) {
				return e.children
			}

			function b(e, t) {
				this.props = e, this.context = t
			}

			function E(e, t) {
				if (null == t) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
				for (var n; t < e.__k.length; t++)
					if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
				return "function" == typeof e.type ? E(e) : null
			}

			function R(e) {
				var t, n;
				if (null != (e = e.__) && null != e.__c) {
					for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
						if (null != (n = e.__k[t]) && null != n.__e) {
							e.__e = e.__c.base = n.__e;
							break
						} return R(e)
				}
			}

			function S(e) {
				(!e.__d && (e.__d = !0) && s.push(e) && !O.__r++ || c !== r.debounceRendering) && ((c = r.debounceRendering) || a)(O)
			}

			function O() {
				var e, t, n, o, r, i, c, a;
				for (s.sort(l); e = s.shift();) e.__d && (t = s.length, o = void 0, r = void 0, c = (i = (n = e).__v).__e, (a = n.__P) && (o = [], (r = p({}, i)).__v = i.__v + 1, L(a, i, r, n.__n, void 0 !== a.ownerSVGElement, null != i.__h ? [c] : null, o, null == c ? E(i) : c, i.__h), q(o, i), i.__e != c && R(i)), s.length > t && s.sort(l));
				O.__r = 0
			}

			function I(e, t, n, o, r, i, s, c, a, l) {
				var u, _, p, m, g, w, b, R = o && o.__k || f,
					S = R.length;
				for (n.__k = [], u = 0; u < t.length; u++)
					if (null != (m = n.__k[u] = null == (m = t[u]) || "boolean" == typeof m || "function" == typeof m ? null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? y(null, m, null, null, m) : h(m) ? y(v, {
							children: m
						}, null, null, null) : m.__b > 0 ? y(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m)) {
						if (m.__ = n, m.__b = n.__b + 1, null === (p = R[u]) || p && m.key == p.key && m.type === p.type) R[u] = void 0;
						else
							for (_ = 0; _ < S; _++) {
								if ((p = R[_]) && m.key == p.key && m.type === p.type) {
									R[_] = void 0;
									break
								}
								p = null
							}
						L(e, m, p = p || d, r, i, s, c, a, l), g = m.__e, (_ = m.ref) && p.ref != _ && (b || (b = []), p.ref && b.push(p.ref, null, m), b.push(_, m.__c || g, m)), null != g ? (null == w && (w = g), "function" == typeof m.type && m.__k === p.__k ? m.__d = a = x(m, a, e) : a = C(e, m, p, R, g, a), "function" == typeof n.type && (n.__d = a)) : a && p.__e == a && a.parentNode != e && (a = E(p))
					} for (n.__e = w, u = S; u--;) null != R[u] && ("function" == typeof n.type && null != R[u].__e && R[u].__e == n.__d && (n.__d = k(o).nextSibling), U(R[u], R[u]));
				if (b)
					for (u = 0; u < b.length; u++) D(b[u], b[++u], b[++u])
			}

			function x(e, t, n) {
				for (var o, r = e.__k, i = 0; r && i < r.length; i++)(o = r[i]) && (o.__ = e, t = "function" == typeof o.type ? x(o, t, n) : C(n, o, o, r, o.__e, t));
				return t
			}

			function j(e, t) {
				return t = t || [], null == e || "boolean" == typeof e || (h(e) ? e.some((function(e) {
					j(e, t)
				})) : t.push(e)), t
			}

			function C(e, t, n, o, r, i) {
				var s, c, a;
				if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
				else if (null == n || r != i || null == r.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(r), s = null;
					else {
						for (c = i, a = 0;
							(c = c.nextSibling) && a < o.length; a += 1)
							if (c == r) break e;
						e.insertBefore(r, i), s = i
					} return void 0 !== s ? s : r.nextSibling
			}

			function k(e) {
				var t, n, o;
				if (null == e.type || "string" == typeof e.type) return e.__e;
				if (e.__k)
					for (t = e.__k.length - 1; t >= 0; t--)
						if ((n = e.__k[t]) && (o = k(n))) return o;
				return null
			}

			function N(e, t, n) {
				"-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || _.test(t) ? n : n + "px"
			}

			function T(e, t, n, o, r) {
				var i;
				e: if ("style" === t)
					if ("string" == typeof n) e.style.cssText = n;
					else {
						if ("string" == typeof o && (e.style.cssText = o = ""), o)
							for (t in o) n && t in n || N(e.style, t, "");
						if (n)
							for (t in n) o && n[t] === o[t] || N(e.style, t, n[t])
					}
				else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o || e.addEventListener(t, i ? A : M, i) : e.removeEventListener(t, i ? A : M, i);
				else if ("dangerouslySetInnerHTML" !== t) {
					if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
					else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && t in e) try {
						e[t] = null == n ? "" : n;
						break e
					} catch (e) {}
					"function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
				}
			}

			function M(e) {
				return this.l[e.type + !1](r.event ? r.event(e) : e)
			}

			function A(e) {
				return this.l[e.type + !0](r.event ? r.event(e) : e)
			}

			function L(e, t, n, o, i, s, c, a, l) {
				var u, d, f, _, m, g, y, w, E, R, S, O, x, j, C, k = t.type;
				if (void 0 !== t.constructor) return null;
				null != n.__h && (l = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (u = r.__b) && u(t);
				try {
					e: if ("function" == typeof k) {
						if (w = t.props, E = (u = k.contextType) && o[u.__c], R = u ? E ? E.props.value : u.__ : o, n.__c ? y = (d = t.__c = n.__c).__ = d.__E : ("prototype" in k && k.prototype.render ? t.__c = d = new k(w, R) : (t.__c = d = new b(w, R), d.constructor = k, d.render = B), E && E.sub(d), d.props = w, d.state || (d.state = {}), d.context = R, d.__n = o, f = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != k.getDerivedStateFromProps && (d.__s == d.state && (d.__s = p({}, d.__s)), p(d.__s, k.getDerivedStateFromProps(w, d.__s))), _ = d.props, m = d.state, d.__v = t, f) null == k.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
						else {
							if (null == k.getDerivedStateFromProps && w !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(w, R), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(w, d.__s, R) || t.__v === n.__v) {
								for (t.__v !== n.__v && (d.props = w, d.state = d.__s, d.__d = !1), d.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
										e && (e.__ = t)
									})), S = 0; S < d._sb.length; S++) d.__h.push(d._sb[S]);
								d._sb = [], d.__h.length && c.push(d);
								break e
							}
							null != d.componentWillUpdate && d.componentWillUpdate(w, d.__s, R), null != d.componentDidUpdate && d.__h.push((function() {
								d.componentDidUpdate(_, m, g)
							}))
						}
						if (d.context = R, d.props = w, d.__P = e, O = r.__r, x = 0, "prototype" in k && k.prototype.render) {
							for (d.state = d.__s, d.__d = !1, O && O(t), u = d.render(d.props, d.state, d.context), j = 0; j < d._sb.length; j++) d.__h.push(d._sb[j]);
							d._sb = []
						} else
							do {
								d.__d = !1, O && O(t), u = d.render(d.props, d.state, d.context), d.state = d.__s
							} while (d.__d && ++x < 25);
						d.state = d.__s, null != d.getChildContext && (o = p(p({}, o), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(_, m)), I(e, h(C = null != u && u.type === v && null == u.key ? u.props.children : u) ? C : [C], t, n, o, i, s, c, a, l), d.base = t.__e, t.__h = null, d.__h.length && c.push(d), y && (d.__E = d.__ = null), d.__e = !1
					} else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = P(n.__e, t, n, o, i, s, c, l);
					(u = r.diffed) && u(t)
				}
				catch (e) {
					t.__v = null, (l || null != s) && (t.__e = a, t.__h = !!l, s[s.indexOf(a)] = null), r.__e(e, t, n)
				}
			}

			function q(e, t) {
				r.__c && r.__c(t, e), e.some((function(t) {
					try {
						e = t.__h, t.__h = [], e.some((function(e) {
							e.call(t)
						}))
					} catch (e) {
						r.__e(e, t.__v)
					}
				}))
			}

			function P(e, t, n, r, i, s, c, a) {
				var l, u, f, _ = n.props,
					p = t.props,
					g = t.type,
					y = 0;
				if ("svg" === g && (i = !0), null != s)
					for (; y < s.length; y++)
						if ((l = s[y]) && "setAttribute" in l == !!g && (g ? l.localName === g : 3 === l.nodeType)) {
							e = l, s[y] = null;
							break
						} if (null == e) {
					if (null === g) return document.createTextNode(p);
					e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), s = null, a = !1
				}
				if (null === g) _ === p || a && e.data === p || (e.data = p);
				else {
					if (s = s && o.call(e.childNodes), u = (_ = n.props || d).dangerouslySetInnerHTML, f = p.dangerouslySetInnerHTML, !a) {
						if (null != s)
							for (_ = {}, y = 0; y < e.attributes.length; y++) _[e.attributes[y].name] = e.attributes[y].value;
						(f || u) && (f && (u && f.__html == u.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
					}
					if (function(e, t, n, o, r) {
							var i;
							for (i in n) "children" === i || "key" === i || i in t || T(e, i, null, n[i], o);
							for (i in t) r && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || T(e, i, t[i], n[i], o)
						}(e, p, _, i, a), f) t.__k = [];
					else if (I(e, h(y = t.props.children) ? y : [y], t, n, r, i && "foreignObject" !== g, s, c, s ? s[0] : n.__k && E(n, 0), a), null != s)
						for (y = s.length; y--;) null != s[y] && m(s[y]);
					a || ("value" in p && void 0 !== (y = p.value) && (y !== e.value || "progress" === g && !y || "option" === g && y !== _.value) && T(e, "value", y, _.value, !1), "checked" in p && void 0 !== (y = p.checked) && y !== e.checked && T(e, "checked", y, _.checked, !1))
				}
				return e
			}

			function D(e, t, n) {
				try {
					"function" == typeof e ? e(t) : e.current = t
				} catch (e) {
					r.__e(e, n)
				}
			}

			function U(e, t, n) {
				var o, i;
				if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || D(o, null, t)), null != (o = e.__c)) {
					if (o.componentWillUnmount) try {
						o.componentWillUnmount()
					} catch (e) {
						r.__e(e, t)
					}
					o.base = o.__P = null, e.__c = void 0
				}
				if (o = e.__k)
					for (i = 0; i < o.length; i++) o[i] && U(o[i], t, n || "function" != typeof e.type);
				n || null == e.__e || m(e.__e), e.__ = e.__e = e.__d = void 0
			}

			function B(e, t, n) {
				return this.constructor(e, n)
			}

			function H(e, t, n) {
				var i, s, c;
				r.__ && r.__(e, t), s = (i = "function" == typeof n) ? null : n && n.__k || t.__k, c = [], L(t, e = (!i && n || t).__k = g(v, null, [e]), s || d, d, void 0 !== t.ownerSVGElement, !i && n ? [n] : s ? null : t.firstChild ? o.call(t.childNodes) : null, c, !i && n ? n : s ? s.__e : t.firstChild, i), q(c, e)
			}

			function J(e, t) {
				H(e, t, J)
			}

			function W(e, t, n) {
				var r, i, s, c, a = p({}, e.props);
				for (s in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s];
				return arguments.length > 2 && (a.children = arguments.length > 3 ? o.call(arguments, 2) : n), y(e.type, a, r || e.key, i || e.ref, null)
			}

			function F(e, t) {
				var n = {
					__c: t = "__cC" + u++,
					__: e,
					Consumer: function(e, t) {
						return e.children(t)
					},
					Provider: function(e) {
						var n, o;
						return this.getChildContext || (n = [], (o = {})[t] = this, this.getChildContext = function() {
							return o
						}, this.shouldComponentUpdate = function(e) {
							this.props.value !== e.value && n.some((function(e) {
								e.__e = !0, S(e)
							}))
						}, this.sub = function(e) {
							n.push(e);
							var t = e.componentWillUnmount;
							e.componentWillUnmount = function() {
								n.splice(n.indexOf(e), 1), t && t.call(e)
							}
						}), e.children
					}
				};
				return n.Provider.__ = n.Consumer.contextType = n
			}
			o = f.slice, r = {
				__e: function(e, t, n, o) {
					for (var r, i, s; t = t.__;)
						if ((r = t.__c) && !r.__) try {
							if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(e)), s = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), s = r.__d), s) return r.__E = r
						} catch (t) {
							e = t
						}
					throw e
				}
			}, i = 0, b.prototype.setState = function(e, t) {
				var n;
				n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(p({}, n), this.props)), e && p(n, e), null != e && this.__v && (t && this._sb.push(t), S(this))
			}, b.prototype.forceUpdate = function(e) {
				this.__v && (this.__e = !0, e && this.__h.push(e), S(this))
			}, b.prototype.render = v, s = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, l = function(e, t) {
				return e.__v.__b - t.__v.__b
			}, O.__r = 0, u = 0;
			var z, V, $, Q, G = 0,
				K = [],
				Y = [],
				Z = r.__b,
				X = r.__r,
				ee = r.diffed,
				te = r.__c,
				ne = r.unmount;

			function oe(e, t) {
				r.__h && r.__h(V, e, G || t), G = 0;
				var n = V.__H || (V.__H = {
					__: [],
					__h: []
				});
				return e >= n.__.length && n.__.push({
					__V: Y
				}), n.__[e]
			}

			function re(e) {
				return G = 1, ie(Ee, e)
			}

			function ie(e, t, n) {
				var o = oe(z++, 2);
				if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Ee(void 0, t), function(e) {
						var t = o.__N ? o.__N[0] : o.__[0],
							n = o.t(t, e);
						t !== n && (o.__N = [n, o.__[1]], o.__c.setState({}))
					}], o.__c = V, !V.u)) {
					var r = function(e, t, n) {
						if (!o.__c.__H) return !0;
						var r = o.__c.__H.__.filter((function(e) {
							return e.__c
						}));
						if (r.every((function(e) {
								return !e.__N
							}))) return !i || i.call(this, e, t, n);
						var s = !1;
						return r.forEach((function(e) {
							if (e.__N) {
								var t = e.__[0];
								e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0)
							}
						})), !(!s && o.__c.props === e) && (!i || i.call(this, e, t, n))
					};
					V.u = !0;
					var i = V.shouldComponentUpdate,
						s = V.componentWillUpdate;
					V.componentWillUpdate = function(e, t, n) {
						if (this.__e) {
							var o = i;
							i = void 0, r(e, t, n), i = o
						}
						s && s.call(this, e, t, n)
					}, V.shouldComponentUpdate = r
				}
				return o.__N || o.__
			}

			function se(e, t) {
				var n = oe(z++, 3);
				!r.__s && be(n.__H, t) && (n.__ = e, n.i = t, V.__H.__h.push(n))
			}

			function ce(e, t) {
				var n = oe(z++, 4);
				!r.__s && be(n.__H, t) && (n.__ = e, n.i = t, V.__h.push(n))
			}

			function ae(e) {
				return G = 5, ue((function() {
					return {
						current: e
					}
				}), [])
			}

			function le(e, t, n) {
				G = 6, ce((function() {
					return "function" == typeof e ? (e(t()), function() {
						return e(null)
					}) : e ? (e.current = t(), function() {
						return e.current = null
					}) : void 0
				}), null == n ? n : n.concat(e))
			}

			function ue(e, t) {
				var n = oe(z++, 7);
				return be(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
			}

			function de(e, t) {
				return G = 8, ue((function() {
					return e
				}), t)
			}

			function fe(e) {
				var t = V.context[e.__c],
					n = oe(z++, 9);
				return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(V)), t.props.value) : e.__
			}

			function _e(e, t) {
				r.useDebugValue && r.useDebugValue(t ? t(e) : e)
			}

			function he(e) {
				var t = oe(z++, 10),
					n = re();
				return t.__ = e, V.componentDidCatch || (V.componentDidCatch = function(e, o) {
					t.__ && t.__(e, o), n[1](e)
				}), [n[0], function() {
					n[1](void 0)
				}]
			}

			function pe() {
				var e = oe(z++, 11);
				if (!e.__) {
					for (var t = V.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
					var n = t.__m || (t.__m = [0, 0]);
					e.__ = "P" + n[0] + "-" + n[1]++
				}
				return e.__
			}

			function me() {
				for (var e; e = K.shift();)
					if (e.__P && e.__H) try {
						e.__H.__h.forEach(we), e.__H.__h.forEach(ve), e.__H.__h = []
					} catch (t) {
						e.__H.__h = [], r.__e(t, e.__v)
					}
			}
			r.__b = function(e) {
				V = null, Z && Z(e)
			}, r.__r = function(e) {
				X && X(e), z = 0;
				var t = (V = e.__c).__H;
				t && ($ === V ? (t.__h = [], V.__h = [], t.__.forEach((function(e) {
					e.__N && (e.__ = e.__N), e.__V = Y, e.__N = e.i = void 0
				}))) : (t.__h.forEach(we), t.__h.forEach(ve), t.__h = [], z = 0)), $ = V
			}, r.diffed = function(e) {
				ee && ee(e);
				var t = e.__c;
				t && t.__H && (t.__H.__h.length && (1 !== K.push(t) && Q === r.requestAnimationFrame || ((Q = r.requestAnimationFrame) || ye)(me)), t.__H.__.forEach((function(e) {
					e.i && (e.__H = e.i), e.__V !== Y && (e.__ = e.__V), e.i = void 0, e.__V = Y
				}))), $ = V = null
			}, r.__c = function(e, t) {
				t.some((function(e) {
					try {
						e.__h.forEach(we), e.__h = e.__h.filter((function(e) {
							return !e.__ || ve(e)
						}))
					} catch (n) {
						t.some((function(e) {
							e.__h && (e.__h = [])
						})), t = [], r.__e(n, e.__v)
					}
				})), te && te(e, t)
			}, r.unmount = function(e) {
				ne && ne(e);
				var t, n = e.__c;
				n && n.__H && (n.__H.__.forEach((function(e) {
					try {
						we(e)
					} catch (e) {
						t = e
					}
				})), n.__H = void 0, t && r.__e(t, n.__v))
			};
			var ge = "function" == typeof requestAnimationFrame;

			function ye(e) {
				var t, n = function() {
						clearTimeout(o), ge && cancelAnimationFrame(t), setTimeout(e)
					},
					o = setTimeout(n, 100);
				ge && (t = requestAnimationFrame(n))
			}

			function we(e) {
				var t = V,
					n = e.__c;
				"function" == typeof n && (e.__c = void 0, n()), V = t
			}

			function ve(e) {
				var t = V;
				e.__c = e.__(), V = t
			}

			function be(e, t) {
				return !e || e.length !== t.length || t.some((function(t, n) {
					return t !== e[n]
				}))
			}

			function Ee(e, t) {
				return "function" == typeof t ? t(e) : t
			}

			function Re(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}

			function Se(e, t) {
				for (var n in e)
					if ("__source" !== n && !(n in t)) return !0;
				for (var o in t)
					if ("__source" !== o && e[o] !== t[o]) return !0;
				return !1
			}

			function Oe(e, t) {
				return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
			}

			function Ie(e) {
				this.props = e
			}

			function xe(e, t) {
				function n(e) {
					var n = this.props.ref,
						o = n == e.ref;
					return !o && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !o : Se(this.props, e)
				}

				function o(t) {
					return this.shouldComponentUpdate = n, g(e, t)
				}
				return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o
			}(Ie.prototype = new b).isPureReactComponent = !0, Ie.prototype.shouldComponentUpdate = function(e, t) {
				return Se(this.props, e) || Se(this.state, t)
			};
			var je = r.__b;
			r.__b = function(e) {
				e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), je && je(e)
			};
			var Ce = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

			function ke(e) {
				function t(t) {
					var n = Re({}, t);
					return delete n.ref, e(n, t.ref || null)
				}
				return t.$$typeof = Ce, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
			}
			var Ne = function(e, t) {
					return null == e ? null : j(j(e).map(t))
				},
				Te = {
					map: Ne,
					forEach: Ne,
					count: function(e) {
						return e ? j(e).length : 0
					},
					only: function(e) {
						var t = j(e);
						if (1 !== t.length) throw "Children.only";
						return t[0]
					},
					toArray: j
				},
				Me = r.__e;
			r.__e = function(e, t, n, o) {
				if (e.then)
					for (var r, i = t; i = i.__;)
						if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
				Me(e, t, n, o)
			};
			var Ae = r.unmount;

			function Le() {
				this.__u = 0, this.t = null, this.__b = null
			}

			function qe(e) {
				var t = e.__.__c;
				return t && t.__a && t.__a(e)
			}

			function Pe(e) {
				var t, n, o;

				function r(r) {
					if (t || (t = e()).then((function(e) {
							n = e.default || e
						}), (function(e) {
							o = e
						})), o) throw o;
					if (!n) throw t;
					return g(n, r)
				}
				return r.displayName = "Lazy", r.__f = !0, r
			}

			function De() {
				this.u = null, this.o = null
			}
			r.unmount = function(e) {
				var t = e.__c;
				t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ae && Ae(e)
			}, (Le.prototype = new b).__c = function(e, t) {
				var n = t.__c,
					o = this;
				null == o.t && (o.t = []), o.t.push(n);
				var r = qe(o.__v),
					i = !1,
					s = function() {
						i || (i = !0, n.__R = null, r ? r(c) : c())
					};
				n.__R = s;
				var c = function() {
						if (!--o.__u) {
							if (o.state.__a) {
								var e = o.state.__a;
								o.__v.__k[0] = function e(t, n, o) {
									return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
										return e(t, n, o)
									})), t.__c && t.__c.__P === n && (t.__e && o.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = o)), t
								}(e, e.__c.__P, e.__c.__O)
							}
							var t;
							for (o.setState({
									__a: o.__b = null
								}); t = o.t.pop();) t.forceUpdate()
						}
					},
					a = !0 === t.__h;
				o.__u++ || a || o.setState({
					__a: o.__b = o.__v.__k[0]
				}), e.then(s, s)
			}, Le.prototype.componentWillUnmount = function() {
				this.t = []
			}, Le.prototype.render = function(e, t) {
				if (this.__b) {
					if (this.__v.__k) {
						var n = document.createElement("div"),
							o = this.__v.__k[0].__c;
						this.__v.__k[0] = function e(t, n, o) {
							return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
								"function" == typeof e.__c && e.__c()
							})), t.__c.__H = null), null != (t = Re({}, t)).__c && (t.__c.__P === o && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
								return e(t, n, o)
							}))), t
						}(this.__b, n, o.__O = o.__P)
					}
					this.__b = null
				}
				var r = t.__a && g(v, null, e.fallback);
				return r && (r.__h = null), [g(v, null, t.__a ? null : e.children), r]
			};
			var Ue = function(e, t, n) {
				if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
					for (n = e.u; n;) {
						for (; n.length > 3;) n.pop()();
						if (n[1] < n[0]) break;
						e.u = n = n[2]
					}
			};

			function Be(e) {
				return this.getChildContext = function() {
					return e.context
				}, e.children
			}

			function He(e) {
				var t = this,
					n = e.i;
				t.componentWillUnmount = function() {
					H(null, t.l), t.l = null, t.i = null
				}, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
					nodeType: 1,
					parentNode: n,
					childNodes: [],
					appendChild: function(e) {
						this.childNodes.push(e), t.i.appendChild(e)
					},
					insertBefore: function(e, n) {
						this.childNodes.push(e), t.i.appendChild(e)
					},
					removeChild: function(e) {
						this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
					}
				}), H(g(Be, {
					context: t.context
				}, e.__v), t.l)) : t.l && t.componentWillUnmount()
			}

			function Je(e, t) {
				var n = g(He, {
					__v: e,
					i: t
				});
				return n.containerInfo = t, n
			}(De.prototype = new b).__a = function(e) {
				var t = this,
					n = qe(t.__v),
					o = t.o.get(e);
				return o[0]++,
					function(r) {
						var i = function() {
							t.props.revealOrder ? (o.push(r), Ue(t, e, o)) : r()
						};
						n ? n(i) : i()
					}
			}, De.prototype.render = function(e) {
				this.u = null, this.o = new Map;
				var t = j(e.children);
				e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
				for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
				return e.children
			}, De.prototype.componentDidUpdate = De.prototype.componentDidMount = function() {
				var e = this;
				this.o.forEach((function(t, n) {
					Ue(e, n, t)
				}))
			};
			var We = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
				Fe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
				ze = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
				Ve = /[A-Z0-9]/g,
				$e = "undefined" != typeof document,
				Qe = function(e) {
					return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
				};

			function Ge(e, t, n) {
				return null == t.__k && (t.textContent = ""), H(e, t), "function" == typeof n && n(), e ? e.__c : null
			}

			function Ke(e, t, n) {
				return J(e, t), "function" == typeof n && n(), e ? e.__c : null
			}
			b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
				Object.defineProperty(b.prototype, e, {
					configurable: !0,
					get: function() {
						return this["UNSAFE_" + e]
					},
					set: function(t) {
						Object.defineProperty(this, e, {
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			}));
			var Ye = r.event;

			function Ze() {}

			function Xe() {
				return this.cancelBubble
			}

			function et() {
				return this.defaultPrevented
			}
			r.event = function(e) {
				return Ye && (e = Ye(e)), e.persist = Ze, e.isPropagationStopped = Xe, e.isDefaultPrevented = et, e.nativeEvent = e
			};
			var tt, nt = {
					enumerable: !1,
					configurable: !0,
					get: function() {
						return this.class
					}
				},
				ot = r.vnode;
			r.vnode = function(e) {
				"string" == typeof e.type && function(e) {
					var t = e.props,
						n = e.type,
						o = {};
					for (var r in t) {
						var i = t[r];
						if (!("value" === r && "defaultValue" in t && null == i || $e && "children" === r && "noscript" === n || "class" === r || "className" === r)) {
							var s = r.toLowerCase();
							"defaultValue" === r && "value" in t && null == t.value ? r = "value" : "download" === r && !0 === i ? i = "" : "ondoubleclick" === s ? r = "ondblclick" : "onchange" !== s || "input" !== n && "textarea" !== n || Qe(t.type) ? "onfocus" === s ? r = "onfocusin" : "onblur" === s ? r = "onfocusout" : ze.test(r) ? r = s : -1 === n.indexOf("-") && Fe.test(r) ? r = r.replace(Ve, "-$&").toLowerCase() : null === i && (i = void 0) : s = r = "oninput", "oninput" === s && o[r = s] && (r = "oninputCapture"), o[r] = i
						}
					}
					"select" == n && o.multiple && Array.isArray(o.value) && (o.value = j(t.children).forEach((function(e) {
						e.props.selected = -1 != o.value.indexOf(e.props.value)
					}))), "select" == n && null != o.defaultValue && (o.value = j(t.children).forEach((function(e) {
						e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
					}))), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", nt)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), e.props = o
				}(e), e.$$typeof = We, ot && ot(e)
			};
			var rt = r.__r;
			r.__r = function(e) {
				rt && rt(e), tt = e.__c
			};
			var it = r.diffed;
			r.diffed = function(e) {
				it && it(e);
				var t = e.props,
					n = e.__e;
				null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value), tt = null
			};
			var st = {
					ReactCurrentDispatcher: {
						current: {
							readContext: function(e) {
								return tt.__n[e.__c].props.value
							}
						}
					}
				},
				ct = "17.0.2";

			function at(e) {
				return g.bind(null, e)
			}

			function lt(e) {
				return !!e && e.$$typeof === We
			}

			function ut(e) {
				return lt(e) ? W.apply(null, arguments) : e
			}

			function dt(e) {
				return !!e.__k && (H(null, e), !0)
			}

			function ft(e) {
				return e && (e.base || 1 === e.nodeType && e) || null
			}
			var _t = function(e, t) {
					return e(t)
				},
				ht = function(e, t) {
					return e(t)
				},
				pt = v;

			function mt(e) {
				e()
			}

			function gt(e) {
				return e
			}

			function yt() {
				return [!1, mt]
			}
			var wt = ce;

			function vt(e, t) {
				var n = t(),
					o = re({
						h: {
							__: n,
							v: t
						}
					}),
					r = o[0].h,
					i = o[1];
				return ce((function() {
					r.__ = n, r.v = t, Oe(r.__, t()) || i({
						h: r
					})
				}), [e, n, t]), se((function() {
					return Oe(r.__, r.v()) || i({
						h: r
					}), e((function() {
						Oe(r.__, r.v()) || i({
							h: r
						})
					}))
				}), [e]), n
			}
			var bt = {
				useState: re,
				useId: pe,
				useReducer: ie,
				useEffect: se,
				useLayoutEffect: ce,
				useInsertionEffect: ce,
				useTransition: yt,
				useDeferredValue: gt,
				useSyncExternalStore: vt,
				startTransition: mt,
				useRef: ae,
				useImperativeHandle: le,
				useMemo: ue,
				useCallback: de,
				useContext: fe,
				useDebugValue: _e,
				version: "17.0.2",
				Children: Te,
				render: Ge,
				hydrate: Ke,
				unmountComponentAtNode: dt,
				createPortal: Je,
				createElement: g,
				createContext: F,
				createFactory: at,
				cloneElement: ut,
				createRef: w,
				Fragment: v,
				isValidElement: lt,
				findDOMNode: ft,
				Component: b,
				PureComponent: Ie,
				memo: xe,
				forwardRef: ke,
				flushSync: ht,
				unstable_batchedUpdates: _t,
				StrictMode: v,
				Suspense: Le,
				SuspenseList: De,
				lazy: Pe,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: st
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/browser.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/can-promise.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/qrcode.js"),
				i = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/canvas.js"),
				s = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/svg-tag.js");

			function c(e, t, n, i, s) {
				const c = [].slice.call(arguments, 1),
					a = c.length,
					l = "function" == typeof c[a - 1];
				if (!l && !o()) throw new Error("Callback required as last argument");
				if (!l) {
					if (a < 1) throw new Error("Too few arguments provided");
					return 1 === a ? (n = t, t = i = void 0) : 2 !== a || t.getContext || (i = n, n = t, t = void 0), new Promise((function(o, s) {
						try {
							const s = r.create(n, i);
							o(e(s, t, i))
						} catch (c) {
							s(c)
						}
					}))
				}
				if (a < 2) throw new Error("Too few arguments provided");
				2 === a ? (s = n, n = t, t = i = void 0) : 3 === a && (t.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = n, n = t, t = void 0));
				try {
					const o = r.create(n, i);
					s(null, e(o, t, i))
				} catch (u) {
					s(u)
				}
			}
			t.create = r.create, t.toCanvas = c.bind(null, i.render), t.toDataURL = c.bind(null, i.renderToDataURL), t.toString = c.bind(null, (function(e, t, n) {
				return s.render(e, n)
			}))
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				const t = Math.floor(e / 7) + 2,
					n = o(e),
					r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
					i = [n - 7];
				for (let o = 1; o < t - 1; o++) i[o] = i[o - 1] - r;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				const n = [],
					o = t.getRowColCoords(e),
					r = o.length;
				for (let t = 0; t < r; t++)
					for (let e = 0; e < r; e++) 0 === t && 0 === e || 0 === t && e === r - 1 || t === r - 1 && 0 === e || n.push([o[t], o[e]]);
				return n
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js"),
				r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = o.ALPHANUMERIC, this.data = e
			}
			i.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				let t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					let n = 45 * r.indexOf(this.data[t]);
					n += r.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6)
			}, e.exports = i
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/bit-buffer.js": function(e, t) {
			function n() {
				this.buffer = [], this.length = 0
			}
			n.prototype = {
				get: function(e) {
					const t = Math.floor(e / 8);
					return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
				},
				put: function(e, t) {
					for (let n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					const t = Math.floor(this.length / 8);
					this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = n
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/bit-matrix.js": function(e, t) {
			function n(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
			}
			n.prototype.set = function(e, t, n, o) {
				const r = e * this.size + t;
				this.data[r] = n, o && (this.reservedBit[r] = !0)
			}, n.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, n.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, n.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = n
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			const o = n("./node_modules/encode-utf8/index.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = r.BYTE, "string" == typeof e && (e = o(e)), this.data = new Uint8Array(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = i
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-level.js"),
				r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case o.L:
						return r[4 * (e - 1) + 0];
					case o.M:
						return r[4 * (e - 1) + 1];
					case o.Q:
						return r[4 * (e - 1) + 2];
					case o.H:
						return r[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case o.L:
						return i[4 * (e - 1) + 0];
					case o.M:
						return i[4 * (e - 1) + 1];
					case o.Q:
						return i[4 * (e - 1) + 2];
					case o.H:
						return i[4 * (e - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-level.js": function(e, t) {
			t.L = {
				bit: 1
			}, t.M = {
				bit: 0
			}, t.Q = {
				bit: 3
			}, t.H = {
				bit: 2
			}, t.isValid = function(e) {
				return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
			}, t.from = function(e, n) {
				if (t.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "l":
							case "low":
								return t.L;
							case "m":
							case "medium":
								return t.M;
							case "q":
							case "quartile":
								return t.Q;
							case "h":
							case "high":
								return t.H;
							default:
								throw new Error("Unknown EC Level: " + e)
						}
					}(e)
				} catch (o) {
					return n
				}
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				const t = o(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/format-info.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js"),
				r = o.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				const n = e.bit << 3 | t;
				let i = n << 10;
				for (; o.getBCHDigit(i) - r >= 0;) i ^= 1335 << o.getBCHDigit(i) - r;
				return 21522 ^ (n << 10 | i)
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/galois-field.js": function(e, t) {
			const n = new Uint8Array(512),
				o = new Uint8Array(256);
			! function() {
				let e = 1;
				for (let t = 0; t < 255; t++) n[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (let t = 255; t < 512; t++) n[t] = n[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return o[e]
			}, t.exp = function(e) {
				return n[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : n[o[e] + o[t]]
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = o.KANJI, this.data = e
			}
			i.getBitsLength = function(e) {
				return 13 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				let t;
				for (t = 0; t < this.data.length; t++) {
					let n = r.toSJIS(this.data[t]);
					if (n >= 33088 && n <= 40956) n -= 33088;
					else {
						if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						n -= 49472
					}
					n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
				}
			}, e.exports = i
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mask-pattern.js": function(e, t) {
			t.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			const n = 3,
				o = 3,
				r = 40,
				i = 10;

			function s(e, n, o) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (n + o) % 2 == 0;
					case t.Patterns.PATTERN001:
						return n % 2 == 0;
					case t.Patterns.PATTERN010:
						return o % 3 == 0;
					case t.Patterns.PATTERN011:
						return (n + o) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return n * o % 2 + n * o % 3 == 0;
					case t.Patterns.PATTERN110:
						return (n * o % 2 + n * o % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (n * o % 3 + (n + o) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				const t = e.size;
				let o = 0,
					r = 0,
					i = 0,
					s = null,
					c = null;
				for (let a = 0; a < t; a++) {
					r = i = 0, s = c = null;
					for (let l = 0; l < t; l++) {
						let t = e.get(a, l);
						t === s ? r++ : (r >= 5 && (o += n + (r - 5)), s = t, r = 1), (t = e.get(l, a)) === c ? i++ : (i >= 5 && (o += n + (i - 5)), c = t, i = 1)
					}
					r >= 5 && (o += n + (r - 5)), i >= 5 && (o += n + (i - 5))
				}
				return o
			}, t.getPenaltyN2 = function(e) {
				const t = e.size;
				let n = 0;
				for (let o = 0; o < t - 1; o++)
					for (let r = 0; r < t - 1; r++) {
						const t = e.get(o, r) + e.get(o, r + 1) + e.get(o + 1, r) + e.get(o + 1, r + 1);
						4 !== t && 0 !== t || n++
					}
				return n * o
			}, t.getPenaltyN3 = function(e) {
				const t = e.size;
				let n = 0,
					o = 0,
					i = 0;
				for (let r = 0; r < t; r++) {
					o = i = 0;
					for (let s = 0; s < t; s++) o = o << 1 & 2047 | e.get(r, s), s >= 10 && (1488 === o || 93 === o) && n++, i = i << 1 & 2047 | e.get(s, r), s >= 10 && (1488 === i || 93 === i) && n++
				}
				return n * r
			}, t.getPenaltyN4 = function(e) {
				let t = 0;
				const n = e.data.length;
				for (let o = 0; o < n; o++) t += e.data[o];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				const n = t.size;
				for (let o = 0; o < n; o++)
					for (let r = 0; r < n; r++) t.isReserved(r, o) || t.xor(r, o, s(e, r, o))
			}, t.getBestMask = function(e, n) {
				const o = Object.keys(t.Patterns).length;
				let r = 0,
					i = 1 / 0;
				for (let s = 0; s < o; s++) {
					n(s), t.applyMask(s, e);
					const o = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(s, e), o < i && (i = o, r = s)
				}
				return r
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/version-check.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/regex.js");
			t.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, t.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, t.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, t.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, t.MIXED = {
				bit: -1
			}, t.getCharCountIndicator = function(e, t) {
				if (!e.ccBits) throw new Error("Invalid mode: " + e);
				if (!o.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return r.testNumeric(e) ? t.NUMERIC : r.testAlphanumeric(e) ? t.ALPHANUMERIC : r.testKanji(e) ? t.KANJI : t.BYTE
			}, t.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, t.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, t.from = function(e, n) {
				if (t.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "numeric":
								return t.NUMERIC;
							case "alphanumeric":
								return t.ALPHANUMERIC;
							case "kanji":
								return t.KANJI;
							case "byte":
								return t.BYTE;
							default:
								throw new Error("Unknown mode: " + e)
						}
					}(e)
				} catch (o) {
					return n
				}
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = o.NUMERIC, this.data = e.toString()
			}
			r.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				let t, n, o;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), o = parseInt(n, 10), e.put(o, 10);
				const r = this.data.length - t;
				r > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, 3 * r + 1))
			}, e.exports = r
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				const n = new Uint8Array(e.length + t.length - 1);
				for (let r = 0; r < e.length; r++)
					for (let i = 0; i < t.length; i++) n[r + i] ^= o.mul(e[r], t[i]);
				return n
			}, t.mod = function(e, t) {
				let n = new Uint8Array(e);
				for (; n.length - t.length >= 0;) {
					const e = n[0];
					for (let i = 0; i < t.length; i++) n[i] ^= o.mul(t[i], e);
					let r = 0;
					for (; r < n.length && 0 === n[r];) r++;
					n = n.slice(r)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				let n = new Uint8Array([1]);
				for (let r = 0; r < e; r++) n = t.mul(n, new Uint8Array([1, o.exp(r)]));
				return n
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-level.js"),
				i = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/bit-buffer.js"),
				s = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/bit-matrix.js"),
				c = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/alignment-pattern.js"),
				a = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/finder-pattern.js"),
				l = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-code.js"),
				d = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				f = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/version.js"),
				_ = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/format-info.js"),
				h = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js"),
				p = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/segments.js");

			function m(e, t, n) {
				const o = e.size,
					r = _.getEncodedBits(t, n);
				let i, s;
				for (i = 0; i < 15; i++) s = 1 == (r >> i & 1), i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(o - 15 + i, 8, s, !0), i < 8 ? e.set(8, o - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
				e.set(o - 8, 8, 1, !0)
			}

			function g(e, t, n) {
				const r = new i;
				n.forEach((function(t) {
					r.put(t.mode.bit, 4), r.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(r)
				}));
				const s = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
				const c = (s - r.getLengthInBits()) / 8;
				for (let o = 0; o < c; o++) r.put(o % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					const r = o.getSymbolTotalCodewords(t),
						i = u.getTotalCodewordsCount(t, n),
						s = r - i,
						c = u.getBlocksCount(t, n),
						a = c - r % c,
						l = Math.floor(r / c),
						f = Math.floor(s / c),
						_ = f + 1,
						h = l - f,
						p = new d(h);
					let m = 0;
					const g = new Array(c),
						y = new Array(c);
					let w = 0;
					const v = new Uint8Array(e.buffer);
					for (let o = 0; o < c; o++) {
						const e = o < a ? f : _;
						g[o] = v.slice(m, m + e), y[o] = p.encode(g[o]), m += e, w = Math.max(w, e)
					}
					const b = new Uint8Array(r);
					let E, R, S = 0;
					for (E = 0; E < w; E++)
						for (R = 0; R < c; R++) E < g[R].length && (b[S++] = g[R][E]);
					for (E = 0; E < h; E++)
						for (R = 0; R < c; R++) b[S++] = y[R][E];
					return b
				}(r, e, t)
			}

			function y(e, t, n, r) {
				let i;
				if (Array.isArray(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data"); {
						let o = t;
						if (!o) {
							const t = p.rawSplit(e);
							o = f.getBestVersionForData(t, n)
						}
						i = p.fromString(e, o || 40)
					}
				}
				const u = f.getBestVersionForData(i, n);
				if (!u) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < u) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + u + ".\n")
				} else t = u;
				const d = g(t, n, i),
					_ = o.getSymbolSize(t),
					h = new s(_);
				return function(e, t) {
						const n = e.size,
							o = a.getPositions(t);
						for (let r = 0; r < o.length; r++) {
							const t = o[r][0],
								i = o[r][1];
							for (let o = -1; o <= 7; o++)
								if (!(t + o <= -1 || n <= t + o))
									for (let r = -1; r <= 7; r++) i + r <= -1 || n <= i + r || (o >= 0 && o <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === o || 6 === o) || o >= 2 && o <= 4 && r >= 2 && r <= 4 ? e.set(t + o, i + r, !0, !0) : e.set(t + o, i + r, !1, !0))
						}
					}(h, t),
					function(e) {
						const t = e.size;
						for (let n = 8; n < t - 8; n++) {
							const t = n % 2 == 0;
							e.set(n, 6, t, !0), e.set(6, n, t, !0)
						}
					}(h),
					function(e, t) {
						const n = c.getPositions(t);
						for (let o = 0; o < n.length; o++) {
							const t = n[o][0],
								r = n[o][1];
							for (let n = -2; n <= 2; n++)
								for (let o = -2; o <= 2; o++) - 2 === n || 2 === n || -2 === o || 2 === o || 0 === n && 0 === o ? e.set(t + n, r + o, !0, !0) : e.set(t + n, r + o, !1, !0)
						}
					}(h, t), m(h, n, 0), t >= 7 && function(e, t) {
						const n = e.size,
							o = f.getEncodedBits(t);
						let r, i, s;
						for (let c = 0; c < 18; c++) r = Math.floor(c / 3), i = c % 3 + n - 8 - 3, s = 1 == (o >> c & 1), e.set(r, i, s, !0), e.set(i, r, s, !0)
					}(h, t),
					function(e, t) {
						const n = e.size;
						let o = -1,
							r = n - 1,
							i = 7,
							s = 0;
						for (let c = n - 1; c > 0; c -= 2)
							for (6 === c && c--;;) {
								for (let n = 0; n < 2; n++)
									if (!e.isReserved(r, c - n)) {
										let o = !1;
										s < t.length && (o = 1 == (t[s] >>> i & 1)), e.set(r, c - n, o), -1 === --i && (s++, i = 7)
									} if ((r += o) < 0 || n <= r) {
									r -= o, o = -o;
									break
								}
							}
					}(h, d), isNaN(r) && (r = l.getBestMask(h, m.bind(null, h, n))), l.applyMask(r, h), m(h, n, r), {
						modules: h,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				let n, i, s = r.M;
				return void 0 !== t && (s = r.from(t.errorCorrectionLevel, r.M), n = f.from(t.version), i = l.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), y(e, n, s, i)
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/polynomial.js");

			function r(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			r.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, r.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				const t = new Uint8Array(e.length + this.degree);
				t.set(e);
				const n = o.mod(t, this.genPoly),
					r = this.degree - n.length;
				if (r > 0) {
					const e = new Uint8Array(this.degree);
					return e.set(n, r), e
				}
				return n
			}, e.exports = r
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/regex.js": function(e, t) {
			let n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
			const o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			const r = new RegExp("^" + n + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return r.test(e)
			}, t.testNumeric = function(e) {
				return i.test(e)
			}, t.testAlphanumeric = function(e) {
				return s.test(e)
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/numeric-data.js"),
				i = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/byte-data.js"),
				c = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/kanji-data.js"),
				a = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js"),
				u = n("./node_modules/dijkstrajs/dijkstra.js");

			function d(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, t, n) {
				const o = [];
				let r;
				for (; null !== (r = e.exec(n));) o.push({
					data: r[0],
					index: r.index,
					mode: t,
					length: r[0].length
				});
				return o
			}

			function _(e) {
				const t = f(a.NUMERIC, o.NUMERIC, e),
					n = f(a.ALPHANUMERIC, o.ALPHANUMERIC, e);
				let r, i;
				return l.isKanjiModeEnabled() ? (r = f(a.BYTE, o.BYTE, e), i = f(a.KANJI, o.KANJI, e)) : (r = f(a.BYTE_KANJI, o.BYTE, e), i = []), t.concat(n, r, i).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function h(e, t) {
				switch (t) {
					case o.NUMERIC:
						return r.getBitsLength(e);
					case o.ALPHANUMERIC:
						return i.getBitsLength(e);
					case o.KANJI:
						return c.getBitsLength(e);
					case o.BYTE:
						return s.getBitsLength(e)
				}
			}

			function p(e, t) {
				let n;
				const a = o.getBestModeForData(e);
				if ((n = o.from(t, a)) !== o.BYTE && n.bit < a.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + o.toString(n) + ".\n Suggested mode is: " + o.toString(a));
				switch (n !== o.KANJI || l.isKanjiModeEnabled() || (n = o.BYTE), n) {
					case o.NUMERIC:
						return new r(e);
					case o.ALPHANUMERIC:
						return new i(e);
					case o.KANJI:
						return new c(e);
					case o.BYTE:
						return new s(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(p(t, null)) : t.data && e.push(p(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				const r = function(e, t) {
						const n = {},
							r = {
								start: {}
							};
						let i = ["start"];
						for (let s = 0; s < e.length; s++) {
							const c = e[s],
								a = [];
							for (let e = 0; e < c.length; e++) {
								const l = c[e],
									u = "" + s + e;
								a.push(u), n[u] = {
									node: l,
									lastCount: 0
								}, r[u] = {};
								for (let e = 0; e < i.length; e++) {
									const s = i[e];
									n[s] && n[s].node.mode === l.mode ? (r[s][u] = h(n[s].lastCount + l.length, l.mode) - h(n[s].lastCount, l.mode), n[s].lastCount += l.length) : (n[s] && (n[s].lastCount = l.length), r[s][u] = h(l.length, l.mode) + 4 + o.getCharCountIndicator(l.mode, t))
								}
							}
							i = a
						}
						for (let o = 0; o < i.length; o++) r[i[o]].end = 0;
						return {
							map: r,
							table: n
						}
					}(function(e) {
						const t = [];
						for (let n = 0; n < e.length; n++) {
							const r = e[n];
							switch (r.mode) {
								case o.NUMERIC:
									t.push([r, {
										data: r.data,
										mode: o.ALPHANUMERIC,
										length: r.length
									}, {
										data: r.data,
										mode: o.BYTE,
										length: r.length
									}]);
									break;
								case o.ALPHANUMERIC:
									t.push([r, {
										data: r.data,
										mode: o.BYTE,
										length: r.length
									}]);
									break;
								case o.KANJI:
									t.push([r, {
										data: r.data,
										mode: o.BYTE,
										length: d(r.data)
									}]);
									break;
								case o.BYTE:
									t.push([{
										data: r.data,
										mode: o.BYTE,
										length: d(r.data)
									}])
							}
						}
						return t
					}(_(e, l.isKanjiModeEnabled())), n),
					i = u.find_path(r.map, "start", "end"),
					s = [];
				for (let t = 1; t < i.length - 1; t++) s.push(r.table[i[t]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						const n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(s))
			}, t.rawSplit = function(e) {
				return t.fromArray(_(e, l.isKanjiModeEnabled()))
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js": function(e, t) {
			let n;
			const o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return o[e]
			}, t.getBCHDigit = function(e) {
				let t = 0;
				for (; 0 !== e;) t++, e >>>= 1;
				return t
			}, t.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				n = e
			}, t.isKanjiModeEnabled = function() {
				return void 0 !== n
			}, t.toSJIS = function(e) {
				return n(e)
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/version-check.js": function(e, t) {
			t.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/version.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-code.js"),
				i = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/error-correction-level.js"),
				s = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/mode.js"),
				c = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/core/version-check.js"),
				a = o.getBCHDigit(7973);

			function l(e, t) {
				return s.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				let n = 0;
				return e.forEach((function(e) {
					const o = l(e.mode, t);
					n += o + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return c.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!c.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = s.BYTE);
				const i = 8 * (o.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, t));
				if (n === s.MIXED) return i;
				const a = i - l(n, e);
				switch (n) {
					case s.NUMERIC:
						return Math.floor(a / 10 * 3);
					case s.ALPHANUMERIC:
						return Math.floor(a / 11 * 2);
					case s.KANJI:
						return Math.floor(a / 13);
					case s.BYTE:
					default:
						return Math.floor(a / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				let o;
				const r = i.from(n, i.M);
				if (Array.isArray(e)) {
					if (e.length > 1) return function(e, n) {
						for (let o = 1; o <= 40; o++) {
							if (u(e, o) <= t.getCapacity(o, n, s.MIXED)) return o
						}
					}(e, r);
					if (0 === e.length) return 1;
					o = e[0]
				} else o = e;
				return function(e, n, o) {
					for (let r = 1; r <= 40; r++)
						if (n <= t.getCapacity(r, o, e)) return r
				}(o.mode, o.getLength(), r)
			}, t.getEncodedBits = function(e) {
				if (!c.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				let t = e << 12;
				for (; o.getBCHDigit(t) - a >= 0;) t ^= 7973 << o.getBCHDigit(t) - a;
				return e << 12 | t
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				let r = n,
					i = t;
				void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), r = o.getOptions(r);
				const s = o.getImageWidth(e.modules.size, r),
					c = i.getContext("2d"),
					a = c.createImageData(s, s);
				return o.qrToImageData(a.data, e, r),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(c, i, s), c.putImageData(a, 0, 0), i
			}, t.renderToDataURL = function(e, n, o) {
				let r = o;
				void 0 !== r || n && n.getContext || (r = n, n = void 0), r || (r = {});
				const i = t.render(e, n, r),
					s = r.type || "image/png",
					c = r.rendererOpts || {};
				return i.toDataURL(s, c.quality)
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			const o = n("./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/utils.js");

			function r(e, t) {
				const n = e.a / 255,
					o = t + '="' + e.hex + '"';
				return n < 1 ? o + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : o
			}

			function i(e, t, n) {
				let o = e + t;
				return void 0 !== n && (o += " " + n), o
			}
			t.render = function(e, t, n) {
				const s = o.getOptions(t),
					c = e.modules.size,
					a = e.modules.data,
					l = c + 2 * s.margin,
					u = s.color.light.a ? "<path " + r(s.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					d = "<path " + r(s.color.dark, "stroke") + ' d="' + function(e, t, n) {
						let o = "",
							r = 0,
							s = !1,
							c = 0;
						for (let a = 0; a < e.length; a++) {
							const l = Math.floor(a % t),
								u = Math.floor(a / t);
							l || s || (s = !0), e[a] ? (c++, a > 0 && l > 0 && e[a - 1] || (o += s ? i("M", l + n, .5 + u + n) : i("m", r, 0), r = 0, s = !1), l + 1 < t && e[a + 1] || (o += i("h", c), c = 0)) : r++
						}
						return o
					}(a, c, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + l + " " + l + '"',
					_ = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + u + d + "</svg>\n";
				return "function" == typeof n && n(null, _), _
			}
		},
		"./node_modules/@walletconnect/legacy-modal/node_modules/qrcode/lib/renderer/utils.js": function(e, t) {
			function n(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				let t = e.slice().replace("#", "").split("");
				if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
					return [e, e]
				})))), 6 === t.length && t.push("F", "F");
				const n = parseInt(t.join(""), 16);
				return {
					r: n >> 24 & 255,
					g: n >> 16 & 255,
					b: n >> 8 & 255,
					a: 255 & n,
					hex: "#" + t.slice(0, 6).join("")
				}
			}
			t.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				const t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					o = e.width && e.width >= 21 ? e.width : void 0,
					r = e.scale || 4;
				return {
					width: o,
					scale: o ? 4 : r,
					margin: t,
					color: {
						dark: n(e.color.dark || "#000000ff"),
						light: n(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, t.getScale = function(e, t) {
				return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
			}, t.getImageWidth = function(e, n) {
				const o = t.getScale(e, n);
				return Math.floor((e + 2 * n.margin) * o)
			}, t.qrToImageData = function(e, n, o) {
				const r = n.modules.size,
					i = n.modules.data,
					s = t.getScale(r, o),
					c = Math.floor((r + 2 * o.margin) * s),
					a = o.margin * s,
					l = [o.color.light, o.color.dark];
				for (let t = 0; t < c; t++)
					for (let n = 0; n < c; n++) {
						let u = 4 * (t * c + n),
							d = o.color.light;
						if (t >= a && n >= a && t < c - a && n < c - a) {
							d = l[i[Math.floor((t - a) / s) * r + Math.floor((n - a) / s)] ? 1 : 0]
						}
						e[u++] = d.r, e[u++] = d.g, e[u++] = d.b, e[u] = d.a
					}
			}
		},
		"./node_modules/@walletconnect/legacy-provider/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = {};
			n.r(o), n.d(o, "generateKey", (function() {
				return v
			})), n.d(o, "verifyHmac", (function() {
				return b
			})), n.d(o, "encrypt", (function() {
				return E
			})), n.d(o, "decrypt", (function() {
				return R
			}));
			var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				i = n.n(r),
				s = n("./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js"),
				c = n("./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js"),
				a = n("./node_modules/@walletconnect/legacy-types/dist/esm/index.js"),
				l = n("./node_modules/@walletconnect/legacy-utils/dist/esm/index.js"),
				u = n("./node_modules/@walletconnect/legacy-client/dist/esm/socket.js");
			var d = class {
				constructor() {
					this._eventEmitters = []
				}
				subscribe(e) {
					this._eventEmitters.push(e)
				}
				unsubscribe(e) {
					this._eventEmitters = this._eventEmitters.filter(t => t.event !== e)
				}
				trigger(e) {
					let t, n = [];
					(t = Object(l.isJsonRpcRequest)(e) ? e.method : Object(l.isJsonRpcResponseSuccess)(e) || Object(l.isJsonRpcResponseError)(e) ? `response:${e.id}` : Object(l.isInternalEvent)(e) ? e.event : "") && (n = this._eventEmitters.filter(e => e.event === t)), n && n.length || Object(l.isReservedEvent)(t) || Object(l.isInternalEvent)(t) || (n = this._eventEmitters.filter(e => "call_request" === e.event)), n.forEach(t => {
						if (Object(l.isJsonRpcResponseError)(e)) {
							const n = new Error(e.error.message);
							t.callback(n, null)
						} else t.callback(null, e)
					})
				}
			};
			var f = class {
				constructor() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "walletconnect";
					this.storageId = e
				}
				getSession() {
					let e = null;
					const t = Object(l.getLocal)(this.storageId);
					return t && Object(l.isWalletConnectSession)(t) && (e = t), e
				}
				setSession(e) {
					return Object(l.setLocal)(this.storageId, e), e
				}
				removeSession() {
					Object(l.removeLocal)(this.storageId)
				}
			};
			const _ = "walletconnect.org",
				h = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(e => `https://${e}.bridge.walletconnect.org`);

			function p() {
				return h[Math.floor(Math.random() * h.length)]
			}

			function m(e) {
				return function(e) {
					return function(e) {
						return function(e) {
							let t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0];
							return t = (t = t.split(":")[0]).split("?")[0]
						}(e).split(".").slice(-2).join(".")
					}(e) === _
				}(e) ? p() : e
			}
			var g = class {
					constructor(e) {
						if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new d, this._clientMeta = Object(l.getClientMeta)() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new f(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...a.SIGNING_METHODS, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw new Error(a.ERROR_MISSING_REQUIRED);
						e.connectorOpts.bridge && (this.bridge = m(e.connectorOpts.bridge)), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
						const t = e.connectorOpts.session || this._getStorageSession();
						t && (this.session = t), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new u.a({
							protocol: this.protocol,
							version: this.version,
							url: this.bridge,
							subscriptions: [this.clientId]
						}), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts)
					}
					set bridge(e) {
						e && (this._bridge = e)
					}
					get bridge() {
						return this._bridge
					}
					set key(e) {
						if (!e) return;
						const t = Object(l.convertHexToArrayBuffer)(e);
						this._key = t
					}
					get key() {
						if (this._key) {
							return Object(l.convertArrayBufferToHex)(this._key, !0)
						}
						return ""
					}
					set clientId(e) {
						e && (this._clientId = e)
					}
					get clientId() {
						let e = this._clientId;
						return e || (e = this._clientId = Object(l.uuid)()), this._clientId
					}
					set peerId(e) {
						e && (this._peerId = e)
					}
					get peerId() {
						return this._peerId
					}
					set clientMeta(e) {}
					get clientMeta() {
						let e = this._clientMeta;
						return e || (e = this._clientMeta = Object(l.getClientMeta)()), e
					}
					set peerMeta(e) {
						this._peerMeta = e
					}
					get peerMeta() {
						return this._peerMeta
					}
					set handshakeTopic(e) {
						e && (this._handshakeTopic = e)
					}
					get handshakeTopic() {
						return this._handshakeTopic
					}
					set handshakeId(e) {
						e && (this._handshakeId = e)
					}
					get handshakeId() {
						return this._handshakeId
					}
					get uri() {
						return this._formatUri()
					}
					set uri(e) {
						if (!e) return;
						const {
							handshakeTopic: t,
							bridge: n,
							key: o
						} = this._parseUri(e);
						this.handshakeTopic = t, this.bridge = n, this.key = o
					}
					set chainId(e) {
						this._chainId = e
					}
					get chainId() {
						return this._chainId
					}
					set networkId(e) {
						this._networkId = e
					}
					get networkId() {
						return this._networkId
					}
					set accounts(e) {
						this._accounts = e
					}
					get accounts() {
						return this._accounts
					}
					set rpcUrl(e) {
						this._rpcUrl = e
					}
					get rpcUrl() {
						return this._rpcUrl
					}
					set connected(e) {}
					get connected() {
						return this._connected
					}
					set pending(e) {}
					get pending() {
						return !!this._handshakeTopic
					}
					get session() {
						return {
							connected: this.connected,
							accounts: this.accounts,
							chainId: this.chainId,
							bridge: this.bridge,
							key: this.key,
							clientId: this.clientId,
							clientMeta: this.clientMeta,
							peerId: this.peerId,
							peerMeta: this.peerMeta,
							handshakeId: this.handshakeId,
							handshakeTopic: this.handshakeTopic
						}
					}
					set session(e) {
						e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
					}
					on(e, t) {
						const n = {
							event: e,
							callback: t
						};
						this._eventManager.subscribe(n)
					}
					off(e) {
						this._eventManager.unsubscribe(e)
					}
					async createInstantRequest(e) {
						this._key = await this._generateKey();
						const t = this._formatRequest({
							method: "wc_instantRequest",
							params: [{
								peerId: this.clientId,
								peerMeta: this.clientMeta,
								request: this._formatRequest(e)
							}]
						});
						this.handshakeId = t.id, this.handshakeTopic = Object(l.uuid)(), this._eventManager.trigger({
							event: "display_uri",
							params: [this.uri]
						}), this.on("modal_closed", () => {
							throw new Error(a.ERROR_QRCODE_MODAL_USER_CLOSED)
						});
						const n = () => {
							this.killSession()
						};
						try {
							const e = await this._sendCallRequest(t);
							return e && n(), e
						} catch (o) {
							throw n(), o
						}
					}
					async connect(e) {
						if (!this._qrcodeModal) throw new Error(a.ERROR_QRCODE_MODAL_NOT_PROVIDED);
						return this.connected ? {
							chainId: this.chainId,
							accounts: this.accounts
						} : (await this.createSession(e), new Promise(async (e, t) => {
							this.on("modal_closed", () => t(new Error(a.ERROR_QRCODE_MODAL_USER_CLOSED))), this.on("connect", (n, o) => {
								if (n) return t(n);
								e(o.params[0])
							})
						}))
					}
					async createSession(e) {
						if (this._connected) throw new Error(a.ERROR_SESSION_CONNECTED);
						if (this.pending) return;
						this._key = await this._generateKey();
						const t = this._formatRequest({
							method: "wc_sessionRequest",
							params: [{
								peerId: this.clientId,
								peerMeta: this.clientMeta,
								chainId: e && e.chainId ? e.chainId : null
							}]
						});
						this.handshakeId = t.id, this.handshakeTopic = Object(l.uuid)(), this._sendSessionRequest(t, "Session update rejected", {
							topic: this.handshakeTopic
						}), this._eventManager.trigger({
							event: "display_uri",
							params: [this.uri]
						})
					}
					approveSession(e) {
						if (this._connected) throw new Error(a.ERROR_SESSION_CONNECTED);
						this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
						const t = {
								approved: !0,
								chainId: this.chainId,
								networkId: this.networkId,
								accounts: this.accounts,
								rpcUrl: this.rpcUrl,
								peerId: this.clientId,
								peerMeta: this.clientMeta
							},
							n = {
								id: this.handshakeId,
								jsonrpc: "2.0",
								result: t
							};
						this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
							event: "connect",
							params: [{
								peerId: this.peerId,
								peerMeta: this.peerMeta,
								chainId: this.chainId,
								accounts: this.accounts
							}]
						})
					}
					rejectSession(e) {
						if (this._connected) throw new Error(a.ERROR_SESSION_CONNECTED);
						const t = e && e.message ? e.message : a.ERROR_SESSION_REJECTED,
							n = this._formatResponse({
								id: this.handshakeId,
								error: {
									message: t
								}
							});
						this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
							event: "disconnect",
							params: [{
								message: t
							}]
						}), this._removeStorageSession()
					}
					updateSession(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
						const t = {
								approved: !0,
								chainId: this.chainId,
								networkId: this.networkId,
								accounts: this.accounts,
								rpcUrl: this.rpcUrl
							},
							n = this._formatRequest({
								method: "wc_sessionUpdate",
								params: [t]
							});
						this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
							event: "session_update",
							params: [{
								chainId: this.chainId,
								accounts: this.accounts
							}]
						}), this._manageStorageSession()
					}
					async killSession(e) {
						const t = e ? e.message : "Session Disconnected",
							n = this._formatRequest({
								method: "wc_sessionUpdate",
								params: [{
									approved: !1,
									chainId: null,
									networkId: null,
									accounts: null
								}]
							});
						await this._sendRequest(n), this._handleSessionDisconnect(t)
					}
					async sendTransaction(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						const t = e,
							n = this._formatRequest({
								method: "eth_sendTransaction",
								params: [t]
							});
						return await this._sendCallRequest(n)
					}
					async signTransaction(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						const t = e,
							n = this._formatRequest({
								method: "eth_signTransaction",
								params: [t]
							});
						return await this._sendCallRequest(n)
					}
					async signMessage(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						const t = this._formatRequest({
							method: "eth_sign",
							params: e
						});
						return await this._sendCallRequest(t)
					}
					async signPersonalMessage(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						const t = this._formatRequest({
							method: "personal_sign",
							params: e
						});
						return await this._sendCallRequest(t)
					}
					async signTypedData(e) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						const t = this._formatRequest({
							method: "eth_signTypedData",
							params: e
						});
						return await this._sendCallRequest(t)
					}
					async updateChain(e) {
						if (!this._connected) throw new Error("Session currently disconnected");
						const t = this._formatRequest({
							method: "wallet_updateChain",
							params: [e]
						});
						return await this._sendCallRequest(t)
					}
					unsafeSend(e, t) {
						return this._sendRequest(e, t), this._eventManager.trigger({
							event: "call_request_sent",
							params: [{
								request: e,
								options: t
							}]
						}), new Promise((t, n) => {
							this._subscribeToResponse(e.id, (e, o) => {
								if (e) n(e);
								else {
									if (!o) throw new Error(a.ERROR_MISSING_JSON_RPC);
									t(o)
								}
							})
						})
					}
					async sendCustomRequest(e, t) {
						if (!this._connected) throw new Error(a.ERROR_SESSION_DISCONNECTED);
						switch (e.method) {
							case "eth_accounts":
								return this.accounts;
							case "eth_chainId":
								return Object(l.convertNumberToHex)(this.chainId);
							case "eth_sendTransaction":
							case "eth_signTransaction":
							case "personal_sign":
								e.params
						}
						const n = this._formatRequest(e);
						return await this._sendCallRequest(n, t)
					}
					approveRequest(e) {
						if (!Object(l.isJsonRpcResponseSuccess)(e)) throw new Error(a.ERROR_MISSING_RESULT); {
							const t = this._formatResponse(e);
							this._sendResponse(t)
						}
					}
					rejectRequest(e) {
						if (!Object(l.isJsonRpcResponseError)(e)) throw new Error(a.ERROR_MISSING_ERROR); {
							const t = this._formatResponse(e);
							this._sendResponse(t)
						}
					}
					transportClose() {
						this._transport.close()
					}
					async _sendRequest(e, t) {
						const n = this._formatRequest(e),
							o = await this._encrypt(n),
							r = void 0 !== (null == t ? void 0 : t.topic) ? t.topic : this.peerId,
							i = JSON.stringify(o),
							s = void 0 !== (null == t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : Object(l.isSilentPayload)(n);
						this._transport.send(i, r, s)
					}
					async _sendResponse(e) {
						const t = await this._encrypt(e),
							n = this.peerId,
							o = JSON.stringify(t);
						this._transport.send(o, n, !0)
					}
					async _sendSessionRequest(e, t, n) {
						this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, t)
					}
					_sendCallRequest(e, t) {
						return this._sendRequest(e, t), this._eventManager.trigger({
							event: "call_request_sent",
							params: [{
								request: e,
								options: t
							}]
						}), this._subscribeToCallResponse(e.id)
					}
					_formatRequest(e) {
						if (void 0 === e.method) throw new Error(a.ERROR_MISSING_METHOD);
						return {
							id: void 0 === e.id ? Object(l.payloadId)() : e.id,
							jsonrpc: "2.0",
							method: e.method,
							params: void 0 === e.params ? [] : e.params
						}
					}
					_formatResponse(e) {
						if (void 0 === e.id) throw new Error(a.ERROR_MISSING_ID);
						const t = {
							id: e.id,
							jsonrpc: "2.0"
						};
						if (Object(l.isJsonRpcResponseError)(e)) {
							const n = Object(l.formatRpcError)(e.error);
							return Object.assign(Object.assign(Object.assign({}, t), e), {
								error: n
							})
						}
						if (Object(l.isJsonRpcResponseSuccess)(e)) {
							return Object.assign(Object.assign({}, t), e)
						}
						throw new Error(a.ERROR_INVALID_RESPONSE)
					}
					_handleSessionDisconnect(e) {
						const t = e || "Session Disconnected";
						this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Object(l.removeLocal)(a.MOBILE_LINK_CHOICE_KEY)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
							event: "disconnect",
							params: [{
								message: t
							}]
						}), this._removeStorageSession(), this.transportClose()
					}
					_handleSessionResponse(e, t) {
						t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
							event: "session_update",
							params: [{
								chainId: this.chainId,
								accounts: this.accounts
							}]
						})) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
							event: "connect",
							params: [{
								peerId: this.peerId,
								peerMeta: this.peerMeta,
								chainId: this.chainId,
								accounts: this.accounts
							}]
						})), this._manageStorageSession()) : this._handleSessionDisconnect(e)
					}
					async _handleIncomingMessages(e) {
						if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
						let t;
						try {
							t = JSON.parse(e.payload)
						} catch (o) {
							return
						}
						const n = await this._decrypt(t);
						n && this._eventManager.trigger(n)
					}
					_subscribeToSessionRequest() {
						this._transport.subscribe(this.handshakeTopic)
					}
					_subscribeToResponse(e, t) {
						this.on(`response:${e}`, t)
					}
					_subscribeToSessionResponse(e, t) {
						this._subscribeToResponse(e, (e, n) => {
							e ? this._handleSessionResponse(e.message) : Object(l.isJsonRpcResponseSuccess)(n) ? this._handleSessionResponse(t, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(t)
						})
					}
					_subscribeToCallResponse(e) {
						return new Promise((t, n) => {
							this._subscribeToResponse(e, (e, o) => {
								e ? n(e) : Object(l.isJsonRpcResponseSuccess)(o) ? t(o.result) : o.error && o.error.message ? n(o.error) : n(new Error(a.ERROR_INVALID_RESPONSE))
							})
						})
					}
					_subscribeToInternalEvents() {
						this.on("display_uri", () => {
							this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
								this._eventManager.trigger({
									event: "modal_closed",
									params: []
								})
							}, this._qrcodeModalOptions)
						}), this.on("connect", () => {
							this._qrcodeModal && this._qrcodeModal.close()
						}), this.on("call_request_sent", (e, t) => {
							const {
								request: n
							} = t.params[0];
							if (Object(l.isMobile)() && this._signingMethods.includes(n.method)) {
								const e = Object(l.getLocal)(a.MOBILE_LINK_CHOICE_KEY);
								e && (window.location.href = e.href)
							}
						}), this.on("wc_sessionRequest", (e, t) => {
							e && this._eventManager.trigger({
								event: "error",
								params: [{
									code: "SESSION_REQUEST_ERROR",
									message: e.toString()
								}]
							}), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
							const n = Object.assign(Object.assign({}, t), {
								method: "session_request"
							});
							this._eventManager.trigger(n)
						}), this.on("wc_sessionUpdate", (e, t) => {
							e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0])
						})
					}
					_initTransport() {
						this._transport.on("message", e => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({
							event: "transport_open",
							params: []
						})), this._transport.on("close", () => this._eventManager.trigger({
							event: "transport_close",
							params: []
						})), this._transport.on("error", () => this._eventManager.trigger({
							event: "transport_error",
							params: ["Websocket connection failed"]
						})), this._transport.open()
					}
					_formatUri() {
						return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
					}
					_parseUri(e) {
						const t = Object(l.parseWalletConnectUri)(e);
						if (t.protocol === this.protocol) {
							if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
							const e = t.handshakeTopic;
							if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
							const n = decodeURIComponent(t.bridge);
							if (!t.key) throw Error("Invalid or missing key parameter value");
							return {
								handshakeTopic: e,
								bridge: n,
								key: t.key
							}
						}
						throw new Error(a.ERROR_INVALID_URI)
					}
					async _generateKey() {
						if (this._cryptoLib) {
							return await this._cryptoLib.generateKey()
						}
						return null
					}
					async _encrypt(e) {
						const t = this._key;
						if (this._cryptoLib && t) {
							return await this._cryptoLib.encrypt(e, t)
						}
						return null
					}
					async _decrypt(e) {
						const t = this._key;
						if (this._cryptoLib && t) {
							return await this._cryptoLib.decrypt(e, t)
						}
						return null
					}
					_getStorageSession() {
						let e = null;
						return this._sessionStorage && (e = this._sessionStorage.getSession()), e
					}
					_setStorageSession() {
						this._sessionStorage && this._sessionStorage.setSession(this.session)
					}
					_removeStorageSession() {
						this._sessionStorage && this._sessionStorage.removeSession()
					}
					_manageStorageSession() {
						this._connected ? this._setStorageSession() : this._removeStorageSession()
					}
					_registerPushServer(e) {
						if (!e.url || "string" != typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
						if (!e.type || "string" != typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
						if (!e.token || "string" != typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
						const t = {
							bridge: this.bridge,
							topic: this.clientId,
							type: e.type,
							token: e.token,
							peerName: "",
							language: e.language || ""
						};
						this.on("connect", async (n, o) => {
							if (n) throw n;
							if (e.peerMeta) {
								const e = o.params[0].peerMeta.name;
								t.peerName = e
							}
							try {
								const n = await fetch(`${e.url}/new`, {
									method: "POST",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json"
									},
									body: JSON.stringify(t)
								});
								if (!(await n.json()).success) throw Error("Failed to register in Push Server")
							} catch (n) {
								throw Error("Failed to register in Push Server")
							}
						})
					}
				},
				y = n("./node_modules/@walletconnect/crypto/dist/esm/browser/index.js"),
				w = n("./node_modules/@walletconnect/encoding/dist/esm/index.js");
			async function v(e) {
				const t = (e || 256) / 8,
					n = y.randomBytes(t);
				return Object(l.convertBufferToArrayBuffer)(w.b(n))
			}
			async function b(e, t) {
				const n = w.n(e.data),
					o = w.n(e.iv),
					r = w.n(e.hmac),
					i = w.c(r, !1),
					s = w.j(n, o),
					c = await y.hmacSha256Sign(t, s),
					a = w.c(c, !1);
				return w.A(i) === w.A(a)
			}
			async function E(e, t, n) {
				const o = w.f(Object(l.convertArrayBufferToBuffer)(t)),
					r = n || await v(128),
					i = w.f(Object(l.convertArrayBufferToBuffer)(r)),
					s = w.c(i, !1),
					c = JSON.stringify(e),
					a = w.C(c),
					u = await y.aesCbcEncrypt(i, o, a),
					d = w.c(u, !1),
					f = w.j(u, i),
					_ = await y.hmacSha256Sign(o, f);
				return {
					data: d,
					hmac: w.c(_, !1),
					iv: s
				}
			}
			async function R(e, t) {
				const n = w.f(Object(l.convertArrayBufferToBuffer)(t));
				if (!n) throw new Error("Missing key: required for decryption");
				if (!(await b(e, n))) return null;
				const o = w.n(e.data),
					r = w.n(e.iv),
					i = await y.aesCbcDecrypt(r, n, o),
					s = w.e(i);
				let c;
				try {
					c = JSON.parse(s)
				} catch (a) {
					return null
				}
				return c
			}
			var S = class extends g {
					constructor(e, t) {
						super({
							cryptoLib: o,
							connectorOpts: e,
							pushServerOpts: t
						})
					}
				},
				O = n("./node_modules/@walletconnect/legacy-modal/dist/cjs/index.js"),
				I = n.n(O),
				x = n("./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js"),
				j = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
			class C extends x.a {
				constructor(e) {
					super(), this.events = new i.a, this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = e, this.chainId = (null == e ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e)
				}
				get connected() {
					return void 0 !== this.wc && this.wc.connected
				}
				get connecting() {
					return this.pending
				}
				get connector() {
					return this.wc = this.register(this.opts), this.wc
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async open(e) {
					if (!this.connected) return new Promise((t, n) => {
						this.on("error", e => {
							n(e)
						}), this.on("open", () => {
							t()
						}), this.create(e)
					});
					this.onOpen()
				}
				async close() {
					void 0 !== this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
				}
				async send(e) {
					this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then(e => this.events.emit("payload", e)).catch(t => this.events.emit("payload", Object(j.formatJsonRpcError)(e.id, t.message)))
				}
				register(e) {
					if (this.wc) return this.wc;
					this.opts = e || this.opts, this.bridge = (null == e ? void 0 : e.connector) ? e.connector.bridge : (null == e ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = void 0 === (null == e ? void 0 : e.qrcode) || !1 !== e.qrcode, this.chainId = void 0 !== (null == e ? void 0 : e.chainId) ? e.chainId : this.chainId, this.qrcodeModalOptions = null == e ? void 0 : e.qrcodeModalOptions;
					const t = {
						bridge: this.bridge,
						qrcodeModal: this.qrcode ? I.a : void 0,
						qrcodeModalOptions: this.qrcodeModalOptions,
						storageId: null == e ? void 0 : e.storageId,
						signingMethods: null == e ? void 0 : e.signingMethods,
						clientMeta: null == e ? void 0 : e.clientMeta
					};
					if (this.wc = void 0 !== (null == e ? void 0 : e.connector) ? e.connector : new S(t), void 0 === this.wc) throw new Error("Failed to register WalletConnect connector");
					return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
				}
				onOpen(e) {
					this.pending = !1, e && (this.wc = e), this.events.emit("open")
				}
				onClose() {
					this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
				}
				onError(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Failed or Rejected Request",
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -32e3;
					const o = {
						id: e.id,
						jsonrpc: e.jsonrpc,
						error: {
							code: n,
							message: t
						}
					};
					return this.events.emit("payload", o), o
				}
				create(e) {
					this.wc = this.register(this.opts), this.chainId = e || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
						chainId: this.chainId
					}).then(() => this.events.emit("created")).catch(e => this.events.emit("error", e)))
				}
				registerConnectorEvents() {
					this.wc = this.register(this.opts), this.wc.on("connect", e => {
						var t, n;
						e ? this.events.emit("error", e) : (this.accounts = (null === (t = this.wc) || void 0 === t ? void 0 : t.accounts) || [], this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId, this.onOpen())
					}), this.wc.on("disconnect", e => {
						e ? this.events.emit("error", e) : this.onClose()
					}), this.wc.on("modal_closed", () => {
						this.events.emit("error", new Error("User closed modal"))
					}), this.wc.on("session_update", (e, t) => {
						const {
							accounts: n,
							chainId: o
						} = t.params[0];
						(!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || o && this.chainId !== o) && (this.chainId = o, this.events.emit("chainChanged", o))
					})
				}
				async sendPayload(e) {
					this.wc = this.register(this.opts);
					try {
						const t = await this.wc.unsafeSend(e);
						return this.sanitizeResponse(t)
					} catch (t) {
						return this.onError(e, t.message)
					}
				}
				sanitizeResponse(e) {
					return void 0 !== e.error && void 0 === e.error.code ? Object(j.formatJsonRpcError)(e.id, e.error.message, e.error.data) : e
				}
			}
			t.default = class {
				constructor(e) {
					this.events = new i.a, this.rpc = {
						infuraId: null == e ? void 0 : e.infuraId,
						custom: null == e ? void 0 : e.rpc
					}, this.signer = new s.a(new C(e));
					const t = this.signer.connection.chainId || (null == e ? void 0 : e.chainId) || 1;
					this.http = this.setHttpProvider(t), this.registerEventListeners()
				}
				get connected() {
					return this.signer.connection.connected
				}
				get connector() {
					return this.signer.connection.connector
				}
				get accounts() {
					return this.signer.connection.accounts
				}
				get chainId() {
					return this.signer.connection.chainId
				}
				get rpcUrl() {
					var e;
					return (null === (e = this.http) || void 0 === e ? void 0 : e.connection).url || ""
				}
				async request(e) {
					switch (e.method) {
						case "eth_requestAccounts":
							return await this.connect(), this.signer.connection.accounts;
						case "eth_accounts":
							return this.signer.connection.accounts;
						case "eth_chainId":
							return this.signer.connection.chainId
					}
					if (a.SIGNING_METHODS.includes(e.method)) return this.signer.request(e);
					if (void 0 === this.http) throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
					return this.http.request(e)
				}
				sendAsync(e, t) {
					this.request(e).then(e => t(null, e)).catch(e => t(e, void 0))
				}
				async enable() {
					return await this.request({
						method: "eth_requestAccounts"
					})
				}
				async connect() {
					this.signer.connection.connected || await this.signer.connect()
				}
				async disconnect() {
					this.signer.connection.connected && await this.signer.disconnect()
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				get isWalletConnect() {
					return !0
				}
				registerEventListeners() {
					this.signer.connection.on("accountsChanged", e => {
						this.events.emit("accountsChanged", e)
					}), this.signer.connection.on("chainChanged", e => {
						this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e)
					}), this.signer.on("disconnect", () => {
						this.events.emit("disconnect")
					})
				}
				setHttpProvider(e) {
					const t = Object(l.getRpcUrl)(e, this.rpc);
					if (void 0 !== t) return new s.a(new c.a(t))
				}
			}
		},
		"./node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "l", (function() {
				return r
			})), n.d(t, "m", (function() {
				return i
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "n", (function() {
				return w
			}));
			const o = "Session currently connected",
				r = "Session currently disconnected",
				i = "Session Rejected",
				s = "Missing JSON RPC response",
				c = 'JSON-RPC success response must include "result" field',
				a = 'JSON-RPC error response must include "error" field',
				l = 'JSON RPC request must have valid "method" value',
				u = 'JSON RPC request must have valid "id" value',
				d = "Missing one of the required parameters: bridge / uri / session",
				f = "JSON RPC response format is invalid",
				_ = "URI format is invalid",
				h = "QRCode Modal not provided",
				p = "User close QRCode Modal",
				m = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
				g = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
				y = "WALLETCONNECT_DEEPLINK_CHOICE",
				w = {
					1: "mainnet",
					3: "ropsten",
					4: "rinkeby",
					5: "goerli",
					42: "kovan"
				}
		},
		"./node_modules/@walletconnect/legacy-types/dist/esm/crypto.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/events.js": function(e, t, n) {
			"use strict"
		},
		"./node_modules/@walletconnect/legacy-types/dist/esm/index.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@walletconnect/legacy-types/dist/esm/crypto.js");
			n.o(o, "ERROR_INVALID_RESPONSE") && n.d(t, "ERROR_INVALID_RESPONSE", (function() {
				return o.ERROR_INVALID_RESPONSE
			})), n.o(o, "ERROR_INVALID_URI") && n.d(t, "ERROR_INVALID_URI", (function() {
				return o.ERROR_INVALID_URI
			})), n.o(o, "ERROR_MISSING_ERROR") && n.d(t, "ERROR_MISSING_ERROR", (function() {
				return o.ERROR_MISSING_ERROR
			})), n.o(o, "ERROR_MISSING_ID") && n.d(t, "ERROR_MISSING_ID", (function() {
				return o.ERROR_MISSING_ID
			})), n.o(o, "ERROR_MISSING_JSON_RPC") && n.d(t, "ERROR_MISSING_JSON_RPC", (function() {
				return o.ERROR_MISSING_JSON_RPC
			})), n.o(o, "ERROR_MISSING_METHOD") && n.d(t, "ERROR_MISSING_METHOD", (function() {
				return o.ERROR_MISSING_METHOD
			})), n.o(o, "ERROR_MISSING_REQUIRED") && n.d(t, "ERROR_MISSING_REQUIRED", (function() {
				return o.ERROR_MISSING_REQUIRED
			})), n.o(o, "ERROR_MISSING_RESULT") && n.d(t, "ERROR_MISSING_RESULT", (function() {
				return o.ERROR_MISSING_RESULT
			})), n.o(o, "ERROR_QRCODE_MODAL_NOT_PROVIDED") && n.d(t, "ERROR_QRCODE_MODAL_NOT_PROVIDED", (function() {
				return o.ERROR_QRCODE_MODAL_NOT_PROVIDED
			})), n.o(o, "ERROR_QRCODE_MODAL_USER_CLOSED") && n.d(t, "ERROR_QRCODE_MODAL_USER_CLOSED", (function() {
				return o.ERROR_QRCODE_MODAL_USER_CLOSED
			})), n.o(o, "ERROR_SESSION_CONNECTED") && n.d(t, "ERROR_SESSION_CONNECTED", (function() {
				return o.ERROR_SESSION_CONNECTED
			})), n.o(o, "ERROR_SESSION_DISCONNECTED") && n.d(t, "ERROR_SESSION_DISCONNECTED", (function() {
				return o.ERROR_SESSION_DISCONNECTED
			})), n.o(o, "ERROR_SESSION_REJECTED") && n.d(t, "ERROR_SESSION_REJECTED", (function() {
				return o.ERROR_SESSION_REJECTED
			})), n.o(o, "INFURA_NETWORKS") && n.d(t, "INFURA_NETWORKS", (function() {
				return o.INFURA_NETWORKS
			})), n.o(o, "MOBILE_LINK_CHOICE_KEY") && n.d(t, "MOBILE_LINK_CHOICE_KEY", (function() {
				return o.MOBILE_LINK_CHOICE_KEY
			})), n.o(o, "RESERVED_EVENTS") && n.d(t, "RESERVED_EVENTS", (function() {
				return o.RESERVED_EVENTS
			})), n.o(o, "SIGNING_METHODS") && n.d(t, "SIGNING_METHODS", (function() {
				return o.SIGNING_METHODS
			}));
			var r = n("./node_modules/@walletconnect/legacy-types/dist/esm/constants/index.js");
			n.d(t, "ERROR_INVALID_RESPONSE", (function() {
				return r.a
			})), n.d(t, "ERROR_INVALID_URI", (function() {
				return r.b
			})), n.d(t, "ERROR_MISSING_ERROR", (function() {
				return r.c
			})), n.d(t, "ERROR_MISSING_ID", (function() {
				return r.d
			})), n.d(t, "ERROR_MISSING_JSON_RPC", (function() {
				return r.e
			})), n.d(t, "ERROR_MISSING_METHOD", (function() {
				return r.f
			})), n.d(t, "ERROR_MISSING_REQUIRED", (function() {
				return r.g
			})), n.d(t, "ERROR_MISSING_RESULT", (function() {
				return r.h
			})), n.d(t, "ERROR_QRCODE_MODAL_NOT_PROVIDED", (function() {
				return r.i
			})), n.d(t, "ERROR_QRCODE_MODAL_USER_CLOSED", (function() {
				return r.j
			})), n.d(t, "ERROR_SESSION_CONNECTED", (function() {
				return r.k
			})), n.d(t, "ERROR_SESSION_DISCONNECTED", (function() {
				return r.l
			})), n.d(t, "ERROR_SESSION_REJECTED", (function() {
				return r.m
			})), n.d(t, "INFURA_NETWORKS", (function() {
				return r.n
			})), n.d(t, "MOBILE_LINK_CHOICE_KEY", (function() {
				return r.o
			})), n.d(t, "RESERVED_EVENTS", (function() {
				return r.p
			})), n.d(t, "SIGNING_METHODS", (function() {
				return r.q
			}));
			n("./node_modules/@walletconnect/legacy-types/dist/esm/ethereum.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/events.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/network.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/protocol.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/registry.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/socket.js"), n("./node_modules/@walletconnect/legacy-types/dist/esm/storage.js")
		},
		"./node_modules/@walletconnect/legacy-types/dist/esm/jsonrpc.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/network.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/protocol.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/qrcode.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/registry.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/socket.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-types/dist/esm/storage.js": function(e, t) {},
		"./node_modules/@walletconnect/legacy-utils/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "convertArrayBufferToBuffer", (function() {
				return r
			})), n.d(t, "convertArrayBufferToUtf8", (function() {
				return i
			})), n.d(t, "convertArrayBufferToHex", (function() {
				return s
			})), n.d(t, "convertArrayBufferToNumber", (function() {
				return c
			})), n.d(t, "concatArrayBuffers", (function() {
				return a
			})), n.d(t, "convertBufferToArrayBuffer", (function() {
				return l
			})), n.d(t, "convertBufferToUtf8", (function() {
				return u
			})), n.d(t, "convertBufferToHex", (function() {
				return d
			})), n.d(t, "convertBufferToNumber", (function() {
				return f
			})), n.d(t, "concatBuffers", (function() {
				return _
			})), n.d(t, "convertUtf8ToArrayBuffer", (function() {
				return h
			})), n.d(t, "convertUtf8ToBuffer", (function() {
				return p
			})), n.d(t, "convertUtf8ToHex", (function() {
				return m
			})), n.d(t, "convertUtf8ToNumber", (function() {
				return g
			})), n.d(t, "convertHexToBuffer", (function() {
				return y
			})), n.d(t, "convertHexToArrayBuffer", (function() {
				return w
			})), n.d(t, "convertHexToUtf8", (function() {
				return v
			})), n.d(t, "convertHexToNumber", (function() {
				return b
			})), n.d(t, "convertNumberToBuffer", (function() {
				return E
			})), n.d(t, "convertNumberToArrayBuffer", (function() {
				return R
			})), n.d(t, "convertNumberToUtf8", (function() {
				return S
			})), n.d(t, "convertNumberToHex", (function() {
				return O
			})), n.d(t, "detectEnv", (function() {
				return B
			})), n.d(t, "detectOS", (function() {
				return H
			})), n.d(t, "isAndroid", (function() {
				return J
			})), n.d(t, "isIOS", (function() {
				return W
			})), n.d(t, "isMobile", (function() {
				return F
			})), n.d(t, "isNode", (function() {
				return z
			})), n.d(t, "isBrowser", (function() {
				return V
			})), n.d(t, "safeJsonParse", (function() {
				return Q
			})), n.d(t, "safeJsonStringify", (function() {
				return G
			})), n.d(t, "setLocal", (function() {
				return K
			})), n.d(t, "getLocal", (function() {
				return Y
			})), n.d(t, "removeLocal", (function() {
				return Z
			})), n.d(t, "getClientMeta", (function() {
				return ee
			})), n.d(t, "sanitizeHex", (function() {
				return oe
			})), n.d(t, "addHexPrefix", (function() {
				return re
			})), n.d(t, "removeHexPrefix", (function() {
				return ie
			})), n.d(t, "removeHexLeadingZeros", (function() {
				return se
			})), n.d(t, "payloadId", (function() {
				return ce
			})), n.d(t, "uuid", (function() {
				return ae
			})), n.d(t, "logDeprecationWarning", (function() {
				return le
			})), n.d(t, "getInfuraRpcUrl", (function() {
				return ue
			})), n.d(t, "getRpcUrl", (function() {
				return de
			})), n.d(t, "formatIOSMobile", (function() {
				return fe
			})), n.d(t, "saveMobileLinkInfo", (function() {
				return _e
			})), n.d(t, "getMobileRegistryEntry", (function() {
				return he
			})), n.d(t, "getMobileLinkRegistry", (function() {
				return pe
			})), n.d(t, "promisify", (function() {
				return me
			})), n.d(t, "formatRpcError", (function() {
				return ge
			})), n.d(t, "getWalletRegistryUrl", (function() {
				return we
			})), n.d(t, "getDappRegistryUrl", (function() {
				return ve
			})), n.d(t, "formatMobileRegistryEntry", (function() {
				return be
			})), n.d(t, "formatMobileRegistry", (function() {
				return Ee
			})), n.d(t, "isWalletConnectSession", (function() {
				return je
			})), n.d(t, "parseWalletConnectUri", (function() {
				return Ce
			})), n.d(t, "getQueryString", (function() {
				return Se
			})), n.d(t, "appendToQueryString", (function() {
				return Oe
			})), n.d(t, "parseQueryString", (function() {
				return Ie
			})), n.d(t, "formatQueryString", (function() {
				return xe
			})), n.d(t, "isEmptyString", (function() {
				return ke
			})), n.d(t, "isEmptyArray", (function() {
				return Ne
			})), n.d(t, "isBuffer", (function() {
				return Te
			})), n.d(t, "isTypedArray", (function() {
				return Me
			})), n.d(t, "isArrayBuffer", (function() {
				return Ae
			})), n.d(t, "getType", (function() {
				return Le
			})), n.d(t, "getEncoding", (function() {
				return qe
			})), n.d(t, "isHexString", (function() {
				return Pe
			})), n.d(t, "isJsonRpcSubscription", (function() {
				return De
			})), n.d(t, "isJsonRpcRequest", (function() {
				return Ue
			})), n.d(t, "isJsonRpcResponseSuccess", (function() {
				return Be
			})), n.d(t, "isJsonRpcResponseError", (function() {
				return He
			})), n.d(t, "isInternalEvent", (function() {
				return Je
			})), n.d(t, "isReservedEvent", (function() {
				return We
			})), n.d(t, "isSilentPayload", (function() {
				return Fe
			})), n.d(t, "getFromWindow", (function() {
				return j
			})), n.d(t, "getFromWindowOrThrow", (function() {
				return C
			})), n.d(t, "getDocumentOrThrow", (function() {
				return k
			})), n.d(t, "getDocument", (function() {
				return N
			})), n.d(t, "getNavigatorOrThrow", (function() {
				return T
			})), n.d(t, "getNavigator", (function() {
				return M
			})), n.d(t, "getLocationOrThrow", (function() {
				return A
			})), n.d(t, "getLocation", (function() {
				return L
			})), n.d(t, "getCryptoOrThrow", (function() {
				return q
			})), n.d(t, "getCrypto", (function() {
				return P
			})), n.d(t, "getLocalStorageOrThrow", (function() {
				return D
			})), n.d(t, "getLocalStorage", (function() {
				return U
			}));
			var o = n("./node_modules/@walletconnect/encoding/dist/esm/index.js");

			function r(e) {
				return o.b(new Uint8Array(e))
			}

			function i(e) {
				return o.e(new Uint8Array(e))
			}

			function s(e, t) {
				return o.c(new Uint8Array(e), !t)
			}

			function c(e) {
				return o.d(new Uint8Array(e))
			}

			function a() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return o.n(t.map(e => o.c(new Uint8Array(e))).join("")).buffer
			}

			function l(e) {
				return o.f(e).buffer
			}

			function u(e) {
				return o.i(e)
			}

			function d(e, t) {
				return o.g(e, !t)
			}

			function f(e) {
				return o.h(e)
			}

			function _() {
				return o.k(...arguments)
			}

			function h(e) {
				return o.C(e).buffer
			}

			function p(e) {
				return o.D(e)
			}

			function m(e, t) {
				return o.E(e, !t)
			}

			function g(e) {
				return o.F(e)
			}

			function y(e) {
				return o.o(e)
			}

			function w(e) {
				return o.n(e).buffer
			}

			function v(e) {
				return o.q(e)
			}

			function b(e) {
				return o.p(e)
			}

			function E(e) {
				return o.w(e)
			}

			function R(e) {
				return o.v(e).buffer
			}

			function S(e) {
				return o.y(e)
			}

			function O(e, t) {
				return o.x(Number(e), !t)
			}
			var I = n("./node_modules/detect-browser/es/index.js"),
				x = n("./node_modules/@walletconnect/window-getters/dist/cjs/index.js");
			const j = x.getFromWindow,
				C = x.getFromWindowOrThrow,
				k = x.getDocumentOrThrow,
				N = x.getDocument,
				T = x.getNavigatorOrThrow,
				M = x.getNavigator,
				A = x.getLocationOrThrow,
				L = x.getLocation,
				q = x.getCryptoOrThrow,
				P = x.getCrypto,
				D = x.getLocalStorageOrThrow,
				U = x.getLocalStorage;

			function B(e) {
				return Object(I.a)(e)
			}

			function H() {
				const e = B();
				return e && e.os ? e.os : void 0
			}

			function J() {
				const e = H();
				return !!e && e.toLowerCase().includes("android")
			}

			function W() {
				const e = H();
				return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
			}

			function F() {
				return !!H() && (J() || W())
			}

			function z() {
				const e = B();
				return !(!e || !e.name) && "node" === e.name.toLowerCase()
			}

			function V() {
				return !z() && !!M()
			}
			var $ = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js");
			const Q = $.a,
				G = $.b;

			function K(e, t) {
				const n = G(t),
					o = U();
				o && o.setItem(e, n)
			}

			function Y(e) {
				let t = null,
					n = null;
				const o = U();
				return o && (n = o.getItem(e)), t = n ? Q(n) : n
			}

			function Z(e) {
				const t = U();
				t && t.removeItem(e)
			}
			var X = n("./node_modules/@walletconnect/window-metadata/dist/cjs/index.js");

			function ee() {
				return X.getWindowMetadata()
			}
			var te = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js"),
				ne = n("./node_modules/@walletconnect/legacy-types/dist/esm/index.js");

			function oe(e) {
				return o.B(e)
			}

			function re(e) {
				return o.a(e)
			}

			function ie(e) {
				return o.A(e)
			}

			function se(e) {
				return o.z(o.a(e))
			}
			const ce = te.payloadId;

			function ae() {
				return ((e, t) => {
					for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
					return t
				})()
			}

			function le() {
				console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")
			}

			function ue(e, t) {
				let n;
				const o = ne.INFURA_NETWORKS[e];
				return o && (n = `https://${o}.infura.io/v3/${t}`), n
			}

			function de(e, t) {
				let n;
				const o = ue(e, t.infuraId);
				return t.custom && t.custom[e] ? n = t.custom[e] : o && (n = o), n
			}

			function fe(e, t) {
				const n = encodeURIComponent(e);
				return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
			}

			function _e(e) {
				const t = e.href.split("?")[0];
				K(ne.MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, e), {
					href: t
				}))
			}

			function he(e, t) {
				return e.filter(e => e.name.toLowerCase().includes(t.toLowerCase()))[0]
			}

			function pe(e, t) {
				let n = e;
				return t && (n = t.map(t => he(e, t)).filter(Boolean)), n
			}

			function me(e, t) {
				return async function() {
					for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
					return new Promise((n, r) => {
						e.apply(t, [...o, (e, t) => {
							null == e && r(e), n(t)
						}])
					})
				}
			}

			function ge(e) {
				const t = e.message || "Failed or Rejected Request";
				let n = -32e3;
				if (e && !e.code) switch (t) {
					case "Parse error":
						n = -32700;
						break;
					case "Invalid request":
						n = -32600;
						break;
					case "Method not found":
						n = -32601;
						break;
					case "Invalid params":
						n = -32602;
						break;
					case "Internal error":
						n = -32603;
						break;
					default:
						n = -32e3
				}
				const o = {
					code: n,
					message: t
				};
				return e.data && (o.data = e.data), o
			}
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const ye = "https://registry.walletconnect.com";

			function we() {
				return ye + "/api/v2/wallets"
			}

			function ve() {
				return ye + "/api/v2/dapps"
			}

			function be(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mobile";
				var n;
				return {
					name: e.name || "",
					shortName: e.metadata.shortName || "",
					color: e.metadata.colors.primary || "",
					logo: null !== (n = e.image_url.sm) && void 0 !== n ? n : "",
					universalLink: e[t].universal || "",
					deepLink: e[t].native || ""
				}
			}

			function Ee(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mobile";
				return Object.values(e).filter(e => !!e[t].universal || !!e[t].native).map(e => be(e, t))
			}
			var Re = n("./node_modules/@walletconnect/legacy-utils/node_modules/query-string/index.js");

			function Se(e) {
				const t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
				return void 0 !== t ? e.substr(t) : ""
			}

			function Oe(e, t) {
				let n = Ie(e);
				return e = xe(n = Object.assign(Object.assign({}, n), t))
			}

			function Ie(e) {
				return Re.parse(e)
			}

			function xe(e) {
				return Re.stringify(e)
			}

			function je(e) {
				return void 0 !== e.bridge
			}

			function Ce(e) {
				const t = e.indexOf(":"),
					n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
					o = e.substring(0, t);
				const r = function(e) {
					const t = e.split("@");
					return {
						handshakeTopic: t[0],
						version: parseInt(t[1], 10)
					}
				}(e.substring(t + 1, n));
				const i = function(e) {
					const t = Ie(e);
					return {
						key: t.key || "",
						bridge: t.bridge || ""
					}
				}(void 0 !== n ? e.substr(n) : "");
				return Object.assign(Object.assign({
					protocol: o
				}, r), i)
			}

			function ke(e) {
				return "" === e || "string" == typeof e && "" === e.trim()
			}

			function Ne(e) {
				return !(e && e.length)
			}

			function Te(e) {
				return o.s(e)
			}

			function Me(e) {
				return o.u(e)
			}

			function Ae(e) {
				return o.r(e)
			}

			function Le(e) {
				return o.m(e)
			}

			function qe(e) {
				return o.l(e)
			}

			function Pe(e, t) {
				return o.t(e, t)
			}

			function De(e) {
				return "object" == typeof e.params
			}

			function Ue(e) {
				return void 0 !== e.method
			}

			function Be(e) {
				return void 0 !== e.result
			}

			function He(e) {
				return void 0 !== e.error
			}

			function Je(e) {
				return void 0 !== e.event
			}

			function We(e) {
				return ne.RESERVED_EVENTS.includes(e) || e.startsWith("wc_")
			}

			function Fe(e) {
				return !!e.method.startsWith("wc_") || !ne.SIGNING_METHODS.includes(e.method)
			}
		},
		"./node_modules/@walletconnect/legacy-utils/node_modules/decode-uri-component/index.js": function(e, t, n) {
			"use strict";
			var o = new RegExp("%[a-f0-9]{2}", "gi"),
				r = new RegExp("(%[a-f0-9]{2})+", "gi");

			function i(e, t) {
				try {
					return decodeURIComponent(e.join(""))
				} catch (r) {}
				if (1 === e.length) return e;
				t = t || 1;
				var n = e.slice(0, t),
					o = e.slice(t);
				return Array.prototype.concat.call([], i(n), i(o))
			}

			function s(e) {
				try {
					return decodeURIComponent(e)
				} catch (r) {
					for (var t = e.match(o), n = 1; n < t.length; n++) t = (e = i(t, n).join("")).match(o);
					return e
				}
			}
			e.exports = function(e) {
				if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
				try {
					return e = e.replace(/\+/g, " "), decodeURIComponent(e)
				} catch (t) {
					return function(e) {
						for (var n = {
								"%FE%FF": "��",
								"%FF%FE": "��"
							}, o = r.exec(e); o;) {
							try {
								n[o[0]] = decodeURIComponent(o[0])
							} catch (t) {
								var i = s(o[0]);
								i !== o[0] && (n[o[0]] = i)
							}
							o = r.exec(e)
						}
						n["%C2"] = "�";
						for (var c = Object.keys(n), a = 0; a < c.length; a++) {
							var l = c[a];
							e = e.replace(new RegExp(l, "g"), n[l])
						}
						return e
					}(e)
				}
			}
		},
		"./node_modules/@walletconnect/legacy-utils/node_modules/query-string/index.js": function(e, t, n) {
			"use strict";
			const o = n("./node_modules/strict-uri-encode/index.js"),
				r = n("./node_modules/@walletconnect/legacy-utils/node_modules/decode-uri-component/index.js"),
				i = n("./node_modules/split-on-first/index.js"),
				s = n("./node_modules/filter-obj/index.js");

			function c(e) {
				if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
			}

			function a(e, t) {
				return t.encode ? t.strict ? o(e) : encodeURIComponent(e) : e
			}

			function l(e, t) {
				return t.decode ? r(e) : e
			}

			function u(e) {
				const t = e.indexOf("#");
				return -1 !== t && (e = e.slice(0, t)), e
			}

			function d(e) {
				const t = (e = u(e)).indexOf("?");
				return -1 === t ? "" : e.slice(t + 1)
			}

			function f(e, t) {
				return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
			}

			function _(e, t) {
				c((t = Object.assign({
					decode: !0,
					sort: !0,
					arrayFormat: "none",
					arrayFormatSeparator: ",",
					parseNumbers: !1,
					parseBooleans: !1
				}, t)).arrayFormatSeparator);
				const n = function(e) {
						let t;
						switch (e.arrayFormat) {
							case "index":
								return (e, n, o) => {
									t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === o[e] && (o[e] = {}), o[e][t[1]] = n) : o[e] = n
								};
							case "bracket":
								return (e, n, o) => {
									t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== o[e] ? o[e] = [].concat(o[e], n) : o[e] = [n] : o[e] = n
								};
							case "comma":
							case "separator":
								return (t, n, o) => {
									const r = "string" == typeof n && n.includes(e.arrayFormatSeparator),
										i = "string" == typeof n && !r && l(n, e).includes(e.arrayFormatSeparator);
									n = i ? l(n, e) : n;
									const s = r || i ? n.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === n ? n : l(n, e);
									o[t] = s
								};
							default:
								return (e, t, n) => {
									void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
								}
						}
					}(t),
					o = Object.create(null);
				if ("string" != typeof e) return o;
				if (!(e = e.trim().replace(/^[?#&]/, ""))) return o;
				for (const r of e.split("&")) {
					if ("" === r) continue;
					let [e, s] = i(t.decode ? r.replace(/\+/g, " ") : r, "=");
					s = void 0 === s ? null : ["comma", "separator"].includes(t.arrayFormat) ? s : l(s, t), n(l(e, t), s, o)
				}
				for (const r of Object.keys(o)) {
					const e = o[r];
					if ("object" == typeof e && null !== e)
						for (const n of Object.keys(e)) e[n] = f(e[n], t);
					else o[r] = f(e, t)
				}
				return !1 === t.sort ? o : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((e, t) => {
					const n = o[t];
					return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
						return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
					}(n) : e[t] = n, e
				}, Object.create(null))
			}
			t.extract = d, t.parse = _, t.stringify = (e, t) => {
				if (!e) return "";
				c((t = Object.assign({
					encode: !0,
					strict: !0,
					arrayFormat: "none",
					arrayFormatSeparator: ","
				}, t)).arrayFormatSeparator);
				const n = n => t.skipNull && (e => null == e)(e[n]) || t.skipEmptyString && "" === e[n],
					o = function(e) {
						switch (e.arrayFormat) {
							case "index":
								return t => (n, o) => {
									const r = n.length;
									return void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : null === o ? [...n, [a(t, e), "[", r, "]"].join("")] : [...n, [a(t, e), "[", a(r, e), "]=", a(o, e)].join("")]
								};
							case "bracket":
								return t => (n, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : null === o ? [...n, [a(t, e), "[]"].join("")] : [...n, [a(t, e), "[]=", a(o, e)].join("")];
							case "comma":
							case "separator":
								return t => (n, o) => null == o || 0 === o.length ? n : 0 === n.length ? [
									[a(t, e), "=", a(o, e)].join("")
								] : [
									[n, a(o, e)].join(e.arrayFormatSeparator)
								];
							default:
								return t => (n, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : null === o ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(o, e)].join("")]
						}
					}(t),
					r = {};
				for (const s of Object.keys(e)) n(s) || (r[s] = e[s]);
				const i = Object.keys(r);
				return !1 !== t.sort && i.sort(t.sort), i.map(n => {
					const r = e[n];
					return void 0 === r ? "" : null === r ? a(n, t) : Array.isArray(r) ? r.reduce(o(n), []).join("&") : a(n, t) + "=" + a(r, t)
				}).filter(e => e.length > 0).join("&")
			}, t.parseUrl = (e, t) => {
				t = Object.assign({
					decode: !0
				}, t);
				const [n, o] = i(e, "#");
				return Object.assign({
					url: n.split("?")[0] || "",
					query: _(d(e), t)
				}, t && t.parseFragmentIdentifier && o ? {
					fragmentIdentifier: l(o, t)
				} : {})
			}, t.stringifyUrl = (e, n) => {
				n = Object.assign({
					encode: !0,
					strict: !0
				}, n);
				const o = u(e.url).split("?")[0] || "",
					r = t.extract(e.url),
					i = t.parse(r, {
						sort: !1
					}),
					s = Object.assign(i, e.query);
				let c = t.stringify(s, n);
				c && (c = `?${c}`);
				let l = function(e) {
					let t = "";
					const n = e.indexOf("#");
					return -1 !== n && (t = e.slice(n)), t
				}(e.url);
				return e.fragmentIdentifier && (l = `#${a(e.fragmentIdentifier,n)}`), `${o}${c}${l}`
			}, t.pick = (e, n, o) => {
				o = Object.assign({
					parseFragmentIdentifier: !0
				}, o);
				const {
					url: r,
					query: i,
					fragmentIdentifier: c
				} = t.parseUrl(e, o);
				return t.stringifyUrl({
					url: r,
					query: s(i, n),
					fragmentIdentifier: c
				}, o)
			}, t.exclude = (e, n, o) => {
				const r = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
				return t.pick(e, r, o)
			}
		},
		"./node_modules/@walletconnect/randombytes/dist/esm/browser/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/@walletconnect/environment/dist/cjs/index.js");

			function r(e) {
				return o.getBrowerCrypto().getRandomValues(new Uint8Array(e))
			}
		},
		"./node_modules/@walletconnect/safe-json/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
				r = e => {
					const t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
					return JSON.parse(t, (e, t) => {
						return "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
					})
				};

			function i(e) {
				if ("string" != typeof e) throw new Error(`Cannot safe json parse value of type ${typeof e}`);
				try {
					return r(e)
				} catch (t) {
					return e
				}
			}

			function s(e) {
				return "string" == typeof e ? e : o(e) || ""
			}
		},
		"./node_modules/@walletconnect/window-getters/dist/cjs/index.js": function(e, t, n) {
			"use strict";

			function o(e) {
				let t = void 0;
				return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
			}

			function r(e) {
				const t = o(e);
				if (!t) throw new Error(`${e} is not defined in Window`);
				return t
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = o, t.getFromWindowOrThrow = r, t.getDocumentOrThrow = function() {
				return r("document")
			}, t.getDocument = function() {
				return o("document")
			}, t.getNavigatorOrThrow = function() {
				return r("navigator")
			}, t.getNavigator = function() {
				return o("navigator")
			}, t.getLocationOrThrow = function() {
				return r("location")
			}, t.getLocation = function() {
				return o("location")
			}, t.getCryptoOrThrow = function() {
				return r("crypto")
			}, t.getCrypto = function() {
				return o("crypto")
			}, t.getLocalStorageOrThrow = function() {
				return r("localStorage")
			}, t.getLocalStorage = function() {
				return o("localStorage")
			}
		},
		"./node_modules/@walletconnect/window-metadata/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getWindowMetadata = void 0;
			const o = n("./node_modules/@walletconnect/window-getters/dist/cjs/index.js");
			t.getWindowMetadata = function() {
				let e, t;
				try {
					e = o.getDocumentOrThrow(), t = o.getLocationOrThrow()
				} catch (i) {
					return null
				}

				function n() {
					for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
					const r = e.getElementsByTagName("meta");
					for (let e = 0; e < r.length; e++) {
						const t = r[e],
							o = ["itemprop", "property", "name"].map(e => t.getAttribute(e)).filter(e => !!e && n.includes(e));
						if (o.length && o) {
							const e = t.getAttribute("content");
							if (e) return e
						}
					}
					return ""
				}
				const r = function() {
					let t = n("name", "og:site_name", "og:title", "twitter:title");
					return t || (t = e.title), t
				}();
				return {
					description: n("description", "og:description", "twitter:description", "keywords"),
					url: t.origin,
					icons: function() {
						const n = e.getElementsByTagName("link"),
							o = [];
						for (let e = 0; e < n.length; e++) {
							const r = n[e],
								i = r.getAttribute("rel");
							if (i && i.toLowerCase().indexOf("icon") > -1) {
								const e = r.getAttribute("href");
								if (e)
									if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
										let n = t.protocol + "//" + t.host;
										if (0 === e.indexOf("/")) n += e;
										else {
											const o = t.pathname.split("/");
											o.pop(), n += o.join("/") + "/" + e
										}
										o.push(n)
									} else if (0 === e.indexOf("//")) {
									const n = t.protocol + e;
									o.push(n)
								} else o.push(e)
							}
						}
						return o
					}(),
					name: r
				}
			}
		},
		"./node_modules/copy-to-clipboard/index.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/toggle-selection/index.js"),
				r = {
					"text/plain": "Text",
					"text/html": "Url",
					default: "Text"
				},
				i = "Copy to clipboard: #{key}, Enter";
			e.exports = function(e, t) {
				var n, s, c, a, l, u, d = !1;
				t || (t = {}), n = t.debug || !1;
				try {
					if (c = o(), a = document.createRange(), l = document.getSelection(), (u = document.createElement("span")).textContent = e, u.ariaHidden = "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(o) {
							if (o.stopPropagation(), t.format)
								if (o.preventDefault(), void 0 === o.clipboardData) {
									n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
									var i = r[t.format] || r.default;
									window.clipboardData.setData(i, e)
								} else o.clipboardData.clearData(), o.clipboardData.setData(t.format, e);
							t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData))
						})), document.body.appendChild(u), a.selectNodeContents(u), l.addRange(a), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
					d = !0
				} catch (f) {
					n && console.error("unable to copy using execCommand: ", f), n && console.warn("trying IE specific stuff");
					try {
						window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
					} catch (f) {
						n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), s = function(e) {
							var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
							return e.replace(/#{\s*key\s*}/g, t)
						}("message" in t ? t.message : i), window.prompt(s, e)
					}
				} finally {
					l && ("function" == typeof l.removeRange ? l.removeRange(a) : l.removeAllRanges()), u && document.body.removeChild(u), c()
				}
				return d
			}
		},
		"./node_modules/detect-browser/es/index.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return _
				}));
				var o = function(e, t, n) {
						if (n || 2 === arguments.length)
							for (var o, r = 0, i = t.length; r < i; r++) !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
						return e.concat(o || Array.prototype.slice.call(t))
					},
					r = function(e, t, n) {
						this.name = e, this.version = t, this.os = n, this.type = "browser"
					},
					i = function(t) {
						this.version = t, this.type = "node", this.name = "node", this.os = e.platform
					},
					s = function(e, t, n, o) {
						this.name = e, this.version = t, this.os = n, this.bot = o, this.type = "bot-device"
					},
					c = function() {
						this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
					},
					a = function() {
						this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
					},
					l = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
					u = 3,
					d = [
						["aol", /AOLShield\/([0-9\._]+)/],
						["edge", /Edge\/([0-9\._]+)/],
						["edge-ios", /EdgiOS\/([0-9\._]+)/],
						["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
						["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
						["samsung", /SamsungBrowser\/([0-9\.]+)/],
						["silk", /\bSilk\/([0-9._-]+)\b/],
						["miui", /MiuiBrowser\/([0-9\.]+)$/],
						["beaker", /BeakerBrowser\/([0-9\.]+)/],
						["edge-chromium", /EdgA?\/([0-9\.]+)/],
						["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
						["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
						["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
						["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
						["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
						["fxios", /FxiOS\/([0-9\.]+)/],
						["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
						["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
						["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
						["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
						["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
						["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
						["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
						["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
						["ie", /MSIE\s(7\.0)/],
						["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
						["android", /Android\s([0-9\.]+)/],
						["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
						["safari", /Version\/([0-9\._]+).*Safari/],
						["facebook", /FB[AS]V\/([0-9\.]+)/],
						["instagram", /Instagram\s([0-9\.]+)/],
						["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
						["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
						["curl", /^curl\/([0-9\.]+)$/],
						["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
					],
					f = [
						["iOS", /iP(hone|od|ad)/],
						["Android OS", /Android/],
						["BlackBerry OS", /BlackBerry|BB10/],
						["Windows Mobile", /IEMobile/],
						["Amazon OS", /Kindle/],
						["Windows 3.11", /Win16/],
						["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
						["Windows 98", /(Windows 98)|(Win98)/],
						["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
						["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
						["Windows Server 2003", /(Windows NT 5.2)/],
						["Windows Vista", /(Windows NT 6.0)/],
						["Windows 7", /(Windows NT 6.1)/],
						["Windows 8", /(Windows NT 6.2)/],
						["Windows 8.1", /(Windows NT 6.3)/],
						["Windows 10", /(Windows NT 10.0)/],
						["Windows ME", /Windows ME/],
						["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
						["Open BSD", /OpenBSD/],
						["Sun OS", /SunOS/],
						["Chrome OS", /CrOS/],
						["Linux", /(Linux)|(X11)/],
						["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
						["QNX", /QNX/],
						["BeOS", /BeOS/],
						["OS/2", /OS\/2/]
					];

				function _(t) {
					return t ? p(t) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new a : "undefined" != typeof navigator ? p(navigator.userAgent) : void 0 !== e && e.version ? new i(e.version.slice(1)) : null
				}

				function h(e) {
					return "" !== e && d.reduce((function(t, n) {
						var o = n[0],
							r = n[1];
						if (t) return t;
						var i = r.exec(e);
						return !!i && [o, i]
					}), !1)
				}

				function p(e) {
					var t = h(e);
					if (!t) return null;
					var n = t[0],
						i = t[1];
					if ("searchbot" === n) return new c;
					var a = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
					a ? a.length < u && (a = o(o([], a, !0), function(e) {
						for (var t = [], n = 0; n < e; n++) t.push("0");
						return t
					}(u - a.length), !0)) : a = [];
					var d = a.join("."),
						_ = function(e) {
							for (var t = 0, n = f.length; t < n; t++) {
								var o = f[t],
									r = o[0];
								if (o[1].exec(e)) return r
							}
							return null
						}(e),
						p = l.exec(e);
					return p && p[1] ? new s(n, d, _, p[1]) : new r(n, d, _)
				}
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var o = {
				single_source_shortest_paths: function(e, t, n) {
					var r = {},
						i = {};
					i[t] = 0;
					var s, c, a, l, u, d, f, _ = o.PriorityQueue.make();
					for (_.push(t, 0); !_.empty();)
						for (a in c = (s = _.pop()).value, l = s.cost, u = e[c] || {}) u.hasOwnProperty(a) && (d = l + u[a], f = i[a], (void 0 === i[a] || f > d) && (i[a] = d, _.push(a, d), r[a] = c));
					if (void 0 !== n && void 0 === i[n]) {
						var h = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(h)
					}
					return r
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], o = t; o;) n.push(o), e[o], o = e[o];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var r = o.single_source_shortest_paths(e, t, n);
					return o.extract_shortest_path_from_predecessor_list(r, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = o.PriorityQueue,
							r = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
						return r.queue = [], r.sorter = e.sorter || n.default_sorter, r
					},
					default_sorter: function(e, t) {
						return e.cost - t.cost
					},
					push: function(e, t) {
						var n = {
							value: e,
							cost: t
						};
						this.queue.push(n), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			e.exports = o
		},
		"./node_modules/encode-utf8/index.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				for (var t = [], n = e.length, o = 0; o < n; o++) {
					var r = e.charCodeAt(o);
					if (r >= 55296 && r <= 56319 && n > o + 1) {
						var i = e.charCodeAt(o + 1);
						i >= 56320 && i <= 57343 && (r = 1024 * (r - 55296) + i - 56320 + 65536, o += 1)
					}
					r < 128 ? t.push(r) : r < 2048 ? (t.push(r >> 6 | 192), t.push(63 & r | 128)) : r < 55296 || r >= 57344 && r < 65536 ? (t.push(r >> 12 | 224), t.push(r >> 6 & 63 | 128), t.push(63 & r | 128)) : r >= 65536 && r <= 1114111 ? (t.push(r >> 18 | 240), t.push(r >> 12 & 63 | 128), t.push(r >> 6 & 63 | 128), t.push(63 & r | 128)) : t.push(239, 191, 189)
				}
				return new Uint8Array(t).buffer
			}
		},
		"./node_modules/filter-obj/index.js": function(e, t, n) {
			"use strict";
			e.exports = function(e, t) {
				for (var n = {}, o = Object.keys(e), r = Array.isArray(t), i = 0; i < o.length; i++) {
					var s = o[i],
						c = e[s];
					(r ? -1 !== t.indexOf(s) : t(s, c, e)) && (n[s] = c)
				}
				return n
			}
		},
		"./node_modules/is-typedarray/index.js": function(e, t) {
			e.exports = r, r.strict = i, r.loose = s;
			var n = Object.prototype.toString,
				o = {
					"[object Int8Array]": !0,
					"[object Int16Array]": !0,
					"[object Int32Array]": !0,
					"[object Uint8Array]": !0,
					"[object Uint8ClampedArray]": !0,
					"[object Uint16Array]": !0,
					"[object Uint32Array]": !0,
					"[object Float32Array]": !0,
					"[object Float64Array]": !0
				};

			function r(e) {
				return i(e) || s(e)
			}

			function i(e) {
				return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
			}

			function s(e) {
				return o[n.call(e)]
			}
		},
		"./node_modules/toggle-selection/index.js": function(e, t) {
			e.exports = function() {
				var e = document.getSelection();
				if (!e.rangeCount) return function() {};
				for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++) n.push(e.getRangeAt(o));
				switch (t.tagName.toUpperCase()) {
					case "INPUT":
					case "TEXTAREA":
						t.blur();
						break;
					default:
						t = null
				}
				return e.removeAllRanges(),
					function() {
						"Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
							e.addRange(t)
						})), t && t.focus()
					}
			}
		},
		"./node_modules/typedarray-to-buffer/index.js": function(e, t, n) {
			(function(t) {
				var o = n("./node_modules/is-typedarray/index.js").strict;
				e.exports = function(e) {
					if (o(e)) {
						var n = t.from(e.buffer);
						return e.byteLength !== e.buffer.byteLength && (n = n.slice(e.byteOffset, e.byteOffset + e.byteLength)), n
					}
					return t.from(e)
				}
			}).call(this, n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/ws/browser.js": function(e, t, n) {
			"use strict";
			e.exports = function() {
				throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.4a32ed378f2ca54f6efe.js.map