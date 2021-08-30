// https://www.redditstatic.com/desktop2x/reddit-pages-meta-ArbitrumPointsMigrationPage.aacc9aac2d694070a28b.js
// Retrieved at 8/30/2021, 3:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-meta-ArbitrumPointsMigrationPage", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = n("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				o = n("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const i = new(n("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("address/5.4.0");

			function l(e) {
				Object(r.l)(e, 20) || i.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					n = new Uint8Array(40);
				for (let r = 0; r < 40; r++) n[r] = t[r].charCodeAt(0);
				const s = Object(r.a)(Object(a.a)(n));
				for (let r = 0; r < 40; r += 2) s[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()), (15 & s[r >> 1]) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const u = {};
			for (let y = 0; y < 10; y++) u[String(y)] = String(y);
			for (let y = 0; y < 26; y++) u[String.fromCharCode(65 + y)] = String(10 + y);
			const c = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function m(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => u[e]).join("");
				for (; t.length >= c;) {
					let e = t.substring(0, c);
					t = parseInt(e, 10) % 97 + t.substring(e.length)
				}
				let n = String(98 - parseInt(t, 10) % 97);
				for (; n.length < 2;) n = "0" + n;
				return n
			}

			function p(e) {
				let t = null;
				if ("string" != typeof e && i.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = l(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && i.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== m(e) && i.throwArgumentError("bad icap checksum", "address", e), t = Object(s.c)(e.substring(4)); t.length < 40;) t = "0" + t;
					t = l("0x" + t)
				} else i.throwArgumentError("invalid address", "address", e);
				return t
			}

			function h(e) {
				try {
					return p(e), !0
				} catch (t) {}
				return !1
			}

			function g(e) {
				let t = Object(s.b)(p(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + m("XE00" + t) + t
			}

			function f(e) {
				let t = null;
				try {
					t = p(e.from)
				} catch (l) {
					i.throwArgumentError("missing from address", "transaction", e)
				}
				const n = Object(r.o)(Object(r.a)(s.a.from(e.nonce).toHexString()));
				return p(Object(r.e)(Object(a.a)(Object(o.encode)([t, n])), 12))
			}

			function b(e, t, n) {
				return 32 !== Object(r.d)(t) && i.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(r.d)(n) && i.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", n), p(Object(r.e)(Object(a.a)(Object(r.b)(["0xff", p(e), t, n])), 12))
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
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			}));
			var r = n("./node_modules/bn.js/lib/bn.js"),
				s = n.n(r),
				a = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = n("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				i = n("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				l = s.a.BN;
			const u = new o.b(i.a),
				c = {},
				d = 9007199254740991;

			function m(e) {
				return null != e && (h.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(a.l)(e) || "bigint" == typeof e || Object(a.j)(e))
			}
			let p = !1;
			class h {
				constructor(e, t) {
					u.checkNew(new.target, h), e !== c && u.throwError("cannot call constructor directly; use BigNumber.from", o.b.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return f(b(this).fromTwos(e))
				}
				toTwos(e) {
					return f(b(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? h.from(this._hex.substring(1)) : this
				}
				add(e) {
					return f(b(this).add(b(e)))
				}
				sub(e) {
					return f(b(this).sub(b(e)))
				}
				div(e) {
					return h.from(e).isZero() && y("division by zero", "div"), f(b(this).div(b(e)))
				}
				mul(e) {
					return f(b(this).mul(b(e)))
				}
				mod(e) {
					const t = b(e);
					return t.isNeg() && y("cannot modulo negative values", "mod"), f(b(this).umod(t))
				}
				pow(e) {
					const t = b(e);
					return t.isNeg() && y("cannot raise to negative values", "pow"), f(b(this).pow(t))
				}
				and(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'and' negative values", "and"), f(b(this).and(t))
				}
				or(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'or' negative values", "or"), f(b(this).or(t))
				}
				xor(e) {
					const t = b(e);
					return (this.isNegative() || t.isNeg()) && y("cannot 'xor' negative values", "xor"), f(b(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && y("cannot mask negative values", "mask"), f(b(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && y("cannot shift negative values", "shl"), f(b(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && y("cannot shift negative values", "shr"), f(b(this).shrn(e))
				}
				eq(e) {
					return b(this).eq(b(e))
				}
				lt(e) {
					return b(this).lt(b(e))
				}
				lte(e) {
					return b(this).lte(b(e))
				}
				gt(e) {
					return b(this).gt(b(e))
				}
				gte(e) {
					return b(this).gte(b(e))
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
					} catch (e) {
						y("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return u.throwError("this platform does not support BigInt", o.b.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? p || (p = !0, u.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? u.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", o.b.errors.UNEXPECTED_ARGUMENT, {}) : u.throwError("BigNumber.toString does not accept parameters", o.b.errors.UNEXPECTED_ARGUMENT, {})), b(this).toString(10)
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
					if (e instanceof h) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new h(c, g(e)) : e.match(/^-?[0-9]+$/) ? new h(c, g(new l(e))) : u.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && y("underflow", "BigNumber.from", e), (e >= d || e <= -d) && y("overflow", "BigNumber.from", e), h.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return h.from(t.toString());
					if (Object(a.j)(t)) return h.from(Object(a.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return h.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(a.l)(e) || "-" === e[0] && Object(a.l)(e.substring(1)))) return h.from(e)
						} return u.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function g(e) {
				if ("string" != typeof e) return g(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && u.throwArgumentError("invalid hex", "value", e), "0x00" === (e = g(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function f(e) {
				return h.from(g(e))
			}

			function b(e) {
				const t = h.from(e).toHexString();
				return "-" === t[0] ? new l("-" + t.substring(3), 16) : new l(t.substring(2), 16)
			}

			function y(e, t, n) {
				const r = {
					fault: e,
					operation: t
				};
				return null != n && (r.value = n), u.throwError(e, o.b.errors.NUMERIC_FAULT, r)
			}

			function E(e) {
				return new l(e, 36).toString(16)
			}

			function v(e) {
				return new l(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "m", (function() {
				return x
			}));
			const r = new(n("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("bytes/5.4.0");

			function s(e) {
				return !!e.toHexString
			}

			function a(e) {
				return e.slice ? e : (e.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return a(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function o(e) {
				return m(e) && !(e.length % 2) || i(e)
			}

			function i(e) {
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

			function l(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					r.checkSafeUint53(e, "invalid arrayify value");
					const t = [];
					for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === t.length && t.push(0), a(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), s(e) && (e = e.toHexString()), m(e)) {
					let n = e.substring(2);
					n.length % 2 && ("left" === t.hexPad ? n = "0x0" + n.substring(2) : "right" === t.hexPad ? n += "0" : r.throwArgumentError("hex data is odd-length", "value", e));
					const s = [];
					for (let e = 0; e < n.length; e += 2) s.push(parseInt(n.substring(e, e + 2), 16));
					return a(new Uint8Array(s))
				}
				return i(e) ? a(new Uint8Array(e)) : r.throwArgumentError("invalid arrayify value", "value", e)
			}

			function u(e) {
				const t = e.map(e => l(e)),
					n = t.reduce((e, t) => e + t.length, 0),
					r = new Uint8Array(n);
				return t.reduce((e, t) => (r.set(t, e), e + t.length), 0), a(r)
			}

			function c(e) {
				let t = l(e);
				if (0 === t.length) return t;
				let n = 0;
				for (; n < t.length && 0 === t[n];) n++;
				return n && (t = t.slice(n)), t
			}

			function d(e, t) {
				(e = l(e)).length > t && r.throwArgumentError("value out of range", "value", arguments[0]);
				const n = new Uint8Array(t);
				return n.set(e, t - e.length), a(n)
			}

			function m(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			const p = "0123456789abcdef";

			function h(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					r.checkSafeUint53(e, "invalid hexlify value");
					let t = "";
					for (; e;) t = p[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), s(e)) return e.toHexString();
				if (m(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : r.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (i(e)) {
					let t = "0x";
					for (let n = 0; n < e.length; n++) {
						let r = e[n];
						t += p[(240 & r) >> 4] + p[15 & r]
					}
					return t
				}
				return r.throwArgumentError("invalid hexlify value", "value", e)
			}

			function g(e) {
				if ("string" != typeof e) e = h(e);
				else if (!m(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function f(e, t, n) {
				return "string" != typeof e ? e = h(e) : (!m(e) || e.length % 2) && r.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != n ? "0x" + e.substring(t, 2 + 2 * n) : "0x" + e.substring(t)
			}

			function b(e) {
				let t = "0x";
				return e.forEach(e => {
					t += h(e).substring(2)
				}), t
			}

			function y(e) {
				const t = E(h(e, {
					hexPad: "left"
				}));
				return "0x" === t ? "0x0" : t
			}

			function E(e) {
				"string" != typeof e && (e = h(e)), m(e) || r.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function v(e, t) {
				for ("string" != typeof e ? e = h(e) : m(e) || r.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && r.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function w(e) {
				const t = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (o(e)) {
					const n = l(e);
					65 !== n.length && r.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = h(n.slice(0, 32)), t.s = h(n.slice(32, 64)), t.v = n[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : r.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (n[32] |= 128), t._vs = h(n.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const n = d(l(t._vs), 32);
						t._vs = h(n);
						const s = n[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = s : t.recoveryParam !== s && r.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n[0] &= 127;
						const a = h(n);
						null == t.s ? t.s = a : t.s !== a && r.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? r.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && r.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && m(t.r) ? t.r = v(t.r, 32) : r.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && m(t.s) ? t.s = v(t.s, 32) : r.throwArgumentError("signature missing or invalid s", "signature", e);
					const n = l(t.s);
					n[0] >= 128 && r.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (n[0] |= 128);
					const s = h(n);
					t._vs && (m(t._vs) || r.throwArgumentError("signature invalid _vs", "signature", e), t._vs = v(t._vs, 32)), null == t._vs ? t._vs = s : t._vs !== s && r.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function x(e) {
				return h(u([(e = w(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				s = n.n(r),
				a = n("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function o(e) {
				return "0x" + s.a.keccak_256(Object(a.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, t, n) {
			(function(t, n) {
				! function() {
					"use strict";
					var r = "object" == typeof window ? window : {};
					!r.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (r = n);
					for (var s = !r.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, a = "0123456789abcdef".split(""), o = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], l = [224, 256, 384, 512], u = ["hex", "buffer", "arrayBuffer", "array"], c = function(e, t, n) {
							return function(r) {
								return new w(e, t, e).update(r)[n]()
							}
						}, d = function(e, t, n) {
							return function(r, s) {
								return new w(e, t, s).update(r)[n]()
							}
						}, m = function(e, t) {
							var n = c(e, t, "hex");
							n.create = function() {
								return new w(e, t, e)
							}, n.update = function(e) {
								return n.create().update(e)
							};
							for (var r = 0; r < u.length; ++r) {
								var s = u[r];
								n[s] = c(e, t, s)
							}
							return n
						}, p = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: l,
							createMethod: m
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: l,
							createMethod: m
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var n = d(e, t, "hex");
								n.create = function(n) {
									return new w(e, t, n)
								}, n.update = function(e, t) {
									return n.create(t).update(e)
								};
								for (var r = 0; r < u.length; ++r) {
									var s = u[r];
									n[s] = d(e, t, s)
								}
								return n
							}
						}], h = {}, g = [], f = 0; f < p.length; ++f)
						for (var b = p[f], y = b.bits, E = 0; E < y.length; ++E) {
							var v = b.name + "_" + y[E];
							g.push(v), h[v] = b.createMethod(y[E], b.padding)
						}

					function w(e, t, n) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
						for (var r = 0; r < 50; ++r) this.s[r] = 0
					}
					w.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var n, r, s = e.length, a = this.blocks, i = this.byteCount, l = this.blockCount, u = 0, c = this.s; u < s;) {
							if (this.reset)
								for (this.reset = !1, a[0] = this.block, n = 1; n < l + 1; ++n) a[n] = 0;
							if (t)
								for (n = this.start; u < s && n < i; ++u) a[n >> 2] |= e[u] << o[3 & n++];
							else
								for (n = this.start; u < s && n < i; ++u)(r = e.charCodeAt(u)) < 128 ? a[n >> 2] |= r << o[3 & n++] : r < 2048 ? (a[n >> 2] |= (192 | r >> 6) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : r < 55296 || r >= 57344 ? (a[n >> 2] |= (224 | r >> 12) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++u)), a[n >> 2] |= (240 | r >> 18) << o[3 & n++], a[n >> 2] |= (128 | r >> 12 & 63) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]);
							if (this.lastByteIndex = n, n >= i) {
								for (this.start = n - i, this.block = a[l], n = 0; n < l; ++n) c[n] ^= a[n];
								x(c), this.reset = !0
							} else this.start = n
						}
						return this
					}, w.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							n = this.blockCount,
							r = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
						for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
						x(r)
					}, w.prototype.toString = w.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, s = this.extraBytes, o = 0, i = 0, l = ""; i < r;) {
							for (o = 0; o < t && i < r; ++o, ++i) e = n[o], l += a[e >> 4 & 15] + a[15 & e] + a[e >> 12 & 15] + a[e >> 8 & 15] + a[e >> 20 & 15] + a[e >> 16 & 15] + a[e >> 28 & 15] + a[e >> 24 & 15];
							i % t == 0 && (x(n), o = 0)
						}
						return s && (e = n[o], s > 0 && (l += a[e >> 4 & 15] + a[15 & e]), s > 1 && (l += a[e >> 12 & 15] + a[e >> 8 & 15]), s > 2 && (l += a[e >> 20 & 15] + a[e >> 16 & 15])), l
					}, w.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							n = this.s,
							r = this.outputBlocks,
							s = this.extraBytes,
							a = 0,
							o = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(i);
						for (var l = new Uint32Array(e); o < r;) {
							for (a = 0; a < t && o < r; ++a, ++o) l[o] = n[a];
							o % t == 0 && x(n)
						}
						return s && (l[a] = n[a], e = e.slice(0, i)), e
					}, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
						this.finalize();
						for (var e, t, n = this.blockCount, r = this.s, s = this.outputBlocks, a = this.extraBytes, o = 0, i = 0, l = []; i < s;) {
							for (o = 0; o < n && i < s; ++o, ++i) e = i << 2, t = r[o], l[e] = 255 & t, l[e + 1] = t >> 8 & 255, l[e + 2] = t >> 16 & 255, l[e + 3] = t >> 24 & 255;
							i % n == 0 && x(r)
						}
						return a && (e = i << 2, t = r[o], a > 0 && (l[e] = 255 & t), a > 1 && (l[e + 1] = t >> 8 & 255), a > 2 && (l[e + 2] = t >> 16 & 255)), l
					};
					var x = function(e) {
						var t, n, r, s, a, o, l, u, c, d, m, p, h, g, f, b, y, E, v, w, x, N, _, T, O, A, j, C, k, R, S, I, M, P, U, B, L, F, D, G, H, V, W, z, X, $, q, K, Y, J, Z, Q, ee, te, ne, re, se, ae, oe, ie, le, ue, ce;
						for (r = 0; r < 48; r += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], l = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | l >>> 31), n = (h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (l << 1 | o >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = s ^ (u << 1 | c >>> 31), n = a ^ (c << 1 | u >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = o ^ (d << 1 | m >>> 31), n = l ^ (m << 1 | d >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = u ^ (p << 1 | h >>> 31), n = c ^ (h << 1 | p >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = d ^ (s << 1 | a >>> 31), n = m ^ (a << 1 | s >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, g = e[0], f = e[1], $ = e[11] << 4 | e[10] >>> 28, q = e[10] << 4 | e[11] >>> 28, C = e[20] << 3 | e[21] >>> 29, k = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, le = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, W = e[41] << 18 | e[40] >>> 14, P = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, K = e[22] << 10 | e[23] >>> 22, Y = e[23] << 10 | e[22] >>> 22, R = e[33] << 13 | e[32] >>> 19, S = e[32] << 13 | e[33] >>> 19, ue = e[42] << 2 | e[43] >>> 30, ce = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, L = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, v = e[24] << 11 | e[25] >>> 21, J = e[34] << 15 | e[35] >>> 17, Z = e[35] << 15 | e[34] >>> 17, I = e[45] << 29 | e[44] >>> 3, M = e[44] << 29 | e[45] >>> 3, T = e[6] << 28 | e[7] >>> 4, O = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, F = e[26] << 25 | e[27] >>> 7, D = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, x = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, j = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, G = e[38] << 8 | e[39] >>> 24, H = e[39] << 8 | e[38] >>> 24, N = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = g ^ ~b & E, e[1] = f ^ ~y & v, e[10] = T ^ ~A & C, e[11] = O ^ ~j & k, e[20] = P ^ ~B & F, e[21] = U ^ ~L & D, e[30] = z ^ ~$ & K, e[31] = X ^ ~q & Y, e[40] = te ^ ~re & ae, e[41] = ne ^ ~se & oe, e[2] = b ^ ~E & w, e[3] = y ^ ~v & x, e[12] = A ^ ~C & R, e[13] = j ^ ~k & S, e[22] = B ^ ~F & G, e[23] = L ^ ~D & H, e[32] = $ ^ ~K & J, e[33] = q ^ ~Y & Z, e[42] = re ^ ~ae & ie, e[43] = se ^ ~oe & le, e[4] = E ^ ~w & N, e[5] = v ^ ~x & _, e[14] = C ^ ~R & I, e[15] = k ^ ~S & M, e[24] = F ^ ~G & V, e[25] = D ^ ~H & W, e[34] = K ^ ~J & Q, e[35] = Y ^ ~Z & ee, e[44] = ae ^ ~ie & ue, e[45] = oe ^ ~le & ce, e[6] = w ^ ~N & g, e[7] = x ^ ~_ & f, e[16] = R ^ ~I & T, e[17] = S ^ ~M & O, e[26] = G ^ ~V & P, e[27] = H ^ ~W & U, e[36] = J ^ ~Q & z, e[37] = Z ^ ~ee & X, e[46] = ie ^ ~ue & te, e[47] = le ^ ~ce & ne, e[8] = N ^ ~g & b, e[9] = _ ^ ~f & y, e[18] = I ^ ~T & A, e[19] = M ^ ~O & j, e[28] = V ^ ~P & B, e[29] = W ^ ~U & L, e[38] = Q ^ ~z & $, e[39] = ee ^ ~X & q, e[48] = ue ^ ~te & re, e[49] = ce ^ ~ne & se, e[0] ^= i[r], e[1] ^= i[r + 1]
					};
					if (s) e.exports = h;
					else
						for (f = 0; f < g.length; ++f) r[g[f]] = h[g[f]]
				}()
			}).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			}));
			const r = "logger/5.4.0";
			let s = !1,
				a = !1;
			const o = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let i = o.default,
				l = null;
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
			var c, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(c || (c = {})),
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
					const n = e.toLowerCase();
					null == o[n] && this.throwArgumentError("invalid log level name", "logLevel", e), i > o[n] || console.log.apply(console, t)
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
				makeError(e, t, n) {
					if (a) return this.makeError("censored error", t, {});
					t || (t = m.errors.UNKNOWN_ERROR), n || (n = {});
					const r = [];
					Object.keys(n).forEach(e => {
						try {
							r.push(e + "=" + JSON.stringify(n[e]))
						} catch (o) {
							r.push(e + "=" + JSON.stringify(n[e].toString()))
						}
					}), r.push(`code=${t}`), r.push(`version=${this.version}`);
					const s = e;
					r.length && (e += " (" + r.join(", ") + ")");
					const o = new Error(e);
					return o.reason = s, o.code = t, Object.keys(n).forEach((function(e) {
						o[e] = n[e]
					})), o
				}
				throwError(e, t, n) {
					throw this.makeError(e, t, n)
				}
				throwArgumentError(e, t, n) {
					return this.throwError(e, m.errors.INVALID_ARGUMENT, {
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
					null == e && (e = "platform missing String.prototype.normalize"), u && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: u
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
				checkArgumentCount(e, t, n) {
					n = n ? ": " + n : "", e < t && this.throwError("missing argument" + n, m.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + n, m.errors.UNEXPECTED_ARGUMENT, {
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
					return l || (l = new m(r)), l
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
					a = !!e, s = !!t
				}
				static setLogLevel(e) {
					const t = o[e.toLowerCase()];
					null != t ? i = t : m.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new m(e)
				}
			}
			m.errors = d, m.levels = c
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "encode", (function() {
				return l
			})), n.d(t, "decode", (function() {
				return d
			}));
			var r = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = n("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const a = new s.b("rlp/5.4.0");

			function o(e) {
				const t = [];
				for (; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function i(e, t, n) {
				let r = 0;
				for (let s = 0; s < n; s++) r = 256 * r + e[t + s];
				return r
			}

			function l(e) {
				return Object(r.i)(function e(t) {
					if (Array.isArray(t)) {
						let n = [];
						if (t.forEach((function(t) {
								n = n.concat(e(t))
							})), n.length <= 55) return n.unshift(192 + n.length), n;
						const r = o(n.length);
						return r.unshift(247 + r.length), r.concat(n)
					}
					Object(r.k)(t) || a.throwArgumentError("RLP object must be BytesLike", "object", t);
					const n = Array.prototype.slice.call(Object(r.a)(t));
					if (1 === n.length && n[0] <= 127) return n;
					if (n.length <= 55) return n.unshift(128 + n.length), n;
					const s = o(n.length);
					return s.unshift(183 + s.length), s.concat(n)
				}(e))
			}

			function u(e, t, n, r) {
				const o = [];
				for (; n < t + 1 + r;) {
					const i = c(e, n);
					o.push(i.result), (n += i.consumed) > t + 1 + r && a.throwError("child data too short", s.b.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + r,
					result: o
				}
			}

			function c(e, t) {
				if (0 === e.length && a.throwError("data too short", s.b.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const n = e[t] - 247;
					t + 1 + n > e.length && a.throwError("data short segment too short", s.b.errors.BUFFER_OVERRUN, {});
					const r = i(e, t + 1, n);
					return t + 1 + n + r > e.length && a.throwError("data long segment too short", s.b.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1 + n, n + r)
				}
				if (e[t] >= 192) {
					const n = e[t] - 192;
					return t + 1 + n > e.length && a.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {}), u(e, t, t + 1, n)
				}
				if (e[t] >= 184) {
					const n = e[t] - 183;
					t + 1 + n > e.length && a.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {});
					const o = i(e, t + 1, n);
					return t + 1 + n + o > e.length && a.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + n + o,
						result: Object(r.i)(e.slice(t + 1 + n, t + 1 + n + o))
					}
				}
				if (e[t] >= 128) {
					const n = e[t] - 128;
					return t + 1 + n > e.length && a.throwError("data too short", s.b.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + n,
						result: Object(r.i)(e.slice(t + 1, t + 1 + n))
					}
				}
				return {
					consumed: 1,
					result: Object(r.i)(e[t])
				}
			}

			function d(e) {
				const t = Object(r.a)(e),
					n = c(t, 0);
				return n.consumed !== t.length && a.throwArgumentError("invalid rlp data", "data", e), n.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return A
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = n.n(y);
			var v = Object(g.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return u.a.createElement("div", {
						className: E.a.wrapper
					}, u.a.createElement(b.a, {
						className: E.a.titleRow
					}, n), u.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), u.a.createElement(b.a, {
						className: E.a.buttonRow
					}, u.a.createElement(f.i, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				w = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(w);
			const N = Object(d.c)({
				activeModalId: h.a
			});
			class _ extends u.a.Component {
				constructor(e) {
					super(e), this.spanRef = u.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`
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
						className: n,
						errorModalBody: s,
						errorModalTitle: a = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: l
					} = this.state;
					return u.a.createElement("div", {
						className: Object(m.a)(x.a.wrapper, n)
					}, u.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), l && u.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && u.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const T = Object(c.b)(N, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(_),
				O = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? u.a.createElement("div", {
						className: t
					}, o.map((e, t) => u.a.createElement(T, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				A = e => u.a.createElement(O, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = T
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.m.less"),
				d = n.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", d.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: o,
						...i
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(d.a.inputWrapper, o, {
							[d.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(d.a.label, {
							[d.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: l,
						...u
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(d.a.inputMovingLabelWrapper, i, {
							[d.a.mIsInvalid]: o,
							[d.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: r
					}, u)), e.label && s.a.createElement("label", {
						className: Object(a.a)(d.a.label, {
							[d.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => s.a.createElement("div", {
					className: Object(a.a)(d.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(l.a, {
					className: d.a.plus
				}));
			var y;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(y || (y = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: y.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: y.REMOVE,
							value: n,
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
						label: n,
						placeholder: r,
						errors: a = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(g, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: d.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(u.b, {
						className: d.a.trash
					})), !!a[o] && s.a.createElement(i.b, {
						className: d.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const l = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(d.a.multiInputWrapper, e)
					}, t && l && s.a.createElement(b, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && l && s.a.createElement(b, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/crypto/abis/communityPointsABI.ts": function(e, t, n) {
			"use strict";
			t.a = [{
				constant: !0,
				inputs: [{
					internalType: "address",
					name: "account",
					type: "address"
				}],
				name: "balanceOf",
				outputs: [{
					internalType: "uint256",
					name: "",
					type: "uint256"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}, {
					internalType: "bytes",
					name: "userData",
					type: "bytes"
				}],
				name: "burn",
				outputs: [],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "address",
					name: "recipient",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "transfer",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !0,
				inputs: [],
				name: "getHubAddr",
				outputs: [{
					internalType: "address",
					name: "",
					type: "address"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}]
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function a() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function i() {
				const e = s();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function l() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const u = 4001;
			async function c(e, t, r, a) {
				const [o, i] = await Promise.all([Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await l();
				const u = new o.providers.Web3Provider(s()).getSigner(),
					c = new o.Contract(e, i, u),
					d = await c[r](...a);
				return await d.wait()
			}
			const d = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const m = 1;
			async function p(e, t, r, s, a) {
				const o = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = o,
					{
						hexlify: l,
						hexZeroPad: u,
						toUtf8Bytes: p
					} = o.utils,
					h = i.from(r).add(a),
					g = m,
					f = "0x" + [l(1)].concat([l(g), i.from(s).toHexString(), i.from(a).toHexString()].map(e => u(e, 32))).concat(l(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return c(e, Promise.resolve(d), "send", [t, n, r])
				}(e, t, h.toString(), f)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function g(e, t, n) {
				await l();
				const s = o() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return c(e, Promise.resolve(h), "subscribe", [t, n])
			}

			function f(e) {
				const t = s();
				return new Promise((n, s) => {
					const a = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, a],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? n(e) : s({
								message: r.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function b(e) {
				return new Promise((t, n) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, r) => {
						e || "error" in r ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const l = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1qKwjdihVjHUENiDeGX6f2",
				header: "_3P41jR4wUxIbf1_zvjvBiU",
				loadingSpinner: "_2YzOwCLKgSLn9H5vHk-GOP",
				error: "_3sjHJ7DTInKxeTxxrCBuH_",
				loading: "_2uhBgFO07oG75CuKor7wvL",
				failed: "_2rLDd3Y2RkgIFBKUSeeabE",
				succeeded: "_3cqL7tfkRZsE5c19TXUkTp"
			}
		},
		"./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ArbitrumPointsMigrationPage", (function() {
				return V
			})), n.d(t, "default", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = n("./node_modules/ethers/lib.esm/index.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/endpoints/governance/crypto.ts"),
				p = [{
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "Redeemed",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "TicketCreated",
					type: "event"
				}, {
					inputs: [{
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "getTimeout",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes32",
						name: "txId",
						type: "bytes32"
					}],
					name: "redeem",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}],
				h = n("./src/reddit/helpers/crypto/abis/communityPointsABI.ts"),
				g = [{
					inputs: [],
					name: "inbox",
					outputs: [{
						internalType: "address",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "_token",
						type: "address"
					}, {
						internalType: "address",
						name: "_to",
						type: "address"
					}, {
						internalType: "uint256",
						name: "_amount",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "_maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "_gasPriceBid",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "_data",
						type: "bytes"
					}],
					name: "outboundTransfer",
					outputs: [{
						internalType: "bytes",
						name: "",
						type: "bytes"
					}],
					stateMutability: "payable",
					type: "function"
				}],
				f = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				b = n("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				y = n("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				E = [{
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "uint256",
						name: "messageNum",
						type: "uint256"
					}, {
						indexed: !1,
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "InboxMessageDelivered",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "uint256",
						name: "messageNum",
						type: "uint256"
					}],
					name: "InboxMessageDeliveredFromOrigin",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !1,
						internalType: "address",
						name: "newSource",
						type: "address"
					}],
					name: "WhitelistSourceUpdated",
					type: "event"
				}, {
					inputs: [],
					name: "bridge",
					outputs: [{
						internalType: "contract IBridge",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "l2CallValue",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "maxSubmissionCost",
						type: "uint256"
					}, {
						internalType: "address",
						name: "excessFeeRefundAddress",
						type: "address"
					}, {
						internalType: "address",
						name: "callValueRefundAddress",
						type: "address"
					}, {
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "createRetryableTicket",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxSubmissionCost",
						type: "uint256"
					}],
					name: "depositEth",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "contract IBridge",
						name: "_bridge",
						type: "address"
					}, {
						internalType: "address",
						name: "_whitelist",
						type: "address"
					}],
					name: "initialize",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [],
					name: "isMaster",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendContractTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendL1FundedContractTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "nonce",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendL1FundedUnsignedTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes",
						name: "messageData",
						type: "bytes"
					}],
					name: "sendL2Message",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes",
						name: "messageData",
						type: "bytes"
					}],
					name: "sendL2MessageFromOrigin",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "nonce",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendUnsignedTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "newSource",
						type: "address"
					}],
					name: "updateWhitelistSource",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [],
					name: "whitelist",
					outputs: [{
						internalType: "address",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}];
			async function v(e, t) {
				return async function(e, t, n) {
					const s = await async function(e, t) {
						const n = r.a.from((await t.getNetwork()).chainId);
						return Object(b.a)(Object(f.b)([Object(f.p)(n.toHexString(), 32), Object(f.p)((s = e, s.or(r.a.from(1).shl(255))).toHexString(), 32)]));
						var s
					}(e, t);
					return Object(b.a)(Object(f.b)([Object(f.p)(s, 32), Object(f.p)(r.a.from(n).toHexString(), 32)]))
				}(e, t, 0)
			}
			var w = n("./src/reddit/helpers/governance/ethereum.ts");
			const x = "0xce01Bcd1931Eb9e19a19d2d00287FAbD733D705A",
				N = "0x000000000000000000000000000000000000006E",
				_ = 9e5,
				T = [{
					name: "Gigapoints",
					l1ContractAddress: "0x94C4b0d6100de593d1D287C2b3a4Aab9aB7A039e",
					l2ContractAddress: "0xb3F17F3142E37577Df18464fb30a5Ff85854Ac5A"
				}, {
					name: "Test Bricks",
					l1ContractAddress: "0xABd77bE7998Ba88A4C232716be75e6cD6F36Ca8f",
					l2ContractAddress: "0x49B0392F4F8E56066509ba60acb83fe7389ec73d"
				}, {
					name: "Test Moons",
					l1ContractAddress: "0x52E72eD41A894b49511E885e084191ad7414eB6f",
					l2ContractAddress: "0xeae79885EEeb85d6cbc8D6aF6C65ec40b2b0e38a"
				}, {
					name: "Bricks",
					l1ContractAddress: "0xE0d8D7b8273De14e628d2F2A4a10f719F898450A",
					l2ContractAddress: "0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F"
				}, {
					name: "Moons",
					l1ContractAddress: "0xDF82c9014F127243CE1305DFE54151647d74B27A",
					l2ContractAddress: "0x138fAFa28a05A38f4d2658b12b0971221A7d5728"
				}];
			async function O() {
				const e = new s.ethers.providers.Web3Provider(Object(w.c)()).getSigner(),
					t = T.map(t => (async function(e, t) {
						const n = new s.ethers.Contract(t.l1ContractAddress, h.a, e),
							r = await n.balanceOf(e.getAddress());
						if (r.isZero()) return null;
						return {
							...t,
							balance: r
						}
					})(e, t));
				return (await Promise.all(t)).filter(e => null !== e)
			}
			async function A(e, t, n, a) {
				const o = new s.ethers.Contract(x, g, e),
					i = await o.inbox();
				console.log(`L1GatewayRouter: ${o.address}, inbox: ${i}`);
				const l = s.ethers.utils.defaultAbiCoder.encode(["uint256", "bytes"], [0, "0x"]),
					u = await o.outboundTransfer(n, t, a, 1e6, 0, l);
				console.log("Got transaction hash:", u.hash);
				const c = await u.wait();
				console.log("Receipt:", c);
				const d = await async function(e, t, n) {
					const s = new y.b(t, E, n).interface,
						a = s.getEvent("InboxMessageDelivered"),
						o = s.getEvent("InboxMessageDeliveredFromOrigin"),
						i = s.getEventTopic(a),
						l = s.getEventTopic(o),
						u = e.logs.filter(e => e.topics[0] === i || e.topics[0] === l);
					if (0 !== u.length) return u.map(e => r.a.from(e.topics[1]))
				}(c, i, e);
				if (!d) throw new Error("No L2 transaction were found in L1 tx: " + c.transactionHashTxHash);
				return console.log("seqnumbs", d), d
			}
			async function j(e, t, n, r) {
				const a = await t.getBlockNumber();
				for (console.log("block number", a); Date.now() < r;) {
					const t = new s.ethers.Contract(N, p, n),
						r = await t.getTimeout(e);
					if (r.gt(0)) {
						console.log(`Redeeming ticket ${e} with timeout ${r}`);
						const n = await t.redeem(e);
						console.log("tx", n);
						const s = await n.wait();
						return void console.log(`Ticket ${e} is redeemed @ ${n.hash}. Status: ${s.status}`)
					}
					console.log("Not found. Checking if ticket is already redeemed...");
					const i = t.filters.Redeemed(e);
					try {
						const n = await t.queryFilter(i);
						if (n.length > 0) return void console.log(`Ticket ${e} is already redeemed. Found event Redeemed(${n[0].args} @ tx ${n[0].transactionHash})`)
					} catch (o) {
						console.error(o)
					}
					console.log(`Waiting for ticket ${e}...`), await new Promise(e => setTimeout(e, 1e4)), console.log("Checking if ticket was created...");
					const l = t.filters.TicketCreated(e);
					try {
						const e = await t.queryFilter(l, a);
						e.length > 0 && console.log(`Found event TicketCreated(${e[0].args})`)
					} catch (o) {
						console.error(o)
					}
				}
				throw new Error(`Timed out while trying to find redeemable ticket ${e}.`)
			}
			async function C(e, t) {
				const n = new s.ethers.providers.JsonRpcProvider(Object(m.i)(m.a.ArbitrumRinkeby)),
					r = new s.ethers.Contract(e, h.a, n);
				return await r.balanceOf(t)
			}
			var k = n("./src/reddit/helpers/localStorage/index.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				I = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				M = n("./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.m.less"),
				P = n.n(M);
			const U = () => o.a.createElement(d.a, {
					className: P.a.loading
				}),
				B = () => o.a.createElement(S.a, {
					className: P.a.succeeded
				}),
				L = () => o.a.createElement(I.a, {
					className: P.a.failed
				}),
				F = "5391184";

			function D({
				destinationAddress: e,
				migration: t,
				network: n,
				saveMigrationState: r
			}) {
				const [i, l] = Object(a.useState)(""), [u, c] = Object(a.useState)(!!t.seqNums), [d, p] = Object(a.useState)(void 0), [h, g] = Object(a.useState)(!1), [f, b] = Object(a.useState)(null), y = [o.a.createElement("p", {
					key: "migrating"
				}, o.a.createElement("b", null, "Migrating ", s.ethers.utils.formatEther(t.balance), " ", t.name, " ", "to ", e, "...")), o.a.createElement("p", {
					key: "warning"
				}, "This will take many minutes. DO NOT CLOSE THIS WINDOW.")];
				if (Object(a.useEffect)(() => {
						!async function() {
							try {
								const a = new s.ethers.providers.Web3Provider(Object(w.c)()).getSigner();
								if (u) {
									if (n === F) {
										const n = await async function(e, t) {
											const n = new s.ethers.providers.JsonRpcProvider(Object(m.i)(m.a.ArbitrumRinkeby));
											let r = null;
											for (const s of t) r = await v(s, n), console.log(`Looking for ticket ${r} corresponding to SEQ ${s}`), await j(r, n, e, Date.now() + _);
											return console.log("All tickets redeemed!"), r
										}(a, t.seqNums);
										p(n), g(!0), r(), b(await C(t.l2ContractAddress, e))
									}
								} else {
									if ("4" !== n) throw new Error("Wallet must be set to Rinkeby Test Network");
									t.seqNums = await A(a, e, t.l1ContractAddress, t.balance), t.originalL2Balance = await C(t.l2ContractAddress, e), r(t), c(!0)
								}
							} catch (a) {
								throw console.error("Got error while running migration: ", a), l(a.message || a), a
							}
						}()
					}, [n]), u && y.push(o.a.createElement("p", {
						key: "l1-success"
					}, o.a.createElement(B, null), " L1-to-L2 transfer transaction completed.")), h && y.push(o.a.createElement("p", {
						key: "l2-success"
					}, o.a.createElement(B, null), " L2 tickets successfully redeemed.")), f) {
					const e = t.originalL2Balance || 0;
					f.gt(e) && y.push(o.a.createElement("p", {
						key: "balance"
					}, o.a.createElement(B, null), " L2 balance of ", t.name, " went from", " ", s.ethers.utils.formatEther(e), " to", " ", s.ethers.utils.formatEther(f), ".")), y.push(o.a.createElement("p", {
						key: "balance"
					}, o.a.createElement(B, null), " Migration complete", d ? o.a.createElement("span", null, " ", "at", " ", o.a.createElement("a", {
						href: `https://testnet.redditspace.com/tx/${d}/token-transfers`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, d)) : null, "! It may take several minutes for the transaction to settle."))
				}
				return i ? y.push(o.a.createElement("p", {
					key: "error"
				}, o.a.createElement(L, null), " Encountered an error: ", i.toString())) : u ? h ? f || y.push(o.a.createElement("p", {
					key: "l2-pending"
				}, o.a.createElement(U, null), " Loading L2 balance...")) : n !== F ? (y.push(o.a.createElement("p", {
					key: "change-network"
				}, o.a.createElement(U, null), " ", o.a.createElement("b", null, "Great! Now you'll need to switch networks to the Arbitrum chain."), " ", "Here are the instructions for MetaMask specifically:")), y.push(o.a.createElement("ol", {
					key: "instructions"
				}, o.a.createElement("li", null, "Tap Rinkeby Test Network to change networks"), o.a.createElement("li", null, 'Select "Custom RPC"'), o.a.createElement("li", null, 'For Network Name, enter: "Reddit Testnet"'), o.a.createElement("li", null, "For New RPC URL, enter: https://testnet.redditspace.com/rpc"), o.a.createElement("li", null, "For Chain ID, enter: 5391184"), o.a.createElement("li", null, "Hit Save")))) : y.push(o.a.createElement("p", {
					key: "l2-pending"
				}, o.a.createElement(U, null), " Redeeming L2 tickets... After ~10 minutes, you will be prompted to sign a new redemption transaction. You may need to update the gas limit in MetaMask to 21000, even though there is no gas required.")) : y.push(o.a.createElement("p", {
					key: "l1-pending"
				}, o.a.createElement(U, null), " Sending L1-to-L2 transfer transaction...")), o.a.createElement(o.a.Fragment, null, y)
			}
			const G = "arb-migration-l1";

			function H(e) {
				e ? Object(k.Fb)(G, e) : window.localStorage && window.localStorage.removeItem(G)
			}

			function V() {
				const e = Object(i.d)(),
					t = Object(w.c)(),
					n = Object(i.e)(R.K),
					[d, m] = Object(a.useState)(Object(w.d)()),
					[p, h] = Object(a.useState)(Object(w.e)()),
					[g, f] = Object(a.useState)(function() {
						var e, t;
						const n = Object(k.B)(G);
						return n && (n.balance = r.a.from(n.balance), n.seqNums = null === (e = n.seqNums) || void 0 === e ? void 0 : e.map(e => r.a.from(e)), n.originalL2Balance = null !== (t = n.originalL2Balance) && void 0 !== t ? t : r.a.from(n.originalL2Balance)), n
					}()),
					[b, y] = Object(a.useState)((null == g ? void 0 : g.destinationAddress) || ""),
					[E, v] = Object(a.useState)(""),
					x = Object(i.e)(e => e.user.wallets),
					N = [...new Set(Object.values(x).map(e => e.latest.publicAddress).filter(e => !!e))];

				function _(e) {
					try {
						(e = s.ethers.utils.getAddress(e)) && "0x0000000000000000000000000000000000000000" !== e ? (g.destinationAddress = e, y(e)) : alert("Invalid address!")
					} catch {
						alert("Invalid address!")
					}
				}
				Object(a.useEffect)(() => {
					n && (e(Object(l.h)({
						subredditId: "t5_3oeyf"
					})), e(Object(l.h)({
						subredditId: "t5_2wlj3"
					})));
					const t = window.setInterval(() => {
						m(Object(w.d)()), h(Object(w.e)())
					}, 500);
					return () => window.clearInterval(t)
				}, [e, m, h, n]);
				let T = null;
				return T = n ? d ? g || "4" === p ? g ? b ? o.a.createElement(D, {
					destinationAddress: b,
					migration: g,
					network: p,
					saveMigrationState: H
				}) : o.a.createElement(o.a.Fragment, null, o.a.createElement("p", null, o.a.createElement("b", null, "Please select a destination wallet address for the ", g.name, ":")), N.map(e => o.a.createElement("p", {
					key: e
				}, o.a.createElement(u.i, {
					onClick: () => _(e)
				}, "Your Vault (", e, ")"))), o.a.createElement("p", null, o.a.createElement(c.c, {
					label: "Destination wallet address",
					type: "text",
					value: E,
					onChange: e => v(e.target.value),
					style: {
						width: "380px"
					}
				}), o.a.createElement(u.i, {
					onClick: () => _(E),
					style: {
						display: "inline-block"
					}
				}, "Custom"))) : o.a.createElement(W, {
					setMigration: f,
					walletAddress: d
				}) : o.a.createElement("p", null, o.a.createElement("b", null, "Please select the Rinkeby Test Network in your wallet and reload this page.")) : o.a.createElement(o.a.Fragment, null, o.a.createElement("p", null, "This migration tool is designed to work with Chrome + MetaMask. If your Points are in a different wallet, we suggest moving them into MetaMask first. You should be able to use any web3-enabled wallet, but it is untested. Not all wallets will work with our Arbitrum chain. It must be a wallet where you can add a custom network with RPC url and a different chain id."), o.a.createElement("p", null, t ? o.a.createElement(u.i, {
					onClick: w.b
				}, "Connect to wallet") : o.a.createElement("b", null, "Please install ", o.a.createElement("a", {
					href: "https://metamask.io/"
				}, "MetaMask"), " or an equivalent wallet."))) : o.a.createElement("p", null, o.a.createElement("b", null, "Please log in to contiue.")), o.a.createElement("div", {
					className: P.a.container
				}, o.a.createElement("h1", {
					className: P.a.header
				}, "Let's get those Points moved over"), o.a.createElement("p", null, "If you moved your Moons or Bricks out of your Vault, you will need to migrate them using this tool in order to get them onto our new system. This tool will help walk you through the necessary steps."), T)
			}

			function W({
				setMigration: e,
				walletAddress: t
			}) {
				const [n, r] = Object(a.useState)(null);
				return Object(a.useEffect)(() => {
					O().then(e => {
						r(e)
					})
				}, []), n ? n.length ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", null, o.a.createElement("b", null, "Please choose one to migrate:")), n.map(t => o.a.createElement("p", {
					key: t.name
				}, o.a.createElement(u.i, {
					onClick: () => e(t)
				}, s.ethers.utils.formatEther(t.balance), " ", t.name)))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: P.a.error
				}, o.a.createElement("b", null, "No Points to migrate")), o.a.createElement("p", null, "Hmmm... I can't find any unmigrated points for your connected address: ", o.a.createElement("b", null, t), "."), o.a.createElement("ul", null, o.a.createElement("li", null, "If your Points were already in your Vault, they have already been migrated."), o.a.createElement("li", null, "If your Points were in a different wallet, make sure you send them to this address to migrate them. Or connect that wallet with this wallet software/extension."), o.a.createElement("li", null, "If you sent your Points to your Vault instead of this address, you will need to import your Vault into this wallet software (e.g. MetaMask). You can do this by using the 12-word phrase available in Vault Settings."))) : o.a.createElement("p", null, o.a.createElement("b", null, "Loading Points balances...", " ", o.a.createElement(d.a, {
					className: P.a.loadingSpinner,
					sizePx: 14
				})))
			}

			function z() {
				return o.a.createElement(V, null)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-meta-ArbitrumPointsMigrationPage.aacc9aac2d694070a28b.js.map