// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.dabb1f2e8bdcf8c2caa2.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return m
			})), r.d(e, "e", (function() {
				return g
			})), r.d(e, "d", (function() {
				return f
			})), r.d(e, "b", (function() {
				return b
			})), r.d(e, "c", (function() {
				return p
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = r("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				i = r("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const a = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function u(t) {
				Object(n.l)(t, 20) || a.throwArgumentError("invalid address", "address", t);
				const e = (t = t.toLowerCase()).substring(2).split(""),
					r = new Uint8Array(40);
				for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
				const o = Object(n.a)(Object(s.a)(r));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
				return "0x" + e.join("")
			}
			const c = {};
			for (let v = 0; v < 10; v++) c[String(v)] = String(v);
			for (let v = 0; v < 26; v++) c[String.fromCharCode(65 + v)] = String(10 + v);
			const l = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function h(t) {
				let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => c[t]).join("");
				for (; e.length >= l;) {
					let t = e.substring(0, l);
					e = parseInt(t, 10) % 97 + e.substring(t.length)
				}
				let r = String(98 - parseInt(e, 10) % 97);
				for (; r.length < 2;) r = "0" + r;
				return r
			}

			function m(t) {
				let e = null;
				if ("string" != typeof t && a.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = u(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && a.throwArgumentError("bad address checksum", "address", t);
				else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (t.substring(2, 4) !== h(t) && a.throwArgumentError("bad icap checksum", "address", t), e = Object(o.c)(t.substring(4)); e.length < 40;) e = "0" + e;
					e = u("0x" + e)
				} else a.throwArgumentError("invalid address", "address", t);
				return e
			}

			function g(t) {
				try {
					return m(t), !0
				} catch (e) {}
				return !1
			}

			function f(t) {
				let e = Object(o.b)(m(t).substring(2)).toUpperCase();
				for (; e.length < 30;) e = "0" + e;
				return "XE" + h("XE00" + e) + e
			}

			function b(t) {
				let e = null;
				try {
					e = m(t.from)
				} catch (u) {
					a.throwArgumentError("missing from address", "transaction", t)
				}
				const r = Object(n.o)(Object(n.a)(o.a.from(t.nonce).toHexString()));
				return m(Object(n.e)(Object(s.a)(Object(i.encode)([e, r])), 12))
			}

			function p(t, e, r) {
				return 32 !== Object(n.d)(e) && a.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== Object(n.d)(r) && a.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), m(Object(n.e)(Object(s.a)(Object(n.b)(["0xff", m(t), e, r])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return h
			})), r.d(e, "a", (function() {
				return g
			})), r.d(e, "c", (function() {
				return E
			})), r.d(e, "b", (function() {
				return N
			}));
			var n = r("./node_modules/bn.js/lib/bn.js"),
				o = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = r("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = r("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				u = o.a.BN;
			const c = new i.a(a.a),
				l = {},
				d = 9007199254740991;

			function h(t) {
				return null != t && (g.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || Object(s.l)(t) || "bigint" == typeof t || Object(s.j)(t))
			}
			let m = !1;
			class g {
				constructor(t, e) {
					c.checkNew(new.target, g), t !== l && c.throwError("cannot call constructor directly; use BigNumber.from", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(t) {
					return b(p(this).fromTwos(t))
				}
				toTwos(t) {
					return b(p(this).toTwos(t))
				}
				abs() {
					return "-" === this._hex[0] ? g.from(this._hex.substring(1)) : this
				}
				add(t) {
					return b(p(this).add(p(t)))
				}
				sub(t) {
					return b(p(this).sub(p(t)))
				}
				div(t) {
					return g.from(t).isZero() && v("division by zero", "div"), b(p(this).div(p(t)))
				}
				mul(t) {
					return b(p(this).mul(p(t)))
				}
				mod(t) {
					const e = p(t);
					return e.isNeg() && v("cannot modulo negative values", "mod"), b(p(this).umod(e))
				}
				pow(t) {
					const e = p(t);
					return e.isNeg() && v("cannot raise to negative values", "pow"), b(p(this).pow(e))
				}
				and(t) {
					const e = p(t);
					return (this.isNegative() || e.isNeg()) && v("cannot 'and' negative values", "and"), b(p(this).and(e))
				}
				or(t) {
					const e = p(t);
					return (this.isNegative() || e.isNeg()) && v("cannot 'or' negative values", "or"), b(p(this).or(e))
				}
				xor(t) {
					const e = p(t);
					return (this.isNegative() || e.isNeg()) && v("cannot 'xor' negative values", "xor"), b(p(this).xor(e))
				}
				mask(t) {
					return (this.isNegative() || t < 0) && v("cannot mask negative values", "mask"), b(p(this).maskn(t))
				}
				shl(t) {
					return (this.isNegative() || t < 0) && v("cannot shift negative values", "shl"), b(p(this).shln(t))
				}
				shr(t) {
					return (this.isNegative() || t < 0) && v("cannot shift negative values", "shr"), b(p(this).shrn(t))
				}
				eq(t) {
					return p(this).eq(p(t))
				}
				lt(t) {
					return p(this).lt(p(t))
				}
				lte(t) {
					return p(this).lte(p(t))
				}
				gt(t) {
					return p(this).gt(p(t))
				}
				gte(t) {
					return p(this).gte(p(t))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return p(this).isZero()
				}
				toNumber() {
					try {
						return p(this).toNumber()
					} catch (t) {
						v("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (t) {}
					return c.throwError("this platform does not support BigInt", i.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? m || (m = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", i.a.errors.UNEXPECTED_ARGUMENT, {})), p(this).toString(10)
				}
				toHexString() {
					return this._hex
				}
				toJSON(t) {
					return {
						type: "BigNumber",
						hex: this.toHexString()
					}
				}
				static from(t) {
					if (t instanceof g) return t;
					if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new g(l, f(t)) : t.match(/^-?[0-9]+$/) ? new g(l, f(new u(t))) : c.throwArgumentError("invalid BigNumber string", "value", t);
					if ("number" == typeof t) return t % 1 && v("underflow", "BigNumber.from", t), (t >= d || t <= -d) && v("overflow", "BigNumber.from", t), g.from(String(t));
					const e = t;
					if ("bigint" == typeof e) return g.from(e.toString());
					if (Object(s.j)(e)) return g.from(Object(s.i)(e));
					if (e)
						if (e.toHexString) {
							const t = e.toHexString();
							if ("string" == typeof t) return g.from(t)
						} else {
							let t = e._hex;
							if (null == t && "BigNumber" === e.type && (t = e.hex), "string" == typeof t && (Object(s.l)(t) || "-" === t[0] && Object(s.l)(t.substring(1)))) return g.from(t)
						} return c.throwArgumentError("invalid BigNumber value", "value", t)
				}
				static isBigNumber(t) {
					return !(!t || !t._isBigNumber)
				}
			}

			function f(t) {
				if ("string" != typeof t) return f(t.toString(16));
				if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && c.throwArgumentError("invalid hex", "value", t), "0x00" === (t = f(t)) ? t : "-" + t;
				if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
				for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
				return t
			}

			function b(t) {
				return g.from(f(t))
			}

			function p(t) {
				const e = g.from(t).toHexString();
				return "-" === e[0] ? new u("-" + e.substring(3), 16) : new u(e.substring(2), 16)
			}

			function v(t, e, r) {
				const n = {
					fault: t,
					operation: e
				};
				return null != r && (n.value = r), c.throwError(t, i.a.errors.NUMERIC_FAULT, n)
			}

			function E(t) {
				return new u(t, 36).toString(16)
			}

			function N(t) {
				return new u(t, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(t, e, r) {
			"use strict";
			r.d(e, "k", (function() {
				return i
			})), r.d(e, "j", (function() {
				return a
			})), r.d(e, "a", (function() {
				return u
			})), r.d(e, "b", (function() {
				return c
			})), r.d(e, "o", (function() {
				return l
			})), r.d(e, "p", (function() {
				return d
			})), r.d(e, "l", (function() {
				return h
			})), r.d(e, "i", (function() {
				return g
			})), r.d(e, "d", (function() {
				return f
			})), r.d(e, "e", (function() {
				return b
			})), r.d(e, "c", (function() {
				return p
			})), r.d(e, "g", (function() {
				return v
			})), r.d(e, "f", (function() {
				return E
			})), r.d(e, "h", (function() {
				return N
			})), r.d(e, "n", (function() {
				return _
			})), r.d(e, "m", (function() {
				return y
			}));
			const n = new(r("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function o(t) {
				return !!t.toHexString
			}

			function s(t) {
				return t.slice ? t : (t.slice = function() {
					const e = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(t, e)))
				}, t)
			}

			function i(t) {
				return h(t) && !(t.length % 2) || a(t)
			}

			function a(t) {
				if (null == t) return !1;
				if (t.constructor === Uint8Array) return !0;
				if ("string" == typeof t) return !1;
				if (null == t.length) return !1;
				for (let e = 0; e < t.length; e++) {
					const r = t[e];
					if ("number" != typeof r || r < 0 || r >= 256 || r % 1) return !1
				}
				return !0
			}

			function u(t, e) {
				if (e || (e = {}), "number" == typeof t) {
					n.checkSafeUint53(t, "invalid arrayify value");
					const e = [];
					for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
					return 0 === e.length && e.push(0), s(new Uint8Array(e))
				}
				if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), o(t) && (t = t.toHexString()), h(t)) {
					let r = t.substring(2);
					r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", t));
					const o = [];
					for (let t = 0; t < r.length; t += 2) o.push(parseInt(r.substring(t, t + 2), 16));
					return s(new Uint8Array(o))
				}
				return a(t) ? s(new Uint8Array(t)) : n.throwArgumentError("invalid arrayify value", "value", t)
			}

			function c(t) {
				const e = t.map(t => u(t)),
					r = e.reduce((t, e) => t + e.length, 0),
					n = new Uint8Array(r);
				return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), s(n)
			}

			function l(t) {
				let e = u(t);
				if (0 === e.length) return e;
				let r = 0;
				for (; r < e.length && 0 === e[r];) r++;
				return r && (e = e.slice(r)), e
			}

			function d(t, e) {
				(t = u(t)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
				const r = new Uint8Array(e);
				return r.set(t, e - t.length), s(r)
			}

			function h(t, e) {
				return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
			}
			const m = "0123456789abcdef";

			function g(t, e) {
				if (e || (e = {}), "number" == typeof t) {
					n.checkSafeUint53(t, "invalid hexlify value");
					let e = "";
					for (; t;) e = m[15 & t] + e, t = Math.floor(t / 16);
					return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
				}
				if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
				if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), o(t)) return t.toHexString();
				if (h(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
				if (a(t)) {
					let e = "0x";
					for (let r = 0; r < t.length; r++) {
						let n = t[r];
						e += m[(240 & n) >> 4] + m[15 & n]
					}
					return e
				}
				return n.throwArgumentError("invalid hexlify value", "value", t)
			}

			function f(t) {
				if ("string" != typeof t) t = g(t);
				else if (!h(t) || t.length % 2) return null;
				return (t.length - 2) / 2
			}

			function b(t, e, r) {
				return "string" != typeof t ? t = g(t) : (!h(t) || t.length % 2) && n.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
			}

			function p(t) {
				let e = "0x";
				return t.forEach(t => {
					e += g(t).substring(2)
				}), e
			}

			function v(t) {
				const e = E(g(t, {
					hexPad: "left"
				}));
				return "0x" === e ? "0x0" : e
			}

			function E(t) {
				"string" != typeof t && (t = g(t)), h(t) || n.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
				let e = 0;
				for (; e < t.length && "0" === t[e];) e++;
				return "0x" + t.substring(e)
			}

			function N(t, e) {
				for ("string" != typeof t ? t = g(t) : h(t) || n.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
				return t
			}

			function _(t) {
				const e = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (i(t)) {
					const r = u(t);
					65 !== r.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", t), e.r = g(r.slice(0, 32)), e.s = g(r.slice(32, 64)), e.v = r[64], e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = g(r.slice(32, 64))
				} else {
					if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
						const r = d(u(e._vs), 32);
						e._vs = g(r);
						const o = r[0] >= 128 ? 1 : 0;
						null == e.recoveryParam ? e.recoveryParam = o : e.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
						const s = g(r);
						null == e.s ? e.s = s : e.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", t)
					}
					null == e.recoveryParam ? null == e.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2 : null == e.v ? e.v = 27 + e.recoveryParam : e.recoveryParam !== 1 - e.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", t), null != e.r && h(e.r) ? e.r = N(e.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && h(e.s) ? e.s = N(e.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", t);
					const r = u(e.s);
					r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
					const o = g(r);
					e._vs && (h(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", t), e._vs = N(e._vs, 32)), null == e._vs ? e._vs = o : e._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", t)
				}
				return e
			}

			function y(t) {
				return g(c([(t = _(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = r.n(n),
				s = r("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function i(t) {
				return "0x" + o.a.keccak_256(Object(s.a)(t))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(t, e, r) {
			(function(e, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof e && e.versions && e.versions.node && (n = r);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof t && t.exports, s = "0123456789abcdef".split(""), i = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], u = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function(t, e, r) {
							return function(n) {
								return new _(t, e, t).update(n)[r]()
							}
						}, d = function(t, e, r) {
							return function(n, o) {
								return new _(t, e, o).update(n)[r]()
							}
						}, h = function(t, e) {
							var r = l(t, e, "hex");
							r.create = function() {
								return new _(t, e, t)
							}, r.update = function(t) {
								return r.create().update(t)
							};
							for (var n = 0; n < c.length; ++n) {
								var o = c[n];
								r[o] = l(t, e, o)
							}
							return r
						}, m = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: u,
							createMethod: h
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: u,
							createMethod: h
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(t, e) {
								var r = d(t, e, "hex");
								r.create = function(r) {
									return new _(t, e, r)
								}, r.update = function(t, e) {
									return r.create(e).update(t)
								};
								for (var n = 0; n < c.length; ++n) {
									var o = c[n];
									r[o] = d(t, e, o)
								}
								return r
							}
						}], g = {}, f = [], b = 0; b < m.length; ++b)
						for (var p = m[b], v = p.bits, E = 0; E < v.length; ++E) {
							var N = p.name + "_" + v[E];
							f.push(N), g[N] = p.createMethod(v[E], p.padding)
						}

					function _(t, e, r) {
						this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					_.prototype.update = function(t) {
						var e = "string" != typeof t;
						e && t.constructor === ArrayBuffer && (t = new Uint8Array(t));
						for (var r, n, o = t.length, s = this.blocks, a = this.byteCount, u = this.blockCount, c = 0, l = this.s; c < o;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, r = 1; r < u + 1; ++r) s[r] = 0;
							if (e)
								for (r = this.start; c < o && r < a; ++c) s[r >> 2] |= t[c] << i[3 & r++];
							else
								for (r = this.start; c < o && r < a; ++c)(n = t.charCodeAt(c)) < 128 ? s[r >> 2] |= n << i[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << i[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++c)), s[r >> 2] |= (240 | n >> 18) << i[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << i[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]);
							if (this.lastByteIndex = r, r >= a) {
								for (this.start = r - a, this.block = s[u], r = 0; r < u; ++r) l[r] ^= s[r];
								y(l), this.reset = !0
							} else this.start = r
						}
						return this
					}, _.prototype.finalize = function() {
						var t = this.blocks,
							e = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
							for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
						for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
						y(n)
					}, _.prototype.toString = _.prototype.hex = function() {
						this.finalize();
						for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, o = this.extraBytes, i = 0, a = 0, u = ""; a < n;) {
							for (i = 0; i < e && a < n; ++i, ++a) t = r[i], u += s[t >> 4 & 15] + s[15 & t] + s[t >> 12 & 15] + s[t >> 8 & 15] + s[t >> 20 & 15] + s[t >> 16 & 15] + s[t >> 28 & 15] + s[t >> 24 & 15];
							a % e == 0 && (y(r), i = 0)
						}
						return o && (t = r[i], o > 0 && (u += s[t >> 4 & 15] + s[15 & t]), o > 1 && (u += s[t >> 12 & 15] + s[t >> 8 & 15]), o > 2 && (u += s[t >> 20 & 15] + s[t >> 16 & 15])), u
					}, _.prototype.arrayBuffer = function() {
						this.finalize();
						var t, e = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							s = 0,
							i = 0,
							a = this.outputBits >> 3;
						t = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
						for (var u = new Uint32Array(t); i < n;) {
							for (s = 0; s < e && i < n; ++s, ++i) u[i] = r[s];
							i % e == 0 && y(r)
						}
						return o && (u[s] = r[s], t = t.slice(0, a)), t
					}, _.prototype.buffer = _.prototype.arrayBuffer, _.prototype.digest = _.prototype.array = function() {
						this.finalize();
						for (var t, e, r = this.blockCount, n = this.s, o = this.outputBlocks, s = this.extraBytes, i = 0, a = 0, u = []; a < o;) {
							for (i = 0; i < r && a < o; ++i, ++a) t = a << 2, e = n[i], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;
							a % r == 0 && y(n)
						}
						return s && (t = a << 2, e = n[i], s > 0 && (u[t] = 255 & e), s > 1 && (u[t + 1] = e >> 8 & 255), s > 2 && (u[t + 2] = e >> 16 & 255)), u
					};
					var y = function(t) {
						var e, r, n, o, s, i, u, c, l, d, h, m, g, f, b, p, v, E, N, _, y, w, O, x, A, j, R, S, I, U, T, C, P, k, M, B, F, D, L, G, H, V, X, z, W, K, J, $, Y, Z, Q, q, tt, et, rt, nt, ot, st, it, at, ut, ct, lt;
						for (n = 0; n < 48; n += 2) o = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], u = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], d = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (m = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (i << 1 | u >>> 31), r = (g = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (u << 1 | i >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = o ^ (c << 1 | l >>> 31), r = s ^ (l << 1 | c >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = i ^ (d << 1 | h >>> 31), r = u ^ (h << 1 | d >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = c ^ (m << 1 | g >>> 31), r = l ^ (g << 1 | m >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = d ^ (o << 1 | s >>> 31), r = h ^ (s << 1 | o >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, f = t[0], b = t[1], K = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, S = t[20] << 3 | t[21] >>> 29, I = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ut = t[30] << 9 | t[31] >>> 23, V = t[40] << 18 | t[41] >>> 14, X = t[41] << 18 | t[40] >>> 14, k = t[2] << 1 | t[3] >>> 31, M = t[3] << 1 | t[2] >>> 31, p = t[13] << 12 | t[12] >>> 20, v = t[12] << 12 | t[13] >>> 20, $ = t[22] << 10 | t[23] >>> 22, Y = t[23] << 10 | t[22] >>> 22, U = t[33] << 13 | t[32] >>> 19, T = t[32] << 13 | t[33] >>> 19, ct = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, B = t[14] << 6 | t[15] >>> 26, F = t[15] << 6 | t[14] >>> 26, E = t[25] << 11 | t[24] >>> 21, N = t[24] << 11 | t[25] >>> 21, Z = t[34] << 15 | t[35] >>> 17, Q = t[35] << 15 | t[34] >>> 17, C = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, x = t[6] << 28 | t[7] >>> 4, A = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, ot = t[16] << 23 | t[17] >>> 9, D = t[26] << 25 | t[27] >>> 7, L = t[27] << 25 | t[26] >>> 7, _ = t[36] << 21 | t[37] >>> 11, y = t[37] << 21 | t[36] >>> 11, q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, z = t[8] << 27 | t[9] >>> 5, W = t[9] << 27 | t[8] >>> 5, j = t[18] << 20 | t[19] >>> 12, R = t[19] << 20 | t[18] >>> 12, st = t[29] << 7 | t[28] >>> 25, it = t[28] << 7 | t[29] >>> 25, G = t[38] << 8 | t[39] >>> 24, H = t[39] << 8 | t[38] >>> 24, w = t[48] << 14 | t[49] >>> 18, O = t[49] << 14 | t[48] >>> 18, t[0] = f ^ ~p & E, t[1] = b ^ ~v & N, t[10] = x ^ ~j & S, t[11] = A ^ ~R & I, t[20] = k ^ ~B & D, t[21] = M ^ ~F & L, t[30] = z ^ ~K & $, t[31] = W ^ ~J & Y, t[40] = et ^ ~nt & st, t[41] = rt ^ ~ot & it, t[2] = p ^ ~E & _, t[3] = v ^ ~N & y, t[12] = j ^ ~S & U, t[13] = R ^ ~I & T, t[22] = B ^ ~D & G, t[23] = F ^ ~L & H, t[32] = K ^ ~$ & Z, t[33] = J ^ ~Y & Q, t[42] = nt ^ ~st & at, t[43] = ot ^ ~it & ut, t[4] = E ^ ~_ & w, t[5] = N ^ ~y & O, t[14] = S ^ ~U & C, t[15] = I ^ ~T & P, t[24] = D ^ ~G & V, t[25] = L ^ ~H & X, t[34] = $ ^ ~Z & q, t[35] = Y ^ ~Q & tt, t[44] = st ^ ~at & ct, t[45] = it ^ ~ut & lt, t[6] = _ ^ ~w & f, t[7] = y ^ ~O & b, t[16] = U ^ ~C & x, t[17] = T ^ ~P & A, t[26] = G ^ ~V & k, t[27] = H ^ ~X & M, t[36] = Z ^ ~q & z, t[37] = Q ^ ~tt & W, t[46] = at ^ ~ct & et, t[47] = ut ^ ~lt & rt, t[8] = w ^ ~f & p, t[9] = O ^ ~b & v, t[18] = C ^ ~x & j, t[19] = P ^ ~A & R, t[28] = V ^ ~k & B, t[29] = X ^ ~M & F, t[38] = q ^ ~z & K, t[39] = tt ^ ~W & J, t[48] = ct ^ ~et & nt, t[49] = lt ^ ~rt & ot, t[0] ^= a[n], t[1] ^= a[n + 1]
					};
					if (o) t.exports = g;
					else
						for (b = 0; b < f.length; ++b) n[f[b]] = g[f[b]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return h
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
			let a = i.default,
				u = null;
			const c = function() {
				try {
					const t = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (r) {
								t.push(e)
							}
						}), t.length) throw new Error("missing " + t.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (t) {
					return t.message
				}
				return null
			}();
			var l, d;
			! function(t) {
				t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
			}(l || (l = {})),
			function(t) {
				t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			class h {
				constructor(t) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: t,
						writable: !1
					})
				}
				_log(t, e) {
					const r = t.toLowerCase();
					null == i[r] && this.throwArgumentError("invalid log level name", "logLevel", t), a > i[r] || console.log.apply(console, e)
				}
				debug(...t) {
					this._log(h.levels.DEBUG, t)
				}
				info(...t) {
					this._log(h.levels.INFO, t)
				}
				warn(...t) {
					this._log(h.levels.WARNING, t)
				}
				makeError(t, e, r) {
					if (s) return this.makeError("censored error", e, {});
					e || (e = h.errors.UNKNOWN_ERROR), r || (r = {});
					const n = [];
					Object.keys(r).forEach(t => {
						try {
							n.push(t + "=" + JSON.stringify(r[t]))
						} catch (i) {
							n.push(t + "=" + JSON.stringify(r[t].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = t;
					n.length && (t += " (" + n.join(", ") + ")");
					const i = new Error(t);
					return i.reason = o, i.code = e, Object.keys(r).forEach((function(t) {
						i[t] = r[t]
					})), i
				}
				throwError(t, e, r) {
					throw this.makeError(t, e, r)
				}
				throwArgumentError(t, e, r) {
					return this.throwError(t, h.errors.INVALID_ARGUMENT, {
						argument: e,
						value: r
					})
				}
				assert(t, e, r, n) {
					t || this.throwError(e, r, n)
				}
				assertArgument(t, e, r, n) {
					t || this.throwArgumentError(e, r, n)
				}
				checkNormalize(t) {
					null == t && (t = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(t, e) {
					"number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: t
					}), t % 1 && this.throwError(e, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: t
					}))
				}
				checkArgumentCount(t, e, r) {
					r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, h.errors.MISSING_ARGUMENT, {
						count: t,
						expectedCount: e
					}), t > e && this.throwError("too many arguments" + r, h.errors.UNEXPECTED_ARGUMENT, {
						count: t,
						expectedCount: e
					})
				}
				checkNew(t, e) {
					t !== Object && null != t || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(t, e) {
					t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, {
						name: t.name,
						operation: "new"
					}) : t !== Object && null != t || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return u || (u = new h(n)), u
				}
				static setCensorship(t, e) {
					if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!t) return;
						this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!t, o = !!e
				}
				static setLogLevel(t) {
					const e = i[t.toLowerCase()];
					null != e ? a = e : h.globalLogger().warn("invalid log level - " + t)
				}
				static from(t) {
					return new h(t)
				}
			}
			h.errors = d, h.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(t, e, r) {
			"use strict";
			r.r(e), r.d(e, "encode", (function() {
				return u
			})), r.d(e, "decode", (function() {
				return d
			}));
			var n = r("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = r("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new o.a("rlp/5.4.0");

			function i(t) {
				const e = [];
				for (; t;) e.unshift(255 & t), t >>= 8;
				return e
			}

			function a(t, e, r) {
				let n = 0;
				for (let o = 0; o < r; o++) n = 256 * n + t[e + o];
				return n
			}

			function u(t) {
				return Object(n.i)(function t(e) {
					if (Array.isArray(e)) {
						let r = [];
						if (e.forEach((function(e) {
								r = r.concat(t(e))
							})), r.length <= 55) return r.unshift(192 + r.length), r;
						const n = i(r.length);
						return n.unshift(247 + n.length), n.concat(r)
					}
					Object(n.k)(e) || s.throwArgumentError("RLP object must be BytesLike", "object", e);
					const r = Array.prototype.slice.call(Object(n.a)(e));
					if (1 === r.length && r[0] <= 127) return r;
					if (r.length <= 55) return r.unshift(128 + r.length), r;
					const o = i(r.length);
					return o.unshift(183 + o.length), o.concat(r)
				}(t))
			}

			function c(t, e, r, n) {
				const i = [];
				for (; r < e + 1 + n;) {
					const a = l(t, r);
					i.push(a.result), (r += a.consumed) > e + 1 + n && s.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: i
				}
			}

			function l(t, e) {
				if (0 === t.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
					const r = t[e] - 247;
					e + 1 + r > t.length && s.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
					const n = a(t, e + 1, r);
					return e + 1 + r + n > t.length && s.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), c(t, e, e + 1 + r, r + n)
				}
				if (t[e] >= 192) {
					const r = t[e] - 192;
					return e + 1 + r > t.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), c(t, e, e + 1, r)
				}
				if (t[e] >= 184) {
					const r = t[e] - 183;
					e + 1 + r > t.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
					const i = a(t, e + 1, r);
					return e + 1 + r + i > t.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r + i,
						result: Object(n.i)(t.slice(e + 1 + r, e + 1 + r + i))
					}
				}
				if (t[e] >= 128) {
					const r = t[e] - 128;
					return e + 1 + r > t.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + r,
						result: Object(n.i)(t.slice(e + 1, e + 1 + r))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(t[e])
				}
			}

			function d(t) {
				const e = Object(n.a)(t),
					r = l(e, 0);
				return r.consumed !== e.length && s.throwArgumentError("invalid rlp data", "data", t), r.result
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(t, e, r) {
			t.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(t, e, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/Governance/Token/index.tsx"),
				l = r("./src/reddit/helpers/governance/tokens.ts"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				h = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				m = r.n(h);
			const g = Object(i.c)({
				pointsDetails: (t, {
					subredditId: e
				}) => Object(d.b)(t, e)
			});
			e.a = Object(s.b)(g)((function(t) {
				var e;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, t.className, {
						[m.a.small]: t.small
					})
				}, o.a.createElement(c.a, {
					className: Object(a.a)(m.a.token, {
						[m.a.small]: t.small
					}),
					grey: t.grey,
					subredditId: t.subredditId
				}), Object(u.a)(Object(l.b)(t.amount, null === (e = t.pointsDetails) || void 0 === e ? void 0 : e.displayConversion)), t.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(t, e, r) {
			t.exports = {
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
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				i = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				a = r.n(i);

			function u(t) {
				return o.a.createElement("div", {
					className: a.a.overview
				}, t.image, o.a.createElement("div", {
					className: a.a.description
				}, o.a.createElement("div", {
					className: a.a.grid
				}, o.a.createElement("div", {
					className: a.a.descriptionTitle,
					title: t.title
				}, t.title), o.a.createElement("div", {
					className: a.a.amountCell
				}, o.a.createElement(s.a, {
					amount: t.pointsAmount,
					className: a.a.amount,
					subredditId: t.subredditId
				})), o.a.createElement("div", {
					className: a.a.descriptionSubtitle
				}, t.subtitle), o.a.createElement("div", {
					className: a.a.amountSubtext
				}, t.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(t, e, r) {
			t.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(t, e, r) {
			"use strict";
			r.r(e), r.d(e, "default", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/governance/crypto.ts"),
				h = r("./src/reddit/helpers/crypto/transactions.ts"),
				m = r("./src/reddit/helpers/governance/tokens.ts"),
				g = r("./src/reddit/helpers/trackers/crypto.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/models/Badge/managementPage.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/crypto/points.ts"),
				E = r("./src/reddit/selectors/gov.ts"),
				N = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				_ = r("./src/config.ts"),
				y = r("./src/reddit/components/SubredditIcon/index.tsx"),
				w = r("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				O = r("./src/reddit/selectors/economics.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				A = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				j = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				R = r("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				S = r.n(R);

			function I(t) {
				const e = Object(i.e)(e => Object(x.R)(e, t)),
					r = Object(i.e)(e => Object(O.r)(e, t.subredditId)),
					o = r.membershipAlt,
					a = r.prices.points,
					u = `${_.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/membership_frame.svg`;
				return s.a.createElement(j.a, {
					subredditId: t.subredditId,
					image: s.a.createElement("div", {
						className: S.a.membershipFrame
					}, s.a.createElement(w.a, {
						className: S.a.userIcon
					}), s.a.createElement("img", {
						className: S.a.frameImage,
						src: u
					}), s.a.createElement(y.b, {
						className: S.a.subredditIcon,
						subredditOrProfile: e
					})),
					title: o,
					subtitle: e.displayText,
					pointsAmount: a,
					pointsAmountSubtext: n.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const U = t => s.a.createElement(A.b, {
				values: [
					[Object(A.c)(), t.transaction.arguments[0]],
					[Object(A.a)(), t.transaction.contractAddress]
				]
			});

			function T(t) {
				const {
					price: e,
					subredditId: r
				} = t, o = Object(i.d)(), _ = Object(f.a)(), {
					pointsDetails: y,
					walletAddress: w
				} = Object(i.e)(Object(a.c)({
					pointsDetails: t => Object(v.b)(t, r),
					walletAddress: e => Object(E.g)(e, t)
				}));
				if (!y) return null;
				const O = Object(h.d)(y.contracts.subscriptions.address, w, !0),
					x = Object(m.b)(e, y.displayConversion);
				return s.a.createElement(N.a, {
					approvalOverview: s.a.createElement(I, {
						subredditId: r
					}),
					approvalDetails: s.a.createElement(U, {
						transaction: O
					}),
					onClose: t.onClose,
					onTransactionSuccess: async s => {
						await o(Object(c.f)({
							subredditId: r,
							price: e,
							providerArgs: s
						})), _(Object(g.d)("subscribe", r, x)), o(Object(l.f)({
							duration: 1e4,
							kind: p.b.SuccessCommunityGreen,
							text: n.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), o(Object(u.c)({
							subredditId: r,
							initialView: b.c.MyBadges
						})), t.onPaymentComplete()
					},
					onTransactionFailure: t => {
						_(Object(g.c)("subscribe", r, x, t))
					},
					subredditId: r,
					transaction: O,
					transactionIntent: Object(d.e)(r),
					transactionIsBlockedOnIOS: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.dabb1f2e8bdcf8c2caa2.js.map