// https://www.redditstatic.com/desktop2x/CryptoLibEthers.c693308c5ad86d73dff2.js
// Retrieved at 12/16/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(r, t, e) {
			"use strict";
			e.d(t, "a", (function() {
				return f
			})), e.d(t, "e", (function() {
				return d
			})), e.d(t, "d", (function() {
				return m
			})), e.d(t, "b", (function() {
				return E
			})), e.d(t, "c", (function() {
				return b
			}));
			var n = e("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = e("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = e("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				i = e("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const u = new(e("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function a(r) {
				Object(n.l)(r, 20) || u.throwArgumentError("invalid address", "address", r);
				const t = (r = r.toLowerCase()).substring(2).split(""),
					e = new Uint8Array(40);
				for (let n = 0; n < 40; n++) e[n] = t[n].charCodeAt(0);
				const o = Object(n.a)(Object(s.a)(e));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const c = {};
			for (let v = 0; v < 10; v++) c[String(v)] = String(v);
			for (let v = 0; v < 26; v++) c[String.fromCharCode(65 + v)] = String(10 + v);
			const l = Math.floor((h = 9007199254740991, Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10));
			var h;

			function g(r) {
				let t = (r = (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00").split("").map(r => c[r]).join("");
				for (; t.length >= l;) {
					let r = t.substring(0, l);
					t = parseInt(r, 10) % 97 + t.substring(r.length)
				}
				let e = String(98 - parseInt(t, 10) % 97);
				for (; e.length < 2;) e = "0" + e;
				return e
			}

			function f(r) {
				let t = null;
				if ("string" != typeof r && u.throwArgumentError("invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== r.substring(0, 2) && (r = "0x" + r), t = a(r), r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== r && u.throwArgumentError("bad address checksum", "address", r);
				else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (r.substring(2, 4) !== g(r) && u.throwArgumentError("bad icap checksum", "address", r), t = Object(o.c)(r.substring(4)); t.length < 40;) t = "0" + t;
					t = a("0x" + t)
				} else u.throwArgumentError("invalid address", "address", r);
				return t
			}

			function d(r) {
				try {
					return f(r), !0
				} catch (t) {}
				return !1
			}

			function m(r) {
				let t = Object(o.b)(f(r).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + g("XE00" + t) + t
			}

			function E(r) {
				let t = null;
				try {
					t = f(r.from)
				} catch (a) {
					u.throwArgumentError("missing from address", "transaction", r)
				}
				const e = Object(n.o)(Object(n.a)(o.a.from(r.nonce).toHexString()));
				return f(Object(n.e)(Object(s.a)(Object(i.encode)([t, e])), 12))
			}

			function b(r, t, e) {
				return 32 !== Object(n.d)(t) && u.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(n.d)(e) && u.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", e), f(Object(n.e)(Object(s.a)(Object(n.b)(["0xff", f(r), t, e])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(r, t, e) {
			"use strict";
			e.d(t, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(r, t, e) {
			"use strict";
			e.d(t, "d", (function() {
				return g
			})), e.d(t, "a", (function() {
				return d
			})), e.d(t, "c", (function() {
				return p
			})), e.d(t, "b", (function() {
				return N
			}));
			var n = e("./node_modules/bn.js/lib/bn.js"),
				o = e.n(n),
				s = e("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = e("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				u = e("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				a = o.a.BN;
			const c = new i.a(u.a),
				l = {},
				h = 9007199254740991;

			function g(r) {
				return null != r && (d.isBigNumber(r) || "number" == typeof r && r % 1 == 0 || "string" == typeof r && !!r.match(/^-?[0-9]+$/) || Object(s.l)(r) || "bigint" == typeof r || Object(s.j)(r))
			}
			let f = !1;
			class d {
				constructor(r, t) {
					c.checkNew(new.target, d), r !== l && c.throwError("cannot call constructor directly; use BigNumber.from", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(r) {
					return E(b(this).fromTwos(r))
				}
				toTwos(r) {
					return E(b(this).toTwos(r))
				}
				abs() {
					return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
				}
				add(r) {
					return E(b(this).add(b(r)))
				}
				sub(r) {
					return E(b(this).sub(b(r)))
				}
				div(r) {
					return d.from(r).isZero() && v("division by zero", "div"), E(b(this).div(b(r)))
				}
				mul(r) {
					return E(b(this).mul(b(r)))
				}
				mod(r) {
					const t = b(r);
					return t.isNeg() && v("cannot modulo negative values", "mod"), E(b(this).umod(t))
				}
				pow(r) {
					const t = b(r);
					return t.isNeg() && v("cannot raise to negative values", "pow"), E(b(this).pow(t))
				}
				and(r) {
					const t = b(r);
					return (this.isNegative() || t.isNeg()) && v("cannot 'and' negative values", "and"), E(b(this).and(t))
				}
				or(r) {
					const t = b(r);
					return (this.isNegative() || t.isNeg()) && v("cannot 'or' negative values", "or"), E(b(this).or(t))
				}
				xor(r) {
					const t = b(r);
					return (this.isNegative() || t.isNeg()) && v("cannot 'xor' negative values", "xor"), E(b(this).xor(t))
				}
				mask(r) {
					return (this.isNegative() || r < 0) && v("cannot mask negative values", "mask"), E(b(this).maskn(r))
				}
				shl(r) {
					return (this.isNegative() || r < 0) && v("cannot shift negative values", "shl"), E(b(this).shln(r))
				}
				shr(r) {
					return (this.isNegative() || r < 0) && v("cannot shift negative values", "shr"), E(b(this).shrn(r))
				}
				eq(r) {
					return b(this).eq(b(r))
				}
				lt(r) {
					return b(this).lt(b(r))
				}
				lte(r) {
					return b(this).lte(b(r))
				}
				gt(r) {
					return b(this).gt(b(r))
				}
				gte(r) {
					return b(this).gte(b(r))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return b(this).isZero()
				}
				toNumber() {
					try {
						return b(this).toNumber()
					} catch (r) {
						v("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (r) {}
					return c.throwError("this platform does not support BigInt", i.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", i.a.errors.UNEXPECTED_ARGUMENT, {})), b(this).toString(10)
				}
				toHexString() {
					return this._hex
				}
				toJSON(r) {
					return {
						type: "BigNumber",
						hex: this.toHexString()
					}
				}
				static from(r) {
					if (r instanceof d) return r;
					if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new d(l, m(r)) : r.match(/^-?[0-9]+$/) ? new d(l, m(new a(r))) : c.throwArgumentError("invalid BigNumber string", "value", r);
					if ("number" == typeof r) return r % 1 && v("underflow", "BigNumber.from", r), (r >= h || r <= -h) && v("overflow", "BigNumber.from", r), d.from(String(r));
					const t = r;
					if ("bigint" == typeof t) return d.from(t.toString());
					if (Object(s.j)(t)) return d.from(Object(s.i)(t));
					if (t)
						if (t.toHexString) {
							const r = t.toHexString();
							if ("string" == typeof r) return d.from(r)
						} else {
							let r = t._hex;
							if (null == r && "BigNumber" === t.type && (r = t.hex), "string" == typeof r && (Object(s.l)(r) || "-" === r[0] && Object(s.l)(r.substring(1)))) return d.from(r)
						} return c.throwArgumentError("invalid BigNumber value", "value", r)
				}
				static isBigNumber(r) {
					return !(!r || !r._isBigNumber)
				}
			}

			function m(r) {
				if ("string" != typeof r) return m(r.toString(16));
				if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && c.throwArgumentError("invalid hex", "value", r), "0x00" === (r = m(r)) ? r : "-" + r;
				if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
				for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
				return r
			}

			function E(r) {
				return d.from(m(r))
			}

			function b(r) {
				const t = d.from(r).toHexString();
				return "-" === t[0] ? new a("-" + t.substring(3), 16) : new a(t.substring(2), 16)
			}

			function v(r, t, e) {
				const n = {
					fault: r,
					operation: t
				};
				return null != e && (n.value = e), c.throwError(r, i.a.errors.NUMERIC_FAULT, n)
			}

			function p(r) {
				return new a(r, 36).toString(16)
			}

			function N(r) {
				return new a(r, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(r, t, e) {
			"use strict";
			e.d(t, "k", (function() {
				return i
			})), e.d(t, "j", (function() {
				return u
			})), e.d(t, "a", (function() {
				return a
			})), e.d(t, "b", (function() {
				return c
			})), e.d(t, "o", (function() {
				return l
			})), e.d(t, "p", (function() {
				return h
			})), e.d(t, "l", (function() {
				return g
			})), e.d(t, "i", (function() {
				return d
			})), e.d(t, "d", (function() {
				return m
			})), e.d(t, "e", (function() {
				return E
			})), e.d(t, "c", (function() {
				return b
			})), e.d(t, "g", (function() {
				return v
			})), e.d(t, "f", (function() {
				return p
			})), e.d(t, "h", (function() {
				return N
			})), e.d(t, "n", (function() {
				return _
			})), e.d(t, "m", (function() {
				return y
			}));
			const n = new(e("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function o(r) {
				return !!r.toHexString
			}

			function s(r) {
				return r.slice ? r : (r.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(r, t)))
				}, r)
			}

			function i(r) {
				return g(r) && !(r.length % 2) || u(r)
			}

			function u(r) {
				if (null == r) return !1;
				if (r.constructor === Uint8Array) return !0;
				if ("string" == typeof r) return !1;
				if (null == r.length) return !1;
				for (let t = 0; t < r.length; t++) {
					const e = r[t];
					if ("number" != typeof e || e < 0 || e >= 256 || e % 1) return !1
				}
				return !0
			}

			function a(r, t) {
				if (t || (t = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid arrayify value");
					const t = [];
					for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
					return 0 === t.length && t.push(0), s(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r) && (r = r.toHexString()), g(r)) {
					let e = r.substring(2);
					e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", r));
					const o = [];
					for (let r = 0; r < e.length; r += 2) o.push(parseInt(e.substring(r, r + 2), 16));
					return s(new Uint8Array(o))
				}
				return u(r) ? s(new Uint8Array(r)) : n.throwArgumentError("invalid arrayify value", "value", r)
			}

			function c(r) {
				const t = r.map(r => a(r)),
					e = t.reduce((r, t) => r + t.length, 0),
					n = new Uint8Array(e);
				return t.reduce((r, t) => (n.set(t, r), r + t.length), 0), s(n)
			}

			function l(r) {
				let t = a(r);
				if (0 === t.length) return t;
				let e = 0;
				for (; e < t.length && 0 === t[e];) e++;
				return e && (t = t.slice(e)), t
			}

			function h(r, t) {
				(r = a(r)).length > t && n.throwArgumentError("value out of range", "value", arguments[0]);
				const e = new Uint8Array(t);
				return e.set(r, t - r.length), s(e)
			}

			function g(r, t) {
				return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
			}
			const f = "0123456789abcdef";

			function d(r, t) {
				if (t || (t = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid hexlify value");
					let t = "";
					for (; r;) t = f[15 & r] + t, r = Math.floor(r / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
				if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r)) return r.toHexString();
				if (g(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
				if (u(r)) {
					let t = "0x";
					for (let e = 0; e < r.length; e++) {
						let n = r[e];
						t += f[(240 & n) >> 4] + f[15 & n]
					}
					return t
				}
				return n.throwArgumentError("invalid hexlify value", "value", r)
			}

			function m(r) {
				if ("string" != typeof r) r = d(r);
				else if (!g(r) || r.length % 2) return null;
				return (r.length - 2) / 2
			}

			function E(r, t, e) {
				return "string" != typeof r ? r = d(r) : (!g(r) || r.length % 2) && n.throwArgumentError("invalid hexData", "value", r), t = 2 + 2 * t, null != e ? "0x" + r.substring(t, 2 + 2 * e) : "0x" + r.substring(t)
			}

			function b(r) {
				let t = "0x";
				return r.forEach(r => {
					t += d(r).substring(2)
				}), t
			}

			function v(r) {
				const t = p(d(r, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function p(r) {
				"string" != typeof r && (r = d(r)), g(r) || n.throwArgumentError("invalid hex string", "value", r), r = r.substring(2);
				let t = 0;
				for (; t < r.length && "0" === r[t];) t++;
				return "0x" + r.substring(t)
			}

			function N(r, t) {
				for ("string" != typeof r ? r = d(r) : g(r) || n.throwArgumentError("invalid hex string", "value", r), r.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * t + 2;) r = "0x0" + r.substring(2);
				return r
			}

			function _(r) {
				const t = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (i(r)) {
					const e = a(r);
					65 !== e.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", r), t.r = d(e.slice(0, 32)), t.s = d(e.slice(32, 64)), t.v = e[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", r)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (e[32] |= 128), t._vs = d(e.slice(32, 64))
				} else {
					if (t.r = r.r, t.s = r.s, t.v = r.v, t.recoveryParam = r.recoveryParam, t._vs = r._vs, null != t._vs) {
						const e = h(a(t._vs), 32);
						t._vs = d(e);
						const o = e[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = o : t.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), e[0] &= 127;
						const s = d(e);
						null == t.s ? t.s = s : t.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", r)
					}
					null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", r) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", r), null != t.r && g(t.r) ? t.r = N(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", r), null != t.s && g(t.s) ? t.s = N(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", r);
					const e = a(t.s);
					e[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", r), t.recoveryParam && (e[0] |= 128);
					const o = d(e);
					t._vs && (g(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", r), t._vs = N(t._vs, 32)), null == t._vs ? t._vs = o : t._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", r)
				}
				return t
			}

			function y(r) {
				return d(c([(r = _(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(r, t, e) {
			"use strict";
			e.d(t, "a", (function() {
				return i
			}));
			var n = e("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = e.n(n),
				s = e("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function i(r) {
				return "0x" + o.a.keccak_256(Object(s.a)(r))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(r, t, e) {
			(function(t, e) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = e);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof r && r.exports, s = "0123456789abcdef".split(""), i = [0, 8, 16, 24], u = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], a = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function(r, t, e) {
							return function(n) {
								return new _(r, t, r).update(n)[e]()
							}
						}, h = function(r, t, e) {
							return function(n, o) {
								return new _(r, t, o).update(n)[e]()
							}
						}, g = function(r, t) {
							var e = l(r, t, "hex");
							e.create = function() {
								return new _(r, t, r)
							}, e.update = function(r) {
								return e.create().update(r)
							};
							for (var n = 0; n < c.length; ++n) {
								var o = c[n];
								e[o] = l(r, t, o)
							}
							return e
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: a,
							createMethod: g
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: a,
							createMethod: g
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(r, t) {
								var e = h(r, t, "hex");
								e.create = function(e) {
									return new _(r, t, e)
								}, e.update = function(r, t) {
									return e.create(t).update(r)
								};
								for (var n = 0; n < c.length; ++n) {
									var o = c[n];
									e[o] = h(r, t, o)
								}
								return e
							}
						}], d = {}, m = [], E = 0; E < f.length; ++E)
						for (var b = f[E], v = b.bits, p = 0; p < v.length; ++p) {
							var N = b.name + "_" + v[p];
							m.push(N), d[N] = b.createMethod(v[p], b.padding)
						}

					function _(r, t, e) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = e, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (r << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = e >> 5, this.extraBytes = (31 & e) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					_.prototype.update = function(r) {
						var t = "string" != typeof r;
						t && r.constructor === ArrayBuffer && (r = new Uint8Array(r));
						for (var e, n, o = r.length, s = this.blocks, u = this.byteCount, a = this.blockCount, c = 0, l = this.s; c < o;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, e = 1; e < a + 1; ++e) s[e] = 0;
							if (t)
								for (e = this.start; c < o && e < u; ++c) s[e >> 2] |= r[c] << i[3 & e++];
							else
								for (e = this.start; c < o && e < u; ++c)(n = r.charCodeAt(c)) < 128 ? s[e >> 2] |= n << i[3 & e++] : n < 2048 ? (s[e >> 2] |= (192 | n >> 6) << i[3 & e++], s[e >> 2] |= (128 | 63 & n) << i[3 & e++]) : n < 55296 || n >= 57344 ? (s[e >> 2] |= (224 | n >> 12) << i[3 & e++], s[e >> 2] |= (128 | n >> 6 & 63) << i[3 & e++], s[e >> 2] |= (128 | 63 & n) << i[3 & e++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(++c)), s[e >> 2] |= (240 | n >> 18) << i[3 & e++], s[e >> 2] |= (128 | n >> 12 & 63) << i[3 & e++], s[e >> 2] |= (128 | n >> 6 & 63) << i[3 & e++], s[e >> 2] |= (128 | 63 & n) << i[3 & e++]);
							if (this.lastByteIndex = e, e >= u) {
								for (this.start = e - u, this.block = s[a], e = 0; e < a; ++e) l[e] ^= s[e];
								y(l), this.reset = !0
							} else this.start = e
						}
						return this
					}, _.prototype.finalize = function() {
						var r = this.blocks,
							t = this.lastByteIndex,
							e = this.blockCount,
							n = this.s;
						if (r[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (r[0] = r[e], t = 1; t < e + 1; ++t) r[t] = 0;
						for (r[e - 1] |= 2147483648, t = 0; t < e; ++t) n[t] ^= r[t];
						y(n)
					}, _.prototype.toString = _.prototype.hex = function() {
						this.finalize();
						for (var r, t = this.blockCount, e = this.s, n = this.outputBlocks, o = this.extraBytes, i = 0, u = 0, a = ""; u < n;) {
							for (i = 0; i < t && u < n; ++i, ++u) r = e[i], a += s[r >> 4 & 15] + s[15 & r] + s[r >> 12 & 15] + s[r >> 8 & 15] + s[r >> 20 & 15] + s[r >> 16 & 15] + s[r >> 28 & 15] + s[r >> 24 & 15];
							u % t == 0 && (y(e), i = 0)
						}
						return o && (r = e[i], o > 0 && (a += s[r >> 4 & 15] + s[15 & r]), o > 1 && (a += s[r >> 12 & 15] + s[r >> 8 & 15]), o > 2 && (a += s[r >> 20 & 15] + s[r >> 16 & 15])), a
					}, _.prototype.arrayBuffer = function() {
						this.finalize();
						var r, t = this.blockCount,
							e = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							s = 0,
							i = 0,
							u = this.outputBits >> 3;
						r = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(u);
						for (var a = new Uint32Array(r); i < n;) {
							for (s = 0; s < t && i < n; ++s, ++i) a[i] = e[s];
							i % t == 0 && y(e)
						}
						return o && (a[s] = e[s], r = r.slice(0, u)), r
					}, _.prototype.buffer = _.prototype.arrayBuffer, _.prototype.digest = _.prototype.array = function() {
						this.finalize();
						for (var r, t, e = this.blockCount, n = this.s, o = this.outputBlocks, s = this.extraBytes, i = 0, u = 0, a = []; u < o;) {
							for (i = 0; i < e && u < o; ++i, ++u) r = u << 2, t = n[i], a[r] = 255 & t, a[r + 1] = t >> 8 & 255, a[r + 2] = t >> 16 & 255, a[r + 3] = t >> 24 & 255;
							u % e == 0 && y(n)
						}
						return s && (r = u << 2, t = n[i], s > 0 && (a[r] = 255 & t), s > 1 && (a[r + 1] = t >> 8 & 255), s > 2 && (a[r + 2] = t >> 16 & 255)), a
					};
					var y = function(r) {
						var t, e, n, o, s, i, a, c, l, h, g, f, d, m, E, b, v, p, N, _, y, w, A, R, O, x, U, j, S, I, P, C, T, k, B, F, M, D, L, G, H, V, z, W, X, K, J, $, Z, q, Q, Y, rr, tr, er, nr, or, sr, ir, ur, ar, cr, lr;
						for (n = 0; n < 48; n += 2) o = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40], s = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41], i = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42], a = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43], c = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44], l = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45], h = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46], g = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47], t = (f = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48]) ^ (i << 1 | a >>> 31), e = (d = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49]) ^ (a << 1 | i >>> 31), r[0] ^= t, r[1] ^= e, r[10] ^= t, r[11] ^= e, r[20] ^= t, r[21] ^= e, r[30] ^= t, r[31] ^= e, r[40] ^= t, r[41] ^= e, t = o ^ (c << 1 | l >>> 31), e = s ^ (l << 1 | c >>> 31), r[2] ^= t, r[3] ^= e, r[12] ^= t, r[13] ^= e, r[22] ^= t, r[23] ^= e, r[32] ^= t, r[33] ^= e, r[42] ^= t, r[43] ^= e, t = i ^ (h << 1 | g >>> 31), e = a ^ (g << 1 | h >>> 31), r[4] ^= t, r[5] ^= e, r[14] ^= t, r[15] ^= e, r[24] ^= t, r[25] ^= e, r[34] ^= t, r[35] ^= e, r[44] ^= t, r[45] ^= e, t = c ^ (f << 1 | d >>> 31), e = l ^ (d << 1 | f >>> 31), r[6] ^= t, r[7] ^= e, r[16] ^= t, r[17] ^= e, r[26] ^= t, r[27] ^= e, r[36] ^= t, r[37] ^= e, r[46] ^= t, r[47] ^= e, t = h ^ (o << 1 | s >>> 31), e = g ^ (s << 1 | o >>> 31), r[8] ^= t, r[9] ^= e, r[18] ^= t, r[19] ^= e, r[28] ^= t, r[29] ^= e, r[38] ^= t, r[39] ^= e, r[48] ^= t, r[49] ^= e, m = r[0], E = r[1], K = r[11] << 4 | r[10] >>> 28, J = r[10] << 4 | r[11] >>> 28, j = r[20] << 3 | r[21] >>> 29, S = r[21] << 3 | r[20] >>> 29, ur = r[31] << 9 | r[30] >>> 23, ar = r[30] << 9 | r[31] >>> 23, V = r[40] << 18 | r[41] >>> 14, z = r[41] << 18 | r[40] >>> 14, k = r[2] << 1 | r[3] >>> 31, B = r[3] << 1 | r[2] >>> 31, b = r[13] << 12 | r[12] >>> 20, v = r[12] << 12 | r[13] >>> 20, $ = r[22] << 10 | r[23] >>> 22, Z = r[23] << 10 | r[22] >>> 22, I = r[33] << 13 | r[32] >>> 19, P = r[32] << 13 | r[33] >>> 19, cr = r[42] << 2 | r[43] >>> 30, lr = r[43] << 2 | r[42] >>> 30, tr = r[5] << 30 | r[4] >>> 2, er = r[4] << 30 | r[5] >>> 2, F = r[14] << 6 | r[15] >>> 26, M = r[15] << 6 | r[14] >>> 26, p = r[25] << 11 | r[24] >>> 21, N = r[24] << 11 | r[25] >>> 21, q = r[34] << 15 | r[35] >>> 17, Q = r[35] << 15 | r[34] >>> 17, C = r[45] << 29 | r[44] >>> 3, T = r[44] << 29 | r[45] >>> 3, R = r[6] << 28 | r[7] >>> 4, O = r[7] << 28 | r[6] >>> 4, nr = r[17] << 23 | r[16] >>> 9, or = r[16] << 23 | r[17] >>> 9, D = r[26] << 25 | r[27] >>> 7, L = r[27] << 25 | r[26] >>> 7, _ = r[36] << 21 | r[37] >>> 11, y = r[37] << 21 | r[36] >>> 11, Y = r[47] << 24 | r[46] >>> 8, rr = r[46] << 24 | r[47] >>> 8, W = r[8] << 27 | r[9] >>> 5, X = r[9] << 27 | r[8] >>> 5, x = r[18] << 20 | r[19] >>> 12, U = r[19] << 20 | r[18] >>> 12, sr = r[29] << 7 | r[28] >>> 25, ir = r[28] << 7 | r[29] >>> 25, G = r[38] << 8 | r[39] >>> 24, H = r[39] << 8 | r[38] >>> 24, w = r[48] << 14 | r[49] >>> 18, A = r[49] << 14 | r[48] >>> 18, r[0] = m ^ ~b & p, r[1] = E ^ ~v & N, r[10] = R ^ ~x & j, r[11] = O ^ ~U & S, r[20] = k ^ ~F & D, r[21] = B ^ ~M & L, r[30] = W ^ ~K & $, r[31] = X ^ ~J & Z, r[40] = tr ^ ~nr & sr, r[41] = er ^ ~or & ir, r[2] = b ^ ~p & _, r[3] = v ^ ~N & y, r[12] = x ^ ~j & I, r[13] = U ^ ~S & P, r[22] = F ^ ~D & G, r[23] = M ^ ~L & H, r[32] = K ^ ~$ & q, r[33] = J ^ ~Z & Q, r[42] = nr ^ ~sr & ur, r[43] = or ^ ~ir & ar, r[4] = p ^ ~_ & w, r[5] = N ^ ~y & A, r[14] = j ^ ~I & C, r[15] = S ^ ~P & T, r[24] = D ^ ~G & V, r[25] = L ^ ~H & z, r[34] = $ ^ ~q & Y, r[35] = Z ^ ~Q & rr, r[44] = sr ^ ~ur & cr, r[45] = ir ^ ~ar & lr, r[6] = _ ^ ~w & m, r[7] = y ^ ~A & E, r[16] = I ^ ~C & R, r[17] = P ^ ~T & O, r[26] = G ^ ~V & k, r[27] = H ^ ~z & B, r[36] = q ^ ~Y & W, r[37] = Q ^ ~rr & X, r[46] = ur ^ ~cr & tr, r[47] = ar ^ ~lr & er, r[8] = w ^ ~m & b, r[9] = A ^ ~E & v, r[18] = C ^ ~R & x, r[19] = T ^ ~O & U, r[28] = V ^ ~k & F, r[29] = z ^ ~B & M, r[38] = Y ^ ~W & K, r[39] = rr ^ ~X & J, r[48] = cr ^ ~tr & nr, r[49] = lr ^ ~er & or, r[0] ^= u[n], r[1] ^= u[n + 1]
					};
					if (o) r.exports = d;
					else
						for (E = 0; E < m.length; ++E) n[m[E]] = d[m[E]]
				}()
			}).call(this, e("./node_modules/process/browser.js"), e("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(r, t, e) {
			"use strict";
			e.d(t, "a", (function() {
				return g
			}));
			const n = "logger/5.4.0";
			let o = !1,
				s = !1;
			const i = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let u = i.default,
				a = null;
			const c = function() {
				try {
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
							try {
								if ("test" !== "test".normalize(t)) throw new Error("bad normalize")
							} catch (e) {
								r.push(t)
							}
						}), r.length) throw new Error("missing " + r.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (r) {
					return r.message
				}
				return null
			}();
			var l, h;
			! function(r) {
				r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
			}(l || (l = {})),
			function(r) {
				r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(h || (h = {}));
			class g {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, t) {
					const e = r.toLowerCase();
					null == i[e] && this.throwArgumentError("invalid log level name", "logLevel", r), u > i[e] || console.log.apply(console, t)
				}
				debug(...r) {
					this._log(g.levels.DEBUG, r)
				}
				info(...r) {
					this._log(g.levels.INFO, r)
				}
				warn(...r) {
					this._log(g.levels.WARNING, r)
				}
				makeError(r, t, e) {
					if (s) return this.makeError("censored error", t, {});
					t || (t = g.errors.UNKNOWN_ERROR), e || (e = {});
					const n = [];
					Object.keys(e).forEach(r => {
						try {
							n.push(r + "=" + JSON.stringify(e[r]))
						} catch (i) {
							n.push(r + "=" + JSON.stringify(e[r].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const i = new Error(r);
					return i.reason = o, i.code = t, Object.keys(e).forEach((function(r) {
						i[r] = e[r]
					})), i
				}
				throwError(r, t, e) {
					throw this.makeError(r, t, e)
				}
				throwArgumentError(r, t, e) {
					return this.throwError(r, g.errors.INVALID_ARGUMENT, {
						argument: t,
						value: e
					})
				}
				assert(r, t, e, n) {
					r || this.throwError(t, e, n)
				}
				assertArgument(r, t, e, n) {
					r || this.throwArgumentError(t, e, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", g.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(r, t) {
					"number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(t, g.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, t, e) {
					e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, g.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: t
					}), r > t && this.throwError("too many arguments" + e, g.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: t
					})
				}
				checkNew(r, t) {
					r !== Object && null != r || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(r, t) {
					r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", g.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", g.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return a || (a = new g(n)), a
				}
				static setCensorship(r, t) {
					if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", g.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!r, o = !!t
				}
				static setLogLevel(r) {
					const t = i[r.toLowerCase()];
					null != t ? u = t : g.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new g(r)
				}
			}
			g.errors = h, g.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(r, t, e) {
			"use strict";
			e.r(t), e.d(t, "encode", (function() {
				return a
			})), e.d(t, "decode", (function() {
				return h
			}));
			var n = e("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = e("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new o.a("rlp/5.4.0");

			function i(r) {
				const t = [];
				for (; r;) t.unshift(255 & r), r >>= 8;
				return t
			}

			function u(r, t, e) {
				let n = 0;
				for (let o = 0; o < e; o++) n = 256 * n + r[t + o];
				return n
			}

			function a(r) {
				return Object(n.i)(function r(t) {
					if (Array.isArray(t)) {
						let e = [];
						if (t.forEach((function(t) {
								e = e.concat(r(t))
							})), e.length <= 55) return e.unshift(192 + e.length), e;
						const n = i(e.length);
						return n.unshift(247 + n.length), n.concat(e)
					}
					Object(n.k)(t) || s.throwArgumentError("RLP object must be BytesLike", "object", t);
					const e = Array.prototype.slice.call(Object(n.a)(t));
					if (1 === e.length && e[0] <= 127) return e;
					if (e.length <= 55) return e.unshift(128 + e.length), e;
					const o = i(e.length);
					return o.unshift(183 + o.length), o.concat(e)
				}(r))
			}

			function c(r, t, e, n) {
				const i = [];
				for (; e < t + 1 + n;) {
					const u = l(r, e);
					i.push(u.result), (e += u.consumed) > t + 1 + n && s.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: i
				}
			}

			function l(r, t) {
				if (0 === r.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), r[t] >= 248) {
					const e = r[t] - 247;
					t + 1 + e > r.length && s.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
					const n = u(r, t + 1, e);
					return t + 1 + e + n > r.length && s.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), c(r, t, t + 1 + e, e + n)
				}
				if (r[t] >= 192) {
					const e = r[t] - 192;
					return t + 1 + e > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), c(r, t, t + 1, e)
				}
				if (r[t] >= 184) {
					const e = r[t] - 183;
					t + 1 + e > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
					const i = u(r, t + 1, e);
					return t + 1 + e + i > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + e + i,
						result: Object(n.i)(r.slice(t + 1 + e, t + 1 + e + i))
					}
				}
				if (r[t] >= 128) {
					const e = r[t] - 128;
					return t + 1 + e > r.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + e,
						result: Object(n.i)(r.slice(t + 1, t + 1 + e))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(r[t])
				}
			}

			function h(r) {
				const t = Object(n.a)(r),
					e = l(t, 0);
				return e.consumed !== t.length && s.throwArgumentError("invalid rlp data", "data", r), e.result
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoLibEthers.c693308c5ad86d73dff2.js.map