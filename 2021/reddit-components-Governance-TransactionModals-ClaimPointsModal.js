// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.709c3393d588065a389b.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
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
			const u = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function m(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => l[e]).join("");
				for (; t.length >= u;) {
					let e = t.substring(0, u);
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

			function b(e) {
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
				u = {},
				d = 9007199254740991;

			function m(e) {
				return null != e && (f.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(o.l)(e) || "bigint" == typeof e || Object(o.j)(e))
			}
			let h = !1;
			class f {
				constructor(e, t) {
					l.checkNew(new.target, f), e !== u && l.throwError("cannot call constructor directly; use BigNumber.from", a.a.errors.UNSUPPORTED_OPERATION, {
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
					return "-" === this._hex[0] ? f.from(this._hex.substring(1)) : this
				}
				add(e) {
					return p(g(this).add(g(e)))
				}
				sub(e) {
					return p(g(this).sub(g(e)))
				}
				div(e) {
					return f.from(e).isZero() && v("division by zero", "div"), p(g(this).div(g(e)))
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
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new f(u, b(e)) : e.match(/^-?[0-9]+$/) ? new f(u, b(new c(e))) : l.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && v("underflow", "BigNumber.from", e), (e >= d || e <= -d) && v("overflow", "BigNumber.from", e), f.from(String(e));
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

			function b(e) {
				if ("string" != typeof e) return b(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && l.throwArgumentError("invalid hex", "value", e), "0x00" === (e = b(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function p(e) {
				return f.from(b(e))
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
				return u
			})), r.d(t, "p", (function() {
				return d
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
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
				return w
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

			function u(e) {
				let t = c(e);
				if (0 === t.length) return t;
				let r = 0;
				for (; r < t.length && 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}

			function d(e, t) {
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

			function b(e) {
				if ("string" != typeof e) e = f(e);
				else if (!m(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function p(e, t, r) {
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
						const r = d(c(t._vs), 32);
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

			function w(e) {
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
					for (var s = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, o = "0123456789abcdef".split(""), a = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], u = function(e, t, r) {
							return function(n) {
								return new N(e, t, e).update(n)[r]()
							}
						}, d = function(e, t, r) {
							return function(n, s) {
								return new N(e, t, s).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = u(e, t, "hex");
							r.create = function() {
								return new N(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < l.length; ++n) {
								var s = l[n];
								r[s] = u(e, t, s)
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
								var r = d(e, t, "hex");
								r.create = function(r) {
									return new N(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < l.length; ++n) {
									var s = l[n];
									r[s] = d(e, t, s)
								}
								return r
							}
						}], f = {}, b = [], p = 0; p < h.length; ++p)
						for (var g = h[p], v = g.bits, E = 0; E < v.length; ++E) {
							var x = g.name + "_" + v[E];
							b.push(x), f[x] = g.createMethod(v[E], g.padding)
						}

					function N(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, s = e.length, o = this.blocks, i = this.byteCount, c = this.blockCount, l = 0, u = this.s; l < s;) {
							if (this.reset)
								for (this.reset = !1, o[0] = this.block, r = 1; r < c + 1; ++r) o[r] = 0;
							if (t)
								for (r = this.start; l < s && r < i; ++l) o[r >> 2] |= e[l] << a[3 & r++];
							else
								for (r = this.start; l < s && r < i; ++l)(n = e.charCodeAt(l)) < 128 ? o[r >> 2] |= n << a[3 & r++] : n < 2048 ? (o[r >> 2] |= (192 | n >> 6) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (o[r >> 2] |= (224 | n >> 12) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), o[r >> 2] |= (240 | n >> 18) << a[3 & r++], o[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], o[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], o[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = o[c], r = 0; r < c; ++r) u[r] ^= o[r];
								w(u), this.reset = !0
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
						w(n)
					}, N.prototype.toString = N.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, s = this.extraBytes, a = 0, i = 0, c = ""; i < n;) {
							for (a = 0; a < t && i < n; ++a, ++i) e = r[a], c += o[e >> 4 & 15] + o[15 & e] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 28 & 15] + o[e >> 24 & 15];
							i % t == 0 && (w(r), a = 0)
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
							a % t == 0 && w(r)
						}
						return s && (c[o] = r[o], e = e.slice(0, i)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, s = this.outputBlocks, o = this.extraBytes, a = 0, i = 0, c = []; i < s;) {
							for (a = 0; a < r && i < s; ++a, ++i) e = i << 2, t = n[a], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % r == 0 && w(n)
						}
						return o && (e = i << 2, t = n[a], o > 0 && (c[e] = 255 & t), o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var w = function(e) {
						var t, r, n, s, o, a, c, l, u, d, m, h, f, b, p, g, v, E, x, N, w, O, j, _, y, C, I, A, R, T, S, k, U, M, P, B, F, D, L, G, V, H, W, Y, X, z, q, K, J, $, Z, Q, ee, te, re, ne, se, oe, ae, ie, ce, le, ue;
						for (n = 0; n < 48; n += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | c >>> 31), r = (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = s ^ (l << 1 | u >>> 31), r = o ^ (u << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (d << 1 | m >>> 31), r = c ^ (m << 1 | d >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (h << 1 | f >>> 31), r = u ^ (f << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = d ^ (s << 1 | o >>> 31), r = m ^ (o << 1 | s >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, b = e[0], p = e[1], z = e[11] << 4 | e[10] >>> 28, q = e[10] << 4 | e[11] >>> 28, A = e[20] << 3 | e[21] >>> 29, R = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, W = e[41] << 18 | e[40] >>> 14, M = e[2] << 1 | e[3] >>> 31, P = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, K = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, T = e[33] << 13 | e[32] >>> 19, S = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, F = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Z = e[35] << 15 | e[34] >>> 17, k = e[45] << 29 | e[44] >>> 3, U = e[44] << 29 | e[45] >>> 3, _ = e[6] << 28 | e[7] >>> 4, y = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, D = e[26] << 25 | e[27] >>> 7, L = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, Y = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, C = e[18] << 20 | e[19] >>> 12, I = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, G = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, O = e[48] << 14 | e[49] >>> 18, j = e[49] << 14 | e[48] >>> 18, e[0] = b ^ ~g & E, e[1] = p ^ ~v & x, e[10] = _ ^ ~C & A, e[11] = y ^ ~I & R, e[20] = M ^ ~B & D, e[21] = P ^ ~F & L, e[30] = Y ^ ~z & K, e[31] = X ^ ~q & J, e[40] = te ^ ~ne & oe, e[41] = re ^ ~se & ae, e[2] = g ^ ~E & N, e[3] = v ^ ~x & w, e[12] = C ^ ~A & T, e[13] = I ^ ~R & S, e[22] = B ^ ~D & G, e[23] = F ^ ~L & V, e[32] = z ^ ~K & $, e[33] = q ^ ~J & Z, e[42] = ne ^ ~oe & ie, e[43] = se ^ ~ae & ce, e[4] = E ^ ~N & O, e[5] = x ^ ~w & j, e[14] = A ^ ~T & k, e[15] = R ^ ~S & U, e[24] = D ^ ~G & H, e[25] = L ^ ~V & W, e[34] = K ^ ~$ & Q, e[35] = J ^ ~Z & ee, e[44] = oe ^ ~ie & le, e[45] = ae ^ ~ce & ue, e[6] = N ^ ~O & b, e[7] = w ^ ~j & p, e[16] = T ^ ~k & _, e[17] = S ^ ~U & y, e[26] = G ^ ~H & M, e[27] = V ^ ~W & P, e[36] = $ ^ ~Q & Y, e[37] = Z ^ ~ee & X, e[46] = ie ^ ~le & te, e[47] = ce ^ ~ue & re, e[8] = O ^ ~b & g, e[9] = j ^ ~p & v, e[18] = k ^ ~_ & C, e[19] = U ^ ~y & I, e[28] = H ^ ~M & B, e[29] = W ^ ~P & F, e[38] = Q ^ ~Y & z, e[39] = ee ^ ~X & q, e[48] = le ^ ~te & ne, e[49] = ue ^ ~re & se, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (s) e.exports = f;
					else
						for (p = 0; p < b.length; ++p) n[b[p]] = f[b[p]]
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
			var u, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(u || (u = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
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
			m.errors = d, m.levels = u
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "encode", (function() {
				return c
			})), r.d(t, "decode", (function() {
				return d
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
					const i = u(e, r);
					a.push(i.result), (r += i.consumed) > t + 1 + n && o.throwError("child data too short", s.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: a
				}
			}

			function u(e, t) {
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

			function d(e) {
				const t = Object(n.a)(e),
					r = u(t, 0);
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
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "h", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/reddit/models/Poll/index.ts"),
				m = r("./src/redditGQL/operations/PollVote.json"),
				h = r("./src/reddit/endpoints/governance/requester.ts");
			var f = r("./src/reddit/endpoints/governance/wallet.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/Vote/index.ts"),
				g = r("./src/reddit/selectors/crypto/points.ts"),
				v = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(s.a)(v.b),
				N = Object(s.a)(v.c),
				w = Object(s.a)(v.e),
				O = (Object(s.a)(v.f), Object(s.a)(v.g), Object(s.a)(v.h)),
				j = Object(s.a)(v.i),
				_ = Object(s.a)(v.j),
				y = Object(s.a)(v.k),
				C = Object(s.a)(v.q),
				I = Object(s.a)(v.r),
				A = Object(s.a)(v.s),
				R = Object(s.a)(v.t),
				T = Object(s.a)(v.u),
				S = Object(s.a)(v.v),
				k = Object(s.a)(v.w),
				U = Object(s.a)(v.x),
				M = (e, t) => async (r, n, {
					apiContext: s,
					gqlContext: o
				}) => {
					let a, c = n().polls.models[e];
					if (r(_({
							pollId: e
						})), (a = c.type === d.a.GA ? await ((e, t, r) => Object(u.a)(e, {
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
									endpoint: `${l.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === d.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							r(w({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(y(a.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(d.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === p.a.notVoted && r(Object(i.jb)(e))
						}
					} else r(j({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(E.a)(r, a.error || a.errors[0].messsage)
				}, P = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					var u;
					r(A());
					const d = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(h.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${l.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: d
					});
					m.ok ? (r(R({
						...m.body,
						subredditId: e.subredditId
					})), r(Object(c.f)({
						kind: b.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(o.a)(e.amount)), n.fbt._param("tokenName", (null === (u = Object(g.b)(s(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(a.f)())) : (r(C({
						error: m.error
					})), Object(E.a)(r, m.error))
				}, B = e => async (t, r, {
					apiContext: n
				}) => {
					t(S());
					const s = await Object(f.a)(n(), e);
					s.ok ? t(k(s.body)) : t(T({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r = 3e4, n = 3e5) {
				return async (s, o, a) => new Promise((i, c) => {
					const l = Date.now() + n,
						u = () => {
							c(new Error("Timed out while polling for success"))
						},
						d = async () => {
							if (Date.now() > l) return u();
							const n = Date.now();
							await e(s, o, a);
							const m = await t(o);
							if (m) i();
							else if (!1 === m) c();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < l ? setTimeout(d, r) : u()
							}
						};
					d()
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, r) {
			e.exports = {
				overview: "_3vbYFraj9qRr9wXp4mcPUn",
				description: "_1SZ6yxzmSfQKpV9QOquYaR",
				grid: "jh8B-AY4740kpxlHw2YDW",
				descriptionTitle: "iGBU2u1c8RwaU1r6hphWt",
				amountSubtext: "_28HHYVa7-RIY6X_ZjCpCAb",
				descriptionSubtitle: "_3nbUm4QjlldCfIOsi_zYWh",
				amountCell: "ftLHNRLY2TdwcJtKSvldG",
				amount: "_3sfSvH2g-yH3GQObK-yNFD"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				a = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				i = r.n(a);

			function c(e) {
				return s.a.createElement("div", {
					className: i.a.overview
				}, e.image, s.a.createElement("div", {
					className: i.a.description
				}, s.a.createElement("div", {
					className: i.a.grid
				}, s.a.createElement("div", {
					className: i.a.descriptionTitle,
					title: e.title
				}, e.title), s.a.createElement("div", {
					className: i.a.amountCell
				}, s.a.createElement(o.a, {
					amount: e.pointsAmount,
					className: i.a.amount,
					subredditId: e.subredditId
				})), s.a.createElement("div", {
					className: i.a.descriptionSubtitle
				}, e.subtitle), s.a.createElement("div", {
					className: i.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				subredditIcon: "_3OT024bIB7-_eUL8vmIzMN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/reddit/actions/economics/claims/constants.ts");
			const d = Object(l.a)(u.a),
				m = Object(l.a)(u.b);
			var h = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				f = r("./src/reddit/actions/governance/index.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				g = r("./src/reddit/endpoints/governance/crypto.ts"),
				v = r("./src/reddit/helpers/crypto/transactions.ts"),
				E = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				x = r("./src/reddit/helpers/governance/tokens.ts"),
				N = r("./src/reddit/helpers/trackers/crypto.ts"),
				w = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/crypto/claims.ts"),
				_ = r("./src/reddit/selectors/crypto/points.ts"),
				y = r("./src/reddit/selectors/gov.ts"),
				C = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				I = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				A = r("./src/reddit/components/SubredditIcon/index.tsx"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				S = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				k = r("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				U = r.n(k);

			function M(e) {
				const {
					subredditId: t,
					pointsDetails: r
				} = e, s = Object(a.e)(t => Object(j.b)(t, e)), i = s && s.pointsToClaim;
				if (!i) throw new Error("Expected claim amount to approve");
				const c = Object(a.e)(t => Object(R.R)(t, e));
				return o.a.createElement(S.a, {
					subredditId: t,
					image: o.a.createElement(A.b, {
						className: U.a.subredditIcon,
						subredditOrProfile: c
					}),
					title: n.fbt._("Claim {pointsName}", [n.fbt._param("pointsName", r.name)], {
						hk: "zLhei"
					}),
					subtitle: n.fbt._("For your contributions to {subredditName}", [n.fbt._param("subredditName", c.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: i
				})
			}
			const P = e => o.a.createElement(T.b, {
				values: [
					[n.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(T.c)(), e.transaction.arguments[1]],
					[Object(T.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(c.a)((function(e) {
				const {
					onClose: t,
					subredditId: r
				} = e, s = Object(a.d)(), c = Object(w.a)(), {
					currentPointsAmount: l,
					nextPointsClaim: u,
					pointsDetails: A
				} = Object(a.e)(Object(i.c)({
					currentPointsAmount: t => Object(y.e)(t, e),
					nextPointsClaim: t => Object(j.b)(t, e),
					pointsDetails: t => Object(_.b)(t, e.subredditId)
				}));
				if (!A || !u) throw new Error("No available claim to make");
				if (!u.address) return o.a.createElement(C.a, {
					onClose: t
				});
				const R = Object(v.b)(A.contracts.distribution.address, u.round, u.address, u.userKarma, u.signature),
					T = e => {
						c(Object(N.c)("points_claim", r, A.displayConversion, e))
					},
					S = Object(x.b)(u.pointsToClaim, A.displayConversion);
				return o.a.createElement(I.a, {
					approvalOverview: o.a.createElement(M, {
						pointsDetails: A,
						subredditId: r
					}),
					approvalDetails: o.a.createElement(P, {
						transaction: R
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), s(Object(b.f)(Object(b.e)(n.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), O.b.SuccessCommunity))), s(m({
							subredditId: r
						})), async function(e, t, r, n, s) {
							await Object(E.a)(t, r), await e(Object(p.a)(Object(f.h)({
								subredditId: n
							}), async e => {
								const t = Object(y.e)(e(), {
									subredditId: n
								});
								return s !== t || null
							})), await e(Object(h.b)({
								forceFetch: !0
							}))
						}(s, A, e.hash, r, l).then(() => {
							c(Object(N.d)("points_claim", r, S)), s(function(e) {
								return Object(b.f)(Object(b.e)(n.fbt._("Your {pointsName} are ready!", [n.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), O.b.SuccessCommunityGreen))
							}(A.name))
						}).catch(e => {
							T(e.toString()), s(function(e) {
								return Object(b.f)(Object(b.e)(n.fbt._("Failed to claim your {pointsName}. Try again later", [n.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), O.b.Error))
							}(A.name))
						}).finally(() => {
							s(d({
								subredditId: r
							}))
						})
					},
					onTransactionFailure: T,
					subredditId: r,
					transaction: R,
					transactionIntent: Object(g.c)(r)
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3RwZXlqQ-Iin-F-rL6IYG4",
				header: "_2jRdJa8cJJOIUqpk7tjmJM",
				title: "c4tRBYxcJYSuTBRs4uJBu",
				closeButton: "_23b4K8MIubjQq2ix5KI8QR",
				body: "_1WFLRa1qVzmEB1vs-gujyU",
				leftSection: "I4Uc5svBBVMAC3Gv3cumu",
				sectionHeader: "_2zaE6P94B156zFeiUyAHGj",
				content: "_1Yqz3rGaFmyEoxy_Wc_MrB",
				rightSection: "_-4IOB0_BjX0SdDgbB8E5e"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/addQueryParams/index.ts"),
				l = r("./src/reddit/icons/svgs/Close/index.tsx"),
				u = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = r("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				h = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				f = r.n(h);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const p = Object(a.c)({
					userId: e => {
						const t = Object(u.k)(e);
						return t ? t.id : ""
					}
				}),
				g = Object(o.b)(p)((function(e) {
					const {
						onClose: t,
						userId: r
					} = e;
					return s.a.createElement("div", {
						className: f.a.container
					}, s.a.createElement("header", {
						className: f.a.header
					}, s.a.createElement("div", {
						className: f.a.title
					}, b._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), s.a.createElement(l.a, {
						className: f.a.closeButton,
						onClick: t
					})), s.a.createElement("div", {
						className: f.a.body
					}, s.a.createElement("section", {
						className: f.a.leftSection
					}, s.a.createElement("div", {
						className: f.a.sectionHeader
					}, b._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), s.a.createElement("div", {
						className: f.a.content
					}, s.a.createElement(d.a, {
						index: "1"
					}, b._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(d.a, {
						index: "2"
					}, b._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), s.a.createElement(d.a, {
						index: "3"
					}, b._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(d.a, {
						index: "4"
					}, b._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), s.a.createElement("section", {
						className: f.a.rightSection
					}, s.a.createElement(m.a, {
						url: Object(c.a)("http://www.reddit.com/vault/", {
							u: r
						}),
						scale: 5
					}))))
				}));
			t.b = Object(i.a)(g)
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
				u = r("./src/lib/classNames/index.ts"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = r.n(f);
			var p = Object(d.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return l.a.createElement("div", {
						className: b.a.wrapper
					}, l.a.createElement(h.a, {
						className: b.a.titleRow
					}, r), l.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), l.a.createElement(h.a, {
						className: b.a.buttonRow
					}, l.a.createElement(m.l, {
						className: b.a.confirmButton,
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
						className: Object(u.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), i && l.a.createElement(p, {
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
				return b
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
				l = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				u = r("./src/reddit/controls/FormFields/index.m.less"),
				d = r.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = a.a.input("input", d.a),
				f = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(d.a.inputWrapper, a, {
							[d.a.mIsInvalid]: e.isInvalid
						}),
						onClick: f
					}, s.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(o.a)(d.a.label, {
							[d.a.mHasValue]: c
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
						...l
					} = e, u = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(d.a.inputMovingLabelWrapper, i, {
							[d.a.mIsInvalid]: a,
							[d.a.mIsRedditStyle]: c
						}),
						onClick: f
					}, s.a.createElement(h, m({
						innerRef: n
					}, l)), e.label && s.a.createElement("label", {
						className: Object(o.a)(d.a.label, {
							[d.a.mHasValue]: u
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(o.a)(d.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: d.a.plus
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
					return e.map((e, a) => s.a.createElement(b, {
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
						className: d.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(l.b, {
						className: d.a.trash
					})), !!o[a] && s.a.createElement(i.b, {
						className: d.a.errorText
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
						className: Object(o.a)(d.a.multiInputWrapper, e)
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
					method: s.jb.GET
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
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e, t) {
				const [r, s] = Object(n.useState)(e);
				return [r, e => {
					t.current && s(e)
				}]
			}
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
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("inlineRow", o.a)
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
				return u
			})), r.d(t, "e", (function() {
				return d
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
				u = (e, t) => {
					const r = l(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				d = (e, t) => {
					const r = l(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.709c3393d588065a389b.js.map