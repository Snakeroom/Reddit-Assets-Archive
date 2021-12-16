// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.e5b171328fc44c95ee94.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ConvertToCoinsModal"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return v
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const c = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function i(e) {
				Object(n.l)(e, 20) || c.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					r = new Uint8Array(40);
				for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
				const o = Object(n.a)(Object(s.a)(r));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const l = {};
			for (let g = 0; g < 10; g++) l[String(g)] = String(g);
			for (let g = 0; g < 26; g++) l[String.fromCharCode(65 + g)] = String(10 + g);
			const d = Math.floor((u = 9007199254740991, Math.log10 ? Math.log10(u) : Math.log(u) / Math.LN10));
			var u;

			function f(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => l[e]).join("");
				for (; t.length >= d;) {
					let e = t.substring(0, d);
					t = parseInt(e, 10) % 97 + t.substring(e.length)
				}
				let r = String(98 - parseInt(t, 10) % 97);
				for (; r.length < 2;) r = "0" + r;
				return r
			}

			function m(e) {
				let t = null;
				if ("string" != typeof e && c.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = i(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && c.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== f(e) && c.throwArgumentError("bad icap checksum", "address", e), t = Object(o.c)(e.substring(4)); t.length < 40;) t = "0" + t;
					t = i("0x" + t)
				} else c.throwArgumentError("invalid address", "address", e);
				return t
			}

			function p(e) {
				try {
					return m(e), !0
				} catch (t) {}
				return !1
			}

			function h(e) {
				let t = Object(o.b)(m(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + f("XE00" + t) + t
			}

			function b(e) {
				let t = null;
				try {
					t = m(e.from)
				} catch (i) {
					c.throwArgumentError("missing from address", "transaction", e)
				}
				const r = Object(n.o)(Object(n.a)(o.a.from(e.nonce).toHexString()));
				return m(Object(n.e)(Object(s.a)(Object(a.encode)([t, r])), 12))
			}

			function v(e, t, r) {
				return 32 !== Object(n.d)(t) && c.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(n.d)(r) && c.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), m(Object(n.e)(Object(s.a)(Object(n.b)(["0xff", m(e), t, r])), 12))
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
				return f
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "b", (function() {
				return y
			}));
			var n = r("./node_modules/bn.js/lib/bn.js"),
				o = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				c = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				i = o.a.BN;
			const l = new a.a(c.a),
				d = {},
				u = 9007199254740991;

			function f(e) {
				return null != e && (p.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(s.l)(e) || "bigint" == typeof e || Object(s.j)(e))
			}
			let m = !1;
			class p {
				constructor(e, t) {
					l.checkNew(new.target, p), e !== d && l.throwError("cannot call constructor directly; use BigNumber.from", a.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return b(v(this).fromTwos(e))
				}
				toTwos(e) {
					return b(v(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? p.from(this._hex.substring(1)) : this
				}
				add(e) {
					return b(v(this).add(v(e)))
				}
				sub(e) {
					return b(v(this).sub(v(e)))
				}
				div(e) {
					return p.from(e).isZero() && g("division by zero", "div"), b(v(this).div(v(e)))
				}
				mul(e) {
					return b(v(this).mul(v(e)))
				}
				mod(e) {
					const t = v(e);
					return t.isNeg() && g("cannot modulo negative values", "mod"), b(v(this).umod(t))
				}
				pow(e) {
					const t = v(e);
					return t.isNeg() && g("cannot raise to negative values", "pow"), b(v(this).pow(t))
				}
				and(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && g("cannot 'and' negative values", "and"), b(v(this).and(t))
				}
				or(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && g("cannot 'or' negative values", "or"), b(v(this).or(t))
				}
				xor(e) {
					const t = v(e);
					return (this.isNegative() || t.isNeg()) && g("cannot 'xor' negative values", "xor"), b(v(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && g("cannot mask negative values", "mask"), b(v(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && g("cannot shift negative values", "shl"), b(v(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && g("cannot shift negative values", "shr"), b(v(this).shrn(e))
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
						g("overflow", "toNumber", this.toString())
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
					return arguments.length > 0 && (10 === arguments[0] ? m || (m = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", a.a.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", a.a.errors.UNEXPECTED_ARGUMENT, {})), v(this).toString(10)
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
					if (e instanceof p) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new p(d, h(e)) : e.match(/^-?[0-9]+$/) ? new p(d, h(new i(e))) : l.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && g("underflow", "BigNumber.from", e), (e >= u || e <= -u) && g("overflow", "BigNumber.from", e), p.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return p.from(t.toString());
					if (Object(s.j)(t)) return p.from(Object(s.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return p.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(s.l)(e) || "-" === e[0] && Object(s.l)(e.substring(1)))) return p.from(e)
						} return l.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function h(e) {
				if ("string" != typeof e) return h(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && l.throwArgumentError("invalid hex", "value", e), "0x00" === (e = h(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function b(e) {
				return p.from(h(e))
			}

			function v(e) {
				const t = p.from(e).toHexString();
				return "-" === t[0] ? new i("-" + t.substring(3), 16) : new i(t.substring(2), 16)
			}

			function g(e, t, r) {
				const n = {
					fault: e,
					operation: t
				};
				return null != r && (n.value = r), l.throwError(e, a.a.errors.NUMERIC_FAULT, n)
			}

			function E(e) {
				return new i(e, 36).toString(16)
			}

			function y(e) {
				return new i(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "o", (function() {
				return d
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "m", (function() {
				return x
			}));
			const n = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function o(e) {
				return !!e.toHexString
			}

			function s(e) {
				return e.slice ? e : (e.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function a(e) {
				return f(e) && !(e.length % 2) || c(e)
			}

			function c(e) {
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

			function i(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid arrayify value");
					const t = [];
					for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === t.length && t.push(0), s(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e) && (e = e.toHexString()), f(e)) {
					let r = e.substring(2);
					r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
					const o = [];
					for (let e = 0; e < r.length; e += 2) o.push(parseInt(r.substring(e, e + 2), 16));
					return s(new Uint8Array(o))
				}
				return c(e) ? s(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
			}

			function l(e) {
				const t = e.map(e => i(e)),
					r = t.reduce((e, t) => e + t.length, 0),
					n = new Uint8Array(r);
				return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), s(n)
			}

			function d(e) {
				let t = i(e);
				if (0 === t.length) return t;
				let r = 0;
				for (; r < t.length && 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}

			function u(e, t) {
				(e = i(e)).length > t && n.throwArgumentError("value out of range", "value", arguments[0]);
				const r = new Uint8Array(t);
				return r.set(e, t - e.length), s(r)
			}

			function f(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			const m = "0123456789abcdef";

			function p(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid hexlify value");
					let t = "";
					for (; e;) t = m[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e)) return e.toHexString();
				if (f(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (c(e)) {
					let t = "0x";
					for (let r = 0; r < e.length; r++) {
						let n = e[r];
						t += m[(240 & n) >> 4] + m[15 & n]
					}
					return t
				}
				return n.throwArgumentError("invalid hexlify value", "value", e)
			}

			function h(e) {
				if ("string" != typeof e) e = p(e);
				else if (!f(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function b(e, t, r) {
				return "string" != typeof e ? e = p(e) : (!f(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}

			function v(e) {
				let t = "0x";
				return e.forEach(e => {
					t += p(e).substring(2)
				}), t
			}

			function g(e) {
				const t = E(p(e, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function E(e) {
				"string" != typeof e && (e = p(e)), f(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function y(e, t) {
				for ("string" != typeof e ? e = p(e) : f(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function O(e) {
				const t = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (a(e)) {
					const r = i(e);
					65 !== r.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = p(r.slice(0, 32)), t.s = p(r.slice(32, 64)), t.v = r[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = p(r.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const r = u(i(t._vs), 32);
						t._vs = p(r);
						const o = r[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = o : t.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
						const s = p(r);
						null == t.s ? t.s = s : t.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && f(t.r) ? t.r = y(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && f(t.s) ? t.s = y(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
					const r = i(t.s);
					r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
					const o = p(r);
					t._vs && (f(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = y(t._vs, 32)), null == t._vs ? t._vs = o : t._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function x(e) {
				return p(l([(e = O(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function a(e) {
				return "0x" + o.a.keccak_256(Object(s.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, s = "0123456789abcdef".split(""), a = [0, 8, 16, 24], c = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], i = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], d = function(e, t, r) {
							return function(n) {
								return new O(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, o) {
								return new O(e, t, o).update(n)[r]()
							}
						}, f = function(e, t) {
							var r = d(e, t, "hex");
							r.create = function() {
								return new O(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < l.length; ++n) {
								var o = l[n];
								r[o] = d(e, t, o)
							}
							return r
						}, m = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: i,
							createMethod: f
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: i,
							createMethod: f
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var r = u(e, t, "hex");
								r.create = function(r) {
									return new O(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < l.length; ++n) {
									var o = l[n];
									r[o] = u(e, t, o)
								}
								return r
							}
						}], p = {}, h = [], b = 0; b < m.length; ++b)
						for (var v = m[b], g = v.bits, E = 0; E < g.length; ++E) {
							var y = v.name + "_" + g[E];
							h.push(y), p[y] = v.createMethod(g[E], v.padding)
						}

					function O(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					O.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, o = e.length, s = this.blocks, c = this.byteCount, i = this.blockCount, l = 0, d = this.s; l < o;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, r = 1; r < i + 1; ++r) s[r] = 0;
							if (t)
								for (r = this.start; l < o && r < c; ++l) s[r >> 2] |= e[l] << a[3 & r++];
							else
								for (r = this.start; l < o && r < c; ++l)(n = e.charCodeAt(l)) < 128 ? s[r >> 2] |= n << a[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), s[r >> 2] |= (240 | n >> 18) << a[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
							if (this.lastByteIndex = r, r >= c) {
								for (this.start = r - c, this.block = s[i], r = 0; r < i; ++r) d[r] ^= s[r];
								x(d), this.reset = !0
							} else this.start = r
						}
						return this
					}, O.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						x(n)
					}, O.prototype.toString = O.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, o = this.extraBytes, a = 0, c = 0, i = ""; c < n;) {
							for (a = 0; a < t && c < n; ++a, ++c) e = r[a], i += s[e >> 4 & 15] + s[15 & e] + s[e >> 12 & 15] + s[e >> 8 & 15] + s[e >> 20 & 15] + s[e >> 16 & 15] + s[e >> 28 & 15] + s[e >> 24 & 15];
							c % t == 0 && (x(r), a = 0)
						}
						return o && (e = r[a], o > 0 && (i += s[e >> 4 & 15] + s[15 & e]), o > 1 && (i += s[e >> 12 & 15] + s[e >> 8 & 15]), o > 2 && (i += s[e >> 20 & 15] + s[e >> 16 & 15])), i
					}, O.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							s = 0,
							a = 0,
							c = this.outputBits >> 3;
						e = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(c);
						for (var i = new Uint32Array(e); a < n;) {
							for (s = 0; s < t && a < n; ++s, ++a) i[a] = r[s];
							a % t == 0 && x(r)
						}
						return o && (i[s] = r[s], e = e.slice(0, c)), e
					}, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, o = this.outputBlocks, s = this.extraBytes, a = 0, c = 0, i = []; c < o;) {
							for (a = 0; a < r && c < o; ++a, ++c) e = c << 2, t = n[a], i[e] = 255 & t, i[e + 1] = t >> 8 & 255, i[e + 2] = t >> 16 & 255, i[e + 3] = t >> 24 & 255;
							c % r == 0 && x(n)
						}
						return s && (e = c << 2, t = n[a], s > 0 && (i[e] = 255 & t), s > 1 && (i[e + 1] = t >> 8 & 255), s > 2 && (i[e + 2] = t >> 16 & 255)), i
					};
					var x = function(e) {
						var t, r, n, o, s, a, i, l, d, u, f, m, p, h, b, v, g, E, y, O, x, j, C, w, N, _, P, A, M, I, S, k, T, R, L, z, D, B, U, F, G, V, W, H, q, J, Q, Y, X, Z, K, $, ee, te, re, ne, oe, se, ae, ce, ie, le, de;
						for (n = 0; n < 48; n += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (m = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | i >>> 31), r = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (i << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = o ^ (l << 1 | d >>> 31), r = s ^ (d << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (u << 1 | f >>> 31), r = i ^ (f << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (m << 1 | p >>> 31), r = d ^ (p << 1 | m >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (o << 1 | s >>> 31), r = f ^ (s << 1 | o >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, h = e[0], b = e[1], J = e[11] << 4 | e[10] >>> 28, Q = e[10] << 4 | e[11] >>> 28, A = e[20] << 3 | e[21] >>> 29, M = e[21] << 3 | e[20] >>> 29, ce = e[31] << 9 | e[30] >>> 23, ie = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, W = e[41] << 18 | e[40] >>> 14, R = e[2] << 1 | e[3] >>> 31, L = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, Y = e[22] << 10 | e[23] >>> 22, X = e[23] << 10 | e[22] >>> 22, I = e[33] << 13 | e[32] >>> 19, S = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, de = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, z = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, y = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, K = e[35] << 15 | e[34] >>> 17, k = e[45] << 29 | e[44] >>> 3, T = e[44] << 29 | e[45] >>> 3, w = e[6] << 28 | e[7] >>> 4, N = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, B = e[26] << 25 | e[27] >>> 7, U = e[27] << 25 | e[26] >>> 7, O = e[36] << 21 | e[37] >>> 11, x = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, H = e[8] << 27 | e[9] >>> 5, q = e[9] << 27 | e[8] >>> 5, _ = e[18] << 20 | e[19] >>> 12, P = e[19] << 20 | e[18] >>> 12, se = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, F = e[38] << 8 | e[39] >>> 24, G = e[39] << 8 | e[38] >>> 24, j = e[48] << 14 | e[49] >>> 18, C = e[49] << 14 | e[48] >>> 18, e[0] = h ^ ~v & E, e[1] = b ^ ~g & y, e[10] = w ^ ~_ & A, e[11] = N ^ ~P & M, e[20] = R ^ ~z & B, e[21] = L ^ ~D & U, e[30] = H ^ ~J & Y, e[31] = q ^ ~Q & X, e[40] = te ^ ~ne & se, e[41] = re ^ ~oe & ae, e[2] = v ^ ~E & O, e[3] = g ^ ~y & x, e[12] = _ ^ ~A & I, e[13] = P ^ ~M & S, e[22] = z ^ ~B & F, e[23] = D ^ ~U & G, e[32] = J ^ ~Y & Z, e[33] = Q ^ ~X & K, e[42] = ne ^ ~se & ce, e[43] = oe ^ ~ae & ie, e[4] = E ^ ~O & j, e[5] = y ^ ~x & C, e[14] = A ^ ~I & k, e[15] = M ^ ~S & T, e[24] = B ^ ~F & V, e[25] = U ^ ~G & W, e[34] = Y ^ ~Z & $, e[35] = X ^ ~K & ee, e[44] = se ^ ~ce & le, e[45] = ae ^ ~ie & de, e[6] = O ^ ~j & h, e[7] = x ^ ~C & b, e[16] = I ^ ~k & w, e[17] = S ^ ~T & N, e[26] = F ^ ~V & R, e[27] = G ^ ~W & L, e[36] = Z ^ ~$ & H, e[37] = K ^ ~ee & q, e[46] = ce ^ ~le & te, e[47] = ie ^ ~de & re, e[8] = j ^ ~h & v, e[9] = C ^ ~b & g, e[18] = k ^ ~w & _, e[19] = T ^ ~N & P, e[28] = V ^ ~R & z, e[29] = W ^ ~L & D, e[38] = $ ^ ~H & J, e[39] = ee ^ ~q & Q, e[48] = le ^ ~te & ne, e[49] = de ^ ~re & oe, e[0] ^= c[n], e[1] ^= c[n + 1]
					};
					if (o) e.exports = p;
					else
						for (b = 0; b < h.length; ++b) n[h[b]] = p[h[b]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			const n = "logger/5.4.0";
			let o = !1,
				s = !1;
			const a = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let c = a.default,
				i = null;
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
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, t) {
					const r = e.toLowerCase();
					null == a[r] && this.throwArgumentError("invalid log level name", "logLevel", e), c > a[r] || console.log.apply(console, t)
				}
				debug(...e) {
					this._log(f.levels.DEBUG, e)
				}
				info(...e) {
					this._log(f.levels.INFO, e)
				}
				warn(...e) {
					this._log(f.levels.WARNING, e)
				}
				makeError(e, t, r) {
					if (s) return this.makeError("censored error", t, {});
					t || (t = f.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (a) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const a = new Error(e);
					return a.reason = o, a.code = t, Object.keys(r).forEach((function(e) {
						a[e] = r[e]
					})), a
				}
				throwError(e, t, r) {
					throw this.makeError(e, t, r)
				}
				throwArgumentError(e, t, r) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
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
					null == e && (e = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: l
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, r) {
					r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + r, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return i || (i = new f(n)), i
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!e, o = !!t
				}
				static setLogLevel(e) {
					const t = a[e.toLowerCase()];
					null != t ? c = t : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = u, f.levels = d
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "encode", (function() {
				return i
			})), r.d(t, "decode", (function() {
				return u
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new o.a("rlp/5.4.0");

			function a(e) {
				const t = [];
				for (; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function c(e, t, r) {
				let n = 0;
				for (let o = 0; o < r; o++) n = 256 * n + e[t + o];
				return n
			}

			function i(e) {
				return Object(n.i)(function e(t) {
					if (Array.isArray(t)) {
						let r = [];
						if (t.forEach((function(t) {
								r = r.concat(e(t))
							})), r.length <= 55) return r.unshift(192 + r.length), r;
						const n = a(r.length);
						return n.unshift(247 + n.length), n.concat(r)
					}
					Object(n.k)(t) || s.throwArgumentError("RLP object must be BytesLike", "object", t);
					const r = Array.prototype.slice.call(Object(n.a)(t));
					if (1 === r.length && r[0] <= 127) return r;
					if (r.length <= 55) return r.unshift(128 + r.length), r;
					const o = a(r.length);
					return o.unshift(183 + o.length), o.concat(r)
				}(e))
			}

			function l(e, t, r, n) {
				const a = [];
				for (; r < t + 1 + n;) {
					const c = d(e, r);
					a.push(c.result), (r += c.consumed) > t + 1 + n && s.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: a
				}
			}

			function d(e, t) {
				if (0 === e.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const r = e[t] - 247;
					t + 1 + r > e.length && s.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
					const n = c(e, t + 1, r);
					return t + 1 + r + n > e.length && s.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1 + r, r + n)
				}
				if (e[t] >= 192) {
					const r = e[t] - 192;
					return t + 1 + r > e.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, r)
				}
				if (e[t] >= 184) {
					const r = e[t] - 183;
					t + 1 + r > e.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
					const a = c(e, t + 1, r);
					return t + 1 + r + a > e.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r + a,
						result: Object(n.i)(e.slice(t + 1 + r, t + 1 + r + a))
					}
				}
				if (e[t] >= 128) {
					const r = e[t] - 128;
					return t + 1 + r > e.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), {
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
				return r.consumed !== t.length && s.throwArgumentError("invalid rlp data", "data", e), r.result
			}
		},
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function o() {}
				o.resetWarningCache = n;
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, s, a) {
							if (a !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var s = {
							array: e,
							bool: e,
							func: e,
							number: e,
							object: e,
							string: e,
							symbol: e,
							any: e,
							arrayOf: t,
							element: e,
							elementType: e,
							instanceOf: t,
							node: e,
							objectOf: t,
							oneOf: t,
							oneOfType: t,
							shape: t,
							exact: t,
							checkPropTypes: o,
							resetWarningCache: n
						};
						return s.PropTypes = s, s
					}()
				}));

				function a(e) {
					return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function c(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function i(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function l(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(r), !0).forEach((function(t) {
							c(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function d(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								o = !1,
								s = void 0;
							try {
								for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, s = i
							} finally {
								try {
									n || null == c.return || c.return()
								} finally {
									if (o) throw s
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return u(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var f = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					m = function(e) {
						return null !== e && "object" === a(e)
					},
					p = function(e, t, r) {
						return m(e) ? Object.keys(e).reduce((function(n, o) {
							var s = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var s = Object.keys(t),
									a = Object.keys(r);
								if (s.length !== a.length) return !1;
								for (var c = {}, i = 0; i < s.length; i += 1) c[s[i]] = !0;
								for (var l = 0; l < a.length; l += 1) c[a[l]] = !0;
								var d = Object.keys(c);
								if (d.length !== s.length) return !1;
								var u = t,
									f = r;
								return d.every((function(t) {
									return e(u[t], f[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : s ? l(l({}, n || {}), {}, c({}, o, e[o])) : n
						}), null) : null
					},
					h = function(e) {
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					b = function(e) {
						if (function(e) {
								return m(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(h)
						};
						var t = h(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					v = t.createContext(null);
				v.displayName = "ElementsContext";
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						s = t.useRef(!1),
						a = t.useRef(!0),
						c = t.useMemo((function() {
							return b(r)
						}), [r]),
						i = d(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						l = i[0],
						u = i[1],
						m = f(r);
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === c.tag && (s.current = !0, u({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (s.current = !0, c.stripePromise.then((function(e) {
						e && a.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var h = f(n);
					return t.useEffect((function() {
						if (l.elements) {
							var e = p(n, h, ["clientSecret", "fonts"]);
							e && l.elements.update(e)
						}
					}), [n, h, l.elements]), t.useEffect((function() {
						return function() {
							a.current = !1
						}
					}), []), t.useEffect((function() {
						var e = l.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [l.stripe]), t.createElement(v.Provider, {
						value: l
					}, o)
				};
				g.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var E = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(v), e)
					},
					y = function(e) {
						return (0, e.children)(E("mounts <ElementsConsumer>"))
					};
				y.propTypes = {
					children: s.func.isRequired
				};
				var O = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					x = function() {},
					j = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							a = r ? function(e) {
								E("mounts <".concat(o, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									s = r.className,
									a = r.options,
									c = void 0 === a ? {} : a,
									i = r.onBlur,
									l = void 0 === i ? x : i,
									d = r.onFocus,
									u = void 0 === d ? x : d,
									m = r.onReady,
									h = void 0 === m ? x : m,
									b = r.onChange,
									v = void 0 === b ? x : b,
									g = r.onEscape,
									y = void 0 === g ? x : g,
									j = r.onClick,
									C = void 0 === j ? x : j,
									w = E("mounts <".concat(o, ">")).elements,
									N = t.useRef(null),
									_ = t.useRef(null),
									P = O(h),
									A = O(l),
									M = O(u),
									I = O(C),
									S = O(v),
									k = O(y);
								t.useLayoutEffect((function() {
									if (null == N.current && w && null != _.current) {
										var t = w.create(e, c);
										N.current = t, t.mount(_.current), t.on("ready", (function() {
											return P(t)
										})), t.on("change", S), t.on("blur", A), t.on("focus", M), t.on("escape", k), t.on("click", I)
									}
								}));
								var T = f(c);
								return t.useEffect((function() {
									if (N.current) {
										var e = p(c, T, ["paymentRequest"]);
										e && N.current.update(e)
									}
								}), [c, T]), t.useLayoutEffect((function() {
									return function() {
										N.current && N.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: _
								})
							};
						return a.propTypes = {
							id: s.string,
							className: s.string,
							onChange: s.func,
							onBlur: s.func,
							onFocus: s.func,
							onReady: s.func,
							onClick: s.func,
							options: s.object
						}, a.displayName = o, a.__elementType = e, a
					},
					C = "undefined" == typeof window,
					w = j("auBankAccount", C),
					N = j("card", C),
					_ = j("cardNumber", C),
					P = j("cardExpiry", C),
					A = j("cardCvc", C),
					M = j("fpxBank", C),
					I = j("iban", C),
					S = j("idealBank", C),
					k = j("p24Bank", C),
					T = j("epsBank", C),
					R = j("payment", C),
					L = j("paymentRequestButton", C),
					z = j("linkAuthentication", C),
					D = j("shippingAddress", C),
					B = j("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = w, e.CardCvcElement = A, e.CardElement = N, e.CardExpiryElement = P, e.CardNumberElement = _, e.Elements = g, e.ElementsConsumer = y, e.EpsBankElement = T, e.FpxBankElement = M, e.IbanElement = I, e.IdealBankElement = S, e.LinkAuthenticationElement = z, e.P24BankElement = k, e.PaymentElement = R, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = D, e.useElements = function() {
					return E("calls useElements()").elements
				}, e.useStripe = function() {
					return E("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditCoins.json");
			var i = r("./src/reddit/featureFlags/subredditPoints.ts"),
				l = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: o.a
				}
			});
			const d = Object(s.a)(l.nb),
				u = (e, t, r) => async (n, o, {
					gqlContext: s
				}) => {
					var l, u;
					if (!i.a.has(t.toLowerCase())) return;
					if (void 0 !== o().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const f = await ((e, t) => Object(a.a)(e, {
						...c,
						variables: {
							subreddit: t
						}
					}))(s(), e);
					if (f.ok) {
						const t = f.body;
						n(d({
							subredditId: e,
							amount: (null === (u = null === (l = t.data.subredditInfoById) || void 0 === l ? void 0 : l.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "j", (function() {
				return A
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "i", (function() {
				return V
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				s = r.n(o),
				a = r("./node_modules/uuid/v4.js"),
				c = r.n(a),
				i = r("./src/config.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				f = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/gold/constants.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/models/Gold/ProductOffer.ts"),
				O = r("./src/reddit/actions/gold/powerups.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				j = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = r("./src/reddit/models/Payments/index.ts");
			const w = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				N = e => e.map(e => e.message).join(" : "),
				_ = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					const i = c()(),
						l = await Object(j.f)(a(), i, e, t, r);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(N(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, P = Object(b.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), A = (e, t, r, n, o, s, a) => async (i, l, {
					gqlContext: d
				}) => {
					var u;
					const f = l(),
						p = s === y.c.Premium,
						h = s === y.c.Powerups,
						O = {};
					if (h && a) O.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (p) {
						const e = Object(v.d)(f, {
							provider: C.b.Stripe
						});
						if (!e) return;
						O.premium = {
							pricePackage: e
						}
					}
					let x, w, A = "";
					try {
						A = await i(_(r, o, O))
					} catch (I) {
						return m.c.captureException(I), void(I.message && i(Object(b.stripeApiError)(I.message)))
					}
					i(Object(b.stripeTokenPending)());
					const M = Object(g.y)(f);
					if (M || (x = await i(Object(b.validateAndCreateStripeToken)(e, t)), w = Object(g.v)(f), x)) try {
						const t = c()(),
							r = M || w ? x && w ? Object(j.h)(d(), t, A, x.id) : M ? Object(j.j)(d(), t, A, M) : null : Object(j.i)(d(), t, A, x.id),
							s = await r;
						if (!(null == s ? void 0 : s.ok)) return void i(P);
						const f = s.body.data.createEconPayment;
						if (null === (u = null == f ? void 0 : f.errors) || void 0 === u ? void 0 : u.length) return void i(Object(b.stripeApiError)(N(f.errors)));
						const {
							ok: m,
							payment: v,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = f;
						if (m && v.status === j.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(b.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(b.stripeApiError)(e.message)) : t(P)
							})(r, i);
							let n;
							if (!(n = M ? await Object(j.e)(d(), c()(), v.id, M) : await Object(j.d)(d(), c()(), v.id, x.id, w)).ok) return void i(P);
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== j.a.Paid) return void i(P)
						} else if (m && v.status !== j.a.Paid) return void i(P);
						const y = Object(E.k)(l());
						y && (h && a ? i(U({
							subredditId: a,
							powerupsCount: o,
							user: y,
							isAnonymous: n
						})) : p && i(G({
							user: y
						})))
					} catch (I) {
						m.c.captureException(I), i(P)
					}
				}, M = (e, t, r, n, o) => async (s, a, {
					gqlContext: l
				}) => {
					var d;
					const f = a(),
						p = n === y.c.Premium,
						h = n === y.c.Powerups,
						g = {};
					if (h && o) g.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (p) {
						const e = Object(v.d)(f, {
							provider: C.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let O = "";
					try {
						O = await s(_(e, r, g))
					} catch (A) {
						return m.c.captureException(A), A.message && s(Object(b.paypalApiError)(A.message)), null
					}
					const x = i.a.redditUrl;
					let P = {
						_o: x,
						o: O,
						pt: n
					};
					h && o && (P = {
						...P,
						r: o
					});
					try {
						const e = Object(u.a)(`${x}/framedModal/paypal-finish`, {
								...P,
								s: !0
							}),
							n = Object(u.a)(`${x}/framedModal/paypal-finish`, P),
							i = c()(),
							f = await Object(j.g)(l(), i, O, e, n);
						if (f && f.ok) {
							const e = f.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return s(Object(b.paypalApiError)(N(e.errors))), null;
							const n = Object(E.k)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === j.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && n) return o ? s(U({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : p && s(G({
									user: n
								})), null
							}
						}
					} catch (A) {
						m.c.captureException(A)
					}
					return s(Object(b.paypalApiError)(w())), null
				}, I = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var s;
					try {
						const n = c()(),
							a = await Object(j.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(b.paypalApiError)(N(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						m.c.captureException(a)
					}
					return r(Object(b.paypalApiError)(w())), !1
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(b.savedCardsPending)());
					try {
						const t = await Object(j.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(b.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(b.savedCardsSuccess)(o)), o[0] && e(Object(b.selectSavedCard)(o[0].cardId))
						} else e(Object(b.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						m.c.captureException(o), e(Object(b.savedCardsSuccess)([]))
					}
				}, k = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(b._deleteSavedCard)(e));
					try {
						const t = await Object(j.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(N(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, T = Object(f.a)(h.O), R = Object(f.a)(h.P), L = Object(f.a)(h.Q), z = e => async (t, r) => {
					await t(T(e)), t(Object(d.f)({
						kind: p.b.Error,
						duration: d.a,
						text: e
					}))
				}, D = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					o(R({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(j.b)(a(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(z(n[0].message));
							o(L({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						m.c.captureException(c), o(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(f.a)(h.S), U = e => async (t, r) => {
					t(B(e)), t(Object(O.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(x.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(x.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(f.a)(h.W), G = ({
					user: e
				}) => async t => {
					await t(Object(O.o)(!0)), t(F({
						user: e
					}))
				}, V = Object(f.a)(h.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "a", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				f = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				m = r("./src/redditGQL/operations/ProductOffers.json");
			var p = r("./src/reddit/selectors/gold/productOffers.ts"),
				h = r("./src/reddit/actions/gold/constants.ts");
			const b = Object(o.a)(h.db),
				v = Object(o.a)(h.cb),
				g = Object(o.a)(h.bb),
				E = Object(o.a)(h.Z),
				y = Object(o.a)(h.Y),
				O = Object(o.a)(h.X),
				x = Object(o.a)(h.Eb),
				j = Object(o.a)(h.Cb),
				C = Object(o.a)(h.Db),
				w = Object(o.a)(h.Hb),
				N = Object(o.a)(h.Gb),
				_ = Object(o.a)(h.Fb),
				P = e => async t => {
					t(Object(a.f)({
						kind: i.b.Error,
						duration: a.a,
						text: e
					}))
				}, A = (e, t) => async r => {
					e === c.c.Premium ? r(I()) : t && r(M(e, t))
				}, M = (e, t) => async (r, o, {
					gqlContext: s
				}) => {
					const a = o();
					if (!Object(p.i)(a, {
							subredditId: t,
							type: e
						})) {
						r(b());
						try {
							const n = await ((e, t, r, n) => Object(d.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(s(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(v({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(g(e)), r(P(e))
						}
					}
				}, I = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, a;
					const i = c.c.Premium;
					e(E());
					try {
						const t = await ((e, t) => Object(d.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(y({
								productOffers: null !== (a = r.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(O(t)), e(P(t))
					}
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, a, c;
					e(x());
					try {
						const t = await (e => Object(d.a)(e, f))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(C({
								subscriptions: null !== (c = null === (a = r.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== c ? c : []
							}))
						}
					} catch (i) {
						s.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(j(t)), e(P(t))
					}
				}, k = e => async (t, r, {
					gqlContext: o
				}) => {
					var s;
					t(w(e));
					try {
						const r = await Object(l.b)(o(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: o
								} = n.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(_({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (s = a.message) && void 0 !== s ? s : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(N(e)), t(P(e)), !1
					}
				}, T = e => async t => {
					const r = await t(k(e));
					return r ? (t(Object(a.f)({
						duration: a.a,
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(S())) : t(Object(a.f)({
						duration: a.a,
						kind: i.b.Error,
						text: n.fbt._("Something went wrong!", null, {
							hk: "1k6gx9"
						})
					})), r
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return f
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardNumberChange", (function() {
				return h
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return v
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return E
			})), r.d(t, "stripeApiError", (function() {
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return x
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return C
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return N
			})), r.d(t, "savedCardsPending", (function() {
				return _
			})), r.d(t, "savedCardsSuccess", (function() {
				return P
			})), r.d(t, "loadSavedCards", (function() {
				return A
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const d = Object(s.a)(l.B),
				u = Object(s.a)(l.w),
				f = Object(s.a)(l.b),
				m = Object(s.a)(l.y),
				p = Object(s.a)(l.a),
				h = Object(s.a)(l.G),
				b = Object(s.a)(l.F),
				v = Object(s.a)(l.E),
				g = Object(s.a)(l.I),
				E = Object(s.a)(l.H),
				y = Object(s.a)(l.D),
				O = (e, t) => async (r, s) => {
					const a = s(),
						c = Object(i.h)(a),
						l = Object(i.l)(a),
						d = t.getElement(n.CardNumberElement);
					if (!d) return;
					const {
						token: u,
						error: f
					} = await e.createToken(d, {
						name: c,
						address_zip: l
					});
					if (c.trim()) {
						if (!f && u) return u;
						r(E(f || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
				}, x = Object(s.a)(l.x), j = Object(s.a)(l.J), C = Object(s.a)(l.C), w = Object(s.a)(l.g), N = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, _ = Object(s.a)(l.z), P = Object(s.a)(l.A), A = () => async (e, t, {
					apiContext: r
				}) => {
					e(_());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(P(n)), n[0] && e(C(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(P([]))
					}
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r = 3e4, n = 3e5) {
				return async (o, s, a) => new Promise((c, i) => {
					const l = Date.now() + n,
						d = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > l) return d();
							const n = Date.now();
							await e(o, s, a);
							const f = await t(s);
							if (f) c();
							else if (!1 === f) i();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < l ? setTimeout(u, r) : d()
							}
						};
					u()
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = r.n(l);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(c.f)()), t && t()
				}
			}))((function(e) {
				return o.a.createElement(i.a, {
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
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = r.n(c);

			function l(e) {
				return o.a.createElement("div", {
					className: Object(s.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, o.a.createElement("div", {
					className: i.a.title
				}, e.children), o.a.createElement(a.a, {
					className: i.a.closeIcon
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
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/selectors/crypto/points.ts"),
				d = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(d);
			const f = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(s.b)(f)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					s = `${c.a.assetPath}/${n}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return o.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: s
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				l = r("./src/reddit/components/Governance/Token/index.tsx"),
				d = r("./src/reddit/helpers/governance/tokens.ts"),
				u = r("./src/reddit/selectors/crypto/points.ts"),
				f = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				m = r.n(f);
			const p = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(s.b)(p)((function(e) {
				var t;
				return o.a.createElement("div", {
					className: Object(c.a)(m.a.container, e.className, {
						[m.a.small]: e.small
					})
				}, o.a.createElement(l.a, {
					className: Object(c.a)(m.a.token, {
						[m.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(d.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less": function(e, t, r) {
			e.exports = {
				currentBalance: "_31YIsY0F-7Am4I-6rVcdRl",
				currentBalanceAmount: "QasuEd0D0OPCzr5tiNWoL"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/gov.ts"),
				c = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				i = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				l = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const t = Object(s.e)(t => Object(a.e)(t, e));
				return o.a.createElement("div", {
					className: l.a.currentBalance
				}, d._("Current balance:", null, {
					hk: "2NDvrq"
				}), o.a.createElement(c.a, {
					className: l.a.currentBalanceAmount,
					amount: t,
					subredditId: e.subredditId,
					small: !0,
					grey: !0
				}))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/ApprovalOverview.m.less": function(e, t, r) {
			e.exports = {
				container: "iHeGfSMD047UMJ8IkWz2u",
				conversion: "a3g17spBhah_YyJI7mc-3",
				pointsAmount: "_11KtSJz2h4aka6VsafuQ3R",
				pointsInput: "V9clGzJDp6zYgU31fMdBz",
				pointsInputIcon: "_3BGDBp-UP3YUqQZnLXxUqy",
				chevron: "_1Gc-uhs0m7L6lbZUByd5TA",
				coinsAmount: "_387Fx7vMvuisP3VY384Onr",
				coinIcon: "_6bSlw5Jt7TtI9ZH51p1sk",
				loadingIcon: "_14Bkd_7tmZru1x5Xz8FCgw",
				coinsLabel: "bDx6cRzwmqKPpCa4NEz8N",
				disclaimer: "_3rU3k8pLvpOtP10J2qNuW0",
				errorLoading: "tjsA8HZ0ZJPI4IgDJfFN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/IntroModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3va4DfMbgi39K8v8e7XzBL",
				sectionsContainer: "_3IYdgzvoeBckczOsjIrvUV",
				section: "_3AYd7ttBeoicIbUPBOr6Gu",
				sectionImage: "_3kWSfcBjwEMZSnwmZAky3V",
				sectionContent: "_3X_QYUSj-aUvtllgIfMT5X",
				sectionHeader: "_3Y2cSOzDWO_1AmPu4f-a-7",
				sectionDescription: "_2HbxTBRRFyP2zedS6IGQZ0",
				footer: "_1iq-vJGkFodfb04oEf1g_W"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/actions/gold/productOffers.ts"),
				c = r("./src/reddit/hooks/useThunkDispatch.ts"),
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				l = r("./src/reddit/selectors/crypto/points.ts"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				u = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx");
			const m = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M12.7 27.6c6.7 0 12-1.6 12-3.6v16.1c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6v-16c0 1.9 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M21.9 26.3a29 29 0 01-8.6 1.3c.2 3.5.3 10.8.2 16 3 0 5.8-.4 7.8-1 .3-4.6 0-11.6.6-16.3z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M2.8 30.1c-.1-.7-.2-1.5.3-2 .6-.3 1.4 0 1.8.5 1.8 1.7 1.3 2.6 1.4 5v5.1c0 1.4-.6 1.8-1.7.6C3.4 38 3.3 37 3.2 35.6c-.3-2 0-3.6-.4-5.5z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M24.7 24c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6 0-1.9 5.4-3.5 12-3.5 6.7 0 12 1.6 12 3.5z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M24.7 24.3c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM24.7 32.2c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M24.7 24.3l-.4-.6-1.2-.8c-1.2-.5-2.8-1-4.7-1.2a35.2 35.2 0 00-13 .8c-1 .3-2 .7-2.8 1.2-.4.2-.7.5-.7.6V29l.2 6.8v4.4l.7.4 2.3.8 2.6.5a37.8 37.8 0 0010.5 0c1.6-.2 3.3-.6 4.5-1.2l.4-.2.2-.2.1-.1v-.3l.2-2.5.2-4.7.5-8.3a60 60 0 012 15.4l-.1.4a3 3 0 01-.1.6l-.2.6-.3.4-.7.7a4 4 0 01-.6.4l-.6.3-2.4.7-4.5.6a45 45 0 01-12.5-1.1l-1.9-.7a5 5 0 01-1.7-1.3 2 2 0 01-.5-1.2v-1-1.8-3.6l-.1-7V24.2l.1-.6c0-.2.2-.4.3-.5.5-.6 1-1 1.5-1.2l1.6-.7a34.3 34.3 0 0111.8-1.1c1.7.2 4 .6 6 1.4 1 .4 2 .9 2.5 1.4.3.3.6.5.7.8l.1.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M12.7 44.4C6.4 44.4 0 42.9 0 40.1V24.3c0-2.8 6.4-4.2 12.7-4.2 6.4 0 12.8 1.4 12.8 4.2v15.8c0 2.8-6.4 4.3-12.8 4.3zm0-22.8c-7.2 0-11.2 1.8-11.2 2.7v15.8c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V24.3c0-.9-4-2.7-11.3-2.7z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M34.8 7.8c6.6 0 12-1.6 12-3.5v39.4c0 2-5.4 3.6-12 3.6s-12-1.6-12-3.6V4.3c0 2 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M44 6.6a29 29 0 01-8.6 1.2c-.4 13 .6 26.5.2 39.4 3 0 5.8-.4 7.8-1 1-13.2-1.3-26.4.5-39.6z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M24.6 10.1c-.1-.7-.2-1.5.4-2 .5-.3 1.3 0 1.8.5 1.7 1.7 1.6 4.4 1.5 6.9-.3 4.5-.5 9-.4 13.6 0 2.2.7 11.1.5 13.2-.1 1.4-.6 1.8-1.7.6-1.2-1.3-1.3-3.5-1.3-5l-.1-13.2c0-4.9.3-9.8-.7-14.6z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M46.8 4.3c0 2-5.4 3.5-12 3.5s-12-1.6-12-3.5c0-2 5.4-3.5 12-3.5s12 1.5 12 3.5z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M46.8 4.3c0 .6-.3 1.1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 6.7c-.5-.2-1-.6-1.4-1-.4-.3-.8-.8-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 12.2c0 .5-.3 1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 14.6l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 20c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6a48.7 48.7 0 0019 0c.6-.1 1-.3 1.5-.6.5-.2 1-.6 1-1.1zM46.8 28c0 .5-.3 1-.7 1.4l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM46.8 35.8c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M46.8 4.3l-.2-.4-.1-.2-.3-.3c-.5-.4-1.3-.8-2.2-1A35.5 35.5 0 0027.9 2c-1.4.2-2.7.6-3.6 1.2-.4.3-.8.7-.8 1V4.9a2901 2901 0 01.6 21.3v10.6l.1 5.3v1.6c0-.1 0 0 0 0 0-.1 0 0 0 0 .3.2 1 .6 1.7.8 1.2.5 2.6.7 4 1A36.3 36.3 0 0044 44.3a4.1 4.1 0 001.4-.8v.1-1-2.2l.1-8.2c.2-10.6.5-20.3.9-28a163.1 163.1 0 011.4 39v.4l-.2.7-.3.6-.4.4c-.6.5-1.1.8-1.7 1a16 16 0 01-3.3 1 36 36 0 01-15.8-.7c-1-.3-2-.6-3-1.3a3 3 0 01-.5-.7l-.3-.5v-.5-1.5-2.9-5.7L22 12.7V7.9a39290.5 39290.5 0 000-3.5V4c0-.2 0-.4.2-.5l.2-.4.2-.3c.7-.7 1.5-1 2.2-1.4l2.3-.7a33.5 33.5 0 0114 .1c1.6.4 3 1 4 1.5 1.2.6 1.8 1.5 1.7 2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M34.8 48c-6.3 0-12.7-1.5-12.7-4.3V4.3C22 1.5 28.5 0 34.8 0c6.4 0 12.8 1.5 12.8 4.3v39.4c0 2.8-6.4 4.3-12.8 4.3zm0-46.5c-7.3 0-11.2 1.8-11.2 2.8v39.4c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V4.3c0-1-4-2.8-11.3-2.8z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M22.6 47.5c5.6 0 10.1-5.2 10.1-11.6 0-6.4-4.5-11.6-10-11.6-5.7 0-10.2 5.2-10.2 11.6 0 6.4 4.5 11.6 10.1 11.6z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M28.5 30.2c.3.4.7.8 1.2 1 .5.2 1.2-.1 1.2-.7 0-.3-.2-.5-.3-.7-.7-1.1-2.3-3.5-3.8-3.5-1.7.1 1.3 3.4 1.7 3.9z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M16.3 39.8l.2 1.6c0 1 .2 2.1.6 3.3.1.6.3 1.3.7 1.8l.6.5.3.2h3.6c1.4 0 2.8-.4 4-1a10 10 0 003.3-2.9 12.2 12.2 0 000-14.7 9.2 9.2 0 00-2.7-2.1L26 26l-.7-.3a9.7 9.7 0 00-3.3-.4h-1.7l-.8-.1h-.4c-.3.2-.6.7-.7 1.1-.4.9-.6 1.8-.8 2.7l-.3 2.7a14.6 14.6 0 01.2-6l.4-.8.7-.7.6-.2h3.2c2.2 0 4.3.7 6 2 1.6 1.2 2.8 2.8 3.5 4.6a13.9 13.9 0 010 10.4 11 11 0 01-6.5 6.4 9 9 0 01-3.2.4 4046.6 4046.6 0 01-4-.2 2 2 0 01-.9-.7c-.4-.5-.6-1.2-.8-2l-.3-2.1v-3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M19.5 47.5c5.5 0 10-5.2 10-11.6 0-6.4-4.5-11.6-10-11.6-5.6 0-10.2 5.2-10.2 11.6 0 6.4 4.6 11.6 10.2 11.6z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M24.5 46l.5-.5.4-.3.5-.6a11.8 11.8 0 003.4-7.6c0-1.5 0-2.8-.3-3.7-.4-1.6-1.1-3.2-2.1-4.6a10 10 0 00-4-3.2 8.5 8.5 0 00-9.5 2c-2.1 2-3.3 4.8-3.4 7.7A12.6 12.6 0 0012 43c.8 1 1.7 2 2.8 2.7a9 9 0 006.7 1.3c1-.3 2-.7 2.8-1.2-.7.6-1.6 1.2-2.7 1.6-1.2.4-2.5.6-3.8.4a9.2 9.2 0 01-5.6-2.8 12.8 12.8 0 01-3.1-6.8 13.4 13.4 0 01.7-6.9l.3-.7.4-.8.4-.7.2-.3.2-.4c.7-.9 1.4-1.6 2.3-2.3l.6-.4.7-.4.6-.4.4-.1.4-.2.7-.2.7-.2h.8l.7-.1c1 0 2 .1 2.9.4l1.3.5.6.3.6.4c.2 0 .4.2.6.4l.5.4 1 1 .4.5.4.5.4.6.3.5a12.9 12.9 0 011.2 9.5l-.3 1-.3.7-.2.6-.7 1.1-.4.6c0 .2-.2.3-.4.5-.5.7-1 1.2-1.6 1.6l-.7.5-.4.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M19.8 42.7c-3.3 0-6-3-6-6.8 0-3.7 2.7-6.8 6-6.8 1 0 2 .3 2.8.7.5.4.7 1.1.4 1.7-.2.6-.9.9-1.4.5-.6-.3-1.2-.4-1.8-.4-2 0-3.8 2-3.8 4.3 0 2.4 1.7 4.3 3.8 4.3 1.4 0 2.6-.7 3.3-2 .3-.6 1-.8 1.5-.4.5.3.7 1 .3 1.7-1 2-3 3.2-5 3.2z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M20.8 40.6c1.6-.2 3-1.4 4-2.7l-.2-.1c-.5-.4-1.2-.2-1.5.4-.7 1.3-2 2-3.3 2-1.5 0-2.9-1-3.5-2.5.8 2 2.7 3.2 4.5 2.9z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M16.2 40.3a6.7 6.7 0 01.2-8 4.8 4.8 0 016.6-.7c.3-.7 0-1.4-.4-1.8-.9-.4-1.8-.7-2.8-.7-3.3 0-6 3-6 6.8s2.7 6.8 6 6.8c1 0 2.1-.3 3-.9-2.5 1.3-5.1.5-6.6-1.5z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M12 30.5c-.9 1.7-1.3 4-1.3 5.9 0 2.8 2.2 9 8 10 .4.1.8-.1.8-.5l-.1-.3c-.7-1-2.2-1.1-3.3-1.8-2-1.3-3-2.8-3.6-4.8-.7-2.2-.8-4.6 0-6.7a7.5 7.5 0 015.1-4.4c.9-.2 1.9-.2 2.5-.8.7-.7-.4-1.2-1.2-1.2-1.8 0-5 1-6.9 4.6z",
					fill: "#fff"
				})),
				p = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M44.35 29.16V43.3l-17.62 3.77V32.93l17.62-3.77z",
					fill: "#D0DDDF"
				}), o.a.createElement("path", {
					d: "M26.73 32.93v14.15L3.9 42.65V28.5l10.05-12.68 12.8 17.11z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M8.39 21.76a55.6 55.6 0 01-3.25 4.32c-.5.59-1.04 1.17-1.35 1.87-.32.7-.37 2.28.07 2.9.72-.44 1.11-1.4 1.63-2.07.64-.82 1.53-1.75 2.2-2.54 1.83-2.18 3.58-4.67 5.4-6.85.23-.26.54-.53.88-.57.37-.05.67.34.77.48 2.99 4.2 5.96 7.9 8.98 11.56a66.11 66.11 0 003.01 3.41c.4-.58.44-1.37.24-2.06s-.58-1.3-.97-1.9l-3.96-6.17a46.92 46.92 0 00-2.39-3.49 46.77 46.77 0 00-3.39-3.76c-1.42-1.47-2.62-2.57-4.05-.57-1.29 1.8-2.55 3.63-3.82 5.44z",
					fill: "#D0DDDF"
				}), o.a.createElement("path", {
					d: "M13.55 9.43L30.9 5.72a2.1 2.1 0 012.12.81L46.35 24.7c.71.96.55 2.32-.36 3.08l-1.64 1.38-17.62 3.77 1.64-1.37a2.28 2.28 0 00.36-3.09L15.18 10.04a1.58 1.58 0 00-1.63-.61z",
					fill: "#EA0027"
				}), o.a.createElement("path", {
					d: "M41.72 27.4c-1.9.4-3.81.76-5.73 1.1l-1.89.33-3.2.54c-.57.1-1.16.2-1.68.46a6.2 6.2 0 00-2.05 1.99c-.1.13-.2.29-.15.45.07.24.4.23.65.18 4.6-.98 9.18-2.09 13.73-3.33 1.17-.32 3.23-.77 3.9-1.95.53-.94-.45-.65-.98-.45-.84.31-1.72.5-2.6.68z",
					fill: "#A1000A"
				}), o.a.createElement("path", {
					d: "M28.73 28.47c.71.97.55 2.32-.36 3.09l-1.64 1.37-12.8-17.11L3.9 28.5l-1.6-1.87a2.6 2.6 0 01-.06-3.28L12.65 10a1.58 1.58 0 012.53.04l13.55 18.43z",
					fill: "#EA0027"
				}), o.a.createElement("path", {
					d: "M2.22 23.34c.24-.55 3.56-4.9 7.41-9.93l1.47-1.91.74-.97.37-.48.19-.24a1.93 1.93 0 01.87-.64c.25-.08.42-.1.63-.15l1.17-.26 2.29-.51c3-.67 5.7-1.28 7.64-1.74l4.22-.99 1.07-.24.55-.13a2.63 2.63 0 012.56.9l.1.13.1.12.16.22 5.5 7.3 5.55 7.44 1.39 1.86.69.93a2.99 2.99 0 01.65 1.34 3.11 3.11 0 01-.87 2.9l-.14.13-.11.1-.22.18-.44.37-.43.37-.12.1-.02.02.05 8.1.02 6.39-9.68 2.08L26.74 48l-12.21-2.46-11.3-2.34.06-4.63.06-3.67.14-6.25-1.05-1.28c-.18-.23-.33-.4-.51-.65a2.9 2.9 0 01.1-3.54 2.8 2.8 0 00-.14 2.8c.23.47.63.8 1 1.19l.58.59.64.66.2 3.62.18 3.66.14 3.59L4.7 41l.02.83v.05l.01.01v.02l.02.03h.04l.01-.01h.06l.26.05 1 .18 1.84.33c1.14.21 2.11.4 2.87.57l8.3 1.82 7.6 1.63 9.01-1.82 8.25-1.7.02-14 1.48-1.25.32-.28a1.85 1.85 0 00.57-.93 1.9 1.9 0 00-.17-1.4c-.11-.2-.3-.44-.47-.67l-.5-.68-3.99-5.37-7.5-10.1-.9-1.2-.22-.3a1.66 1.66 0 00-.66-.52 1.56 1.56 0 00-.83-.12L31 6.2l-.18.04-1.42.31-5.5 1.2-10.36 2.17c-.12.04-.24.1-.34.18-.11.08-.18.18-.32.35l-.76.95-1.65 2.03-3.44 4.17a712.42 712.42 0 01-4.81 5.74z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M26.74 47.79l-.14-.03-23.4-4.54V28.76l-1.42-1.68a3.31 3.31 0 01-.09-4.16L12.11 9.57c.33-.41.79-.7 1.3-.82l17.35-3.71c1.06-.22 2.16.2 2.8 1.08L46.9 24.29a2.98 2.98 0 01-.47 4.03l-1.4 1.16v14.39l-18.3 3.92zM4.58 42.08l22.14 4.3 16.95-3.63V28.83l1.88-1.58c.63-.53.75-1.47.26-2.14L32.46 6.95c-.33-.45-.9-.67-1.43-.55L13.7 10.1a.88.88 0 00-.51.33L2.77 23.78c-.55.7-.53 1.71.05 2.4l1.76 2.06v13.84z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M19.17 38.34a3.95 3.95 0 01-2.35 2.42c-1.17.43-2.58.29-3.65-.25l-.4-.2-.36-.24c-.23-.17-.47-.33-.66-.53-.2-.2-.4-.39-.58-.6-.16-.21-.31-.43-.46-.66a8.9 8.9 0 01-.68-1.44 6.35 6.35 0 01-.28-1.61l.15-.1.89 1.08c.32.34.6.72.95 1.02.64.67 1.4 1.22 2.21 1.61.81.41 1.73.6 2.62.46.9-.16 1.73-.58 2.5-1.1l.1.14z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M18.11 36.14c.44.35.73.65.99.9l.66.67.61.65c.24.25.54.52.92.92-.42.36-.93.48-1.45.43a2.33 2.33 0 01-1.4-.71c-.37-.4-.6-.9-.66-1.39-.06-.5.02-1 .33-1.47zM6.7 31.23c.05-.8.31-1.54.85-2.2.25-.33.63-.61 1.09-.82a2.44 2.44 0 011.55-.07c.26.06.45.2.68.3.18.13.37.26.53.42a4.38 4.38 0 011.32 3.22c-.67-.44-1.19-.92-1.7-1.33a4.12 4.12 0 00-1.46-.87h-.12c-.09-.04-.17.01-.27 0-.2.05-.44.1-.7.26-.52.27-1.08.7-1.77 1.1zM17.37 33.14c.05-.8.32-1.54.85-2.2.26-.33.64-.62 1.1-.82a2.44 2.44 0 011.54-.07c.26.06.45.19.68.3.18.13.38.26.53.4a4.38 4.38 0 011.32 3.23c-.67-.44-1.18-.92-1.69-1.33a4.11 4.11 0 00-1.47-.87h-.12c-.08-.03-.17.01-.27 0-.2.05-.44.11-.7.26-.52.27-1.08.7-1.77 1.1zM40.82 18.12l-3.9-5.23-16.81 3.6 3.9 5.23 16.8-3.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M29.38 22.86c4.52 0 8.18-5 8.18-11.17S33.9.52 29.38.52s-8.18 5-8.18 11.17 3.66 11.17 8.18 11.17z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M24.7 6.5c-.27.44-.57.9-1.04 1.11-.48.21-1.17.01-1.25-.5-.04-.27.1-.53.22-.77.6-1.11 1.85-3.6 3.35-3.72 1.67-.13-.97 3.38-1.27 3.88z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M34.5 15.46c.12.16.22 1.35.12 2.94-.06.79-.15 1.68-.38 2.59-.12.45-.27.9-.53 1.34a2.1 2.1 0 01-.54.62 1.4 1.4 0 01-.82.29c-1.08.05-2.01.1-2.7.16a6.23 6.23 0 01-2.09-.12 7.2 7.2 0 01-2.03-.81 9.84 9.84 0 01-3.16-3.1 14.78 14.78 0 01-2.2-8.4 14.29 14.29 0 012.05-7.06 8.88 8.88 0 012.61-2.66 8.13 8.13 0 013.4-1.2C28.8-.02 29.4 0 29.87.02l1.5.06.36.02c.07 0 .2 0 .3.02l.3.06c.4.13.72.42.95.77.35.56.47 1.07.58 1.56.2.98.25 1.89.27 2.75.01.87-.02 1.68-.09 2.45-.23-.69-.47-1.5-.74-2.38-.27-.86-.55-1.78-.9-2.56a4.5 4.5 0 00-.43-.73l-.1-.1c-.04 0-.07 0-.1.02-.01 0 .01.01-.04.02l-.3.02c-.79.06-1.45.06-1.91.02a5.96 5.96 0 00-4.27 1.12 8.2 8.2 0 00-2.66 3.6 13.5 13.5 0 00-.54 8.43c.67 2.61 2.13 4.83 4.02 6.07.95.62 1.99.96 3 1l3.25-.04a.5.5 0 00.36-.15c.13-.12.25-.3.35-.48.42-.8.78-2.2 1.02-3.43s.38-2.32.43-2.68z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M32.65 23.23c4.52 0 8.18-5 8.18-11.16C40.83 5.9 37.17.9 32.65.9s-8.18 5-8.18 11.17c0 6.16 3.66 11.16 8.18 11.16z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M28.55 21.75c-.12-.04-.7-.38-1.37-1.1-.66-.72-1.4-1.8-1.95-3.09-.55-1.28-.9-2.75-1.05-4.1-.14-1.36-.12-2.61-.02-3.5.14-1.57.55-3.18 1.29-4.71a10 10 0 013.37-3.95c.74-.51 1.6-.85 2.5-1.06.9-.22 1.85-.18 2.74-.02.92.16 1.75.56 2.52 1.01.36.25.74.5 1.06.8.16.14.33.27.48.43l.45.47c1 1.12 1.74 2.44 2.24 3.8.51 1.38.8 2.81.88 4.23.18 2.83-.4 5.65-1.67 7.98a10.62 10.62 0 01-2.45 3.02c-.97.82-2.1 1.4-3.27 1.65a6.35 6.35 0 01-3.34-.17 7.47 7.47 0 01-2.56-1.5c.77.35 1.72.72 2.74.83 1.03.12 2.1-.04 3.02-.42.93-.38 1.71-.97 2.32-1.55l.43-.43.36-.42c.24-.25.4-.51.57-.7a11.8 11.8 0 002.32-5.6c.14-1 .2-2 .12-2.98-.01-.5-.1-.97-.17-1.46-.1-.47-.18-.95-.33-1.4-.26-.92-.64-1.8-1.1-2.59A8.91 8.91 0 0037 3.1a6.23 6.23 0 00-4.57-1.81 6.4 6.4 0 00-4.18 1.94 10.18 10.18 0 00-2.38 3.78 15.23 15.23 0 00-.63 8.09c.23 1.19.7 2.8 1.4 4.1a10 10 0 001.1 1.66c.15.23.34.4.47.54l.33.35z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M33.13 18.62c-2.69 0-4.87-2.94-4.87-6.55 0-3.62 2.18-6.56 4.87-6.56.77 0 1.53.25 2.21.72.44.3.6 1.02.39 1.6-.23.59-.76.82-1.2.52-.43-.3-.9-.46-1.4-.46-1.71 0-3.1 1.88-3.1 4.18s1.39 4.17 3.1 4.17c1.08 0 2.07-.74 2.64-1.99.25-.56.8-.73 1.21-.39.42.34.55 1.08.3 1.64-.9 1.96-2.45 3.12-4.15 3.12z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M36.98 13.86a.69.69 0 00-.84-.06c.13.2.25.44.22.91-.04.48-.67 1.3-1.7 1.84-1.07.54-2.8.2-3.78-1.63a5.01 5.01 0 01-.85-2.85c0-2.3 1.39-4.18 3.1-4.18.5 0 .97.16 1.4.46.44.3.97.07 1.2-.52.23-.6.03-1.36-.44-1.64-.06.26-.44.41-.8.41-.94.01-1.73-.78-3.27.31-2.46 2.1-3.21 5.37-2.18 8.7.87 1.81 2.37 3.01 4.09 3.01 1.7 0 3.25-1.16 4.14-3.12.26-.56.13-1.3-.29-1.64z",
					fill: "#C08D41"
				}), o.a.createElement("path", {
					d: "M26.69 6.37c-.74 1.7-1.1 4-1.1 5.93 0 2.81 1.8 9 6.56 10.17.27.07.62-.22.6-.57 0-.1-.05-.2-.1-.3-.58-1.07-1.8-1.14-2.67-1.82-1.68-1.31-2.44-2.85-2.92-4.84-.53-2.18-.6-4.58.06-6.7.66-2.13 2.35-3.93 4.12-4.44.7-.2 1.48-.24 2-.85.59-.7-.36-1.24-.97-1.24-1.44 0-3.99.98-5.58 4.66z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M44.95 24.16l-16.56 3.17-4.38-5.61 16.8-3.6 4.14 6.04z",
					fill: "#EA0027"
				}), o.a.createElement("path", {
					d: "M23.92 21.97l-4.21-5.63 1.82-.39.1.45-1.12.24 3.6 4.82 16.3-3.5-.5-.67.37-.28.94 1.26-17.3 3.7zM3.36 28.07l10.27-12.5.33-.4.29.4 12.48 17.36-13.1-16.88.61.01-9.81 12.87-1.07-.86z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M26.72 32.89l4.37-1.13 4.38-1.08c1.46-.35 2.9-.78 4.38-1.03s2.97-.47 4.5-.54l.01.1c-1.41.56-2.86.97-4.32 1.34-1.45.39-2.95.58-4.42.86l-4.44.8-4.44.77-.02-.1z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M28.73 28.47a60.07 60.07 0 01-3.81-4.29c-.62-.73-1.2-1.48-1.79-2.23l-1.72-2.28c-1.14-1.54-2.22-3.1-3.27-4.7a59.78 59.78 0 01-2.96-4.93A59.43 59.43 0 0119 14.32c1.2 1.48 2.38 2.98 3.5 4.52l1.67 2.33c.53.79 1.09 1.57 1.6 2.37a60.42 60.42 0 012.96 4.93z",
					fill: "#F99"
				}), o.a.createElement("path", {
					d: "M41.5 38.6c-.02.42-.05.85-.27 1.2-.2.33-.54.54-.87.73a21.6 21.6 0 01-3.77 1.97c-2.46.89-5.32.93-7.32 2.62 4.51-.46 8.87-1.87 13.19-3.27a.72.72 0 00.34-.18c.12-.14.12-.36.1-.55-.19-3.18-.13-6.38.18-9.56-.45-.02-1.63-.13-1.9.3-.23.37.17 1.67.2 2.11.15 1.54.19 3.09.12 4.63z",
					fill: "#fff"
				})),
				h = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), o.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4l4.7-1.5 8.6-3c.4 0 .2-.7-.3-.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.3-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), o.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1a36357.5 36357.5 0 014 6.7c.3.2.4.7.7 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.6 1.4 2 .6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.6 2.6 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), o.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.2 4.2 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3a130162.5 130162.5 0 01-12.3-2.1l-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4l-3.7-.7-6-1-6-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2.1 0l.2-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5a10672 10672 0 007.4 1.3l6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6l-14-2.5-2.1-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8l1.6 1.9 4.2 4.7 1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1a589887.3 589887.3 0 01-9.5 13L35 45.8l-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1v-.2c0 .2 0 .4.2.6 0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), o.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6.3 0 .6.5.7.7l1.3 1.6 4 4.8c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6a9462 9462 0 01-7.6-1.4l-6-1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1c.1-.2.4-.3.6-.3l1.6-.7 5.2-2.3 10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var b = r("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/IntroModal/index.m.less"),
				v = r.n(b);

			function g(e) {
				const {
					subreddit: t,
					pointsName: r
				} = e;
				return o.a.createElement("div", {
					className: v.a.container
				}, o.a.createElement(u.a, {
					colored: !0
				}, d.fbt._("Convert your Community Points into Reddit Coins", null, {
					hk: "2dqZYD"
				})), o.a.createElement("div", {
					className: v.a.sectionsContainer
				}, o.a.createElement(E, {
					image: o.a.createElement(m, null),
					header: d.fbt._("Convert", null, {
						hk: "4ytE6"
					}),
					description: d.fbt._("Choose how many Reddit Coins you want to get by converting your {pointsName}.", [d.fbt._param("pointsName", r)], {
						hk: "4gNGWI"
					})
				}), o.a.createElement(E, {
					image: o.a.createElement(p, null),
					header: d.fbt._("Exclusive to the community", null, {
						hk: "4kPlC3"
					}),
					description: t ? d.fbt._("Coins you convert from {pointsName} can only be used in {communityName}.", [d.fbt._param("pointsName", r), d.fbt._param("communityName", t.displayText)], {
						hk: "30CKZW"
					}) : d.fbt._("Coins you convert from Community Points can only be used in the community in which you bought them.", null, {
						hk: "1BcyV1"
					})
				}), o.a.createElement(E, {
					image: o.a.createElement(h, null),
					header: d.fbt._("Award", null, {
						hk: "3TbqKH"
					}),
					description: d.fbt._("Use Coins to award your favorite posts and comments, to highlight them and to reward the author.", null, {
						hk: "YNrVQ"
					})
				})), o.a.createElement("div", {
					className: v.a.footer
				}, o.a.createElement(f.l, {
					onClick: e.onContinue
				}, d.fbt._("Convert {pointsName}", [d.fbt._param("pointsName", r)], {
					hk: "4CnbBc"
				}))))
			}

			function E(e) {
				return o.a.createElement("div", {
					className: v.a.section
				}, o.a.createElement("div", {
					className: v.a.sectionImage
				}, e.image), o.a.createElement("div", {
					className: v.a.sectionContent
				}, o.a.createElement("h4", {
					className: v.a.sectionHeader
				}, e.header), o.a.createElement("p", {
					className: v.a.sectionDescription
				}, e.description)))
			}
			var y = r("./node_modules/bignumber.js/bignumber.js"),
				O = r.n(y),
				x = r("./node_modules/react-redux/es/index.js"),
				j = r("./node_modules/reselect/es/index.js"),
				C = r("./src/reddit/actions/gold/econPurchase.ts"),
				w = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				N = r("./src/reddit/actions/governance/index.ts"),
				_ = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/actions/toaster.ts"),
				A = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				M = r("./src/reddit/endpoints/governance/crypto.ts"),
				I = r("./src/reddit/helpers/crypto/transactions.ts"),
				S = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				k = r("./src/reddit/helpers/trackers/crypto.ts"),
				T = r("./src/reddit/hooks/useTracking.ts"),
				R = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/selectors/gold/econPurchase.ts"),
				z = r("./src/reddit/selectors/gold/productOffers.ts"),
				D = r("./src/reddit/selectors/gov.ts"),
				B = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				U = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx");

			function F(e) {
				return o.a.createElement(U.b, {
					values: [
						[Object(U.a)(), e.contractAddress],
						[d.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"]
					]
				})
			}
			var G = r("./src/reddit/controls/FormFields/index.tsx"),
				V = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				W = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				H = r("./src/reddit/components/Governance/Token/index.tsx"),
				q = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				J = r("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/ApprovalOverview.m.less"),
				Q = r.n(J);
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function X(e, t) {
				return e ? new O.a(t || 0).dividedToIntegerBy(e).toNumber() : 0
			}

			function Z(e) {
				const {
					pointsAmount: t,
					price: r,
					pointsBalance: n,
					pointsName: s,
					pricePending: a,
					subreddit: c,
					tokenConversion: i
				} = e, l = new O.a(t).dividedBy(i), d = X(r, t);
				return o.a.createElement("div", {
					className: Q.a.container
				}, o.a.createElement("div", {
					className: Q.a.conversion
				}, o.a.createElement("div", {
					className: Q.a.pointsAmount
				}, o.a.createElement(G.c, {
					className: Q.a.pointsInput,
					disabled: !r,
					type: "number",
					label: `${c.displayText} ${s}`,
					value: l,
					placeholder: "0",
					onChange: t => (t => {
						const n = t && new O.a(t).multipliedBy(i).toFixed(0),
							o = X(r, n);
						e.onChange(n, o)
					})(t.currentTarget.value),
					onBlur: () => {
						if (!t) return void e.onChange("", 0);
						const o = O.a.maximum(O.a.minimum(t, n), 0).toFixed(0),
							s = X(r, o),
							a = s ? new O.a(s).multipliedBy(r).toFixed(0) : "";
						e.onChange(a, s)
					}
				}), o.a.createElement(H.a, {
					className: Q.a.pointsInputIcon,
					subredditId: c.id
				})), o.a.createElement("div", {
					className: Q.a.chevron
				}, o.a.createElement("svg", {
					width: "8",
					height: "24",
					viewBox: "0 0 8 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M1 1L7 12L1 23",
					stroke: "#D3D6DA",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))), o.a.createElement("div", {
					className: Q.a.coinsAmount
				}, o.a.createElement(W.a, {
					className: Q.a.coinIcon
				}), !r && a ? o.a.createElement(V.a, {
					className: Q.a.loadingIcon,
					sizePx: 5
				}) : d, o.a.createElement("div", {
					className: Q.a.coinsLabel
				}, Y._("Reddit Coins", null, {
					hk: "4n6R5v"
				})))), o.a.createElement(q.a, {
					subredditId: c.id
				}), r || a ? o.a.createElement("div", {
					className: Q.a.disclaimer
				}, Y._("Note: converted Coins will be only eligible for use in the community you've earned points. You'll see your updated coin balance when giving awards in this community.", null, {
					hk: "1AgEx3"
				})) : o.a.createElement("div", {
					className: Q.a.errorLoading
				}, Y._("There was an error loading the conversion price. Please try again later.", null, {
					hk: "NYpbS"
				})))
			}
			const K = 100;

			function $(e) {
				var t, r;
				const {
					subreddit: s,
					pointsDetails: a
				} = e, l = a.contractAddress;
				if (!l) throw new Error("No community points contract address");
				const u = s.id,
					f = {
						subredditId: u
					},
					{
						pointsBalance: m,
						productOffer: p,
						productOffersPending: h,
						subredditLockedCoins: b
					} = Object(x.e)(Object(j.c)({
						pointsBalance: e => Object(D.e)(e, f),
						productOffer: e => {
							var t;
							return null === (t = Object(z.i)(e, {
								subredditId: u,
								type: i.c.CoinConversion
							})) || void 0 === t ? void 0 : t[0]
						},
						productOffersPending: z.h,
						subredditLockedCoins: e => Object(L.a)(e, f)
					})),
					v = null === (r = null === (t = null == p ? void 0 : p.pricePackages) || void 0 === t ? void 0 : t[0]) || void 0 === r ? void 0 : r.price,
					g = Object(c.a)(),
					E = Object(T.a)(),
					[y, U] = Object(n.useState)(""),
					[G, V] = Object(n.useState)(0);
				Object(n.useEffect)(() => {
					if (v && !y) {
						const e = O.a.minimum(new O.a(v).multipliedBy(K), m).toFixed(0);
						U(e), V(new O.a(e).dividedBy(v).toNumber())
					}
				}, [v]);
				const W = a.displayConversion,
					H = e => {
						E(Object(k.c)("coins", u, new O.a(y).dividedBy(W).toFixed(), e))
					},
					q = () => g(Object(_.f)());
				return o.a.createElement(B.a, {
					approvalOverview: o.a.createElement(Z, {
						pointsAmount: y,
						onChange: (e, t) => {
							U(e), V(t)
						},
						pointsBalance: m,
						pointsName: a.name,
						price: v,
						pricePending: !v && h,
						subreddit: s,
						tokenConversion: W
					}),
					approvalDetails: o.a.createElement(F, {
						contractAddress: l
					}),
					onClose: q,
					onTransactionSuccess: async e => {
						q(), g(function() {
							const e = Object(P.e)(d.fbt._("Processing your conversion...", null, {
								hk: "4dA09t"
							}), R.b.SuccessCommunity);
							return e.duration = 15e3, Object(P.f)(e)
						}()), async function(e, t, r, n, o) {
							await Object(S.a)(t, r);
							const s = Object(C.a)(n.id, n.name, {
								force: !0
							});
							await e(Object(A.a)(s, async e => {
								const t = Object(L.a)(e(), {
									subredditId: n.id
								});
								return o < t || null
							})), e(Object(N.h)({
								subredditId: n.id
							}))
						}(g, a, e.hash, s, b).then(() => {
							E(Object(k.d)("coins", u, new O.a(y).dividedBy(W).toFixed())), g(function() {
								const e = Object(P.e)(d.fbt._("Your Coins are ready!", null, {
									hk: "7ewJ6"
								}), R.b.SuccessCommunityGreen);
								return e.duration = 15e3, Object(P.f)(e)
							}())
						}).catch(e => {
							H(e.toString()), g(Object(P.f)(Object(P.e)(d.fbt._("There was an error while purchasing your Coins. Please try again later", null, {
								hk: "nEHTT"
							}), R.b.Error)))
						})
					},
					onTransactionFailure: H,
					subredditId: u,
					transaction: G ? async () => {
						const e = await g(Object(w.b)(p, G, {
							subredditId: u,
							userCoinsInSubreddit: {
								subredditId: u
							}
						}));
						if (!e) throw new Error("Failed to get econ order for coin conversion");
						return Object(I.c)(l, y, e)
					} : null,
					transactionIntent: Object(M.d)(u),
					transactionIsBlockedOnIOS: !0
				})
			}
			t.default = Object(s.a)((function() {
				const e = Object(c.a)(),
					{
						pointsDetails: t,
						subreddit: r
					} = Object(l.c)(),
					s = null == r ? void 0 : r.id;
				if (!t || !r || !s) throw new Error("Expected subreddit id");
				Object(n.useEffect)(() => {
					e(Object(a.d)(i.c.CoinConversion, s))
				}, [e, s]);
				const [d, u] = Object(n.useState)(!0);
				return d ? o.a.createElement(g, {
					onContinue: () => u(!1),
					pointsName: t.name,
					subreddit: r
				}) : o.a.createElement($, {
					subreddit: r,
					pointsDetails: t
				})
			}))
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
				return y
			})), r.d(t, "c", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(o),
				a = r("./node_modules/raf/index.js"),
				c = r.n(a),
				i = r("./node_modules/react/index.js"),
				l = r.n(i),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				p = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = r.n(p);
			var b = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return l.a.createElement("div", {
						className: h.a.wrapper
					}, l.a.createElement(m.a, {
						className: h.a.titleRow
					}, r), l.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), l.a.createElement(m.a, {
						className: h.a.buttonRow
					}, l.a.createElement(f.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = r("./src/reddit/controls/ErrorText/index.m.less"),
				g = r.n(v);
			class E extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
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
					c()(() => {
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
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(g.a.wrapper, t)
					}, l.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), a && l.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, s), c && l.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: s = []
					} = e, a = s.length ? s : o ? [o] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(E, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(y, {
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
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/controls/ErrorText/index.tsx"),
				i = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(d);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = a.a.input("input", u.a),
				p = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: a,
						...c
					} = e, i = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: p
					}, o.a.createElement(m, f({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, c)), e.label && o.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: a,
						className: c,
						redditStyle: i,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: p
					}, o.a.createElement(m, f({
						innerRef: n
					}, l)), e.label && o.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				v = e => o.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
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
						errors: s = []
					} = this.props;
					return e.map((e, a) => o.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!s[a],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, o.a.createElement(l.b, {
						className: u.a.trash
					})), !!s[a] && o.a.createElement(c.b, {
						className: u.a.errorText
					}, s[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: a,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && r.length >= n) && !c;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && i && o.a.createElement(v, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && i && o.a.createElement(v, {
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
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return v
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return P
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				l = r("./src/redditGQL/operations/CreateEconOrder.json"),
				d = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				p = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				h = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				b = r("./src/lib/makeGqlRequest/index.ts");
			const v = (e, t, r, n, s) => {
				const {
					premium: a,
					...c
				} = s, i = (null == a ? void 0 : a.pricePackage) || r.pricePackages[0], d = new o.a(i.price).multipliedBy(n).toFixed();
				return Object(b.a)(e, {
					...l,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: d,
							productsCount: n.toString(),
							...c
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const E = (e, t, r, n) => Object(b.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				y = (e, t, r, n) => Object(b.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(b.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, o) => Object(b.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				j = (e, t, r, n) => Object(b.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(b.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				w = (e, t, r, n, o) => Object(b.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				N = (e, t) => Object(b.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				_ = e => Object(b.a)(e, {
					...h,
					variables: {}
				}),
				P = (e, t) => Object(b.a)(e, {
					...p,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");

			function o(e, t) {
				const [r, o] = Object(n.useState)(e);
				return [r, e => {
					t.current && o(e)
				}]
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, r) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = r.n(a);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), o.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), o.a.createElement("path", {
				className: Object(s.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), o.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), o.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
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
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(a);
			const i = e => o.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var a = (e = s, t) => {
				switch (t.type) {
					case o.nb: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				subredditLockedCoins: a
			})
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(n.a)({
				features: {
					econPurchase: o.a
				}
			});
			const s = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, a;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (a = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(r)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const r = l(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				u = (e, t) => {
					var r;
					const n = d(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				f = e => {
					const t = l(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(n.a)(f, c.p, (e, t) => m(e, t) || null),
				h = Object(n.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				v = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(v, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return f
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const o = [],
				s = {},
				a = (e, t) => {
					const r = m(e, t);
					if (r) return r.mainHeader
				},
				c = (e, t) => {
					const r = m(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				i = (e, t) => {
					const r = m(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
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
				f = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				m = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/redditGQL/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"d0a53057e3e8"}')
		},
		"./src/redditGQL/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.e5b171328fc44c95ee94.js.map