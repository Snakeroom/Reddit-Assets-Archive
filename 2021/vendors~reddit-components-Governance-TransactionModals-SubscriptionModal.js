// https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-SubscriptionModal.3f8bca14b3d46b4ba7d0.js
// Retrieved at 7/21/2021, 5:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-Governance-TransactionModals-SubscriptionModal", "CryptoLibEthers"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return h
			})), t.d(e, "e", (function() {
				return g
			})), t.d(e, "d", (function() {
				return m
			})), t.d(e, "b", (function() {
				return p
			})), t.d(e, "c", (function() {
				return v
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const u = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("address/5.4.0");

			function a(r) {
				Object(n.l)(r, 20) || u.throwArgumentError("invalid address", "address", r);
				const e = (r = r.toLowerCase()).substring(2).split(""),
					t = new Uint8Array(40);
				for (let n = 0; n < 40; n++) t[n] = e[n].charCodeAt(0);
				const o = Object(n.a)(Object(i.a)(t));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
				return "0x" + e.join("")
			}
			const c = {};
			for (let b = 0; b < 10; b++) c[String(b)] = String(b);
			for (let b = 0; b < 26; b++) c[String.fromCharCode(65 + b)] = String(10 + b);
			const l = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function f(r) {
				let e = (r = (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00").split("").map(r => c[r]).join("");
				for (; e.length >= l;) {
					let r = e.substring(0, l);
					e = parseInt(r, 10) % 97 + e.substring(r.length)
				}
				let t = String(98 - parseInt(e, 10) % 97);
				for (; t.length < 2;) t = "0" + t;
				return t
			}

			function h(r) {
				let e = null;
				if ("string" != typeof r && u.throwArgumentError("invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== r.substring(0, 2) && (r = "0x" + r), e = a(r), r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== r && u.throwArgumentError("bad address checksum", "address", r);
				else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (r.substring(2, 4) !== f(r) && u.throwArgumentError("bad icap checksum", "address", r), e = Object(o.c)(r.substring(4)); e.length < 40;) e = "0" + e;
					e = a("0x" + e)
				} else u.throwArgumentError("invalid address", "address", r);
				return e
			}

			function g(r) {
				try {
					return h(r), !0
				} catch (e) {}
				return !1
			}

			function m(r) {
				let e = Object(o.b)(h(r).substring(2)).toUpperCase();
				for (; e.length < 30;) e = "0" + e;
				return "XE" + f("XE00" + e) + e
			}

			function p(r) {
				let e = null;
				try {
					e = h(r.from)
				} catch (a) {
					u.throwArgumentError("missing from address", "transaction", r)
				}
				const t = Object(n.o)(Object(n.a)(o.a.from(r.nonce).toHexString()));
				return h(Object(n.e)(Object(i.a)(Object(s.encode)([e, t])), 12))
			}

			function v(r, e, t) {
				return 32 !== Object(n.d)(e) && u.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== Object(n.d)(t) && u.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t), h(Object(n.e)(Object(i.a)(Object(n.b)(["0xff", h(r), e, t])), 12))
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
				return f
			})), t.d(e, "a", (function() {
				return g
			})), t.d(e, "c", (function() {
				return E
			})), t.d(e, "b", (function() {
				return y
			}));
			var n = t("./node_modules/bn.js/lib/bn.js"),
				o = t.n(n),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				a = o.a.BN;
			const c = new s.b(u.a),
				l = {},
				d = 9007199254740991;

			function f(r) {
				return null != r && (g.isBigNumber(r) || "number" == typeof r && r % 1 == 0 || "string" == typeof r && !!r.match(/^-?[0-9]+$/) || Object(i.l)(r) || "bigint" == typeof r || Object(i.j)(r))
			}
			let h = !1;
			class g {
				constructor(r, e) {
					c.checkNew(new.target, g), r !== l && c.throwError("cannot call constructor directly; use BigNumber.from", s.b.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(r) {
					return p(v(this).fromTwos(r))
				}
				toTwos(r) {
					return p(v(this).toTwos(r))
				}
				abs() {
					return "-" === this._hex[0] ? g.from(this._hex.substring(1)) : this
				}
				add(r) {
					return p(v(this).add(v(r)))
				}
				sub(r) {
					return p(v(this).sub(v(r)))
				}
				div(r) {
					return g.from(r).isZero() && b("division by zero", "div"), p(v(this).div(v(r)))
				}
				mul(r) {
					return p(v(this).mul(v(r)))
				}
				mod(r) {
					const e = v(r);
					return e.isNeg() && b("cannot modulo negative values", "mod"), p(v(this).umod(e))
				}
				pow(r) {
					const e = v(r);
					return e.isNeg() && b("cannot raise to negative values", "pow"), p(v(this).pow(e))
				}
				and(r) {
					const e = v(r);
					return (this.isNegative() || e.isNeg()) && b("cannot 'and' negative values", "and"), p(v(this).and(e))
				}
				or(r) {
					const e = v(r);
					return (this.isNegative() || e.isNeg()) && b("cannot 'or' negative values", "or"), p(v(this).or(e))
				}
				xor(r) {
					const e = v(r);
					return (this.isNegative() || e.isNeg()) && b("cannot 'xor' negative values", "xor"), p(v(this).xor(e))
				}
				mask(r) {
					return (this.isNegative() || r < 0) && b("cannot mask negative values", "mask"), p(v(this).maskn(r))
				}
				shl(r) {
					return (this.isNegative() || r < 0) && b("cannot shift negative values", "shl"), p(v(this).shln(r))
				}
				shr(r) {
					return (this.isNegative() || r < 0) && b("cannot shift negative values", "shr"), p(v(this).shrn(r))
				}
				eq(r) {
					return v(this).eq(v(r))
				}
				lt(r) {
					return v(this).lt(v(r))
				}
				lte(r) {
					return v(this).lte(v(r))
				}
				gt(r) {
					return v(this).gt(v(r))
				}
				gte(r) {
					return v(this).gte(v(r))
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
					} catch (r) {
						b("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (r) {}
					return c.throwError("this platform does not support BigInt", s.b.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.b.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", s.b.errors.UNEXPECTED_ARGUMENT, {})), v(this).toString(10)
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
					if (r instanceof g) return r;
					if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new g(l, m(r)) : r.match(/^-?[0-9]+$/) ? new g(l, m(new a(r))) : c.throwArgumentError("invalid BigNumber string", "value", r);
					if ("number" == typeof r) return r % 1 && b("underflow", "BigNumber.from", r), (r >= d || r <= -d) && b("overflow", "BigNumber.from", r), g.from(String(r));
					const e = r;
					if ("bigint" == typeof e) return g.from(e.toString());
					if (Object(i.j)(e)) return g.from(Object(i.i)(e));
					if (e)
						if (e.toHexString) {
							const r = e.toHexString();
							if ("string" == typeof r) return g.from(r)
						} else {
							let r = e._hex;
							if (null == r && "BigNumber" === e.type && (r = e.hex), "string" == typeof r && (Object(i.l)(r) || "-" === r[0] && Object(i.l)(r.substring(1)))) return g.from(r)
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

			function p(r) {
				return g.from(m(r))
			}

			function v(r) {
				const e = g.from(r).toHexString();
				return "-" === e[0] ? new a("-" + e.substring(3), 16) : new a(e.substring(2), 16)
			}

			function b(r, e, t) {
				const n = {
					fault: r,
					operation: e
				};
				return null != t && (n.value = t), c.throwError(r, s.b.errors.NUMERIC_FAULT, n)
			}

			function E(r) {
				return new a(r, 36).toString(16)
			}

			function y(r) {
				return new a(r, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "k", (function() {
				return s
			})), t.d(e, "j", (function() {
				return u
			})), t.d(e, "a", (function() {
				return a
			})), t.d(e, "b", (function() {
				return c
			})), t.d(e, "o", (function() {
				return l
			})), t.d(e, "p", (function() {
				return d
			})), t.d(e, "l", (function() {
				return f
			})), t.d(e, "i", (function() {
				return g
			})), t.d(e, "d", (function() {
				return m
			})), t.d(e, "e", (function() {
				return p
			})), t.d(e, "c", (function() {
				return v
			})), t.d(e, "g", (function() {
				return b
			})), t.d(e, "f", (function() {
				return E
			})), t.d(e, "h", (function() {
				return y
			})), t.d(e, "n", (function() {
				return w
			})), t.d(e, "m", (function() {
				return _
			}));
			const n = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").b)("bytes/5.4.0");

			function o(r) {
				return !!r.toHexString
			}

			function i(r) {
				return r.slice ? r : (r.slice = function() {
					const e = Array.prototype.slice.call(arguments);
					return i(new Uint8Array(Array.prototype.slice.apply(r, e)))
				}, r)
			}

			function s(r) {
				return f(r) && !(r.length % 2) || u(r)
			}

			function u(r) {
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

			function a(r, e) {
				if (e || (e = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid arrayify value");
					const e = [];
					for (; r;) e.unshift(255 & r), r = parseInt(String(r / 256));
					return 0 === e.length && e.push(0), i(new Uint8Array(e))
				}
				if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r) && (r = r.toHexString()), f(r)) {
					let t = r.substring(2);
					t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", r));
					const o = [];
					for (let r = 0; r < t.length; r += 2) o.push(parseInt(t.substring(r, r + 2), 16));
					return i(new Uint8Array(o))
				}
				return u(r) ? i(new Uint8Array(r)) : n.throwArgumentError("invalid arrayify value", "value", r)
			}

			function c(r) {
				const e = r.map(r => a(r)),
					t = e.reduce((r, e) => r + e.length, 0),
					n = new Uint8Array(t);
				return e.reduce((r, e) => (n.set(e, r), r + e.length), 0), i(n)
			}

			function l(r) {
				let e = a(r);
				if (0 === e.length) return e;
				let t = 0;
				for (; t < e.length && 0 === e[t];) t++;
				return t && (e = e.slice(t)), e
			}

			function d(r, e) {
				(r = a(r)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
				const t = new Uint8Array(e);
				return t.set(r, e - r.length), i(t)
			}

			function f(r, e) {
				return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
			}
			const h = "0123456789abcdef";

			function g(r, e) {
				if (e || (e = {}), "number" == typeof r) {
					n.checkSafeUint53(r, "invalid hexlify value");
					let e = "";
					for (; r;) e = h[15 & r] + e, r = Math.floor(r / 16);
					return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
				}
				if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
				if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r)) return r.toHexString();
				if (f(r)) return r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
				if (u(r)) {
					let e = "0x";
					for (let t = 0; t < r.length; t++) {
						let n = r[t];
						e += h[(240 & n) >> 4] + h[15 & n]
					}
					return e
				}
				return n.throwArgumentError("invalid hexlify value", "value", r)
			}

			function m(r) {
				if ("string" != typeof r) r = g(r);
				else if (!f(r) || r.length % 2) return null;
				return (r.length - 2) / 2
			}

			function p(r, e, t) {
				return "string" != typeof r ? r = g(r) : (!f(r) || r.length % 2) && n.throwArgumentError("invalid hexData", "value", r), e = 2 + 2 * e, null != t ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
			}

			function v(r) {
				let e = "0x";
				return r.forEach(r => {
					e += g(r).substring(2)
				}), e
			}

			function b(r) {
				const e = E(g(r, {
					hexPad: "left"
				}));
				return "0x" === e ? "0x0" : e
			}

			function E(r) {
				"string" != typeof r && (r = g(r)), f(r) || n.throwArgumentError("invalid hex string", "value", r), r = r.substring(2);
				let e = 0;
				for (; e < r.length && "0" === r[e];) e++;
				return "0x" + r.substring(e)
			}

			function y(r, e) {
				for ("string" != typeof r ? r = g(r) : f(r) || n.throwArgumentError("invalid hex string", "value", r), r.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * e + 2;) r = "0x0" + r.substring(2);
				return r
			}

			function w(r) {
				const e = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (s(r)) {
					const t = a(r);
					65 !== t.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", r), e.r = g(t.slice(0, 32)), e.s = g(t.slice(32, 64)), e.v = t[64], e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", r)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = g(t.slice(32, 64))
				} else {
					if (e.r = r.r, e.s = r.s, e.v = r.v, e.recoveryParam = r.recoveryParam, e._vs = r._vs, null != e._vs) {
						const t = d(a(e._vs), 32);
						e._vs = g(t);
						const o = t[0] >= 128 ? 1 : 0;
						null == e.recoveryParam ? e.recoveryParam = o : e.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), t[0] &= 127;
						const i = g(t);
						null == e.s ? e.s = i : e.s !== i && n.throwArgumentError("signature v mismatch _vs", "signature", r)
					}
					null == e.recoveryParam ? null == e.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", r) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2 : null == e.v ? e.v = 27 + e.recoveryParam : e.recoveryParam !== 1 - e.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", r), null != e.r && f(e.r) ? e.r = y(e.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", r), null != e.s && f(e.s) ? e.s = y(e.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", r);
					const t = a(e.s);
					t[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", r), e.recoveryParam && (t[0] |= 128);
					const o = g(t);
					e._vs && (f(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", r), e._vs = y(e._vs, 32)), null == e._vs ? e._vs = o : e._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", r)
				}
				return e
			}

			function _(r) {
				return g(c([(r = w(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return s
			}));
			var n = t("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = t.n(n),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function s(r) {
				return "0x" + o.a.keccak_256(Object(i.a)(r))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(r, e, t) {
			(function(e, t) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof e && e.versions && e.versions.node && (n = t);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof r && r.exports, i = "0123456789abcdef".split(""), s = [0, 8, 16, 24], u = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], a = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function(r, e, t) {
							return function(n) {
								return new w(r, e, r).update(n)[t]()
							}
						}, d = function(r, e, t) {
							return function(n, o) {
								return new w(r, e, o).update(n)[t]()
							}
						}, f = function(r, e) {
							var t = l(r, e, "hex");
							t.create = function() {
								return new w(r, e, r)
							}, t.update = function(r) {
								return t.create().update(r)
							};
							for (var n = 0; n < c.length; ++n) {
								var o = c[n];
								t[o] = l(r, e, o)
							}
							return t
						}, h = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: a,
							createMethod: f
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: a,
							createMethod: f
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(r, e) {
								var t = d(r, e, "hex");
								t.create = function(t) {
									return new w(r, e, t)
								}, t.update = function(r, e) {
									return t.create(e).update(r)
								};
								for (var n = 0; n < c.length; ++n) {
									var o = c[n];
									t[o] = d(r, e, o)
								}
								return t
							}
						}], g = {}, m = [], p = 0; p < h.length; ++p)
						for (var v = h[p], b = v.bits, E = 0; E < b.length; ++E) {
							var y = v.name + "_" + b[E];
							m.push(y), g[y] = v.createMethod(b[E], v.padding)
						}

					function w(r, e, t) {
						this.blocks = [], this.s = [], this.padding = e, this.outputBits = t, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (r << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = t >> 5, this.extraBytes = (31 & t) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					w.prototype.update = function(r) {
						var e = "string" != typeof r;
						e && r.constructor === ArrayBuffer && (r = new Uint8Array(r));
						for (var t, n, o = r.length, i = this.blocks, u = this.byteCount, a = this.blockCount, c = 0, l = this.s; c < o;) {
							if (this.reset)
								for (this.reset = !1, i[0] = this.block, t = 1; t < a + 1; ++t) i[t] = 0;
							if (e)
								for (t = this.start; c < o && t < u; ++c) i[t >> 2] |= r[c] << s[3 & t++];
							else
								for (t = this.start; c < o && t < u; ++c)(n = r.charCodeAt(c)) < 128 ? i[t >> 2] |= n << s[3 & t++] : n < 2048 ? (i[t >> 2] |= (192 | n >> 6) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]) : n < 55296 || n >= 57344 ? (i[t >> 2] |= (224 | n >> 12) << s[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(++c)), i[t >> 2] |= (240 | n >> 18) << s[3 & t++], i[t >> 2] |= (128 | n >> 12 & 63) << s[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]);
							if (this.lastByteIndex = t, t >= u) {
								for (this.start = t - u, this.block = i[a], t = 0; t < a; ++t) l[t] ^= i[t];
								_(l), this.reset = !0
							} else this.start = t
						}
						return this
					}, w.prototype.finalize = function() {
						var r = this.blocks,
							e = this.lastByteIndex,
							t = this.blockCount,
							n = this.s;
						if (r[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
							for (r[0] = r[t], e = 1; e < t + 1; ++e) r[e] = 0;
						for (r[t - 1] |= 2147483648, e = 0; e < t; ++e) n[e] ^= r[e];
						_(n)
					}, w.prototype.toString = w.prototype.hex = function() {
						this.finalize();
						for (var r, e = this.blockCount, t = this.s, n = this.outputBlocks, o = this.extraBytes, s = 0, u = 0, a = ""; u < n;) {
							for (s = 0; s < e && u < n; ++s, ++u) r = t[s], a += i[r >> 4 & 15] + i[15 & r] + i[r >> 12 & 15] + i[r >> 8 & 15] + i[r >> 20 & 15] + i[r >> 16 & 15] + i[r >> 28 & 15] + i[r >> 24 & 15];
							u % e == 0 && (_(t), s = 0)
						}
						return o && (r = t[s], o > 0 && (a += i[r >> 4 & 15] + i[15 & r]), o > 1 && (a += i[r >> 12 & 15] + i[r >> 8 & 15]), o > 2 && (a += i[r >> 20 & 15] + i[r >> 16 & 15])), a
					}, w.prototype.arrayBuffer = function() {
						this.finalize();
						var r, e = this.blockCount,
							t = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							i = 0,
							s = 0,
							u = this.outputBits >> 3;
						r = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(u);
						for (var a = new Uint32Array(r); s < n;) {
							for (i = 0; i < e && s < n; ++i, ++s) a[s] = t[i];
							s % e == 0 && _(t)
						}
						return o && (a[i] = t[i], r = r.slice(0, u)), r
					}, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
						this.finalize();
						for (var r, e, t = this.blockCount, n = this.s, o = this.outputBlocks, i = this.extraBytes, s = 0, u = 0, a = []; u < o;) {
							for (s = 0; s < t && u < o; ++s, ++u) r = u << 2, e = n[s], a[r] = 255 & e, a[r + 1] = e >> 8 & 255, a[r + 2] = e >> 16 & 255, a[r + 3] = e >> 24 & 255;
							u % t == 0 && _(n)
						}
						return i && (r = u << 2, e = n[s], i > 0 && (a[r] = 255 & e), i > 1 && (a[r + 1] = e >> 8 & 255), i > 2 && (a[r + 2] = e >> 16 & 255)), a
					};
					var _ = function(r) {
						var e, t, n, o, i, s, a, c, l, d, f, h, g, m, p, v, b, E, y, w, _, A, N, R, j, x, P, B, T, C, I, S, U, O, M, k, L, q, D, F, z, H, Y, K, V, J, G, X, $, W, Q, Z, rr, er, tr, nr, or, ir, sr, ur, ar, cr, lr;
						for (n = 0; n < 48; n += 2) o = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40], i = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41], s = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42], a = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43], c = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44], l = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45], d = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46], f = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47], e = (h = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48]) ^ (s << 1 | a >>> 31), t = (g = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49]) ^ (a << 1 | s >>> 31), r[0] ^= e, r[1] ^= t, r[10] ^= e, r[11] ^= t, r[20] ^= e, r[21] ^= t, r[30] ^= e, r[31] ^= t, r[40] ^= e, r[41] ^= t, e = o ^ (c << 1 | l >>> 31), t = i ^ (l << 1 | c >>> 31), r[2] ^= e, r[3] ^= t, r[12] ^= e, r[13] ^= t, r[22] ^= e, r[23] ^= t, r[32] ^= e, r[33] ^= t, r[42] ^= e, r[43] ^= t, e = s ^ (d << 1 | f >>> 31), t = a ^ (f << 1 | d >>> 31), r[4] ^= e, r[5] ^= t, r[14] ^= e, r[15] ^= t, r[24] ^= e, r[25] ^= t, r[34] ^= e, r[35] ^= t, r[44] ^= e, r[45] ^= t, e = c ^ (h << 1 | g >>> 31), t = l ^ (g << 1 | h >>> 31), r[6] ^= e, r[7] ^= t, r[16] ^= e, r[17] ^= t, r[26] ^= e, r[27] ^= t, r[36] ^= e, r[37] ^= t, r[46] ^= e, r[47] ^= t, e = d ^ (o << 1 | i >>> 31), t = f ^ (i << 1 | o >>> 31), r[8] ^= e, r[9] ^= t, r[18] ^= e, r[19] ^= t, r[28] ^= e, r[29] ^= t, r[38] ^= e, r[39] ^= t, r[48] ^= e, r[49] ^= t, m = r[0], p = r[1], J = r[11] << 4 | r[10] >>> 28, G = r[10] << 4 | r[11] >>> 28, B = r[20] << 3 | r[21] >>> 29, T = r[21] << 3 | r[20] >>> 29, ur = r[31] << 9 | r[30] >>> 23, ar = r[30] << 9 | r[31] >>> 23, H = r[40] << 18 | r[41] >>> 14, Y = r[41] << 18 | r[40] >>> 14, O = r[2] << 1 | r[3] >>> 31, M = r[3] << 1 | r[2] >>> 31, v = r[13] << 12 | r[12] >>> 20, b = r[12] << 12 | r[13] >>> 20, X = r[22] << 10 | r[23] >>> 22, $ = r[23] << 10 | r[22] >>> 22, C = r[33] << 13 | r[32] >>> 19, I = r[32] << 13 | r[33] >>> 19, cr = r[42] << 2 | r[43] >>> 30, lr = r[43] << 2 | r[42] >>> 30, er = r[5] << 30 | r[4] >>> 2, tr = r[4] << 30 | r[5] >>> 2, k = r[14] << 6 | r[15] >>> 26, L = r[15] << 6 | r[14] >>> 26, E = r[25] << 11 | r[24] >>> 21, y = r[24] << 11 | r[25] >>> 21, W = r[34] << 15 | r[35] >>> 17, Q = r[35] << 15 | r[34] >>> 17, S = r[45] << 29 | r[44] >>> 3, U = r[44] << 29 | r[45] >>> 3, R = r[6] << 28 | r[7] >>> 4, j = r[7] << 28 | r[6] >>> 4, nr = r[17] << 23 | r[16] >>> 9, or = r[16] << 23 | r[17] >>> 9, q = r[26] << 25 | r[27] >>> 7, D = r[27] << 25 | r[26] >>> 7, w = r[36] << 21 | r[37] >>> 11, _ = r[37] << 21 | r[36] >>> 11, Z = r[47] << 24 | r[46] >>> 8, rr = r[46] << 24 | r[47] >>> 8, K = r[8] << 27 | r[9] >>> 5, V = r[9] << 27 | r[8] >>> 5, x = r[18] << 20 | r[19] >>> 12, P = r[19] << 20 | r[18] >>> 12, ir = r[29] << 7 | r[28] >>> 25, sr = r[28] << 7 | r[29] >>> 25, F = r[38] << 8 | r[39] >>> 24, z = r[39] << 8 | r[38] >>> 24, A = r[48] << 14 | r[49] >>> 18, N = r[49] << 14 | r[48] >>> 18, r[0] = m ^ ~v & E, r[1] = p ^ ~b & y, r[10] = R ^ ~x & B, r[11] = j ^ ~P & T, r[20] = O ^ ~k & q, r[21] = M ^ ~L & D, r[30] = K ^ ~J & X, r[31] = V ^ ~G & $, r[40] = er ^ ~nr & ir, r[41] = tr ^ ~or & sr, r[2] = v ^ ~E & w, r[3] = b ^ ~y & _, r[12] = x ^ ~B & C, r[13] = P ^ ~T & I, r[22] = k ^ ~q & F, r[23] = L ^ ~D & z, r[32] = J ^ ~X & W, r[33] = G ^ ~$ & Q, r[42] = nr ^ ~ir & ur, r[43] = or ^ ~sr & ar, r[4] = E ^ ~w & A, r[5] = y ^ ~_ & N, r[14] = B ^ ~C & S, r[15] = T ^ ~I & U, r[24] = q ^ ~F & H, r[25] = D ^ ~z & Y, r[34] = X ^ ~W & Z, r[35] = $ ^ ~Q & rr, r[44] = ir ^ ~ur & cr, r[45] = sr ^ ~ar & lr, r[6] = w ^ ~A & m, r[7] = _ ^ ~N & p, r[16] = C ^ ~S & R, r[17] = I ^ ~U & j, r[26] = F ^ ~H & O, r[27] = z ^ ~Y & M, r[36] = W ^ ~Z & K, r[37] = Q ^ ~rr & V, r[46] = ur ^ ~cr & er, r[47] = ar ^ ~lr & tr, r[8] = A ^ ~m & v, r[9] = N ^ ~p & b, r[18] = S ^ ~R & x, r[19] = U ^ ~j & P, r[28] = H ^ ~O & k, r[29] = Y ^ ~M & L, r[38] = Z ^ ~K & J, r[39] = rr ^ ~V & G, r[48] = cr ^ ~er & nr, r[49] = lr ^ ~tr & or, r[0] ^= u[n], r[1] ^= u[n + 1]
					};
					if (o) r.exports = g;
					else
						for (p = 0; p < m.length; ++p) n[m[p]] = g[m[p]]
				}()
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.d(e, "a", (function() {
				return d
			})), t.d(e, "b", (function() {
				return f
			}));
			const n = "logger/5.4.0";
			let o = !1,
				i = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let u = s.default,
				a = null;
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
			var l, d;
			! function(r) {
				r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
			}(l || (l = {})),
			function(r) {
				r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			class f {
				constructor(r) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: r,
						writable: !1
					})
				}
				_log(r, e) {
					const t = r.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", r), u > s[t] || console.log.apply(console, e)
				}
				debug(...r) {
					this._log(f.levels.DEBUG, r)
				}
				info(...r) {
					this._log(f.levels.INFO, r)
				}
				warn(...r) {
					this._log(f.levels.WARNING, r)
				}
				makeError(r, e, t) {
					if (i) return this.makeError("censored error", e, {});
					e || (e = f.errors.UNKNOWN_ERROR), t || (t = {});
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
					return this.throwError(r, f.errors.INVALID_ARGUMENT, {
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
					null == r && (r = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(r, e) {
					"number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: r
					}), r % 1 && this.throwError(e, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: r
					}))
				}
				checkArgumentCount(r, e, t) {
					t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: r,
						expectedCount: e
					}), r > e && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: r,
						expectedCount: e
					})
				}
				checkNew(r, e) {
					r !== Object && null != r || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: e.name
					})
				}
				checkAbstract(r, e) {
					r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: r.name,
						operation: "new"
					}) : r !== Object && null != r || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: e.name
					})
				}
				static globalLogger() {
					return a || (a = new f(n)), a
				}
				static setCensorship(r, e) {
					if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!r) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!r, o = !!e
				}
				static setLogLevel(r) {
					const e = s[r.toLowerCase()];
					null != e ? u = e : f.globalLogger().warn("invalid log level - " + r)
				}
				static from(r) {
					return new f(r)
				}
			}
			f.errors = d, f.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(r, e, t) {
			"use strict";
			t.r(e), t.d(e, "encode", (function() {
				return a
			})), t.d(e, "decode", (function() {
				return d
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const i = new o.b("rlp/5.4.0");

			function s(r) {
				const e = [];
				for (; r;) e.unshift(255 & r), r >>= 8;
				return e
			}

			function u(r, e, t) {
				let n = 0;
				for (let o = 0; o < t; o++) n = 256 * n + r[e + o];
				return n
			}

			function a(r) {
				return Object(n.i)(function r(e) {
					if (Array.isArray(e)) {
						let t = [];
						if (e.forEach((function(e) {
								t = t.concat(r(e))
							})), t.length <= 55) return t.unshift(192 + t.length), t;
						const n = s(t.length);
						return n.unshift(247 + n.length), n.concat(t)
					}
					Object(n.k)(e) || i.throwArgumentError("RLP object must be BytesLike", "object", e);
					const t = Array.prototype.slice.call(Object(n.a)(e));
					if (1 === t.length && t[0] <= 127) return t;
					if (t.length <= 55) return t.unshift(128 + t.length), t;
					const o = s(t.length);
					return o.unshift(183 + o.length), o.concat(t)
				}(r))
			}

			function c(r, e, t, n) {
				const s = [];
				for (; t < e + 1 + n;) {
					const u = l(r, t);
					s.push(u.result), (t += u.consumed) > e + 1 + n && i.throwError("child data too short", o.b.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: s
				}
			}

			function l(r, e) {
				if (0 === r.length && i.throwError("data too short", o.b.errors.BUFFER_OVERRUN, {}), r[e] >= 248) {
					const t = r[e] - 247;
					e + 1 + t > r.length && i.throwError("data short segment too short", o.b.errors.BUFFER_OVERRUN, {});
					const n = u(r, e + 1, t);
					return e + 1 + t + n > r.length && i.throwError("data long segment too short", o.b.errors.BUFFER_OVERRUN, {}), c(r, e, e + 1 + t, t + n)
				}
				if (r[e] >= 192) {
					const t = r[e] - 192;
					return e + 1 + t > r.length && i.throwError("data array too short", o.b.errors.BUFFER_OVERRUN, {}), c(r, e, e + 1, t)
				}
				if (r[e] >= 184) {
					const t = r[e] - 183;
					e + 1 + t > r.length && i.throwError("data array too short", o.b.errors.BUFFER_OVERRUN, {});
					const s = u(r, e + 1, t);
					return e + 1 + t + s > r.length && i.throwError("data array too short", o.b.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t + s,
						result: Object(n.i)(r.slice(e + 1 + t, e + 1 + t + s))
					}
				}
				if (r[e] >= 128) {
					const t = r[e] - 128;
					return e + 1 + t > r.length && i.throwError("data too short", o.b.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t,
						result: Object(n.i)(r.slice(e + 1, e + 1 + t))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(r[e])
				}
			}

			function d(r) {
				const e = Object(n.a)(r),
					t = l(e, 0);
				return t.consumed !== e.length && i.throwArgumentError("invalid rlp data", "data", r), t.result
			}
		},
		"./node_modules/dijkstrajs/dijkstra.js": function(r, e, t) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(r, e, t) {
					var o = {},
						i = {};
					i[e] = 0;
					var s, u, a, c, l, d, f, h = n.PriorityQueue.make();
					for (h.push(e, 0); !h.empty();)
						for (a in u = (s = h.pop()).value, c = s.cost, l = r[u] || {}) l.hasOwnProperty(a) && (d = c + l[a], f = i[a], (void 0 === i[a] || f > d) && (i[a] = d, h.push(a, d), o[a] = u));
					if (void 0 !== t && void 0 === i[t]) {
						var g = ["Could not find a path from ", e, " to ", t, "."].join("");
						throw new Error(g)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(r, e) {
					for (var t = [], n = e; n;) t.push(n), r[n], n = r[n];
					return t.reverse(), t
				},
				find_path: function(r, e, t) {
					var o = n.single_source_shortest_paths(r, e, t);
					return n.extract_shortest_path_from_predecessor_list(o, t)
				},
				PriorityQueue: {
					make: function(r) {
						var e, t = n.PriorityQueue,
							o = {};
						for (e in r = r || {}, t) t.hasOwnProperty(e) && (o[e] = t[e]);
						return o.queue = [], o.sorter = r.sorter || t.default_sorter, o
					},
					default_sorter: function(r, e) {
						return r.cost - e.cost
					},
					push: function(r, e) {
						var t = {
							value: r,
							cost: e
						};
						this.queue.push(t), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			r.exports = n
		},
		"./node_modules/qrcode/lib/browser.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/can-promise.js"),
				o = t("./node_modules/qrcode/lib/core/qrcode.js"),
				i = t("./node_modules/qrcode/lib/renderer/canvas.js"),
				s = t("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function u(r, e, t, i, s) {
				var u = [].slice.call(arguments, 1),
					a = u.length,
					c = "function" == typeof u[a - 1];
				if (!c && !n()) throw new Error("Callback required as last argument");
				if (!c) {
					if (a < 1) throw new Error("Too few arguments provided");
					return 1 === a ? (t = e, e = i = void 0) : 2 !== a || e.getContext || (i = t, t = e, e = void 0), new Promise((function(n, s) {
						try {
							var u = o.create(t, i);
							n(r(u, e, i))
						} catch (a) {
							s(a)
						}
					}))
				}
				if (a < 2) throw new Error("Too few arguments provided");
				2 === a ? (s = t, t = e, e = i = void 0) : 3 === a && (e.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = t, t = e, e = void 0));
				try {
					var l = o.create(t, i);
					s(null, r(l, e, i))
				} catch (d) {
					s(d)
				}
			}
			e.create = o.create, e.toCanvas = u.bind(null, i.render), e.toDataURL = u.bind(null, i.renderToDataURL), e.toString = u.bind(null, (function(r, e, t) {
				return s.render(r, t)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(r, e) {
			r.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			e.getRowColCoords = function(r) {
				if (1 === r) return [];
				for (var e = Math.floor(r / 7) + 2, t = n(r), o = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * e - 2)), i = [t - 7], s = 1; s < e - 1; s++) i[s] = i[s - 1] - o;
				return i.push(6), i.reverse()
			}, e.getPositions = function(r) {
				for (var t = [], n = e.getRowColCoords(r), o = n.length, i = 0; i < o; i++)
					for (var s = 0; s < o; s++) 0 === i && 0 === s || 0 === i && s === o - 1 || i === o - 1 && 0 === s || t.push([n[i], n[s]]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(r) {
				this.mode = n.ALPHANUMERIC, this.data = r
			}
			i.getBitsLength = function(r) {
				return 11 * Math.floor(r / 2) + r % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(r) {
				var e;
				for (e = 0; e + 2 <= this.data.length; e += 2) {
					var t = 45 * o.indexOf(this.data[e]);
					t += o.indexOf(this.data[e + 1]), r.put(t, 11)
				}
				this.data.length % 2 && r.put(o.indexOf(this.data[e]), 6)
			}, r.exports = i
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(r, e) {
			function t() {
				this.buffer = [], this.length = 0
			}
			t.prototype = {
				get: function(r) {
					var e = Math.floor(r / 8);
					return 1 == (this.buffer[e] >>> 7 - r % 8 & 1)
				},
				put: function(r, e) {
					for (var t = 0; t < e; t++) this.putBit(1 == (r >>> e - t - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(r) {
					var e = Math.floor(this.length / 8);
					this.buffer.length <= e && this.buffer.push(0), r && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
				}
			}, r.exports = t
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function o(r) {
				if (!r || r < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = r, this.data = n.alloc(r * r), this.reservedBit = n.alloc(r * r)
			}
			o.prototype.set = function(r, e, t, n) {
				var o = r * this.size + e;
				this.data[o] = t, n && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(r, e) {
				return this.data[r * this.size + e]
			}, o.prototype.xor = function(r, e, t) {
				this.data[r * this.size + e] ^= t
			}, o.prototype.isReserved = function(r, e) {
				return this.reservedBit[r * this.size + e]
			}, r.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/mode.js");

			function i(r) {
				this.mode = o.BYTE, this.data = n.from(r)
			}
			i.getBitsLength = function(r) {
				return 8 * r
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(r) {
				for (var e = 0, t = this.data.length; e < t; e++) r.put(this.data[e], 8)
			}, r.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			e.getBlocksCount = function(r, e) {
				switch (e) {
					case n.L:
						return o[4 * (r - 1) + 0];
					case n.M:
						return o[4 * (r - 1) + 1];
					case n.Q:
						return o[4 * (r - 1) + 2];
					case n.H:
						return o[4 * (r - 1) + 3];
					default:
						return
				}
			}, e.getTotalCodewordsCount = function(r, e) {
				switch (e) {
					case n.L:
						return i[4 * (r - 1) + 0];
					case n.M:
						return i[4 * (r - 1) + 1];
					case n.Q:
						return i[4 * (r - 1) + 2];
					case n.H:
						return i[4 * (r - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/qrcode/lib/core/error-correction-level.js": function(r, e) {
			e.L = {
				bit: 1
			}, e.M = {
				bit: 0
			}, e.Q = {
				bit: 3
			}, e.H = {
				bit: 2
			}, e.isValid = function(r) {
				return r && void 0 !== r.bit && r.bit >= 0 && r.bit < 4
			}, e.from = function(r, t) {
				if (e.isValid(r)) return r;
				try {
					return function(r) {
						if ("string" != typeof r) throw new Error("Param is not a string");
						switch (r.toLowerCase()) {
							case "l":
							case "low":
								return e.L;
							case "m":
							case "medium":
								return e.M;
							case "q":
							case "quartile":
								return e.Q;
							case "h":
							case "high":
								return e.H;
							default:
								throw new Error("Unknown EC Level: " + r)
						}
					}(r)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			e.getPositions = function(r) {
				var e = n(r);
				return [
					[0, 0],
					[e - 7, 0],
					[0, e - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = n.getBCHDigit(1335);
			e.getEncodedBits = function(r, e) {
				for (var t = r.bit << 3 | e, i = t << 10; n.getBCHDigit(i) - o >= 0;) i ^= 1335 << n.getBCHDigit(i) - o;
				return 21522 ^ (t << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				i = n.alloc(256);
			! function() {
				for (var r = 1, e = 0; e < 255; e++) o[e] = r, i[r] = e, 256 & (r <<= 1) && (r ^= 285);
				for (e = 255; e < 512; e++) o[e] = o[e - 255]
			}(), e.log = function(r) {
				if (r < 1) throw new Error("log(" + r + ")");
				return i[r]
			}, e.exp = function(r) {
				return o[r]
			}, e.mul = function(r, e) {
				return 0 === r || 0 === e ? 0 : o[i[r] + i[e]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/utils.js");

			function i(r) {
				this.mode = n.KANJI, this.data = r
			}
			i.getBitsLength = function(r) {
				return 13 * r
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(r) {
				var e;
				for (e = 0; e < this.data.length; e++) {
					var t = o.toSJIS(this.data[e]);
					if (t >= 33088 && t <= 40956) t -= 33088;
					else {
						if (!(t >= 57408 && t <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
						t -= 49472
					}
					t = 192 * (t >>> 8 & 255) + (255 & t), r.put(t, 13)
				}
			}, r.exports = i
		},
		"./node_modules/qrcode/lib/core/mask-pattern.js": function(r, e) {
			e.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			var t = 3,
				n = 3,
				o = 40,
				i = 10;

			function s(r, t, n) {
				switch (r) {
					case e.Patterns.PATTERN000:
						return (t + n) % 2 == 0;
					case e.Patterns.PATTERN001:
						return t % 2 == 0;
					case e.Patterns.PATTERN010:
						return n % 3 == 0;
					case e.Patterns.PATTERN011:
						return (t + n) % 3 == 0;
					case e.Patterns.PATTERN100:
						return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
					case e.Patterns.PATTERN101:
						return t * n % 2 + t * n % 3 == 0;
					case e.Patterns.PATTERN110:
						return (t * n % 2 + t * n % 3) % 2 == 0;
					case e.Patterns.PATTERN111:
						return (t * n % 3 + (t + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + r)
				}
			}
			e.isValid = function(r) {
				return null != r && "" !== r && !isNaN(r) && r >= 0 && r <= 7
			}, e.from = function(r) {
				return e.isValid(r) ? parseInt(r, 10) : void 0
			}, e.getPenaltyN1 = function(r) {
				for (var e = r.size, n = 0, o = 0, i = 0, s = null, u = null, a = 0; a < e; a++) {
					o = i = 0, s = u = null;
					for (var c = 0; c < e; c++) {
						var l = r.get(a, c);
						l === s ? o++ : (o >= 5 && (n += t + (o - 5)), s = l, o = 1), (l = r.get(c, a)) === u ? i++ : (i >= 5 && (n += t + (i - 5)), u = l, i = 1)
					}
					o >= 5 && (n += t + (o - 5)), i >= 5 && (n += t + (i - 5))
				}
				return n
			}, e.getPenaltyN2 = function(r) {
				for (var e = r.size, t = 0, o = 0; o < e - 1; o++)
					for (var i = 0; i < e - 1; i++) {
						var s = r.get(o, i) + r.get(o, i + 1) + r.get(o + 1, i) + r.get(o + 1, i + 1);
						4 !== s && 0 !== s || t++
					}
				return t * n
			}, e.getPenaltyN3 = function(r) {
				for (var e = r.size, t = 0, n = 0, i = 0, s = 0; s < e; s++) {
					n = i = 0;
					for (var u = 0; u < e; u++) n = n << 1 & 2047 | r.get(s, u), u >= 10 && (1488 === n || 93 === n) && t++, i = i << 1 & 2047 | r.get(u, s), u >= 10 && (1488 === i || 93 === i) && t++
				}
				return t * o
			}, e.getPenaltyN4 = function(r) {
				for (var e = 0, t = r.data.length, n = 0; n < t; n++) e += r.data[n];
				return Math.abs(Math.ceil(100 * e / t / 5) - 10) * i
			}, e.applyMask = function(r, e) {
				for (var t = e.size, n = 0; n < t; n++)
					for (var o = 0; o < t; o++) e.isReserved(o, n) || e.xor(o, n, s(r, o, n))
			}, e.getBestMask = function(r, t) {
				for (var n = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, s = 0; s < n; s++) {
					t(s), e.applyMask(s, r);
					var u = e.getPenaltyN1(r) + e.getPenaltyN2(r) + e.getPenaltyN3(r) + e.getPenaltyN4(r);
					e.applyMask(s, r), u < i && (i = u, o = s)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/version-check.js"),
				o = t("./node_modules/qrcode/lib/core/regex.js");
			e.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, e.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, e.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, e.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, e.MIXED = {
				bit: -1
			}, e.getCharCountIndicator = function(r, e) {
				if (!r.ccBits) throw new Error("Invalid mode: " + r);
				if (!n.isValid(e)) throw new Error("Invalid version: " + e);
				return e >= 1 && e < 10 ? r.ccBits[0] : e < 27 ? r.ccBits[1] : r.ccBits[2]
			}, e.getBestModeForData = function(r) {
				return o.testNumeric(r) ? e.NUMERIC : o.testAlphanumeric(r) ? e.ALPHANUMERIC : o.testKanji(r) ? e.KANJI : e.BYTE
			}, e.toString = function(r) {
				if (r && r.id) return r.id;
				throw new Error("Invalid mode")
			}, e.isValid = function(r) {
				return r && r.bit && r.ccBits
			}, e.from = function(r, t) {
				if (e.isValid(r)) return r;
				try {
					return function(r) {
						if ("string" != typeof r) throw new Error("Param is not a string");
						switch (r.toLowerCase()) {
							case "numeric":
								return e.NUMERIC;
							case "alphanumeric":
								return e.ALPHANUMERIC;
							case "kanji":
								return e.KANJI;
							case "byte":
								return e.BYTE;
							default:
								throw new Error("Unknown mode: " + r)
						}
					}(r)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js");

			function o(r) {
				this.mode = n.NUMERIC, this.data = r.toString()
			}
			o.getBitsLength = function(r) {
				return 10 * Math.floor(r / 3) + (r % 3 ? r % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(r) {
				var e, t, n;
				for (e = 0; e + 3 <= this.data.length; e += 3) t = this.data.substr(e, 3), n = parseInt(t, 10), r.put(n, 10);
				var o = this.data.length - e;
				o > 0 && (t = this.data.substr(e), n = parseInt(t, 10), r.put(n, 3 * o + 1))
			}, r.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/galois-field.js");
			e.mul = function(r, e) {
				for (var t = n.alloc(r.length + e.length - 1), i = 0; i < r.length; i++)
					for (var s = 0; s < e.length; s++) t[i + s] ^= o.mul(r[i], e[s]);
				return t
			}, e.mod = function(r, e) {
				for (var t = n.from(r); t.length - e.length >= 0;) {
					for (var i = t[0], s = 0; s < e.length; s++) t[s] ^= o.mul(e[s], i);
					for (var u = 0; u < t.length && 0 === t[u];) u++;
					t = t.slice(u)
				}
				return t
			}, e.generateECPolynomial = function(r) {
				for (var t = n.from([1]), i = 0; i < r; i++) t = e.mul(t, [1, o.exp(i)]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/utils.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/bit-buffer.js"),
				u = t("./node_modules/qrcode/lib/core/bit-matrix.js"),
				a = t("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				c = t("./node_modules/qrcode/lib/core/finder-pattern.js"),
				l = t("./node_modules/qrcode/lib/core/mask-pattern.js"),
				d = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = t("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = t("./node_modules/qrcode/lib/core/version.js"),
				g = t("./node_modules/qrcode/lib/core/format-info.js"),
				m = t("./node_modules/qrcode/lib/core/mode.js"),
				p = t("./node_modules/qrcode/lib/core/segments.js"),
				v = t("./node_modules/qrcode/node_modules/isarray/index.js");

			function b(r, e, t) {
				var n, o, i = r.size,
					s = g.getEncodedBits(e, t);
				for (n = 0; n < 15; n++) o = 1 == (s >> n & 1), n < 6 ? r.set(n, 8, o, !0) : n < 8 ? r.set(n + 1, 8, o, !0) : r.set(i - 15 + n, 8, o, !0), n < 8 ? r.set(8, i - n - 1, o, !0) : n < 9 ? r.set(8, 15 - n - 1 + 1, o, !0) : r.set(8, 15 - n - 1, o, !0);
				r.set(i - 8, 8, 1, !0)
			}

			function E(r, e, t) {
				var i = new s;
				t.forEach((function(e) {
					i.put(e.mode.bit, 4), i.put(e.getLength(), m.getCharCountIndicator(e.mode, r)), e.write(i)
				}));
				var u = 8 * (o.getSymbolTotalCodewords(r) - d.getTotalCodewordsCount(r, e));
				for (i.getLengthInBits() + 4 <= u && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var a = (u - i.getLengthInBits()) / 8, c = 0; c < a; c++) i.put(c % 2 ? 17 : 236, 8);
				return function(r, e, t) {
					for (var i = o.getSymbolTotalCodewords(e), s = d.getTotalCodewordsCount(e, t), u = i - s, a = d.getBlocksCount(e, t), c = a - i % a, l = Math.floor(i / a), h = Math.floor(u / a), g = h + 1, m = l - h, p = new f(m), v = 0, b = new Array(a), E = new Array(a), y = 0, w = n.from(r.buffer), _ = 0; _ < a; _++) {
						var A = _ < c ? h : g;
						b[_] = w.slice(v, v + A), E[_] = p.encode(b[_]), v += A, y = Math.max(y, A)
					}
					var N, R, j = n.alloc(i),
						x = 0;
					for (N = 0; N < y; N++)
						for (R = 0; R < a; R++) N < b[R].length && (j[x++] = b[R][N]);
					for (N = 0; N < m; N++)
						for (R = 0; R < a; R++) j[x++] = E[R][N];
					return j
				}(i, r, e)
			}

			function y(r, e, t, n) {
				var i;
				if (v(r)) i = p.fromArray(r);
				else {
					if ("string" != typeof r) throw new Error("Invalid data");
					var s = e;
					if (!s) {
						var d = p.rawSplit(r);
						s = h.getBestVersionForData(d, t)
					}
					i = p.fromString(r, s || 40)
				}
				var f = h.getBestVersionForData(i, t);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (e) {
					if (e < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else e = f;
				var g = E(e, t, i),
					m = o.getSymbolSize(e),
					y = new u(m);
				return function(r, e) {
						for (var t = r.size, n = c.getPositions(e), o = 0; o < n.length; o++)
							for (var i = n[o][0], s = n[o][1], u = -1; u <= 7; u++)
								if (!(i + u <= -1 || t <= i + u))
									for (var a = -1; a <= 7; a++) s + a <= -1 || t <= s + a || (u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 2 && u <= 4 && a >= 2 && a <= 4 ? r.set(i + u, s + a, !0, !0) : r.set(i + u, s + a, !1, !0))
					}(y, e),
					function(r) {
						for (var e = r.size, t = 8; t < e - 8; t++) {
							var n = t % 2 == 0;
							r.set(t, 6, n, !0), r.set(6, t, n, !0)
						}
					}(y),
					function(r, e) {
						for (var t = a.getPositions(e), n = 0; n < t.length; n++)
							for (var o = t[n][0], i = t[n][1], s = -2; s <= 2; s++)
								for (var u = -2; u <= 2; u++) - 2 === s || 2 === s || -2 === u || 2 === u || 0 === s && 0 === u ? r.set(o + s, i + u, !0, !0) : r.set(o + s, i + u, !1, !0)
					}(y, e), b(y, t, 0), e >= 7 && function(r, e) {
						for (var t, n, o, i = r.size, s = h.getEncodedBits(e), u = 0; u < 18; u++) t = Math.floor(u / 3), n = u % 3 + i - 8 - 3, o = 1 == (s >> u & 1), r.set(t, n, o, !0), r.set(n, t, o, !0)
					}(y, e),
					function(r, e) {
						for (var t = r.size, n = -1, o = t - 1, i = 7, s = 0, u = t - 1; u > 0; u -= 2)
							for (6 === u && u--;;) {
								for (var a = 0; a < 2; a++)
									if (!r.isReserved(o, u - a)) {
										var c = !1;
										s < e.length && (c = 1 == (e[s] >>> i & 1)), r.set(o, u - a, c), -1 === --i && (s++, i = 7)
									} if ((o += n) < 0 || t <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(y, g), isNaN(n) && (n = l.getBestMask(y, b.bind(null, y, t))), l.applyMask(n, y), b(y, t, n), {
						modules: y,
						version: e,
						errorCorrectionLevel: t,
						maskPattern: n,
						segments: i
					}
			}
			e.create = function(r, e) {
				if (void 0 === r || "" === r) throw new Error("No input text");
				var t, n, s = i.M;
				return void 0 !== e && (s = i.from(e.errorCorrectionLevel, i.M), t = h.from(e.version), n = l.from(e.maskPattern), e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)), y(r, t, s, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/polynomial.js"),
				i = t("./node_modules/buffer/index.js").Buffer;

			function s(r) {
				this.genPoly = void 0, this.degree = r, this.degree && this.initialize(this.degree)
			}
			s.prototype.initialize = function(r) {
				this.degree = r, this.genPoly = o.generateECPolynomial(this.degree)
			}, s.prototype.encode = function(r) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var e = n.alloc(this.degree),
					t = i.concat([r, e], r.length + this.degree),
					s = o.mod(t, this.genPoly),
					u = this.degree - s.length;
				if (u > 0) {
					var a = n.alloc(this.degree);
					return s.copy(a, u), a
				}
				return s
			}, r.exports = s
		},
		"./node_modules/qrcode/lib/core/regex.js": function(r, e) {
			var t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (t = t.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			e.KANJI = new RegExp(t, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(n, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + t + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			e.testKanji = function(r) {
				return o.test(r)
			}, e.testNumeric = function(r) {
				return i.test(r)
			}, e.testAlphanumeric = function(r) {
				return s.test(r)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = t("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = t("./node_modules/qrcode/lib/core/byte-data.js"),
				u = t("./node_modules/qrcode/lib/core/kanji-data.js"),
				a = t("./node_modules/qrcode/lib/core/regex.js"),
				c = t("./node_modules/qrcode/lib/core/utils.js"),
				l = t("./node_modules/dijkstrajs/dijkstra.js");

			function d(r) {
				return unescape(encodeURIComponent(r)).length
			}

			function f(r, e, t) {
				for (var n, o = []; null !== (n = r.exec(t));) o.push({
					data: n[0],
					index: n.index,
					mode: e,
					length: n[0].length
				});
				return o
			}

			function h(r) {
				var e, t, o = f(a.NUMERIC, n.NUMERIC, r),
					i = f(a.ALPHANUMERIC, n.ALPHANUMERIC, r);
				return c.isKanjiModeEnabled() ? (e = f(a.BYTE, n.BYTE, r), t = f(a.KANJI, n.KANJI, r)) : (e = f(a.BYTE_KANJI, n.BYTE, r), t = []), o.concat(i, e, t).sort((function(r, e) {
					return r.index - e.index
				})).map((function(r) {
					return {
						data: r.data,
						mode: r.mode,
						length: r.length
					}
				}))
			}

			function g(r, e) {
				switch (e) {
					case n.NUMERIC:
						return o.getBitsLength(r);
					case n.ALPHANUMERIC:
						return i.getBitsLength(r);
					case n.KANJI:
						return u.getBitsLength(r);
					case n.BYTE:
						return s.getBitsLength(r)
				}
			}

			function m(r, e) {
				var t, a = n.getBestModeForData(r);
				if ((t = n.from(e, a)) !== n.BYTE && t.bit < a.bit) throw new Error('"' + r + '" cannot be encoded with mode ' + n.toString(t) + ".\n Suggested mode is: " + n.toString(a));
				switch (t !== n.KANJI || c.isKanjiModeEnabled() || (t = n.BYTE), t) {
					case n.NUMERIC:
						return new o(r);
					case n.ALPHANUMERIC:
						return new i(r);
					case n.KANJI:
						return new u(r);
					case n.BYTE:
						return new s(r)
				}
			}
			e.fromArray = function(r) {
				return r.reduce((function(r, e) {
					return "string" == typeof e ? r.push(m(e, null)) : e.data && r.push(m(e.data, e.mode)), r
				}), [])
			}, e.fromString = function(r, t) {
				for (var o = function(r, e) {
						for (var t = {}, o = {
								start: {}
							}, i = ["start"], s = 0; s < r.length; s++) {
							for (var u = r[s], a = [], c = 0; c < u.length; c++) {
								var l = u[c],
									d = "" + s + c;
								a.push(d), t[d] = {
									node: l,
									lastCount: 0
								}, o[d] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									t[h] && t[h].node.mode === l.mode ? (o[h][d] = g(t[h].lastCount + l.length, l.mode) - g(t[h].lastCount, l.mode), t[h].lastCount += l.length) : (t[h] && (t[h].lastCount = l.length), o[h][d] = g(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, e))
								}
							}
							i = a
						}
						for (f = 0; f < i.length; f++) o[i[f]].end = 0;
						return {
							map: o,
							table: t
						}
					}(function(r) {
						for (var e = [], t = 0; t < r.length; t++) {
							var o = r[t];
							switch (o.mode) {
								case n.NUMERIC:
									e.push([o, {
										data: o.data,
										mode: n.ALPHANUMERIC,
										length: o.length
									}, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.ALPHANUMERIC:
									e.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.KANJI:
									e.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}]);
									break;
								case n.BYTE:
									e.push([{
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}])
							}
						}
						return e
					}(h(r, c.isKanjiModeEnabled())), t), i = l.find_path(o.map, "start", "end"), s = [], u = 1; u < i.length - 1; u++) s.push(o.table[i[u]].node);
				return e.fromArray(function(r) {
					return r.reduce((function(r, e) {
						var t = r.length - 1 >= 0 ? r[r.length - 1] : null;
						return t && t.mode === e.mode ? (r[r.length - 1].data += e.data, r) : (r.push(e), r)
					}), [])
				}(s))
			}, e.rawSplit = function(r) {
				return e.fromArray(h(r, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(r, e) {
			var t, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			e.getSymbolSize = function(r) {
				if (!r) throw new Error('"version" cannot be null or undefined');
				if (r < 1 || r > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * r + 17
			}, e.getSymbolTotalCodewords = function(r) {
				return n[r]
			}, e.getBCHDigit = function(r) {
				for (var e = 0; 0 !== r;) e++, r >>>= 1;
				return e
			}, e.setToSJISFunction = function(r) {
				if ("function" != typeof r) throw new Error('"toSJISFunc" is not a valid function.');
				t = r
			}, e.isKanjiModeEnabled = function() {
				return void 0 !== t
			}, e.toSJIS = function(r) {
				return t(r)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(r, e) {
			e.isValid = function(r) {
				return !isNaN(r) && r >= 1 && r <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/mode.js"),
				u = t("./node_modules/qrcode/lib/core/version-check.js"),
				a = t("./node_modules/qrcode/node_modules/isarray/index.js"),
				c = n.getBCHDigit(7973);

			function l(r, e) {
				return s.getCharCountIndicator(r, e) + 4
			}

			function d(r, e) {
				var t = 0;
				return r.forEach((function(r) {
					var n = l(r.mode, e);
					t += n + r.getBitsLength()
				})), t
			}
			e.from = function(r, e) {
				return u.isValid(r) ? parseInt(r, 10) : e
			}, e.getCapacity = function(r, e, t) {
				if (!u.isValid(r)) throw new Error("Invalid QR Code version");
				void 0 === t && (t = s.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(r) - o.getTotalCodewordsCount(r, e));
				if (t === s.MIXED) return i;
				var a = i - l(t, r);
				switch (t) {
					case s.NUMERIC:
						return Math.floor(a / 10 * 3);
					case s.ALPHANUMERIC:
						return Math.floor(a / 11 * 2);
					case s.KANJI:
						return Math.floor(a / 13);
					case s.BYTE:
					default:
						return Math.floor(a / 8)
				}
			}, e.getBestVersionForData = function(r, t) {
				var n, o = i.from(t, i.M);
				if (a(r)) {
					if (r.length > 1) return function(r, t) {
						for (var n = 1; n <= 40; n++) {
							if (d(r, n) <= e.getCapacity(n, t, s.MIXED)) return n
						}
					}(r, o);
					if (0 === r.length) return 1;
					n = r[0]
				} else n = r;
				return function(r, t, n) {
					for (var o = 1; o <= 40; o++)
						if (t <= e.getCapacity(o, n, r)) return o
				}(n.mode, n.getLength(), o)
			}, e.getEncodedBits = function(r) {
				if (!u.isValid(r) || r < 7) throw new Error("Invalid QR Code version");
				for (var e = r << 12; n.getBCHDigit(e) - c >= 0;) e ^= 7973 << n.getBCHDigit(e) - c;
				return r << 12 | e
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");
			e.render = function(r, e, t) {
				var o = t,
					i = e;
				void 0 !== o || e && e.getContext || (o = e, e = void 0), e || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (r) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var s = n.getImageWidth(r.modules.size, o),
					u = i.getContext("2d"),
					a = u.createImageData(s, s);
				return n.qrToImageData(a.data, r, o),
					function(r, e, t) {
						r.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = t, e.width = t, e.style.height = t + "px", e.style.width = t + "px"
					}(u, i, s), u.putImageData(a, 0, 0), i
			}, e.renderToDataURL = function(r, t, n) {
				var o = n;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), o || (o = {});
				var i = e.render(r, t, o),
					s = o.type || "image/png",
					u = o.rendererOpts || {};
				return i.toDataURL(s, u.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(r, e, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");

			function o(r, e) {
				var t = r.a / 255,
					n = e + '="' + r.hex + '"';
				return t < 1 ? n + " " + e + '-opacity="' + t.toFixed(2).slice(1) + '"' : n
			}

			function i(r, e, t) {
				var n = r + e;
				return void 0 !== t && (n += " " + t), n
			}
			e.render = function(r, e, t) {
				var s = n.getOptions(e),
					u = r.modules.size,
					a = r.modules.data,
					c = u + 2 * s.margin,
					l = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					d = "<path " + o(s.color.dark, "stroke") + ' d="' + function(r, e, t) {
						for (var n = "", o = 0, s = !1, u = 0, a = 0; a < r.length; a++) {
							var c = Math.floor(a % e),
								l = Math.floor(a / e);
							c || s || (s = !0), r[a] ? (u++, a > 0 && c > 0 && r[a - 1] || (n += s ? i("M", c + t, .5 + l + t) : i("m", o, 0), o = 0, s = !1), c + 1 < e && r[a + 1] || (n += i("h", u), u = 0)) : o++
						}
						return n
					}(a, u, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + c + " " + c + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + d + "</svg>\n";
				return "function" == typeof t && t(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(r, e) {
			function t(r) {
				if ("number" == typeof r && (r = r.toString()), "string" != typeof r) throw new Error("Color should be defined as hex string");
				var e = r.slice().replace("#", "").split("");
				if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + r);
				3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(r) {
					return [r, r]
				})))), 6 === e.length && e.push("F", "F");
				var t = parseInt(e.join(""), 16);
				return {
					r: t >> 24 & 255,
					g: t >> 16 & 255,
					b: t >> 8 & 255,
					a: 255 & t,
					hex: "#" + e.slice(0, 6).join("")
				}
			}
			e.getOptions = function(r) {
				r || (r = {}), r.color || (r.color = {});
				var e = void 0 === r.margin || null === r.margin || r.margin < 0 ? 4 : r.margin,
					n = r.width && r.width >= 21 ? r.width : void 0,
					o = r.scale || 4;
				return {
					width: n,
					scale: n ? 4 : o,
					margin: e,
					color: {
						dark: t(r.color.dark || "#000000ff"),
						light: t(r.color.light || "#ffffffff")
					},
					type: r.type,
					rendererOpts: r.rendererOpts || {}
				}
			}, e.getScale = function(r, e) {
				return e.width && e.width >= r + 2 * e.margin ? e.width / (r + 2 * e.margin) : e.scale
			}, e.getImageWidth = function(r, t) {
				var n = e.getScale(r, t);
				return Math.floor((r + 2 * t.margin) * n)
			}, e.qrToImageData = function(r, t, n) {
				for (var o = t.modules.size, i = t.modules.data, s = e.getScale(o, n), u = Math.floor((o + 2 * n.margin) * s), a = n.margin * s, c = [n.color.light, n.color.dark], l = 0; l < u; l++)
					for (var d = 0; d < u; d++) {
						var f = 4 * (l * u + d),
							h = n.color.light;
						if (l >= a && d >= a && l < u - a && d < u - a) h = c[i[Math.floor((l - a) / s) * o + Math.floor((d - a) / s)] ? 1 : 0];
						r[f++] = h.r, r[f++] = h.g, r[f++] = h.b, r[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(r, e, t) {
			"use strict";
			var n = t("./node_modules/qrcode/node_modules/isarray/index.js");
			i.TYPED_ARRAY_SUPPORT = function() {
				try {
					var r = new Uint8Array(1);
					return r.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === r.foo()
				} catch (e) {
					return !1
				}
			}();
			var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(r, e, t) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof r ? a(this, r) : function(r, e, t, n) {
					if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(r, e, t, n) {
						if (t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
						if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = c(r, o);
						return o
					}(r, e, t, n);
					if ("string" == typeof e) return function(r, e) {
						var t = 0 | d(e),
							n = u(r, t),
							o = n.write(e);
						o !== t && (n = n.slice(0, o));
						return n
					}(r, e);
					return function(r, e) {
						if (i.isBuffer(e)) {
							var t = 0 | s(e.length),
								n = u(r, t);
							return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
						}
						if (e) {
							if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (o = e.length) != o ? u(r, 0) : c(r, e);
							if ("Buffer" === e.type && Array.isArray(e.data)) return c(r, e.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(r, e)
				}(this, r, e, t) : new i(r, e, t)
			}

			function s(r) {
				if (r >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | r
			}

			function u(r, e) {
				var t;
				return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = i.prototype : (null === (t = r) && (t = new i(e)), t.length = e), t
			}

			function a(r, e) {
				var t = u(r, e < 0 ? 0 : 0 | s(e));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < e; ++n) t[n] = 0;
				return t
			}

			function c(r, e) {
				for (var t = e.length < 0 ? 0 : 0 | s(e.length), n = u(r, t), o = 0; o < t; o += 1) n[o] = 255 & e[o];
				return n
			}

			function l(r, e) {
				var t;
				e = e || 1 / 0;
				for (var n = r.length, o = null, i = [], s = 0; s < n; ++s) {
					if ((t = r.charCodeAt(s)) > 55295 && t < 57344) {
						if (!o) {
							if (t > 56319) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === n) {
								(e -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = t;
							continue
						}
						if (t < 56320) {
							(e -= 3) > -1 && i.push(239, 191, 189), o = t;
							continue
						}
						t = 65536 + (o - 55296 << 10 | t - 56320)
					} else o && (e -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, t < 128) {
						if ((e -= 1) < 0) break;
						i.push(t)
					} else if (t < 2048) {
						if ((e -= 2) < 0) break;
						i.push(t >> 6 | 192, 63 & t | 128)
					} else if (t < 65536) {
						if ((e -= 3) < 0) break;
						i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
					} else {
						if (!(t < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
					}
				}
				return i
			}

			function d(r) {
				return i.isBuffer(r) ? r.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(r) || r instanceof ArrayBuffer) ? r.byteLength : ("string" != typeof r && (r = "" + r), 0 === r.length ? 0 : l(r).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(r, e, t) {
				void 0 === e ? (t = this.length, e = 0) : void 0 === t && "string" == typeof e ? (t = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(t) ? t |= 0 : t = void 0);
				var n = this.length - e;
				if ((void 0 === t || t > n) && (t = n), r.length > 0 && (t < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(r, e, t, n) {
					return function(r, e, t, n) {
						for (var o = 0; o < n && !(o + t >= e.length || o >= r.length); ++o) e[o + t] = r[o];
						return o
					}(l(e, r.length - t), r, t, n)
				}(this, r, e, t)
			}, i.prototype.slice = function(r, e) {
				var t, n = this.length;
				if ((r = ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < r && (e = r), i.TYPED_ARRAY_SUPPORT)(t = this.subarray(r, e)).__proto__ = i.prototype;
				else {
					var o = e - r;
					t = new i(o, void 0);
					for (var s = 0; s < o; ++s) t[s] = this[s + r]
				}
				return t
			}, i.prototype.copy = function(r, e, t, n) {
				if (t || (t = 0), n || 0 === n || (n = this.length), e >= r.length && (e = r.length), e || (e = 0), n > 0 && n < t && (n = t), n === t) return 0;
				if (0 === r.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), r.length - e < n - t && (n = r.length - e + t);
				var o, s = n - t;
				if (this === r && t < e && e < n)
					for (o = s - 1; o >= 0; --o) r[o + e] = this[o + t];
				else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < s; ++o) r[o + e] = this[o + t];
				else Uint8Array.prototype.set.call(r, this.subarray(t, t + s), e);
				return s
			}, i.prototype.fill = function(r, e, t) {
				if ("string" == typeof r) {
					if ("string" == typeof e ? (e = 0, t = this.length) : "string" == typeof t && (t = this.length), 1 === r.length) {
						var n = r.charCodeAt(0);
						n < 256 && (r = n)
					}
				} else "number" == typeof r && (r &= 255);
				if (e < 0 || this.length < e || this.length < t) throw new RangeError("Out of range index");
				if (t <= e) return this;
				var o;
				if (e >>>= 0, t = void 0 === t ? this.length : t >>> 0, r || (r = 0), "number" == typeof r)
					for (o = e; o < t; ++o) this[o] = r;
				else {
					var s = i.isBuffer(r) ? r : new i(r),
						u = s.length;
					for (o = 0; o < t - e; ++o) this[o + e] = s[o % u]
				}
				return this
			}, i.concat = function(r, e) {
				if (!n(r)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === r.length) return u(null, 0);
				var t;
				if (void 0 === e)
					for (e = 0, t = 0; t < r.length; ++t) e += r[t].length;
				var o = a(null, e),
					s = 0;
				for (t = 0; t < r.length; ++t) {
					var c = r[t];
					if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
					c.copy(o, s), s += c.length
				}
				return o
			}, i.byteLength = d, i.prototype._isBuffer = !0, i.isBuffer = function(r) {
				return !(null == r || !r._isBuffer)
			}, r.exports.alloc = function(r) {
				var e = new i(r);
				return e.fill(0), e
			}, r.exports.from = function(r) {
				return new i(r)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(r, e) {
			var t = {}.toString;
			r.exports = Array.isArray || function(r) {
				return "[object Array]" == t.call(r)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-SubscriptionModal.3f8bca14b3d46b4ba7d0.js.map