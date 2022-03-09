// https://www.redditstatic.com/desktop2x/1.bc9f96b0a1137e04dda1.js
// Retrieved at 3/9/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1, "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return v
			}));
			var r = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				o = n("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				s = n("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const a = new(n("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function c(e) {
				Object(r.l)(e, 20) || a.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					n = new Uint8Array(40);
				for (let r = 0; r < 40; r++) n[r] = t[r].charCodeAt(0);
				const i = Object(r.a)(Object(o.a)(n));
				for (let r = 0; r < 40; r += 2) i[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()), (15 & i[r >> 1]) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const u = {};
			for (let y = 0; y < 10; y++) u[String(y)] = String(y);
			for (let y = 0; y < 26; y++) u[String.fromCharCode(65 + y)] = String(10 + y);
			const l = Math.floor((h = 9007199254740991, Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10));
			var h;

			function p(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => u[e]).join("");
				for (; t.length >= l;) {
					let e = t.substring(0, l);
					t = parseInt(e, 10) % 97 + t.substring(e.length)
				}
				let n = String(98 - parseInt(t, 10) % 97);
				for (; n.length < 2;) n = "0" + n;
				return n
			}

			function f(e) {
				let t = null;
				if ("string" != typeof e && a.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = c(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && a.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== p(e) && a.throwArgumentError("bad icap checksum", "address", e), t = Object(i.c)(e.substring(4)); t.length < 40;) t = "0" + t;
					t = c("0x" + t)
				} else a.throwArgumentError("invalid address", "address", e);
				return t
			}

			function d(e) {
				try {
					return f(e), !0
				} catch (t) {}
				return !1
			}

			function E(e) {
				let t = Object(i.b)(f(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + p("XE00" + t) + t
			}

			function m(e) {
				let t = null;
				try {
					t = f(e.from)
				} catch (c) {
					a.throwArgumentError("missing from address", "transaction", e)
				}
				const n = Object(r.o)(Object(r.a)(i.a.from(e.nonce).toHexString()));
				return f(Object(r.e)(Object(o.a)(Object(s.encode)([t, n])), 12))
			}

			function v(e, t, n) {
				return 32 !== Object(r.d)(t) && a.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(r.d)(n) && a.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", n), f(Object(r.e)(Object(o.a)(Object(r.b)(["0xff", f(e), t, n])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "b", (function() {
				return g
			}));
			var r = n("./node_modules/bn.js/lib/bn.js"),
				i = n.n(r),
				o = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = n("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = n("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				c = i.a.BN;
			const u = new s.a(a.a),
				l = {},
				h = 9007199254740991;

			function p(e) {
				return null != e && (d.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(o.l)(e) || "bigint" == typeof e || Object(o.j)(e))
			}
			let f = !1;
			class d {
				constructor(e, t) {
					u.checkNew(new.target, d), e !== l && u.throwError("cannot call constructor directly; use BigNumber.from", s.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return m(v(this).fromTwos(e))
				}
				toTwos(e) {
					return m(v(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
				}
				add(e) {
					return m(v(this).add(v(e)))
				}
				sub(e) {
					return m(v(this).sub(v(e)))
				}
				div(e) {
					return d.from(e).isZero() && y("division by zero", "div"), m(v(this).div(v(e)))
				}
				mul(e) {
					return m(v(this).mul(v(e)))
				}
				mod(e) {
					const t = v(e);
					return t.isNeg() && y("cannot modulo negative values", "mod"), m(v(this).umod(t))
				}
				pow(e) {
					const t = v(e);
					return t.isNeg() && y("cannot raise to negative values", "pow"), m(v(this).pow(t))
				}
				and(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'and' negative values", "and"), m(v(this).and(t))
				}
				or(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'or' negative values", "or"), m(v(this).or(t))
				}
				xor(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'xor' negative values", "xor"), m(v(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && y("cannot mask negative values", "mask"), m(v(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && y("cannot shift negative values", "shl"), m(v(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && y("cannot shift negative values", "shr"), m(v(this).shrn(e))
				}
				eq(e) {
					return v(this).eq(v(e))
				}
				lt(e) {
					return v(this).lt(v(e))
				}
				lte(e) {
					return v(this).lte(v(e))
				}
				gt(e) {
					return v(this).gt(v(e))
				}
				gte(e) {
					return v(this).gte(v(e))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return v(this).isZero()
				}
				toNumber() {
					try {
						return v(this).toNumber()
					} catch (e) {
						y("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return u.throwError("this platform does not support BigInt", s.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, u.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? u.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.a.errors.UNEXPECTED_ARGUMENT, {}) : u.throwError("BigNumber.toString does not accept parameters", s.a.errors.UNEXPECTED_ARGUMENT, {})), v(this).toString(10)
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
					if (e instanceof d) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new d(l, E(e)) : e.match(/^-?[0-9]+$/) ? new d(l, E(new c(e))) : u.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && y("underflow", "BigNumber.from", e), (e >= h || e <= -h) && y("overflow", "BigNumber.from", e), d.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return d.from(t.toString());
					if (Object(o.j)(t)) return d.from(Object(o.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return d.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(o.l)(e) || "-" === e[0] && Object(o.l)(e.substring(1)))) return d.from(e)
						} return u.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function E(e) {
				if ("string" != typeof e) return E(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && u.throwArgumentError("invalid hex", "value", e), "0x00" === (e = E(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function m(e) {
				return d.from(E(e))
			}

			function v(e) {
				const t = d.from(e).toHexString();
				return "-" === t[0] ? new c("-" + t.substring(3), 16) : new c(t.substring(2), 16)
			}

			function y(e, t, n) {
				const r = {
					fault: e,
					operation: t
				};
				return null != n && (r.value = n), u.throwError(e, s.a.errors.NUMERIC_FAULT, r)
			}

			function N(e) {
				return new c(e, 36).toString(16)
			}

			function g(e) {
				return new c(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return s
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "m", (function() {
				return b
			}));
			const r = new(n("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function i(e) {
				return !!e.toHexString
			}

			function o(e) {
				return e.slice ? e : (e.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function s(e) {
				return p(e) && !(e.length % 2) || a(e)
			}

			function a(e) {
				if (null == e) return !1;
				if (e.constructor === Uint8Array) return !0;
				if ("string" == typeof e) return !1;
				if (null == e.length) return !1;
				for (let t = 0; t < e.length; t++) {
					const n = e[t];
					if ("number" != typeof n || n < 0 || n >= 256 || n % 1) return !1
				}
				return !0
			}

			function c(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					r.checkSafeUint53(e, "invalid arrayify value");
					const t = [];
					for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === t.length && t.push(0), o(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e) && (e = e.toHexString()), p(e)) {
					let n = e.substring(2);
					n.length % 2 && ("left" === t.hexPad ? n = "0x0" + n.substring(2) : "right" === t.hexPad ? n += "0" : r.throwArgumentError("hex data is odd-length", "value", e));
					const i = [];
					for (let e = 0; e < n.length; e += 2) i.push(parseInt(n.substring(e, e + 2), 16));
					return o(new Uint8Array(i))
				}
				return a(e) ? o(new Uint8Array(e)) : r.throwArgumentError("invalid arrayify value", "value", e)
			}

			function u(e) {
				const t = e.map(e => c(e)),
					n = t.reduce((e, t) => e + t.length, 0),
					r = new Uint8Array(n);
				return t.reduce((e, t) => (r.set(t, e), e + t.length), 0), o(r)
			}

			function l(e) {
				let t = c(e);
				if (0 === t.length) return t;
				let n = 0;
				for (; n < t.length && 0 === t[n];) n++;
				return n && (t = t.slice(n)), t
			}

			function h(e, t) {
				(e = c(e)).length > t && r.throwArgumentError("value out of range", "value", arguments[0]);
				const n = new Uint8Array(t);
				return n.set(e, t - e.length), o(n)
			}

			function p(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			const f = "0123456789abcdef";

			function d(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					r.checkSafeUint53(e, "invalid hexlify value");
					let t = "";
					for (; e;) t = f[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), i(e)) return e.toHexString();
				if (p(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : r.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (a(e)) {
					let t = "0x";
					for (let n = 0; n < e.length; n++) {
						let r = e[n];
						t += f[(240 & r) >> 4] + f[15 & r]
					}
					return t
				}
				return r.throwArgumentError("invalid hexlify value", "value", e)
			}

			function E(e) {
				if ("string" != typeof e) e = d(e);
				else if (!p(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function m(e, t, n) {
				return "string" != typeof e ? e = d(e) : (!p(e) || e.length % 2) && r.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != n ? "0x" + e.substring(t, 2 + 2 * n) : "0x" + e.substring(t)
			}

			function v(e) {
				let t = "0x";
				return e.forEach(e => {
					t += d(e).substring(2)
				}), t
			}

			function y(e) {
				const t = N(d(e, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function N(e) {
				"string" != typeof e && (e = d(e)), p(e) || r.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function g(e, t) {
				for ("string" != typeof e ? e = d(e) : p(e) || r.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && r.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function T(e) {
				const t = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (s(e)) {
					const n = c(e);
					65 !== n.length && r.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = d(n.slice(0, 32)), t.s = d(n.slice(32, 64)), t.v = n[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : r.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (n[32] |= 128), t._vs = d(n.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const n = h(c(t._vs), 32);
						t._vs = d(n);
						const i = n[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = i : t.recoveryParam !== i && r.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n[0] &= 127;
						const o = d(n);
						null == t.s ? t.s = o : t.s !== o && r.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? r.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && r.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && p(t.r) ? t.r = g(t.r, 32) : r.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && p(t.s) ? t.s = g(t.s, 32) : r.throwArgumentError("signature missing or invalid s", "signature", e);
					const n = c(t.s);
					n[0] >= 128 && r.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (n[0] |= 128);
					const i = d(n);
					t._vs && (p(t._vs) || r.throwArgumentError("signature invalid _vs", "signature", e), t._vs = g(t._vs, 32)), null == t._vs ? t._vs = i : t._vs !== i && r.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function b(e) {
				return d(u([(e = T(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				i = n.n(r),
				o = n("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function s(e) {
				return "0x" + i.a.keccak_256(Object(o.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, t, n) {
			(function(t, n) {
				! function() {
					"use strict";
					var r = "object" == typeof window ? window : {};
					!r.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (r = n);
					for (var i = !r.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, o = "0123456789abcdef".split(""), s = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], u = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, n) {
							return function(r) {
								return new T(e, t, e).update(r)[n]()
							}
						}, h = function(e, t, n) {
							return function(r, i) {
								return new T(e, t, i).update(r)[n]()
							}
						}, p = function(e, t) {
							var n = l(e, t, "hex");
							n.create = function() {
								return new T(e, t, e)
							}, n.update = function(e) {
								return n.create().update(e)
							};
							for (var r = 0; r < u.length; ++r) {
								var i = u[r];
								n[i] = l(e, t, i)
							}
							return n
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: c,
							createMethod: p
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: c,
							createMethod: p
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var n = h(e, t, "hex");
								n.create = function(n) {
									return new T(e, t, n)
								}, n.update = function(e, t) {
									return n.create(t).update(e)
								};
								for (var r = 0; r < u.length; ++r) {
									var i = u[r];
									n[i] = h(e, t, i)
								}
								return n
							}
						}], d = {}, E = [], m = 0; m < f.length; ++m)
						for (var v = f[m], y = v.bits, N = 0; N < y.length; ++N) {
							var g = v.name + "_" + y[N];
							E.push(g), d[g] = v.createMethod(y[N], v.padding)
						}

					function T(e, t, n) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
						for (var r = 0; r < 50; ++r) this.s[r] = 0
					}
					T.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var n, r, i = e.length, o = this.blocks, a = this.byteCount, c = this.blockCount, u = 0, l = this.s; u < i;) {
							if (this.reset)
								for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0;
							if (t)
								for (n = this.start; u < i && n < a; ++u) o[n >> 2] |= e[u] << s[3 & n++];
							else
								for (n = this.start; u < i && n < a; ++u)(r = e.charCodeAt(u)) < 128 ? o[n >> 2] |= r << s[3 & n++] : r < 2048 ? (o[n >> 2] |= (192 | r >> 6) << s[3 & n++], o[n >> 2] |= (128 | 63 & r) << s[3 & n++]) : r < 55296 || r >= 57344 ? (o[n >> 2] |= (224 | r >> 12) << s[3 & n++], o[n >> 2] |= (128 | r >> 6 & 63) << s[3 & n++], o[n >> 2] |= (128 | 63 & r) << s[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++u)), o[n >> 2] |= (240 | r >> 18) << s[3 & n++], o[n >> 2] |= (128 | r >> 12 & 63) << s[3 & n++], o[n >> 2] |= (128 | r >> 6 & 63) << s[3 & n++], o[n >> 2] |= (128 | 63 & r) << s[3 & n++]);
							if (this.lastByteIndex = n, n >= a) {
								for (this.start = n - a, this.block = o[c], n = 0; n < c; ++n) l[n] ^= o[n];
								b(l), this.reset = !0
							} else this.start = n
						}
						return this
					}, T.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							n = this.blockCount,
							r = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
						for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
						b(r)
					}, T.prototype.toString = T.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, c = ""; a < r;) {
							for (s = 0; s < t && a < r; ++s, ++a) e = n[s], c += o[e >> 4 & 15] + o[15 & e] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 28 & 15] + o[e >> 24 & 15];
							a % t == 0 && (b(n), s = 0)
						}
						return i && (e = n[s], i > 0 && (c += o[e >> 4 & 15] + o[15 & e]), i > 1 && (c += o[e >> 12 & 15] + o[e >> 8 & 15]), i > 2 && (c += o[e >> 20 & 15] + o[e >> 16 & 15])), c
					}, T.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							n = this.s,
							r = this.outputBlocks,
							i = this.extraBytes,
							o = 0,
							s = 0,
							a = this.outputBits >> 3;
						e = i ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(a);
						for (var c = new Uint32Array(e); s < r;) {
							for (o = 0; o < t && s < r; ++o, ++s) c[s] = n[o];
							s % t == 0 && b(n)
						}
						return i && (c[o] = n[o], e = e.slice(0, a)), e
					}, T.prototype.buffer = T.prototype.arrayBuffer, T.prototype.digest = T.prototype.array = function() {
						this.finalize();
						for (var e, t, n = this.blockCount, r = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, c = []; a < i;) {
							for (s = 0; s < n && a < i; ++s, ++a) e = a << 2, t = r[s], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							a % n == 0 && b(r)
						}
						return o && (e = a << 2, t = r[s], o > 0 && (c[e] = 255 & t), o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var b = function(e) {
						var t, n, r, i, o, s, c, u, l, h, p, f, d, E, m, v, y, N, g, T, b, _, O, I, x, A, k, D, S, R, w, C, L, F, P, j, U, M, B, V, G, q, K, Y, J, $, Q, X, z, H, W, Z, ee, te, ne, re, ie, oe, se, ae, ce, ue, le;
						for (r = 0; r < 48; r += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], h = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], p = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | c >>> 31), n = (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | s >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = i ^ (u << 1 | l >>> 31), n = o ^ (l << 1 | u >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = s ^ (h << 1 | p >>> 31), n = c ^ (p << 1 | h >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = u ^ (f << 1 | d >>> 31), n = l ^ (d << 1 | f >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = h ^ (i << 1 | o >>> 31), n = p ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, E = e[0], m = e[1], $ = e[11] << 4 | e[10] >>> 28, Q = e[10] << 4 | e[11] >>> 28, D = e[20] << 3 | e[21] >>> 29, S = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, q = e[40] << 18 | e[41] >>> 14, K = e[41] << 18 | e[40] >>> 14, F = e[2] << 1 | e[3] >>> 31, P = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, X = e[22] << 10 | e[23] >>> 22, z = e[23] << 10 | e[22] >>> 22, R = e[33] << 13 | e[32] >>> 19, w = e[32] << 13 | e[33] >>> 19, ue = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, j = e[14] << 6 | e[15] >>> 26, U = e[15] << 6 | e[14] >>> 26, N = e[25] << 11 | e[24] >>> 21, g = e[24] << 11 | e[25] >>> 21, H = e[34] << 15 | e[35] >>> 17, W = e[35] << 15 | e[34] >>> 17, C = e[45] << 29 | e[44] >>> 3, L = e[44] << 29 | e[45] >>> 3, I = e[6] << 28 | e[7] >>> 4, x = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, M = e[26] << 25 | e[27] >>> 7, B = e[27] << 25 | e[26] >>> 7, T = e[36] << 21 | e[37] >>> 11, b = e[37] << 21 | e[36] >>> 11, Z = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, Y = e[8] << 27 | e[9] >>> 5, J = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, k = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, V = e[38] << 8 | e[39] >>> 24, G = e[39] << 8 | e[38] >>> 24, _ = e[48] << 14 | e[49] >>> 18, O = e[49] << 14 | e[48] >>> 18, e[0] = E ^ ~v & N, e[1] = m ^ ~y & g, e[10] = I ^ ~A & D, e[11] = x ^ ~k & S, e[20] = F ^ ~j & M, e[21] = P ^ ~U & B, e[30] = Y ^ ~$ & X, e[31] = J ^ ~Q & z, e[40] = te ^ ~re & oe, e[41] = ne ^ ~ie & se, e[2] = v ^ ~N & T, e[3] = y ^ ~g & b, e[12] = A ^ ~D & R, e[13] = k ^ ~S & w, e[22] = j ^ ~M & V, e[23] = U ^ ~B & G, e[32] = $ ^ ~X & H, e[33] = Q ^ ~z & W, e[42] = re ^ ~oe & ae, e[43] = ie ^ ~se & ce, e[4] = N ^ ~T & _, e[5] = g ^ ~b & O, e[14] = D ^ ~R & C, e[15] = S ^ ~w & L, e[24] = M ^ ~V & q, e[25] = B ^ ~G & K, e[34] = X ^ ~H & Z, e[35] = z ^ ~W & ee, e[44] = oe ^ ~ae & ue, e[45] = se ^ ~ce & le, e[6] = T ^ ~_ & E, e[7] = b ^ ~O & m, e[16] = R ^ ~C & I, e[17] = w ^ ~L & x, e[26] = V ^ ~q & F, e[27] = G ^ ~K & P, e[36] = H ^ ~Z & Y, e[37] = W ^ ~ee & J, e[46] = ae ^ ~ue & te, e[47] = ce ^ ~le & ne, e[8] = _ ^ ~E & v, e[9] = O ^ ~m & y, e[18] = C ^ ~I & A, e[19] = L ^ ~x & k, e[28] = q ^ ~F & j, e[29] = K ^ ~P & U, e[38] = Z ^ ~Y & $, e[39] = ee ^ ~J & Q, e[48] = ue ^ ~te & re, e[49] = le ^ ~ne & ie, e[0] ^= a[r], e[1] ^= a[r + 1]
					};
					if (i) e.exports = d;
					else
						for (m = 0; m < E.length; ++m) r[E[m]] = d[E[m]]
				}()
			}).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			const r = "logger/5.4.0";
			let i = !1,
				o = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let a = s.default,
				c = null;
			const u = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (n) {
								e.push(t)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var l, h;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(l || (l = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			class p {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const n = e.toLowerCase();
					null == s[n] && this.throwArgumentError("invalid log level name", "logLevel", e), a > s[n] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(p.levels.DEBUG, e)
				}
				info(...e) {
					this._log(p.levels.INFO, e)
				}
				warn(...e) {
					this._log(p.levels.WARNING, e)
				}
				makeError(e, t, n) {
					if (o) return this.makeError("censored error", t, {});
					t || (t = p.errors.UNKNOWN_ERROR), n || (n = {});
					const r = [];
					Object.keys(n).forEach(e => {
						try {
							r.push(e + "=" + JSON.stringify(n[e]))
						} catch (s) {
							r.push(e + "=" + JSON.stringify(n[e].toString()))
						}
					}), r.push(`code=${t}`), r.push(`version=${this.version}`);
					const i = e;
					r.length && (e += " (" + r.join(", ") + ")");
					const s = new Error(e);
					return s.reason = i, s.code = t, Object.keys(n).forEach((function(e) {
						s[e] = n[e]
					})), s
				}
				throwError(e, t, n) {
					throw this.makeError(e, t, n)
				}
				throwArgumentError(e, t, n) {
					return this.throwError(e, p.errors.INVALID_ARGUMENT, {
						argument: t,
						value: n
					})
				}
				assert(e, t, n, r) {
					e || this.throwError(t, n, r)
				}
				assertArgument(e, t, n, r) {
					e || this.throwArgumentError(t, n, r)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, p.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, p.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, n) {
					n = n ? ": " + n : "", e < t && this.throwError("missing argument" + n, p.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + n, p.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", p.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", p.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return c || (c = new p(r)), c
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), i) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					o = !!e, i = !!t
				}
				static setLogLevel(e) {
					const t = s[e.toLowerCase()];
					null != t ? a = t : p.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new p(e)
				}
			}
			p.errors = h, p.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "encode", (function() {
				return c
			})), n.d(t, "decode", (function() {
				return h
			}));
			var r = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = n("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const o = new i.a("rlp/5.4.0");

			function s(e) {
				const t = [];
				for (; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function a(e, t, n) {
				let r = 0;
				for (let i = 0; i < n; i++) r = 256 * r + e[t + i];
				return r
			}

			function c(e) {
				return Object(r.i)(function e(t) {
					if (Array.isArray(t)) {
						let n = [];
						if (t.forEach((function(t) {
								n = n.concat(e(t))
							})), n.length <= 55) return n.unshift(192 + n.length), n;
						const r = s(n.length);
						return r.unshift(247 + r.length), r.concat(n)
					}
					Object(r.k)(t) || o.throwArgumentError("RLP object must be BytesLike", "object", t);
					const n = Array.prototype.slice.call(Object(r.a)(t));
					if (1 === n.length && n[0] <= 127) return n;
					if (n.length <= 55) return n.unshift(128 + n.length), n;
					const i = s(n.length);
					return i.unshift(183 + i.length), i.concat(n)
				}(e))
			}

			function u(e, t, n, r) {
				const s = [];
				for (; n < t + 1 + r;) {
					const a = l(e, n);
					s.push(a.result), (n += a.consumed) > t + 1 + r && o.throwError("child data too short", i.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + r,
					result: s
				}
			}

			function l(e, t) {
				if (0 === e.length && o.throwError("data too short", i.a.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const n = e[t] - 247;
					t + 1 + n > e.length && o.throwError("data short segment too short", i.a.errors.BUFFER_OVERRUN, {});
					const r = a(e, t + 1, n);
					return t + 1 + n + r > e.length && o.throwError("data long segment too short", i.a.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1 + n, n + r)
				}
				if (e[t] >= 192) {
					const n = e[t] - 192;
					return t + 1 + n > e.length && o.throwError("data array too short", i.a.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1, n)
				}
				if (e[t] >= 184) {
					const n = e[t] - 183;
					t + 1 + n > e.length && o.throwError("data array too short", i.a.errors.BUFFER_OVERRUN, {});
					const s = a(e, t + 1, n);
					return t + 1 + n + s > e.length && o.throwError("data array too short", i.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + n + s,
						result: Object(r.i)(e.slice(t + 1 + n, t + 1 + n + s))
					}
				}
				if (e[t] >= 128) {
					const n = e[t] - 128;
					return t + 1 + n > e.length && o.throwError("data too short", i.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + n,
						result: Object(r.i)(e.slice(t + 1, t + 1 + n))
					}
				}
				return {
					consumed: 1,
					result: Object(r.i)(e[t])
				}
			}

			function h(e) {
				const t = Object(r.a)(e),
					n = l(t, 0);
				return n.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), n.result
			}
		},
		"./node_modules/@reddit/crypto/core/wallets/index.es.js": function(e, t, n) {
			"use strict";
			var r, i, o = n("./node_modules/ethers/lib.esm/index.js");
			(i = r || (r = {}))[i.Metamask = 1] = "Metamask", i[i.CoinbaseWallet = 2] = "CoinbaseWallet";
			class s {
				constructor(e, t) {
					this.type = e, this.provider = t, this._cachedAddress = t.selectedAddress || ""
				}
				get address() {
					return this._cachedAddress
				}
				async requestAddress() {
					return async function(e) {
						const t = await e.request({
							method: "eth_requestAccounts"
						});
						return Array.isArray(t) ? t.filter(e => e && e.length > 0).map(e => e.toLowerCase()) : []
					}(this.provider).then(e => (this._cachedAddress = e[0], this._cachedAddress))
				}
			}
			o.ethers.providers.Web3Provider
		},
		"./node_modules/@reddit/crypto/react/gql/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Wt
			})), n.d(t, "b", (function() {
				return $t
			})), n.d(t, "c", (function() {
				return Ht
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				s = n("./node_modules/graphql/language/parser.mjs"),
				a = Object.defineProperty,
				c = Object.defineProperties,
				u = Object.getOwnPropertyDescriptors,
				l = Object.getOwnPropertySymbols,
				h = Object.prototype.hasOwnProperty,
				p = Object.prototype.propertyIsEnumerable,
				f = (e, t, n) => t in e ? a(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				d = (e, t) => {
					for (var n in t || (t = {})) h.call(t, n) && f(e, n, t[n]);
					if (l)
						for (var n of l(t)) p.call(t, n) && f(e, n, t[n]);
					return e
				},
				E = (e, t) => c(e, u(t));

			function m(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			const v = 10,
				y = 2;

			function N(e) {
				return g(e, [])
			}

			function g(e, t) {
				switch (typeof e) {
					case "string":
						return JSON.stringify(e);
					case "function":
						return e.name ? `[function ${e.name}]` : "[function]";
					case "object":
						return function(e, t) {
							if (null === e) return "null";
							if (t.includes(e)) return "[Circular]";
							const n = [...t, e];
							if (function(e) {
									return "function" == typeof e.toJSON
								}(e)) {
								const t = e.toJSON();
								if (t !== e) return "string" == typeof t ? t : g(t, n)
							} else if (Array.isArray(e)) return function(e, t) {
								if (0 === e.length) return "[]";
								if (t.length > y) return "[Array]";
								const n = Math.min(v, e.length),
									r = e.length - n,
									i = [];
								for (let o = 0; o < n; ++o) i.push(g(e[o], t));
								1 === r ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`);
								return "[" + i.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								const n = Object.entries(e);
								if (0 === n.length) return "{}";
								if (t.length > y) return "[" + function(e) {
									const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
									if ("Object" === t && "function" == typeof e.constructor) {
										const t = e.constructor.name;
										if ("string" == typeof t && "" !== t) return t
									}
									return t
								}(e) + "]";
								return "{ " + n.map(([e, n]) => e + ": " + g(n, t)).join(", ") + " }"
							}(e, n)
						}(e, t);
					default:
						return String(e)
				}
			}
			class T {
				constructor(e, t, n) {
					this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
				}
				get[Symbol.toStringTag]() {
					return "Location"
				}
				toJSON() {
					return {
						start: this.start,
						end: this.end
					}
				}
			}
			class b {
				constructor(e, t, n, r, i, o) {
					this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = o, this.prev = null, this.next = null
				}
				get[Symbol.toStringTag]() {
					return "Token"
				}
				toJSON() {
					return {
						kind: this.kind,
						value: this.value,
						line: this.line,
						column: this.column
					}
				}
			}
			const _ = {
					Name: [],
					Document: ["definitions"],
					OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
					VariableDefinition: ["variable", "type", "defaultValue", "directives"],
					Variable: ["name"],
					SelectionSet: ["selections"],
					Field: ["alias", "name", "arguments", "directives", "selectionSet"],
					Argument: ["name", "value"],
					FragmentSpread: ["name", "directives"],
					InlineFragment: ["typeCondition", "directives", "selectionSet"],
					FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
					IntValue: [],
					FloatValue: [],
					StringValue: [],
					BooleanValue: [],
					NullValue: [],
					EnumValue: [],
					ListValue: ["values"],
					ObjectValue: ["fields"],
					ObjectField: ["name", "value"],
					Directive: ["name", "arguments"],
					NamedType: ["name"],
					ListType: ["type"],
					NonNullType: ["type"],
					SchemaDefinition: ["description", "directives", "operationTypes"],
					OperationTypeDefinition: ["type"],
					ScalarTypeDefinition: ["description", "name", "directives"],
					ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
					FieldDefinition: ["description", "name", "arguments", "type", "directives"],
					InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
					InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
					UnionTypeDefinition: ["description", "name", "directives", "types"],
					EnumTypeDefinition: ["description", "name", "directives", "values"],
					EnumValueDefinition: ["description", "name", "directives"],
					InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
					DirectiveDefinition: ["description", "name", "arguments", "locations"],
					SchemaExtension: ["directives", "operationTypes"],
					ScalarTypeExtension: ["name", "directives"],
					ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
					InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
					UnionTypeExtension: ["name", "directives", "types"],
					EnumTypeExtension: ["name", "directives", "values"],
					InputObjectTypeExtension: ["name", "directives", "fields"]
				},
				O = new Set(Object.keys(_));

			function I(e) {
				const t = null == e ? void 0 : e.kind;
				return "string" == typeof t && O.has(t)
			}
			let x;
			var A;
			let k;
			var D;
			(A = x || (x = {})).QUERY = "query", A.MUTATION = "mutation", A.SUBSCRIPTION = "subscription", (D = k || (k = {})).NAME = "Name", D.DOCUMENT = "Document", D.OPERATION_DEFINITION = "OperationDefinition", D.VARIABLE_DEFINITION = "VariableDefinition", D.SELECTION_SET = "SelectionSet", D.FIELD = "Field", D.ARGUMENT = "Argument", D.FRAGMENT_SPREAD = "FragmentSpread", D.INLINE_FRAGMENT = "InlineFragment", D.FRAGMENT_DEFINITION = "FragmentDefinition", D.VARIABLE = "Variable", D.INT = "IntValue", D.FLOAT = "FloatValue", D.STRING = "StringValue", D.BOOLEAN = "BooleanValue", D.NULL = "NullValue", D.ENUM = "EnumValue", D.LIST = "ListValue", D.OBJECT = "ObjectValue", D.OBJECT_FIELD = "ObjectField", D.DIRECTIVE = "Directive", D.NAMED_TYPE = "NamedType", D.LIST_TYPE = "ListType", D.NON_NULL_TYPE = "NonNullType", D.SCHEMA_DEFINITION = "SchemaDefinition", D.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", D.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", D.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", D.FIELD_DEFINITION = "FieldDefinition", D.INPUT_VALUE_DEFINITION = "InputValueDefinition", D.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", D.UNION_TYPE_DEFINITION = "UnionTypeDefinition", D.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", D.ENUM_VALUE_DEFINITION = "EnumValueDefinition", D.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", D.DIRECTIVE_DEFINITION = "DirectiveDefinition", D.SCHEMA_EXTENSION = "SchemaExtension", D.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", D.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", D.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", D.UNION_TYPE_EXTENSION = "UnionTypeExtension", D.ENUM_TYPE_EXTENSION = "EnumTypeExtension", D.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
			const S = Object.freeze({});

			function R(e, t, n = _) {
				const r = new Map;
				for (const m of Object.values(k)) r.set(m, w(t, m));
				let i = void 0,
					o = Array.isArray(e),
					s = [e],
					a = -1,
					c = [],
					u = e,
					l = void 0,
					h = void 0;
				const p = [],
					f = [];
				do {
					const e = ++a === s.length,
						y = e && 0 !== c.length;
					if (e) {
						if (l = 0 === f.length ? void 0 : p[p.length - 1], u = h, h = f.pop(), y)
							if (o) {
								u = u.slice();
								let e = 0;
								for (const [t, n] of c) {
									const r = t - e;
									null === n ? (u.splice(r, 1), e++) : u[r] = n
								}
							} else {
								u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
								for (const [e, t] of c) u[e] = t
							} a = i.index, s = i.keys, c = i.edits, o = i.inArray, i = i.prev
					} else if (h) {
						if (null == (u = h[l = o ? a : s[a]])) continue;
						p.push(l)
					}
					let g;
					if (!Array.isArray(u)) {
						var d, E;
						I(u) || m(!1, `Invalid AST Node: ${N(u)}.`);
						const n = e ? null === (d = r.get(u.kind)) || void 0 === d ? void 0 : d.leave : null === (E = r.get(u.kind)) || void 0 === E ? void 0 : E.enter;
						if ((g = null == n ? void 0 : n.call(t, u, l, h, p, f)) === S) break;
						if (!1 === g) {
							if (!e) {
								p.pop();
								continue
							}
						} else if (void 0 !== g && (c.push([l, g]), !e)) {
							if (!I(g)) {
								p.pop();
								continue
							}
							u = g
						}
					}
					var v;
					if (void 0 === g && y && c.push([l, u]), e) p.pop();
					else i = {
						inArray: o,
						index: a,
						keys: s,
						edits: c,
						prev: i
					}, s = (o = Array.isArray(u)) ? u : null !== (v = n[u.kind]) && void 0 !== v ? v : [], a = -1, c = [], h && f.push(h), h = u
				} while (void 0 !== i);
				return 0 !== c.length ? c[c.length - 1][1] : e
			}

			function w(e, t) {
				const n = e[t];
				return "object" == typeof n ? n : "function" == typeof n ? {
					enter: n,
					leave: void 0
				} : {
					enter: e.enter,
					leave: e.leave
				}
			}

			function C(e) {
				return 9 === e || 32 === e
			}

			function L(e) {
				return e >= 48 && e <= 57
			}

			function F(e) {
				return e >= 97 && e <= 122 || e >= 65 && e <= 90
			}

			function P(e) {
				return F(e) || 95 === e
			}

			function j(e) {
				return F(e) || L(e) || 95 === e
			}

			function U(e) {
				var t;
				let n = Number.MAX_SAFE_INTEGER,
					r = null,
					i = -1;
				for (let s = 0; s < e.length; ++s) {
					var o;
					const t = e[s],
						a = M(t);
					a !== t.length && (r = null !== (o = r) && void 0 !== o ? o : s, i = s, 0 !== s && a < n && (n = a))
				}
				return e.map((e, t) => 0 === t ? e : e.slice(n)).slice(null !== (t = r) && void 0 !== t ? t : 0, i + 1)
			}

			function M(e) {
				let t = 0;
				for (; t < e.length && C(e.charCodeAt(t));) ++t;
				return t
			}
			const B = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

			function V(e) {
				return G[e.charCodeAt(0)]
			}
			const G = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];

			function q(e) {
				return R(e, K)
			}
			const K = {
				Name: {
					leave: e => e.value
				},
				Variable: {
					leave: e => "$" + e.name
				},
				Document: {
					leave: e => Y(e.definitions, "\n\n")
				},
				OperationDefinition: {
					leave(e) {
						const t = $("(", Y(e.variableDefinitions, ", "), ")"),
							n = Y([e.operation, Y([e.name, t]), Y(e.directives, " ")], " ");
						return ("query" === n ? "" : n + " ") + e.selectionSet
					}
				},
				VariableDefinition: {
					leave: ({
						variable: e,
						type: t,
						defaultValue: n,
						directives: r
					}) => e + ": " + t + $(" = ", n) + $(" ", Y(r, " "))
				},
				SelectionSet: {
					leave: ({
						selections: e
					}) => J(e)
				},
				Field: {
					leave({
						alias: e,
						name: t,
						arguments: n,
						directives: r,
						selectionSet: i
					}) {
						const o = $("", e, ": ") + t;
						let s = o + $("(", Y(n, ", "), ")");
						return s.length > 80 && (s = o + $("(\n", Q(Y(n, "\n")), "\n)")), Y([s, Y(r, " "), i], " ")
					}
				},
				Argument: {
					leave: ({
						name: e,
						value: t
					}) => e + ": " + t
				},
				FragmentSpread: {
					leave: ({
						name: e,
						directives: t
					}) => "..." + e + $(" ", Y(t, " "))
				},
				InlineFragment: {
					leave: ({
						typeCondition: e,
						directives: t,
						selectionSet: n
					}) => Y(["...", $("on ", e), Y(t, " "), n], " ")
				},
				FragmentDefinition: {
					leave: ({
						name: e,
						typeCondition: t,
						variableDefinitions: n,
						directives: r,
						selectionSet: i
					}) => `fragment ${e}${$("(",Y(n,", "),")")} on ${t} ${$("",Y(r," ")," ")}` + i
				},
				IntValue: {
					leave: ({
						value: e
					}) => e
				},
				FloatValue: {
					leave: ({
						value: e
					}) => e
				},
				StringValue: {
					leave: ({
						value: e,
						block: t
					}) => t ? function(e, t) {
						const n = e.replace(/"""/g, '\\"""'),
							r = n.split(/\r\n|[\n\r]/g),
							i = 1 === r.length,
							o = r.length > 1 && r.slice(1).every(e => 0 === e.length || C(e.charCodeAt(0))),
							s = n.endsWith('\\"""'),
							a = e.endsWith('"') && !s,
							c = e.endsWith("\\"),
							u = a || c,
							l = !(null != t && t.minimize) && (!i || e.length > 70 || u || o || s);
						let h = "";
						const p = i && C(e.charCodeAt(0));
						return (l && !p || o) && (h += "\n"), h += n, (l || u) && (h += "\n"), '"""' + h + '"""'
					}(e) : function(e) {
						return `"${e.replace(B,V)}"`
					}(e)
				},
				BooleanValue: {
					leave: ({
						value: e
					}) => e ? "true" : "false"
				},
				NullValue: {
					leave: () => "null"
				},
				EnumValue: {
					leave: ({
						value: e
					}) => e
				},
				ListValue: {
					leave: ({
						values: e
					}) => "[" + Y(e, ", ") + "]"
				},
				ObjectValue: {
					leave: ({
						fields: e
					}) => "{" + Y(e, ", ") + "}"
				},
				ObjectField: {
					leave: ({
						name: e,
						value: t
					}) => e + ": " + t
				},
				Directive: {
					leave: ({
						name: e,
						arguments: t
					}) => "@" + e + $("(", Y(t, ", "), ")")
				},
				NamedType: {
					leave: ({
						name: e
					}) => e
				},
				ListType: {
					leave: ({
						type: e
					}) => "[" + e + "]"
				},
				NonNullType: {
					leave: ({
						type: e
					}) => e + "!"
				},
				SchemaDefinition: {
					leave: ({
						description: e,
						directives: t,
						operationTypes: n
					}) => $("", e, "\n") + Y(["schema", Y(t, " "), J(n)], " ")
				},
				OperationTypeDefinition: {
					leave: ({
						operation: e,
						type: t
					}) => e + ": " + t
				},
				ScalarTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n
					}) => $("", e, "\n") + Y(["scalar", t, Y(n, " ")], " ")
				},
				ObjectTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						interfaces: n,
						directives: r,
						fields: i
					}) => $("", e, "\n") + Y(["type", t, $("implements ", Y(n, " & ")), Y(r, " "), J(i)], " ")
				},
				FieldDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						type: r,
						directives: i
					}) => $("", e, "\n") + t + (X(n) ? $("(\n", Q(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + ": " + r + $(" ", Y(i, " "))
				},
				InputValueDefinition: {
					leave: ({
						description: e,
						name: t,
						type: n,
						defaultValue: r,
						directives: i
					}) => $("", e, "\n") + Y([t + ": " + n, $("= ", r), Y(i, " ")], " ")
				},
				InterfaceTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						interfaces: n,
						directives: r,
						fields: i
					}) => $("", e, "\n") + Y(["interface", t, $("implements ", Y(n, " & ")), Y(r, " "), J(i)], " ")
				},
				UnionTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						types: r
					}) => $("", e, "\n") + Y(["union", t, Y(n, " "), $("= ", Y(r, " | "))], " ")
				},
				EnumTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						values: r
					}) => $("", e, "\n") + Y(["enum", t, Y(n, " "), J(r)], " ")
				},
				EnumValueDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n
					}) => $("", e, "\n") + Y([t, Y(n, " ")], " ")
				},
				InputObjectTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						fields: r
					}) => $("", e, "\n") + Y(["input", t, Y(n, " "), J(r)], " ")
				},
				DirectiveDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						repeatable: r,
						locations: i
					}) => $("", e, "\n") + "directive @" + t + (X(n) ? $("(\n", Q(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + Y(i, " | ")
				},
				SchemaExtension: {
					leave: ({
						directives: e,
						operationTypes: t
					}) => Y(["extend schema", Y(e, " "), J(t)], " ")
				},
				ScalarTypeExtension: {
					leave: ({
						name: e,
						directives: t
					}) => Y(["extend scalar", e, Y(t, " ")], " ")
				},
				ObjectTypeExtension: {
					leave: ({
						name: e,
						interfaces: t,
						directives: n,
						fields: r
					}) => Y(["extend type", e, $("implements ", Y(t, " & ")), Y(n, " "), J(r)], " ")
				},
				InterfaceTypeExtension: {
					leave: ({
						name: e,
						interfaces: t,
						directives: n,
						fields: r
					}) => Y(["extend interface", e, $("implements ", Y(t, " & ")), Y(n, " "), J(r)], " ")
				},
				UnionTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						types: n
					}) => Y(["extend union", e, Y(t, " "), $("= ", Y(n, " | "))], " ")
				},
				EnumTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						values: n
					}) => Y(["extend enum", e, Y(t, " "), J(n)], " ")
				},
				InputObjectTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						fields: n
					}) => Y(["extend input", e, Y(t, " "), J(n)], " ")
				}
			};

			function Y(e, t = "") {
				var n;
				return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
			}

			function J(e) {
				return $("{\n", Q(Y(e, "\n")), "\n}")
			}

			function $(e, t, n = "") {
				return null != t && "" !== t ? e + t + n : ""
			}

			function Q(e) {
				return $("  ", e.replace(/\n/g, "\n  "))
			}

			function X(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
			}

			function z(e, t) {
				if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
			}
			const H = /\r\n|[\n\r]/g;

			function W(e, t) {
				let n = 0,
					r = 1;
				for (const i of e.body.matchAll(H)) {
					if ("number" == typeof i.index || z(!1), i.index >= t) break;
					n = i.index + i[0].length, r += 1
				}
				return {
					line: r,
					column: t + 1 - n
				}
			}

			function Z(e, t) {
				const n = e.locationOffset.column - 1,
					r = "".padStart(n) + e.body,
					i = t.line - 1,
					o = e.locationOffset.line - 1,
					s = t.line + o,
					a = 1 === t.line ? n : 0,
					c = t.column + a,
					u = `${e.name}:${s}:${c}\n`,
					l = r.split(/\r\n|[\n\r]/g),
					h = l[i];
				if (h.length > 120) {
					const e = Math.floor(c / 80),
						t = c % 80,
						n = [];
					for (let r = 0; r < h.length; r += 80) n.push(h.slice(r, r + 80));
					return u + ee([
						[`${s} |`, n[0]], ...n.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
						["|", n[e + 1]]
					])
				}
				return u + ee([
					[`${s-1} |`, l[i - 1]],
					[`${s} |`, h],
					["|", "^".padStart(c)],
					[`${s+1} |`, l[i + 1]]
				])
			}

			function ee(e) {
				const t = e.filter(([e, t]) => void 0 !== t),
					n = Math.max(...t.map(([e]) => e.length));
				return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n")
			}
			class GraphQLError extends Error {
				constructor(e, ...t) {
					var n, r, i;
					const {
						nodes: o,
						source: s,
						positions: a,
						path: c,
						originalError: u,
						extensions: l
					} = function(e) {
						const t = e[0];
						return null == t || "kind" in t || "length" in t ? {
							nodes: t,
							source: e[1],
							positions: e[2],
							path: e[3],
							originalError: e[4],
							extensions: e[5]
						} : t
					}(t);
					super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != u ? u : void 0, this.nodes = te(Array.isArray(o) ? o : o ? [o] : void 0);
					const h = te(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
					this.source = null != s ? s : null == h ? void 0 : null === (r = h[0]) || void 0 === r ? void 0 : r.source, this.positions = null != a ? a : null == h ? void 0 : h.map(e => e.start), this.locations = a && s ? a.map(e => W(s, e)) : null == h ? void 0 : h.map(e => W(e.source, e.start));
					const p = "object" == typeof(f = null == u ? void 0 : u.extensions) && null !== f ? null == u ? void 0 : u.extensions : void 0;
					var f;
					this.extensions = null !== (i = null != l ? l : p) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
						message: {
							writable: !0,
							enumerable: !0
						},
						name: {
							enumerable: !1
						},
						nodes: {
							enumerable: !1
						},
						source: {
							enumerable: !1
						},
						positions: {
							enumerable: !1
						},
						originalError: {
							enumerable: !1
						}
					}), null != u && u.stack ? Object.defineProperty(this, "stack", {
						value: u.stack,
						writable: !0,
						configurable: !0
					}) : Error.captureStackTrace ? Error.captureStackTrace(this, GraphQLError) : Object.defineProperty(this, "stack", {
						value: Error().stack,
						writable: !0,
						configurable: !0
					})
				}
				get[Symbol.toStringTag]() {
					return "GraphQLError"
				}
				toString() {
					let e = this.message;
					if (this.nodes)
						for (const n of this.nodes) n.loc && (e += "\n\n" + Z((t = n.loc).source, W(t.source, t.start)));
					else if (this.source && this.locations)
						for (const n of this.locations) e += "\n\n" + Z(this.source, n);
					var t;
					return e
				}
				toJSON() {
					const e = {
						message: this.message
					};
					return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
				}
			}

			function te(e) {
				return void 0 === e || 0 === e.length ? void 0 : e
			}

			function ne(e, t, n) {
				return new GraphQLError(`Syntax Error: ${n}`, void 0, e, [t])
			}
			let re;
			var ie;
			let oe;
			var se;
			(ie = re || (re = {})).QUERY = "QUERY", ie.MUTATION = "MUTATION", ie.SUBSCRIPTION = "SUBSCRIPTION", ie.FIELD = "FIELD", ie.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", ie.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", ie.INLINE_FRAGMENT = "INLINE_FRAGMENT", ie.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", ie.SCHEMA = "SCHEMA", ie.SCALAR = "SCALAR", ie.OBJECT = "OBJECT", ie.FIELD_DEFINITION = "FIELD_DEFINITION", ie.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", ie.INTERFACE = "INTERFACE", ie.UNION = "UNION", ie.ENUM = "ENUM", ie.ENUM_VALUE = "ENUM_VALUE", ie.INPUT_OBJECT = "INPUT_OBJECT", ie.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", (se = oe || (oe = {})).SOF = "<SOF>", se.EOF = "<EOF>", se.BANG = "!", se.DOLLAR = "$", se.AMP = "&", se.PAREN_L = "(", se.PAREN_R = ")", se.SPREAD = "...", se.COLON = ":", se.EQUALS = "=", se.AT = "@", se.BRACKET_L = "[", se.BRACKET_R = "]", se.BRACE_L = "{", se.PIPE = "|", se.BRACE_R = "}", se.NAME = "Name", se.INT = "Int", se.FLOAT = "Float", se.STRING = "String", se.BLOCK_STRING = "BlockString", se.COMMENT = "Comment";
			class ae {
				constructor(e) {
					const t = new b(oe.SOF, 0, 0, 0, 0);
					this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
				}
				get[Symbol.toStringTag]() {
					return "Lexer"
				}
				advance() {
					return this.lastToken = this.token, this.token = this.lookahead()
				}
				lookahead() {
					let e = this.token;
					if (e.kind !== oe.EOF)
						do {
							if (e.next) e = e.next;
							else {
								const t = de(this, e.end);
								e.next = t, t.prev = e, e = t
							}
						} while (e.kind === oe.COMMENT);
					return e
				}
			}

			function ce(e) {
				return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
			}

			function ue(e, t) {
				return le(e.charCodeAt(t)) && he(e.charCodeAt(t + 1))
			}

			function le(e) {
				return e >= 55296 && e <= 56319
			}

			function he(e) {
				return e >= 56320 && e <= 57343
			}

			function pe(e, t) {
				const n = e.source.body.codePointAt(t);
				if (void 0 === n) return oe.EOF;
				if (n >= 32 && n <= 126) {
					const e = String.fromCodePoint(n);
					return '"' === e ? "'\"'" : `"${e}"`
				}
				return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
			}

			function fe(e, t, n, r, i) {
				const o = e.line,
					s = 1 + n - e.lineStart;
				return new b(t, n, r, o, s, i)
			}

			function de(e, t) {
				const n = e.source.body,
					r = n.length;
				let i = t;
				for (; i < r;) {
					const t = n.charCodeAt(i);
					switch (t) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++i;
							continue;
						case 10:
							++i, ++e.line, e.lineStart = i;
							continue;
						case 13:
							10 === n.charCodeAt(i + 1) ? i += 2 : ++i, ++e.line, e.lineStart = i;
							continue;
						case 35:
							return Ee(e, i);
						case 33:
							return fe(e, oe.BANG, i, i + 1);
						case 36:
							return fe(e, oe.DOLLAR, i, i + 1);
						case 38:
							return fe(e, oe.AMP, i, i + 1);
						case 40:
							return fe(e, oe.PAREN_L, i, i + 1);
						case 41:
							return fe(e, oe.PAREN_R, i, i + 1);
						case 46:
							if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2)) return fe(e, oe.SPREAD, i, i + 3);
							break;
						case 58:
							return fe(e, oe.COLON, i, i + 1);
						case 61:
							return fe(e, oe.EQUALS, i, i + 1);
						case 64:
							return fe(e, oe.AT, i, i + 1);
						case 91:
							return fe(e, oe.BRACKET_L, i, i + 1);
						case 93:
							return fe(e, oe.BRACKET_R, i, i + 1);
						case 123:
							return fe(e, oe.BRACE_L, i, i + 1);
						case 124:
							return fe(e, oe.PIPE, i, i + 1);
						case 125:
							return fe(e, oe.BRACE_R, i, i + 1);
						case 34:
							return 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2) ? Oe(e, i) : ye(e, i)
					}
					if (L(t) || 45 === t) return me(e, i, t);
					if (P(t)) return Ie(e, i);
					throw ne(e.source, i, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : ce(t) || ue(n, i) ? `Unexpected character: ${pe(e,i)}.` : `Invalid character: ${pe(e,i)}.`)
				}
				return fe(e, oe.EOF, r, r)
			}

			function Ee(e, t) {
				const n = e.source.body,
					r = n.length;
				let i = t + 1;
				for (; i < r;) {
					const e = n.charCodeAt(i);
					if (10 === e || 13 === e) break;
					if (ce(e)) ++i;
					else {
						if (!ue(n, i)) break;
						i += 2
					}
				}
				return fe(e, oe.COMMENT, t, i, n.slice(t + 1, i))
			}

			function me(e, t, n) {
				const r = e.source.body;
				let i = t,
					o = n,
					s = !1;
				if (45 === o && (o = r.charCodeAt(++i)), 48 === o) {
					if (L(o = r.charCodeAt(++i))) throw ne(e.source, i, `Invalid number, unexpected digit after 0: ${pe(e,i)}.`)
				} else i = ve(e, i, o), o = r.charCodeAt(i);
				if (46 === o && (s = !0, o = r.charCodeAt(++i), i = ve(e, i, o), o = r.charCodeAt(i)), 69 !== o && 101 !== o || (s = !0, 43 !== (o = r.charCodeAt(++i)) && 45 !== o || (o = r.charCodeAt(++i)), i = ve(e, i, o), o = r.charCodeAt(i)), 46 === o || P(o)) throw ne(e.source, i, `Invalid number, expected digit but got: ${pe(e,i)}.`);
				return fe(e, s ? oe.FLOAT : oe.INT, t, i, r.slice(t, i))
			}

			function ve(e, t, n) {
				if (!L(n)) throw ne(e.source, t, `Invalid number, expected digit but got: ${pe(e,t)}.`);
				const r = e.source.body;
				let i = t + 1;
				for (; L(r.charCodeAt(i));) ++i;
				return i
			}

			function ye(e, t) {
				const n = e.source.body,
					r = n.length;
				let i = t + 1,
					o = i,
					s = "";
				for (; i < r;) {
					const r = n.charCodeAt(i);
					if (34 === r) return s += n.slice(o, i), fe(e, oe.STRING, t, i + 1, s);
					if (92 !== r) {
						if (10 === r || 13 === r) break;
						if (ce(r)) ++i;
						else {
							if (!ue(n, i)) throw ne(e.source, i, `Invalid character within String: ${pe(e,i)}.`);
							i += 2
						}
					} else {
						s += n.slice(o, i);
						const t = 117 === n.charCodeAt(i + 1) ? 123 === n.charCodeAt(i + 2) ? Ne(e, i) : ge(e, i) : _e(e, i);
						s += t.value, o = i += t.size
					}
				}
				throw ne(e.source, i, "Unterminated string.")
			}

			function Ne(e, t) {
				const n = e.source.body;
				let r = 0,
					i = 3;
				for (; i < 12;) {
					const e = n.charCodeAt(t + i++);
					if (125 === e) {
						if (i < 5 || !ce(r)) break;
						return {
							value: String.fromCodePoint(r),
							size: i
						}
					}
					if ((r = r << 4 | be(e)) < 0) break
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)
			}

			function ge(e, t) {
				const n = e.source.body,
					r = Te(n, t + 2);
				if (ce(r)) return {
					value: String.fromCodePoint(r),
					size: 6
				};
				if (le(r) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
					const e = Te(n, t + 8);
					if (he(e)) return {
						value: String.fromCodePoint(r, e),
						size: 12
					}
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
			}

			function Te(e, t) {
				return be(e.charCodeAt(t)) << 12 | be(e.charCodeAt(t + 1)) << 8 | be(e.charCodeAt(t + 2)) << 4 | be(e.charCodeAt(t + 3))
			}

			function be(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function _e(e, t) {
				const n = e.source.body;
				switch (n.charCodeAt(t + 1)) {
					case 34:
						return {
							value: '"', size: 2
						};
					case 92:
						return {
							value: "\\", size: 2
						};
					case 47:
						return {
							value: "/", size: 2
						};
					case 98:
						return {
							value: "\b", size: 2
						};
					case 102:
						return {
							value: "\f", size: 2
						};
					case 110:
						return {
							value: "\n", size: 2
						};
					case 114:
						return {
							value: "\r", size: 2
						};
					case 116:
						return {
							value: "\t", size: 2
						}
				}
				throw ne(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
			}

			function Oe(e, t) {
				const n = e.source.body,
					r = n.length;
				let i = e.lineStart,
					o = t + 3,
					s = o,
					a = "";
				const c = [];
				for (; o < r;) {
					const r = n.charCodeAt(o);
					if (34 === r && 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)) {
						a += n.slice(s, o), c.push(a);
						const r = fe(e, oe.BLOCK_STRING, t, o + 3, U(c).join("\n"));
						return e.line += c.length - 1, e.lineStart = i, r
					}
					if (92 !== r || 34 !== n.charCodeAt(o + 1) || 34 !== n.charCodeAt(o + 2) || 34 !== n.charCodeAt(o + 3))
						if (10 !== r && 13 !== r)
							if (ce(r)) ++o;
							else {
								if (!ue(n, o)) throw ne(e.source, o, `Invalid character within String: ${pe(e,o)}.`);
								o += 2
							}
					else a += n.slice(s, o), c.push(a), 13 === r && 10 === n.charCodeAt(o + 1) ? o += 2 : ++o, a = "", s = o, i = o;
					else a += n.slice(s, o), s = o + 1, o += 4
				}
				throw ne(e.source, o, "Unterminated string.")
			}

			function Ie(e, t) {
				const n = e.source.body,
					r = n.length;
				let i = t + 1;
				for (; i < r;) {
					if (!j(n.charCodeAt(i))) break;
					++i
				}
				return fe(e, oe.NAME, t, i, n.slice(t, i))
			}
			const xe = function(e, t) {
				return e instanceof t
			};
			class Ae {
				constructor(e, t = "GraphQL request", n = {
					line: 1,
					column: 1
				}) {
					"string" == typeof e || m(!1, `Body must be a string. Received: ${N(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || m(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || m(!1, "column in locationOffset is 1-indexed and must be positive.")
				}
				get[Symbol.toStringTag]() {
					return "Source"
				}
			}
			class ke {
				constructor(e, t) {
					const n = function(e) {
						return xe(e, Ae)
					}(e) ? e : new Ae(e);
					this._lexer = new ae(n), this._options = t
				}
				parseName() {
					const e = this.expectToken(oe.NAME);
					return this.node(e, {
						kind: k.NAME,
						value: e.value
					})
				}
				parseDocument() {
					return this.node(this._lexer.token, {
						kind: k.DOCUMENT,
						definitions: this.many(oe.SOF, this.parseDefinition, oe.EOF)
					})
				}
				parseDefinition() {
					if (this.peek(oe.BRACE_L)) return this.parseOperationDefinition();
					const e = this.peekDescription(),
						t = e ? this._lexer.lookahead() : this._lexer.token;
					if (t.kind === oe.NAME) {
						switch (t.value) {
							case "schema":
								return this.parseSchemaDefinition();
							case "scalar":
								return this.parseScalarTypeDefinition();
							case "type":
								return this.parseObjectTypeDefinition();
							case "interface":
								return this.parseInterfaceTypeDefinition();
							case "union":
								return this.parseUnionTypeDefinition();
							case "enum":
								return this.parseEnumTypeDefinition();
							case "input":
								return this.parseInputObjectTypeDefinition();
							case "directive":
								return this.parseDirectiveDefinition()
						}
						if (e) throw ne(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
						switch (t.value) {
							case "query":
							case "mutation":
							case "subscription":
								return this.parseOperationDefinition();
							case "fragment":
								return this.parseFragmentDefinition();
							case "extend":
								return this.parseTypeSystemExtension()
						}
					}
					throw this.unexpected(t)
				}
				parseOperationDefinition() {
					const e = this._lexer.token;
					if (this.peek(oe.BRACE_L)) return this.node(e, {
						kind: k.OPERATION_DEFINITION,
						operation: x.QUERY,
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet()
					});
					const t = this.parseOperationType();
					let n;
					return this.peek(oe.NAME) && (n = this.parseName()), this.node(e, {
						kind: k.OPERATION_DEFINITION,
						operation: t,
						name: n,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseOperationType() {
					const e = this.expectToken(oe.NAME);
					switch (e.value) {
						case "query":
							return x.QUERY;
						case "mutation":
							return x.MUTATION;
						case "subscription":
							return x.SUBSCRIPTION
					}
					throw this.unexpected(e)
				}
				parseVariableDefinitions() {
					return this.optionalMany(oe.PAREN_L, this.parseVariableDefinition, oe.PAREN_R)
				}
				parseVariableDefinition() {
					return this.node(this._lexer.token, {
						kind: k.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(oe.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(oe.EQUALS) ? this.parseConstValueLiteral() : void 0,
						directives: this.parseConstDirectives()
					})
				}
				parseVariable() {
					const e = this._lexer.token;
					return this.expectToken(oe.DOLLAR), this.node(e, {
						kind: k.VARIABLE,
						name: this.parseName()
					})
				}
				parseSelectionSet() {
					return this.node(this._lexer.token, {
						kind: k.SELECTION_SET,
						selections: this.many(oe.BRACE_L, this.parseSelection, oe.BRACE_R)
					})
				}
				parseSelection() {
					return this.peek(oe.SPREAD) ? this.parseFragment() : this.parseField()
				}
				parseField() {
					const e = this._lexer.token,
						t = this.parseName();
					let n, r;
					return this.expectOptionalToken(oe.COLON) ? (n = t, r = this.parseName()) : r = t, this.node(e, {
						kind: k.FIELD,
						alias: n,
						name: r,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(oe.BRACE_L) ? this.parseSelectionSet() : void 0
					})
				}
				parseArguments(e) {
					const t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(oe.PAREN_L, t, oe.PAREN_R)
				}
				parseArgument(e = !1) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(oe.COLON), this.node(t, {
						kind: k.ARGUMENT,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseConstArgument() {
					return this.parseArgument(!0)
				}
				parseFragment() {
					const e = this._lexer.token;
					this.expectToken(oe.SPREAD);
					const t = this.expectOptionalKeyword("on");
					return !t && this.peek(oe.NAME) ? this.node(e, {
						kind: k.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1)
					}) : this.node(e, {
						kind: k.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseFragmentDefinition() {
					var e;
					const t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacyFragmentVariables) ? this.node(t, {
						kind: k.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					}) : this.node(t, {
						kind: k.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseFragmentName() {
					if ("on" === this._lexer.token.value) throw this.unexpected();
					return this.parseName()
				}
				parseValueLiteral(e) {
					const t = this._lexer.token;
					switch (t.kind) {
						case oe.BRACKET_L:
							return this.parseList(e);
						case oe.BRACE_L:
							return this.parseObject(e);
						case oe.INT:
							return this._lexer.advance(), this.node(t, {
								kind: k.INT,
								value: t.value
							});
						case oe.FLOAT:
							return this._lexer.advance(), this.node(t, {
								kind: k.FLOAT,
								value: t.value
							});
						case oe.STRING:
						case oe.BLOCK_STRING:
							return this.parseStringLiteral();
						case oe.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return this.node(t, {
										kind: k.BOOLEAN,
										value: !0
									});
								case "false":
									return this.node(t, {
										kind: k.BOOLEAN,
										value: !1
									});
								case "null":
									return this.node(t, {
										kind: k.NULL
									});
								default:
									return this.node(t, {
										kind: k.ENUM,
										value: t.value
									})
							}
							case oe.DOLLAR:
								if (e) {
									if (this.expectToken(oe.DOLLAR), this._lexer.token.kind === oe.NAME) {
										const e = this._lexer.token.value;
										throw ne(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
									}
									throw this.unexpected(t)
								}
								return this.parseVariable();
							default:
								throw this.unexpected()
					}
				}
				parseConstValueLiteral() {
					return this.parseValueLiteral(!0)
				}
				parseStringLiteral() {
					const e = this._lexer.token;
					return this._lexer.advance(), this.node(e, {
						kind: k.STRING,
						value: e.value,
						block: e.kind === oe.BLOCK_STRING
					})
				}
				parseList(e) {
					return this.node(this._lexer.token, {
						kind: k.LIST,
						values: this.any(oe.BRACKET_L, () => this.parseValueLiteral(e), oe.BRACKET_R)
					})
				}
				parseObject(e) {
					return this.node(this._lexer.token, {
						kind: k.OBJECT,
						fields: this.any(oe.BRACE_L, () => this.parseObjectField(e), oe.BRACE_R)
					})
				}
				parseObjectField(e) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(oe.COLON), this.node(t, {
						kind: k.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseDirectives(e) {
					const t = [];
					for (; this.peek(oe.AT);) t.push(this.parseDirective(e));
					return t
				}
				parseConstDirectives() {
					return this.parseDirectives(!0)
				}
				parseDirective(e) {
					const t = this._lexer.token;
					return this.expectToken(oe.AT), this.node(t, {
						kind: k.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e)
					})
				}
				parseTypeReference() {
					const e = this._lexer.token;
					let t;
					if (this.expectOptionalToken(oe.BRACKET_L)) {
						const n = this.parseTypeReference();
						this.expectToken(oe.BRACKET_R), t = this.node(e, {
							kind: k.LIST_TYPE,
							type: n
						})
					} else t = this.parseNamedType();
					return this.expectOptionalToken(oe.BANG) ? this.node(e, {
						kind: k.NON_NULL_TYPE,
						type: t
					}) : t
				}
				parseNamedType() {
					return this.node(this._lexer.token, {
						kind: k.NAMED_TYPE,
						name: this.parseName()
					})
				}
				peekDescription() {
					return this.peek(oe.STRING) || this.peek(oe.BLOCK_STRING)
				}
				parseDescription() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}
				parseSchemaDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					const n = this.parseConstDirectives(),
						r = this.many(oe.BRACE_L, this.parseOperationTypeDefinition, oe.BRACE_R);
					return this.node(e, {
						kind: k.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: r
					})
				}
				parseOperationTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(oe.COLON);
					const n = this.parseNamedType();
					return this.node(e, {
						kind: k.OPERATION_TYPE_DEFINITION,
						operation: t,
						type: n
					})
				}
				parseScalarTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("scalar");
					const n = this.parseName(),
						r = this.parseConstDirectives();
					return this.node(e, {
						kind: k.SCALAR_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r
					})
				}
				parseObjectTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("type");
					const n = this.parseName(),
						r = this.parseImplementsInterfaces(),
						i = this.parseConstDirectives(),
						o = this.parseFieldsDefinition();
					return this.node(e, {
						kind: k.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: r,
						directives: i,
						fields: o
					})
				}
				parseImplementsInterfaces() {
					return this.expectOptionalKeyword("implements") ? this.delimitedMany(oe.AMP, this.parseNamedType) : []
				}
				parseFieldsDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseFieldDefinition, oe.BRACE_R)
				}
				parseFieldDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						r = this.parseArgumentDefs();
					this.expectToken(oe.COLON);
					const i = this.parseTypeReference(),
						o = this.parseConstDirectives();
					return this.node(e, {
						kind: k.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: r,
						type: i,
						directives: o
					})
				}
				parseArgumentDefs() {
					return this.optionalMany(oe.PAREN_L, this.parseInputValueDef, oe.PAREN_R)
				}
				parseInputValueDef() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(oe.COLON);
					const r = this.parseTypeReference();
					let i;
					this.expectOptionalToken(oe.EQUALS) && (i = this.parseConstValueLiteral());
					const o = this.parseConstDirectives();
					return this.node(e, {
						kind: k.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: r,
						defaultValue: i,
						directives: o
					})
				}
				parseInterfaceTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					const n = this.parseName(),
						r = this.parseImplementsInterfaces(),
						i = this.parseConstDirectives(),
						o = this.parseFieldsDefinition();
					return this.node(e, {
						kind: k.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: r,
						directives: i,
						fields: o
					})
				}
				parseUnionTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("union");
					const n = this.parseName(),
						r = this.parseConstDirectives(),
						i = this.parseUnionMemberTypes();
					return this.node(e, {
						kind: k.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						types: i
					})
				}
				parseUnionMemberTypes() {
					return this.expectOptionalToken(oe.EQUALS) ? this.delimitedMany(oe.PIPE, this.parseNamedType) : []
				}
				parseEnumTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					const n = this.parseName(),
						r = this.parseConstDirectives(),
						i = this.parseEnumValuesDefinition();
					return this.node(e, {
						kind: k.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						values: i
					})
				}
				parseEnumValuesDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseEnumValueDefinition, oe.BRACE_R)
				}
				parseEnumValueDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseEnumValueName(),
						r = this.parseConstDirectives();
					return this.node(e, {
						kind: k.ENUM_VALUE_DEFINITION,
						description: t,
						name: n,
						directives: r
					})
				}
				parseEnumValueName() {
					if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw ne(this._lexer.source, this._lexer.token.start, `${De(this._lexer.token)} is reserved and cannot be used for an enum value.`);
					return this.parseName()
				}
				parseInputObjectTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("input");
					const n = this.parseName(),
						r = this.parseConstDirectives(),
						i = this.parseInputFieldsDefinition();
					return this.node(e, {
						kind: k.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						fields: i
					})
				}
				parseInputFieldsDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseInputValueDef, oe.BRACE_R)
				}
				parseTypeSystemExtension() {
					const e = this._lexer.lookahead();
					if (e.kind === oe.NAME) switch (e.value) {
						case "schema":
							return this.parseSchemaExtension();
						case "scalar":
							return this.parseScalarTypeExtension();
						case "type":
							return this.parseObjectTypeExtension();
						case "interface":
							return this.parseInterfaceTypeExtension();
						case "union":
							return this.parseUnionTypeExtension();
						case "enum":
							return this.parseEnumTypeExtension();
						case "input":
							return this.parseInputObjectTypeExtension()
					}
					throw this.unexpected(e)
				}
				parseSchemaExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("schema");
					const t = this.parseConstDirectives(),
						n = this.optionalMany(oe.BRACE_L, this.parseOperationTypeDefinition, oe.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return this.node(e, {
						kind: k.SCHEMA_EXTENSION,
						directives: t,
						operationTypes: n
					})
				}
				parseScalarTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("scalar");
					const t = this.parseName(),
						n = this.parseConstDirectives();
					if (0 === n.length) throw this.unexpected();
					return this.node(e, {
						kind: k.SCALAR_TYPE_EXTENSION,
						name: t,
						directives: n
					})
				}
				parseObjectTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("type");
					const t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						r = this.parseConstDirectives(),
						i = this.parseFieldsDefinition();
					if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
					return this.node(e, {
						kind: k.OBJECT_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: r,
						fields: i
					})
				}
				parseInterfaceTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("interface");
					const t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						r = this.parseConstDirectives(),
						i = this.parseFieldsDefinition();
					if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
					return this.node(e, {
						kind: k.INTERFACE_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: r,
						fields: i
					})
				}
				parseUnionTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("union");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						r = this.parseUnionMemberTypes();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return this.node(e, {
						kind: k.UNION_TYPE_EXTENSION,
						name: t,
						directives: n,
						types: r
					})
				}
				parseEnumTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("enum");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						r = this.parseEnumValuesDefinition();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return this.node(e, {
						kind: k.ENUM_TYPE_EXTENSION,
						name: t,
						directives: n,
						values: r
					})
				}
				parseInputObjectTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("input");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						r = this.parseInputFieldsDefinition();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return this.node(e, {
						kind: k.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: r
					})
				}
				parseDirectiveDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(oe.AT);
					const n = this.parseName(),
						r = this.parseArgumentDefs(),
						i = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					const o = this.parseDirectiveLocations();
					return this.node(e, {
						kind: k.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: r,
						repeatable: i,
						locations: o
					})
				}
				parseDirectiveLocations() {
					return this.delimitedMany(oe.PIPE, this.parseDirectiveLocation)
				}
				parseDirectiveLocation() {
					const e = this._lexer.token,
						t = this.parseName();
					if (Object.prototype.hasOwnProperty.call(re, t.value)) return t;
					throw this.unexpected(e)
				}
				node(e, t) {
					var n;
					return !0 !== (null === (n = this._options) || void 0 === n ? void 0 : n.noLocation) && (t.loc = new T(e, this._lexer.lastToken, this._lexer.source)), t
				}
				peek(e) {
					return this._lexer.token.kind === e
				}
				expectToken(e) {
					const t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw ne(this._lexer.source, t.start, `Expected ${Se(e)}, found ${De(t)}.`)
				}
				expectOptionalToken(e) {
					return this._lexer.token.kind === e && (this._lexer.advance(), !0)
				}
				expectKeyword(e) {
					const t = this._lexer.token;
					if (t.kind !== oe.NAME || t.value !== e) throw ne(this._lexer.source, t.start, `Expected "${e}", found ${De(t)}.`);
					this._lexer.advance()
				}
				expectOptionalKeyword(e) {
					const t = this._lexer.token;
					return t.kind === oe.NAME && t.value === e && (this._lexer.advance(), !0)
				}
				unexpected(e) {
					const t = null != e ? e : this._lexer.token;
					return ne(this._lexer.source, t.start, `Unexpected ${De(t)}.`)
				}
				any(e, t, n) {
					this.expectToken(e);
					const r = [];
					for (; !this.expectOptionalToken(n);) r.push(t.call(this));
					return r
				}
				optionalMany(e, t, n) {
					if (this.expectOptionalToken(e)) {
						const e = [];
						do {
							e.push(t.call(this))
						} while (!this.expectOptionalToken(n));
						return e
					}
					return []
				}
				many(e, t, n) {
					this.expectToken(e);
					const r = [];
					do {
						r.push(t.call(this))
					} while (!this.expectOptionalToken(n));
					return r
				}
				delimitedMany(e, t) {
					this.expectOptionalToken(e);
					const n = [];
					do {
						n.push(t.call(this))
					} while (this.expectOptionalToken(e));
					return n
				}
			}

			function De(e) {
				const t = e.value;
				return Se(e.kind) + (null != t ? ` "${t}"` : "")
			}

			function Se(e) {
				return function(e) {
					return e === oe.BANG || e === oe.DOLLAR || e === oe.AMP || e === oe.PAREN_L || e === oe.PAREN_R || e === oe.SPREAD || e === oe.COLON || e === oe.EQUALS || e === oe.AT || e === oe.BRACKET_L || e === oe.BRACKET_R || e === oe.BRACE_L || e === oe.PIPE || e === oe.BRACE_R
				}(e) ? `"${e}"` : e
			}

			function Re(e, t) {
				return t.tag = e, t
			}

			function we() {}

			function Ce(e) {
				return function(t) {
					var n = e.length;
					let r = !1,
						i = !1,
						o = !1,
						s = 0;
					t(Re(0, [function(a) {
						if (a) r = !0;
						else if (i) o = !0;
						else {
							for (i = o = !0; o && !r;) s < n ? (a = e[s], s = s + 1 | 0, o = !1, t(Re(1, [a]))) : (r = !0, t(0));
							i = !1
						}
					}]))
				}
			}

			function Le() {}

			function Fe(e) {
				e(0)
			}

			function Pe(e) {
				return e(0)
			}

			function je(e) {
				return function(t) {
					return function(n) {
						let r = we,
							i = !1,
							o = [],
							s = !1;
						t((function(t) {
							"number" == typeof t ? s || (s = !0, 0 === o.length && n(0)) : t.tag ? s || (i = !1, function(e) {
								function t(e) {
									"number" == typeof e ? 0 !== o.length && (e = 0 === (o = o.filter(a)).length, s && e ? n(0) : !i && e && (i = !0, r(0))) : e.tag ? 0 !== o.length && (n(Re(1, [e[0]])), c(0)) : (c = e = e[0], o = o.concat(e), e(0))
								}

								function a(e) {
									return e !== c
								}
								let c = we;
								1 === e.length ? e(t) : e.bind(null, t)
							}(e(t[0])), i || (i = !0, r(0))) : r = t[0]
						})), n(Re(0, [function(e) {
							e ? (s || (s = !0, r(e)), o.forEach((function(t) {
								return t(e)
							})), o = []) : (i || s ? i = !1 : (i = !0, r(0)), o.forEach(Pe))
						}]))
					}
				}
			}

			function Ue(e) {
				return e
			}

			function Me(e) {
				return function(t) {
					return function(n) {
						let r = !1;
						return t((function(t) {
							if ("number" == typeof t) r || (r = !0, n(t));
							else if (t.tag) r || (e(t[0]), n(t));
							else {
								var i = t[0];
								n(Re(0, [function(e) {
									if (!r) return e && (r = !0), i(e)
								}]))
							}
						}))
					}
				}
			}

			function Be(e) {
				e(0)
			}

			function Ve(e) {
				return function(t) {
					return function(n) {
						let r = [],
							i = we;
						return t((function(t) {
							"number" == typeof t ? Ce(r)(n) : t.tag ? (r.length >= e && 0 < e && r.shift(), r.push(t[0]), i(0)) : (t = t[0], 0 >= e ? (t(1), function(e) {
								let t = !1;
								e(Re(0, [function(n) {
									n ? t = !0 : t || e(0)
								}]))
							}(n)) : (i = t, t(0)))
						}))
					}
				}
			}

			function Ge(e) {
				return function(t) {
					let n = we,
						r = !1;
					return t((function(t) {
						"number" == typeof t ? r = !0 : t.tag ? r || (e(t[0]), n(0)) : (n = t = t[0], t(0))
					})), {
						unsubscribe: function() {
							if (!r) return r = !0, n(1)
						}
					}
				}
			}

			function qe() {}

			function Ke(e) {
				return function(t) {
					return function(n) {
						let r = we;
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? e(t[0]) ? n(t) : r(0) : (r = t[0], n(t))
						}))
					}
				}
			}

			function Ye(e) {
				return function(t) {
					let n = !1;
					t(Re(0, [function(r) {
						r ? n = !0 : n || (n = !0, t(Re(1, [e])), t(0))
					}]))
				}
			}

			function Je(e) {
				return function(t) {
					let n = Le,
						r = !1;
					n = e({
						next: function(e) {
							r || t(Re(1, [e]))
						},
						complete: function() {
							r || (r = !0, t(0))
						}
					}), t(Re(0, [function(e) {
						if (e && !r) return r = !0, n()
					}]))
				}
			}

			function $e(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							t = "number" == typeof t ? 0 : t.tag ? Re(1, [e(t[0])]) : Re(0, [t[0]]), n(t)
						}))
					}
				}
			}

			function Qe(e) {
				return je(Ue)(Ce(e))
			}

			function Xe(e) {
				return function(t) {
					return function(n) {
						let r = !1;
						return t((function(t) {
							if ("number" == typeof t) {
								if (r) return;
								return r = !0, n(t), e()
							}
							if (t.tag) r || n(t);
							else {
								var i = t[0];
								n(Re(0, [function(t) {
									if (!r) return t ? (r = !0, i(t), e()) : i(t)
								}]))
							}
						}))
					}
				}
			}

			function ze(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? n(t) : (n(t), e())
						}))
					}
				}
			}

			function He() {
				for (var e = arguments, t = arguments[0], n = 1, r = arguments.length; n < r; n++) t = e[n](t);
				return t
			}

			function We(e) {
				function t(e) {
					"number" == typeof e ? (n.forEach(Be), n = []) : e.tag ? (i = !1, n.forEach((function(t) {
						t(e)
					}))) : r = e[0]
				}
				let n = [],
					r = we,
					i = !1;
				return function(o) {
					function s(e) {
						return e !== o
					}
					1 === (n = n.concat(o)).length && e(t), o(Re(0, [function(e) {
						if (e) {
							if (0 === (n = n.filter(s)).length) return r(1)
						} else i || (i = !0, r(e))
					}]))
				}
			}

			function Ze(e) {
				return function(t) {
					return function(n) {
						let r = !1,
							i = 0,
							o = we;
						t((function(t) {
							"number" == typeof t ? r || (r = !0, n(0)) : t.tag ? i < e && !r && (i = i + 1 | 0, n(t), !r && i >= e && (r = !0, n(0), o(1))) : (t = t[0], 0 >= e ? (r = !0, n(0), t(1)) : o = t)
						})), n(Re(0, [function(t) {
							if (!r) {
								if (t) return r = !0, o(1);
								if (i < e) return o(0)
							}
						}]))
					}
				}
			}

			function et(e) {
				return function(t) {
					return function(n) {
						function r(e) {
							"number" != typeof e && (e.tag ? (i = !0, o(1), n(0)) : (s = e = e[0], e(0)))
						}
						let i = !1,
							o = we,
							s = we;
						t((function(t) {
							"number" == typeof t ? i || (i = !0, s(1), n(0)) : t.tag ? i || n(t) : (o = t[0], e(r))
						})), n(Re(0, [function(e) {
							if (!i) return e ? (i = !0, o(1), s(1)) : o(0)
						}]))
					}
				}
			}

			function tt(e) {
				return "string" == typeof e ? new GraphQLError(e) : "object" == typeof e && e.message ? new GraphQLError(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e
			}
			"function" != typeof Symbol || (Symbol.observable || (Symbol.observable = Symbol("observable")));
			var nt = function(e) {
				function t(t) {
					var n, r, i, o = t.networkError,
						s = t.response,
						a = (t.graphQLErrors || []).map(tt),
						c = (r = a, i = "", void 0 !== (n = o) ? i = "[Network] " + n.message : (void 0 !== r && r.forEach((function(e) {
							i += "[GraphQL] " + e.message + "\n"
						})), i.trim()));
					e.call(this, c), this.name = "CombinedError", this.message = c, this.graphQLErrors = a, this.networkError = o, this.response = s
				}
				return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.toString = function() {
					return this.message
				}, t
			}(Error);

			function rt(e, t) {
				e |= 0;
				for (var n = 0, r = 0 | t.length; n < r; n++) e = (e << 5) + e + t.charCodeAt(n);
				return e
			}

			function it(e) {
				return rt(5381, e) >>> 0
			}
			var ot = new Set,
				st = new WeakMap;

			function at(e) {
				return ot.clear(),
					function e(t) {
						if (null === t || ot.has(t)) return "null";
						if ("object" != typeof t) return JSON.stringify(t) || "";
						if (t.toJSON) return e(t.toJSON());
						if (Array.isArray(t)) {
							for (var n = "[", r = 0, i = t.length; r < i; r++) {
								r > 0 && (n += ",");
								var o = e(t[r]);
								n += o.length > 0 ? o : "null"
							}
							return n + "]"
						}
						var s = Object.keys(t).sort();
						if (!s.length && t.constructor && t.constructor !== Object) {
							var a = st.get(t) || Math.random().toString(36).slice(2);
							return st.set(t, a), '{"__key":"' + a + '"}'
						}
						ot.add(t);
						for (var c = "{", u = 0, l = s.length; u < l; u++) {
							var h = s[u],
								p = e(t[h]);
							p && (c.length > 1 && (c += ","), c += e(h) + ":" + p)
						}
						return ot.delete(t), c + "}"
					}(e)
			}

			function ct(e) {
				var t = ("string" != typeof e ? e.loc && e.loc.source.body || q(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
				if ("string" != typeof e) {
					var n = "definitions" in e && pt(e);
					n && (t = "# " + n + "\n" + t), e.loc || (e.loc = {
						start: 0,
						end: t.length,
						source: {
							body: t,
							name: "gql",
							locationOffset: {
								line: 1,
								column: 1
							}
						}
					})
				}
				return t
			}
			var ut = new Map;

			function lt(e) {
				var t, n;
				return "string" == typeof e ? (t = it(ct(e)), n = ut.get(t) || new ke(e, {
					noLocation: !0
				}).parseDocument()) : (t = e.__key || it(ct(e)), n = ut.get(t) || e), n.loc || ct(n), n.__key = t, ut.set(t, n), n
			}

			function ht(e, t) {
				t || (t = {});
				var n = lt(e);
				return {
					key: rt(n.__key, at(t)) >>> 0,
					query: n,
					variables: t
				}
			}

			function pt(e) {
				for (var t = 0, n = e.definitions.length; t < n; t++) {
					var r = e.definitions[t];
					if (r.kind === k.OPERATION_DEFINITION && r.name) return r.name.value
				}
			}

			function ft() {
				return (ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function dt(e, t, n) {
				if (!("data" in t) && !("errors" in t) || "path" in t) throw new Error("No Content");
				return {
					operation: e,
					data: t.data,
					error: Array.isArray(t.errors) ? new nt({
						graphQLErrors: t.errors,
						response: n
					}) : void 0,
					extensions: "object" == typeof t.extensions && t.extensions || void 0,
					hasNext: !!t.hasNext
				}
			}

			function Et(e, t, n) {
				var r = ft({}, e);
				if (r.hasNext = !!t.hasNext, !("path" in t)) return "data" in t && (r.data = t.data), r;
				Array.isArray(t.errors) && (r.error = new nt({
					graphQLErrors: r.error ? r.error.graphQLErrors.concat(t.errors) : t.errors,
					response: n
				}));
				for (var i, o = r.data = ft({}, r.data), s = 0; s < t.path.length;) o = o[i = t.path[s++]] = Array.isArray(o[i]) ? [].concat(o[i]) : ft({}, o[i]);
				return ft(o, t.data), r
			}

			function mt(e) {
				return "query" === e.kind && !!e.context.preferGetMethod
			}

			function vt(e) {
				return {
					query: q(e.query),
					operationName: pt(e.query),
					variables: e.variables || void 0,
					extensions: void 0
				}
			}

			function yt(e, t) {
				var n = mt(e),
					r = e.context.url;
				if (!n || !t) return r;
				var i = [];
				return t.operationName && i.push("operationName=" + encodeURIComponent(t.operationName)), t.query && i.push("query=" + encodeURIComponent(t.query.replace(/#[^\n\r]+/g, " ").trim())), t.variables && i.push("variables=" + encodeURIComponent(at(t.variables))), t.extensions && i.push("extensions=" + encodeURIComponent(at(t.extensions))), r + "?" + i.join("&")
			}

			function Nt(e, t) {
				var n = mt(e),
					r = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
				return ft({}, r, {
					body: !n && t ? JSON.stringify(t) : void 0,
					method: n ? "GET" : "POST",
					headers: n ? r.headers : ft({}, {
						"content-type": "application/json"
					}, r.headers)
				})
			}
			var gt = "undefined" != typeof Symbol ? Symbol.asyncIterator : null,
				Tt = "undefined" != typeof TextDecoder ? new TextDecoder : null,
				bt = /content-type:[^\r\n]*application\/json/i,
				_t = /boundary="?([^=";]+)"?/i;

			function Ot(e, t, n) {
				var r = "manual" === n.redirect ? 400 : 300,
					i = e.context.fetch;
				return Je((function(o) {
					var s = o.next,
						a = o.complete,
						c = "undefined" != typeof AbortController ? new AbortController : null;
					c && (n.signal = c.signal);
					var u, l = !1,
						h = !1;
					return Promise.resolve().then((function() {
							if (!l) return (i || fetch)(t, n)
						})).then((function(t) {
							if (t) return h = (u = t).status < 200 || u.status >= r,
								function(e, t, n) {
									var r = n.headers && n.headers.get("Content-Type") || "";
									if (!/multipart\/mixed/i.test(r)) return n.json().then((function(r) {
										e(dt(t, r, n))
									}));
									var i, o = "---",
										s = r.match(_t);
									s && (o = "--" + s[1]);
									var a = function() {};
									if (gt && n[gt]) {
										var c = n[gt]();
										i = c.next.bind(c)
									} else {
										if (!("body" in n && n.body)) throw new TypeError("Streaming requests unsupported");
										var u = n.body.getReader();
										a = u.cancel.bind(u), i = u.read.bind(u)
									}
									var l = "",
										h = !0,
										p = null,
										f = null;
									return i().then((function r(s) {
										if (!s.done) {
											var a = "Buffer" === (N = s.value).constructor.name ? N.toString() : Tt.decode(N),
												c = a.indexOf(o);
											for (c > -1 ? c += l.length : c = l.indexOf(o), l += a; c > -1;) {
												var u = l.slice(0, c),
													d = l.slice(c + o.length);
												if (h) h = !1;
												else {
													var E = u.indexOf("\r\n\r\n") + 4,
														m = u.slice(0, E),
														v = u.slice(E, u.lastIndexOf("\r\n")),
														y = void 0;
													if (bt.test(m)) try {
														y = JSON.parse(v), p = f = f ? Et(f, y, n) : dt(t, y, n)
													} catch (N) {}
													if ("--" === d.slice(0, 2) || y && !y.hasNext) {
														if (!f) return e(dt(t, {}, n));
														break
													}
												}
												c = (l = d).indexOf(o)
											}
										}
										var N;
										if (p && (e(p), p = null), !s.done && (!f || f.hasNext)) return i().then(r)
									})).finally(a)
								}(s, e, u)
						})).then(a).catch((function(t) {
							if ("AbortError" !== t.name) {
								var n = function(e, t, n) {
									return {
										operation: e,
										data: void 0,
										error: new nt({
											networkError: t,
											response: n
										}),
										extensions: void 0
									}
								}(e, h ? new Error(u.statusText) : t, u);
								s(n), a()
							}
						})),
						function() {
							l = !0, c && c.abort()
						}
				}))
			}

			function It(e) {
				return Object.keys(function e(t, n) {
					if (Array.isArray(t))
						for (var r = 0; r < t.length; r++) e(t[r], n);
					else if ("object" == typeof t && null !== t)
						for (var i in t) "__typename" === i && "string" == typeof t[i] ? n[t[i]] = 0 : e(t[i], n);
					return n
				}(e, {}))
			}
			var xt = function(e) {
					if (e.selectionSet && !e.selectionSet.selections.some((function(e) {
							return e.kind === k.FIELD && "__typename" === e.name.value && !e.alias
						}))) return ft({}, e, {
						selectionSet: ft({}, e.selectionSet, {
							selections: e.selectionSet.selections.concat([{
								kind: k.FIELD,
								name: {
									kind: k.NAME,
									value: "__typename"
								}
							}])
						})
					})
				},
				At = new Map;

			function kt(e) {
				return e && "object" == typeof e ? Object.keys(e).reduce((function(t, n) {
					var r = e[n];
					return "__typename" === n ? Object.defineProperty(t, "__typename", {
						enumerable: !1,
						value: r
					}) : Array.isArray(r) ? t[n] = r.map(kt) : t[n] = r && "object" == typeof r && "__typename" in r ? kt(r) : r, t
				}), Array.isArray(e) ? [] : {}) : e
			}

			function Dt(e) {
				return e.toPromise = function() {
					return t = Ze(1)(Ke((function(e) {
						return !e.stale && !e.hasNext
					}))(e)), new Promise((function(e) {
						Ve(1)(t)((function(t) {
							"number" != typeof t && (t.tag ? e(t[0]) : t[0](0))
						}))
					}));
					var t
				}, e
			}

			function St(e, t, n) {
				return n || (n = t.context), {
					key: t.key,
					query: t.query,
					variables: t.variables,
					kind: e,
					context: n
				}
			}

			function Rt(e, t) {
				return St(e.kind, e, ft({}, e.context, {
					meta: ft({}, e.context.meta, t)
				}))
			}

			function wt() {}

			function Ct(e) {
				var t = e.kind;
				return "mutation" !== t && "query" !== t
			}

			function Lt(e, t) {
				return e.reexecuteOperation(St(t.kind, t, ft({}, t.context, {
					requestPolicy: "network-only"
				})))
			}

			function Ft(e) {
				var t = e.forward;
				e.dispatchDebug;
				var n = new Set;

				function r(e) {
					var t = e.key,
						r = e.kind;
					if ("teardown" === r) return n.delete(t), !0;
					if ("query" !== r && "subscription" !== r) return !0;
					var i = n.has(t);
					return n.add(t), !i
				}

				function i(e) {
					e.hasNext || n.delete(e.operation.key)
				}
				return function(e) {
					var n = Ke(r)(e);
					return Me(i)(t(n))
				}
			}

			function Pt(e) {
				var t = e.forward;
				return e.dispatchDebug,
					function(e) {
						var n = We(e);
						return Qe([je((function(e) {
							var t = e.key,
								r = Ke((function(e) {
									return "teardown" === e.kind && e.key === t
								}))(n),
								i = vt(e),
								o = yt(e, i),
								s = Nt(e, i);
							return Me((function(e) {
								e.data || e.error
							}))(et(r)(Ot(e, o, s)))
						}))(Ke((function(e) {
							return "query" === e.kind || "mutation" === e.kind
						}))(n)), t(Ke((function(e) {
							return "query" !== e.kind && "mutation" !== e.kind
						}))(n))])
					}
			}

			function jt(e) {
				return e.dispatchDebug,
					function(e) {
						return Ke((function() {
							return !1
						}))(Me((function(e) {
							e.kind
						}))(e))
					}
			}
			jt({
				dispatchDebug: wt
			});
			var Ut = [Ft, function(e) {
					var t = e.forward,
						n = e.client;
					e.dispatchDebug;
					var r = new Map,
						i = Object.create(null);

					function o(e) {
						var t = St(e.kind, e);
						return t.query = function(e) {
							var t = lt(e),
								n = At.get(t.__key);
							return n || (n = R(t, {
								Field: xt,
								InlineFragment: xt
							}), Object.defineProperty(n, "__key", {
								value: t.__key,
								enumerable: !1
							}), At.set(t.__key, n)), n
						}(e.query), t
					}

					function s(e) {
						var t = e.context.requestPolicy;
						return "query" === e.kind && "network-only" !== t && ("cache-only" === t || r.has(e.key))
					}
					return function(e) {
						var a = We(e),
							c = $e((function(e) {
								var t = r.get(e.key),
									i = ft({}, t, {
										operation: Rt(e, {
											cacheOutcome: t ? "hit" : "miss"
										})
									});
								return "cache-and-network" === e.context.requestPolicy && (i.stale = !0, Lt(n, e)), i
							}))(Ke((function(e) {
								return !Ct(e) && s(e)
							}))(a)),
							u = Me((function(e) {
								var t = e.operation;
								if (t) {
									var o = It(e.data).concat(t.context.additionalTypenames || []);
									if ("mutation" === e.operation.kind) {
										for (var s = new Set, a = 0; a < o.length; a++) {
											var c = o[a],
												u = i[c] || (i[c] = new Set);
											u.forEach((function(e) {
												s.add(e)
											})), u.clear()
										}
										s.forEach((function(e) {
											r.has(e) && (t = r.get(e).operation, r.delete(e), Lt(n, t))
										}))
									} else if ("query" === t.kind && e.data) {
										r.set(t.key, e);
										for (var l = 0; l < o.length; l++) {
											var h = o[l];
											(i[h] || (i[h] = new Set)).add(t.key)
										}
									}
								}
							}))(t(Ke((function(e) {
								return "query" !== e.kind || "cache-only" !== e.context.requestPolicy
							}))($e((function(e) {
								return Rt(e, {
									cacheOutcome: "miss"
								})
							}))(Qe([$e(o)(Ke((function(e) {
								return !Ct(e) && !s(e)
							}))(a)), Ke((function(e) {
								return Ct(e)
							}))(a)])))));
						return Qe([c, u])
					}
				}, Pt],
				Mt = function e(t) {
					var n = new Map,
						r = new Map,
						i = [],
						o = function() {
							let e = [],
								t = !1;
							return {
								source: function(t) {
									function n(e) {
										return e !== t
									}
									e = e.concat(t), t(Re(0, [function(t) {
										t && (e = e.filter(n))
									}]))
								},
								next: function(n) {
									t || e.forEach((function(e) {
										e(Re(1, [n]))
									}))
								},
								complete: function() {
									t || (t = !0, e.forEach(Fe))
								}
							}
						}(),
						s = o.source,
						a = o.next,
						c = !1;

					function u(e) {
						for (c = !0, e && a(e); e = i.shift();) a(e);
						c = !1
					}

					function l(e) {
						var t = Ke((function(t) {
							return t.operation.kind === e.kind && t.operation.key === e.key
						}))(f);
						return h.maskTypename && (t = $e((function(e) {
							return ft({}, e, {
								data: kt(e.data)
							})
						}))(t)), "mutation" === e.kind ? Ze(1)(ze((function() {
							return u(e)
						}))(t)) : We(Xe((function() {
							n.delete(e.key), r.delete(e.key);
							for (var t = i.length - 1; t >= 0; t--) i[t].key === e.key && i.splice(t, 1);
							u(St("teardown", e, e.context))
						}))(Me((function(t) {
							n.set(e.key, t)
						}))(function(e) {
							return function(t) {
								return function(n) {
									function r(e) {
										a && ("number" == typeof e ? (a = !1, u ? n(e) : o || (o = !0, i(0))) : e.tag ? (n(e), c ? c = !1 : s(0)) : (s = e = e[0], c = !1, e(0)))
									}
									let i = we,
										o = !1,
										s = we,
										a = !1,
										c = !1,
										u = !1;
									t((function(t) {
										"number" == typeof t ? u || (u = !0, a || n(0)) : t.tag ? u || (a && (s(1), s = we), o ? o = !1 : (o = !0, i(0)), t = e(t[0]), a = !0, t(r)) : i = t[0]
									})), n(Re(0, [function(e) {
										if (e) {
											if (u || (u = !0, i(1)), a) return a = !1, s(1)
										} else u || o || (o = !0, i(0)), a && !c && (c = !0, s(0))
									}]))
								}
							}
						}((function(t) {
							return "query" !== e.kind || t.stale ? Ye(t) : Qe([Ye(t), $e((function() {
								return ft({}, t, {
									stale: !0
								})
							}))(Ze(1)(Ke((function(t) {
								return "query" === t.kind && t.key === e.key && "cache-only" !== t.context.requestPolicy
							}))(s)))])
						}))(et(Ke((function(t) {
							return "teardown" === t.kind && t.key === e.key
						}))(s))(t)))))
					}
					var h = ft(this instanceof e ? this : Object.create(e.prototype), {
							url: t.url,
							fetchOptions: t.fetchOptions,
							fetch: t.fetch,
							suspense: !!t.suspense,
							requestPolicy: t.requestPolicy || "cache-first",
							preferGetMethod: !!t.preferGetMethod,
							maskTypename: !!t.maskTypename,
							operations$: s,
							reexecuteOperation: function(e) {
								("mutation" === e.kind || r.has(e.key)) && (i.push(e), c || Promise.resolve().then(u))
							},
							createOperationContext: function(e) {
								return e || (e = {}), ft({}, {
									url: h.url,
									fetchOptions: h.fetchOptions,
									fetch: h.fetch,
									preferGetMethod: h.preferGetMethod
								}, e, {
									suspense: e.suspense || !1 !== e.suspense && h.suspense,
									requestPolicy: e.requestPolicy || h.requestPolicy
								})
							},
							createRequestOperation: function(e, t, n) {
								return function(e) {
									for (var t = 0, n = e.definitions.length; t < n; t++) {
										var r = e.definitions[t];
										if (r.kind === k.OPERATION_DEFINITION) return r.operation
									}
								}(t.query), St(e, t, h.createOperationContext(n))
							},
							executeRequestOperation: function(e) {
								return "mutation" === e.kind ? l(e) : Je((function(t) {
									var i = r.get(e.key);
									i || r.set(e.key, i = l(e));
									var o = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
									return Ge(t.next)(Xe(t.complete)(ze((function() {
										var r = n.get(e.key);
										if ("subscription" === e.kind) return u(e);
										o && u(e), null != r && r === n.get(e.key) ? t.next(o ? ft({}, r, {
											stale: !0
										}) : r) : o || u(e)
									}))(i))).unsubscribe
								}))
							},
							executeQuery: function(e, t) {
								var n = h.createRequestOperation("query", e, t);
								return h.executeRequestOperation(n)
							},
							executeSubscription: function(e, t) {
								var n = h.createRequestOperation("subscription", e, t);
								return h.executeRequestOperation(n)
							},
							executeMutation: function(e, t) {
								var n = h.createRequestOperation("mutation", e, t);
								return h.executeRequestOperation(n)
							},
							query: function(e, t, n) {
								return n && "boolean" == typeof n.suspense || (n = ft({}, n, {
									suspense: !1
								})), Dt(h.executeQuery(ht(e, t), n))
							},
							readQuery: function(e, t, n) {
								var r = null;
								return Ge((function(e) {
									r = e
								}))(h.query(e, t, n)).unsubscribe(), r
							},
							subscription: function(e, t, n) {
								return h.executeSubscription(ht(e, t), n)
							},
							mutation: function(e, t, n) {
								return Dt(h.executeMutation(ht(e, t), n))
							}
						}),
						p = wt,
						f = We(function(e) {
							return function(t) {
								var n = t.client;
								return t.dispatchDebug, e.reduceRight((function(e, t) {
									return t({
										client: n,
										forward: e,
										dispatchDebug: function(e) {}
									})
								}), t.forward)
							}
						}(void 0 !== t.exchanges ? t.exchanges : Ut)({
							client: h,
							dispatchDebug: p,
							forward: jt({
								dispatchDebug: p
							})
						})(s));
					return function(e) {
						Ge(qe)(e)
					}(f), h
				},
				Bt = Mt({
					url: "/graphql"
				}),
				Vt = Object(r.createContext)(Bt),
				Gt = Vt.Provider;

			function qt() {
				return (qt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			Vt.Consumer, Vt.displayName = "UrqlContext";
			var Kt = {
				fetching: !1,
				stale: !1,
				error: void 0,
				data: void 0,
				extensions: void 0,
				operation: void 0
			};

			function Yt(e, t) {
				var n = qt({}, e, t, {
					fetching: !!t.fetching,
					stale: !!t.stale
				});
				return function(e, t) {
					if ("object" != typeof e || "object" != typeof t) return e !== t;
					for (var n in e)
						if (!(n in t)) return !0;
					for (var r in t)
						if (e[r] !== t[r]) return !0;
					return !1
				}(e, n) ? n : e
			}
			var Jt = !1;

			function $t(e) {
				var t, n, i = Object(r.useContext)(Vt),
					o = function(e) {
						if (!e._react) {
							var t = new Set,
								n = new Map;
							e.operations$ && Ge((function(e) {
								"teardown" === e.kind && t.has(e.key) && (t.delete(e.key), n.delete(e.key))
							}))(e.operations$), e._react = {
								get: function(e) {
									return n.get(e)
								},
								set: function(e, r) {
									t.delete(e), n.set(e, r)
								},
								dispose: function(e) {
									t.add(e)
								}
							}
						}
						return e._react
					}(i),
					s = (t = i, n = e.context, t.suspense && (!n || !1 !== n.suspense)),
					a = function(e, t) {
						var n = Object(r.useRef)(void 0);
						return Object(r.useMemo)((function() {
							var r = ht(e, t);
							return void 0 !== n.current && n.current.key === r.key ? n.current : (n.current = r, r)
						}), [e, t])
					}(e.query, e.variables),
					c = Object(r.useMemo)((function() {
						if (e.pause) return null;
						var t = i.executeQuery(a, qt({}, {
							requestPolicy: e.requestPolicy
						}, e.context));
						return s ? Me((function(e) {
							o.set(a.key, e)
						}))(t) : t
					}), [o, i, a, s, e.pause, e.requestPolicy, e.context]),
					u = Object(r.useCallback)((function(e, t) {
						if (!e) return {
							fetching: !1
						};
						var n = o.get(a.key);
						if (n) {
							if (t && null != n && "then" in n) throw n
						} else {
							var r, i = Ge((function(e) {
								n = e, r && r(n)
							}))(function(e) {
								return function(t) {
									return function(n) {
										let r = we,
											i = !1;
										return t((function(t) {
											"number" == typeof t ? i || (i = !0, n(0)) : t.tag ? i || (e(t[0]) ? n(t) : (i = !0, n(0), r(1))) : (r = t[0], n(t))
										}))
									}
								}
							}((function() {
								return t && !r || !n
							}))(e));
							if (null == n && t) {
								var s = new Promise((function(e) {
									r = e
								}));
								throw o.set(a.key, s), s
							}
							i.unsubscribe()
						}
						return n || {
							fetching: !0
						}
					}), [o, a]),
					l = [i, a, e.requestPolicy, e.context, e.pause],
					h = Object(r.useState)((function() {
						Jt = !0;
						try {
							return [c, Yt(Kt, u(c, s)), l]
						} finally {
							Jt = !1
						}
					})),
					p = h[0],
					f = h[1],
					d = p[1];
				return c !== p[0] && function(e, t) {
					for (var n = 0, r = t.length; n < r; n++)
						if (e[n] !== t[n]) return !0;
					return !1
				}(p[2], l) && f([c, d = Yt(p[1], u(c, s)), l]), Object(r.useEffect)((function() {
					var e = p[0],
						t = p[2][1],
						n = !1;

					function r(e) {
						n = !0, Jt || f((function(t) {
							var n = Yt(t[1], e);
							return t[1] !== n ? [t[0], n, t[2]] : t
						}))
					}
					if (e) {
						var i = Ge(r)(Xe((function() {
							r({
								fetching: !1
							})
						}))(e));
						return n || r({
								fetching: !0
							}),
							function() {
								o.dispose(t.key), i.unsubscribe()
							}
					}
					r({
						fetching: !1
					})
				}), [o, p[0], p[2][1]]), [d, Object(r.useCallback)((function(t) {
					var n = qt({}, {
						requestPolicy: e.requestPolicy
					}, e.context, t);
					f((function(e) {
						return [s ? Me((function(e) {
							o.set(a.key, e)
						}))(i.executeQuery(a, n)) : i.executeQuery(a, n), e[1], l]
					}))
				}), [i, o, a, s, u, e.requestPolicy, e.context])]
			}
			var Qt = {
				claimfreenft: "132b72abd4d5",
				getclaimednftdetails: "549dc0fe0c26",
				generatewalletverificationmessage: "cd3aac87446c",
				getnftdetails: "2e1c9830ba4c",
				getnftsbywalletaddress: "7e0bba436a39",
				subredditcategoriesquery: "3f71115a1d95",
				updateprofileimagefromnft: "97097eb25784"
			};
			const Xt = ({
				forward: e,
				dispatchDebug: t
			}) => t => {
				const n = We(t);
				return Qe([He(n, Ke(e => "query" === e.kind || "mutation" === e.kind), je(e => (function(e, t, n) {
					const r = He(n, Ke(e => "teardown" === e.kind && e.key === t.key)),
						i = vt(t),
						o = i.operationName ? i.operationName.toLowerCase() : "",
						s = function(e, t, n) {
							const r = e[t];
							if (r) {
								return n ? {
									id: r,
									variables: n
								} : {
									id: r
								}
							}
							return null
						}(e, o, i.variables);
					if (!s) throw new Error(`Error: Query ${i} does not exist in the defined query options`);
					const a = yt(t),
						c = E(d({}, Nt(t)), {
							method: "POST",
							body: JSON.stringify(s)
						});
					return He(Ot(t, a, c), je(Ye), et(r))
				})(Qt, e, n))), He(n, Ke(e => "query" !== e.kind && "mutation" !== e.kind), e)])
			};
			const zt = "urqlClient";

			function Ht() {
				return function(e) {
					e._instances = e._instances || {};
					let t = e._instances[zt];
					if (!t) {
						const n = [Ft];
						n.push(Xt), n.push(Pt), t = new Mt({
							url: e.gql.host,
							fetchOptions: e.gql.fetchOptions,
							exchanges: n
						}), e._instances[zt] = t
					}
					return t
				}(Object(o.b)())
			}
			const Wt = ({
				children: e
			}) => {
				const t = Ht();
				return i.a.createElement(Gt, {
					value: t
				}, e)
			};
			var Zt = function() {
					return (Zt = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				en = new Map,
				tn = new Map,
				nn = !0,
				rn = !1;

			function on(e) {
				return e.replace(/[\s,]+/g, " ").trim()
			}

			function sn(e) {
				var t = new Set,
					n = [];
				return e.definitions.forEach((function(e) {
					if ("FragmentDefinition" === e.kind) {
						var r = e.name.value,
							i = on((s = e.loc).source.body.substring(s.start, s.end)),
							o = tn.get(r);
						o && !o.has(i) ? nn && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || tn.set(r, o = new Set), o.add(i), t.has(i) || (t.add(i), n.push(e))
					} else n.push(e);
					var s
				})), Zt(Zt({}, e), {
					definitions: n
				})
			}

			function an(e) {
				var t = on(e);
				if (!en.has(t)) {
					var n = Object(s.a)(e, {
						experimentalFragmentVariables: rn,
						allowLegacyFragmentVariables: rn
					});
					if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
					en.set(t, function(e) {
						var t = new Set(e.definitions);
						t.forEach((function(e) {
							e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
								var r = e[n];
								r && "object" == typeof r && t.add(r)
							}))
						}));
						var n = e.loc;
						return n && (delete n.startToken, delete n.endToken), e
					}(sn(n)))
				}
				return en.get(t)
			}

			function cn(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				"string" == typeof e && (e = [e]);
				var r = e[0];
				return t.forEach((function(t, n) {
					t && "Document" === t.kind ? r += t.loc.source.body : r += t, r += e[n + 1]
				})), an(r)
			}
			var un, ln = {
				gql: cn,
				resetCaches: function() {
					en.clear(), tn.clear()
				},
				disableFragmentWarnings: function() {
					nn = !1
				},
				enableExperimentalFragmentVariables: function() {
					rn = !0
				},
				disableExperimentalFragmentVariables: function() {
					rn = !1
				}
			};
			(un = cn || (cn = {})).gql = ln.gql, un.resetCaches = ln.resetCaches, un.disableFragmentWarnings = ln.disableFragmentWarnings, un.enableExperimentalFragmentVariables = ln.enableExperimentalFragmentVariables, un.disableExperimentalFragmentVariables = ln.disableExperimentalFragmentVariables, cn.default = cn
		},
		"./node_modules/graphql/jsutils/inspect.mjs": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

			function i(e) {
				return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var o = 10,
				s = 2;

			function a(e) {
				return c(e, [])
			}

			function c(e, t) {
				switch (i(e)) {
					case "string":
						return JSON.stringify(e);
					case "function":
						return e.name ? "[function ".concat(e.name, "]") : "[function]";
					case "object":
						return null === e ? "null" : function(e, t) {
							if (-1 !== t.indexOf(e)) return "[Circular]";
							var n = [].concat(t, [e]),
								i = function(e) {
									var t = e[String(r.a)];
									if ("function" == typeof t) return t;
									if ("function" == typeof e.inspect) return e.inspect
								}(e);
							if (void 0 !== i) {
								var a = i.call(e);
								if (a !== e) return "string" == typeof a ? a : c(a, n)
							} else if (Array.isArray(e)) return function(e, t) {
								if (0 === e.length) return "[]";
								if (t.length > s) return "[Array]";
								for (var n = Math.min(o, e.length), r = e.length - n, i = [], a = 0; a < n; ++a) i.push(c(e[a], t));
								1 === r ? i.push("... 1 more item") : r > 1 && i.push("... ".concat(r, " more items"));
								return "[" + i.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								var n = Object.keys(e);
								if (0 === n.length) return "{}";
								if (t.length > s) return "[" + function(e) {
									var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
									if ("Object" === t && "function" == typeof e.constructor) {
										var n = e.constructor.name;
										if ("string" == typeof n && "" !== n) return n
									}
									return t
								}(e) + "]";
								return "{ " + n.map((function(n) {
									return n + ": " + c(e[n], t)
								})).join(", ") + " }"
							}(e, n)
						}(e, t);
					default:
						return String(e)
				}
			}
		},
		"./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs": function(e, t, n) {
			"use strict";
			var r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
			t.a = r
		},
		"./node_modules/graphql/language/ast.mjs": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

			function i(e) {
				var t = e.prototype.toJSON;
				"function" == typeof t || function(e, t) {
					if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
				}(0), e.prototype.inspect = t, r.a && (e.prototype[r.a] = t)
			}
			var o = function() {
				function e(e, t, n) {
					this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
				}
				return e.prototype.toJSON = function() {
					return {
						start: this.start,
						end: this.end
					}
				}, e
			}();
			i(o);
			var s = function() {
				function e(e, t, n, r, i, o, s) {
					this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = s, this.prev = o, this.next = null
				}
				return e.prototype.toJSON = function() {
					return {
						kind: this.kind,
						value: this.value,
						line: this.line,
						column: this.column
					}
				}, e
			}();

			function a(e) {
				return null != e && "string" == typeof e.kind
			}
			i(s)
		},
		"./node_modules/graphql/language/blockString.mjs": function(e, t, n) {
			"use strict";

			function r(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = function(e) {
						for (var t, n = !0, r = !0, i = 0, o = null, s = 0; s < e.length; ++s) switch (e.charCodeAt(s)) {
							case 13:
								10 === e.charCodeAt(s + 1) && ++s;
							case 10:
								n = !1, r = !0, i = 0;
								break;
							case 9:
							case 32:
								++i;
								break;
							default:
								r && !n && (null === o || i < o) && (o = i), r = !1
						}
						return null !== (t = o) && void 0 !== t ? t : 0
					}(e);
				if (0 !== n)
					for (var r = 1; r < t.length; r++) t[r] = t[r].slice(n);
				for (var o = 0; o < t.length && i(t[o]);) ++o;
				for (var s = t.length; s > o && i(t[s - 1]);) --s;
				return t.slice(o, s).join("\n")
			}

			function i(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function o(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = -1 === e.indexOf("\n"),
					i = " " === e[0] || "\t" === e[0],
					o = '"' === e[e.length - 1],
					s = "\\" === e[e.length - 1],
					a = !r || o || s || n,
					c = "";
				return !a || r && i || (c += "\n" + t), c += t ? e.replace(/\n/g, "\n" + t) : e, a && (c += "\n"), '"""' + c.replace(/"""/g, '\\"""') + '"""'
			}
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}))
		},
		"./node_modules/graphql/language/parser.mjs": function(e, t, n) {
			"use strict";

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			n.d(t, "a", (function() {
				return G
			}));
			"function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator, "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
			var i = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag";

			function o(e, t) {
				for (var n, r = /\r\n|[\n\r]/g, i = 1, o = t + 1;
					(n = r.exec(e.body)) && n.index < t;) i += 1, o = t + 1 - (n.index + n[0].length);
				return {
					line: i,
					column: o
				}
			}

			function s(e) {
				return a(e.source, o(e.source, e.start))
			}

			function a(e, t) {
				var n = e.locationOffset.column - 1,
					r = u(n) + e.body,
					i = t.line - 1,
					o = e.locationOffset.line - 1,
					s = t.line + o,
					a = 1 === t.line ? n : 0,
					l = t.column + a,
					h = "".concat(e.name, ":").concat(s, ":").concat(l, "\n"),
					p = r.split(/\r\n|[\n\r]/g),
					f = p[i];
				if (f.length > 120) {
					for (var d = Math.floor(l / 80), E = l % 80, m = [], v = 0; v < f.length; v += 80) m.push(f.slice(v, v + 80));
					return h + c([
						["".concat(s), m[0]]
					].concat(m.slice(1, d + 1).map((function(e) {
						return ["", e]
					})), [
						[" ", u(E - 1) + "^"],
						["", m[d + 1]]
					]))
				}
				return h + c([
					["".concat(s - 1), p[i - 1]],
					["".concat(s), f],
					["", u(l - 1) + "^"],
					["".concat(s + 1), p[i + 1]]
				])
			}

			function c(e) {
				var t = e.filter((function(e) {
						e[0];
						return void 0 !== e[1]
					})),
					n = Math.max.apply(Math, t.map((function(e) {
						return e[0].length
					})));
				return t.map((function(e) {
					var t, r = e[0],
						i = e[1];
					return u(n - (t = r).length) + t + (i ? " | " + i : " |")
				})).join("\n")
			}

			function u(e) {
				return Array(e + 1).join(" ")
			}

			function l(e) {
				return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function h(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}

			function p(e, t) {
				return !t || "object" !== l(t) && "function" != typeof t ? f(e) : t
			}

			function f(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function d(e) {
				var t = "function" == typeof Map ? new Map : void 0;
				return (d = function(e) {
					if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
					var n;
					if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e);
						t.set(e, r)
					}

					function r() {
						return E(e, arguments, y(this).constructor)
					}
					return r.prototype = Object.create(e.prototype, {
						constructor: {
							value: r,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), v(r, e)
				})(e)
			}

			function E(e, t, n) {
				return (E = m() ? Reflect.construct : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var i = new(Function.bind.apply(e, r));
					return n && v(i, n.prototype), i
				}).apply(null, arguments)
			}

			function m() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function v(e, t) {
				return (v = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function y(e) {
				return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var N = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && v(e, t)
				}(E, e);
				var t, n, c, u, l, d = (t = E, n = m(), function() {
					var e, r = y(t);
					if (n) {
						var i = y(this).constructor;
						e = Reflect.construct(r, arguments, i)
					} else e = r.apply(this, arguments);
					return p(this, e)
				});

				function E(e, t, n, i, s, a, c) {
					var u, l, h, m, v;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, E), v = d.call(this, e);
					var y, N = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
						g = n;
					!g && N && (g = null === (y = N[0].loc) || void 0 === y ? void 0 : y.source);
					var T, b = i;
					!b && N && (b = N.reduce((function(e, t) {
						return t.loc && e.push(t.loc.start), e
					}), [])), b && 0 === b.length && (b = void 0), i && n ? T = i.map((function(e) {
						return o(n, e)
					})) : N && (T = N.reduce((function(e, t) {
						return t.loc && e.push(o(t.loc.source, t.loc.start)), e
					}), []));
					var _, O = c;
					if (null == O && null != a) {
						var I = a.extensions;
						"object" == r(_ = I) && null !== _ && (O = I)
					}
					return Object.defineProperties(f(v), {
						name: {
							value: "GraphQLError"
						},
						message: {
							value: e,
							enumerable: !0,
							writable: !0
						},
						locations: {
							value: null !== (u = T) && void 0 !== u ? u : void 0,
							enumerable: null != T
						},
						path: {
							value: null != s ? s : void 0,
							enumerable: null != s
						},
						nodes: {
							value: null != N ? N : void 0
						},
						source: {
							value: null !== (l = g) && void 0 !== l ? l : void 0
						},
						positions: {
							value: null !== (h = b) && void 0 !== h ? h : void 0
						},
						originalError: {
							value: a
						},
						extensions: {
							value: null !== (m = O) && void 0 !== m ? m : void 0,
							enumerable: null != O
						}
					}), null != a && a.stack ? (Object.defineProperty(f(v), "stack", {
						value: a.stack,
						writable: !0,
						configurable: !0
					}), p(v)) : (Error.captureStackTrace ? Error.captureStackTrace(f(v), E) : Object.defineProperty(f(v), "stack", {
						value: Error().stack,
						writable: !0,
						configurable: !0
					}), v)
				}
				return c = E, (u = [{
					key: "toString",
					value: function() {
						return function(e) {
							var t = e.message;
							if (e.nodes)
								for (var n = 0, r = e.nodes; n < r.length; n++) {
									var i = r[n];
									i.loc && (t += "\n\n" + s(i.loc))
								} else if (e.source && e.locations)
									for (var o = 0, c = e.locations; o < c.length; o++) {
										var u = c[o];
										t += "\n\n" + a(e.source, u)
									}
							return t
						}(this)
					}
				}, {
					key: i,
					get: function() {
						return "Object"
					}
				}]) && h(c.prototype, u), l && h(c, l), E
			}(d(Error));

			function g(e, t, n) {
				return new N("Syntax Error: ".concat(n), void 0, e, [t])
			}
			var T = Object.freeze({
					NAME: "Name",
					DOCUMENT: "Document",
					OPERATION_DEFINITION: "OperationDefinition",
					VARIABLE_DEFINITION: "VariableDefinition",
					SELECTION_SET: "SelectionSet",
					FIELD: "Field",
					ARGUMENT: "Argument",
					FRAGMENT_SPREAD: "FragmentSpread",
					INLINE_FRAGMENT: "InlineFragment",
					FRAGMENT_DEFINITION: "FragmentDefinition",
					VARIABLE: "Variable",
					INT: "IntValue",
					FLOAT: "FloatValue",
					STRING: "StringValue",
					BOOLEAN: "BooleanValue",
					NULL: "NullValue",
					ENUM: "EnumValue",
					LIST: "ListValue",
					OBJECT: "ObjectValue",
					OBJECT_FIELD: "ObjectField",
					DIRECTIVE: "Directive",
					NAMED_TYPE: "NamedType",
					LIST_TYPE: "ListType",
					NON_NULL_TYPE: "NonNullType",
					SCHEMA_DEFINITION: "SchemaDefinition",
					OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
					SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
					OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
					FIELD_DEFINITION: "FieldDefinition",
					INPUT_VALUE_DEFINITION: "InputValueDefinition",
					INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
					UNION_TYPE_DEFINITION: "UnionTypeDefinition",
					ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
					ENUM_VALUE_DEFINITION: "EnumValueDefinition",
					INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
					DIRECTIVE_DEFINITION: "DirectiveDefinition",
					SCHEMA_EXTENSION: "SchemaExtension",
					SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
					OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
					INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
					UNION_TYPE_EXTENSION: "UnionTypeExtension",
					ENUM_TYPE_EXTENSION: "EnumTypeExtension",
					INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
				}),
				b = n("./node_modules/graphql/language/ast.mjs"),
				_ = Object.freeze({
					SOF: "<SOF>",
					EOF: "<EOF>",
					BANG: "!",
					DOLLAR: "$",
					AMP: "&",
					PAREN_L: "(",
					PAREN_R: ")",
					SPREAD: "...",
					COLON: ":",
					EQUALS: "=",
					AT: "@",
					BRACKET_L: "[",
					BRACKET_R: "]",
					BRACE_L: "{",
					PIPE: "|",
					BRACE_R: "}",
					NAME: "Name",
					INT: "Int",
					FLOAT: "Float",
					STRING: "String",
					BLOCK_STRING: "BlockString",
					COMMENT: "Comment"
				}),
				O = n("./node_modules/graphql/jsutils/inspect.mjs");

			function I(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			var x = function(e, t) {
				return e instanceof t
			};

			function A(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			var k = function() {
				function e(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
							line: 1,
							column: 1
						};
					"string" == typeof e || I(0, "Body must be a string. Received: ".concat(Object(O.a)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || I(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || I(0, "column in locationOffset is 1-indexed and must be positive.")
				}
				var t, n, r;
				return t = e, (n = [{
					key: i,
					get: function() {
						return "Source"
					}
				}]) && A(t.prototype, n), r && A(t, r), e
			}();
			var D = Object.freeze({
					QUERY: "QUERY",
					MUTATION: "MUTATION",
					SUBSCRIPTION: "SUBSCRIPTION",
					FIELD: "FIELD",
					FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
					FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
					INLINE_FRAGMENT: "INLINE_FRAGMENT",
					VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
					SCHEMA: "SCHEMA",
					SCALAR: "SCALAR",
					OBJECT: "OBJECT",
					FIELD_DEFINITION: "FIELD_DEFINITION",
					ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
					INTERFACE: "INTERFACE",
					UNION: "UNION",
					ENUM: "ENUM",
					ENUM_VALUE: "ENUM_VALUE",
					INPUT_OBJECT: "INPUT_OBJECT",
					INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
				}),
				S = n("./node_modules/graphql/language/blockString.mjs"),
				R = function() {
					function e(e) {
						var t = new b.b(_.SOF, 0, 0, 0, 0, null);
						this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
					}
					var t = e.prototype;
					return t.advance = function() {
						return this.lastToken = this.token, this.token = this.lookahead()
					}, t.lookahead = function() {
						var e = this.token;
						if (e.kind !== _.EOF)
							do {
								var t;
								e = null !== (t = e.next) && void 0 !== t ? t : e.next = C(this, e)
							} while (e.kind === _.COMMENT);
						return e
					}, e
				}();

			function w(e) {
				return isNaN(e) ? _.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
			}

			function C(e, t) {
				for (var n = e.source, r = n.body, i = r.length, o = t.end; o < i;) {
					var s = r.charCodeAt(o),
						a = e.line,
						c = 1 + o - e.lineStart;
					switch (s) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++o;
							continue;
						case 10:
							++o, ++e.line, e.lineStart = o;
							continue;
						case 13:
							10 === r.charCodeAt(o + 1) ? o += 2 : ++o, ++e.line, e.lineStart = o;
							continue;
						case 33:
							return new b.b(_.BANG, o, o + 1, a, c, t);
						case 35:
							return F(n, o, a, c, t);
						case 36:
							return new b.b(_.DOLLAR, o, o + 1, a, c, t);
						case 38:
							return new b.b(_.AMP, o, o + 1, a, c, t);
						case 40:
							return new b.b(_.PAREN_L, o, o + 1, a, c, t);
						case 41:
							return new b.b(_.PAREN_R, o, o + 1, a, c, t);
						case 46:
							if (46 === r.charCodeAt(o + 1) && 46 === r.charCodeAt(o + 2)) return new b.b(_.SPREAD, o, o + 3, a, c, t);
							break;
						case 58:
							return new b.b(_.COLON, o, o + 1, a, c, t);
						case 61:
							return new b.b(_.EQUALS, o, o + 1, a, c, t);
						case 64:
							return new b.b(_.AT, o, o + 1, a, c, t);
						case 91:
							return new b.b(_.BRACKET_L, o, o + 1, a, c, t);
						case 93:
							return new b.b(_.BRACKET_R, o, o + 1, a, c, t);
						case 123:
							return new b.b(_.BRACE_L, o, o + 1, a, c, t);
						case 124:
							return new b.b(_.PIPE, o, o + 1, a, c, t);
						case 125:
							return new b.b(_.BRACE_R, o, o + 1, a, c, t);
						case 34:
							return 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2) ? M(n, o, a, c, t, e) : U(n, o, a, c, t);
						case 45:
						case 48:
						case 49:
						case 50:
						case 51:
						case 52:
						case 53:
						case 54:
						case 55:
						case 56:
						case 57:
							return P(n, o, s, a, c, t);
						case 65:
						case 66:
						case 67:
						case 68:
						case 69:
						case 70:
						case 71:
						case 72:
						case 73:
						case 74:
						case 75:
						case 76:
						case 77:
						case 78:
						case 79:
						case 80:
						case 81:
						case 82:
						case 83:
						case 84:
						case 85:
						case 86:
						case 87:
						case 88:
						case 89:
						case 90:
						case 95:
						case 97:
						case 98:
						case 99:
						case 100:
						case 101:
						case 102:
						case 103:
						case 104:
						case 105:
						case 106:
						case 107:
						case 108:
						case 109:
						case 110:
						case 111:
						case 112:
						case 113:
						case 114:
						case 115:
						case 116:
						case 117:
						case 118:
						case 119:
						case 120:
						case 121:
						case 122:
							return V(n, o, a, c, t)
					}
					throw g(n, o, L(s))
				}
				var u = e.line,
					l = 1 + o - e.lineStart;
				return new b.b(_.EOF, i, i, u, l, t)
			}

			function L(e) {
				return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(w(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(w(e), ".")
			}

			function F(e, t, n, r, i) {
				var o, s = e.body,
					a = t;
				do {
					o = s.charCodeAt(++a)
				} while (!isNaN(o) && (o > 31 || 9 === o));
				return new b.b(_.COMMENT, t, a, n, r, i, s.slice(t + 1, a))
			}

			function P(e, t, n, r, i, o) {
				var s = e.body,
					a = n,
					c = t,
					u = !1;
				if (45 === a && (a = s.charCodeAt(++c)), 48 === a) {
					if ((a = s.charCodeAt(++c)) >= 48 && a <= 57) throw g(e, c, "Invalid number, unexpected digit after 0: ".concat(w(a), "."))
				} else c = j(e, c, a), a = s.charCodeAt(c);
				if (46 === a && (u = !0, a = s.charCodeAt(++c), c = j(e, c, a), a = s.charCodeAt(c)), 69 !== a && 101 !== a || (u = !0, 43 !== (a = s.charCodeAt(++c)) && 45 !== a || (a = s.charCodeAt(++c)), c = j(e, c, a), a = s.charCodeAt(c)), 46 === a || function(e) {
						return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
					}(a)) throw g(e, c, "Invalid number, expected digit but got: ".concat(w(a), "."));
				return new b.b(u ? _.FLOAT : _.INT, t, c, r, i, o, s.slice(t, c))
			}

			function j(e, t, n) {
				var r = e.body,
					i = t,
					o = n;
				if (o >= 48 && o <= 57) {
					do {
						o = r.charCodeAt(++i)
					} while (o >= 48 && o <= 57);
					return i
				}
				throw g(e, i, "Invalid number, expected digit but got: ".concat(w(o), "."))
			}

			function U(e, t, n, r, i) {
				for (var o, s, a, c, u = e.body, l = t + 1, h = l, p = 0, f = ""; l < u.length && !isNaN(p = u.charCodeAt(l)) && 10 !== p && 13 !== p;) {
					if (34 === p) return f += u.slice(h, l), new b.b(_.STRING, t, l + 1, n, r, i, f);
					if (p < 32 && 9 !== p) throw g(e, l, "Invalid character within String: ".concat(w(p), "."));
					if (++l, 92 === p) {
						switch (f += u.slice(h, l - 1), p = u.charCodeAt(l)) {
							case 34:
								f += '"';
								break;
							case 47:
								f += "/";
								break;
							case 92:
								f += "\\";
								break;
							case 98:
								f += "\b";
								break;
							case 102:
								f += "\f";
								break;
							case 110:
								f += "\n";
								break;
							case 114:
								f += "\r";
								break;
							case 116:
								f += "\t";
								break;
							case 117:
								var d = (o = u.charCodeAt(l + 1), s = u.charCodeAt(l + 2), a = u.charCodeAt(l + 3), c = u.charCodeAt(l + 4), B(o) << 12 | B(s) << 8 | B(a) << 4 | B(c));
								if (d < 0) {
									var E = u.slice(l + 1, l + 5);
									throw g(e, l, "Invalid character escape sequence: \\u".concat(E, "."))
								}
								f += String.fromCharCode(d), l += 4;
								break;
							default:
								throw g(e, l, "Invalid character escape sequence: \\".concat(String.fromCharCode(p), "."))
						}
						h = ++l
					}
				}
				throw g(e, l, "Unterminated string.")
			}

			function M(e, t, n, r, i, o) {
				for (var s = e.body, a = t + 3, c = a, u = 0, l = ""; a < s.length && !isNaN(u = s.charCodeAt(a));) {
					if (34 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2)) return l += s.slice(c, a), new b.b(_.BLOCK_STRING, t, a + 3, n, r, i, Object(S.a)(l));
					if (u < 32 && 9 !== u && 10 !== u && 13 !== u) throw g(e, a, "Invalid character within String: ".concat(w(u), "."));
					10 === u ? (++a, ++o.line, o.lineStart = a) : 13 === u ? (10 === s.charCodeAt(a + 1) ? a += 2 : ++a, ++o.line, o.lineStart = a) : 92 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2) && 34 === s.charCodeAt(a + 3) ? (l += s.slice(c, a) + '"""', c = a += 4) : ++a
				}
				throw g(e, a, "Unterminated string.")
			}

			function B(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function V(e, t, n, r, i) {
				for (var o = e.body, s = o.length, a = t + 1, c = 0; a !== s && !isNaN(c = o.charCodeAt(a)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++a;
				return new b.b(_.NAME, t, a, n, r, i, o.slice(t, a))
			}

			function G(e, t) {
				return new q(e, t).parseDocument()
			}
			var q = function() {
				function e(e, t) {
					var n = function(e) {
						return x(e, k)
					}(e) ? e : new k(e);
					this._lexer = new R(n), this._options = t
				}
				var t = e.prototype;
				return t.parseName = function() {
					var e = this.expectToken(_.NAME);
					return {
						kind: T.NAME,
						value: e.value,
						loc: this.loc(e)
					}
				}, t.parseDocument = function() {
					var e = this._lexer.token;
					return {
						kind: T.DOCUMENT,
						definitions: this.many(_.SOF, this.parseDefinition, _.EOF),
						loc: this.loc(e)
					}
				}, t.parseDefinition = function() {
					if (this.peek(_.NAME)) switch (this._lexer.token.value) {
						case "query":
						case "mutation":
						case "subscription":
							return this.parseOperationDefinition();
						case "fragment":
							return this.parseFragmentDefinition();
						case "schema":
						case "scalar":
						case "type":
						case "interface":
						case "union":
						case "enum":
						case "input":
						case "directive":
							return this.parseTypeSystemDefinition();
						case "extend":
							return this.parseTypeSystemExtension()
					} else {
						if (this.peek(_.BRACE_L)) return this.parseOperationDefinition();
						if (this.peekDescription()) return this.parseTypeSystemDefinition()
					}
					throw this.unexpected()
				}, t.parseOperationDefinition = function() {
					var e = this._lexer.token;
					if (this.peek(_.BRACE_L)) return {
						kind: T.OPERATION_DEFINITION,
						operation: "query",
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					};
					var t, n = this.parseOperationType();
					return this.peek(_.NAME) && (t = this.parseName()), {
						kind: T.OPERATION_DEFINITION,
						operation: n,
						name: t,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseOperationType = function() {
					var e = this.expectToken(_.NAME);
					switch (e.value) {
						case "query":
							return "query";
						case "mutation":
							return "mutation";
						case "subscription":
							return "subscription"
					}
					throw this.unexpected(e)
				}, t.parseVariableDefinitions = function() {
					return this.optionalMany(_.PAREN_L, this.parseVariableDefinition, _.PAREN_R)
				}, t.parseVariableDefinition = function() {
					var e = this._lexer.token;
					return {
						kind: T.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(_.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(_.EQUALS) ? this.parseValueLiteral(!0) : void 0,
						directives: this.parseDirectives(!0),
						loc: this.loc(e)
					}
				}, t.parseVariable = function() {
					var e = this._lexer.token;
					return this.expectToken(_.DOLLAR), {
						kind: T.VARIABLE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseSelectionSet = function() {
					var e = this._lexer.token;
					return {
						kind: T.SELECTION_SET,
						selections: this.many(_.BRACE_L, this.parseSelection, _.BRACE_R),
						loc: this.loc(e)
					}
				}, t.parseSelection = function() {
					return this.peek(_.SPREAD) ? this.parseFragment() : this.parseField()
				}, t.parseField = function() {
					var e, t, n = this._lexer.token,
						r = this.parseName();
					return this.expectOptionalToken(_.COLON) ? (e = r, t = this.parseName()) : t = r, {
						kind: T.FIELD,
						alias: e,
						name: t,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(_.BRACE_L) ? this.parseSelectionSet() : void 0,
						loc: this.loc(n)
					}
				}, t.parseArguments = function(e) {
					var t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(_.PAREN_L, t, _.PAREN_R)
				}, t.parseArgument = function() {
					var e = this._lexer.token,
						t = this.parseName();
					return this.expectToken(_.COLON), {
						kind: T.ARGUMENT,
						name: t,
						value: this.parseValueLiteral(!1),
						loc: this.loc(e)
					}
				}, t.parseConstArgument = function() {
					var e = this._lexer.token;
					return {
						kind: T.ARGUMENT,
						name: this.parseName(),
						value: (this.expectToken(_.COLON), this.parseValueLiteral(!0)),
						loc: this.loc(e)
					}
				}, t.parseFragment = function() {
					var e = this._lexer.token;
					this.expectToken(_.SPREAD);
					var t = this.expectOptionalKeyword("on");
					return !t && this.peek(_.NAME) ? {
						kind: T.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1),
						loc: this.loc(e)
					} : {
						kind: T.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseFragmentDefinition = function() {
					var e, t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
						kind: T.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					} : {
						kind: T.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					}
				}, t.parseFragmentName = function() {
					if ("on" === this._lexer.token.value) throw this.unexpected();
					return this.parseName()
				}, t.parseValueLiteral = function(e) {
					var t = this._lexer.token;
					switch (t.kind) {
						case _.BRACKET_L:
							return this.parseList(e);
						case _.BRACE_L:
							return this.parseObject(e);
						case _.INT:
							return this._lexer.advance(), {
								kind: T.INT,
								value: t.value,
								loc: this.loc(t)
							};
						case _.FLOAT:
							return this._lexer.advance(), {
								kind: T.FLOAT,
								value: t.value,
								loc: this.loc(t)
							};
						case _.STRING:
						case _.BLOCK_STRING:
							return this.parseStringLiteral();
						case _.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return {
										kind: T.BOOLEAN, value: !0, loc: this.loc(t)
									};
								case "false":
									return {
										kind: T.BOOLEAN, value: !1, loc: this.loc(t)
									};
								case "null":
									return {
										kind: T.NULL, loc: this.loc(t)
									};
								default:
									return {
										kind: T.ENUM, value: t.value, loc: this.loc(t)
									}
							}
							case _.DOLLAR:
								if (!e) return this.parseVariable()
					}
					throw this.unexpected()
				}, t.parseStringLiteral = function() {
					var e = this._lexer.token;
					return this._lexer.advance(), {
						kind: T.STRING,
						value: e.value,
						block: e.kind === _.BLOCK_STRING,
						loc: this.loc(e)
					}
				}, t.parseList = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: T.LIST,
						values: this.any(_.BRACKET_L, (function() {
							return t.parseValueLiteral(e)
						}), _.BRACKET_R),
						loc: this.loc(n)
					}
				}, t.parseObject = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: T.OBJECT,
						fields: this.any(_.BRACE_L, (function() {
							return t.parseObjectField(e)
						}), _.BRACE_R),
						loc: this.loc(n)
					}
				}, t.parseObjectField = function(e) {
					var t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(_.COLON), {
						kind: T.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e),
						loc: this.loc(t)
					}
				}, t.parseDirectives = function(e) {
					for (var t = []; this.peek(_.AT);) t.push(this.parseDirective(e));
					return t
				}, t.parseDirective = function(e) {
					var t = this._lexer.token;
					return this.expectToken(_.AT), {
						kind: T.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e),
						loc: this.loc(t)
					}
				}, t.parseTypeReference = function() {
					var e, t = this._lexer.token;
					return this.expectOptionalToken(_.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(_.BRACKET_R), e = {
						kind: T.LIST_TYPE,
						type: e,
						loc: this.loc(t)
					}) : e = this.parseNamedType(), this.expectOptionalToken(_.BANG) ? {
						kind: T.NON_NULL_TYPE,
						type: e,
						loc: this.loc(t)
					} : e
				}, t.parseNamedType = function() {
					var e = this._lexer.token;
					return {
						kind: T.NAMED_TYPE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseTypeSystemDefinition = function() {
					var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
					if (e.kind === _.NAME) switch (e.value) {
						case "schema":
							return this.parseSchemaDefinition();
						case "scalar":
							return this.parseScalarTypeDefinition();
						case "type":
							return this.parseObjectTypeDefinition();
						case "interface":
							return this.parseInterfaceTypeDefinition();
						case "union":
							return this.parseUnionTypeDefinition();
						case "enum":
							return this.parseEnumTypeDefinition();
						case "input":
							return this.parseInputObjectTypeDefinition();
						case "directive":
							return this.parseDirectiveDefinition()
					}
					throw this.unexpected(e)
				}, t.peekDescription = function() {
					return this.peek(_.STRING) || this.peek(_.BLOCK_STRING)
				}, t.parseDescription = function() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}, t.parseSchemaDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					var n = this.parseDirectives(!0),
						r = this.many(_.BRACE_L, this.parseOperationTypeDefinition, _.BRACE_R);
					return {
						kind: T.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: r,
						loc: this.loc(e)
					}
				}, t.parseOperationTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(_.COLON);
					var n = this.parseNamedType();
					return {
						kind: T.OPERATION_TYPE_DEFINITION,
						operation: t,
						type: n,
						loc: this.loc(e)
					}
				}, t.parseScalarTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("scalar");
					var n = this.parseName(),
						r = this.parseDirectives(!0);
					return {
						kind: T.SCALAR_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						loc: this.loc(e)
					}
				}, t.parseObjectTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("type");
					var n = this.parseName(),
						r = this.parseImplementsInterfaces(),
						i = this.parseDirectives(!0),
						o = this.parseFieldsDefinition();
					return {
						kind: T.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: r,
						directives: i,
						fields: o,
						loc: this.loc(e)
					}
				}, t.parseImplementsInterfaces = function() {
					var e;
					if (!this.expectOptionalKeyword("implements")) return [];
					if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
						var t = [];
						this.expectOptionalToken(_.AMP);
						do {
							t.push(this.parseNamedType())
						} while (this.expectOptionalToken(_.AMP) || this.peek(_.NAME));
						return t
					}
					return this.delimitedMany(_.AMP, this.parseNamedType)
				}, t.parseFieldsDefinition = function() {
					var e;
					return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(_.BRACE_L) && this._lexer.lookahead().kind === _.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(_.BRACE_L, this.parseFieldDefinition, _.BRACE_R)
				}, t.parseFieldDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						r = this.parseArgumentDefs();
					this.expectToken(_.COLON);
					var i = this.parseTypeReference(),
						o = this.parseDirectives(!0);
					return {
						kind: T.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: r,
						type: i,
						directives: o,
						loc: this.loc(e)
					}
				}, t.parseArgumentDefs = function() {
					return this.optionalMany(_.PAREN_L, this.parseInputValueDef, _.PAREN_R)
				}, t.parseInputValueDef = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(_.COLON);
					var r, i = this.parseTypeReference();
					this.expectOptionalToken(_.EQUALS) && (r = this.parseValueLiteral(!0));
					var o = this.parseDirectives(!0);
					return {
						kind: T.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: i,
						defaultValue: r,
						directives: o,
						loc: this.loc(e)
					}
				}, t.parseInterfaceTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					var n = this.parseName(),
						r = this.parseImplementsInterfaces(),
						i = this.parseDirectives(!0),
						o = this.parseFieldsDefinition();
					return {
						kind: T.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: r,
						directives: i,
						fields: o,
						loc: this.loc(e)
					}
				}, t.parseUnionTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("union");
					var n = this.parseName(),
						r = this.parseDirectives(!0),
						i = this.parseUnionMemberTypes();
					return {
						kind: T.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						types: i,
						loc: this.loc(e)
					}
				}, t.parseUnionMemberTypes = function() {
					return this.expectOptionalToken(_.EQUALS) ? this.delimitedMany(_.PIPE, this.parseNamedType) : []
				}, t.parseEnumTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					var n = this.parseName(),
						r = this.parseDirectives(!0),
						i = this.parseEnumValuesDefinition();
					return {
						kind: T.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						values: i,
						loc: this.loc(e)
					}
				}, t.parseEnumValuesDefinition = function() {
					return this.optionalMany(_.BRACE_L, this.parseEnumValueDefinition, _.BRACE_R)
				}, t.parseEnumValueDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						r = this.parseDirectives(!0);
					return {
						kind: T.ENUM_VALUE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						loc: this.loc(e)
					}
				}, t.parseInputObjectTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("input");
					var n = this.parseName(),
						r = this.parseDirectives(!0),
						i = this.parseInputFieldsDefinition();
					return {
						kind: T.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: r,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseInputFieldsDefinition = function() {
					return this.optionalMany(_.BRACE_L, this.parseInputValueDef, _.BRACE_R)
				}, t.parseTypeSystemExtension = function() {
					var e = this._lexer.lookahead();
					if (e.kind === _.NAME) switch (e.value) {
						case "schema":
							return this.parseSchemaExtension();
						case "scalar":
							return this.parseScalarTypeExtension();
						case "type":
							return this.parseObjectTypeExtension();
						case "interface":
							return this.parseInterfaceTypeExtension();
						case "union":
							return this.parseUnionTypeExtension();
						case "enum":
							return this.parseEnumTypeExtension();
						case "input":
							return this.parseInputObjectTypeExtension()
					}
					throw this.unexpected(e)
				}, t.parseSchemaExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("schema");
					var t = this.parseDirectives(!0),
						n = this.optionalMany(_.BRACE_L, this.parseOperationTypeDefinition, _.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return {
						kind: T.SCHEMA_EXTENSION,
						directives: t,
						operationTypes: n,
						loc: this.loc(e)
					}
				}, t.parseScalarTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("scalar");
					var t = this.parseName(),
						n = this.parseDirectives(!0);
					if (0 === n.length) throw this.unexpected();
					return {
						kind: T.SCALAR_TYPE_EXTENSION,
						name: t,
						directives: n,
						loc: this.loc(e)
					}
				}, t.parseObjectTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("type");
					var t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						r = this.parseDirectives(!0),
						i = this.parseFieldsDefinition();
					if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
					return {
						kind: T.OBJECT_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: r,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseInterfaceTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("interface");
					var t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						r = this.parseDirectives(!0),
						i = this.parseFieldsDefinition();
					if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected();
					return {
						kind: T.INTERFACE_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: r,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseUnionTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("union");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						r = this.parseUnionMemberTypes();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return {
						kind: T.UNION_TYPE_EXTENSION,
						name: t,
						directives: n,
						types: r,
						loc: this.loc(e)
					}
				}, t.parseEnumTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("enum");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						r = this.parseEnumValuesDefinition();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return {
						kind: T.ENUM_TYPE_EXTENSION,
						name: t,
						directives: n,
						values: r,
						loc: this.loc(e)
					}
				}, t.parseInputObjectTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("input");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						r = this.parseInputFieldsDefinition();
					if (0 === n.length && 0 === r.length) throw this.unexpected();
					return {
						kind: T.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseDirectiveDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(_.AT);
					var n = this.parseName(),
						r = this.parseArgumentDefs(),
						i = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					var o = this.parseDirectiveLocations();
					return {
						kind: T.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: r,
						repeatable: i,
						locations: o,
						loc: this.loc(e)
					}
				}, t.parseDirectiveLocations = function() {
					return this.delimitedMany(_.PIPE, this.parseDirectiveLocation)
				}, t.parseDirectiveLocation = function() {
					var e = this._lexer.token,
						t = this.parseName();
					if (void 0 !== D[t.value]) return t;
					throw this.unexpected(e)
				}, t.loc = function(e) {
					var t;
					if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new b.a(e, this._lexer.lastToken, this._lexer.source)
				}, t.peek = function(e) {
					return this._lexer.token.kind === e
				}, t.expectToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw g(this._lexer.source, t.start, "Expected ".concat(Y(e), ", found ").concat(K(t), "."))
				}, t.expectOptionalToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t
				}, t.expectKeyword = function(e) {
					var t = this._lexer.token;
					if (t.kind !== _.NAME || t.value !== e) throw g(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(K(t), "."));
					this._lexer.advance()
				}, t.expectOptionalKeyword = function(e) {
					var t = this._lexer.token;
					return t.kind === _.NAME && t.value === e && (this._lexer.advance(), !0)
				}, t.unexpected = function(e) {
					var t = null != e ? e : this._lexer.token;
					return g(this._lexer.source, t.start, "Unexpected ".concat(K(t), "."))
				}, t.any = function(e, t, n) {
					this.expectToken(e);
					for (var r = []; !this.expectOptionalToken(n);) r.push(t.call(this));
					return r
				}, t.optionalMany = function(e, t, n) {
					if (this.expectOptionalToken(e)) {
						var r = [];
						do {
							r.push(t.call(this))
						} while (!this.expectOptionalToken(n));
						return r
					}
					return []
				}, t.many = function(e, t, n) {
					this.expectToken(e);
					var r = [];
					do {
						r.push(t.call(this))
					} while (!this.expectOptionalToken(n));
					return r
				}, t.delimitedMany = function(e, t) {
					this.expectOptionalToken(e);
					var n = [];
					do {
						n.push(t.call(this))
					} while (this.expectOptionalToken(e));
					return n
				}, e
			}();

			function K(e) {
				var t = e.value;
				return Y(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
			}

			function Y(e) {
				return function(e) {
					return e === _.BANG || e === _.DOLLAR || e === _.AMP || e === _.PAREN_L || e === _.PAREN_R || e === _.SPREAD || e === _.COLON || e === _.EQUALS || e === _.AT || e === _.BRACKET_L || e === _.BRACKET_R || e === _.BRACE_L || e === _.PIPE || e === _.BRACE_R
				}(e) ? '"'.concat(e, '"') : e
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.bc9f96b0a1137e04dda1.js.map