// https://www.redditstatic.com/desktop2x/vendors~reddit-pages-meta-ArbitrumPointsMigrationPage.a3b91392f9ec3d50c48e.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-pages-meta-ArbitrumPointsMigrationPage", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return f
			})), t.d(e, "e", (function() {
				return m
			})), t.d(e, "d", (function() {
				return g
			})), t.d(e, "b", (function() {
				return E
			})), t.d(e, "c", (function() {
				return N
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const a = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function u(r) {
				Object(n.l)(r, 20) || a.throwArgumentError("invalid address", "address", r);
				const e = (r = r.toLowerCase()).substring(2).split(""),
					t = new Uint8Array(40);
				for (let n = 0; n < 40; n++) t[n] = e[n].charCodeAt(0);
				const o = Object(n.a)(Object(s.a)(t));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
				return "0x" + e.join("")
			}
			const c = {};
			for (let p = 0; p < 10; p++) c[String(p)] = String(p);
			for (let p = 0; p < 26; p++) c[String.fromCharCode(65 + p)] = String(10 + p);
			const l = Math.floor((h = 9007199254740991, Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10));
			var h;

			function d(r) {
				let e = (r = (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00").split("").map(r => c[r]).join("");
				for (; e.length >= l;) {
					let r = e.substring(0, l);
					e = parseInt(r, 10) % 97 + e.substring(r.length)
				}
				let t = String(98 - parseInt(e, 10) % 97);
				for (; t.length < 2;) t = "0" + t;
				return t
			}

			function f(r) {
				let e = null;
				if ("string" != typeof r && a.throwArgumentError("invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== r.substring(0, 2) && (r = "0x" + r), e = u(r), r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== r && a.throwArgumentError("bad address checksum", "address", r);
				else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (r.substring(2, 4) !== d(r) && a.throwArgumentError("bad icap checksum", "address", r), e = Object(o.c)(r.substring(4)); e.length < 40;) e = "0" + e;
					e = u("0x" + e)
				} else a.throwArgumentError("invalid address", "address", r);
				return e
			}

			function m(r) {
				try {
					return f(r), !0
				} catch (e) {}
				return !1
			}

			function g(r) {
				let e = Object(o.b)(f(r).substring(2)).toUpperCase();
				for (; e.length < 30;) e = "0" + e;
				return "XE" + d("XE00" + e) + e
			}

			function E(r) {
				let e = null;
				try {
					e = f(r.from)
				} catch (u) {
					a.throwArgumentError("missing from address", "transaction", r)
				}
				const t = Object(n.o)(Object(n.a)(o.a.from(r.nonce).toHexString()));
				return f(Object(n.e)(Object(s.a)(Object(i.encode)([e, t])), 12))
			}

			function N(r, e, t) {
				return 32 !== Object(n.d)(e) && a.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== Object(n.d)(t) && a.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t), f(Object(n.e)(Object(s.a)(Object(n.b)(["0xff", f(r), e, t])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(r, e, t) {
			"use strict";
			t.d(e, "d", (function() {
				return d
			})), t.d(e, "a", (function() {
				return m
			})), t.d(e, "c", (function() {
				return b
			})), t.d(e, "b", (function() {
				return _
			}));
			var n = t("./node_modules/bn.js/lib/bn.js"),
				o = t.n(n),
				s = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = t("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				u = o.a.BN;
			const c = new i.a(a.a),
				l = {},
				h = 9007199254740991;

			function d(r) {
				return null != r && (m.isBigNumber(r) || "number" == typeof r && r % 1 == 0 || "string" == typeof r && !!r.match(/^-?[0-9]+$/) || Object(s.l)(r) || "bigint" == typeof r || Object(s.j)(r))
			}
			let f = !1;
			class m {
				constructor(r, e) {
					c.checkNew(new.target, m), r !== l && c.throwError("cannot call constructor directly; use BigNumber.from", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(r) {
					return E(N(this).fromTwos(r))
				}
				toTwos(r) {
					return E(N(this).toTwos(r))
				}
				abs() {
					return "-" === this._hex[0] ? m.from(this._hex.substring(1)) : this
				}
				add(r) {
					return E(N(this).add(N(r)))
				}
				sub(r) {
					return E(N(this).sub(N(r)))
				}
				div(r) {
					return m.from(r).isZero() && p("division by zero", "div"), E(N(this).div(N(r)))
				}
				mul(r) {
					return E(N(this).mul(N(r)))
				}
				mod(r) {
					const e = N(r);
					return e.isNeg() && p("cannot modulo negative values", "mod"), E(N(this).umod(e))
				}
				pow(r) {
					const e = N(r);
					return e.isNeg() && p("cannot raise to negative values", "pow"), E(N(this).pow(e))
				}
				and(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'and' negative values", "and"), E(N(this).and(e))
				}
				or(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'or' negative values", "or"), E(N(this).or(e))
				}
				xor(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'xor' negative values", "xor"), E(N(this).xor(e))
				}
				mask(r) {
					return (this.isNegative() || r < 0) && p("cannot mask negative values", "mask"), E(N(this).maskn(r))
				}
				shl(r) {
					return (this.isNegative() || r < 0) && p("cannot shift negative values", "shl"), E(N(this).shln(r))
				}
				shr(r) {
					return (this.isNegative() || r < 0) && p("cannot shift negative values", "shr"), E(N(this).shrn(r))
				}
				eq(r) {
					return N(this).eq(N(r))
				}
				lt(r) {
					return N(this).lt(N(r))
				}
				lte(r) {
					return N(this).lte(N(r))
				}
				gt(r) {
					return N(this).gt(N(r))
				}
				gte(r) {
					return N(this).gte(N(r))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return N(this).isZero()
				}
				toNumber() {
					try {
						return N(this).toNumber()
					} catch (r) {
						p("overflow", "toNumber", this.toString())
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
					return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", i.a.errors.UNEXPECTED_ARGUMENT, {})), N(this).toString(10)
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
					if (r instanceof m) return r;
					if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new m(l, g(r)) : r.match(/^-?[0-9]+$/) ? new m(l, g(new u(r))) : c.throwArgumentError("invalid BigNumber string", "value", r);
					if ("number" == typeof r) return r % 1 && p("underflow", "BigNumber.from", r), (r >= h || r <= -h) && p("overflow", "BigNumber.from", r), m.from(String(r));
					const e = r;
					if ("bigint" == typeof e) return m.from(e.toString());
					if (Object(s.j)(e)) return m.from(Object(s.i)(e));
					if (e)
						if (e.toHexString) {
							const r = e.toHexString();
							if ("string" == typeof r) return m.from(r)
						} else {
							let r = e._hex;
							if (null == r && "BigNumber" === e.type && (r = e.hex), "string" == typeof r && (Object(s.l)(r) || "-" === r[0] && Object(s.l)(r.substring(1)))) return m.from(r)
						} return c.throwArgumentError("invalid BigNumber value", "value", r)
				}
				static isBigNumber(r) {
					return !(!r || !r._isBigNumber)
				}
			}

			function g(r) {
				if ("string" != typeof r) return g(r.toString(16));
				if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && c.throwArgumentError("invalid hex", "value", r), "0x00" === (r = g(r)) ? r : "-" + r;
				if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
				for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
				return r
			}

			function E(r) {
				return m.from(g(r))
			}

			function N(r) {
				const e = m.from(r).toHexString();
				return "-" === e[0] ? new u("-" + e.substring(3), 16) : new u(e.substring(2), 16)
			}

			function p(r, e, t) {
				const n = {
					fault: r,
					operation: e
				};
				return null != t && (n.value = t), c.throwError(r, i.a.errors.NUMERIC_FAULT, n)
			}

			function b(r) {
				return new u(r, 36).toString(16)
			}

			function _(r) {
				return new u(r, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "k", (function() {
				return i
			})), t.d(e, "j", (function() {
				return a
			})), t.d(e, "a", (function() {
				return u
			})), t.d(e, "b", (function() {
				return c
			})), t.d(e, "o", (function() {
				return l
			})), t.d(e, "p", (function() {
				return h
			})), t.d(e, "l", (function() {
				return d
			})), t.d(e, "i", (function() {
				return m
			})), t.d(e, "d", (function() {
				return g
			})), t.d(e, "e", (function() {
				return E
			})), t.d(e, "c", (function() {
				return N
			})), t.d(e, "g", (function() {
				return p
			})), t.d(e, "f", (function() {
				return b
			})), t.d(e, "h", (function() {
				return _
			})), t.d(e, "n", (function() {
				return R
			})), t.d(e, "m", (function() {
				return v
			}));
			const n = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function o(r) {
				return !!r.toHexString
			}

			function s(r) {
				return r.slice ? r : (r.slice = function() {
					const e = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(r, e)))
				}, r)
			}

			function i(r) {
				return d(r) && !(r.length % 2) || a(r)
			}

			function a(r) {
				if (null == r) return !1;
				if (r.constructor === Uint8Array) return !0;
				if ("string" == typeof r) return !1;
				if (null == r.length) return !1;
				for (let e = 0; e < r.length; e++) {
					const t = r[e];
					if ("number" != typeof t || t < 0 || t >= 256 || t % 1) return !1
				}
				return !0
			}

			function u(r, e) {
				if (e || (e = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid arrayify value");
					const e = [];
					for (; r;) e.unshift(255 & r), r = parseInt(String(r / 256));
					return 0 === e.length && e.push(0), s(new Uint8Array(e))
				}
				if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r) && (r = r.toHexString()), d(r)) {
					let t = r.substring(2);
					t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", r));
					const o = [];
					for (let r = 0; r < t.length; r += 2) o.push(parseInt(t.substring(r, r + 2), 16));
					return s(new Uint8Array(o))
				}
				return a(r) ? s(new Uint8Array(r)) : n.throwArgumentError("invalid arrayify value", "value", r)
			}

			function c(r) {
				const e = r.map(r => u(r)),
					t = e.reduce((r, e) => r + e.length, 0),
					n = new Uint8Array(t);
				return e.reduce((r, e) => (n.set(e, r), r + e.length), 0), s(n)
			}

			function l(r) {
				let e = u(r);
				if (0 === e.length) return e;
				let t = 0;
				for (; t < e.length && 0 === e[t];) t++;
				return t && (e = e.slice(t)), e
			}

			function h(r, e) {
				(r = u(r)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
				const t = new Uint8Array(e);
				return t.set(r, e - r.length), s(t)
			}

			function d(r, e) {
				return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
			}
			const f = "0123456789abcdef";

			function m(r, e) {
				if (e || (e = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid hexlify value");
					let e = "";
					for (; r;) e = f[15 & r] + e, r = Math.floor(r / 16);
					return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
				}
				if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
				if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r)) return r.toHexString();
				if (d(r)) return r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
				if (a(r)) {
					let e = "0x";
					for (let t = 0; t < r.length; t++) {
						let n = r[t];
						e += f[(240 & n) >> 4] + f[15 & n]
					}
					return e
				}
				return n.throwArgumentError("invalid hexlify value", "value", r)
			}

			function g(r) {
				if ("string" != typeof r) r = m(r);
				else if (!d(r) || r.length % 2) return null;
				return (r.length - 2) / 2
			}

			function E(r, e, t) {
				return "string" != typeof r ? r = m(r) : (!d(r) || r.length % 2) && n.throwArgumentError("invalid hexData", "value", r), e = 2 + 2 * e, null != t ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
			}

			function N(r) {
				let e = "0x";
				return r.forEach(r => {
					e += m(r).substring(2)
				}), e
			}

			function p(r) {
				const e = b(m(r, {
					hexPad: "left"
				}));
				return "0x" === e ? "0x0" : e
			}

			function b(r) {
				"string" != typeof r && (r = m(r)), d(r) || n.throwArgumentError("invalid hex string", "value", r), r = r.substring(2);
				let e = 0;
				for (; e < r.length && "0" === r[e];) e++;
				return "0x" + r.substring(e)
			}

			function _(r, e) {
				for ("string" != typeof r ? r = m(r) : d(r) || n.throwArgumentError("invalid hex string", "value", r), r.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * e + 2;) r = "0x0" + r.substring(2);
				return r
			}

			function R(r) {
				const e = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (i(r)) {
					const t = u(r);
					65 !== t.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", r), e.r = m(t.slice(0, 32)), e.s = m(t.slice(32, 64)), e.v = t[64], e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", r)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = m(t.slice(32, 64))
				} else {
					if (e.r = r.r, e.s = r.s, e.v = r.v, e.recoveryParam = r.recoveryParam, e._vs = r._vs, null != e._vs) {
						const t = h(u(e._vs), 32);
						e._vs = m(t);
						const o = t[0] >= 128 ? 1 : 0;
						null == e.recoveryParam ? e.recoveryParam = o : e.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), t[0] &= 127;
						const s = m(t);
						null == e.s ? e.s = s : e.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", r)
					}
					null == e.recoveryParam ? null == e.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", r) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2 : null == e.v ? e.v = 27 + e.recoveryParam : e.recoveryParam !== 1 - e.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", r), null != e.r && d(e.r) ? e.r = _(e.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", r), null != e.s && d(e.s) ? e.s = _(e.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", r);
					const t = u(e.s);
					t[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", r), e.recoveryParam && (t[0] |= 128);
					const o = m(t);
					e._vs && (d(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", r), e._vs = _(e._vs, 32)), null == e._vs ? e._vs = o : e._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", r)
				}
				return e
			}

			function v(r) {
				return m(c([(r = R(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return i
			}));
			var n = t("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = t.n(n),
				s = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function i(r) {
				return "0x" + o.a.keccak_256(Object(s.a)(r))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(r, e, t) {
			(function(e, t) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof e && e.versions && e.versions.node && (n = t);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof r && r.exports, s = "0123456789abcdef".split(""), i = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], u = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function(r, e, t) {
							return function(n) {
								return new R(r, e, r).update(n)[t]()
							}
						}, h = function(r, e, t) {
							return function(n, o) {
								return new R(r, e, o).update(n)[t]()
							}
						}, d = function(r, e) {
							var t = l(r, e, "hex");
							t.create = function() {
								return new R(r, e, r)
							}, t.update = function(r) {
								return t.create().update(r)
							};
							for (var n = 0; n < c.length; ++n) {
								var o = c[n];
								t[o] = l(r, e, o)
							}
							return t
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: u,
							createMethod: d
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: u,
							createMethod: d
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(r, e) {
								var t = h(r, e, "hex");
								t.create = function(t) {
									return new R(r, e, t)
								}, t.update = function(r, e) {
									return t.create(e).update(r)
								};
								for (var n = 0; n < c.length; ++n) {
									var o = c[n];
									t[o] = h(r, e, o)
								}
								return t
							}
						}], m = {}, g = [], E = 0; E < f.length; ++E)
						for (var N = f[E], p = N.bits, b = 0; b < p.length; ++b) {
							var _ = N.name + "_" + p[b];
							g.push(_), m[_] = N.createMethod(p[b], N.padding)
						}

					function R(r, e, t) {
						this.blocks = [], this.s = [], this.padding = e, this.outputBits = t, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (r << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = t >> 5, this.extraBytes = (31 & t) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					R.prototype.update = function(r) {
						var e = "string" != typeof r;
						e && r.constructor === ArrayBuffer && (r = new Uint8Array(r));
						for (var t, n, o = r.length, s = this.blocks, a = this.byteCount, u = this.blockCount, c = 0, l = this.s; c < o;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, t = 1; t < u + 1; ++t) s[t] = 0;
							if (e)
								for (t = this.start; c < o && t < a; ++c) s[t >> 2] |= r[c] << i[3 & t++];
							else
								for (t = this.start; c < o && t < a; ++c)(n = r.charCodeAt(c)) < 128 ? s[t >> 2] |= n << i[3 & t++] : n < 2048 ? (s[t >> 2] |= (192 | n >> 6) << i[3 & t++], s[t >> 2] |= (128 | 63 & n) << i[3 & t++]) : n < 55296 || n >= 57344 ? (s[t >> 2] |= (224 | n >> 12) << i[3 & t++], s[t >> 2] |= (128 | n >> 6 & 63) << i[3 & t++], s[t >> 2] |= (128 | 63 & n) << i[3 & t++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(++c)), s[t >> 2] |= (240 | n >> 18) << i[3 & t++], s[t >> 2] |= (128 | n >> 12 & 63) << i[3 & t++], s[t >> 2] |= (128 | n >> 6 & 63) << i[3 & t++], s[t >> 2] |= (128 | 63 & n) << i[3 & t++]);
							if (this.lastByteIndex = t, t >= a) {
								for (this.start = t - a, this.block = s[u], t = 0; t < u; ++t) l[t] ^= s[t];
								v(l), this.reset = !0
							} else this.start = t
						}
						return this
					}, R.prototype.finalize = function() {
						var r = this.blocks,
							e = this.lastByteIndex,
							t = this.blockCount,
							n = this.s;
						if (r[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
							for (r[0] = r[t], e = 1; e < t + 1; ++e) r[e] = 0;
						for (r[t - 1] |= 2147483648, e = 0; e < t; ++e) n[e] ^= r[e];
						v(n)
					}, R.prototype.toString = R.prototype.hex = function() {
						this.finalize();
						for (var r, e = this.blockCount, t = this.s, n = this.outputBlocks, o = this.extraBytes, i = 0, a = 0, u = ""; a < n;) {
							for (i = 0; i < e && a < n; ++i, ++a) r = t[i], u += s[r >> 4 & 15] + s[15 & r] + s[r >> 12 & 15] + s[r >> 8 & 15] + s[r >> 20 & 15] + s[r >> 16 & 15] + s[r >> 28 & 15] + s[r >> 24 & 15];
							a % e == 0 && (v(t), i = 0)
						}
						return o && (r = t[i], o > 0 && (u += s[r >> 4 & 15] + s[15 & r]), o > 1 && (u += s[r >> 12 & 15] + s[r >> 8 & 15]), o > 2 && (u += s[r >> 20 & 15] + s[r >> 16 & 15])), u
					}, R.prototype.arrayBuffer = function() {
						this.finalize();
						var r, e = this.blockCount,
							t = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							s = 0,
							i = 0,
							a = this.outputBits >> 3;
						r = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
						for (var u = new Uint32Array(r); i < n;) {
							for (s = 0; s < e && i < n; ++s, ++i) u[i] = t[s];
							i % e == 0 && v(t)
						}
						return o && (u[s] = t[s], r = r.slice(0, a)), r
					}, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.digest = R.prototype.array = function() {
						this.finalize();
						for (var r, e, t = this.blockCount, n = this.s, o = this.outputBlocks, s = this.extraBytes, i = 0, a = 0, u = []; a < o;) {
							for (i = 0; i < t && a < o; ++i, ++a) r = a << 2, e = n[i], u[r] = 255 & e, u[r + 1] = e >> 8 & 255, u[r + 2] = e >> 16 & 255, u[r + 3] = e >> 24 & 255;
							a % t == 0 && v(n)
						}
						return s && (r = a << 2, e = n[i], s > 0 && (u[r] = 255 & e), s > 1 && (u[r + 1] = e >> 8 & 255), s > 2 && (u[r + 2] = e >> 16 & 255)), u
					};
					var v = function(r) {
						var e, t, n, o, s, i, u, c, l, h, d, f, m, g, E, N, p, b, _, R, v, w, O, y, A, I, U, P, T, S, C, j, x, F, D, L, M, k, G, B, W, V, z, X, K, H, $, J, Z, q, Q, Y, rr, er, tr, nr, or, sr, ir, ar, ur, cr, lr;
						for (n = 0; n < 48; n += 2) o = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40], s = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41], i = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42], u = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43], c = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44], l = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45], h = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46], d = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47], e = (f = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48]) ^ (i << 1 | u >>> 31), t = (m = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49]) ^ (u << 1 | i >>> 31), r[0] ^= e, r[1] ^= t, r[10] ^= e, r[11] ^= t, r[20] ^= e, r[21] ^= t, r[30] ^= e, r[31] ^= t, r[40] ^= e, r[41] ^= t, e = o ^ (c << 1 | l >>> 31), t = s ^ (l << 1 | c >>> 31), r[2] ^= e, r[3] ^= t, r[12] ^= e, r[13] ^= t, r[22] ^= e, r[23] ^= t, r[32] ^= e, r[33] ^= t, r[42] ^= e, r[43] ^= t, e = i ^ (h << 1 | d >>> 31), t = u ^ (d << 1 | h >>> 31), r[4] ^= e, r[5] ^= t, r[14] ^= e, r[15] ^= t, r[24] ^= e, r[25] ^= t, r[34] ^= e, r[35] ^= t, r[44] ^= e, r[45] ^= t, e = c ^ (f << 1 | m >>> 31), t = l ^ (m << 1 | f >>> 31), r[6] ^= e, r[7] ^= t, r[16] ^= e, r[17] ^= t, r[26] ^= e, r[27] ^= t, r[36] ^= e, r[37] ^= t, r[46] ^= e, r[47] ^= t, e = h ^ (o << 1 | s >>> 31), t = d ^ (s << 1 | o >>> 31), r[8] ^= e, r[9] ^= t, r[18] ^= e, r[19] ^= t, r[28] ^= e, r[29] ^= t, r[38] ^= e, r[39] ^= t, r[48] ^= e, r[49] ^= t, g = r[0], E = r[1], H = r[11] << 4 | r[10] >>> 28, $ = r[10] << 4 | r[11] >>> 28, P = r[20] << 3 | r[21] >>> 29, T = r[21] << 3 | r[20] >>> 29, ar = r[31] << 9 | r[30] >>> 23, ur = r[30] << 9 | r[31] >>> 23, V = r[40] << 18 | r[41] >>> 14, z = r[41] << 18 | r[40] >>> 14, F = r[2] << 1 | r[3] >>> 31, D = r[3] << 1 | r[2] >>> 31, N = r[13] << 12 | r[12] >>> 20, p = r[12] << 12 | r[13] >>> 20, J = r[22] << 10 | r[23] >>> 22, Z = r[23] << 10 | r[22] >>> 22, S = r[33] << 13 | r[32] >>> 19, C = r[32] << 13 | r[33] >>> 19, cr = r[42] << 2 | r[43] >>> 30, lr = r[43] << 2 | r[42] >>> 30, er = r[5] << 30 | r[4] >>> 2, tr = r[4] << 30 | r[5] >>> 2, L = r[14] << 6 | r[15] >>> 26, M = r[15] << 6 | r[14] >>> 26, b = r[25] << 11 | r[24] >>> 21, _ = r[24] << 11 | r[25] >>> 21, q = r[34] << 15 | r[35] >>> 17, Q = r[35] << 15 | r[34] >>> 17, j = r[45] << 29 | r[44] >>> 3, x = r[44] << 29 | r[45] >>> 3, y = r[6] << 28 | r[7] >>> 4, A = r[7] << 28 | r[6] >>> 4, nr = r[17] << 23 | r[16] >>> 9, or = r[16] << 23 | r[17] >>> 9, k = r[26] << 25 | r[27] >>> 7, G = r[27] << 25 | r[26] >>> 7, R = r[36] << 21 | r[37] >>> 11, v = r[37] << 21 | r[36] >>> 11, Y = r[47] << 24 | r[46] >>> 8, rr = r[46] << 24 | r[47] >>> 8, X = r[8] << 27 | r[9] >>> 5, K = r[9] << 27 | r[8] >>> 5, I = r[18] << 20 | r[19] >>> 12, U = r[19] << 20 | r[18] >>> 12, sr = r[29] << 7 | r[28] >>> 25, ir = r[28] << 7 | r[29] >>> 25, B = r[38] << 8 | r[39] >>> 24, W = r[39] << 8 | r[38] >>> 24, w = r[48] << 14 | r[49] >>> 18, O = r[49] << 14 | r[48] >>> 18, r[0] = g ^ ~N & b, r[1] = E ^ ~p & _, r[10] = y ^ ~I & P, r[11] = A ^ ~U & T, r[20] = F ^ ~L & k, r[21] = D ^ ~M & G, r[30] = X ^ ~H & J, r[31] = K ^ ~$ & Z, r[40] = er ^ ~nr & sr, r[41] = tr ^ ~or & ir, r[2] = N ^ ~b & R, r[3] = p ^ ~_ & v, r[12] = I ^ ~P & S, r[13] = U ^ ~T & C, r[22] = L ^ ~k & B, r[23] = M ^ ~G & W, r[32] = H ^ ~J & q, r[33] = $ ^ ~Z & Q, r[42] = nr ^ ~sr & ar, r[43] = or ^ ~ir & ur, r[4] = b ^ ~R & w, r[5] = _ ^ ~v & O, r[14] = P ^ ~S & j, r[15] = T ^ ~C & x, r[24] = k ^ ~B & V, r[25] = G ^ ~W & z, r[34] = J ^ ~q & Y, r[35] = Z ^ ~Q & rr, r[44] = sr ^ ~ar & cr, r[45] = ir ^ ~ur & lr, r[6] = R ^ ~w & g, r[7] = v ^ ~O & E, r[16] = S ^ ~j & y, r[17] = C ^ ~x & A, r[26] = B ^ ~V & F, r[27] = W ^ ~z & D, r[36] = q ^ ~Y & X, r[37] = Q ^ ~rr & K, r[46] = ar ^ ~cr & er, r[47] = ur ^ ~lr & tr, r[8] = w ^ ~g & N, r[9] = O ^ ~E & p, r[18] = j ^ ~y & I, r[19] = x ^ ~A & U, r[28] = V ^ ~F & L, r[29] = z ^ ~D & M, r[38] = Y ^ ~X & H, r[39] = rr ^ ~K & $, r[48] = cr ^ ~er & nr, r[49] = lr ^ ~tr & or, r[0] ^= a[n], r[1] ^= a[n + 1]
					};
					if (o) r.exports = m;
					else
						for (E = 0; E < g.length; ++E) n[g[E]] = m[g[E]]
				}()
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return d
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
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (t) {
								r.push(e)
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
			class d {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == i[t] && this.throwArgumentError("invalid log level name", "logLevel", r), a > i[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(d.levels.DEBUG, r)
				}
				info(...r) {
					this._log(d.levels.INFO, r)
				}
				warn(...r) {
					this._log(d.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (s) return this.makeError("censored error", e, {});
					e || (e = d.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(r => {
						try {
							n.push(r + "=" + JSON.stringify(t[r]))
						} catch (i) {
							n.push(r + "=" + JSON.stringify(t[r].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const i = new Error(r);
					return i.reason = o, i.code = e, Object.keys(t).forEach((function(r) {
						i[r] = t[r]
					})), i
				}
				throwError(r, e, t) {
					throw this.makeError(r, e, t)
				}
				throwArgumentError(r, e, t) {
					return this.throwError(r, d.errors.INVALID_ARGUMENT, {
						argument: e,
						value: t
					})
				}
				assert(r, e, t, n) {
					r || this.throwError(e, t, n)
				}
				assertArgument(r, e, t, n) {
					r || this.throwArgumentError(e, t, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", d.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, d.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, d.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, d.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, d.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", d.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return u || (u = new d(n)), u
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", d.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", d.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!r, o = !!e
				}
				static setLogLevel(r) {
					const e = i[r.toLowerCase()];
					null != e ? a = e : d.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new d(r)
				}
			}
			d.errors = h, d.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.r(e), t.d(e, "encode", (function() {
				return u
			})), t.d(e, "decode", (function() {
				return h
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const s = new o.a("rlp/5.4.0");

			function i(r) {
				const e = [];
				for (; r;) e.unshift(255 & r), r >>= 8;
				return e
			}

			function a(r, e, t) {
				let n = 0;
				for (let o = 0; o < t; o++) n = 256 * n + r[e + o];
				return n
			}

			function u(r) {
				return Object(n.i)(function r(e) {
					if (Array.isArray(e)) {
						let t = [];
						if (e.forEach((function(e) {
								t = t.concat(r(e))
							})), t.length <= 55) return t.unshift(192 + t.length), t;
						const n = i(t.length);
						return n.unshift(247 + n.length), n.concat(t)
					}
					Object(n.k)(e) || s.throwArgumentError("RLP object must be BytesLike", "object", e);
					const t = Array.prototype.slice.call(Object(n.a)(e));
					if (1 === t.length && t[0] <= 127) return t;
					if (t.length <= 55) return t.unshift(128 + t.length), t;
					const o = i(t.length);
					return o.unshift(183 + o.length), o.concat(t)
				}(r))
			}

			function c(r, e, t, n) {
				const i = [];
				for (; t < e + 1 + n;) {
					const a = l(r, t);
					i.push(a.result), (t += a.consumed) > e + 1 + n && s.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: i
				}
			}

			function l(r, e) {
				if (0 === r.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), r[e] >= 248) {
					const t = r[e] - 247;
					e + 1 + t > r.length && s.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
					const n = a(r, e + 1, t);
					return e + 1 + t + n > r.length && s.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), c(r, e, e + 1 + t, t + n)
				}
				if (r[e] >= 192) {
					const t = r[e] - 192;
					return e + 1 + t > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), c(r, e, e + 1, t)
				}
				if (r[e] >= 184) {
					const t = r[e] - 183;
					e + 1 + t > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
					const i = a(r, e + 1, t);
					return e + 1 + t + i > r.length && s.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t + i,
						result: Object(n.i)(r.slice(e + 1 + t, e + 1 + t + i))
					}
				}
				if (r[e] >= 128) {
					const t = r[e] - 128;
					return e + 1 + t > r.length && s.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t,
						result: Object(n.i)(r.slice(e + 1, e + 1 + t))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(r[e])
				}
			}

			function h(r) {
				const e = Object(n.a)(r),
					t = l(e, 0);
				return t.consumed !== e.length && s.throwArgumentError("invalid rlp data", "data", r), t.result
			}
		},
		"./node_modules/ethers/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.r(e), t.d(e, "ethers", (function() {
				return o
			})), t.d(e, "Signer", (function() {
				return G
			})), t.d(e, "Wallet", (function() {
				return W.a
			})), t.d(e, "VoidSigner", (function() {
				return B
			})), t.d(e, "getDefaultProvider", (function() {
				return z.getDefaultProvider
			})), t.d(e, "providers", (function() {
				return z
			})), t.d(e, "BaseContract", (function() {
				return s.a
			})), t.d(e, "Contract", (function() {
				return s.b
			})), t.d(e, "ContractFactory", (function() {
				return s.c
			})), t.d(e, "BigNumber", (function() {
				return i.a
			})), t.d(e, "FixedNumber", (function() {
				return _
			})), t.d(e, "constants", (function() {
				return V
			})), t.d(e, "errors", (function() {
				return gr
			})), t.d(e, "logger", (function() {
				return Qr
			})), t.d(e, "utils", (function() {
				return n
			})), t.d(e, "wordlists", (function() {
				return X.a
			})), t.d(e, "version", (function() {
				return qr
			})), t.d(e, "Wordlist", (function() {
				return K.a
			}));
			var n = {};
			t.r(n), t.d(n, "AbiCoder", (function() {
				return H.a
			})), t.d(n, "defaultAbiCoder", (function() {
				return H.b
			})), t.d(n, "Fragment", (function() {
				return $.e
			})), t.d(n, "ConstructorFragment", (function() {
				return $.a
			})), t.d(n, "ErrorFragment", (function() {
				return $.b
			})), t.d(n, "EventFragment", (function() {
				return $.c
			})), t.d(n, "FunctionFragment", (function() {
				return $.f
			})), t.d(n, "ParamType", (function() {
				return $.g
			})), t.d(n, "FormatTypes", (function() {
				return $.d
			})), t.d(n, "checkResultErrors", (function() {
				return J.d
			})), t.d(n, "Logger", (function() {
				return Nr
			})), t.d(n, "RLP", (function() {
				return Wr
			})), t.d(n, "_fetchData", (function() {
				return Jr.a
			})), t.d(n, "fetchJson", (function() {
				return Jr.b
			})), t.d(n, "poll", (function() {
				return Jr.c
			})), t.d(n, "checkProperties", (function() {
				return Lr
			})), t.d(n, "deepCopy", (function() {
				return Br
			})), t.d(n, "defineReadOnly", (function() {
				return xr
			})), t.d(n, "getStatic", (function() {
				return Fr
			})), t.d(n, "resolveProperties", (function() {
				return Dr
			})), t.d(n, "shallowCopy", (function() {
				return Mr
			})), t.d(n, "arrayify", (function() {
				return a.a
			})), t.d(n, "concat", (function() {
				return a.b
			})), t.d(n, "stripZeros", (function() {
				return a.o
			})), t.d(n, "zeroPad", (function() {
				return a.p
			})), t.d(n, "isBytes", (function() {
				return a.j
			})), t.d(n, "isBytesLike", (function() {
				return a.k
			})), t.d(n, "defaultPath", (function() {
				return or.b
			})), t.d(n, "HDNode", (function() {
				return or.a
			})), t.d(n, "SigningKey", (function() {
				return Vr.a
			})), t.d(n, "Interface", (function() {
				return Z.b
			})), t.d(n, "LogDescription", (function() {
				return Z.c
			})), t.d(n, "TransactionDescription", (function() {
				return Z.d
			})), t.d(n, "base58", (function() {
				return Y.a
			})), t.d(n, "base64", (function() {
				return Q
			})), t.d(n, "hexlify", (function() {
				return a.i
			})), t.d(n, "isHexString", (function() {
				return a.l
			})), t.d(n, "hexConcat", (function() {
				return a.c
			})), t.d(n, "hexStripZeros", (function() {
				return a.f
			})), t.d(n, "hexValue", (function() {
				return a.g
			})), t.d(n, "hexZeroPad", (function() {
				return a.h
			})), t.d(n, "hexDataLength", (function() {
				return a.d
			})), t.d(n, "hexDataSlice", (function() {
				return a.e
			})), t.d(n, "nameprep", (function() {
				return zr.a
			})), t.d(n, "_toEscapedUtf8String", (function() {
				return Xr.d
			})), t.d(n, "toUtf8Bytes", (function() {
				return Xr.f
			})), t.d(n, "toUtf8CodePoints", (function() {
				return Xr.g
			})), t.d(n, "toUtf8String", (function() {
				return Xr.h
			})), t.d(n, "Utf8ErrorFuncs", (function() {
				return Xr.b
			})), t.d(n, "formatBytes32String", (function() {
				return Kr.a
			})), t.d(n, "parseBytes32String", (function() {
				return Kr.b
			})), t.d(n, "hashMessage", (function() {
				return rr.a
			})), t.d(n, "namehash", (function() {
				return er.b
			})), t.d(n, "isValidName", (function() {
				return er.a
			})), t.d(n, "id", (function() {
				return tr.a
			})), t.d(n, "_TypedDataEncoder", (function() {
				return nr.a
			})), t.d(n, "getAddress", (function() {
				return q.a
			})), t.d(n, "getIcapAddress", (function() {
				return q.d
			})), t.d(n, "getContractAddress", (function() {
				return q.b
			})), t.d(n, "getCreate2Address", (function() {
				return q.c
			})), t.d(n, "isAddress", (function() {
				return q.e
			})), t.d(n, "formatEther", (function() {
				return $r.b
			})), t.d(n, "parseEther", (function() {
				return $r.d
			})), t.d(n, "formatUnits", (function() {
				return $r.c
			})), t.d(n, "parseUnits", (function() {
				return $r.e
			})), t.d(n, "commify", (function() {
				return $r.a
			})), t.d(n, "computeHmac", (function() {
				return pr.a
			})), t.d(n, "keccak256", (function() {
				return ir.a
			})), t.d(n, "ripemd160", (function() {
				return pr.b
			})), t.d(n, "sha256", (function() {
				return pr.c
			})), t.d(n, "sha512", (function() {
				return pr.d
			})), t.d(n, "randomBytes", (function() {
				return _r.a
			})), t.d(n, "shuffled", (function() {
				return Rr.a
			})), t.d(n, "solidityPack", (function() {
				return br.b
			})), t.d(n, "solidityKeccak256", (function() {
				return br.a
			})), t.d(n, "soliditySha256", (function() {
				return br.c
			})), t.d(n, "splitSignature", (function() {
				return a.n
			})), t.d(n, "joinSignature", (function() {
				return a.m
			})), t.d(n, "accessListify", (function() {
				return Hr.b
			})), t.d(n, "parseTransaction", (function() {
				return Hr.d
			})), t.d(n, "serializeTransaction", (function() {
				return Hr.f
			})), t.d(n, "TransactionTypes", (function() {
				return Hr.a
			})), t.d(n, "getJsonWalletAddress", (function() {
				return sr.a
			})), t.d(n, "computeAddress", (function() {
				return Hr.c
			})), t.d(n, "recoverAddress", (function() {
				return Hr.e
			})), t.d(n, "computePublicKey", (function() {
				return Vr.b
			})), t.d(n, "recoverPublicKey", (function() {
				return Vr.c
			})), t.d(n, "verifyMessage", (function() {
				return W.b
			})), t.d(n, "verifyTypedData", (function() {
				return W.c
			})), t.d(n, "getAccountPath", (function() {
				return or.d
			})), t.d(n, "mnemonicToEntropy", (function() {
				return or.f
			})), t.d(n, "entropyToMnemonic", (function() {
				return or.c
			})), t.d(n, "isValidMnemonic", (function() {
				return or.e
			})), t.d(n, "mnemonicToSeed", (function() {
				return or.g
			})), t.d(n, "SupportedAlgorithm", (function() {
				return Zr.a
			})), t.d(n, "UnicodeNormalizationForm", (function() {
				return Xr.a
			})), t.d(n, "Utf8ErrorReason", (function() {
				return Xr.c
			})), t.d(n, "Indexed", (function() {
				return Z.a
			}));
			var o = {};
			t.r(o), t.d(o, "Signer", (function() {
				return G
			})), t.d(o, "Wallet", (function() {
				return W.a
			})), t.d(o, "VoidSigner", (function() {
				return B
			})), t.d(o, "getDefaultProvider", (function() {
				return z.getDefaultProvider
			})), t.d(o, "providers", (function() {
				return z
			})), t.d(o, "BaseContract", (function() {
				return s.a
			})), t.d(o, "Contract", (function() {
				return s.b
			})), t.d(o, "ContractFactory", (function() {
				return s.c
			})), t.d(o, "BigNumber", (function() {
				return i.a
			})), t.d(o, "FixedNumber", (function() {
				return _
			})), t.d(o, "constants", (function() {
				return V
			})), t.d(o, "errors", (function() {
				return gr
			})), t.d(o, "logger", (function() {
				return Qr
			})), t.d(o, "utils", (function() {
				return n
			})), t.d(o, "wordlists", (function() {
				return X.a
			})), t.d(o, "version", (function() {
				return qr
			})), t.d(o, "Wordlist", (function() {
				return K.a
			}));
			var s = t("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				i = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				a = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				u = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				c = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js");
			const l = new u.a(c.a),
				h = {},
				d = i.a.from(0),
				f = i.a.from(-1);

			function m(r, e, t, n) {
				const o = {
					fault: e,
					operation: t
				};
				return void 0 !== n && (o.value = n), l.throwError(r, u.a.errors.NUMERIC_FAULT, o)
			}
			let g = "0";
			for (; g.length < 256;) g += g;

			function E(r) {
				if ("number" != typeof r) try {
					r = i.a.from(r).toNumber()
				} catch (e) {}
				return "number" == typeof r && r >= 0 && r <= 256 && !(r % 1) ? "1" + g.substring(0, r) : l.throwArgumentError("invalid decimal size", "decimals", r)
			}

			function N(r, e) {
				null == e && (e = 0);
				const t = E(e),
					n = (r = i.a.from(r)).lt(d);
				n && (r = r.mul(f));
				let o = r.mod(t).toString();
				for (; o.length < t.length - 1;) o = "0" + o;
				o = o.match(/^([0-9]*[1-9]|0)(0*)/)[1];
				const s = r.div(t).toString();
				return r = 1 === t.length ? s : s + "." + o, n && (r = "-" + r), r
			}

			function p(r, e) {
				null == e && (e = 0);
				const t = E(e);
				"string" == typeof r && r.match(/^-?[0-9.,]+$/) || l.throwArgumentError("invalid decimal value", "value", r);
				const n = "-" === r.substring(0, 1);
				n && (r = r.substring(1)), "." === r && l.throwArgumentError("missing value", "value", r);
				const o = r.split(".");
				o.length > 2 && l.throwArgumentError("too many decimal points", "value", r);
				let s = o[0],
					a = o[1];
				for (s || (s = "0"), a || (a = "0");
					"0" === a[a.length - 1];) a = a.substring(0, a.length - 1);
				for (a.length > t.length - 1 && m("fractional component exceeds decimals", "underflow", "parseFixed"), "" === a && (a = "0"); a.length < t.length - 1;) a += "0";
				const u = i.a.from(s),
					c = i.a.from(a);
				let h = u.mul(t).add(c);
				return n && (h = h.mul(f)), h
			}
			class b {
				constructor(r, e, t, n) {
					r !== h && l.throwError("cannot use FixedFormat constructor; use FixedFormat.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.signed = e, this.width = t, this.decimals = n, this.name = (e ? "" : "u") + "fixed" + String(t) + "x" + String(n), this._multiplier = E(n), Object.freeze(this)
				}
				static from(r) {
					if (r instanceof b) return r;
					"number" == typeof r && (r = `fixed128x${r}`);
					let e = !0,
						t = 128,
						n = 18;
					if ("string" == typeof r)
						if ("fixed" === r);
						else if ("ufixed" === r) e = !1;
					else {
						const o = r.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
						o || l.throwArgumentError("invalid fixed format", "format", r), e = "u" !== o[1], t = parseInt(o[2]), n = parseInt(o[3])
					} else if (r) {
						const o = (e, t, n) => null == r[e] ? n : (typeof r[e] !== t && l.throwArgumentError("invalid fixed format (" + e + " not " + t + ")", "format." + e, r[e]), r[e]);
						e = o("signed", "boolean", e), t = o("width", "number", t), n = o("decimals", "number", n)
					}
					return t % 8 && l.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", t), n > 80 && l.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new b(h, e, t, n)
				}
			}
			class _ {
				constructor(r, e, t, n) {
					l.checkNew(new.target, _), r !== h && l.throwError("cannot use FixedNumber constructor; use FixedNumber.from", u.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new FixedFormat"
					}), this.format = n, this._hex = e, this._value = t, this._isFixedNumber = !0, Object.freeze(this)
				}
				_checkFormat(r) {
					this.format.name !== r.format.name && l.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", r)
				}
				addUnsafe(r) {
					this._checkFormat(r);
					const e = p(this._value, this.format.decimals),
						t = p(r._value, r.format.decimals);
					return _.fromValue(e.add(t), this.format.decimals, this.format)
				}
				subUnsafe(r) {
					this._checkFormat(r);
					const e = p(this._value, this.format.decimals),
						t = p(r._value, r.format.decimals);
					return _.fromValue(e.sub(t), this.format.decimals, this.format)
				}
				mulUnsafe(r) {
					this._checkFormat(r);
					const e = p(this._value, this.format.decimals),
						t = p(r._value, r.format.decimals);
					return _.fromValue(e.mul(t).div(this.format._multiplier), this.format.decimals, this.format)
				}
				divUnsafe(r) {
					this._checkFormat(r);
					const e = p(this._value, this.format.decimals),
						t = p(r._value, r.format.decimals);
					return _.fromValue(e.mul(this.format._multiplier).div(t), this.format.decimals, this.format)
				}
				floor() {
					const r = this.toString().split(".");
					1 === r.length && r.push("0");
					let e = _.from(r[0], this.format);
					const t = !r[1].match(/^(0*)$/);
					return this.isNegative() && t && (e = e.subUnsafe(R.toFormat(e.format))), e
				}
				ceiling() {
					const r = this.toString().split(".");
					1 === r.length && r.push("0");
					let e = _.from(r[0], this.format);
					const t = !r[1].match(/^(0*)$/);
					return !this.isNegative() && t && (e = e.addUnsafe(R.toFormat(e.format))), e
				}
				round(r) {
					null == r && (r = 0);
					const e = this.toString().split(".");
					if (1 === e.length && e.push("0"), (r < 0 || r > 80 || r % 1) && l.throwArgumentError("invalid decimal count", "decimals", r), e[1].length <= r) return this;
					const t = _.from("1" + g.substring(0, r), this.format),
						n = v.toFormat(this.format);
					return this.mulUnsafe(t).addUnsafe(n).floor().divUnsafe(t)
				}
				isZero() {
					return "0.0" === this._value || "0" === this._value
				}
				isNegative() {
					return "-" === this._value[0]
				}
				toString() {
					return this._value
				}
				toHexString(r) {
					if (null == r) return this._hex;
					r % 8 && l.throwArgumentError("invalid byte width", "width", r);
					const e = i.a.from(this._hex).fromTwos(this.format.width).toTwos(r).toHexString();
					return Object(a.h)(e, r / 8)
				}
				toUnsafeFloat() {
					return parseFloat(this.toString())
				}
				toFormat(r) {
					return _.fromString(this._value, r)
				}
				static fromValue(r, e, t) {
					return null != t || null == e || Object(i.b)(e) || (t = e, e = null), null == e && (e = 0), null == t && (t = "fixed"), _.fromString(N(r, e), b.from(t))
				}
				static fromString(r, e) {
					null == e && (e = "fixed");
					const t = b.from(e),
						n = p(r, t.decimals);
					!t.signed && n.lt(d) && m("unsigned value cannot be negative", "overflow", "value", r);
					let o = null;
					t.signed ? o = n.toTwos(t.width).toHexString() : (o = n.toHexString(), o = Object(a.h)(o, t.width / 8));
					const s = N(n, t.decimals);
					return new _(h, o, s, t)
				}
				static fromBytes(r, e) {
					null == e && (e = "fixed");
					const t = b.from(e);
					if (Object(a.a)(r).length > t.width / 8) throw new Error("overflow");
					let n = i.a.from(r);
					t.signed && (n = n.fromTwos(t.width));
					const o = n.toTwos((t.signed ? 0 : 1) + t.width).toHexString(),
						s = N(n, t.decimals);
					return new _(h, o, s, t)
				}
				static from(r, e) {
					if ("string" == typeof r) return _.fromString(r, e);
					if (Object(a.j)(r)) return _.fromBytes(r, e);
					try {
						return _.fromValue(r, 0, e)
					} catch (t) {
						if (t.code !== u.a.errors.INVALID_ARGUMENT) throw t
					}
					return l.throwArgumentError("invalid FixedNumber value", "value", r)
				}
				static isFixedNumber(r) {
					return !(!r || !r._isFixedNumber)
				}
			}
			const R = _.from(1),
				v = _.from("0.5"),
				w = "logger/5.4.0";
			let O = !1,
				y = !1;
			const A = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let I = A.default,
				U = null;
			const P = function() {
				try {
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (t) {
								r.push(e)
							}
						}), r.length) throw new Error("missing " + r.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (r) {
					return r.message
				}
				return null
			}();
			var T, S;
			! function(r) {
				r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
			}(T || (T = {})),
			function(r) {
				r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(S || (S = {}));
			class C {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == A[t] && this.throwArgumentError("invalid log level name", "logLevel", r), I > A[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(C.levels.DEBUG, r)
				}
				info(...r) {
					this._log(C.levels.INFO, r)
				}
				warn(...r) {
					this._log(C.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (y) return this.makeError("censored error", e, {});
					e || (e = C.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(r => {
						try {
							n.push(r + "=" + JSON.stringify(t[r]))
						} catch (s) {
							n.push(r + "=" + JSON.stringify(t[r].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const s = new Error(r);
					return s.reason = o, s.code = e, Object.keys(t).forEach((function(r) {
						s[r] = t[r]
					})), s
				}
				throwError(r, e, t) {
					throw this.makeError(r, e, t)
				}
				throwArgumentError(r, e, t) {
					return this.throwError(r, C.errors.INVALID_ARGUMENT, {
						argument: e,
						value: t
					})
				}
				assert(r, e, t, n) {
					r || this.throwError(e, t, n)
				}
				assertArgument(r, e, t, n) {
					r || this.throwArgumentError(e, t, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), P && this.throwError("platform missing String.prototype.normalize", C.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: P
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, C.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, C.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, C.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, C.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", C.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", C.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", C.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return U || (U = new C(w)), U
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", C.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), O) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", C.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					y = !!r, O = !!e
				}
				static setLogLevel(r) {
					const e = A[r.toLowerCase()];
					null != e ? I = e : C.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new C(r)
				}
			}
			C.errors = S, C.levels = T;
			var j = function(r, e, t, n) {
				return new(t || (t = Promise))((function(o, s) {
					function i(r) {
						try {
							u(n.next(r))
						} catch (e) {
							s(e)
						}
					}

					function a(r) {
						try {
							u(n.throw(r))
						} catch (e) {
							s(e)
						}
					}

					function u(r) {
						var e;
						r.done ? o(r.value) : (e = r.value, e instanceof t ? e : new t((function(r) {
							r(e)
						}))).then(i, a)
					}
					u((n = n.apply(r, e || [])).next())
				}))
			};
			new C("properties/5.4.0");

			function x(r, e, t) {
				Object.defineProperty(r, e, {
					enumerable: !0,
					value: t,
					writable: !1
				})
			}

			function F(r) {
				return j(this, void 0, void 0, (function*() {
					const e = Object.keys(r).map(e => {
						const t = r[e];
						return Promise.resolve(t).then(r => ({
							key: e,
							value: r
						}))
					});
					return (yield Promise.all(e)).reduce((r, e) => (r[e.key] = e.value, r), {})
				}))
			}
			var D = function(r, e, t, n) {
				return new(t || (t = Promise))((function(o, s) {
					function i(r) {
						try {
							u(n.next(r))
						} catch (e) {
							s(e)
						}
					}

					function a(r) {
						try {
							u(n.throw(r))
						} catch (e) {
							s(e)
						}
					}

					function u(r) {
						var e;
						r.done ? o(r.value) : (e = r.value, e instanceof t ? e : new t((function(r) {
							r(e)
						}))).then(i, a)
					}
					u((n = n.apply(r, e || [])).next())
				}))
			};
			const L = new C("abstract-signer/5.4.1"),
				M = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
				k = [C.errors.INSUFFICIENT_FUNDS, C.errors.NONCE_EXPIRED, C.errors.REPLACEMENT_UNDERPRICED];
			class G {
				constructor() {
					L.checkAbstract(new.target, G), x(this, "_isSigner", !0)
				}
				getBalance(r) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), r)
					}))
				}
				getTransactionCount(r) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), r)
					}))
				}
				estimateGas(r) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("estimateGas");
						const e = yield F(this.checkTransaction(r));
						return yield this.provider.estimateGas(e)
					}))
				}
				call(r, e) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("call");
						const t = yield F(this.checkTransaction(r));
						return yield this.provider.call(t, e)
					}))
				}
				sendTransaction(r) {
					return D(this, void 0, void 0, (function*() {
						this._checkProvider("sendTransaction");
						const e = yield this.populateTransaction(r), t = yield this.signTransaction(e);
						return yield this.provider.sendTransaction(t)
					}))
				}
				getChainId() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
					}))
				}
				getGasPrice() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
					}))
				}
				getFeeData() {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
					}))
				}
				resolveName(r) {
					return D(this, void 0, void 0, (function*() {
						return this._checkProvider("resolveName"), yield this.provider.resolveName(r)
					}))
				}
				checkTransaction(r) {
					for (const t in r) - 1 === M.indexOf(t) && L.throwArgumentError("invalid transaction key: " + t, "transaction", r);
					const e = function(r) {
						const e = {};
						for (const t in r) e[t] = r[t];
						return e
					}(r);
					return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(e => (e[0].toLowerCase() !== e[1].toLowerCase() && L.throwArgumentError("from address mismatch", "transaction", r), e[0])), e
				}
				populateTransaction(r) {
					return D(this, void 0, void 0, (function*() {
						const e = yield F(this.checkTransaction(r));
						null != e.to && (e.to = Promise.resolve(e.to).then(r => D(this, void 0, void 0, (function*() {
							if (null == r) return null;
							const e = yield this.resolveName(r);
							return null == e && L.throwArgumentError("provided ENS name resolves to null", "tx.to", r), e
						}))), e.to.catch(r => {}));
						const t = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
						if (null == e.gasPrice || 2 !== e.type && !t ? 0 !== e.type && 1 !== e.type || !t || L.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", r) : L.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", r), 2 !== e.type && null != e.type || null == e.maxFeePerGas || null == e.maxPriorityFeePerGas)
							if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
							else {
								const r = yield this.getFeeData();
								if (null == e.type)
									if (null != r.maxFeePerGas && null != r.maxPriorityFeePerGas)
										if (e.type = 2, null != e.gasPrice) {
											const r = e.gasPrice;
											delete e.gasPrice, e.maxFeePerGas = r, e.maxPriorityFeePerGas = r
										} else null == e.maxFeePerGas && (e.maxFeePerGas = r.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = r.maxPriorityFeePerGas);
								else null != r.gasPrice ? (t && L.throwError("network does not support EIP-1559", C.errors.UNSUPPORTED_OPERATION, {
									operation: "populateTransaction"
								}), null == e.gasPrice && (e.gasPrice = r.gasPrice), e.type = 0) : L.throwError("failed to get consistent fee data", C.errors.UNSUPPORTED_OPERATION, {
									operation: "signer.getFeeData"
								});
								else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = r.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = r.maxPriorityFeePerGas))
							}
						else e.type = 2;
						return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch(r => {
							if (k.indexOf(r.code) >= 0) throw r;
							return L.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", C.errors.UNPREDICTABLE_GAS_LIMIT, {
								error: r,
								tx: e
							})
						})), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(e => (0 !== e[1] && e[0] !== e[1] && L.throwArgumentError("chainId address mismatch", "transaction", r), e[0])), yield F(e)
					}))
				}
				_checkProvider(r) {
					this.provider || L.throwError("missing provider", C.errors.UNSUPPORTED_OPERATION, {
						operation: r || "_checkProvider"
					})
				}
				static isSigner(r) {
					return !(!r || !r._isSigner)
				}
			}
			class B extends G {
				constructor(r, e) {
					L.checkNew(new.target, B), super(), x(this, "address", r), x(this, "provider", e || null)
				}
				getAddress() {
					return Promise.resolve(this.address)
				}
				_fail(r, e) {
					return Promise.resolve().then(() => {
						L.throwError(r, C.errors.UNSUPPORTED_OPERATION, {
							operation: e
						})
					})
				}
				signMessage(r) {
					return this._fail("VoidSigner cannot sign messages", "signMessage")
				}
				signTransaction(r) {
					return this._fail("VoidSigner cannot sign transactions", "signTransaction")
				}
				_signTypedData(r, e, t) {
					return this._fail("VoidSigner cannot sign typed data", "signTypedData")
				}
				connect(r) {
					return new B(this.address, r)
				}
			}
			var W = t("./node_modules/@ethersproject/wallet/lib.esm/index.js"),
				V = t("./node_modules/@ethersproject/constants/lib.esm/index.js"),
				z = t("./node_modules/@ethersproject/providers/lib.esm/index.js"),
				X = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlists.js"),
				K = t("./node_modules/@ethersproject/wordlists/lib.esm/wordlist.js"),
				H = t("./node_modules/@ethersproject/abi/lib.esm/abi-coder.js"),
				$ = t("./node_modules/@ethersproject/abi/lib.esm/fragments.js"),
				J = t("./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js"),
				Z = t("./node_modules/@ethersproject/abi/lib.esm/interface.js"),
				q = t("./node_modules/@ethersproject/address/lib.esm/index.js"),
				Q = t("./node_modules/@ethersproject/base64/lib.esm/index.js"),
				Y = t("./node_modules/@ethersproject/basex/lib.esm/index.js"),
				rr = t("./node_modules/@ethersproject/hash/lib.esm/message.js"),
				er = t("./node_modules/@ethersproject/hash/lib.esm/namehash.js"),
				tr = t("./node_modules/@ethersproject/hash/lib.esm/id.js"),
				nr = t("./node_modules/@ethersproject/hash/lib.esm/typed-data.js"),
				or = t("./node_modules/@ethersproject/hdnode/lib.esm/index.js"),
				sr = t("./node_modules/@ethersproject/json-wallets/lib.esm/inspect.js"),
				ir = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js");
			const ar = "logger/5.4.1";
			let ur = !1,
				cr = !1;
			const lr = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let hr = lr.default,
				dr = null;
			const fr = function() {
				try {
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (t) {
								r.push(e)
							}
						}), r.length) throw new Error("missing " + r.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (r) {
					return r.message
				}
				return null
			}();
			var mr, gr;
			! function(r) {
				r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
			}(mr || (mr = {})),
			function(r) {
				r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(gr || (gr = {}));
			const Er = "0123456789abcdef";
			class Nr {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == lr[t] && this.throwArgumentError("invalid log level name", "logLevel", r), hr > lr[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(Nr.levels.DEBUG, r)
				}
				info(...r) {
					this._log(Nr.levels.INFO, r)
				}
				warn(...r) {
					this._log(Nr.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (cr) return this.makeError("censored error", e, {});
					e || (e = Nr.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(r => {
						const e = t[r];
						try {
							if (e instanceof Uint8Array) {
								let t = "";
								for (let r = 0; r < e.length; r++) t += Er[e[r] >> 4], t += Er[15 & e[r]];
								n.push(r + "=Uint8Array(0x" + t + ")")
							} else n.push(r + "=" + JSON.stringify(e))
						} catch (s) {
							n.push(r + "=" + JSON.stringify(t[r].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const s = new Error(r);
					return s.reason = o, s.code = e, Object.keys(t).forEach((function(r) {
						s[r] = t[r]
					})), s
				}
				throwError(r, e, t) {
					throw this.makeError(r, e, t)
				}
				throwArgumentError(r, e, t) {
					return this.throwError(r, Nr.errors.INVALID_ARGUMENT, {
						argument: e,
						value: t
					})
				}
				assert(r, e, t, n) {
					r || this.throwError(e, t, n)
				}
				assertArgument(r, e, t, n) {
					r || this.throwArgumentError(e, t, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), fr && this.throwError("platform missing String.prototype.normalize", Nr.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: fr
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, Nr.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, Nr.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, Nr.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, Nr.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", Nr.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Nr.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", Nr.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return dr || (dr = new Nr(ar)), dr
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", Nr.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), ur) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", Nr.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					cr = !!r, ur = !!e
				}
				static setLogLevel(r) {
					const e = lr[r.toLowerCase()];
					null != e ? hr = e : Nr.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new Nr(r)
				}
			}
			Nr.errors = gr, Nr.levels = mr;
			var pr = t("./node_modules/@ethersproject/sha2/lib.esm/sha2.js"),
				br = t("./node_modules/@ethersproject/solidity/lib.esm/index.js"),
				_r = t("./node_modules/@ethersproject/random/lib.esm/random.js"),
				Rr = t("./node_modules/@ethersproject/random/lib.esm/shuffle.js");
			const vr = "logger/5.4.0";
			let wr = !1,
				Or = !1;
			const yr = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let Ar = yr.default,
				Ir = null;
			const Ur = function() {
				try {
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (t) {
								r.push(e)
							}
						}), r.length) throw new Error("missing " + r.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (r) {
					return r.message
				}
				return null
			}();
			var Pr, Tr;
			! function(r) {
				r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
			}(Pr || (Pr = {})),
			function(r) {
				r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(Tr || (Tr = {}));
			class Sr {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == yr[t] && this.throwArgumentError("invalid log level name", "logLevel", r), Ar > yr[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(Sr.levels.DEBUG, r)
				}
				info(...r) {
					this._log(Sr.levels.INFO, r)
				}
				warn(...r) {
					this._log(Sr.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (Or) return this.makeError("censored error", e, {});
					e || (e = Sr.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(r => {
						try {
							n.push(r + "=" + JSON.stringify(t[r]))
						} catch (s) {
							n.push(r + "=" + JSON.stringify(t[r].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const s = new Error(r);
					return s.reason = o, s.code = e, Object.keys(t).forEach((function(r) {
						s[r] = t[r]
					})), s
				}
				throwError(r, e, t) {
					throw this.makeError(r, e, t)
				}
				throwArgumentError(r, e, t) {
					return this.throwError(r, Sr.errors.INVALID_ARGUMENT, {
						argument: e,
						value: t
					})
				}
				assert(r, e, t, n) {
					r || this.throwError(e, t, n)
				}
				assertArgument(r, e, t, n) {
					r || this.throwArgumentError(e, t, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), Ur && this.throwError("platform missing String.prototype.normalize", Sr.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: Ur
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, Sr.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, Sr.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, Sr.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, Sr.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", Sr.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Sr.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", Sr.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return Ir || (Ir = new Sr(vr)), Ir
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", Sr.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), wr) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", Sr.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					Or = !!r, wr = !!e
				}
				static setLogLevel(r) {
					const e = yr[r.toLowerCase()];
					null != e ? Ar = e : Sr.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new Sr(r)
				}
			}
			Sr.errors = Tr, Sr.levels = Pr;
			var Cr = function(r, e, t, n) {
				return new(t || (t = Promise))((function(o, s) {
					function i(r) {
						try {
							u(n.next(r))
						} catch (e) {
							s(e)
						}
					}

					function a(r) {
						try {
							u(n.throw(r))
						} catch (e) {
							s(e)
						}
					}

					function u(r) {
						var e;
						r.done ? o(r.value) : (e = r.value, e instanceof t ? e : new t((function(r) {
							r(e)
						}))).then(i, a)
					}
					u((n = n.apply(r, e || [])).next())
				}))
			};
			const jr = new Sr("properties/5.4.1");

			function xr(r, e, t) {
				Object.defineProperty(r, e, {
					enumerable: !0,
					value: t,
					writable: !1
				})
			}

			function Fr(r, e) {
				for (let t = 0; t < 32; t++) {
					if (r[e]) return r[e];
					if (!r.prototype || "object" != typeof r.prototype) break;
					r = Object.getPrototypeOf(r.prototype).constructor
				}
				return null
			}

			function Dr(r) {
				return Cr(this, void 0, void 0, (function*() {
					const e = Object.keys(r).map(e => {
						const t = r[e];
						return Promise.resolve(t).then(r => ({
							key: e,
							value: r
						}))
					});
					return (yield Promise.all(e)).reduce((r, e) => (r[e.key] = e.value, r), {})
				}))
			}

			function Lr(r, e) {
				r && "object" == typeof r || jr.throwArgumentError("invalid object", "object", r), Object.keys(r).forEach(t => {
					e[t] || jr.throwArgumentError("invalid object key - " + t, "transaction:" + t, r)
				})
			}

			function Mr(r) {
				const e = {};
				for (const t in r) e[t] = r[t];
				return e
			}
			const kr = {
				bigint: !0,
				boolean: !0,
				function: !0,
				number: !0,
				string: !0
			};

			function Gr(r) {
				if (function r(e) {
						if (null == e || kr[typeof e]) return !0;
						if (Array.isArray(e) || "object" == typeof e) {
							if (!Object.isFrozen(e)) return !1;
							const n = Object.keys(e);
							for (let o = 0; o < n.length; o++) {
								let s = null;
								try {
									s = e[n[o]]
								} catch (t) {
									continue
								}
								if (!r(s)) return !1
							}
							return !0
						}
						return jr.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
					}(r)) return r;
				if (Array.isArray(r)) return Object.freeze(r.map(r => Br(r)));
				if ("object" == typeof r) {
					const e = {};
					for (const t in r) {
						const n = r[t];
						void 0 !== n && xr(e, t, Br(n))
					}
					return e
				}
				return jr.throwArgumentError(`Cannot deepCopy ${typeof r}`, "object", r)
			}

			function Br(r) {
				return Gr(r)
			}
			var Wr = t("./node_modules/@ethersproject/rlp/lib.esm/index.js"),
				Vr = t("./node_modules/@ethersproject/signing-key/lib.esm/index.js"),
				zr = t("./node_modules/@ethersproject/strings/lib.esm/idna.js"),
				Xr = t("./node_modules/@ethersproject/strings/lib.esm/utf8.js"),
				Kr = t("./node_modules/@ethersproject/strings/lib.esm/bytes32.js"),
				Hr = t("./node_modules/@ethersproject/transactions/lib.esm/index.js"),
				$r = t("./node_modules/@ethersproject/units/lib.esm/index.js"),
				Jr = t("./node_modules/@ethersproject/web/lib.esm/index.js"),
				Zr = t("./node_modules/@ethersproject/sha2/lib.esm/types.js");
			const qr = "ethers/5.4.7",
				Qr = new Nr(qr);
			try {
				const r = window;
				null == r._ethers && (r._ethers = o)
			} catch (Yr) {}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.2"
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(r, e, t) {
			"use strict";
			t.d(e, "b", (function() {
				return d
			})), t.d(e, "a", (function() {
				return m
			}));
			var n = t("./node_modules/bn.js/lib/bn.js"),
				o = t.n(n),
				s = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				i = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js"),
				a = t("./node_modules/ethers/node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				u = o.a.BN;
			const c = new i.a(a.a),
				l = {},
				h = 9007199254740991;

			function d(r) {
				return null != r && (m.isBigNumber(r) || "number" == typeof r && r % 1 == 0 || "string" == typeof r && !!r.match(/^-?[0-9]+$/) || Object(s.l)(r) || "bigint" == typeof r || Object(s.j)(r))
			}
			let f = !1;
			class m {
				constructor(r, e) {
					c.checkNew(new.target, m), r !== l && c.throwError("cannot call constructor directly; use BigNumber.from", i.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(r) {
					return E(N(this).fromTwos(r))
				}
				toTwos(r) {
					return E(N(this).toTwos(r))
				}
				abs() {
					return "-" === this._hex[0] ? m.from(this._hex.substring(1)) : this
				}
				add(r) {
					return E(N(this).add(N(r)))
				}
				sub(r) {
					return E(N(this).sub(N(r)))
				}
				div(r) {
					return m.from(r).isZero() && p("division by zero", "div"), E(N(this).div(N(r)))
				}
				mul(r) {
					return E(N(this).mul(N(r)))
				}
				mod(r) {
					const e = N(r);
					return e.isNeg() && p("cannot modulo negative values", "mod"), E(N(this).umod(e))
				}
				pow(r) {
					const e = N(r);
					return e.isNeg() && p("cannot raise to negative values", "pow"), E(N(this).pow(e))
				}
				and(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'and' negative values", "and"), E(N(this).and(e))
				}
				or(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'or' negative values", "or"), E(N(this).or(e))
				}
				xor(r) {
					const e = N(r);
					return (this.isNegative() || e.isNeg()) && p("cannot 'xor' negative values", "xor"), E(N(this).xor(e))
				}
				mask(r) {
					return (this.isNegative() || r < 0) && p("cannot mask negative values", "mask"), E(N(this).maskn(r))
				}
				shl(r) {
					return (this.isNegative() || r < 0) && p("cannot shift negative values", "shl"), E(N(this).shln(r))
				}
				shr(r) {
					return (this.isNegative() || r < 0) && p("cannot shift negative values", "shr"), E(N(this).shrn(r))
				}
				eq(r) {
					return N(this).eq(N(r))
				}
				lt(r) {
					return N(this).lt(N(r))
				}
				lte(r) {
					return N(this).lte(N(r))
				}
				gt(r) {
					return N(this).gt(N(r))
				}
				gte(r) {
					return N(this).gte(N(r))
				}
				isNegative() {
					return "-" === this._hex[0]
				}
				isZero() {
					return N(this).isZero()
				}
				toNumber() {
					try {
						return N(this).toNumber()
					} catch (r) {
						p("overflow", "toNumber", this.toString())
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
					return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", i.a.errors.UNEXPECTED_ARGUMENT, {})), N(this).toString(10)
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
					if (r instanceof m) return r;
					if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new m(l, g(r)) : r.match(/^-?[0-9]+$/) ? new m(l, g(new u(r))) : c.throwArgumentError("invalid BigNumber string", "value", r);
					if ("number" == typeof r) return r % 1 && p("underflow", "BigNumber.from", r), (r >= h || r <= -h) && p("overflow", "BigNumber.from", r), m.from(String(r));
					const e = r;
					if ("bigint" == typeof e) return m.from(e.toString());
					if (Object(s.j)(e)) return m.from(Object(s.i)(e));
					if (e)
						if (e.toHexString) {
							const r = e.toHexString();
							if ("string" == typeof r) return m.from(r)
						} else {
							let r = e._hex;
							if (null == r && "BigNumber" === e.type && (r = e.hex), "string" == typeof r && (Object(s.l)(r) || "-" === r[0] && Object(s.l)(r.substring(1)))) return m.from(r)
						} return c.throwArgumentError("invalid BigNumber value", "value", r)
				}
				static isBigNumber(r) {
					return !(!r || !r._isBigNumber)
				}
			}

			function g(r) {
				if ("string" != typeof r) return g(r.toString(16));
				if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && c.throwArgumentError("invalid hex", "value", r), "0x00" === (r = g(r)) ? r : "-" + r;
				if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
				for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
				return r
			}

			function E(r) {
				return m.from(g(r))
			}

			function N(r) {
				const e = m.from(r).toHexString();
				return "-" === e[0] ? new u("-" + e.substring(3), 16) : new u(e.substring(2), 16)
			}

			function p(r, e, t) {
				const n = {
					fault: r,
					operation: e
				};
				return null != t && (n.value = t), c.throwError(r, i.a.errors.NUMERIC_FAULT, n)
			}
		},
		"./node_modules/ethers/node_modules/@ethersproject/bignumber/node_modules/@ethersproject/logger/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return d
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
					const r = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
							try {
								if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
							} catch (t) {
								r.push(e)
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
			class d {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == i[t] && this.throwArgumentError("invalid log level name", "logLevel", r), a > i[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(d.levels.DEBUG, r)
				}
				info(...r) {
					this._log(d.levels.INFO, r)
				}
				warn(...r) {
					this._log(d.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (s) return this.makeError("censored error", e, {});
					e || (e = d.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(r => {
						try {
							n.push(r + "=" + JSON.stringify(t[r]))
						} catch (i) {
							n.push(r + "=" + JSON.stringify(t[r].toString()))
						}
					}), n.push(`code=${e}`), n.push(`version=${this.version}`);
					const o = r;
					n.length && (r += " (" + n.join(", ") + ")");
					const i = new Error(r);
					return i.reason = o, i.code = e, Object.keys(t).forEach((function(r) {
						i[r] = t[r]
					})), i
				}
				throwError(r, e, t) {
					throw this.makeError(r, e, t)
				}
				throwArgumentError(r, e, t) {
					return this.throwError(r, d.errors.INVALID_ARGUMENT, {
						argument: e,
						value: t
					})
				}
				assert(r, e, t, n) {
					r || this.throwError(e, t, n)
				}
				assertArgument(r, e, t, n) {
					r || this.throwArgumentError(e, t, n)
				}
				checkNormalize(r) {
					null == r && (r = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", d.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, d.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, d.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, d.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, d.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", d.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return u || (u = new d(n)), u
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", d.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", d.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					s = !!r, o = !!e
				}
				static setLogLevel(r) {
					const e = i[r.toLowerCase()];
					null != e ? a = e : d.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new d(r)
				}
			}
			d.errors = h, d.levels = l
		},
		"./node_modules/lodash/uniqueId.js": function(r, e, t) {
			var n = t("./node_modules/lodash/toString.js"),
				o = 0;
			r.exports = function(r) {
				var e = ++o;
				return n(r) + e
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-pages-meta-ArbitrumPointsMigrationPage.a3b91392f9ec3d50c48e.js.map