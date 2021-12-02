// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.43f0791c3a86e396f07e.js
// Retrieved at 12/2/2021, 6:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				o = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const i = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function c(e) {
				Object(n.l)(e, 20) || i.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					r = new Uint8Array(40);
				for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
				const s = Object(n.a)(Object(o.a)(r));
				for (let n = 0; n < 40; n += 2) s[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & s[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const l = {};
			for (let v = 0; v < 10; v++) l[String(v)] = String(v);
			for (let v = 0; v < 26; v++) l[String.fromCharCode(65 + v)] = String(10 + v);
			const d = Math.floor((u = 9007199254740991, Math.log10 ? Math.log10(u) : Math.log(u) / Math.LN10));
			var u;

			function m(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => l[e]).join("");
				for (; t.length >= d;) {
					let e = t.substring(0, d);
					t = parseInt(e, 10) % 97 + t.substring(e.length)
				}
				let r = String(98 - parseInt(t, 10) % 97);
				for (; r.length < 2;) r = "0" + r;
				return r
			}

			function h(e) {
				let t = null;
				if ("string" != typeof e && i.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = c(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && i.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== m(e) && i.throwArgumentError("bad icap checksum", "address", e), t = Object(s.c)(e.substring(4)); t.length < 40;) t = "0" + t;
					t = c("0x" + t)
				} else i.throwArgumentError("invalid address", "address", e);
				return t
			}

			function f(e) {
				try {
					return h(e), !0
				} catch (t) {}
				return !1
			}

			function p(e) {
				let t = Object(s.b)(h(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + m("XE00" + t) + t
			}

			function b(e) {
				let t = null;
				try {
					t = h(e.from)
				} catch (c) {
					i.throwArgumentError("missing from address", "transaction", e)
				}
				const r = Object(n.o)(Object(n.a)(s.a.from(e.nonce).toHexString()));
				return h(Object(n.e)(Object(o.a)(Object(a.encode)([t, r])), 12))
			}

			function g(e, t, r) {
				return 32 !== Object(n.d)(t) && i.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(n.d)(r) && i.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), h(Object(n.e)(Object(o.a)(Object(n.b)(["0xff", h(e), t, r])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "b", (function() {
				return x
			}));
			var n = r("./node_modules/bn.js/lib/bn.js"),
				s = r.n(n),
				o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				i = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				c = s.a.BN;
			const l = new a.a(i.a),
				d = {},
				u = 9007199254740991;

			function m(e) {
				return null != e && (f.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(o.l)(e) || "bigint" == typeof e || Object(o.j)(e))
			}
			let h = !1;
			class f {
				constructor(e, t) {
					l.checkNew(new.target, f), e !== d && l.throwError("cannot call constructor directly; use BigNumber.from", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return b(g(this).fromTwos(e))
				}
				toTwos(e) {
					return b(g(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? f.from(this._hex.substring(1)) : this
				}
				add(e) {
					return b(g(this).add(g(e)))
				}
				sub(e) {
					return b(g(this).sub(g(e)))
				}
				div(e) {
					return f.from(e).isZero() && v("division by zero", "div"), b(g(this).div(g(e)))
				}
				mul(e) {
					return b(g(this).mul(g(e)))
				}
				mod(e) {
					const t = g(e);
					return t.isNeg() && v("cannot modulo negative values", "mod"), b(g(this).umod(t))
				}
				pow(e) {
					const t = g(e);
					return t.isNeg() && v("cannot raise to negative values", "pow"), b(g(this).pow(t))
				}
				and(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'and' negative values", "and"), b(g(this).and(t))
				}
				or(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'or' negative values", "or"), b(g(this).or(t))
				}
				xor(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'xor' negative values", "xor"), b(g(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && v("cannot mask negative values", "mask"), b(g(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shl"), b(g(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shr"), b(g(this).shrn(e))
				}
				eq(e) {
					return g(this).eq(g(e))
				}
				lt(e) {
					return g(this).lt(g(e))
				}
				lte(e) {
					return g(this).lte(g(e))
				}
				gt(e) {
					return g(this).gt(g(e))
				}
				gte(e) {
					return g(this).gte(g(e))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return g(this).isZero()
				}
				toNumber() {
					try {
						return g(this).toNumber()
					} catch (e) {
						v("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return l.throwError("this platform does not support BigInt", a.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", a.a.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", a.a.errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
				}
				toHexString() {
					return this._hex
				}
				toJSON(e) {
					return {
						type: "BigNumber",
						hex: this.toHexString()
					}
				}
				static from(e) {
					if (e instanceof f) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new f(d, p(e)) : e.match(/^-?[0-9]+$/) ? new f(d, p(new c(e))) : l.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && v("underflow", "BigNumber.from", e), (e >= u || e <= -u) && v("overflow", "BigNumber.from", e), f.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return f.from(t.toString());
					if (Object(o.j)(t)) return f.from(Object(o.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return f.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(o.l)(e) || "-" === e[0] && Object(o.l)(e.substring(1)))) return f.from(e)
						} return l.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function p(e) {
				if ("string" != typeof e) return p(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && l.throwArgumentError("invalid hex", "value", e), "0x00" === (e = p(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function b(e) {
				return f.from(p(e))
			}

			function g(e) {
				const t = f.from(e).toHexString();
				return "-" === t[0] ? new c("-" + t.substring(3), 16) : new c(t.substring(2), 16)
			}

			function v(e, t, r) {
				const n = {
					fault: e,
					operation: t
				};
				return null != r && (n.value = r), l.throwError(e, a.a.errors.NUMERIC_FAULT, n)
			}

			function E(e) {
				return new c(e, 36).toString(16)
			}

			function x(e) {
				return new c(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return a
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "o", (function() {
				return d
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "m", (function() {
				return y
			}));
			const n = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function s(e) {
				return !!e.toHexString
			}

			function o(e) {
				return e.slice ? e : (e.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function a(e) {
				return m(e) && !(e.length % 2) || i(e)
			}

			function i(e) {
				if (null == e) return !1;
				if (e.constructor === Uint8Array) return !0;
				if ("string" == typeof e) return !1;
				if (null == e.length) return !1;
				for (let t = 0; t < e.length; t++) {
					const r = e[t];
					if ("number" != typeof r || r < 0 || r >= 256 || r % 1) return !1
				}
				return !0
			}

			function c(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid arrayify value");
					const t = [];
					for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === t.length && t.push(0), o(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), s(e) && (e = e.toHexString()), m(e)) {
					let r = e.substring(2);
					r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
					const s = [];
					for (let e = 0; e < r.length; e += 2) s.push(parseInt(r.substring(e, e + 2), 16));
					return o(new Uint8Array(s))
				}
				return i(e) ? o(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
			}

			function l(e) {
				const t = e.map(e => c(e)),
					r = t.reduce((e, t) => e + t.length, 0),
					n = new Uint8Array(r);
				return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), o(n)
			}

			function d(e) {
				let t = c(e);
				if (0 === t.length) return t;
				let r = 0;
				for (; r < t.length && 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}

			function u(e, t) {
				(e = c(e)).length > t && n.throwArgumentError("value out of range", "value", arguments[0]);
				const r = new Uint8Array(t);
				return r.set(e, t - e.length), o(r)
			}

			function m(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			const h = "0123456789abcdef";

			function f(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid hexlify value");
					let t = "";
					for (; e;) t = h[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), s(e)) return e.toHexString();
				if (m(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (i(e)) {
					let t = "0x";
					for (let r = 0; r < e.length; r++) {
						let n = e[r];
						t += h[(240 & n) >> 4] + h[15 & n]
					}
					return t
				}
				return n.throwArgumentError("invalid hexlify value", "value", e)
			}

			function p(e) {
				if ("string" != typeof e) e = f(e);
				else if (!m(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function b(e, t, r) {
				return "string" != typeof e ? e = f(e) : (!m(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}

			function g(e) {
				let t = "0x";
				return e.forEach(e => {
					t += f(e).substring(2)
				}), t
			}

			function v(e) {
				const t = E(f(e, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function E(e) {
				"string" != typeof e && (e = f(e)), m(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function x(e, t) {
				for ("string" != typeof e ? e = f(e) : m(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function N(e) {
				const t = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (a(e)) {
					const r = c(e);
					65 !== r.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = f(r.slice(0, 32)), t.s = f(r.slice(32, 64)), t.v = r[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = f(r.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const r = u(c(t._vs), 32);
						t._vs = f(r);
						const s = r[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = s : t.recoveryParam !== s && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
						const o = f(r);
						null == t.s ? t.s = o : t.s !== o && n.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && m(t.r) ? t.r = x(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && m(t.s) ? t.s = x(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
					const r = c(t.s);
					r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
					const s = f(r);
					t._vs && (m(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = x(t._vs, 32)), null == t._vs ? t._vs = s : t._vs !== s && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function y(e) {
				return f(l([(e = N(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				s = r.n(n),
				o = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function a(e) {
				return "0x" + s.a.keccak_256(Object(o.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var s = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, o = "0123456789abcdef".split(""), a = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], d = function(e, t, r) {
							return function(n) {
								return new N(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, s) {
								return new N(e, t, s).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = d(e, t, "hex");
							r.create = function() {
								return new N(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < l.length; ++n) {
								var s = l[n];
								r[s] = d(e, t, s)
							}
							return r
						}, h = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: c,
							createMethod: m
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: c,
							createMethod: m
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var r = u(e, t, "hex");
								r.create = function(r) {
									return new N(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < l.length; ++n) {
									var s = l[n];
									r[s] = u(e, t, s)
								}
								return r
							}
						}], f = {}, p = [], b = 0; b < h.length; ++b)
						for (var g = h[b], v = g.bits, E = 0; E < v.length; ++E) {
							var x = g.name + "_" + v[E];
							p.push(x), f[x] = g.createMethod(v[E], g.padding)
						}

					function N(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, s = e.length, o = this.blocks, i = this.byteCount, c = this.blockCount, l = 0, d = this.s; l < s;) {
							if (this.reset)
								for (this.reset = !1, o[0] = this.block, r = 1; r < c + 1; ++r) o[r] = 0;
							if (t)
								for (r = this.start; l < s && r < i; ++l) o[r >> 2] |= e[l] << a[3 & r++];
							else
								for (r = this.start; l < s && r < i; ++l)(n = e.charCodeAt(l)) < 128 ? o[r >> 2] |= n << a[3 & r++] : n < 2048 ? (o[r >> 2] |= (192 | n >> 6) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (o[r >> 2] |= (224 | n >> 12) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), o[r >> 2] |= (240 | n >> 18) << a[3 & r++], o[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = o[c], r = 0; r < c; ++r) d[r] ^= o[r];
								y(d), this.reset = !0
							} else this.start = r
						}
						return this
					}, N.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						y(n)
					}, N.prototype.toString = N.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, s = this.extraBytes, a = 0, i = 0, c = ""; i < n;) {
							for (a = 0; a < t && i < n; ++a, ++i) e = r[a], c += o[e >> 4 & 15] + o[15 & e] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 28 & 15] + o[e >> 24 & 15];
							i % t == 0 && (y(r), a = 0)
						}
						return s && (e = r[a], s > 0 && (c += o[e >> 4 & 15] + o[15 & e]), s > 1 && (c += o[e >> 12 & 15] + o[e >> 8 & 15]), s > 2 && (c += o[e >> 20 & 15] + o[e >> 16 & 15])), c
					}, N.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							s = this.extraBytes,
							o = 0,
							a = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); a < n;) {
							for (o = 0; o < t && a < n; ++o, ++a) c[a] = r[o];
							a % t == 0 && y(r)
						}
						return s && (c[o] = r[o], e = e.slice(0, i)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, s = this.outputBlocks, o = this.extraBytes, a = 0, i = 0, c = []; i < s;) {
							for (a = 0; a < r && i < s; ++a, ++i) e = i << 2, t = n[a], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % r == 0 && y(n)
						}
						return o && (e = i << 2, t = n[a], o > 0 && (c[e] = 255 & t), o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var y = function(e) {
						var t, r, n, s, o, a, c, l, d, u, m, h, f, p, b, g, v, E, x, N, y, _, w, I, O, j, A, T, C, R, k, P, U, S, M, B, D, F, G, L, V, W, H, z, X, Y, J, K, q, Z, Q, $, ee, te, re, ne, se, oe, ae, ie, ce, le, de;
						for (n = 0; n < 48; n += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | c >>> 31), r = (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = s ^ (l << 1 | d >>> 31), r = o ^ (d << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (u << 1 | m >>> 31), r = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (h << 1 | f >>> 31), r = d ^ (f << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (s << 1 | o >>> 31), r = m ^ (o << 1 | s >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], b = e[1], Y = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, T = e[20] << 3 | e[21] >>> 29, C = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, W = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, S = e[2] << 1 | e[3] >>> 31, M = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, K = e[22] << 10 | e[23] >>> 22, q = e[23] << 10 | e[22] >>> 22, R = e[33] << 13 | e[32] >>> 19, k = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, de = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, P = e[45] << 29 | e[44] >>> 3, U = e[44] << 29 | e[45] >>> 3, I = e[6] << 28 | e[7] >>> 4, O = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, F = e[26] << 25 | e[27] >>> 7, G = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, y = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, j = e[18] << 20 | e[19] >>> 12, A = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, L = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, _ = e[48] << 14 | e[49] >>> 18, w = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~g & E, e[1] = b ^ ~v & x, e[10] = I ^ ~j & T, e[11] = O ^ ~A & C, e[20] = S ^ ~B & F, e[21] = M ^ ~D & G, e[30] = z ^ ~Y & K, e[31] = X ^ ~J & q, e[40] = te ^ ~ne & oe, e[41] = re ^ ~se & ae, e[2] = g ^ ~E & N, e[3] = v ^ ~x & y, e[12] = j ^ ~T & R, e[13] = A ^ ~C & k, e[22] = B ^ ~F & L, e[23] = D ^ ~G & V, e[32] = Y ^ ~K & Z, e[33] = J ^ ~q & Q, e[42] = ne ^ ~oe & ie, e[43] = se ^ ~ae & ce, e[4] = E ^ ~N & _, e[5] = x ^ ~y & w, e[14] = T ^ ~R & P, e[15] = C ^ ~k & U, e[24] = F ^ ~L & W, e[25] = G ^ ~V & H, e[34] = K ^ ~Z & $, e[35] = q ^ ~Q & ee, e[44] = oe ^ ~ie & le, e[45] = ae ^ ~ce & de, e[6] = N ^ ~_ & p, e[7] = y ^ ~w & b, e[16] = R ^ ~P & I, e[17] = k ^ ~U & O, e[26] = L ^ ~W & S, e[27] = V ^ ~H & M, e[36] = Z ^ ~$ & z, e[37] = Q ^ ~ee & X, e[46] = ie ^ ~le & te, e[47] = ce ^ ~de & re, e[8] = _ ^ ~p & g, e[9] = w ^ ~b & v, e[18] = P ^ ~I & j, e[19] = U ^ ~O & A, e[28] = W ^ ~S & B, e[29] = H ^ ~M & D, e[38] = $ ^ ~z & Y, e[39] = ee ^ ~X & J, e[48] = le ^ ~te & ne, e[49] = de ^ ~re & se, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (s) e.exports = f;
					else
						for (b = 0; b < p.length; ++b) n[p[b]] = f[p[b]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			const n = "logger/5.4.0";
			let s = !1,
				o = !1;
			const a = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let i = a.default,
				c = null;
			const l = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (r) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var d, u;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(d || (d = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(u || (u = {}));
			class m {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == a[r] && this.throwArgumentError("invalid log level name", "logLevel", e), i > a[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(m.levels.DEBUG, e)
				}
				info(...e) {
					this._log(m.levels.INFO, e)
				}
				warn(...e) {
					this._log(m.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (o) return this.makeError("censored error", t, {});
					t || (t = m.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (a) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const s = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const a = new Error(e);
					return a.reason = s, a.code = t, Object.keys(r).forEach((function(e) {
						a[e] = r[e]
					})), a
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
						argument: t,
						value: r
					})
				}
				assert(e, t, r, n) {
					e || this.throwError(t, r, n)
				}
				assertArgument(e, t, r, n) {
					e || this.throwArgumentError(t, r, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: l
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, m.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, m.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", m.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return c || (c = new m(n)), c
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), s) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					o = !!e, s = !!t
				}
				static setLogLevel(e) {
					const t = a[e.toLowerCase()];
					null != t ? i = t : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = u, m.levels = d
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "encode", (function() {
				return c
			})), r.d(t, "decode", (function() {
				return u
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const o = new s.a("rlp/5.4.0");

			function a(e) {
				const t = [];
				for (; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function i(e, t, r) {
				let n = 0;
				for (let s = 0; s < r; s++) n = 256 * n + e[t + s];
				return n
			}

			function c(e) {
				return Object(n.i)(function e(t) {
					if (Array.isArray(t)) {
						let r = [];
						if (t.forEach((function(t) {
								r = r.concat(e(t))
							})), r.length <= 55) return r.unshift(192 + r.length), r;
						const n = a(r.length);
						return n.unshift(247 + n.length), n.concat(r)
					}
					Object(n.k)(t) || o.throwArgumentError("RLP object must be BytesLike", "object", t);
					const r = Array.prototype.slice.call(Object(n.a)(t));
					if (1 === r.length && r[0] <= 127) return r;
					if (r.length <= 55) return r.unshift(128 + r.length), r;
					const s = a(r.length);
					return s.unshift(183 + s.length), s.concat(r)
				}(e))
			}

			function l(e, t, r, n) {
				const a = [];
				for (; r < t + 1 + n;) {
					const i = d(e, r);
					a.push(i.result), (r += i.consumed) > t + 1 + n && o.throwError("child data too short", s.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: a
				}
			}

			function d(e, t) {
				if (0 === e.length && o.throwError("data too short", s.a.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const r = e[t] - 247;
					t + 1 + r > e.length && o.throwError("data short segment too short", s.a.errors.BUFFER_OVERRUN, {});
					const n = i(e, t + 1, r);
					return t + 1 + r + n > e.length && o.throwError("data long segment too short", s.a.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1 + r, r + n)
				}
				if (e[t] >= 192) {
					const r = e[t] - 192;
					return t + 1 + r > e.length && o.throwError("data array too short", s.a.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, r)
				}
				if (e[t] >= 184) {
					const r = e[t] - 183;
					t + 1 + r > e.length && o.throwError("data array too short", s.a.errors.BUFFER_OVERRUN, {});
					const a = i(e, t + 1, r);
					return t + 1 + r + a > e.length && o.throwError("data array too short", s.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r + a,
						result: Object(n.i)(e.slice(t + 1 + r, t + 1 + r + a))
					}
				}
				if (e[t] >= 128) {
					const r = e[t] - 128;
					return t + 1 + r > e.length && o.throwError("data too short", s.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r,
						result: Object(n.i)(e.slice(t + 1, t + 1 + r))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(e[t])
				}
			}

			function u(e) {
				const t = Object(n.a)(e),
					r = d(t, 0);
				return r.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), r.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/wallet.ts"),
				o = r("./src/reddit/actions/governance/constants.ts");
			const a = Object(n.a)(o.m),
				i = Object(n.a)(o.n),
				c = Object(n.a)(o.l);
			t.a = e => async (t, r, {
				apiContext: n
			}) => {
				t(a({
					subredditId: e.subredditId
				}));
				const o = await Object(s.b)(n(), e);
				o.ok ? t(i({
					subredditId: e.subredditId,
					...o.body
				})) : t(c({
					error: o.error
				}))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = r.n(l);
			t.a = Object(o.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(c.a, {
					className: Object(a.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = r.n(i);

			function l(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(a.a, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/selectors/crypto/points.ts"),
				d = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(d);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					o = `${i.a.assetPath}/${n}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: o
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), r.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), r.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(r.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, r) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return N
			}));
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/usernameAvailable.ts"),
				u = r("./src/reddit/constants/colors.ts"),
				m = r("./src/reddit/controls/FormFields/index.tsx"),
				h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = r("./src/reddit/icons/svgs/Info/index.tsx"),
				b = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				g = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				v = r.n(g),
				E = r("./node_modules/fbt/lib/FbtPublic.js");
			const x = 2,
				N = 20;
			var y;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(y || (y = {}));
			class _ extends a.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > x && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > x) {
							switch (this.props.usernameAvailability[e]) {
								case d.b.Available:
									return y.Invalid;
								case d.b.Error:
									return y.Error;
								case d.b.Unavailable:
									return y.Valid;
								default:
									return y.Searching
							}
						}
						return y.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === y.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return a.a.createElement("div", {
						className: Object(l.a)(v.a.container, this.props.className)
					}, a.a.createElement(m.c, {
						redditStyle: !0,
						className: v.a.input,
						label: E.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: N,
						style: {
							borderColor: w(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case y.Error:
								return a.a.createElement(p.a, {
									className: v.a.icon,
									style: {
										fill: u.a.notice
									}
								});
							case y.Invalid:
								return a.a.createElement(b.a, {
									className: v.a.icon,
									style: {
										fill: u.a.warning
									}
								});
							case y.Searching:
								return a.a.createElement(h.a, {
									className: v.a.loadingIcon,
									sizePx: 8
								});
							case y.Valid:
								return a.a.createElement(f.a, {
									className: v.a.icon
								});
							default:
								return null
						}
					}(e), a.a.createElement("div", {
						className: v.a.message,
						style: {
							color: w(e)
						}
					}, function(e) {
						switch (e) {
							case y.Error:
								return E.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case y.Invalid:
								return E.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function w(e) {
				switch (e) {
					case y.Error:
						return u.a.notice;
					case y.Invalid:
						return u.a.warning
				}
			}
			const I = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(I, e => ({
				onCheckUsername: s()(t => e(Object(d.f)({
					username: t
				})), 250)
			}))(_)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/governance/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/helpers/governance/tokens.ts"),
				h = r("./src/reddit/selectors/crypto/points.ts"),
				f = r("./node_modules/reselect/es/index.js"),
				p = r("./node_modules/bignumber.js/bignumber.js"),
				b = r("./src/lib/classNames/index.ts"),
				g = r("./src/lib/prettyPrintNumber/index.ts"),
				v = r("./src/reddit/components/Governance/Token/index.tsx"),
				E = r("./src/reddit/constants/colors.ts"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				N = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = r("./src/reddit/selectors/gov.ts"),
				_ = r("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				w = r.n(_),
				I = r("./node_modules/fbt/lib/FbtPublic.js");
			const O = Object(f.c)({
				points: (e, {
					subredditId: t
				}) => Object(h.b)(e, t),
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: y.d
			});
			var j = Object(o.b)(O)((function(e) {
					const {
						amount: t,
						className: r,
						onTransferPoints: n,
						points: o,
						subredditId: a,
						tabIndex: i,
						transferIsPending: c,
						wallet: l
					} = e, d = (null == l ? void 0 : l.unlockedAmount) || "0", u = new p.BigNumber(t || "0"), h = new p.BigNumber(d), f = h.isGreaterThanOrEqualTo(u), y = e.submissionEnabled && !h.isZero() && f;
					return s.a.createElement("div", {
						className: Object(b.a)(w.a.container, r)
					}, s.a.createElement("div", {
						className: w.a.available
					}, s.a.createElement("div", null, I.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), s.a.createElement(v.a, {
						grey: !0,
						className: w.a.token,
						subredditId: a
					}), s.a.createElement("div", {
						style: {
							color: f ? void 0 : E.a.warning
						}
					}, Object(g.a)(Object(m.b)(d, null == o ? void 0 : o.displayConversion)))), s.a.createElement(x.l, {
						disabled: !y,
						className: w.a.button,
						tabIndex: i,
						onClick: n
					}, c ? s.a.createElement(N.a, {
						className: w.a.loadingIcon,
						sizePx: 20
					}) : I.fbt._("Send", null, {
						hk: "18b7Wd"
					})))
				})),
				A = r("./src/lib/currency/cleanNumber/index.ts"),
				T = r("./src/reddit/constants/keycodes.ts"),
				C = r("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				R = r.n(C);

			function k(e) {
				const t = e.amount || "0",
					r = !new p.BigNumber(t).isZero(),
					n = Object(g.a)(t);
				return s.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(b.a)(R.a.container, e.className)
				}, s.a.createElement(v.a, {
					className: R.a.token,
					grey: !r,
					subredditId: e.subredditId
				}), s.a.createElement("div", {
					className: Object(b.a)(R.a.display, {
						[R.a.displayActive]: r
					}),
					style: {
						fontSize: P(n)
					}
				}, Object(g.a)(n)), s.a.createElement("input", {
					autoFocus: !0,
					className: R.a.input,
					maxLength: 9,
					style: {
						fontSize: P(n)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(A.a)(t.currentTarget.value)),
					onClick: U,
					onFocus: U,
					onKeyDown: e => {
						e.key !== T.b.ArrowLeft && e.key !== T.b.ArrowRight && e.key !== T.b.ArrowUp && e.key !== T.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function P(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function U(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var S = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				M = r("./node_modules/@ethersproject/address/lib.esm/index.js"),
				B = r("./node_modules/lodash/debounce.js"),
				D = r.n(B),
				F = r("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				G = r("./src/reddit/actions/users.ts"),
				L = r("./src/reddit/selectors/crypto/wallet.ts"),
				V = r("./src/reddit/selectors/user.ts");
			var W = r("./src/reddit/controls/FormFields/index.tsx"),
				H = r("./src/reddit/hooks/useThunkDispatch.ts"),
				z = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				X = r("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				J = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				K = r.n(J);
			const q = 42,
				Z = /^0x[0-9a-fA-F]+$/;
			var Q;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Q || (Q = {}));
			const $ = async (e, t, r, n) => {
				const s = e.current;
				if (!s || s.length <= S.b) return void n(Q.Empty);
				const o = Z.test(s);
				if (o) try {
					if (!!Object(M.a)(s)) return void n(Q.Valid)
				} catch {}
				s.length <= S.a ? (n(Q.Searching), r(((e, t) => async (r, n, {
					apiContext: s
				}) => {
					let o = n(),
						a = Object(V.nb)(o, {
							userName: e
						});
					if (!(a || (await r(Object(G.B)(e)), o = n(), a = Object(V.nb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let i = Object(L.c)(o, {
						subredditId: t,
						userId: a.id
					});
					return i || (await r(Object(F.a)({
						subredditId: t,
						userIds: [a.id]
					})), i = Object(L.c)(n(), {
						subredditId: t,
						userId: a.id
					})), {
						userId: a.id,
						wallet: i || null
					}
				})(s, t)).then(({
					userId: t,
					wallet: r
				}) => {
					e.current === s && n(t ? r ? Q.Valid : Q.UserDoesNotHaveAWallet : o ? Q.InvalidWalletAddress : Q.InvalidUsername)
				}).catch(() => {
					n(Q.Error)
				})) : n(o ? Q.InvalidWalletAddress : Q.InvalidUsername)
			};

			function ee(e) {
				const {
					onChange: t,
					subredditId: r
				} = e, [o, a] = Object(n.useState)(e.initialRecipient || ""), i = Object(n.useRef)(o), [c, l] = Object(n.useState)(Q.Empty), d = Object(H.a)(), u = () => $(i, r, d, e => {
					l(e), e === Q.Valid && t(i.current, !0)
				}), m = Object(n.useMemo)(() => D()(u, 300), [i, r, d, l, t]);
				return Object(n.useEffect)(() => {
					e.initialRecipient && u()
				}, []), s.a.createElement("div", {
					className: Object(b.a)(K.a.container, e.className)
				}, s.a.createElement(W.c, {
					redditStyle: !0,
					className: K.a.input,
					label: I.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: q,
					style: {
						borderColor: te(c)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: o,
					onChange: e => {
						const r = e.currentTarget.value.trim();
						i.current = r, a(r), t(r, !1), m()
					}
				}), function(e) {
					switch (e) {
						case Q.UserDoesNotHaveAWallet:
							return s.a.createElement(X.a, {
								className: K.a.icon,
								style: {
									fill: E.a.notice
								}
							});
						case Q.InvalidWalletAddress:
						case Q.InvalidUsername:
						case Q.Error:
							return s.a.createElement(Y.a, {
								className: K.a.icon,
								style: {
									fill: E.a.warning
								}
							});
						case Q.Searching:
							return s.a.createElement(N.a, {
								className: K.a.loadingIcon,
								sizePx: 8
							});
						case Q.Valid:
							return s.a.createElement(z.a, {
								className: K.a.icon
							});
						default:
							return null
					}
				}(c), s.a.createElement("div", {
					className: K.a.message,
					style: {
						color: te(c)
					}
				}, function(e) {
					switch (e) {
						case Q.UserDoesNotHaveAWallet:
							return I.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Q.InvalidWalletAddress:
							return I.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Q.InvalidUsername:
							return I.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Q.Error:
							return I.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function te(e) {
				switch (e) {
					case Q.UserDoesNotHaveAWallet:
						return E.a.notice;
					case Q.InvalidWalletAddress:
					case Q.InvalidUsername:
					case Q.Error:
						return E.a.warning
				}
			}
			var re = r("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function ne(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(re.a, {
					className: e.className
				}, I.fbt._("Send {tokenName}", [I.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var se = r("./src/lib/addQueryParams/index.ts"),
				oe = r("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				ae = r.n(oe);
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class ce extends s.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: r,
						subreddit: n,
						tokenName: o
					} = this.props;
					if (!e || !t) return null;
					const a = Object(se.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: r,
						address: t
					});
					return s.a.createElement("div", {
						className: ae.a.container
					}, s.a.createElement(ne, {
						className: ae.a.title,
						subredditId: n.id,
						tokenName: o
					}), s.a.createElement("div", {
						className: ae.a.body
					}, s.a.createElement("div", {
						className: ae.a.description
					}, ie._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "48pHUg"
					})), s.a.createElement(x.m, {
						redditStyle: !0,
						className: ae.a.button,
						href: a,
						target: "_blank"
					}, ie._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), s.a.createElement("div", {
						className: ae.a.disclaimer
					}, ie._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const le = Object(f.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var de = Object(o.b)(le)(ce),
				ue = r("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				me = r.n(ue);
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class fe extends s.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(m.a)(e, this.props.pointsDetails.displayConversion)
					}), this.handleRecipientChange = (e, t) => this.setState({
						recipient: e,
						recipientIsValid: t
					}), this.state = {
						displayAmount: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showTransferTransactionModal: !1,
						tokenAmount: void 0
					}
				}
				render() {
					const {
						customCrypto: e,
						initialRecipient: t,
						isEthereumProvider: r,
						onTransferPoints: n,
						pointsDetails: o,
						subreddit: a
					} = this.props;
					if (!a || !o) return null;
					if (e && r) return s.a.createElement(de, {
						recipient: t,
						subreddit: a,
						tokenName: o.name
					});
					if (this.state.showTransferTransactionModal) return s.a.createElement(l.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: a.id,
						transferAmount: this.state.tokenAmount
					});
					const i = o.blockchainProvider ? ee : S.c;
					return s.a.createElement("div", {
						className: me.a.container
					}, s.a.createElement(ne, {
						className: me.a.title,
						subredditId: a.id,
						tokenName: o.name
					}), s.a.createElement("div", {
						className: me.a.inputContainer
					}, s.a.createElement(k, {
						amount: this.state.displayAmount,
						subredditId: a.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), !o.blockchainProvider && s.a.createElement("div", {
						className: me.a.explanation
					}, he._("Up to 49% of earned {tokenName}. Remaining are frozen.", [he._param("tokenName", o.name)], {
						hk: "1fUxyG"
					})), e ? s.a.createElement("div", {
						className: me.a.explanation
					}, "Transfer to ", t) : s.a.createElement("div", {
						className: me.a.recipientContainer
					}, s.a.createElement(i, {
						className: me.a.recipient,
						initialRecipient: t,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: a.id
					})), s.a.createElement(j, {
						amount: this.state.tokenAmount,
						className: me.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid,
						subredditId: a.id,
						tabIndex: 3,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && a && (o.blockchainProvider ? this.setState({
								showTransferTransactionModal: !0
							}) : n(this.state.tokenAmount, this.state.recipient, a.id))
						}
					}))
				}
			}
			const pe = Object(f.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const r = Object(d.r)(e, t);
						return Object(h.a)(e, null == r ? void 0 : r.id)
					},
					pointsDetails: (e, t) => {
						const r = Object(d.r)(e, t);
						return Object(h.b)(e, null == r ? void 0 : r.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: d.r
				}),
				be = Object(o.b)(pe, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, r, n) => e(Object(i.e)({
						amount: t,
						recipient: r,
						subredditId: n
					}, !0))
				})),
				ge = Object(d.u)();
			t.default = Object(a.a)(ge(be(fe)))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(s),
				a = r("./node_modules/raf/index.js"),
				i = r.n(a),
				c = r("./node_modules/react/index.js"),
				l = r.n(c),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				p = r.n(f);
			var b = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return l.a.createElement("div", {
						className: p.a.wrapper
					}, l.a.createElement(h.a, {
						className: p.a.titleRow
					}, r), l.a.createElement("div", {
						className: p.a.detailsContainer
					}, t), l.a.createElement(h.a, {
						className: p.a.buttonRow
					}, l.a.createElement(m.l, {
						className: p.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = r("./src/reddit/controls/ErrorText/index.m.less"),
				v = r.n(g);
			class E extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: r,
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), i && l.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: s
					}, r || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: o = []
					} = e, a = o.length ? o : s ? [s] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(E, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				N = e => l.a.createElement(x, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = a.a.input("input", u.a),
				f = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				p = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: f
					}, s.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: f
					}, s.a.createElement(h, m({
						innerRef: n
					}, l)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: r,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: r,
						placeholder: n,
						errors: o = []
					} = this.props;
					return e.map((e, a) => s.a.createElement(p, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!o[a],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!o[a] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, o[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !i;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(n.d)()
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				a = (e, t) => {
					var r;
					return null === (r = o(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				i = (e, t) => {
					var r, n, s, o;
					return null === (o = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				o = {},
				a = (e, t) => {
					const r = h(e, t);
					if (r) return r.mainHeader
				},
				i = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				c = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : o
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const r = l(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = l(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.43f0791c3a86e396f07e.js.map