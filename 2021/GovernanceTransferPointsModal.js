// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.56e44281a7629effc86e.js
// Retrieved at 7/21/2021, 5:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				o = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const i = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("address/5.4.0");

			function c(e) {
				Object(n.l)(e, 20) || i.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					r = new Uint8Array(40);
				for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
				const s = Object(n.a)(Object(o.a)(r));
				for (let n = 0; n < 40; n += 2) s[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & s[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const d = {};
			for (let v = 0; v < 10; v++) d[String(v)] = String(v);
			for (let v = 0; v < 26; v++) d[String.fromCharCode(65 + v)] = String(10 + v);
			const l = Math.floor((u = 9007199254740991, Math.log10 ? Math.log10(u) : Math.log(u) / Math.LN10));
			var u;

			function m(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => d[e]).join("");
				for (; t.length >= l;) {
					let e = t.substring(0, l);
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

			function b(e) {
				try {
					return h(e), !0
				} catch (t) {}
				return !1
			}

			function f(e) {
				let t = Object(s.b)(h(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + m("XE00" + t) + t
			}

			function p(e) {
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
				return b
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
			const d = new a.b(i.a),
				l = {},
				u = 9007199254740991;

			function m(e) {
				return null != e && (b.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(o.l)(e) || "bigint" == typeof e || Object(o.j)(e))
			}
			let h = !1;
			class b {
				constructor(e, t) {
					d.checkNew(new.target, b), e !== l && d.throwError("cannot call constructor directly; use BigNumber.from", a.b.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return p(g(this).fromTwos(e))
				}
				toTwos(e) {
					return p(g(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? b.from(this._hex.substring(1)) : this
				}
				add(e) {
					return p(g(this).add(g(e)))
				}
				sub(e) {
					return p(g(this).sub(g(e)))
				}
				div(e) {
					return b.from(e).isZero() && v("division by zero", "div"), p(g(this).div(g(e)))
				}
				mul(e) {
					return p(g(this).mul(g(e)))
				}
				mod(e) {
					const t = g(e);
					return t.isNeg() && v("cannot modulo negative values", "mod"), p(g(this).umod(t))
				}
				pow(e) {
					const t = g(e);
					return t.isNeg() && v("cannot raise to negative values", "pow"), p(g(this).pow(t))
				}
				and(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'and' negative values", "and"), p(g(this).and(t))
				}
				or(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'or' negative values", "or"), p(g(this).or(t))
				}
				xor(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && v("cannot 'xor' negative values", "xor"), p(g(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && v("cannot mask negative values", "mask"), p(g(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shl"), p(g(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && v("cannot shift negative values", "shr"), p(g(this).shrn(e))
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
					return d.throwError("this platform does not support BigInt", a.b.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, d.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? d.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", a.b.errors.UNEXPECTED_ARGUMENT, {}) : d.throwError("BigNumber.toString does not accept parameters", a.b.errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
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
					if (e instanceof b) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new b(l, f(e)) : e.match(/^-?[0-9]+$/) ? new b(l, f(new c(e))) : d.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && v("underflow", "BigNumber.from", e), (e >= u || e <= -u) && v("overflow", "BigNumber.from", e), b.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return b.from(t.toString());
					if (Object(o.j)(t)) return b.from(Object(o.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return b.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(o.l)(e) || "-" === e[0] && Object(o.l)(e.substring(1)))) return b.from(e)
						} return d.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function f(e) {
				if ("string" != typeof e) return f(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && d.throwArgumentError("invalid hex", "value", e), "0x00" === (e = f(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function p(e) {
				return b.from(f(e))
			}

			function g(e) {
				const t = b.from(e).toHexString();
				return "-" === t[0] ? new c("-" + t.substring(3), 16) : new c(t.substring(2), 16)
			}

			function v(e, t, r) {
				const n = {
					fault: e,
					operation: t
				};
				return null != r && (n.value = r), d.throwError(e, a.b.errors.NUMERIC_FAULT, n)
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
				return d
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "e", (function() {
				return p
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
			const n = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("bytes/5.4.0");

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

			function d(e) {
				const t = e.map(e => c(e)),
					r = t.reduce((e, t) => e + t.length, 0),
					n = new Uint8Array(r);
				return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), o(n)
			}

			function l(e) {
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

			function b(e, t) {
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

			function f(e) {
				if ("string" != typeof e) e = b(e);
				else if (!m(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function p(e, t, r) {
				return "string" != typeof e ? e = b(e) : (!m(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}

			function g(e) {
				let t = "0x";
				return e.forEach(e => {
					t += b(e).substring(2)
				}), t
			}

			function v(e) {
				const t = E(b(e, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function E(e) {
				"string" != typeof e && (e = b(e)), m(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function x(e, t) {
				for ("string" != typeof e ? e = b(e) : m(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
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
					65 !== r.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = b(r.slice(0, 32)), t.s = b(r.slice(32, 64)), t.v = r[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = b(r.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const r = u(c(t._vs), 32);
						t._vs = b(r);
						const s = r[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = s : t.recoveryParam !== s && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
						const o = b(r);
						null == t.s ? t.s = o : t.s !== o && n.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && m(t.r) ? t.r = x(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && m(t.s) ? t.s = x(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
					const r = c(t.s);
					r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
					const s = b(r);
					t._vs && (m(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = x(t._vs, 32)), null == t._vs ? t._vs = s : t._vs !== s && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function y(e) {
				return b(d([(e = N(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
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
					for (var s = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, o = "0123456789abcdef".split(""), a = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], d = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, r) {
							return function(n) {
								return new N(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, s) {
								return new N(e, t, s).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = l(e, t, "hex");
							r.create = function() {
								return new N(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < d.length; ++n) {
								var s = d[n];
								r[s] = l(e, t, s)
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
								for (var n = 0; n < d.length; ++n) {
									var s = d[n];
									r[s] = u(e, t, s)
								}
								return r
							}
						}], b = {}, f = [], p = 0; p < h.length; ++p)
						for (var g = h[p], v = g.bits, E = 0; E < v.length; ++E) {
							var x = g.name + "_" + v[E];
							f.push(x), b[x] = g.createMethod(v[E], g.padding)
						}

					function N(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, s = e.length, o = this.blocks, i = this.byteCount, c = this.blockCount, d = 0, l = this.s; d < s;) {
							if (this.reset)
								for (this.reset = !1, o[0] = this.block, r = 1; r < c + 1; ++r) o[r] = 0;
							if (t)
								for (r = this.start; d < s && r < i; ++d) o[r >> 2] |= e[d] << a[3 & r++];
							else
								for (r = this.start; d < s && r < i; ++d)(n = e.charCodeAt(d)) < 128 ? o[r >> 2] |= n << a[3 & r++] : n < 2048 ? (o[r >> 2] |= (192 | n >> 6) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (o[r >> 2] |= (224 | n >> 12) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++d)), o[r >> 2] |= (240 | n >> 18) << a[3 & r++], o[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = o[c], r = 0; r < c; ++r) l[r] ^= o[r];
								y(l), this.reset = !0
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
						var t, r, n, s, o, a, c, d, l, u, m, h, b, f, p, g, v, E, x, N, y, w, j, O, _, I, C, A, T, k, R, P, U, M, S, B, D, L, F, G, V, W, H, z, X, q, Y, $, Z, J, K, Q, ee, te, re, ne, se, oe, ae, ie, ce, de, le;
						for (n = 0; n < 48; n += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], d = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | c >>> 31), r = (b = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = s ^ (d << 1 | l >>> 31), r = o ^ (l << 1 | d >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (u << 1 | m >>> 31), r = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = d ^ (h << 1 | b >>> 31), r = l ^ (b << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (s << 1 | o >>> 31), r = m ^ (o << 1 | s >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, f = e[0], p = e[1], q = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, A = e[20] << 3 | e[21] >>> 29, T = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, W = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, M = e[2] << 1 | e[3] >>> 31, S = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, $ = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, k = e[33] << 13 | e[32] >>> 19, R = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, J = e[34] << 15 | e[35] >>> 17, K = e[35] << 15 | e[34] >>> 17, P = e[45] << 29 | e[44] >>> 3, U = e[44] << 29 | e[45] >>> 3, O = e[6] << 28 | e[7] >>> 4, _ = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, L = e[26] << 25 | e[27] >>> 7, F = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, y = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, I = e[18] << 20 | e[19] >>> 12, C = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, G = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, w = e[48] << 14 | e[49] >>> 18, j = e[49] << 14 | e[48] >>> 18, e[0] = f ^ ~g & E, e[1] = p ^ ~v & x, e[10] = O ^ ~I & A, e[11] = _ ^ ~C & T, e[20] = M ^ ~B & L, e[21] = S ^ ~D & F, e[30] = z ^ ~q & $, e[31] = X ^ ~Y & Z, e[40] = te ^ ~ne & oe, e[41] = re ^ ~se & ae, e[2] = g ^ ~E & N, e[3] = v ^ ~x & y, e[12] = I ^ ~A & k, e[13] = C ^ ~T & R, e[22] = B ^ ~L & G, e[23] = D ^ ~F & V, e[32] = q ^ ~$ & J, e[33] = Y ^ ~Z & K, e[42] = ne ^ ~oe & ie, e[43] = se ^ ~ae & ce, e[4] = E ^ ~N & w, e[5] = x ^ ~y & j, e[14] = A ^ ~k & P, e[15] = T ^ ~R & U, e[24] = L ^ ~G & W, e[25] = F ^ ~V & H, e[34] = $ ^ ~J & Q, e[35] = Z ^ ~K & ee, e[44] = oe ^ ~ie & de, e[45] = ae ^ ~ce & le, e[6] = N ^ ~w & f, e[7] = y ^ ~j & p, e[16] = k ^ ~P & O, e[17] = R ^ ~U & _, e[26] = G ^ ~W & M, e[27] = V ^ ~H & S, e[36] = J ^ ~Q & z, e[37] = K ^ ~ee & X, e[46] = ie ^ ~de & te, e[47] = ce ^ ~le & re, e[8] = w ^ ~f & g, e[9] = j ^ ~p & v, e[18] = P ^ ~O & I, e[19] = U ^ ~_ & C, e[28] = W ^ ~M & B, e[29] = H ^ ~S & D, e[38] = Q ^ ~z & q, e[39] = ee ^ ~X & Y, e[48] = de ^ ~te & ne, e[49] = le ^ ~re & se, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (s) e.exports = b;
					else
						for (p = 0; p < f.length; ++p) n[f[p]] = b[f[p]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
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
			const d = function() {
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
			var l, u;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(l || (l = {})),
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
					null == e && (e = "platform missing String.prototype.normalize"), d && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: d
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
			m.errors = u, m.levels = l
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
			const o = new s.b("rlp/5.4.0");

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

			function d(e, t, r, n) {
				const a = [];
				for (; r < t + 1 + n;) {
					const i = l(e, r);
					a.push(i.result), (r += i.consumed) > t + 1 + n && o.throwError("child data too short", s.b.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: a
				}
			}

			function l(e, t) {
				if (0 === e.length && o.throwError("data too short", s.b.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const r = e[t] - 247;
					t + 1 + r > e.length && o.throwError("data short segment too short", s.b.errors.BUFFER_OVERRUN, {});
					const n = i(e, t + 1, r);
					return t + 1 + r + n > e.length && o.throwError("data long segment too short", s.b.errors.BUFFER_OVERRUN, {}), d(e, t, t + 1 + r, r + n)
				}
				if (e[t] >= 192) {
					const r = e[t] - 192;
					return t + 1 + r > e.length && o.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {}), d(e, t, t + 1, r)
				}
				if (e[t] >= 184) {
					const r = e[t] - 183;
					t + 1 + r > e.length && o.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {});
					const a = i(e, t + 1, r);
					return t + 1 + r + a > e.length && o.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r + a,
						result: Object(n.i)(e.slice(t + 1 + r, t + 1 + r + a))
					}
				}
				if (e[t] >= 128) {
					const r = e[t] - 128;
					return t + 1 + r > e.length && o.throwError("data too short", s.b.errors.BUFFER_OVERRUN, {}), {
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
					r = l(t, 0);
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
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					o = new n.BigNumber(r.dividedBy(s)),
					a = new n.BigNumber("100").multipliedBy(o);
				return new n.BigNumber(a).toNumber()
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "h", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/config.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/reddit/models/Poll/index.ts"),
				m = r("./src/redditGQL/operations/PollVote.json"),
				h = r("./src/reddit/endpoints/governance/requester.ts");
			var b = r("./src/reddit/endpoints/governance/wallet.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/Vote/index.ts"),
				g = r("./src/reddit/selectors/crypto/points.ts"),
				v = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(s.a)(v.b),
				N = Object(s.a)(v.c),
				y = Object(s.a)(v.e),
				w = (Object(s.a)(v.f), Object(s.a)(v.g), Object(s.a)(v.h)),
				j = Object(s.a)(v.i),
				O = Object(s.a)(v.j),
				_ = Object(s.a)(v.k),
				I = Object(s.a)(v.q),
				C = Object(s.a)(v.r),
				A = Object(s.a)(v.s),
				T = Object(s.a)(v.t),
				k = Object(s.a)(v.u),
				R = Object(s.a)(v.v),
				P = Object(s.a)(v.w),
				U = Object(s.a)(v.x),
				M = (e, t) => async (r, n, {
					apiContext: s,
					gqlContext: o
				}) => {
					let a, c = n().polls.models[e];
					if (r(O({
							pollId: e
						})), (a = c.type === u.a.GA ? await ((e, t, r) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(o(), e, t) : await
							function(e, t, r, n) {
								return Object(h.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							r(y({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(_(a.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === p.a.notVoted && r(Object(i.fb)(e))
						}
					} else r(j({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(E.a)(r, a.error || a.errors[0].messsage)
				}, S = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					var l;
					r(A());
					const u = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(h.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: u
					});
					m.ok ? (r(T({
						...m.body,
						subredditId: e.subredditId
					})), r(Object(c.f)({
						kind: f.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(o.a)(e.amount)), n.fbt._param("tokenName", (null === (l = Object(g.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(a.f)())) : (r(I({
						error: m.error
					})), Object(E.a)(r, m.error))
				}, B = e => async (t, r, {
					apiContext: n
				}) => {
					t(R());
					const s = await Object(b.a)(n(), e);
					s.ok ? t(P(s.body)) : t(k({
						error: s.error
					}))
				}
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
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
			t.a = Object(o.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(c.a, {
					className: Object(a.a)(l.a.closeIcon, e.className),
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = r.n(i);

			function d(e) {
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
				d = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
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
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/usernameAvailable.ts"),
				u = r("./src/reddit/constants/colors.ts"),
				m = r("./src/reddit/controls/FormFields/index.tsx"),
				h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				f = r("./src/reddit/icons/svgs/Info/index.tsx"),
				p = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				g = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				v = r.n(g),
				E = r("./node_modules/fbt/lib/FbtPublic.js");
			const x = 2,
				N = 20;
			var y;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(y || (y = {}));
			class w extends a.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > x && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > x) {
							switch (this.props.usernameAvailability[e]) {
								case l.b.Available:
									return y.Invalid;
								case l.b.Error:
									return y.Error;
								case l.b.Unavailable:
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
						className: Object(d.a)(v.a.container, this.props.className)
					}, a.a.createElement(m.c, {
						redditStyle: !0,
						className: v.a.input,
						label: E.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: N,
						style: {
							borderColor: j(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case y.Error:
								return a.a.createElement(f.a, {
									className: v.a.icon,
									style: {
										fill: u.b.notice
									}
								});
							case y.Invalid:
								return a.a.createElement(p.a, {
									className: v.a.icon,
									style: {
										fill: u.b.warning
									}
								});
							case y.Searching:
								return a.a.createElement(h.a, {
									className: v.a.loadingIcon,
									sizePx: 8
								});
							case y.Valid:
								return a.a.createElement(b.a, {
									className: v.a.icon
								});
							default:
								return null
						}
					}(e), a.a.createElement("div", {
						className: v.a.message,
						style: {
							color: j(e)
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

			function j(e) {
				switch (e) {
					case y.Error:
						return u.b.notice;
					case y.Invalid:
						return u.b.warning
				}
			}
			const O = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(O, e => ({
				onCheckUsername: s()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(w)
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
				d = r("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/helpers/governance/tokens.ts"),
				h = r("./src/reddit/selectors/crypto/points.ts"),
				b = r("./node_modules/reselect/es/index.js"),
				f = r("./node_modules/bignumber.js/bignumber.js"),
				p = r("./src/lib/classNames/index.ts"),
				g = r("./src/lib/prettyPrintNumber/index.ts"),
				v = r("./src/reddit/components/Governance/Token/index.tsx"),
				E = r("./src/reddit/constants/colors.ts"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				N = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = r("./src/reddit/selectors/gov.ts"),
				w = r("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				j = r.n(w),
				O = r("./node_modules/fbt/lib/FbtPublic.js");
			const _ = Object(b.c)({
				points: (e, {
					subredditId: t
				}) => Object(h.b)(e, t),
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: y.d
			});
			var I = Object(o.b)(_)((function(e) {
					const {
						amount: t,
						className: r,
						onTransferPoints: n,
						points: o,
						subredditId: a,
						tabIndex: i,
						transferIsPending: c,
						wallet: d
					} = e, l = (null == d ? void 0 : d.unlockedAmount) || "0", u = new f.BigNumber(t || "0"), h = new f.BigNumber(l), b = h.isGreaterThanOrEqualTo(u), y = e.submissionEnabled && !h.isZero() && b;
					return s.a.createElement("div", {
						className: Object(p.a)(j.a.container, r)
					}, s.a.createElement("div", {
						className: j.a.available
					}, s.a.createElement("div", null, O.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), s.a.createElement(v.a, {
						grey: !0,
						className: j.a.token,
						subredditId: a
					}), s.a.createElement("div", {
						style: {
							color: b ? void 0 : E.b.warning
						}
					}, Object(g.a)(Object(m.b)(l, null == o ? void 0 : o.displayConversion)))), s.a.createElement(x.i, {
						disabled: !y,
						className: j.a.button,
						tabIndex: i,
						onClick: n
					}, c ? s.a.createElement(N.a, {
						className: j.a.loadingIcon,
						sizePx: 20
					}) : O.fbt._("Send", null, {
						hk: "18b7Wd"
					})))
				})),
				C = r("./src/lib/currency/cleanNumber/index.ts"),
				A = r("./src/reddit/constants/keycodes.ts"),
				T = r("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				k = r.n(T);

			function R(e) {
				const t = e.amount || "0",
					r = !new f.BigNumber(t).isZero(),
					n = Object(g.a)(t);
				return s.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(p.a)(k.a.container, e.className)
				}, s.a.createElement(v.a, {
					className: k.a.token,
					grey: !r,
					subredditId: e.subredditId
				}), s.a.createElement("div", {
					className: Object(p.a)(k.a.display, {
						[k.a.displayActive]: r
					}),
					style: {
						fontSize: P(n)
					}
				}, Object(g.a)(n)), s.a.createElement("input", {
					autoFocus: !0,
					className: k.a.input,
					maxLength: 9,
					style: {
						fontSize: P(n)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(C.a)(t.currentTarget.value)),
					onClick: U,
					onFocus: U,
					onKeyDown: e => {
						e.key !== A.b.ArrowLeft && e.key !== A.b.ArrowRight && e.key !== A.b.ArrowUp && e.key !== A.b.ArrowDown || e.preventDefault()
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
			var M = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				S = r("./node_modules/@ethersproject/address/lib.esm/index.js"),
				B = r("./node_modules/lodash/debounce.js"),
				D = r.n(B),
				L = r("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				F = r("./src/reddit/actions/users.ts"),
				G = r("./src/reddit/selectors/crypto/wallet.ts"),
				V = r("./src/reddit/selectors/user.ts");
			var W = r("./src/reddit/controls/FormFields/index.tsx"),
				H = r("./src/reddit/hooks/useThunkDispatch.ts"),
				z = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				X = r("./src/reddit/icons/svgs/Info/index.tsx"),
				q = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Y = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				$ = r.n(Y);
			const Z = 42,
				J = /^0x[0-9a-fA-F]+$/;
			var K;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(K || (K = {}));
			const Q = async (e, t, r, n) => {
				const s = e.current;
				if (!s || s.length <= M.b) return void n(K.Empty);
				const o = J.test(s);
				if (o) try {
					if (!!Object(S.a)(s)) return void n(K.Valid)
				} catch {}
				s.length <= M.a ? (n(K.Searching), r(((e, t) => async (r, n, {
					apiContext: s
				}) => {
					let o = n(),
						a = Object(V.mb)(o, {
							userName: e
						});
					if (!(a || (await r(Object(F.y)(e)), o = n(), a = Object(V.mb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let i = Object(G.c)(o, {
						subredditId: t,
						userId: a.id
					});
					return i || (await r(Object(L.a)({
						subredditId: t,
						userIds: [a.id]
					})), i = Object(G.c)(n(), {
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
					e.current === s && n(t ? r ? K.Valid : K.UserDoesNotHaveAWallet : o ? K.InvalidWalletAddress : K.InvalidUsername)
				}).catch(() => {
					n(K.Error)
				})) : n(o ? K.InvalidWalletAddress : K.InvalidUsername)
			};

			function ee(e) {
				const {
					onChange: t,
					subredditId: r
				} = e, [o, a] = Object(n.useState)(e.initialRecipient || ""), i = Object(n.useRef)(o), [c, d] = Object(n.useState)(K.Empty), l = Object(H.a)(), u = () => Q(i, r, l, e => {
					d(e), e === K.Valid && t(i.current, !0)
				}), m = Object(n.useMemo)(() => D()(u, 300), [i, r, l, d, t]);
				return Object(n.useEffect)(() => {
					e.initialRecipient && u()
				}, []), s.a.createElement("div", {
					className: Object(p.a)($.a.container, e.className)
				}, s.a.createElement(W.c, {
					redditStyle: !0,
					className: $.a.input,
					label: O.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: Z,
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
						case K.UserDoesNotHaveAWallet:
							return s.a.createElement(X.a, {
								className: $.a.icon,
								style: {
									fill: E.b.notice
								}
							});
						case K.InvalidWalletAddress:
						case K.InvalidUsername:
						case K.Error:
							return s.a.createElement(q.a, {
								className: $.a.icon,
								style: {
									fill: E.b.warning
								}
							});
						case K.Searching:
							return s.a.createElement(N.a, {
								className: $.a.loadingIcon,
								sizePx: 8
							});
						case K.Valid:
							return s.a.createElement(z.a, {
								className: $.a.icon
							});
						default:
							return null
					}
				}(c), s.a.createElement("div", {
					className: $.a.message,
					style: {
						color: te(c)
					}
				}, function(e) {
					switch (e) {
						case K.UserDoesNotHaveAWallet:
							return O.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case K.InvalidWalletAddress:
							return O.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case K.InvalidUsername:
							return O.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case K.Error:
							return O.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function te(e) {
				switch (e) {
					case K.UserDoesNotHaveAWallet:
						return E.b.notice;
					case K.InvalidWalletAddress:
					case K.InvalidUsername:
					case K.Error:
						return E.b.warning
				}
			}
			var re = r("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function ne(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(re.a, {
					className: e.className
				}, O.fbt._("Send {tokenName}", [O.fbt._param("tokenName", t)], {
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
					})), s.a.createElement(x.j, {
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
			const de = Object(b.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var le = Object(o.b)(de)(ce),
				ue = r("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				me = r.n(ue);
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class be extends s.a.Component {
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
					if (e && r) return s.a.createElement(le, {
						recipient: t,
						subreddit: a,
						tokenName: o.name
					});
					if (this.state.showTransferTransactionModal) return s.a.createElement(d.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: a.id,
						transferAmount: this.state.tokenAmount
					});
					const i = o.blockchainProvider ? ee : M.c;
					return s.a.createElement("div", {
						className: me.a.container
					}, s.a.createElement(ne, {
						className: me.a.title,
						subredditId: a.id,
						tokenName: o.name
					}), s.a.createElement("div", {
						className: me.a.inputContainer
					}, s.a.createElement(R, {
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
					})), s.a.createElement(I, {
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
			const fe = Object(b.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(h.a)(e, null == r ? void 0 : r.id)
					},
					pointsDetails: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(h.b)(e, null == r ? void 0 : r.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q
				}),
				pe = Object(o.b)(fe, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, r, n) => e(Object(i.e)({
						amount: t,
						recipient: r,
						subredditId: n
					}, !0))
				})),
				ge = Object(l.t)();
			t.default = Object(a.a)(ge(pe(be)))
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
				return _
			})), r.d(t, "c", (function() {
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(s),
				a = r("./node_modules/raf/index.js"),
				i = r.n(a),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/selectors/activeModalId.ts"),
				f = r("./src/higherOrderComponents/asModal/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/layout/row/Inline/index.tsx"),
				v = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = r.n(v);
			var x = Object(f.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: E.a.wrapper
					}, d.a.createElement(g.a, {
						className: E.a.titleRow
					}, r), d.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: E.a.buttonRow
					}, d.a.createElement(p.i, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				N = r("./src/reddit/controls/ErrorText/index.m.less"),
				y = r.n(N);
			const w = Object(u.c)({
				activeModalId: b.a
			});
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`
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
						activeModalId: t,
						className: r,
						errorModalBody: s,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(y.a.wrapper, r)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: o
					}, s || e))
				}
			}
			const O = Object(l.b)(w, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(j),
				_ = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: o = []
					} = e, a = o.length ? o : s ? [s] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(O, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(_, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
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
				return f
			})), r.d(t, "c", (function() {
				return p
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
				d = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(l);

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
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
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
						onClick: b
					}, s.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				p = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(h, m({
						innerRef: n
					}, d)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: l
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
					return e.map((e, a) => s.a.createElement(f, {
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
					}, s.a.createElement(d.b, {
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
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "n", (function() {
				return v
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const h = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function v(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.hb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.hb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(a);
			const c = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				o = r("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
					switch (t.type) {
						case o.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, r, n, s, o;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == a ? void 0 : a.contracts,
					c = null == i ? void 0 : i.unlocked,
					d = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					u = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					h = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: h,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = d, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: u(n)
						}
					}
					default:
						return e
				}
			};
			const h = {};
			var b = (e = h, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
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
			t.a = Object(n.c)({
				claims: i,
				points: m,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var r, n, s;
				return t ? null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function d() {
				const e = Object(s.bb)(),
					t = Object(n.e)(t => Object(s.q)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const l = (e, t) => {
				var r;
				const n = null === (r = c(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === o.a.Ethereum || n === o.a.Rinkeby || n === o.a.EthTraderEthereum || n === o.a.EthTraderRinkeby || n === o.a.ArbitrumRinkeby
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
				return d
			})), r.d(t, "g", (function() {
				return l
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
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const r = d(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = d(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.56e44281a7629effc86e.js.map