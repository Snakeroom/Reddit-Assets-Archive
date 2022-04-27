// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.1bedacfd0a6df339599e.js
// Retrieved at 4/27/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			}));
			var r = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = n("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				o = n("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const i = new(n("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("address/5.4.0");

			function c(e) {
				Object(r.l)(e, 20) || i.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					n = new Uint8Array(40);
				for (let r = 0; r < 40; r++) n[r] = t[r].charCodeAt(0);
				const s = Object(r.a)(Object(a.a)(n));
				for (let r = 0; r < 40; r += 2) s[r >> 1] >> 4 >= 8 && (t[r] = t[r].toUpperCase()), (15 & s[r >> 1]) >= 8 && (t[r + 1] = t[r + 1].toUpperCase());
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
				let n = String(98 - parseInt(t, 10) % 97);
				for (; n.length < 2;) n = "0" + n;
				return n
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
				const n = Object(r.o)(Object(r.a)(s.a.from(e.nonce).toHexString()));
				return h(Object(r.e)(Object(a.a)(Object(o.encode)([t, n])), 12))
			}

			function g(e, t, n) {
				return 32 !== Object(r.d)(t) && i.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(r.d)(n) && i.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", n), h(Object(r.e)(Object(a.a)(Object(r.b)(["0xff", h(e), t, n])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "bignumber/5.4.2"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return x
			}));
			var r = n("./node_modules/bn.js/lib/bn.js"),
				s = n.n(r),
				a = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = n("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				i = n("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				c = s.a.BN;
			const l = new o.b(i.a),
				d = {},
				u = 9007199254740991;

			function m(e) {
				return null != e && (f.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(a.l)(e) || "bigint" == typeof e || Object(a.j)(e))
			}
			let h = !1;
			class f {
				constructor(e, t) {
					l.checkNew(new.target, f), e !== d && l.throwError("cannot call constructor directly; use BigNumber.from", o.b.errors.UNSUPPORTED_OPERATION, {
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
					return l.throwError("this platform does not support BigInt", o.b.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", o.b.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", o.b.errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
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
					if (Object(a.j)(t)) return f.from(Object(a.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return f.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(a.l)(e) || "-" === e[0] && Object(a.l)(e.substring(1)))) return f.from(e)
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

			function v(e, t, n) {
				const r = {
					fault: e,
					operation: t
				};
				return null != n && (r.value = n), l.throwError(e, o.b.errors.NUMERIC_FAULT, r)
			}

			function E(e) {
				return new c(e, 36).toString(16)
			}

			function x(e) {
				return new c(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "m", (function() {
				return w
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

			function c(e, t) {
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

			function l(e) {
				const t = e.map(e => c(e)),
					n = t.reduce((e, t) => e + t.length, 0),
					r = new Uint8Array(n);
				return t.reduce((e, t) => (r.set(t, e), e + t.length), 0), a(r)
			}

			function d(e) {
				let t = c(e);
				if (0 === t.length) return t;
				let n = 0;
				for (; n < t.length && 0 === t[n];) n++;
				return n && (t = t.slice(n)), t
			}

			function u(e, t) {
				(e = c(e)).length > t && r.throwArgumentError("value out of range", "value", arguments[0]);
				const n = new Uint8Array(t);
				return n.set(e, t - e.length), a(n)
			}

			function m(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			const h = "0123456789abcdef";

			function f(e, t) {
				if (t || (t = {}), "number" == typeof e) {
					r.checkSafeUint53(e, "invalid hexlify value");
					let t = "";
					for (; e;) t = h[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), s(e)) return e.toHexString();
				if (m(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : r.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (i(e)) {
					let t = "0x";
					for (let n = 0; n < e.length; n++) {
						let r = e[n];
						t += h[(240 & r) >> 4] + h[15 & r]
					}
					return t
				}
				return r.throwArgumentError("invalid hexlify value", "value", e)
			}

			function p(e) {
				if ("string" != typeof e) e = f(e);
				else if (!m(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function b(e, t, n) {
				return "string" != typeof e ? e = f(e) : (!m(e) || e.length % 2) && r.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != n ? "0x" + e.substring(t, 2 + 2 * n) : "0x" + e.substring(t)
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
				"string" != typeof e && (e = f(e)), m(e) || r.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let t = 0;
				for (; t < e.length && "0" === e[t];) t++;
				return "0x" + e.substring(t)
			}

			function x(e, t) {
				for ("string" != typeof e ? e = f(e) : m(e) || r.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && r.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
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
				if (o(e)) {
					const n = c(e);
					65 !== n.length && r.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = f(n.slice(0, 32)), t.s = f(n.slice(32, 64)), t.v = n[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : r.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (n[32] |= 128), t._vs = f(n.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const n = u(c(t._vs), 32);
						t._vs = f(n);
						const s = n[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = s : t.recoveryParam !== s && r.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n[0] &= 127;
						const a = f(n);
						null == t.s ? t.s = a : t.s !== a && r.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? r.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && r.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && m(t.r) ? t.r = x(t.r, 32) : r.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && m(t.s) ? t.s = x(t.s, 32) : r.throwArgumentError("signature missing or invalid s", "signature", e);
					const n = c(t.s);
					n[0] >= 128 && r.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (n[0] |= 128);
					const s = f(n);
					t._vs && (m(t._vs) || r.throwArgumentError("signature invalid _vs", "signature", e), t._vs = x(t._vs, 32)), null == t._vs ? t._vs = s : t._vs !== s && r.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function w(e) {
				return f(l([(e = N(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
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
					for (var s = !r.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, a = "0123456789abcdef".split(""), o = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], d = function(e, t, n) {
							return function(r) {
								return new N(e, t, e).update(r)[n]()
							}
						}, u = function(e, t, n) {
							return function(r, s) {
								return new N(e, t, s).update(r)[n]()
							}
						}, m = function(e, t) {
							var n = d(e, t, "hex");
							n.create = function() {
								return new N(e, t, e)
							}, n.update = function(e) {
								return n.create().update(e)
							};
							for (var r = 0; r < l.length; ++r) {
								var s = l[r];
								n[s] = d(e, t, s)
							}
							return n
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
								var n = u(e, t, "hex");
								n.create = function(n) {
									return new N(e, t, n)
								}, n.update = function(e, t) {
									return n.create(t).update(e)
								};
								for (var r = 0; r < l.length; ++r) {
									var s = l[r];
									n[s] = u(e, t, s)
								}
								return n
							}
						}], f = {}, p = [], b = 0; b < h.length; ++b)
						for (var g = h[b], v = g.bits, E = 0; E < v.length; ++E) {
							var x = g.name + "_" + v[E];
							p.push(x), f[x] = g.createMethod(v[E], g.padding)
						}

					function N(e, t, n) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
						for (var r = 0; r < 50; ++r) this.s[r] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var n, r, s = e.length, a = this.blocks, i = this.byteCount, c = this.blockCount, l = 0, d = this.s; l < s;) {
							if (this.reset)
								for (this.reset = !1, a[0] = this.block, n = 1; n < c + 1; ++n) a[n] = 0;
							if (t)
								for (n = this.start; l < s && n < i; ++l) a[n >> 2] |= e[l] << o[3 & n++];
							else
								for (n = this.start; l < s && n < i; ++l)(r = e.charCodeAt(l)) < 128 ? a[n >> 2] |= r << o[3 & n++] : r < 2048 ? (a[n >> 2] |= (192 | r >> 6) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : r < 55296 || r >= 57344 ? (a[n >> 2] |= (224 | r >> 12) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++l)), a[n >> 2] |= (240 | r >> 18) << o[3 & n++], a[n >> 2] |= (128 | r >> 12 & 63) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]);
							if (this.lastByteIndex = n, n >= i) {
								for (this.start = n - i, this.block = a[c], n = 0; n < c; ++n) d[n] ^= a[n];
								w(d), this.reset = !0
							} else this.start = n
						}
						return this
					}, N.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							n = this.blockCount,
							r = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
						for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
						w(r)
					}, N.prototype.toString = N.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, s = this.extraBytes, o = 0, i = 0, c = ""; i < r;) {
							for (o = 0; o < t && i < r; ++o, ++i) e = n[o], c += a[e >> 4 & 15] + a[15 & e] + a[e >> 12 & 15] + a[e >> 8 & 15] + a[e >> 20 & 15] + a[e >> 16 & 15] + a[e >> 28 & 15] + a[e >> 24 & 15];
							i % t == 0 && (w(n), o = 0)
						}
						return s && (e = n[o], s > 0 && (c += a[e >> 4 & 15] + a[15 & e]), s > 1 && (c += a[e >> 12 & 15] + a[e >> 8 & 15]), s > 2 && (c += a[e >> 20 & 15] + a[e >> 16 & 15])), c
					}, N.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							n = this.s,
							r = this.outputBlocks,
							s = this.extraBytes,
							a = 0,
							o = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); o < r;) {
							for (a = 0; a < t && o < r; ++a, ++o) c[o] = n[a];
							o % t == 0 && w(n)
						}
						return s && (c[a] = n[a], e = e.slice(0, i)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, n = this.blockCount, r = this.s, s = this.outputBlocks, a = this.extraBytes, o = 0, i = 0, c = []; i < s;) {
							for (o = 0; o < n && i < s; ++o, ++i) e = i << 2, t = r[o], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % n == 0 && w(r)
						}
						return a && (e = i << 2, t = r[o], a > 0 && (c[e] = 255 & t), a > 1 && (c[e + 1] = t >> 8 & 255), a > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var w = function(e) {
						var t, n, r, s, a, o, c, l, d, u, m, h, f, p, b, g, v, E, x, N, w, y, _, I, j, O, k, C, T, A, P, R, M, S, U, B, F, D, G, L, V, W, H, z, Z, X, Y, q, J, K, $, Q, ee, te, ne, re, se, ae, oe, ie, ce, le, de;
						for (r = 0; r < 48; r += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | c >>> 31), n = (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | o >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = s ^ (l << 1 | d >>> 31), n = a ^ (d << 1 | l >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = o ^ (u << 1 | m >>> 31), n = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = l ^ (h << 1 | f >>> 31), n = d ^ (f << 1 | h >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = u ^ (s << 1 | a >>> 31), n = m ^ (a << 1 | s >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, p = e[0], b = e[1], X = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, C = e[20] << 3 | e[21] >>> 29, T = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, W = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, S = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, q = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, A = e[33] << 13 | e[32] >>> 19, P = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, de = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, F = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, K = e[34] << 15 | e[35] >>> 17, $ = e[35] << 15 | e[34] >>> 17, R = e[45] << 29 | e[44] >>> 3, M = e[44] << 29 | e[45] >>> 3, I = e[6] << 28 | e[7] >>> 4, j = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, D = e[26] << 25 | e[27] >>> 7, G = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, Z = e[9] << 27 | e[8] >>> 5, O = e[18] << 20 | e[19] >>> 12, k = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, L = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, y = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~g & E, e[1] = b ^ ~v & x, e[10] = I ^ ~O & C, e[11] = j ^ ~k & T, e[20] = S ^ ~B & D, e[21] = U ^ ~F & G, e[30] = z ^ ~X & q, e[31] = Z ^ ~Y & J, e[40] = te ^ ~re & ae, e[41] = ne ^ ~se & oe, e[2] = g ^ ~E & N, e[3] = v ^ ~x & w, e[12] = O ^ ~C & A, e[13] = k ^ ~T & P, e[22] = B ^ ~D & L, e[23] = F ^ ~G & V, e[32] = X ^ ~q & K, e[33] = Y ^ ~J & $, e[42] = re ^ ~ae & ie, e[43] = se ^ ~oe & ce, e[4] = E ^ ~N & y, e[5] = x ^ ~w & _, e[14] = C ^ ~A & R, e[15] = T ^ ~P & M, e[24] = D ^ ~L & W, e[25] = G ^ ~V & H, e[34] = q ^ ~K & Q, e[35] = J ^ ~$ & ee, e[44] = ae ^ ~ie & le, e[45] = oe ^ ~ce & de, e[6] = N ^ ~y & p, e[7] = w ^ ~_ & b, e[16] = A ^ ~R & I, e[17] = P ^ ~M & j, e[26] = L ^ ~W & S, e[27] = V ^ ~H & U, e[36] = K ^ ~Q & z, e[37] = $ ^ ~ee & Z, e[46] = ie ^ ~le & te, e[47] = ce ^ ~de & ne, e[8] = y ^ ~p & g, e[9] = _ ^ ~b & v, e[18] = R ^ ~I & O, e[19] = M ^ ~j & k, e[28] = W ^ ~S & B, e[29] = H ^ ~U & F, e[38] = Q ^ ~z & X, e[39] = ee ^ ~Z & Y, e[48] = le ^ ~te & re, e[49] = de ^ ~ne & se, e[0] ^= i[r], e[1] ^= i[r + 1]
					};
					if (s) e.exports = f;
					else
						for (b = 0; b < p.length; ++b) r[p[b]] = f[p[b]]
				}()
			}).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			}));
			const r = "logger/5.4.1";
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
				c = null;
			const l = function() {
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
			var d, u;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(d || (d = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(u || (u = {}));
			const m = "0123456789abcdef";
			class h {
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
					this._log(h.levels.DEBUG, e)
				}
				info(...e) {
					this._log(h.levels.INFO, e)
				}
				warn(...e) {
					this._log(h.levels.WARNING, e)
				}
				makeError(e, t, n) {
					if (a) return this.makeError("censored error", t, {});
					t || (t = h.errors.UNKNOWN_ERROR), n || (n = {});
					const r = [];
					Object.keys(n).forEach(e => {
						const t = n[e];
						try {
							if (t instanceof Uint8Array) {
								let n = "";
								for (let e = 0; e < t.length; e++) n += m[t[e] >> 4], n += m[15 & t[e]];
								r.push(e + "=Uint8Array(0x" + n + ")")
							} else r.push(e + "=" + JSON.stringify(t))
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
					return this.throwError(e, h.errors.INVALID_ARGUMENT, {
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
					null == e && (e = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: l
					})
				}
				checkSafeUint53(e, t) {
					"number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(t, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, t, n) {
					n = n ? ": " + n : "", e < t && this.throwError("missing argument" + n, h.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: t
					}), e > t && this.throwError("too many arguments" + n, h.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: t
					})
				}
				checkNew(e, t) {
					e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: t.name
					})
				}
				checkAbstract(e, t) {
					e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: t.name
					})
				}
				static globalLogger() {
					return c || (c = new h(r)), c
				}
				static setCensorship(e, t) {
					if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), s) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					a = !!e, s = !!t
				}
				static setLogLevel(e) {
					const t = o[e.toLowerCase()];
					null != t ? i = t : h.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new h(e)
				}
			}
			h.errors = u, h.levels = d
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "encode", (function() {
				return c
			})), n.d(t, "decode", (function() {
				return u
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

			function c(e) {
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

			function l(e, t, n, r) {
				const o = [];
				for (; n < t + 1 + r;) {
					const i = d(e, n);
					o.push(i.result), (n += i.consumed) > t + 1 + r && a.throwError("child data too short", s.b.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + r,
					result: o
				}
			}

			function d(e, t) {
				if (0 === e.length && a.throwError("data too short", s.b.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const n = e[t] - 247;
					t + 1 + n > e.length && a.throwError("data short segment too short", s.b.errors.BUFFER_OVERRUN, {});
					const r = i(e, t + 1, n);
					return t + 1 + n + r > e.length && a.throwError("data long segment too short", s.b.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1 + n, n + r)
				}
				if (e[t] >= 192) {
					const n = e[t] - 192;
					return t + 1 + n > e.length && a.throwError("data array too short", s.b.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, n)
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

			function u(e) {
				const t = Object(r.a)(e),
					n = d(t, 0);
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
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(a.m),
				i = Object(r.a)(a.n),
				c = Object(r.a)(a.l);
			t.a = e => async (t, n, r) => {
				let {
					apiContext: a
				} = r;
				t(o({
					subredditId: e.subredditId
				}));
				const l = await Object(s.b)(a(), e);
				l.ok ? t(i({
					subredditId: e.subredditId,
					...l.body
				})) : t(c({
					error: l.error
				}))
			}
		},
		"./src/reddit/components/Governance/EthSymbol/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts");

			function o(e) {
				const t = `${a.a.assetPath}/img/communityPoints/ethsymbol.png`;
				return s.a.createElement("img", {
					className: e.className,
					src: t
				})
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(l);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalFrame/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_1RMgC_IsaX9SGzUjjbcGtj",
				container: "_2qX0yQN6WBIGErOoDNckNu",
				content: "_2UPXVFZgjdPRfntBixjPTw",
				header: "_2ioZ5yr0kYv0C_0Zduxz92",
				title: "pj4Qau60_BFcnyMJZEAf9"
			}
		},
		"./src/reddit/components/Governance/ModalFrame/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				l = n.n(c);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(l.a.container, e.className)
				}, s.a.createElement("header", {
					className: l.a.header
				}, s.a.createElement("div", {
					className: l.a.title
				}, e.onBack ? s.a.createElement(o.a, {
					className: l.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(i.a, {
					className: l.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: l.a.content
				}, e.children))
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function l(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				}
			});
			t.a = Object(a.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					a = `${i.a.assetPath}/${r}`;
				if (e.grey && a.endsWith(".svg")) {
					const t = `url(${a}) center/cover`;
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
					src: a
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Balances/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "rwrfkJQptroE9cJtK7rj8",
				button: "_3m4rtUhAeB5ApWwekh5dQB",
				open: "_3NZuj_XThx2KvjhpmieoIP",
				grid: "vhU6FFvI_NaPT2Fr5lOh0",
				chevron: "_1qXQqed1wRJGTuiZxmI6FC",
				container: "iQCPe-GBEFInAV3CbSKXc",
				label: "_1DPWDfueYnegwgwQJoz1ZC",
				token: "_3ZMehXRD2FjgTfSEuMZRlL",
				type: "_2cWlpDSw_0Uw3VHprHWyqq"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				centered: "RdtYu8XaD9LWXvfZBLew_",
				fullButton: "_2273qEvOSP22zPsu7fYItS",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_7Ee25wJvkxZ_LHaSL7gm9",
				grid: "_1vDUEFG58WSS6oMh8CoEqu",
				image: "vhoZGZePy-2FjE5gFC9wJ",
				text: "oiclFwcdrYr1O8czq24s"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/MainnetTitle/index.m.less": function(e, t, n) {
			e.exports = {
				amounts: "_1bWVrHgFitsbz2S5MEB8aJ",
				container: "_1OhYDeAehcclPi2GocVQ6j",
				closeIcon: "_1SducwCaP7lieJg7BiNzoZ",
				title: "_1ZoAvHobWA_rkGC8lvaQnv"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.m.less": function(e, t, n) {
			e.exports = {
				amounts: "_39IyOi54HaCaONFUbWiBdi",
				breakdown: "_3EnZO6u6WCo7x7UV_Z1N_d",
				continue: "_3-_sbRm6wz9GJiuVbMKPul",
				description: "_10rX3RUEkRHon8CZ9FFNhz",
				disclaimer: "_pL33iAHRMPNmUP_0dB7J",
				eth: "_1z6hEAsiukBUIi_tfsq_ic",
				input: "_107KG41q-kptEfJh5papwe",
				lineItem: "_3CXYV2ZJxeK3_DFvLi375",
				moonPayLogo: "_2eUAyqk3M4VTdpCznuhLM4",
				total: "_2WrPQboRmL-w3oM0XOofnJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_134GOKwtTYaSJx9vjKBK6M",
				eth: "_7MSRrZEb2oeFmhohMwCtA",
				infoIcon: "_223RPgGABUonZn3S5susrf"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/NotEnoughEth/index.m.less": function(e, t, n) {
			e.exports = {
				contentMsg: "_2VPPBgnBk5V13iuB7RMZlW",
				contentTitle: "_2FIypuB8tm2xGQLaTxN9EK",
				continue: "_3WBwkSBM-t7rY5sa1IJXod",
				copyIcon: "_3IsKZJEwIQ0Y_T4e0z3s6w",
				success: "_33rpLAIRSlJwv4xmNeX3Oi",
				fees: "_2xKlD0VwnsVu_cWImvq5RB",
				input: "_3wtXrsMzNxijWyaJZ9S8t0",
				inputContainer: "_1iCYEeuZ5AN5Ekzli9XLTF"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return N
			}));
			var r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/usernameAvailable.ts"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = n("./src/reddit/icons/svgs/Info/index.tsx"),
				b = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				g = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				v = n.n(g),
				E = n("./node_modules/fbt/lib/FbtPublic.js");
			const x = 2,
				N = 20;
			var w;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(w || (w = {}));
			class y extends o.a.PureComponent {
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
									return w.Invalid;
								case d.b.Error:
									return w.Error;
								case d.b.Unavailable:
									return w.Valid;
								default:
									return w.Searching
							}
						}
						return w.Empty
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
						this.props.onChange(e, this.usernameValidity(e) === w.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(l.a)(v.a.container, this.props.className)
					}, o.a.createElement(m.c, {
						redditStyle: !0,
						className: v.a.input,
						label: E.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: N,
						style: {
							borderColor: _(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case w.Error:
								return o.a.createElement(p.a, {
									className: v.a.icon,
									style: {
										fill: u.a.notice
									}
								});
							case w.Invalid:
								return o.a.createElement(b.a, {
									className: v.a.icon,
									style: {
										fill: u.a.warning
									}
								});
							case w.Searching:
								return o.a.createElement(h.a, {
									className: v.a.loadingIcon,
									sizePx: 8
								});
							case w.Valid:
								return o.a.createElement(f.a, {
									className: v.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: v.a.message,
						style: {
							color: _(e)
						}
					}, function(e) {
						switch (e) {
							case w.Error:
								return E.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case w.Invalid:
								return E.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function _(e) {
				switch (e) {
					case w.Error:
						return u.a.notice;
					case w.Invalid:
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
			}))(y)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				networkFees: "_2yEFUGP_yzet7a91fgVe51",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/governance/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/featureFlags/index.ts"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/crypto/points.ts"),
				b = n("./src/reddit/selectors/crypto/wallet.ts"),
				g = n("./src/reddit/selectors/experiments/mainnet.ts"),
				v = n("./node_modules/reselect/es/index.js"),
				E = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/Governance/Token/index.tsx"),
				w = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = n("./src/reddit/selectors/gov.ts"),
				j = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				O = n.n(j),
				k = n("./node_modules/fbt/lib/FbtPublic.js");
			const C = Object(v.c)({
				isMainnetEnabled: g.a,
				points: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(p.b)(e, n)
				},
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: I.d
			});
			var T = Object(i.b)(C)((function(e) {
					const {
						amount: t,
						className: n,
						isMainnetEnabled: s,
						onTransferPoints: a,
						points: i,
						subredditId: c,
						tabIndex: l,
						transferIsPending: d,
						wallet: u
					} = e, m = (null == u ? void 0 : u.unlockedAmount) || "0", h = new r.BigNumber(t || "0"), p = new r.BigNumber(m), b = p.isGreaterThanOrEqualTo(h), g = e.submissionEnabled && !p.isZero() && b;
					return o.a.createElement("div", {
						className: Object(E.a)(O.a.container, n, {
							[O.a.centered]: s
						})
					}, !s && o.a.createElement("div", {
						className: O.a.available
					}, o.a.createElement("div", null, k.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), o.a.createElement(N.a, {
						grey: !0,
						className: O.a.token,
						subredditId: c
					}), o.a.createElement("div", {
						style: {
							color: b ? void 0 : w.a.warning
						}
					}, Object(x.a)(Object(f.b)(m, null == i ? void 0 : i.displayConversion)))), o.a.createElement(y.l, {
						disabled: !g,
						className: s ? O.a.fullButton : O.a.button,
						tabIndex: l,
						onClick: a
					}, d ? o.a.createElement(_.a, {
						className: O.a.loadingIcon,
						sizePx: 20
					}) : s ? k.fbt._("Continue", null, {
						hk: "GiYrM"
					}) : k.fbt._("Send", null, {
						hk: "18b7Wd"
					})))
				})),
				A = n("./src/config.ts"),
				P = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				R = n("./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less"),
				M = n.n(R);
			const S = e => `${A.a.assetPath}/img/communityPoints/${e}.png`;

			function U(e) {
				return o.a.createElement(P.a, {
					className: e.className,
					title: k.fbt._("What is the network fee?", null, {
						hk: "4zafLX"
					}),
					onBack: e.onBack
				}, o.a.createElement("div", {
					className: M.a.grid
				}, o.a.createElement("img", {
					className: M.a.image,
					src: S("fees-1")
				}), o.a.createElement("div", {
					className: M.a.text
				}, k.fbt._("A network fee is something all users must pay to perform any function on the Ethereum blockchain.", null, {
					hk: "8M5S7"
				})), o.a.createElement("img", {
					className: M.a.image,
					src: S("fees-2")
				}), o.a.createElement("div", {
					className: M.a.text
				}, k.fbt._("These fees are used to compensate Ethereum miners for the energy required to verify a transaction and for providing a layer of security to the Ethereum network by making it too expensive for malicious users to spam the network.", null, {
					hk: "1W40Hm"
				})), o.a.createElement("img", {
					className: M.a.image,
					src: S("fees-3")
				}), o.a.createElement("div", {
					className: M.a.text
				}, k.fbt._("Paying network fee required to ensure your cryptocurrency transfers arrive promptly. The blockchain fee is one of the main tools used to speed up crypto transactions, which are often slow due to high congestion on the blockchain network.", null, {
					hk: "1BnFC8"
				})), o.a.createElement("img", {
					className: M.a.image,
					src: S("fees-4")
				}), o.a.createElement("div", {
					className: M.a.text
				}, k.fbt._("The fee amount is calculate based on network's congestion. The lower the blockchain fee, the lower your transaction's priority in the blockchain network. Right now, Vault select lowest fee possible as a coast-saving method.", null, {
					hk: "3u1Sgp"
				}))), o.a.createElement(y.a, {
					className: M.a.button,
					priority: y.c.Secondary,
					onClick: e.onBack
				}, k.fbt._("Continue", null, {
					hk: "WLaqI"
				})))
			}
			var B, F = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				D = n("./src/reddit/components/Governance/EthSymbol/index.tsx"),
				G = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				L = n("./src/reddit/components/Governance/TransferPointsModal/Balances/index.m.less"),
				V = n.n(L);
			! function(e) {
				e.Eth = "Eth", e.Points = "Points"
			}(B || (B = {}));
			const W = e => {
				var t;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: V.a.type
				}, e.points ? o.a.createElement(N.a, {
					grey: !0,
					className: V.a.token,
					subredditId: e.subredditId
				}) : o.a.createElement(D.a, {
					className: V.a.token
				}), e.chevron && o.a.createElement(G.a, {
					className: V.a.chevron
				})), o.a.createElement("div", {
					className: V.a.amount
				}, e.points ? Object(f.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion) : Object(f.c)(e.amountEth)))
			};
			var H = e => {
					const t = e.show || B.Points,
						[n, r] = Object(a.useState)(!1),
						s = Object(i.e)(t => Object(p.b)(t, e.subredditId));
					return o.a.createElement("div", {
						className: Object(E.a)(V.a.container, e.className)
					}, o.a.createElement("div", {
						className: V.a.label
					}, k.fbt._("Available", null, {
						hk: "1DKzeY"
					})), o.a.createElement("button", {
						className: Object(E.a)(V.a.button, {
							[V.a.open]: n
						}),
						onClick: () => r(e => !e)
					}, o.a.createElement("div", {
						className: V.a.grid
					}, o.a.createElement(W, {
						chevron: !0,
						amount: e.amount,
						amountEth: e.amountEth,
						points: t === B.Points,
						pointsDetails: s,
						subredditId: e.subredditId
					}), o.a.createElement(W, {
						amount: e.amount,
						amountEth: e.amountEth,
						points: t === B.Eth,
						pointsDetails: s,
						subredditId: e.subredditId
					}))))
				},
				z = n("./src/reddit/components/Governance/TransferPointsModal/MainnetTitle/index.m.less"),
				Z = n.n(z);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				return o.a.createElement("header", {
					className: Object(E.a)(Z.a.container, e.className)
				}, o.a.createElement("div", {
					className: Z.a.title
				}, o.a.createElement(F.a, {
					className: Z.a.closeIcon
				}), o.a.createElement("div", null, X._("Send {tokenName}", [X._param("tokenName", e.tokenName)], {
					hk: "33shhf"
				}))), o.a.createElement("div", {
					className: Z.a.amounts
				}, o.a.createElement(H, {
					amount: e.amount,
					amountEth: e.amountEth,
					subredditId: e.subredditId
				})))
			}
			var q = n("./src/reddit/controls/FormFields/index.tsx");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function K(e) {
				return o.a.createElement("svg", J({}, e, {
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}), o.a.createElement("circle", {
					cx: "8",
					cy: "8",
					r: "8"
				}), o.a.createElement("path", {
					d: "M4.9039 7.33105L7.82947 2.57699C7.90757 2.45008 8.09204 2.45008 8.17014 2.57699L11.0957 7.33105C11.1533 7.42466 11.1246 7.54721 11.0314 7.60547L8.1058 9.43395C8.04095 9.47448 7.95866 9.47448 7.8938 9.43395L4.96823 7.60547C4.87502 7.54721 4.84629 7.42466 4.9039 7.33105Z",
					fill: "white"
				}), o.a.createElement("path", {
					d: "M4.85734 8.92901L7.84636 12.5158C7.92631 12.6118 8.07369 12.6118 8.15364 12.5158L11.1427 8.92901C11.2898 8.75247 11.0718 8.50778 10.8795 8.63363L8.10953 10.4467C8.043 10.4902 7.957 10.4902 7.89047 10.4467L5.12051 8.63363C4.92824 8.50778 4.71022 8.75247 4.85734 8.92901Z",
					fill: "white"
				}))
			}
			var $ = n("./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.m.less"),
				Q = n.n($);

			function ee(e) {
				const [t, n] = Object(a.useState)(new s.a("5")), [r, i] = Object(a.useState)(null);
				return Object(a.useEffect)(() => {
					r || new Promise(e => {
						setTimeout(() => e(new s.a("2968.75")), 2e3)
					}).then(i)
				}, [r, i]), o.a.createElement(P.a, {
					className: e.className,
					headerRight: o.a.createElement("img", {
						className: Q.a.moonPayLogo,
						src: `${A.a.assetPath}/img/communityPoints/moonpay-logo.png`
					}),
					title: k.fbt._("Buy Ethereum for Network Fees", null, {
						hk: "3t78Fv"
					}),
					onBack: e.onBack
				}, o.a.createElement(q.c, {
					redditStyle: !0,
					className: Q.a.input,
					label: k.fbt._("amount", null, {
						hk: "3rCgsf"
					}),
					type: "text",
					value: `$ ${t.toString()}`,
					onChange: () => {}
				}), o.a.createElement("div", {
					className: Q.a.description
				}, k.fbt._("MoonPay`'s minimum required payment amount is $5. {linebreak} Enough for about 5-10 transactions.", [k.fbt._param("linebreak", o.a.createElement("br", null))], {
					hk: "4AixRi"
				})), o.a.createElement("div", {
					className: Q.a.amounts
				}, o.a.createElement(y.a, {
					priority: y.c.Secondary,
					onClick: () => n(new s.a("5"))
				}, "$5"), o.a.createElement(y.a, {
					priority: y.c.Secondary,
					onClick: () => n(new s.a("10"))
				}, "$10"), o.a.createElement(y.a, {
					priority: y.c.Secondary,
					onClick: () => n(new s.a("25"))
				}, "$25")), o.a.createElement("div", {
					className: Q.a.breakdown
				}, o.a.createElement("div", {
					className: Q.a.lineItem
				}, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(K, {
					className: Q.a.eth
				}), t.minus(.25).dividedBy(r).decimalPlaces(4).toString(), k.fbt._("ETH", null, {
					hk: "1KPU7W"
				})) : k.fbt._("calculating...", null, {
					hk: "1Hf6i4"
				})), o.a.createElement("div", null, "$", t.minus(new s.a(.25)).toString()), o.a.createElement("div", null, k.fbt._("MoonPay Fee", null, {
					hk: "1QbArf"
				})), o.a.createElement("div", null, "$0.25"), o.a.createElement("div", {
					className: Q.a.total
				}, k.fbt._("Total", null, {
					hk: "3Uqz4c"
				})), o.a.createElement("div", {
					className: Q.a.total
				}, "$", t.toFormat(2).toString())), o.a.createElement(y.a, {
					className: Q.a.continue,
					onClick: () => {
						var n;
						return null === (n = e.onContinue) || void 0 === n ? void 0 : n.call(e, {
							amount: t.toString()
						})
					}
				}, k.fbt._("Buy", null, {
					hk: "1yKqul"
				})), o.a.createElement("div", {
					className: Q.a.disclaimer
				}, k.fbt._("Reddit does not collect and store your personal identity information.", null, {
					hk: "2hJjwc"
				})))
			}
			var te = n("./src/reddit/icons/svgs/Info/index.tsx"),
				ne = n("./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less"),
				re = n.n(ne);
			const se = () => new Promise(e => {
				setTimeout(() => e({
					dollars: "$0.5-$1",
					eth: "0.006006"
				}), 2e3)
			});

			function ae(e) {
				const {
					className: t,
					fees: n,
					onFeesChange: r
				} = e;
				return Object(a.useEffect)(() => {
					n || se().then(e => {
						null == r || r(e)
					})
				}, [n, r]), o.a.createElement("div", {
					className: Object(E.a)(re.a.container, t)
				}, o.a.createElement(K, {
					className: re.a.eth
				}), o.a.createElement("div", {
					className: re.a.fees
				}, e.fees ? k.fbt._("{fees} Estimated Network fees", [k.fbt._param("fees", e.fees.dollars)], {
					hk: "37q4VR"
				}) : k.fbt._("calculating...", null, {
					hk: "4iolkJ"
				})), o.a.createElement(te.a, {
					className: re.a.infoIcon,
					onClick: e.onShowFeesInfo
				}))
			}

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function ie(e) {
				return o.a.createElement("svg", oe({}, e, {
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}), o.a.createElement("path", {
					d: "M11 15H13V17.875C12.9995 18.1732 12.8808 18.459 12.6699 18.6699C12.459 18.8808 12.1732 18.9995 11.875 19H2.125C1.82679 18.9995 1.54095 18.8808 1.33009 18.6699C1.11922 18.459 1.00053 18.1732 1 17.875V8.125C1.00053 7.82679 1.11922 7.54095 1.33009 7.33009C1.54095 7.11923 1.82679 7.00053 2.125 7H5V9H3V17H11V15ZM19 2.125V11.875C18.9997 12.1733 18.8811 12.4593 18.6702 12.6702C18.4593 12.8811 18.1733 12.9997 17.875 13H8.125C7.82671 12.9997 7.54072 12.8811 7.3298 12.6702C7.11888 12.4593 7.00026 12.1733 7 11.875V2.125C7.00053 1.82679 7.11923 1.54095 7.33009 1.33009C7.54095 1.11922 7.82679 1.00053 8.125 1H17.875C18.1732 1.00053 18.459 1.11922 18.6699 1.33009C18.8808 1.54095 18.9995 1.82679 19 2.125ZM9 3V11H17V3H9Z"
				}))
			}
			var ce = n("./src/reddit/components/Governance/TransferPointsModal/NotEnoughEth/index.m.less"),
				le = n.n(ce);

			function de(e) {
				return o.a.createElement(P.a, {
					className: e.className,
					headerRight: o.a.createElement(H, {
						amount: e.wallet.amount,
						amountEth: e.wallet.amountEth || "0",
						show: B.Eth,
						subredditId: e.subredditId
					}),
					title: k.fbt._("Not enough Ethereum", null, {
						hk: "fok4q"
					}),
					onBack: e.onBack
				}, o.a.createElement("div", {
					className: le.a.contentTitle
				}, k.fbt._("Pay the Network Fee to Transfer", null, {
					hk: "1im0Kv"
				})), o.a.createElement("div", {
					className: le.a.contentMsg
				}, k.fbt._("You need to pay a network fee (gas) to place a transfer on the mainnet. You can send Ethereum directly to your wallet address. Or buy required Ethereum amount from our 3rd party provider.", null, {
					hk: "1iHHkr"
				})), o.a.createElement(ae, {
					className: le.a.fees,
					fees: e.fees,
					onShowFeesInfo: e.onShowFeesInfo
				}), o.a.createElement("div", {
					className: le.a.inputContainer
				}, o.a.createElement(q.c, {
					redditStyle: !0,
					className: le.a.input,
					label: k.fbt._("your wallet address", null, {
						hk: "OxMVa"
					}),
					type: "text",
					value: e.wallet.publicAddress || "",
					onChange: () => {}
				}), o.a.createElement(ie, {
					className: le.a.copyIcon,
					onAnimationEnd: e => {
						e.currentTarget.classList.remove(le.a.success)
					},
					onClick: async t => {
						const n = t.currentTarget;
						await window.navigator.clipboard.writeText(e.wallet.publicAddress || ""), n.classList.add(le.a.success)
					}
				})), o.a.createElement(y.a, {
					className: le.a.continue,
					onClick: e.onBuyFromMoonPay
				}, k.fbt._("Buy ETH with MoonPay", null, {
					hk: "1vhyR0"
				})))
			}
			var ue = n("./src/lib/currency/cleanNumber/index.ts"),
				me = n("./src/reddit/constants/keycodes.ts"),
				he = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				fe = n.n(he);

			function pe(e) {
				const t = e.amount || "0",
					n = !new r.BigNumber(t).isZero(),
					s = Object(x.a)(t);
				return o.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(E.a)(fe.a.container, e.className)
				}, o.a.createElement(N.a, {
					className: fe.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), o.a.createElement("div", {
					className: Object(E.a)(fe.a.display, {
						[fe.a.displayActive]: n
					}),
					style: {
						fontSize: be(s)
					}
				}, Object(x.a)(s)), o.a.createElement("input", {
					autoFocus: !0,
					className: fe.a.input,
					maxLength: 9,
					style: {
						fontSize: be(s)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(ue.a)(t.currentTarget.value)),
					onClick: ge,
					onFocus: ge,
					onKeyDown: e => {
						e.key !== me.b.ArrowLeft && e.key !== me.b.ArrowRight && e.key !== me.b.ArrowUp && e.key !== me.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function be(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function ge(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var ve = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				Ee = n("./node_modules/@ethersproject/address/lib.esm/index.js"),
				xe = n("./node_modules/lodash/debounce.js"),
				Ne = n.n(xe),
				we = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				ye = n("./src/reddit/actions/users.ts"),
				_e = n("./src/reddit/selectors/user.ts");
			var Ie = n("./src/reddit/hooks/useThunkDispatch.ts"),
				je = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				ke = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				Ce = n.n(ke);
			const Te = 42,
				Ae = /^0x[0-9a-fA-F]+$/;
			var Pe;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Pe || (Pe = {}));
			const Re = async (e, t, n, r) => {
				const s = e.current;
				if (!s || s.length <= ve.b) return void r(Pe.Empty);
				const a = Ae.test(s);
				if (a) try {
					if (!!Object(Ee.a)(s)) return void r(Pe.Valid)
				} catch {}
				s.length <= ve.a ? (r(Pe.Searching), n(((e, t) => async (n, r, s) => {
					let {
						apiContext: a
					} = s, o = r(), i = Object(_e.Bb)(o, {
						userName: e
					});
					if (!(i || (await n(Object(ye.B)(e)), o = r(), i = Object(_e.Bb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let c = Object(b.c)(o, {
						subredditId: t,
						userId: i.id
					});
					return c || (await n(Object(we.a)({
						subredditId: t,
						userIds: [i.id]
					})), c = Object(b.c)(r(), {
						subredditId: t,
						userId: i.id
					})), {
						userId: i.id,
						wallet: c || null
					}
				})(s, t)).then(t => {
					let {
						userId: n,
						wallet: o
					} = t;
					e.current === s && r(n ? o ? Pe.Valid : Pe.UserDoesNotHaveAWallet : a ? Pe.InvalidWalletAddress : Pe.InvalidUsername)
				}).catch(() => {
					r(Pe.Error)
				})) : r(a ? Pe.InvalidWalletAddress : Pe.InvalidUsername)
			};

			function Me(e) {
				const {
					onChange: t,
					subredditId: n
				} = e, [r, s] = Object(a.useState)(e.initialRecipient || ""), i = Object(a.useRef)(r), [c, l] = Object(a.useState)(Pe.Empty), d = Object(Ie.a)(), u = () => Re(i, n, d, e => {
					l(e), e === Pe.Valid && t(i.current, !0)
				}), m = Object(a.useMemo)(() => Ne()(u, 300), [i, n, d, l, t]);
				return Object(a.useEffect)(() => {
					e.initialRecipient && u()
				}, []), o.a.createElement("div", {
					className: Object(E.a)(Ce.a.container, e.className)
				}, o.a.createElement(q.c, {
					redditStyle: !0,
					className: Ce.a.input,
					label: k.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: Te,
					style: {
						borderColor: Se(c)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: r,
					onChange: e => {
						const n = e.currentTarget.value.trim();
						i.current = n, s(n), t(n, !1), m()
					}
				}), function(e) {
					switch (e) {
						case Pe.UserDoesNotHaveAWallet:
							return o.a.createElement(te.a, {
								className: Ce.a.icon,
								style: {
									fill: w.a.notice
								}
							});
						case Pe.InvalidWalletAddress:
						case Pe.InvalidUsername:
						case Pe.Error:
							return o.a.createElement(Oe.a, {
								className: Ce.a.icon,
								style: {
									fill: w.a.warning
								}
							});
						case Pe.Searching:
							return o.a.createElement(_.a, {
								className: Ce.a.loadingIcon,
								sizePx: 8
							});
						case Pe.Valid:
							return o.a.createElement(je.a, {
								className: Ce.a.icon
							});
						default:
							return null
					}
				}(c), o.a.createElement("div", {
					className: Ce.a.message,
					style: {
						color: Se(c)
					}
				}, function(e) {
					switch (e) {
						case Pe.UserDoesNotHaveAWallet:
							return k.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Pe.InvalidWalletAddress:
							return k.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Pe.InvalidUsername:
							return k.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Pe.Error:
							return k.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function Se(e) {
				switch (e) {
					case Pe.UserDoesNotHaveAWallet:
						return w.a.notice;
					case Pe.InvalidWalletAddress:
					case Pe.InvalidUsername:
					case Pe.Error:
						return w.a.warning
				}
			}
			var Ue = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function Be(e) {
				const {
					tokenName: t
				} = e;
				return o.a.createElement(Ue.a, {
					className: e.className
				}, k.fbt._("Send {tokenName}", [k.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var Fe = n("./src/lib/addQueryParams/index.ts"),
				De = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				Ge = n.n(De);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ve extends o.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: r,
						tokenName: s
					} = this.props;
					if (!e || !t) return null;
					const a = Object(Fe.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return o.a.createElement("div", {
						className: Ge.a.container
					}, o.a.createElement(Be, {
						className: Ge.a.title,
						subredditId: r.id,
						tokenName: s
					}), o.a.createElement("div", {
						className: Ge.a.body
					}, o.a.createElement("div", {
						className: Ge.a.description
					}, Le._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "48pHUg"
					})), o.a.createElement(y.m, {
						redditStyle: !0,
						className: Ge.a.button,
						href: a,
						target: "_blank"
					}, Le._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), o.a.createElement("div", {
						className: Ge.a.disclaimer
					}, Le._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const We = Object(v.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var He = Object(i.b)(We)(Ve),
				ze = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				Ze = n.n(ze);
			const {
				fbt: Xe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ye extends o.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(f.a)(e, this.props.pointsDetails.displayConversion)
					}), this.handleRecipientChange = (e, t) => this.setState({
						recipient: e,
						recipientIsValid: t
					}), this.state = {
						displayAmount: void 0,
						fees: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showFeesInfo: !1,
						showMoonpayPurchase: !1,
						showPurchaseEthModal: !1,
						showTransferTransactionModal: !1,
						tokenAmount: void 0
					}
				}
				render() {
					const {
						currentWallet: e,
						customCrypto: t,
						initialRecipient: n,
						isEthereumProvider: s,
						isMainnetEnabled: a,
						onTransferPoints: i,
						pointsDetails: c,
						subreddit: l
					} = this.props;
					if (!l || !c) return null;
					if (t && s) return o.a.createElement(He, {
						recipient: n,
						subreddit: l,
						tokenName: c.name
					});
					if (this.state.showTransferTransactionModal) return o.a.createElement(u.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: l.id,
						transferAmount: this.state.tokenAmount
					});
					if (this.props.isMainnetEnabled && this.state.showFeesInfo) return o.a.createElement(U, {
						onBack: () => this.setState({
							showFeesInfo: !1
						})
					});
					if (this.props.isMainnetEnabled && this.state.showMoonpayPurchase) return o.a.createElement(ee, {
						onBack: () => this.setState({
							showMoonpayPurchase: !1
						})
					});
					if (this.props.isMainnetEnabled && this.state.showPurchaseEthModal && this.state.fees && e) return o.a.createElement(de, {
						fees: this.state.fees,
						subredditId: l.id,
						wallet: e,
						onBack: () => this.setState({
							showPurchaseEthModal: !1
						}),
						onBuyFromMoonPay: () => this.setState({
							showMoonpayPurchase: !0
						}),
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					});
					const d = c.blockchainProvider ? Me : ve.c;
					return o.a.createElement("div", {
						className: Ze.a.container
					}, a ? o.a.createElement(Y, {
						className: Ze.a.title,
						amount: (null == e ? void 0 : e.amount) || "0",
						amountEth: (null == e ? void 0 : e.amountEth) || "0",
						subredditId: l.id,
						tokenName: c.name
					}) : o.a.createElement(Be, {
						className: Ze.a.title,
						subredditId: l.id,
						tokenName: c.name
					}), o.a.createElement("div", {
						className: Ze.a.inputContainer
					}, o.a.createElement(pe, {
						amount: this.state.displayAmount,
						subredditId: l.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), a && o.a.createElement(ae, {
						className: Ze.a.networkFees,
						fees: this.state.fees,
						onFeesChange: e => this.setState({
							fees: e
						}),
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					}), !c.blockchainProvider && o.a.createElement("div", {
						className: Ze.a.explanation
					}, Xe._("Up to 49% of earned {tokenName}. Remaining are frozen.", [Xe._param("tokenName", c.name)], {
						hk: "1fUxyG"
					})), t ? o.a.createElement("div", {
						className: Ze.a.explanation
					}, Xe._("Transfer to {initialRecipient}", [Xe._param("initialRecipient", n)], {
						hk: "2woxNp"
					})) : o.a.createElement("div", {
						className: Ze.a.recipientContainer
					}, o.a.createElement(d, {
						className: Ze.a.recipient,
						initialRecipient: n || this.state.recipient,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: l.id
					})), o.a.createElement(T, {
						amount: this.state.tokenAmount,
						className: Ze.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid && (!a || !!this.state.fees && !!e),
						subredditId: l.id,
						tabIndex: 3,
						onTransferPoints: () => {
							if (a && e && this.state.fees) {
								const t = new r.BigNumber(e.amountEth || "0"),
									n = new r.BigNumber(this.state.fees.eth);
								if (!t.isGreaterThanOrEqualTo(n)) return void this.setState({
									showPurchaseEthModal: !0
								})
							}
							this.state.tokenAmount && this.state.recipient && l && (c.blockchainProvider ? this.setState({
								showTransferTransactionModal: !0
							}) : i(this.state.tokenAmount, this.state.recipient, l.id))
						}
					}))
				}
			}
			const qe = Object(v.c)({
					isMainnetEnabled: g.a,
					currentWallet: (e, t) => {
						const n = Object(m.r)(e, t);
						if (n) return Object(b.a)(e, {
							subredditId: n.id
						})
					},
					customCrypto: h.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(m.r)(e, t);
						return Object(p.a)(e, null == n ? void 0 : n.id)
					},
					pointsDetails: (e, t) => {
						const n = Object(m.r)(e, t);
						return Object(p.b)(e, null == n ? void 0 : n.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: m.r
				}),
				Je = Object(i.b)(qe, e => ({
					onClose: () => {
						e(Object(d.f)())
					},
					onTransferPoints: (t, n, r) => e(Object(l.e)({
						amount: t,
						recipient: n,
						subredditId: r
					}, !0))
				})),
				Ke = Object(m.u)();
			t.default = Object(c.a)(Ke(Je(Ye)))
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
				return x
			})), n.d(t, "c", (function() {
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				p = n.n(f);
			var b = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: p.a.wrapper
					}, l.a.createElement(h.a, {
						className: p.a.titleRow
					}, n), l.a.createElement("div", {
						className: p.a.detailsContainer
					}, t), l.a.createElement(h.a, {
						className: p.a.buttonRow
					}, l.a.createElement(m.l, {
						className: p.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(g);
			class E extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
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
						errorModalBody: n,
						errorModalTitle: s = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, a), i && l.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(E, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				N = e => l.a.createElement(x, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
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
				return h
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = o.a.input("input", u.a),
				f = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				p = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						className: o,
						isInvalid: i,
						...c
					} = e;
					const l = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: f
					}, s.a.createElement(h, m({
						"aria-invalid": i,
						innerRef: r
					}, c)), t && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				b = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e;
					const d = void 0 !== l.value && "" !== l.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: f
					}, s.a.createElement(h, m({
						innerRef: r
					}, l)), t && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				g = e => s.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
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
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
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
					return e.map((e, o) => s.a.createElement(p, {
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
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!a[o] && s.a.createElement(i.b, {
						className: u.a.errorText
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
					const c = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(g, {
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
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(r.d)()
			}
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const c = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const a = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				o = (e, t) => {
					var n;
					return null === (n = a(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, r, s, a;
					return null === (a = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === a ? void 0 : a[t.subredditId]
				}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.be
				}) === r.td
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				a = {},
				o = (e, t) => {
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = l(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.1bedacfd0a6df339599e.js.map