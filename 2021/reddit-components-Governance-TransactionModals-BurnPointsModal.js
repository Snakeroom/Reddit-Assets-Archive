// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.97dd18614eb943312923.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-BurnPointsModal"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const l = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function c(e) {
				Object(n.l)(e, 20) || l.throwArgumentError("invalid address", "address", e);
				const t = (e = e.toLowerCase()).substring(2).split(""),
					r = new Uint8Array(40);
				for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
				const a = Object(n.a)(Object(s.a)(r));
				for (let n = 0; n < 40; n += 2) a[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (15 & a[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
				return "0x" + t.join("")
			}
			const i = {};
			for (let b = 0; b < 10; b++) i[String(b)] = String(b);
			for (let b = 0; b < 26; b++) i[String.fromCharCode(65 + b)] = String(10 + b);
			const u = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function m(e) {
				let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => i[e]).join("");
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
				if ("string" != typeof e && l.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = c(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && l.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== m(e) && l.throwArgumentError("bad icap checksum", "address", e), t = Object(a.c)(e.substring(4)); t.length < 40;) t = "0" + t;
					t = c("0x" + t)
				} else l.throwArgumentError("invalid address", "address", e);
				return t
			}

			function f(e) {
				try {
					return h(e), !0
				} catch (t) {}
				return !1
			}

			function p(e) {
				let t = Object(a.b)(h(e).substring(2)).toUpperCase();
				for (; t.length < 30;) t = "0" + t;
				return "XE" + m("XE00" + t) + t
			}

			function v(e) {
				let t = null;
				try {
					t = h(e.from)
				} catch (c) {
					l.throwArgumentError("missing from address", "transaction", e)
				}
				const r = Object(n.o)(Object(n.a)(a.a.from(e.nonce).toHexString()));
				return h(Object(n.e)(Object(s.a)(Object(o.encode)([t, r])), 12))
			}

			function g(e, t, r) {
				return 32 !== Object(n.d)(t) && l.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== Object(n.d)(r) && l.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), h(Object(n.e)(Object(s.a)(Object(n.b)(["0xff", h(e), t, r])), 12))
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
				a = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				l = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				c = a.a.BN;
			const i = new o.a(l.a),
				u = {},
				d = 9007199254740991;

			function m(e) {
				return null != e && (f.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(s.l)(e) || "bigint" == typeof e || Object(s.j)(e))
			}
			let h = !1;
			class f {
				constructor(e, t) {
					i.checkNew(new.target, f), e !== u && i.throwError("cannot call constructor directly; use BigNumber.from", o.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return v(g(this).fromTwos(e))
				}
				toTwos(e) {
					return v(g(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? f.from(this._hex.substring(1)) : this
				}
				add(e) {
					return v(g(this).add(g(e)))
				}
				sub(e) {
					return v(g(this).sub(g(e)))
				}
				div(e) {
					return f.from(e).isZero() && b("division by zero", "div"), v(g(this).div(g(e)))
				}
				mul(e) {
					return v(g(this).mul(g(e)))
				}
				mod(e) {
					const t = g(e);
					return t.isNeg() && b("cannot modulo negative values", "mod"), v(g(this).umod(t))
				}
				pow(e) {
					const t = g(e);
					return t.isNeg() && b("cannot raise to negative values", "pow"), v(g(this).pow(t))
				}
				and(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && b("cannot 'and' negative values", "and"), v(g(this).and(t))
				}
				or(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && b("cannot 'or' negative values", "or"), v(g(this).or(t))
				}
				xor(e) {
					const t = g(e);
					return (this.isNegative() || t.isNeg()) && b("cannot 'xor' negative values", "xor"), v(g(this).xor(t))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && b("cannot mask negative values", "mask"), v(g(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && b("cannot shift negative values", "shl"), v(g(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && b("cannot shift negative values", "shr"), v(g(this).shrn(e))
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
						b("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return i.throwError("this platform does not support BigInt", o.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, i.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? i.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", o.a.errors.UNEXPECTED_ARGUMENT, {}) : i.throwError("BigNumber.toString does not accept parameters", o.a.errors.UNEXPECTED_ARGUMENT, {})), g(this).toString(10)
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
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new f(u, p(e)) : e.match(/^-?[0-9]+$/) ? new f(u, p(new c(e))) : i.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && b("underflow", "BigNumber.from", e), (e >= d || e <= -d) && b("overflow", "BigNumber.from", e), f.from(String(e));
					const t = e;
					if ("bigint" == typeof t) return f.from(t.toString());
					if (Object(s.j)(t)) return f.from(Object(s.i)(t));
					if (t)
						if (t.toHexString) {
							const e = t.toHexString();
							if ("string" == typeof e) return f.from(e)
						} else {
							let e = t._hex;
							if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Object(s.l)(e) || "-" === e[0] && Object(s.l)(e.substring(1)))) return f.from(e)
						} return i.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function p(e) {
				if ("string" != typeof e) return p(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && i.throwArgumentError("invalid hex", "value", e), "0x00" === (e = p(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function v(e) {
				return f.from(p(e))
			}

			function g(e) {
				const t = f.from(e).toHexString();
				return "-" === t[0] ? new c("-" + t.substring(3), 16) : new c(t.substring(2), 16)
			}

			function b(e, t, r) {
				const n = {
					fault: e,
					operation: t
				};
				return null != r && (n.value = r), i.throwError(e, o.a.errors.NUMERIC_FAULT, n)
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
				return o
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "p", (function() {
				return d
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "m", (function() {
				return _
			}));
			const n = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function a(e) {
				return !!e.toHexString
			}

			function s(e) {
				return e.slice ? e : (e.slice = function() {
					const t = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function o(e) {
				return m(e) && !(e.length % 2) || l(e)
			}

			function l(e) {
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
					return 0 === t.length && t.push(0), s(new Uint8Array(t))
				}
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), a(e) && (e = e.toHexString()), m(e)) {
					let r = e.substring(2);
					r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
					const a = [];
					for (let e = 0; e < r.length; e += 2) a.push(parseInt(r.substring(e, e + 2), 16));
					return s(new Uint8Array(a))
				}
				return l(e) ? s(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
			}

			function i(e) {
				const t = e.map(e => c(e)),
					r = t.reduce((e, t) => e + t.length, 0),
					n = new Uint8Array(r);
				return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), s(n)
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
				return r.set(e, t - e.length), s(r)
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
				if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), a(e)) return e.toHexString();
				if (m(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (l(e)) {
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

			function v(e, t, r) {
				return "string" != typeof e ? e = f(e) : (!m(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}

			function g(e) {
				let t = "0x";
				return e.forEach(e => {
					t += f(e).substring(2)
				}), t
			}

			function b(e) {
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
				if (o(e)) {
					const r = c(e);
					65 !== r.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), t.r = f(r.slice(0, 32)), t.s = f(r.slice(32, 64)), t.v = r[64], t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = f(r.slice(32, 64))
				} else {
					if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
						const r = d(c(t._vs), 32);
						t._vs = f(r);
						const a = r[0] >= 128 ? 1 : 0;
						null == t.recoveryParam ? t.recoveryParam = a : t.recoveryParam !== a && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
						const s = f(r);
						null == t.s ? t.s = s : t.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == t.recoveryParam ? null == t.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2 : null == t.v ? t.v = 27 + t.recoveryParam : t.recoveryParam !== 1 - t.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != t.r && m(t.r) ? t.r = x(t.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && m(t.s) ? t.s = x(t.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
					const r = c(t.s);
					r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
					const a = f(r);
					t._vs && (m(t._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), t._vs = x(t._vs, 32)), null == t._vs ? t._vs = a : t._vs !== a && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return t
			}

			function _(e) {
				return f(i([(e = N(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				a = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function o(e) {
				return "0x" + a.a.keccak_256(Object(s.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var a = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, s = "0123456789abcdef".split(""), o = [0, 8, 16, 24], l = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], i = ["hex", "buffer", "arrayBuffer", "array"], u = function(e, t, r) {
							return function(n) {
								return new N(e, t, e).update(n)[r]()
							}
						}, d = function(e, t, r) {
							return function(n, a) {
								return new N(e, t, a).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = u(e, t, "hex");
							r.create = function() {
								return new N(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < i.length; ++n) {
								var a = i[n];
								r[a] = u(e, t, a)
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
								for (var n = 0; n < i.length; ++n) {
									var a = i[n];
									r[a] = d(e, t, a)
								}
								return r
							}
						}], f = {}, p = [], v = 0; v < h.length; ++v)
						for (var g = h[v], b = g.bits, E = 0; E < b.length; ++E) {
							var x = g.name + "_" + b[E];
							p.push(x), f[x] = g.createMethod(b[E], g.padding)
						}

					function N(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, a = e.length, s = this.blocks, l = this.byteCount, c = this.blockCount, i = 0, u = this.s; i < a;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, r = 1; r < c + 1; ++r) s[r] = 0;
							if (t)
								for (r = this.start; i < a && r < l; ++i) s[r >> 2] |= e[i] << o[3 & r++];
							else
								for (r = this.start; i < a && r < l; ++i)(n = e.charCodeAt(i)) < 128 ? s[r >> 2] |= n << o[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)), s[r >> 2] |= (240 | n >> 18) << o[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
							if (this.lastByteIndex = r, r >= l) {
								for (this.start = r - l, this.block = s[c], r = 0; r < c; ++r) u[r] ^= s[r];
								_(u), this.reset = !0
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
						_(n)
					}, N.prototype.toString = N.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, a = this.extraBytes, o = 0, l = 0, c = ""; l < n;) {
							for (o = 0; o < t && l < n; ++o, ++l) e = r[o], c += s[e >> 4 & 15] + s[15 & e] + s[e >> 12 & 15] + s[e >> 8 & 15] + s[e >> 20 & 15] + s[e >> 16 & 15] + s[e >> 28 & 15] + s[e >> 24 & 15];
							l % t == 0 && (_(r), o = 0)
						}
						return a && (e = r[o], a > 0 && (c += s[e >> 4 & 15] + s[15 & e]), a > 1 && (c += s[e >> 12 & 15] + s[e >> 8 & 15]), a > 2 && (c += s[e >> 20 & 15] + s[e >> 16 & 15])), c
					}, N.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							a = this.extraBytes,
							s = 0,
							o = 0,
							l = this.outputBits >> 3;
						e = a ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(l);
						for (var c = new Uint32Array(e); o < n;) {
							for (s = 0; s < t && o < n; ++s, ++o) c[o] = r[s];
							o % t == 0 && _(r)
						}
						return a && (c[s] = r[s], e = e.slice(0, l)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, a = this.outputBlocks, s = this.extraBytes, o = 0, l = 0, c = []; l < a;) {
							for (o = 0; o < r && l < a; ++o, ++l) e = l << 2, t = n[o], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							l % r == 0 && _(n)
						}
						return s && (e = l << 2, t = n[o], s > 0 && (c[e] = 255 & t), s > 1 && (c[e + 1] = t >> 8 & 255), s > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var _ = function(e) {
						var t, r, n, a, s, o, c, i, u, d, m, h, f, p, v, g, b, E, x, N, _, w, y, M, C, O, j, A, I, R, F, T, k, L, z, S, B, P, U, D, G, V, H, W, X, Y, K, J, q, Z, Q, $, ee, te, re, ne, ae, se, oe, le, ce, ie, ue;
						for (n = 0; n < 48; n += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], i = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | c >>> 31), r = (f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | o >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = a ^ (i << 1 | u >>> 31), r = s ^ (u << 1 | i >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = o ^ (d << 1 | m >>> 31), r = c ^ (m << 1 | d >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = i ^ (h << 1 | f >>> 31), r = u ^ (f << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = d ^ (a << 1 | s >>> 31), r = m ^ (s << 1 | a >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], v = e[1], Y = e[11] << 4 | e[10] >>> 28, K = e[10] << 4 | e[11] >>> 28, A = e[20] << 3 | e[21] >>> 29, I = e[21] << 3 | e[20] >>> 29, le = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, z = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, b = e[12] << 12 | e[13] >>> 20, J = e[22] << 10 | e[23] >>> 22, q = e[23] << 10 | e[22] >>> 22, R = e[33] << 13 | e[32] >>> 19, F = e[32] << 13 | e[33] >>> 19, ie = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, S = e[14] << 6 | e[15] >>> 26, B = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, T = e[45] << 29 | e[44] >>> 3, k = e[44] << 29 | e[45] >>> 3, M = e[6] << 28 | e[7] >>> 4, C = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, P = e[26] << 25 | e[27] >>> 7, U = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, _ = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, O = e[18] << 20 | e[19] >>> 12, j = e[19] << 20 | e[18] >>> 12, se = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, D = e[38] << 8 | e[39] >>> 24, G = e[39] << 8 | e[38] >>> 24, w = e[48] << 14 | e[49] >>> 18, y = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~g & E, e[1] = v ^ ~b & x, e[10] = M ^ ~O & A, e[11] = C ^ ~j & I, e[20] = L ^ ~S & P, e[21] = z ^ ~B & U, e[30] = W ^ ~Y & J, e[31] = X ^ ~K & q, e[40] = te ^ ~ne & se, e[41] = re ^ ~ae & oe, e[2] = g ^ ~E & N, e[3] = b ^ ~x & _, e[12] = O ^ ~A & R, e[13] = j ^ ~I & F, e[22] = S ^ ~P & D, e[23] = B ^ ~U & G, e[32] = Y ^ ~J & Z, e[33] = K ^ ~q & Q, e[42] = ne ^ ~se & le, e[43] = ae ^ ~oe & ce, e[4] = E ^ ~N & w, e[5] = x ^ ~_ & y, e[14] = A ^ ~R & T, e[15] = I ^ ~F & k, e[24] = P ^ ~D & V, e[25] = U ^ ~G & H, e[34] = J ^ ~Z & $, e[35] = q ^ ~Q & ee, e[44] = se ^ ~le & ie, e[45] = oe ^ ~ce & ue, e[6] = N ^ ~w & p, e[7] = _ ^ ~y & v, e[16] = R ^ ~T & M, e[17] = F ^ ~k & C, e[26] = D ^ ~V & L, e[27] = G ^ ~H & z, e[36] = Z ^ ~$ & W, e[37] = Q ^ ~ee & X, e[46] = le ^ ~ie & te, e[47] = ce ^ ~ue & re, e[8] = w ^ ~p & g, e[9] = y ^ ~v & b, e[18] = T ^ ~M & O, e[19] = k ^ ~C & j, e[28] = V ^ ~L & S, e[29] = H ^ ~z & B, e[38] = $ ^ ~W & Y, e[39] = ee ^ ~X & K, e[48] = ie ^ ~te & ne, e[49] = ue ^ ~re & ae, e[0] ^= l[n], e[1] ^= l[n + 1]
					};
					if (a) e.exports = f;
					else
						for (v = 0; v < p.length; ++v) n[p[v]] = f[p[v]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			const n = "logger/5.4.0";
			let a = !1,
				s = !1;
			const o = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let l = o.default,
				c = null;
			const i = function() {
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
					null == o[r] && this.throwArgumentError("invalid log level name", "logLevel", e), l > o[r] || console.log.apply(console, t)
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
					if (s) return this.makeError("censored error", t, {});
					t || (t = m.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(r[e]))
						} catch (o) {
							n.push(e + "=" + JSON.stringify(r[e].toString()))
						}
					}), n.push(`code=${t}`), n.push(`version=${this.version}`);
					const a = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const o = new Error(e);
					return o.reason = a, o.code = t, Object.keys(r).forEach((function(e) {
						o[e] = r[e]
					})), o
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
					null == e && (e = "platform missing String.prototype.normalize"), i && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: i
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
						}), a) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!e, a = !!t
				}
				static setLogLevel(e) {
					const t = o[e.toLowerCase()];
					null != t ? l = t : m.globalLogger().warn("invalid log level - " + e)
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
				a = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new a.a("rlp/5.4.0");

			function o(e) {
				const t = [];
				for (; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function l(e, t, r) {
				let n = 0;
				for (let a = 0; a < r; a++) n = 256 * n + e[t + a];
				return n
			}

			function c(e) {
				return Object(n.i)(function e(t) {
					if (Array.isArray(t)) {
						let r = [];
						if (t.forEach((function(t) {
								r = r.concat(e(t))
							})), r.length <= 55) return r.unshift(192 + r.length), r;
						const n = o(r.length);
						return n.unshift(247 + n.length), n.concat(r)
					}
					Object(n.k)(t) || s.throwArgumentError("RLP object must be BytesLike", "object", t);
					const r = Array.prototype.slice.call(Object(n.a)(t));
					if (1 === r.length && r[0] <= 127) return r;
					if (r.length <= 55) return r.unshift(128 + r.length), r;
					const a = o(r.length);
					return a.unshift(183 + a.length), a.concat(r)
				}(e))
			}

			function i(e, t, r, n) {
				const o = [];
				for (; r < t + 1 + n;) {
					const l = u(e, r);
					o.push(l.result), (r += l.consumed) > t + 1 + n && s.throwError("child data too short", a.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: o
				}
			}

			function u(e, t) {
				if (0 === e.length && s.throwError("data too short", a.a.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
					const r = e[t] - 247;
					t + 1 + r > e.length && s.throwError("data short segment too short", a.a.errors.BUFFER_OVERRUN, {});
					const n = l(e, t + 1, r);
					return t + 1 + r + n > e.length && s.throwError("data long segment too short", a.a.errors.BUFFER_OVERRUN, {}), i(e, t, t + 1 + r, r + n)
				}
				if (e[t] >= 192) {
					const r = e[t] - 192;
					return t + 1 + r > e.length && s.throwError("data array too short", a.a.errors.BUFFER_OVERRUN, {}), i(e, t, t + 1, r)
				}
				if (e[t] >= 184) {
					const r = e[t] - 183;
					t + 1 + r > e.length && s.throwError("data array too short", a.a.errors.BUFFER_OVERRUN, {});
					const o = l(e, t + 1, r);
					return t + 1 + r + o > e.length && s.throwError("data array too short", a.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r + o,
						result: Object(n.i)(e.slice(t + 1 + r, t + 1 + r + o))
					}
				}
				if (e[t] >= 128) {
					const r = e[t] - 128;
					return t + 1 + r > e.length && s.throwError("data too short", a.a.errors.BUFFER_OVERRUN, {}), {
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
				return r.consumed !== t.length && s.throwArgumentError("invalid rlp data", "data", e), r.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r = 3e4, n = 3e5) {
				return async (a, s, o) => new Promise((l, c) => {
					const i = Date.now() + n,
						u = () => {
							c(new Error("Timed out while polling for success"))
						},
						d = async () => {
							if (Date.now() > i) return u();
							const n = Date.now();
							await e(a, s, o);
							const m = await t(s);
							if (m) l();
							else if (!1 === m) c();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < i ? setTimeout(d, r) : u()
							}
						};
					d()
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				u = r.n(i);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(l.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(c.a, {
					className: Object(o.a)(u.a.closeIcon, e.className),
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
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				l = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = r.n(l);

			function i(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: c.a.title
				}, e.children), a.a.createElement(o.a, {
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/crypto/points.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				d = r.n(u);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					s = `${l.a.assetPath}/${n}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return a.a.createElement("div", {
						className: Object(c.a)(d.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/Governance/Token/index.tsx"),
				u = r("./src/reddit/helpers/governance/tokens.ts"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				m = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				h = r.n(m);
			const f = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(s.b)(f)((function(e) {
				var t;
				return a.a.createElement("div", {
					className: Object(l.a)(h.a.container, e.className, {
						[h.a.small]: e.small
					})
				}, a.a.createElement(i.a, {
					className: Object(l.a)(h.a.token, {
						[h.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(u.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				overview: "_2my8YJMn6fLwdXQPvFzOC_",
				amount: "_2uJHGxFIl306f82z4CUElv",
				memo: "QK8D8Vn2Zi45kckvHp1UF",
				error: "lHTeQCCGAXimtIjNkn3Kb"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2pjl09-gi2tNbckawdUdz",
				sectionsContainer: "_2kniUL-mLa5WNXZG0Mvwr0",
				section: "_3q3ET_tDRLknupxMrxqumk",
				sectionImage: "_3c8qkLyW7RBPLK_N2nxH3Q",
				sectionContent: "_1FH1B9Vjevh9JyXo0FtYQS",
				sectionHeader: "_2DQMGepFbIHT4d4KzISXeG",
				sectionDescription: "_1AdisjJ_TBmzcusoIGB7zd",
				footer: "_1h3NhYGCWtZTxg2bCNuuo_",
				footnote: "_1h0VFxo7szF2RtpMB6e4Rj"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/reddit/selectors/activeModal.ts"),
				c = r("./src/reddit/selectors/crypto/points.ts"),
				i = r("./node_modules/fbt/lib/FbtPublic.js"),
				u = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx");
			const m = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M42.4 19.1H20.8v19.4h21.6V19.1z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M42.5 38.6l-.3-5.7A694 694 0 0142 19l.5.5-21.6.2.7-.7v19.4l-.7-.5c4.8 0 8.7.1 12.2.3l9.6.5c-6.6 0-14.2 0-21.8.2a.4.4 0 01-.4-.5l-.2-19.4a.6.6 0 01.6-.6h4a2236.4 2236.4 0 0118.1.1.7.7 0 01.2.5 463.6 463.6 0 01-.6 19.5z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M11.4 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M11.5 45a678.4 678.4 0 01-.6-19.6l.1-.2a1014.3 1014.3 0 0110-6.6.7.7 0 01.6.7v6.3l-.2 13.1a.5.5 0 01-.3.4 151 151 0 01-9.6 5.8l4.4-3.1 4.8-3.4-.2.3-.2-19.5 1 .6-2.6 1.7-7 4.8.4-.6a269.3 269.3 0 01-.6 19.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M32.8 25.7H11.3v19.4h21.5V25.8z",
					fill: "#14D8C3"
				}), a.a.createElement("path", {
					d: "M33 45.2c-.2 0-.2-2.2-.4-5.7l-.3-13.8.5.5-21.5.2.6-.7v19.4l-.6-.5a404.7 404.7 0 0121.8.8c-6.7 0-14.2 0-21.8.2a.4.4 0 01-.5-.4l-.2-19.5a.6.6 0 01.6-.6h4.1a2320.2 2320.2 0 0118 .1.7.7 0 01.2.5 463.3 463.3 0 01-.6 19.5z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M32.8 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M33 45c-.2.2-.2-1.9-.4-5.3l-.2-6.3a403.8 403.8 0 01-.1-8l.2-.2a1015.7 1015.7 0 019.8-6.6.7.7 0 01.7.6v6.4c0 5.4 0 9.6-.2 13.1a.5.5 0 01-.2.4 150.8 150.8 0 01-9.6 5.8l4.4-3.1 4.7-3.4-.1.3-.3-19.4 1 .5-2.5 1.7-7 4.8.3-.6a331.3 331.3 0 01-.2 13.7l-.4 5.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M23.4 44.8H20V26.6h3.4v18.2zM39.2 40.3l-2.5 1.6.1-18 2.6-1.5-.2 17.9z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l6-10.8L28.9 3l-6 10.8z",
					fill: "#85FFED"
				}), a.a.createElement("path", {
					d: "M22.8 13.8l1.5-3.3 4-7.9.7.7L8.3 13.7l.3-.2L5 19.8l-2.5 4.4-.9-.8c10-4.8 15.8-7.4 21.3-9.5A1713.8 1713.8 0 001.8 24.4a.5.5 0 01-.4-.5v-.2l6-10.9.3-.2 3.1-1.6 17.7-8.7a.7.7 0 01.9.9 290.4 290.4 0 01-6.6 10.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l2.8 5.7 20.9-10.2-2.9-5.7z",
					fill: "#14D8C3"
				}), a.a.createElement("path", {
					d: "M25.6 19.4l-.9-1.6-2.2-4h.3c-5 2.7-13 6.7-20.7 10.5l.2-.6L5 29.2l.1.2-.6-.1a570.5 570.5 0 0121.2-9.8l-10.3 5.1L5 30a.4.4 0 01-.5-.2l-2.9-5.7a.4.4 0 01.2-.5l2.6-1.3a1223.8 1223.8 0 0118.7-9l.1.2a106.7 106.7 0 012.5 6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M25.6 19.4l6-10.7-2.8-5.8-6 10.8 2.8 5.7z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M25.6 19.3l-.9-1.4-2.2-4.1a.3.3 0 010-.3 517.7 517.7 0 016.2-11 .5.5 0 01.5.2L31 6.2 32 8.5a.4.4 0 010 .4 166.8 166.8 0 01-6.4 10.3l2.8-5.3 3-5.4v.3l-3-5.7h.8l-1 1.7-5 9v-.3a45 45 0 011.7 4l.7 1.8z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.5 11L19 8.3l-3 1.5-1.5 2.6L7 16.1l-1.4 2.7 7.2-3.6-2 3.6 3.6-1.8 1.5-3.3 8.5-4 1.4-2.6-8.3 3.8zM14.2 18.5l2.2 5-3 1.4-2.3-5 3-1.4zM26.8 7.8l2.4 4.3-1.1 2.2-2.5-4.5 1.2-2zM31 18.2c-1.5 2-2.8 3.8-3.2 6.6h-2.6c-.7-2-1.4-5-.5-7.5",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M24.6 17.3v2.3a22.3 22.3 0 001.1 5.1l-.5-.3h2.5l-.4.4v-.5l.8-2.3a10 10 0 013-3.7l-2 3a11 11 0 00-1 3.6v.3h-.3l-2.3.1H24.9V25l-.9-3c-.1-.9-.2-1.8-.1-2.6 0-.6.1-1.1.3-1.6l.4-.6z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M28.4 21.5l-1.7-1-2 .4a.7.7 0 01-1-.8l.6-2-1.1-1.8a.7.7 0 01.5-1.1l2.1-.2 1.3-1.6a.7.7 0 011.3.2l.8 2 1.9.7a.7.7 0 01.2 1.2L29.7 19l-.2 2a.7.7 0 01-1 .6z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M28.4 21.7h.3a.7.7 0 00.5-.4c.1 0 .2-.2.1-.3v-.7V18.7h.2l.9-1 .5-.4v-.1h.1V17a.2.2 0 000-.1H30.6l-.3-.2-1.5-.6h-.2l-.1-.3-.6-1.3-.2-.6h-.1l-.5.5-.9 1-.2.3H26l-2.1.2c0 .2 0 .3.2.4l.8 1.4.1.3v.2l-.5 1.6-.1.4v.1a.3.3 0 00.1.2h1.1l1.2-.2 1.6 1.5c-.5-.3-1-.7-1.8-1h.3l-1.3.3-.7.2h-.5a1 1 0 01-.8-.6 1 1 0 010-.6v-.7L24 18v.3l-.8-1.2-.2-.3-.1-.2-.1-.2a1.2 1.2 0 011-1.7l.7-.1 1.4-.2-.4.2.7-.8.3-.4.1-.2.1-.1.1-.1c.2-.3.5-.4.8-.4a1.4 1.4 0 011.4.7l.1.1v.1l.1.2.7 1.6-.4-.4 1.5.6.4.2.2.1.3.2a1.4 1.4 0 010 2l-.1.1-.1.1-.6.4-.9.8.2-.4a37.1 37.1 0 01-.3 2c0 .4-.2.6-.4.8a1 1 0 01-.6.2h-.4l-.2-.3z",
					fill: "#F80"
				}), a.a.createElement("path", {
					d: "M43.6 11.9c-5.4 2-8 10.7-8 10.7s-2.1.6-3.2 1.5a58 58 0 014-16.3",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M36.3 7.7c.1.1-.6 2.1-1.4 5.2a65.3 65.3 0 00-2 11.3l-.8-.4 1.7-1 1.6-.7-.3.3v-.2a26.1 26.1 0 014-7.2c1.5-1.6 3-2.6 4.6-3a8 8 0 00-2.7 1.8 23 23 0 00-5 8.8l-.2.2h-.1a16.1 16.1 0 00-3 1.6l-.8.7.1-1 .2-1.5a55 55 0 012.3-10.9c1-2.6 1.6-4 1.8-4z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M41.3 22C36.8 21.2 33 25 33 25h-3.3c1-2.9 5.4-7.7 10.8-8.6",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M40.3 16.2l-.3.2-.3.1-.3.1-.2.1-.7.3-.7.3-.7.4-.4.2-.5.3-.4.2-.4.4-.9.6-.4.4-.5.4-.4.4-.2.2-.2.2-.4.5-.4.4-.4.5-.4.5c-.5.7-.9 1.4-1.2 2.2l-.4-.7h3.3l-.3.2a11.1 11.1 0 012.6-1.8l2.4-.8c1.4-.3 2.7-.2 3.7.2-1.5-.2-3 0-4.3.5a12 12 0 00-3.9 2.4v.1h-3.5l-.6.1.2-.5c.3-.8.6-1.5 1-2.1.6-.7 1-1.4 1.7-2l.4-.5.5-.4.8-.8c1-.8 2.2-1.5 3.4-2l.3-.2.4-.1.6-.2 1.1-.3h1z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M37.2 12.7l-.4-2.4-2-1.4a.8.8 0 01.1-1.4L37 6.4l.7-2.3a.8.8 0 011.4-.4l1.7 1.7h2.4a.8.8 0 01.8 1.1l-1 2.2.8 2.3a.8.8 0 01-1 1l-2.3-.3-2 1.5a.8.8 0 01-1.3-.5z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M37 12.7l.3.2a.8.8 0 00.7.3c.2 0 .3 0 .4-.2l.6-.4 1.2-1.2H42l.7.2H43a.3.3 0 00.2-.2V11l-.2-.4-.6-1.7-.1-.2.1-.3.7-1.4.3-.8a.2.2 0 000-.2h-2.8l-.2-.1-1.8-1.7h-.2l-.2.6-.6 1.8v.2l-.3.1-1.7.9-.4.1H35V8a.4.4 0 00-.2.4l.1.2h.1l.2.2.6.5 1 .9v2.5c0-.7-.2-1.5-.4-2.4l.1.2-1.3-.8-.6-.5a1.2 1.2 0 01-.6-1 1.2 1.2 0 01.5-1h.2L35 7l.4-.2 1.4-.8-.2.3.5-1.7v-.4l.1-.2v-.1l.1-.2a1.4 1.4 0 012.1-.4h.1l.6.6 1.2 1-.5-.1h1.3l.6-.1h.6c.4 0 .7.1 1 .3a1.5 1.5 0 01.4 1.7v.1h-.1V7l-.2.2-.8 1.8v-.5l.6 1.7.2.4v.5c.1 0 0 .2 0 .2a1.5 1.5 0 01-.7 1.3l-.7.2h-.5l-.7-.2-1.4-.2.5-.2c-.6.4-1 .8-1.5 1l-.3.3H39l-.2.2c-.2.1-.6.2-.9.1l-.6-.3a1 1 0 01-.2-.4c-.1-.3 0-.4 0-.4z",
					fill: "#F80"
				}), a.a.createElement("path", {
					d: "M41.5 21.8l-1-1h-1.6a.5.5 0 01-.4-.8l.7-1.3-.5-1.5a.5.5 0 01.6-.6l1.5.2 1.2-.9a.5.5 0 01.8.4l.3 1.5 1.2.8a.5.5 0 01-.1 1l-1.4.6-.4 1.4a.5.5 0 01-.9.2z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M41.4 22h.3a.5.5 0 00.4-.2v-.2a17.2 17.2 0 01.4-1.5V20l.2-.1.8-.5.4-.3-.3-.2-1-.7h-.1v-.4l-.2-1-.1-.4a.2.2 0 00.2 0l-.4.3-.8.6-.3.2h-.2l-.8-.2h-.7v-.1l.1-.1.1.2.3 1.2.1.2v.2l-.7 1-.2.3v.1h.2l.5.1.9.2.8 1.4-1-1h.2-1.9a.9.9 0 01-.5-1v-.2l.1-.2.2-.2.4-1v.4l-.4-1v-.3l-.1-.1v-.2a1 1 0 011-1.2h.6l1 .2h-.5l.7-.4.3-.2.1-.1.1-.1c.3-.2.6-.3.8-.2a1.2 1.2 0 011 .9v.1h.1v.2l.2 1.3-.3-.5 1 .7.2.1.2.2a1.3 1.3 0 01.3.8 1.2 1.2 0 01-.6 1.1l-.2.1-.4.2-.8.4.3-.4-.4 1v.2l-.2.2a1 1 0 01-.5.5h-.8l-.1-.4z",
					fill: "#F80"
				})),
				h = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18 32.3c-6.4 1-10.7-1.1-13.2-3.5a11.4 11.4 0 01-3-9.5c.4-3.4 1.9-6.6 3.3-9.7l3.1 4.1c3-4 4.8-6.6 5-12.2 4.4 2 8 6.3 9.2 10.5l1.3-3.4c1.5 2.2 3 4.5 4 7a13 13 0 011 7.9c-1.2 4.6-5.9 9.4-10.8 9",
					fill: "#FF8717"
				}), a.a.createElement("path", {
					d: "M17.8 32.7l.7-.1a9 9 0 004.3-1.6 13 13 0 005-6.4c.6-1.6.8-3.3.5-5a17 17 0 00-1.8-5.4c-1-1.8-2.1-3.5-3.3-5.3l1-.1-1.2 3.4-.7 1.9-.5-2a16.5 16.5 0 00-8.8-10l1-.6-.4 3.3a15.8 15.8 0 01-2.5 6l-1.7 2.5-.6.8-.6.8-.5-.8-3.2-4 1.1-.2-2.2 5.4c-.6 1.7-1 3.4-1 5.1-.2 1.5 0 3 .5 4.5A9.2 9.2 0 005 28.5a13.5 13.5 0 006.4 3.6 17.8 17.8 0 006.6.5 20 20 0 01-4.1.3A15.4 15.4 0 015.8 30L4 28.5c-.5-.5-1-1.2-1.3-1.8-.8-1.4-1.2-2.9-1.3-4.4-.2-1.5-.1-3 .2-4.5.3-1.5.7-3 1.2-4.3l1.7-4 .3-.8.5.6 3.3 4.1h-.9c1.4-2 2.8-3.9 3.6-5.9l.9-3 .3-3v-1l.9.4 2.8 1.6 1.2 1 1 1a18 18 0 014.5 7.4l-1.3-.1L23 8.3l.5-1.2.8 1c1.3 2 2.5 4 3.5 6s1.6 4 1.7 6a11.6 11.6 0 01-3.6 9.4 12.2 12.2 0 01-4.5 3 8.3 8.3 0 01-3 .3l-.6-.1z",
					fill: "#FF4500"
				}), a.a.createElement("path", {
					d: "M14 31.5c-2.8-.3-5.7-2.2-6.4-5-.7-3 1.3-5.9 3.2-8.4l5-6.3c1 2.3 2.7 4.3 4.5 6.1 1.8 1.7 3.6 3.3 4.4 5.7 2.1 6.7-5.7 8.5-10.7 8z",
					fill: "#FFF1B6"
				}), a.a.createElement("path", {
					d: "M14 31.7c0-.2 1-.1 2.8-.4a18.5 18.5 0 003-.6l1.7-.8c.6-.3 1.1-.6 1.6-1.1.4-.5.8-1 1-1.7.2-.7.3-1.4.1-2v-.6l-.2-.6-.5-1c-.4-.8-.9-1.4-1.4-2l-2-2-2-2C17 15.7 15.8 14 15 12.3l1.6.2-2 2.5-2.5 3.2-2.1 2.8c-.6.8-1 1.7-1.4 2.6a5.3 5.3 0 00.3 4.7l1.4 1.7c1.1 1 2.4 1.6 3.7 2A9.4 9.4 0 019.5 30c-.5-.3-.9-.7-1.2-1.2-.4-.4-.7-1-1-1.5v-.4l-.1-.3v-.2L7 26v-2.3l.6-1.6c1-2.2 2.4-4 3.7-5.7l3.7-5 .8-1.1.6 1.2c.4.9.8 1.7 1.4 2.4a21.9 21.9 0 003.4 3.7l2 2a12 12 0 011.5 2.1l.4.6.2.7.2.6.2.6c.2.9.2 1.8 0 2.6-.1.9-.5 1.6-1 2.3-.4.6-1 1.1-1.6 1.5l-1.8.9a13 13 0 01-5.5.7c-1.3 0-2-.3-2-.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M45.5 29.1l-3-4.7c-.6-1-1.8-1.8-3.2-2l-6.1-.9c-1.5-.2-3 .2-4.2 1l-5.8 3.4a6.3 6.3 0 00-2.7 3.3l-2 5.8c-.4 1.3-.3 2.7.4 3.7l3 4.8c.6 1 1.8 1.7 3.2 2l6.1.8c1.5.2 3-.1 4.2-.9l5.8-3.5a6.3 6.3 0 002.7-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.7 6.7a10 10 0 00-7.9 4.7c-.5 1-2 .7-1.8-.2a6 6 0 00-4-6.5c-1-.3-.5-1.7.5-1.7a10 10 0 007.9-4.8c.5-.9 2-.7 1.8.3a6 6 0 004 6.4c1 .4.5 1.7-.5 1.8z",
					fill: "#383838"
				}), a.a.createElement("path", {
					d: "M38.8 36l.1-.2.2-.1.3-.2.3-.6v-.4l-.4-.3h-.1c-.5-.1-1-.4-1.5-.7a6.2 6.2 0 01-2.6-3.4 7 7 0 01-.3-2.6v.2-.2-.1h-.3a.6.6 0 00-.5.2l-.1.1a10.4 10.4 0 01-8.3 5.1l.4-.2-.3.1-.3.1-.1.2v.1l.3.3-.3-.2a6.5 6.5 0 014.4 7.2V40 40.4l.2.1h.3l.3-.2v-.1a9.4 9.4 0 016.3-4l.5-.1H38.9 37.7a9.2 9.2 0 00-3.1 1.2c-1.4.8-2.5 2-3.3 3.4a1.6 1.6 0 01-1.5.8c-.3 0-.6-.2-.8-.4l-.2-.2v-.2l-.1-.3v-.2a6 6 0 00-.2-2c-.1-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.8-2.2l-.3-.2.2.3-.2-.2-.2-.1-.2-.3-.2-.2.1-1.1c.1-.3.4-.6.6-.7.3-.2.6-.3 1-.3h-.4.3a9 9 0 003.7-1.1 10.6 10.6 0 002.7-2.1l.9-1.3v-.1c.2-.2.4-.5.7-.6.3-.2.7-.2 1-.2.4 0 .8.2 1 .5l.2.2.2.3a1.8 1.8 0 010 .6v-.2.2c0 .7 0 1.5.2 2.2a5.9 5.9 0 003.4 3.7l.2.2-.3-.2c.3 0 .6.3.7.6.1.3.1.6 0 .8a1.4 1.4 0 01-1 1h-.4z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M45.4 29.2l.2.2.4.8a4.1 4.1 0 01.1 2.4c0 .4-.2.7-.3 1a426.4 426.4 0 01-2.2 6.5 6.7 6.7 0 01-2.1 2.2l-.4.2-1.5 1-3.2 2c-.3 0-.5.3-.8.4a7.6 7.6 0 01-3 1h-1.7l-.5-.1-2-.3-2.2-.2-1-.2h-.3-.3l-.5-.2c-1-.3-2-.9-2.6-1.7 0 0 0-.2-.2-.3l-.1-.2-.6-1-2.3-3.6-.1-.2-.2-.3a5 5 0 01-.3-3l.3-1.2 1.3-4 .5-1.4.8-1.4c.5-.9 1.3-1.6 2.2-2.2l4.5-2.6 1-.6.2-.2h.2l.1-.1.6-.3a7.1 7.1 0 013.4-.6l1.1.1 2 .4 3.6.6a4.7 4.7 0 013.3 2.5l.4.7.7 1.4 1.4 2.6-3-4.6-.1-.3-.2-.3-.5-.4a4.2 4.2 0 00-1.8-.9l-.6-.1-1.5-.2-2.9-.4-1.4-.2h-1.4c-1 0-1.9.4-2.7.9l-2.5 1.5-2.5 1.6-.6.4a7 7 0 00-1.6 1.3 5.5 5.5 0 00-1 1.7l-.2.7a1540.4 1540.4 0 00-1.8 5.3 3.9 3.9 0 00.3 2.8v.3l.3.2.7 1.1 1.3 2.1.5.9.3.4.1.2.1.1a3.6 3.6 0 002.1 1.3h.5l.4.1 2 .3 3.5.5h.4a4.5 4.5 0 001.2 0 6 6 0 002.1-.6l.7-.5 1.4-.8 2.6-1.6 1.3-.7 1-.7c.6-.5 1-1.2 1.4-1.9v-.2l.1-.2v-.1l.3-.6.3-1a1594.4 1594.4 0 001.4-3.7l.1-.3a4 4 0 00.3-1c0-.6 0-1.3-.2-1.9l-.1-.6z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M44 26.6l-3-4.7c-.6-1.1-1.8-1.8-3.2-2l-6.2-1c-1.4 0-3 .2-4.2 1l-5.7 3.5c-1.3.7-2.2 1.9-2.7 3.3l-2 5.8c-.4 1.3-.3 2.6.3 3.7l3 4.7c.7 1.1 1.8 1.8 3.2 2l6.2.9c1.5.2 3-.1 4.2-1l5.7-3.4c1.3-.7 2.3-1.9 2.8-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.8 6.7a10 10 0 00-7.8 4.7c-.5.9-2 .7-1.8-.3a6 6 0 00-4-6.4c-1-.4-.6-1.7.5-1.8a10 10 0 007.8-4.7c.6-.9 2-.7 1.9.3a6 6 0 004 6.4c1 .4.5 1.7-.6 1.8z",
					fill: "#4C4C4C"
				}), a.a.createElement("path", {
					d: "M37.3 33.4l.1-.1.2-.1.2-.2.4-.7-.1-.3c-.1-.2-.2-.3-.4-.3l-1.5-.7a6.3 6.3 0 01-3-6v.2-.2-.1l-.2-.1h-.3l-.3.3v.1-.1a10.4 10.4 0 01-8.3 5.1h.4-.4l-.2.1-.2.2v.1l.4.3-.3-.3c.7.3 1.4.7 2 1.2a6.5 6.5 0 012.3 6v-.2V38l.3.1h.3l.3-.3a9.4 9.4 0 016.2-4.1 4.9 4.9 0 011 0h1.1-1.1a10 10 0 00-3.1 1.2c-1.4.8-2.6 2-3.4 3.4a1.6 1.6 0 01-1.4.7c-.3 0-.6 0-.8-.3l-.2-.2-.1-.3V38v-.2a6 6 0 00-.2-2c-.2-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.9-2.2l-.3-.2.3.2-.2-.1-.3-.2-.1-.2-.2-.3v-1c.2-.4.4-.6.7-.8l.9-.3-.3.1h.3a9 9 0 003.7-1.2 10.6 10.6 0 002.6-2l1-1.4c.1-.3.4-.5.7-.7l1-.2c.4 0 .8.2 1 .5l.2.3.1.3v.5-.2.2c0 .8 0 1.5.3 2.2.1.7.4 1.3.8 1.8a6 6 0 002.5 2l.3.1-.3-.2c.3.1.6.4.7.7.1.2.1.5 0 .8a1.4 1.4 0 01-1 1h-.2l-.2-.1z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M43.9 26.7l.2.2.4.8c.2.5.2 1 .2 1.5l-.1 1-.3 1a415.5 415.5 0 01-2.2 6.4 6.7 6.7 0 01-2.2 2.1l-.3.3-1.5 1-3.2 1.9-.8.5a7.3 7.3 0 01-4.2 1h-.5l-.5-.1-2.1-.3-2-.3-1.1-.1H23l-.6-.2a5.2 5.2 0 01-2.5-1.7l-.2-.3v-.1l-.1-.1-.6-1-2.3-3.6-.2-.2-.1-.3a5 5 0 010-4.2l1.3-4 .5-1.4.7-1.5c.6-.8 1.4-1.6 2.3-2.1l4.4-2.6 1-.7.3-.1h.1l.2-.2.5-.2a7 7 0 013.5-.7l1 .2 2 .3 3.7.7a4.7 4.7 0 013.3 2.5l.4.7.7 1.3 1.3 2.6-2.9-4.6-.1-.2-.2-.3-.5-.5a4.2 4.2 0 00-1.8-.8l-.7-.1-1.4-.2-3-.4-1.4-.2a5.8 5.8 0 00-4 .8l-2.5 1.6-2.6 1.6-.6.4a7 7 0 00-1.5 1.3 5.6 5.6 0 00-1 1.7l-.3.7a1727.5 1727.5 0 00-1.7 5.3 3.9 3.9 0 00.2 2.8l.2.3.1.2a246.5 246.5 0 002 3.2l.6.9.3.4v.2l.2.1c.4.5.8.8 1.3 1a4.2 4.2 0 001.2.4h.5l1.9.3 3.6.5h1.6a6 6 0 002.1-.7l.7-.4 1.4-.8 2.6-1.6 1.2-.7 1-.8c.6-.5 1.1-1 1.4-1.8l.1-.2v-.2l.1-.1.2-.6.4-1 .7-2 .6-1.7a26 26 0 01.4-1.3v-1.9l-.2-.6z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M32 26.1c-1.3.4-2.9 0-4-.8-1.2-1-2-2.2-2.4-3.6-.6-2.7-.6-5.1.6-8 1.3-3 2.8-4 3.8-7.6.5 2.7 1 3.2 2.1 5 1.2 1.7 3.7 2.8 4.7 4.5 1.3 2 .9 4-1.9 4.5-.7 2.6-.2 4.9-2.8 6.1z",
					fill: "#FFF1B6"
				}), a.a.createElement("path", {
					d: "M32 26.3h.1l.2-.2.2-.2.2-.1c.4-.4.7-.7.9-1.2a6 6 0 00.4-2l.4-2.6v-.3l.4-.1.4-.1.4-.2.4-.2h.1l.2-.2a1.5 1.5 0 00.5-1.3v-.4-.2h-.1v-.2l-.1-.2-.1-.2-.3-.4-.6-.8-.8-.6-2-1.5-.9-.9-.2-.2-.2-.3-.2-.3-.2-.2a19.8 19.8 0 01-1.3-2.3 15 15 0 01-.7-2.6h1.8a14 14 0 01-2.4 5 19.9 19.9 0 00-2.1 4.5 10 10 0 00-.4 4L26 21l.1.6.2.6a6.1 6.1 0 002.2 3.3 5.4 5.4 0 003 1h.3-.1a4.2 4.2 0 01-1.2.2c-.6 0-1.1-.2-1.6-.4a6 6 0 01-2.7-2A7.3 7.3 0 0125 21a12 12 0 011-8.4l.8-1.4 1.5-2.6c.4-.9.7-1.7.9-2.6l.8-3.6.8 3.6c.1.8.3 1.5.6 2.2l.5 1 .6.8.3.5.1.2.2.2.7.7c1 .9 2.2 1.6 3.2 2.7a6.7 6.7 0 011 1.4v.3l.2.3.2 1v1l-.1.3-.1.3-.2.3a3 3 0 01-.3.5l-.2.2-.3.2-.2.1-.2.2c-.5.3-1.1.5-1.7.6l.6-.7-.5 2.7c-.2.8-.5 1.6-1 2.2a3.3 3.3 0 01-1.7 1.2 1 1 0 01-.3 0l-.4-.1a.1.1 0 00.1 0z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M32.4 23.4c.1.8-.7 1.4-1.4 1.4-1.2.2-2.4-.7-2.8-1.9a5.3 5.3 0 010-3.5l1.5-3.4 2.3 4.6c.4.8.8 1.7.6 2.5",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M32.8 23.2l-.3-.7-.7-1.4-2.7-4.8h1.2l-1 2.2-.6 2.1a4 4 0 00.2 2.4 2.9 2.9 0 001.2 1.3l.7.2h.8c.3 0 .5-.2.7-.4.2-.2.4-.4.4-.7 0 .3 0 .5-.2.8l-.5.6a2.2 2.2 0 01-1.6.3c-.6 0-1.1-.3-1.6-.7-.4-.3-.8-.8-1-1.3l-.4-1.6.1-1.6c.2-.9.5-1.8 1-2.6l.6-1.5.6-1.4.6 1.3a132.3 132.3 0 012.5 5.1c.2.5.3 1.1.3 1.7 0 .5-.2.7-.3.7z",
					fill: "#fff"
				})),
				f = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), a.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4a161286.2 161286.2 0 0113.3-4.4c.4-.2.2-.8-.3-.7z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.2-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), a.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1L3 22l2.8 4.7c.2.2.3.7.6 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.7 1.4 1.9.6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.1 2.1 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), a.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.4 4.4 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3l-6.1-1-6.2-1.1-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4a48353.8 48353.8 0 01-9.8-1.7l-5.9-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2 0 0l.3-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5l1.8.3 5.6 1 6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6L29.7 17l-2-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8a31996 31996 0 015.8 6.6l1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1l-6 8.3-3.5 4.7-1.2 1.6-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1-.1-.2.3.6c0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), a.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6a22549.5 22549.5 0 002 2.2l4 4.9c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6l-1.8-.3-5.8-1-6-1.1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1a7430.5 7430.5 0 007.4-3.3l10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var p = r("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less"),
				v = r.n(p);

			function g(e) {
				const {
					pointsName: t
				} = e;
				return a.a.createElement("div", {
					className: v.a.container
				}, a.a.createElement(u.a, {
					colored: !0
				}, i.fbt._("Burn Your {pointsName}", [i.fbt._param("pointsName", t)], {
					hk: "2JXqt"
				})), a.a.createElement("div", {
					className: v.a.sectionsContainer
				}, a.a.createElement(b, {
					image: a.a.createElement(m, null),
					header: i.fbt._("Burn and be rewarded", null, {
						hk: "1G5I22"
					}),
					description: i.fbt._("Burn your {pointsName} to receive a reward created by the community.", [i.fbt._param("pointsName", t)], {
						hk: "iRnjD"
					})
				}), a.a.createElement(b, {
					image: a.a.createElement(h, null),
					header: i.fbt._("No one gets the {pointsName}", [i.fbt._param("pointsName", t)], {
						hk: "2hPu7L"
					}),
					description: i.fbt._("When your {pointsName} disappear, it helps the rest of the community by making everyone else's slice of {pointsName2} larger.", [i.fbt._param("pointsName", t), i.fbt._param("pointsName2", t)], {
						hk: "Baw1t"
					})
				}), a.a.createElement(b, {
					image: a.a.createElement(f, null),
					header: i.fbt._("Your community will thank you", null, {
						hk: "2DLt1I"
					}),
					description: i.fbt._("After burning your {pointsName} the user or bot who asked you to burn them will reward you accordingly. *", [i.fbt._param("pointsName", t)], {
						hk: "jf25R"
					})
				})), a.a.createElement("div", {
					className: v.a.footer
				}, a.a.createElement("div", {
					className: v.a.footnote
				}, i.fbt._("* Rewards are created by the community, for the community. Reddit has nothing to do with them, and cannot assist you to cancel, reverse, or otherwise modify burning details. Once you burn your {pointsName}, they’re gone forever.", [i.fbt._param("pointsName", t)], {
					hk: "13HyI3"
				})), a.a.createElement(d.t, {
					onClick: e.onContinue
				}, i.fbt._("Let's do it", null, {
					hk: "2Ktk0f"
				}))))
			}

			function b(e) {
				return a.a.createElement("div", {
					className: v.a.section
				}, a.a.createElement("div", {
					className: v.a.sectionImage
				}, e.image), a.a.createElement("div", {
					className: v.a.sectionContent
				}, a.a.createElement("h4", {
					className: v.a.sectionHeader
				}, e.header), a.a.createElement("p", {
					className: v.a.sectionDescription
				}, e.description)))
			}
			var E = r("./node_modules/bignumber.js/bignumber.js"),
				x = r("./src/reddit/actions/governance/index.ts"),
				N = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/actions/toaster.ts"),
				w = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				y = r("./src/reddit/endpoints/governance/crypto.ts"),
				M = r("./src/reddit/helpers/crypto/transactions.ts"),
				C = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				O = r("./src/reddit/helpers/governance/tokens.ts"),
				j = r("./src/reddit/helpers/trackers/crypto.ts"),
				A = r("./src/reddit/hooks/useTracking.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				R = r("./src/reddit/selectors/gov.ts"),
				F = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				T = r("./src/lib/classNames/index.ts"),
				k = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				L = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				z = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				S = r("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less"),
				B = r.n(S);

			function P(e) {
				const {
					burnAmount: t,
					burnMemo: r,
					hasEnoughPoints: n,
					pointsName: s,
					subreddit: o
				} = e;
				return a.a.createElement("div", {
					className: B.a.overview
				}, a.a.createElement(k.a, {
					amount: t,
					className: B.a.amount,
					subredditId: o.id
				}), a.a.createElement(z.a, {
					subredditId: o.id
				}), a.a.createElement("div", {
					className: Object(T.a)(B.a.memo, {
						[B.a.error]: !n
					})
				}, n ? i.fbt._("For “{memo}”. Fulfilled by the community, not Reddit.", [i.fbt._param("memo", r)], {
					hk: "1rkdVJ"
				}) : i.fbt._("Not enough {pointsName}", [i.fbt._param("pointsName", s)], {
					hk: "2qcKwi"
				})))
			}

			function U(e) {
				return a.a.createElement(L.b, {
					values: [
						[Object(L.a)(), e.contractAddress],
						[i.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"],
						[i.fbt._("Memo", null, {
							hk: "4AomKF"
						}), e.memo]
					]
				})
			}
			const D = 15e3;

			function G(e) {
				const {
					burnAmount: t,
					burnMemo: r,
					subreddit: n,
					pointsDetails: o
				} = e, l = Object(s.d)(), c = Object(A.a)(), u = () => l(Object(N.f)()), d = n.id, m = Object(s.e)(e => Object(R.e)(e, {
					subredditId: d
				})), h = new E.BigNumber(m).isGreaterThanOrEqualTo(t), f = Object(O.b)(t, null == o ? void 0 : o.displayConversion), p = o.contractAddress, v = Object(M.a)(p, t, r), g = e => {
					c(Object(j.c)("burn_link", d, f, e))
				}, b = o.name;
				return a.a.createElement(F.a, {
					approvalOverview: a.a.createElement(P, {
						burnAmount: t,
						burnMemo: r,
						hasEnoughPoints: h,
						subreddit: n,
						pointsName: b
					}),
					approvalDetails: a.a.createElement(U, {
						contractAddress: p,
						memo: r
					}),
					onClose: u,
					onTransactionSuccess: async e => {
						u(), l(function(e) {
							const t = Object(_.e)(i.fbt._("Burning your {pointsName}...", [i.fbt._param("pointsName", e)], {
								hk: "2LoC1g"
							}), I.b.SuccessCommunity);
							return t.duration = D, Object(_.f)(t)
						}(b));
						try {
							await async function(e, t, r, n, a) {
								await Object(C.a)(t, r), await e(Object(w.a)(Object(x.h)({
									subredditId: n
								}), async e => {
									const t = Object(R.e)(e(), {
										subredditId: n
									});
									return a !== t || null
								})), e(Object(x.h)({
									subredditId: n
								}))
							}(l, o, e.hash, n.id, m), c(Object(j.d)("burn_link", d, f)), l(function(e) {
								const t = Object(_.e)(i.fbt._("Your {pointsName} were burnt!", [i.fbt._param("pointsName", e)], {
									hk: "1BHX95"
								}), I.b.SuccessCommunityGreen);
								return t.duration = D, Object(_.f)(t)
							}(b))
						} catch (t) {
							g(t.toString()), l(function(e) {
								return Object(_.f)(Object(_.e)(i.fbt._("There was an error while burning your {pointsName}. Please try again later", [i.fbt._param("pointsName", e)], {
									hk: "48Un5w"
								}), I.b.Error))
							}(b))
						}
					},
					onTransactionFailure: g,
					subredditId: d,
					title: i.fbt._("Approve Burning Your Bricks", null, {
						hk: "4DTzlV"
					}),
					transaction: h ? v : null,
					transactionIntent: Object(y.b)(d, t, r)
				})
			}
			t.default = Object(o.a)((function() {
				const {
					subreddit: e,
					pointsDetails: t
				} = Object(c.c)(), r = Object(s.e)(e => Object(l.a)(e)), [o, i] = Object(n.useState)(!0);
				return e && t ? o ? a.a.createElement(g, {
					onContinue: () => i(!1),
					pointsName: t.name
				}) : a.a.createElement(G, {
					burnAmount: r.amount,
					burnMemo: r.memo,
					subreddit: e,
					pointsDetails: t
				}) : null
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				c = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				i = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = Object(s.e)(t => Object(o.e)(t, e));
				return a.a.createElement("div", {
					className: i.a.currentBalance
				}, u._("Current balance:", null, {
					hk: "2NDvrq"
				}), a.a.createElement(l.a, {
					className: i.a.currentBalanceAmount,
					amount: t,
					subredditId: e.subredditId,
					small: !0,
					grey: !0
				}))
			}
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
				a = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(a),
				o = r("./node_modules/raf/index.js"),
				l = r.n(o),
				c = r("./node_modules/react/index.js"),
				i = r.n(c),
				u = r("./src/lib/classNames/index.ts"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				p = r.n(f);
			var v = Object(d.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return i.a.createElement("div", {
						className: p.a.wrapper
					}, i.a.createElement(h.a, {
						className: p.a.titleRow
					}, r), i.a.createElement("div", {
						className: p.a.detailsContainer
					}, t), i.a.createElement(h.a, {
						className: p.a.buttonRow
					}, i.a.createElement(m.l, {
						className: p.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = r("./src/reddit/controls/ErrorText/index.m.less"),
				b = r.n(g);
			class E extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
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
					l()(() => {
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
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: l
					} = this.state;
					return i.a.createElement("div", {
						className: Object(u.a)(b.a.wrapper, t)
					}, i.a.createElement("span", {
						className: b.a.description,
						ref: this.spanRef
					}, e), o && i.a.createElement("span", {
						className: b.a.moreText,
						onClick: this.toggleModal
					}, s), l && i.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? i.a.createElement("div", {
						className: t
					}, o.map((e, t) => i.a.createElement(E, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				N = e => i.a.createElement(x, {
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
				return v
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				i = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
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
			const h = o.a.input("input", d.a),
				f = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				p = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						...l
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(d.a.inputWrapper, o, {
							[d.a.mIsInvalid]: e.isInvalid
						}),
						onClick: f
					}, a.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, l)), e.label && a.a.createElement("label", {
						className: Object(s.a)(d.a.label, {
							[d.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				v = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: o,
						className: l,
						redditStyle: c,
						...i
					} = e, u = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(d.a.inputMovingLabelWrapper, l, {
							[d.a.mIsInvalid]: o,
							[d.a.mIsRedditStyle]: c
						}),
						onClick: f
					}, a.a.createElement(h, m({
						innerRef: n
					}, i)), e.label && a.a.createElement("label", {
						className: Object(s.a)(d.a.label, {
							[d.a.mHasValue]: u
						})
					}, e.label), e.children)
				},
				g = e => a.a.createElement("div", {
					className: Object(s.a)(d.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(c.a, {
					className: d.a.plus
				}));
			var b;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(b || (b = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: b.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: b.REMOVE,
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
					return e.map((e, o) => a.a.createElement(p, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: d.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(i.b, {
						className: d.a.trash
					})), !!s[o] && a.a.createElement(l.b, {
						className: d.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: o,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !l;
					return a.a.createElement("div", {
						className: Object(s.a)(d.a.multiInputWrapper, e)
					}, t && c && a.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && a.a.createElement(g, {
						onClick: this.addValue,
						text: o
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
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
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function l(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js");

			function a(e, t) {
				const [r, a] = Object(n.useState)(e);
				return [r, e => {
					t.current && a(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = r.n(o);
			const c = e => a.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				s = {},
				o = (e, t) => {
					const r = h(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				c = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				u = (e, t) => {
					const r = i(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				d = (e, t) => {
					const r = i(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.97dd18614eb943312923.js.map