// https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033.6dda1e61f320e3163721.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033", "CryptoLibEthers", "vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal", "vendors~reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./node_modules/@ethersproject/address/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return h
			})), t.d(r, "e", (function() {
				return g
			})), t.d(r, "d", (function() {
				return m
			})), t.d(r, "b", (function() {
				return p
			})), t.d(r, "c", (function() {
				return v
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				i = t("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/rlp/lib.esm/index.js");
			const u = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("address/5.4.0");

			function a(e) {
				Object(n.l)(e, 20) || u.throwArgumentError("invalid address", "address", e);
				const r = (e = e.toLowerCase()).substring(2).split(""),
					t = new Uint8Array(40);
				for (let n = 0; n < 40; n++) t[n] = r[n].charCodeAt(0);
				const o = Object(n.a)(Object(i.a)(t));
				for (let n = 0; n < 40; n += 2) o[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()), (15 & o[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
				return "0x" + r.join("")
			}
			const c = {};
			for (let b = 0; b < 10; b++) c[String(b)] = String(b);
			for (let b = 0; b < 26; b++) c[String.fromCharCode(65 + b)] = String(10 + b);
			const l = Math.floor((d = 9007199254740991, Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10));
			var d;

			function f(e) {
				let r = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => c[e]).join("");
				for (; r.length >= l;) {
					let e = r.substring(0, l);
					r = parseInt(e, 10) % 97 + r.substring(e.length)
				}
				let t = String(98 - parseInt(r, 10) % 97);
				for (; t.length < 2;) t = "0" + t;
				return t
			}

			function h(e) {
				let r = null;
				if ("string" != typeof e && u.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), r = a(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== e && u.throwArgumentError("bad address checksum", "address", e);
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== f(e) && u.throwArgumentError("bad icap checksum", "address", e), r = Object(o.c)(e.substring(4)); r.length < 40;) r = "0" + r;
					r = a("0x" + r)
				} else u.throwArgumentError("invalid address", "address", e);
				return r
			}

			function g(e) {
				try {
					return h(e), !0
				} catch (r) {}
				return !1
			}

			function m(e) {
				let r = Object(o.b)(h(e).substring(2)).toUpperCase();
				for (; r.length < 30;) r = "0" + r;
				return "XE" + f("XE00" + r) + r
			}

			function p(e) {
				let r = null;
				try {
					r = h(e.from)
				} catch (a) {
					u.throwArgumentError("missing from address", "transaction", e)
				}
				const t = Object(n.o)(Object(n.a)(o.a.from(e.nonce).toHexString()));
				return h(Object(n.e)(Object(i.a)(Object(s.encode)([r, t])), 12))
			}

			function v(e, r, t) {
				return 32 !== Object(n.d)(r) && u.throwArgumentError("salt must be 32 bytes", "salt", r), 32 !== Object(n.d)(t) && u.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t), h(Object(n.e)(Object(i.a)(Object(n.b)(["0xff", h(e), r, t])), 12))
			}
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/_version.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return n
			}));
			const n = "bignumber/5.4.0"
		},
		"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js": function(e, r, t) {
			"use strict";
			t.d(r, "d", (function() {
				return f
			})), t.d(r, "a", (function() {
				return g
			})), t.d(r, "c", (function() {
				return E
			})), t.d(r, "b", (function() {
				return y
			}));
			var n = t("./node_modules/bn.js/lib/bn.js"),
				o = t.n(n),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				s = t("./node_modules/@ethersproject/logger/lib.esm/index.js"),
				u = t("./node_modules/@ethersproject/bignumber/lib.esm/_version.js"),
				a = o.a.BN;
			const c = new s.a(u.a),
				l = {},
				d = 9007199254740991;

			function f(e) {
				return null != e && (g.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || Object(i.l)(e) || "bigint" == typeof e || Object(i.j)(e))
			}
			let h = !1;
			class g {
				constructor(e, r) {
					c.checkNew(new.target, g), e !== l && c.throwError("cannot call constructor directly; use BigNumber.from", s.a.errors.UNSUPPORTED_OPERATION, {
						operation: "new (BigNumber)"
					}), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
				}
				fromTwos(e) {
					return p(v(this).fromTwos(e))
				}
				toTwos(e) {
					return p(v(this).toTwos(e))
				}
				abs() {
					return "-" === this._hex[0] ? g.from(this._hex.substring(1)) : this
				}
				add(e) {
					return p(v(this).add(v(e)))
				}
				sub(e) {
					return p(v(this).sub(v(e)))
				}
				div(e) {
					return g.from(e).isZero() && b("division by zero", "div"), p(v(this).div(v(e)))
				}
				mul(e) {
					return p(v(this).mul(v(e)))
				}
				mod(e) {
					const r = v(e);
					return r.isNeg() && b("cannot modulo negative values", "mod"), p(v(this).umod(r))
				}
				pow(e) {
					const r = v(e);
					return r.isNeg() && b("cannot raise to negative values", "pow"), p(v(this).pow(r))
				}
				and(e) {
					const r = v(e);
					return (this.isNegative() || r.isNeg()) && b("cannot 'and' negative values", "and"), p(v(this).and(r))
				}
				or(e) {
					const r = v(e);
					return (this.isNegative() || r.isNeg()) && b("cannot 'or' negative values", "or"), p(v(this).or(r))
				}
				xor(e) {
					const r = v(e);
					return (this.isNegative() || r.isNeg()) && b("cannot 'xor' negative values", "xor"), p(v(this).xor(r))
				}
				mask(e) {
					return (this.isNegative() || e < 0) && b("cannot mask negative values", "mask"), p(v(this).maskn(e))
				}
				shl(e) {
					return (this.isNegative() || e < 0) && b("cannot shift negative values", "shl"), p(v(this).shln(e))
				}
				shr(e) {
					return (this.isNegative() || e < 0) && b("cannot shift negative values", "shr"), p(v(this).shrn(e))
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
						b("overflow", "toNumber", this.toString())
					}
					return null
				}
				toBigInt() {
					try {
						return BigInt(this.toString())
					} catch (e) {}
					return c.throwError("this platform does not support BigInt", s.a.errors.UNSUPPORTED_OPERATION, {
						value: this.toString()
					})
				}
				toString() {
					return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0, c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.a.errors.UNEXPECTED_ARGUMENT, {}) : c.throwError("BigNumber.toString does not accept parameters", s.a.errors.UNEXPECTED_ARGUMENT, {})), v(this).toString(10)
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
					if (e instanceof g) return e;
					if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new g(l, m(e)) : e.match(/^-?[0-9]+$/) ? new g(l, m(new a(e))) : c.throwArgumentError("invalid BigNumber string", "value", e);
					if ("number" == typeof e) return e % 1 && b("underflow", "BigNumber.from", e), (e >= d || e <= -d) && b("overflow", "BigNumber.from", e), g.from(String(e));
					const r = e;
					if ("bigint" == typeof r) return g.from(r.toString());
					if (Object(i.j)(r)) return g.from(Object(i.i)(r));
					if (r)
						if (r.toHexString) {
							const e = r.toHexString();
							if ("string" == typeof e) return g.from(e)
						} else {
							let e = r._hex;
							if (null == e && "BigNumber" === r.type && (e = r.hex), "string" == typeof e && (Object(i.l)(e) || "-" === e[0] && Object(i.l)(e.substring(1)))) return g.from(e)
						} return c.throwArgumentError("invalid BigNumber value", "value", e)
				}
				static isBigNumber(e) {
					return !(!e || !e._isBigNumber)
				}
			}

			function m(e) {
				if ("string" != typeof e) return m(e.toString(16));
				if ("-" === e[0]) return "-" === (e = e.substring(1))[0] && c.throwArgumentError("invalid hex", "value", e), "0x00" === (e = m(e)) ? e : "-" + e;
				if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
				for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
				return e
			}

			function p(e) {
				return g.from(m(e))
			}

			function v(e) {
				const r = g.from(e).toHexString();
				return "-" === r[0] ? new a("-" + r.substring(3), 16) : new a(r.substring(2), 16)
			}

			function b(e, r, t) {
				const n = {
					fault: e,
					operation: r
				};
				return null != t && (n.value = t), c.throwError(e, s.a.errors.NUMERIC_FAULT, n)
			}

			function E(e) {
				return new a(e, 36).toString(16)
			}

			function y(e) {
				return new a(e, 16).toString(36)
			}
		},
		"./node_modules/@ethersproject/bytes/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "k", (function() {
				return s
			})), t.d(r, "j", (function() {
				return u
			})), t.d(r, "a", (function() {
				return a
			})), t.d(r, "b", (function() {
				return c
			})), t.d(r, "o", (function() {
				return l
			})), t.d(r, "p", (function() {
				return d
			})), t.d(r, "l", (function() {
				return f
			})), t.d(r, "i", (function() {
				return g
			})), t.d(r, "d", (function() {
				return m
			})), t.d(r, "e", (function() {
				return p
			})), t.d(r, "c", (function() {
				return v
			})), t.d(r, "g", (function() {
				return b
			})), t.d(r, "f", (function() {
				return E
			})), t.d(r, "h", (function() {
				return y
			})), t.d(r, "n", (function() {
				return w
			})), t.d(r, "m", (function() {
				return _
			}));
			const n = new(t("./node_modules/@ethersproject/logger/lib.esm/index.js").a)("bytes/5.4.0");

			function o(e) {
				return !!e.toHexString
			}

			function i(e) {
				return e.slice ? e : (e.slice = function() {
					const r = Array.prototype.slice.call(arguments);
					return i(new Uint8Array(Array.prototype.slice.apply(e, r)))
				}, e)
			}

			function s(e) {
				return f(e) && !(e.length % 2) || u(e)
			}

			function u(e) {
				if (null == e) return !1;
				if (e.constructor === Uint8Array) return !0;
				if ("string" == typeof e) return !1;
				if (null == e.length) return !1;
				for (let r = 0; r < e.length; r++) {
					const t = e[r];
					if ("number" != typeof t || t < 0 || t >= 256 || t % 1) return !1
				}
				return !0
			}

			function a(e, r) {
				if (r || (r = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid arrayify value");
					const r = [];
					for (; e;) r.unshift(255 & e), e = parseInt(String(e / 256));
					return 0 === r.length && r.push(0), i(new Uint8Array(r))
				}
				if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e) && (e = e.toHexString()), f(e)) {
					let t = e.substring(2);
					t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
					const o = [];
					for (let e = 0; e < t.length; e += 2) o.push(parseInt(t.substring(e, e + 2), 16));
					return i(new Uint8Array(o))
				}
				return u(e) ? i(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
			}

			function c(e) {
				const r = e.map(e => a(e)),
					t = r.reduce((e, r) => e + r.length, 0),
					n = new Uint8Array(t);
				return r.reduce((e, r) => (n.set(r, e), e + r.length), 0), i(n)
			}

			function l(e) {
				let r = a(e);
				if (0 === r.length) return r;
				let t = 0;
				for (; t < r.length && 0 === r[t];) t++;
				return t && (r = r.slice(t)), r
			}

			function d(e, r) {
				(e = a(e)).length > r && n.throwArgumentError("value out of range", "value", arguments[0]);
				const t = new Uint8Array(r);
				return t.set(e, r - e.length), i(t)
			}

			function f(e, r) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
			}
			const h = "0123456789abcdef";

			function g(e, r) {
				if (r || (r = {}), "number" == typeof e) {
					n.checkSafeUint53(e, "invalid hexlify value");
					let r = "";
					for (; e;) r = h[15 & e] + r, e = Math.floor(e / 16);
					return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
				}
				if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
				if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e)) return e.toHexString();
				if (f(e)) return e.length % 2 && ("left" === r.hexPad ? e = "0x0" + e.substring(2) : "right" === r.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
				if (u(e)) {
					let r = "0x";
					for (let t = 0; t < e.length; t++) {
						let n = e[t];
						r += h[(240 & n) >> 4] + h[15 & n]
					}
					return r
				}
				return n.throwArgumentError("invalid hexlify value", "value", e)
			}

			function m(e) {
				if ("string" != typeof e) e = g(e);
				else if (!f(e) || e.length % 2) return null;
				return (e.length - 2) / 2
			}

			function p(e, r, t) {
				return "string" != typeof e ? e = g(e) : (!f(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e), r = 2 + 2 * r, null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
			}

			function v(e) {
				let r = "0x";
				return e.forEach(e => {
					r += g(e).substring(2)
				}), r
			}

			function b(e) {
				const r = E(g(e, {
					hexPad: "left"
				}));
				return "0x" === r ? "0x0" : r
			}

			function E(e) {
				"string" != typeof e && (e = g(e)), f(e) || n.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
				let r = 0;
				for (; r < e.length && "0" === e[r];) r++;
				return "0x" + e.substring(r)
			}

			function y(e, r) {
				for ("string" != typeof e ? e = g(e) : f(e) || n.throwArgumentError("invalid hex string", "value", e), e.length > 2 * r + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * r + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function w(e) {
				const r = {
					r: "0x",
					s: "0x",
					_vs: "0x",
					recoveryParam: 0,
					v: 0
				};
				if (s(e)) {
					const t = a(e);
					65 !== t.length && n.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e), r.r = g(t.slice(0, 32)), r.s = g(t.slice(32, 64)), r.v = t[64], r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (t[32] |= 128), r._vs = g(t.slice(32, 64))
				} else {
					if (r.r = e.r, r.s = e.s, r.v = e.v, r.recoveryParam = e.recoveryParam, r._vs = e._vs, null != r._vs) {
						const t = d(a(r._vs), 32);
						r._vs = g(t);
						const o = t[0] >= 128 ? 1 : 0;
						null == r.recoveryParam ? r.recoveryParam = o : r.recoveryParam !== o && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), t[0] &= 127;
						const i = g(t);
						null == r.s ? r.s = i : r.s !== i && n.throwArgumentError("signature v mismatch _vs", "signature", e)
					}
					null == r.recoveryParam ? null == r.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2 : null == r.v ? r.v = 27 + r.recoveryParam : r.recoveryParam !== 1 - r.v % 2 && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e), null != r.r && f(r.r) ? r.r = y(r.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e), null != r.s && f(r.s) ? r.s = y(r.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
					const t = a(r.s);
					t[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e), r.recoveryParam && (t[0] |= 128);
					const o = g(t);
					r._vs && (f(r._vs) || n.throwArgumentError("signature invalid _vs", "signature", e), r._vs = y(r._vs, 32)), null == r._vs ? r._vs = o : r._vs !== o && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
				}
				return r
			}

			function _(e) {
				return g(c([(e = w(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/@ethersproject/keccak256/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return s
			}));
			var n = t("./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js"),
				o = t.n(n),
				i = t("./node_modules/@ethersproject/bytes/lib.esm/index.js");

			function s(e) {
				return "0x" + o.a.keccak_256(Object(i.a)(e))
			}
		},
		"./node_modules/@ethersproject/keccak256/node_modules/js-sha3/src/sha3.js": function(e, r, t) {
			(function(r, t) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof r && r.versions && r.versions.node && (n = t);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, i = "0123456789abcdef".split(""), s = [0, 8, 16, 24], u = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], a = [224, 256, 384, 512], c = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, r, t) {
							return function(n) {
								return new w(e, r, e).update(n)[t]()
							}
						}, d = function(e, r, t) {
							return function(n, o) {
								return new w(e, r, o).update(n)[t]()
							}
						}, f = function(e, r) {
							var t = l(e, r, "hex");
							t.create = function() {
								return new w(e, r, e)
							}, t.update = function(e) {
								return t.create().update(e)
							};
							for (var n = 0; n < c.length; ++n) {
								var o = c[n];
								t[o] = l(e, r, o)
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
							createMethod: function(e, r) {
								var t = d(e, r, "hex");
								t.create = function(t) {
									return new w(e, r, t)
								}, t.update = function(e, r) {
									return t.create(r).update(e)
								};
								for (var n = 0; n < c.length; ++n) {
									var o = c[n];
									t[o] = d(e, r, o)
								}
								return t
							}
						}], g = {}, m = [], p = 0; p < h.length; ++p)
						for (var v = h[p], b = v.bits, E = 0; E < b.length; ++E) {
							var y = v.name + "_" + b[E];
							m.push(y), g[y] = v.createMethod(b[E], v.padding)
						}

					function w(e, r, t) {
						this.blocks = [], this.s = [], this.padding = r, this.outputBits = t, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = t >> 5, this.extraBytes = (31 & t) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					w.prototype.update = function(e) {
						var r = "string" != typeof e;
						r && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var t, n, o = e.length, i = this.blocks, u = this.byteCount, a = this.blockCount, c = 0, l = this.s; c < o;) {
							if (this.reset)
								for (this.reset = !1, i[0] = this.block, t = 1; t < a + 1; ++t) i[t] = 0;
							if (r)
								for (t = this.start; c < o && t < u; ++c) i[t >> 2] |= e[c] << s[3 & t++];
							else
								for (t = this.start; c < o && t < u; ++c)(n = e.charCodeAt(c)) < 128 ? i[t >> 2] |= n << s[3 & t++] : n < 2048 ? (i[t >> 2] |= (192 | n >> 6) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]) : n < 55296 || n >= 57344 ? (i[t >> 2] |= (224 | n >> 12) << s[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++c)), i[t >> 2] |= (240 | n >> 18) << s[3 & t++], i[t >> 2] |= (128 | n >> 12 & 63) << s[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << s[3 & t++], i[t >> 2] |= (128 | 63 & n) << s[3 & t++]);
							if (this.lastByteIndex = t, t >= u) {
								for (this.start = t - u, this.block = i[a], t = 0; t < a; ++t) l[t] ^= i[t];
								_(l), this.reset = !0
							} else this.start = t
						}
						return this
					}, w.prototype.finalize = function() {
						var e = this.blocks,
							r = this.lastByteIndex,
							t = this.blockCount,
							n = this.s;
						if (e[r >> 2] |= this.padding[3 & r], this.lastByteIndex === this.byteCount)
							for (e[0] = e[t], r = 1; r < t + 1; ++r) e[r] = 0;
						for (e[t - 1] |= 2147483648, r = 0; r < t; ++r) n[r] ^= e[r];
						_(n)
					}, w.prototype.toString = w.prototype.hex = function() {
						this.finalize();
						for (var e, r = this.blockCount, t = this.s, n = this.outputBlocks, o = this.extraBytes, s = 0, u = 0, a = ""; u < n;) {
							for (s = 0; s < r && u < n; ++s, ++u) e = t[s], a += i[e >> 4 & 15] + i[15 & e] + i[e >> 12 & 15] + i[e >> 8 & 15] + i[e >> 20 & 15] + i[e >> 16 & 15] + i[e >> 28 & 15] + i[e >> 24 & 15];
							u % r == 0 && (_(t), s = 0)
						}
						return o && (e = t[s], o > 0 && (a += i[e >> 4 & 15] + i[15 & e]), o > 1 && (a += i[e >> 12 & 15] + i[e >> 8 & 15]), o > 2 && (a += i[e >> 20 & 15] + i[e >> 16 & 15])), a
					}, w.prototype.arrayBuffer = function() {
						this.finalize();
						var e, r = this.blockCount,
							t = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							i = 0,
							s = 0,
							u = this.outputBits >> 3;
						e = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(u);
						for (var a = new Uint32Array(e); s < n;) {
							for (i = 0; i < r && s < n; ++i, ++s) a[s] = t[i];
							s % r == 0 && _(t)
						}
						return o && (a[i] = t[i], e = e.slice(0, u)), e
					}, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
						this.finalize();
						for (var e, r, t = this.blockCount, n = this.s, o = this.outputBlocks, i = this.extraBytes, s = 0, u = 0, a = []; u < o;) {
							for (s = 0; s < t && u < o; ++s, ++u) e = u << 2, r = n[s], a[e] = 255 & r, a[e + 1] = r >> 8 & 255, a[e + 2] = r >> 16 & 255, a[e + 3] = r >> 24 & 255;
							u % t == 0 && _(n)
						}
						return i && (e = u << 2, r = n[s], i > 0 && (a[e] = 255 & r), i > 1 && (a[e + 1] = r >> 8 & 255), i > 2 && (a[e + 2] = r >> 16 & 255)), a
					};
					var _ = function(e) {
						var r, t, n, o, i, s, a, c, l, d, f, h, g, m, p, v, b, E, y, w, _, A, N, R, j, x, P, B, T, C, I, S, U, O, M, k, L, q, D, F, z, H, Y, K, V, G, J, X, $, W, Q, Z, ee, re, te, ne, oe, ie, se, ue, ae, ce, le;
						for (n = 0; n < 48; n += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], r = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | a >>> 31), t = (g = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (a << 1 | s >>> 31), e[0] ^= r, e[1] ^= t, e[10] ^= r, e[11] ^= t, e[20] ^= r, e[21] ^= t, e[30] ^= r, e[31] ^= t, e[40] ^= r, e[41] ^= t, r = o ^ (c << 1 | l >>> 31), t = i ^ (l << 1 | c >>> 31), e[2] ^= r, e[3] ^= t, e[12] ^= r, e[13] ^= t, e[22] ^= r, e[23] ^= t, e[32] ^= r, e[33] ^= t, e[42] ^= r, e[43] ^= t, r = s ^ (d << 1 | f >>> 31), t = a ^ (f << 1 | d >>> 31), e[4] ^= r, e[5] ^= t, e[14] ^= r, e[15] ^= t, e[24] ^= r, e[25] ^= t, e[34] ^= r, e[35] ^= t, e[44] ^= r, e[45] ^= t, r = c ^ (h << 1 | g >>> 31), t = l ^ (g << 1 | h >>> 31), e[6] ^= r, e[7] ^= t, e[16] ^= r, e[17] ^= t, e[26] ^= r, e[27] ^= t, e[36] ^= r, e[37] ^= t, e[46] ^= r, e[47] ^= t, r = d ^ (o << 1 | i >>> 31), t = f ^ (i << 1 | o >>> 31), e[8] ^= r, e[9] ^= t, e[18] ^= r, e[19] ^= t, e[28] ^= r, e[29] ^= t, e[38] ^= r, e[39] ^= t, e[48] ^= r, e[49] ^= t, m = e[0], p = e[1], G = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, B = e[20] << 3 | e[21] >>> 29, T = e[21] << 3 | e[20] >>> 29, ue = e[31] << 9 | e[30] >>> 23, ae = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, Y = e[41] << 18 | e[40] >>> 14, O = e[2] << 1 | e[3] >>> 31, M = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, b = e[12] << 12 | e[13] >>> 20, X = e[22] << 10 | e[23] >>> 22, $ = e[23] << 10 | e[22] >>> 22, C = e[33] << 13 | e[32] >>> 19, I = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, re = e[5] << 30 | e[4] >>> 2, te = e[4] << 30 | e[5] >>> 2, k = e[14] << 6 | e[15] >>> 26, L = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, y = e[24] << 11 | e[25] >>> 21, W = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, S = e[45] << 29 | e[44] >>> 3, U = e[44] << 29 | e[45] >>> 3, R = e[6] << 28 | e[7] >>> 4, j = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, q = e[26] << 25 | e[27] >>> 7, D = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, _ = e[37] << 21 | e[36] >>> 11, Z = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, K = e[8] << 27 | e[9] >>> 5, V = e[9] << 27 | e[8] >>> 5, x = e[18] << 20 | e[19] >>> 12, P = e[19] << 20 | e[18] >>> 12, ie = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, F = e[38] << 8 | e[39] >>> 24, z = e[39] << 8 | e[38] >>> 24, A = e[48] << 14 | e[49] >>> 18, N = e[49] << 14 | e[48] >>> 18, e[0] = m ^ ~v & E, e[1] = p ^ ~b & y, e[10] = R ^ ~x & B, e[11] = j ^ ~P & T, e[20] = O ^ ~k & q, e[21] = M ^ ~L & D, e[30] = K ^ ~G & X, e[31] = V ^ ~J & $, e[40] = re ^ ~ne & ie, e[41] = te ^ ~oe & se, e[2] = v ^ ~E & w, e[3] = b ^ ~y & _, e[12] = x ^ ~B & C, e[13] = P ^ ~T & I, e[22] = k ^ ~q & F, e[23] = L ^ ~D & z, e[32] = G ^ ~X & W, e[33] = J ^ ~$ & Q, e[42] = ne ^ ~ie & ue, e[43] = oe ^ ~se & ae, e[4] = E ^ ~w & A, e[5] = y ^ ~_ & N, e[14] = B ^ ~C & S, e[15] = T ^ ~I & U, e[24] = q ^ ~F & H, e[25] = D ^ ~z & Y, e[34] = X ^ ~W & Z, e[35] = $ ^ ~Q & ee, e[44] = ie ^ ~ue & ce, e[45] = se ^ ~ae & le, e[6] = w ^ ~A & m, e[7] = _ ^ ~N & p, e[16] = C ^ ~S & R, e[17] = I ^ ~U & j, e[26] = F ^ ~H & O, e[27] = z ^ ~Y & M, e[36] = W ^ ~Z & K, e[37] = Q ^ ~ee & V, e[46] = ue ^ ~ce & re, e[47] = ae ^ ~le & te, e[8] = A ^ ~m & v, e[9] = N ^ ~p & b, e[18] = S ^ ~R & x, e[19] = U ^ ~j & P, e[28] = H ^ ~O & k, e[29] = Y ^ ~M & L, e[38] = Z ^ ~K & G, e[39] = ee ^ ~V & J, e[48] = ce ^ ~re & ne, e[49] = le ^ ~te & oe, e[0] ^= u[n], e[1] ^= u[n + 1]
					};
					if (o) e.exports = g;
					else
						for (p = 0; p < m.length; ++p) n[m[p]] = g[m[p]]
				}()
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
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
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var l, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(l || (l = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
			}(d || (d = {}));
			class f {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), u > s[t] || console.log.apply(console, r)
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
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = f.errors.UNKNOWN_ERROR), t || (t = {});
					const n = [];
					Object.keys(t).forEach(e => {
						try {
							n.push(e + "=" + JSON.stringify(t[e]))
						} catch (s) {
							n.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), n.push(`code=${r}`), n.push(`version=${this.version}`);
					const o = e;
					n.length && (e += " (" + n.join(", ") + ")");
					const s = new Error(e);
					return s.reason = o, s.code = r, Object.keys(t).forEach((function(e) {
						s[e] = t[e]
					})), s
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, f.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, n) {
					e || this.throwError(r, t, n)
				}
				assertArgument(e, r, t, n) {
					e || this.throwArgumentError(r, t, n)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), c && this.throwError("platform missing String.prototype.normalize", f.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: c
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, f.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, f.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, f.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", f.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", f.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return a || (a = new f(n)), a
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), o) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", f.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, o = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? u = r : f.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new f(e)
				}
			}
			f.errors = d, f.levels = l
		},
		"./node_modules/@ethersproject/rlp/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "encode", (function() {
				return a
			})), t.d(r, "decode", (function() {
				return d
			}));
			var n = t("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				o = t("./node_modules/@ethersproject/logger/lib.esm/index.js");
			const i = new o.a("rlp/5.4.0");

			function s(e) {
				const r = [];
				for (; e;) r.unshift(255 & e), e >>= 8;
				return r
			}

			function u(e, r, t) {
				let n = 0;
				for (let o = 0; o < t; o++) n = 256 * n + e[r + o];
				return n
			}

			function a(e) {
				return Object(n.i)(function e(r) {
					if (Array.isArray(r)) {
						let t = [];
						if (r.forEach((function(r) {
								t = t.concat(e(r))
							})), t.length <= 55) return t.unshift(192 + t.length), t;
						const n = s(t.length);
						return n.unshift(247 + n.length), n.concat(t)
					}
					Object(n.k)(r) || i.throwArgumentError("RLP object must be BytesLike", "object", r);
					const t = Array.prototype.slice.call(Object(n.a)(r));
					if (1 === t.length && t[0] <= 127) return t;
					if (t.length <= 55) return t.unshift(128 + t.length), t;
					const o = s(t.length);
					return o.unshift(183 + o.length), o.concat(t)
				}(e))
			}

			function c(e, r, t, n) {
				const s = [];
				for (; t < r + 1 + n;) {
					const u = l(e, t);
					s.push(u.result), (t += u.consumed) > r + 1 + n && i.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
				}
				return {
					consumed: 1 + n,
					result: s
				}
			}

			function l(e, r) {
				if (0 === e.length && i.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), e[r] >= 248) {
					const t = e[r] - 247;
					r + 1 + t > e.length && i.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
					const n = u(e, r + 1, t);
					return r + 1 + t + n > e.length && i.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), c(e, r, r + 1 + t, t + n)
				}
				if (e[r] >= 192) {
					const t = e[r] - 192;
					return r + 1 + t > e.length && i.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), c(e, r, r + 1, t)
				}
				if (e[r] >= 184) {
					const t = e[r] - 183;
					r + 1 + t > e.length && i.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
					const s = u(e, r + 1, t);
					return r + 1 + t + s > e.length && i.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t + s,
						result: Object(n.i)(e.slice(r + 1 + t, r + 1 + t + s))
					}
				}
				if (e[r] >= 128) {
					const t = e[r] - 128;
					return r + 1 + t > e.length && i.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), {
						consumed: 1 + t,
						result: Object(n.i)(e.slice(r + 1, r + 1 + t))
					}
				}
				return {
					consumed: 1,
					result: Object(n.i)(e[r])
				}
			}

			function d(e) {
				const r = Object(n.a)(e),
					t = l(r, 0);
				return t.consumed !== r.length && i.throwArgumentError("invalid rlp data", "data", e), t.result
			}
		},
		"./node_modules/dijkstrajs/dijkstra.js": function(e, r, t) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, r, t) {
					var o = {},
						i = {};
					i[r] = 0;
					var s, u, a, c, l, d, f, h = n.PriorityQueue.make();
					for (h.push(r, 0); !h.empty();)
						for (a in u = (s = h.pop()).value, c = s.cost, l = e[u] || {}) l.hasOwnProperty(a) && (d = c + l[a], f = i[a], (void 0 === i[a] || f > d) && (i[a] = d, h.push(a, d), o[a] = u));
					if (void 0 !== t && void 0 === i[t]) {
						var g = ["Could not find a path from ", r, " to ", t, "."].join("");
						throw new Error(g)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(e, r) {
					for (var t = [], n = r; n;) t.push(n), e[n], n = e[n];
					return t.reverse(), t
				},
				find_path: function(e, r, t) {
					var o = n.single_source_shortest_paths(e, r, t);
					return n.extract_shortest_path_from_predecessor_list(o, t)
				},
				PriorityQueue: {
					make: function(e) {
						var r, t = n.PriorityQueue,
							o = {};
						for (r in e = e || {}, t) t.hasOwnProperty(r) && (o[r] = t[r]);
						return o.queue = [], o.sorter = e.sorter || t.default_sorter, o
					},
					default_sorter: function(e, r) {
						return e.cost - r.cost
					},
					push: function(e, r) {
						var t = {
							value: e,
							cost: r
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
			e.exports = n
		},
		"./node_modules/lodash/uniqueId.js": function(e, r, t) {
			var n = t("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var r = ++o;
				return n(e) + r
			}
		},
		"./node_modules/qrcode/lib/browser.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/can-promise.js"),
				o = t("./node_modules/qrcode/lib/core/qrcode.js"),
				i = t("./node_modules/qrcode/lib/renderer/canvas.js"),
				s = t("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function u(e, r, t, i, s) {
				var u = [].slice.call(arguments, 1),
					a = u.length,
					c = "function" == typeof u[a - 1];
				if (!c && !n()) throw new Error("Callback required as last argument");
				if (!c) {
					if (a < 1) throw new Error("Too few arguments provided");
					return 1 === a ? (t = r, r = i = void 0) : 2 !== a || r.getContext || (i = t, t = r, r = void 0), new Promise((function(n, s) {
						try {
							var u = o.create(t, i);
							n(e(u, r, i))
						} catch (a) {
							s(a)
						}
					}))
				}
				if (a < 2) throw new Error("Too few arguments provided");
				2 === a ? (s = t, t = r, r = i = void 0) : 3 === a && (r.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = t, t = r, r = void 0));
				try {
					var l = o.create(t, i);
					s(null, e(l, r, i))
				} catch (d) {
					s(d)
				}
			}
			r.create = o.create, r.toCanvas = u.bind(null, i.render), r.toDataURL = u.bind(null, i.renderToDataURL), r.toString = u.bind(null, (function(e, r, t) {
				return s.render(e, t)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, r) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var r = Math.floor(e / 7) + 2, t = n(e), o = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * r - 2)), i = [t - 7], s = 1; s < r - 1; s++) i[s] = i[s - 1] - o;
				return i.push(6), i.reverse()
			}, r.getPositions = function(e) {
				for (var t = [], n = r.getRowColCoords(e), o = n.length, i = 0; i < o; i++)
					for (var s = 0; s < o; s++) 0 === i && 0 === s || 0 === i && s === o - 1 || i === o - 1 && 0 === s || t.push([n[i], n[s]]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
			}
			i.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r + 2 <= this.data.length; r += 2) {
					var t = 45 * o.indexOf(this.data[r]);
					t += o.indexOf(this.data[r + 1]), e.put(t, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[r]), 6)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, r) {
			function t() {
				this.buffer = [], this.length = 0
			}
			t.prototype = {
				get: function(e) {
					var r = Math.floor(e / 8);
					return 1 == (this.buffer[r] >>> 7 - e % 8 & 1)
				},
				put: function(e, r) {
					for (var t = 0; t < r; t++) this.putBit(1 == (e >>> r - t - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var r = Math.floor(this.length / 8);
					this.buffer.length <= r && this.buffer.push(0), e && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = t
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function o(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
			}
			o.prototype.set = function(e, r, t, n) {
				var o = e * this.size + r;
				this.data[o] = t, n && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(e, r) {
				return this.data[e * this.size + r]
			}, o.prototype.xor = function(e, r, t) {
				this.data[e * this.size + r] ^= t
			}, o.prototype.isReserved = function(e, r) {
				return this.reservedBit[e * this.size + r]
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = o.BYTE, this.data = n.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var r = 0, t = this.data.length; r < t; r++) e.put(this.data[r], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			r.getBlocksCount = function(e, r) {
				switch (r) {
					case n.L:
						return o[4 * (e - 1) + 0];
					case n.M:
						return o[4 * (e - 1) + 1];
					case n.Q:
						return o[4 * (e - 1) + 2];
					case n.H:
						return o[4 * (e - 1) + 3];
					default:
						return
				}
			}, r.getTotalCodewordsCount = function(e, r) {
				switch (r) {
					case n.L:
						return i[4 * (e - 1) + 0];
					case n.M:
						return i[4 * (e - 1) + 1];
					case n.Q:
						return i[4 * (e - 1) + 2];
					case n.H:
						return i[4 * (e - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/qrcode/lib/core/error-correction-level.js": function(e, r) {
			r.L = {
				bit: 1
			}, r.M = {
				bit: 0
			}, r.Q = {
				bit: 3
			}, r.H = {
				bit: 2
			}, r.isValid = function(e) {
				return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "l":
							case "low":
								return r.L;
							case "m":
							case "medium":
								return r.M;
							case "q":
							case "quartile":
								return r.Q;
							case "h":
							case "high":
								return r.H;
							default:
								throw new Error("Unknown EC Level: " + e)
						}
					}(e)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getPositions = function(e) {
				var r = n(e);
				return [
					[0, 0],
					[r - 7, 0],
					[0, r - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = n.getBCHDigit(1335);
			r.getEncodedBits = function(e, r) {
				for (var t = e.bit << 3 | r, i = t << 10; n.getBCHDigit(i) - o >= 0;) i ^= 1335 << n.getBCHDigit(i) - o;
				return 21522 ^ (t << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				i = n.alloc(256);
			! function() {
				for (var e = 1, r = 0; r < 255; r++) o[r] = e, i[e] = r, 256 & (e <<= 1) && (e ^= 285);
				for (r = 255; r < 512; r++) o[r] = o[r - 255]
			}(), r.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, r.exp = function(e) {
				return o[e]
			}, r.mul = function(e, r) {
				return 0 === e || 0 === r ? 0 : o[i[e] + i[r]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = n.KANJI, this.data = e
			}
			i.getBitsLength = function(e) {
				return 13 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r < this.data.length; r++) {
					var t = o.toSJIS(this.data[r]);
					if (t >= 33088 && t <= 40956) t -= 33088;
					else {
						if (!(t >= 57408 && t <= 60351)) throw new Error("Invalid SJIS character: " + this.data[r] + "\nMake sure your charset is UTF-8");
						t -= 49472
					}
					t = 192 * (t >>> 8 & 255) + (255 & t), e.put(t, 13)
				}
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/mask-pattern.js": function(e, r) {
			r.Patterns = {
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

			function s(e, t, n) {
				switch (e) {
					case r.Patterns.PATTERN000:
						return (t + n) % 2 == 0;
					case r.Patterns.PATTERN001:
						return t % 2 == 0;
					case r.Patterns.PATTERN010:
						return n % 3 == 0;
					case r.Patterns.PATTERN011:
						return (t + n) % 3 == 0;
					case r.Patterns.PATTERN100:
						return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
					case r.Patterns.PATTERN101:
						return t * n % 2 + t * n % 3 == 0;
					case r.Patterns.PATTERN110:
						return (t * n % 2 + t * n % 3) % 2 == 0;
					case r.Patterns.PATTERN111:
						return (t * n % 3 + (t + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			r.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, r.from = function(e) {
				return r.isValid(e) ? parseInt(e, 10) : void 0
			}, r.getPenaltyN1 = function(e) {
				for (var r = e.size, n = 0, o = 0, i = 0, s = null, u = null, a = 0; a < r; a++) {
					o = i = 0, s = u = null;
					for (var c = 0; c < r; c++) {
						var l = e.get(a, c);
						l === s ? o++ : (o >= 5 && (n += t + (o - 5)), s = l, o = 1), (l = e.get(c, a)) === u ? i++ : (i >= 5 && (n += t + (i - 5)), u = l, i = 1)
					}
					o >= 5 && (n += t + (o - 5)), i >= 5 && (n += t + (i - 5))
				}
				return n
			}, r.getPenaltyN2 = function(e) {
				for (var r = e.size, t = 0, o = 0; o < r - 1; o++)
					for (var i = 0; i < r - 1; i++) {
						var s = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
						4 !== s && 0 !== s || t++
					}
				return t * n
			}, r.getPenaltyN3 = function(e) {
				for (var r = e.size, t = 0, n = 0, i = 0, s = 0; s < r; s++) {
					n = i = 0;
					for (var u = 0; u < r; u++) n = n << 1 & 2047 | e.get(s, u), u >= 10 && (1488 === n || 93 === n) && t++, i = i << 1 & 2047 | e.get(u, s), u >= 10 && (1488 === i || 93 === i) && t++
				}
				return t * o
			}, r.getPenaltyN4 = function(e) {
				for (var r = 0, t = e.data.length, n = 0; n < t; n++) r += e.data[n];
				return Math.abs(Math.ceil(100 * r / t / 5) - 10) * i
			}, r.applyMask = function(e, r) {
				for (var t = r.size, n = 0; n < t; n++)
					for (var o = 0; o < t; o++) r.isReserved(o, n) || r.xor(o, n, s(e, o, n))
			}, r.getBestMask = function(e, t) {
				for (var n = Object.keys(r.Patterns).length, o = 0, i = 1 / 0, s = 0; s < n; s++) {
					t(s), r.applyMask(s, e);
					var u = r.getPenaltyN1(e) + r.getPenaltyN2(e) + r.getPenaltyN3(e) + r.getPenaltyN4(e);
					r.applyMask(s, e), u < i && (i = u, o = s)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/version-check.js"),
				o = t("./node_modules/qrcode/lib/core/regex.js");
			r.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, r.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, r.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, r.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, r.MIXED = {
				bit: -1
			}, r.getCharCountIndicator = function(e, r) {
				if (!e.ccBits) throw new Error("Invalid mode: " + e);
				if (!n.isValid(r)) throw new Error("Invalid version: " + r);
				return r >= 1 && r < 10 ? e.ccBits[0] : r < 27 ? e.ccBits[1] : e.ccBits[2]
			}, r.getBestModeForData = function(e) {
				return o.testNumeric(e) ? r.NUMERIC : o.testAlphanumeric(e) ? r.ALPHANUMERIC : o.testKanji(e) ? r.KANJI : r.BYTE
			}, r.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, r.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "numeric":
								return r.NUMERIC;
							case "alphanumeric":
								return r.ALPHANUMERIC;
							case "kanji":
								return r.KANJI;
							case "byte":
								return r.BYTE;
							default:
								throw new Error("Unknown mode: " + e)
						}
					}(e)
				} catch (n) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js");

			function o(e) {
				this.mode = n.NUMERIC, this.data = e.toString()
			}
			o.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var r, t, n;
				for (r = 0; r + 3 <= this.data.length; r += 3) t = this.data.substr(r, 3), n = parseInt(t, 10), e.put(n, 10);
				var o = this.data.length - r;
				o > 0 && (t = this.data.substr(r), n = parseInt(t, 10), e.put(n, 3 * o + 1))
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/galois-field.js");
			r.mul = function(e, r) {
				for (var t = n.alloc(e.length + r.length - 1), i = 0; i < e.length; i++)
					for (var s = 0; s < r.length; s++) t[i + s] ^= o.mul(e[i], r[s]);
				return t
			}, r.mod = function(e, r) {
				for (var t = n.from(e); t.length - r.length >= 0;) {
					for (var i = t[0], s = 0; s < r.length; s++) t[s] ^= o.mul(r[s], i);
					for (var u = 0; u < t.length && 0 === t[u];) u++;
					t = t.slice(u)
				}
				return t
			}, r.generateECPolynomial = function(e) {
				for (var t = n.from([1]), i = 0; i < e; i++) t = r.mul(t, [1, o.exp(i)]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, r, t) {
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

			function b(e, r, t) {
				var n, o, i = e.size,
					s = g.getEncodedBits(r, t);
				for (n = 0; n < 15; n++) o = 1 == (s >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(i - 15 + n, 8, o, !0), n < 8 ? e.set(8, i - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function E(e, r, t) {
				var i = new s;
				t.forEach((function(r) {
					i.put(r.mode.bit, 4), i.put(r.getLength(), m.getCharCountIndicator(r.mode, e)), r.write(i)
				}));
				var u = 8 * (o.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, r));
				for (i.getLengthInBits() + 4 <= u && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var a = (u - i.getLengthInBits()) / 8, c = 0; c < a; c++) i.put(c % 2 ? 17 : 236, 8);
				return function(e, r, t) {
					for (var i = o.getSymbolTotalCodewords(r), s = d.getTotalCodewordsCount(r, t), u = i - s, a = d.getBlocksCount(r, t), c = a - i % a, l = Math.floor(i / a), h = Math.floor(u / a), g = h + 1, m = l - h, p = new f(m), v = 0, b = new Array(a), E = new Array(a), y = 0, w = n.from(e.buffer), _ = 0; _ < a; _++) {
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
				}(i, e, r)
			}

			function y(e, r, t, n) {
				var i;
				if (v(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var s = r;
					if (!s) {
						var d = p.rawSplit(e);
						s = h.getBestVersionForData(d, t)
					}
					i = p.fromString(e, s || 40)
				}
				var f = h.getBestVersionForData(i, t);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (r) {
					if (r < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else r = f;
				var g = E(r, t, i),
					m = o.getSymbolSize(r),
					y = new u(m);
				return function(e, r) {
						for (var t = e.size, n = c.getPositions(r), o = 0; o < n.length; o++)
							for (var i = n[o][0], s = n[o][1], u = -1; u <= 7; u++)
								if (!(i + u <= -1 || t <= i + u))
									for (var a = -1; a <= 7; a++) s + a <= -1 || t <= s + a || (u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 2 && u <= 4 && a >= 2 && a <= 4 ? e.set(i + u, s + a, !0, !0) : e.set(i + u, s + a, !1, !0))
					}(y, r),
					function(e) {
						for (var r = e.size, t = 8; t < r - 8; t++) {
							var n = t % 2 == 0;
							e.set(t, 6, n, !0), e.set(6, t, n, !0)
						}
					}(y),
					function(e, r) {
						for (var t = a.getPositions(r), n = 0; n < t.length; n++)
							for (var o = t[n][0], i = t[n][1], s = -2; s <= 2; s++)
								for (var u = -2; u <= 2; u++) - 2 === s || 2 === s || -2 === u || 2 === u || 0 === s && 0 === u ? e.set(o + s, i + u, !0, !0) : e.set(o + s, i + u, !1, !0)
					}(y, r), b(y, t, 0), r >= 7 && function(e, r) {
						for (var t, n, o, i = e.size, s = h.getEncodedBits(r), u = 0; u < 18; u++) t = Math.floor(u / 3), n = u % 3 + i - 8 - 3, o = 1 == (s >> u & 1), e.set(t, n, o, !0), e.set(n, t, o, !0)
					}(y, r),
					function(e, r) {
						for (var t = e.size, n = -1, o = t - 1, i = 7, s = 0, u = t - 1; u > 0; u -= 2)
							for (6 === u && u--;;) {
								for (var a = 0; a < 2; a++)
									if (!e.isReserved(o, u - a)) {
										var c = !1;
										s < r.length && (c = 1 == (r[s] >>> i & 1)), e.set(o, u - a, c), -1 === --i && (s++, i = 7)
									} if ((o += n) < 0 || t <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(y, g), isNaN(n) && (n = l.getBestMask(y, b.bind(null, y, t))), l.applyMask(n, y), b(y, t, n), {
						modules: y,
						version: r,
						errorCorrectionLevel: t,
						maskPattern: n,
						segments: i
					}
			}
			r.create = function(e, r) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var t, n, s = i.M;
				return void 0 !== r && (s = i.from(r.errorCorrectionLevel, i.M), t = h.from(r.version), n = l.from(r.maskPattern), r.toSJISFunc && o.setToSJISFunction(r.toSJISFunc)), y(e, t, s, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = t("./node_modules/qrcode/lib/core/polynomial.js"),
				i = t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function s(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			s.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, s.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var r = n.alloc(this.degree),
					t = i.concat([e, r], e.length + this.degree),
					s = o.mod(t, this.genPoly),
					u = this.degree - s.length;
				if (u > 0) {
					var a = n.alloc(this.degree);
					return s.copy(a, u), a
				}
				return s
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, r) {
			var t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (t = t.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			r.KANJI = new RegExp(t, "g"), r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), r.BYTE = new RegExp(n, "g"), r.NUMERIC = new RegExp("[0-9]+", "g"), r.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + t + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			r.testKanji = function(e) {
				return o.test(e)
			}, r.testNumeric = function(e) {
				return i.test(e)
			}, r.testAlphanumeric = function(e) {
				return s.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/mode.js"),
				o = t("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = t("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = t("./node_modules/qrcode/lib/core/byte-data.js"),
				u = t("./node_modules/qrcode/lib/core/kanji-data.js"),
				a = t("./node_modules/qrcode/lib/core/regex.js"),
				c = t("./node_modules/qrcode/lib/core/utils.js"),
				l = t("./node_modules/dijkstrajs/dijkstra.js");

			function d(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, r, t) {
				for (var n, o = []; null !== (n = e.exec(t));) o.push({
					data: n[0],
					index: n.index,
					mode: r,
					length: n[0].length
				});
				return o
			}

			function h(e) {
				var r, t, o = f(a.NUMERIC, n.NUMERIC, e),
					i = f(a.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return c.isKanjiModeEnabled() ? (r = f(a.BYTE, n.BYTE, e), t = f(a.KANJI, n.KANJI, e)) : (r = f(a.BYTE_KANJI, n.BYTE, e), t = []), o.concat(i, r, t).sort((function(e, r) {
					return e.index - r.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function g(e, r) {
				switch (r) {
					case n.NUMERIC:
						return o.getBitsLength(e);
					case n.ALPHANUMERIC:
						return i.getBitsLength(e);
					case n.KANJI:
						return u.getBitsLength(e);
					case n.BYTE:
						return s.getBitsLength(e)
				}
			}

			function m(e, r) {
				var t, a = n.getBestModeForData(e);
				if ((t = n.from(r, a)) !== n.BYTE && t.bit < a.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(t) + ".\n Suggested mode is: " + n.toString(a));
				switch (t !== n.KANJI || c.isKanjiModeEnabled() || (t = n.BYTE), t) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new i(e);
					case n.KANJI:
						return new u(e);
					case n.BYTE:
						return new s(e)
				}
			}
			r.fromArray = function(e) {
				return e.reduce((function(e, r) {
					return "string" == typeof r ? e.push(m(r, null)) : r.data && e.push(m(r.data, r.mode)), e
				}), [])
			}, r.fromString = function(e, t) {
				for (var o = function(e, r) {
						for (var t = {}, o = {
								start: {}
							}, i = ["start"], s = 0; s < e.length; s++) {
							for (var u = e[s], a = [], c = 0; c < u.length; c++) {
								var l = u[c],
									d = "" + s + c;
								a.push(d), t[d] = {
									node: l,
									lastCount: 0
								}, o[d] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									t[h] && t[h].node.mode === l.mode ? (o[h][d] = g(t[h].lastCount + l.length, l.mode) - g(t[h].lastCount, l.mode), t[h].lastCount += l.length) : (t[h] && (t[h].lastCount = l.length), o[h][d] = g(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, r))
								}
							}
							i = a
						}
						for (f = 0; f < i.length; f++) o[i[f]].end = 0;
						return {
							map: o,
							table: t
						}
					}(function(e) {
						for (var r = [], t = 0; t < e.length; t++) {
							var o = e[t];
							switch (o.mode) {
								case n.NUMERIC:
									r.push([o, {
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
									r.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.KANJI:
									r.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}]);
									break;
								case n.BYTE:
									r.push([{
										data: o.data,
										mode: n.BYTE,
										length: d(o.data)
									}])
							}
						}
						return r
					}(h(e, c.isKanjiModeEnabled())), t), i = l.find_path(o.map, "start", "end"), s = [], u = 1; u < i.length - 1; u++) s.push(o.table[i[u]].node);
				return r.fromArray(function(e) {
					return e.reduce((function(e, r) {
						var t = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return t && t.mode === r.mode ? (e[e.length - 1].data += r.data, e) : (e.push(r), e)
					}), [])
				}(s))
			}, r.rawSplit = function(e) {
				return r.fromArray(h(e, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, r) {
			var t, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			r.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, r.getSymbolTotalCodewords = function(e) {
				return n[e]
			}, r.getBCHDigit = function(e) {
				for (var r = 0; 0 !== e;) r++, e >>>= 1;
				return r
			}, r.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				t = e
			}, r.isKanjiModeEnabled = function() {
				return void 0 !== t
			}, r.toSJIS = function(e) {
				return t(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, r) {
			r.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/core/utils.js"),
				o = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/mode.js"),
				u = t("./node_modules/qrcode/lib/core/version-check.js"),
				a = t("./node_modules/qrcode/node_modules/isarray/index.js"),
				c = n.getBCHDigit(7973);

			function l(e, r) {
				return s.getCharCountIndicator(e, r) + 4
			}

			function d(e, r) {
				var t = 0;
				return e.forEach((function(e) {
					var n = l(e.mode, r);
					t += n + e.getBitsLength()
				})), t
			}
			r.from = function(e, r) {
				return u.isValid(e) ? parseInt(e, 10) : r
			}, r.getCapacity = function(e, r, t) {
				if (!u.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === t && (t = s.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, r));
				if (t === s.MIXED) return i;
				var a = i - l(t, e);
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
			}, r.getBestVersionForData = function(e, t) {
				var n, o = i.from(t, i.M);
				if (a(e)) {
					if (e.length > 1) return function(e, t) {
						for (var n = 1; n <= 40; n++) {
							if (d(e, n) <= r.getCapacity(n, t, s.MIXED)) return n
						}
					}(e, o);
					if (0 === e.length) return 1;
					n = e[0]
				} else n = e;
				return function(e, t, n) {
					for (var o = 1; o <= 40; o++)
						if (t <= r.getCapacity(o, n, e)) return o
				}(n.mode, n.getLength(), o)
			}, r.getEncodedBits = function(e) {
				if (!u.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var r = e << 12; n.getBCHDigit(r) - c >= 0;) r ^= 7973 << n.getBCHDigit(r) - c;
				return e << 12 | r
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");
			r.render = function(e, r, t) {
				var o = t,
					i = r;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), r || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var s = n.getImageWidth(e.modules.size, o),
					u = i.getContext("2d"),
					a = u.createImageData(s, s);
				return n.qrToImageData(a.data, e, o),
					function(e, r, t) {
						e.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = t, r.width = t, r.style.height = t + "px", r.style.width = t + "px"
					}(u, i, s), u.putImageData(a, 0, 0), i
			}, r.renderToDataURL = function(e, t, n) {
				var o = n;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), o || (o = {});
				var i = r.render(e, t, o),
					s = o.type || "image/png",
					u = o.rendererOpts || {};
				return i.toDataURL(s, u.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, r, t) {
			var n = t("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, r) {
				var t = e.a / 255,
					n = r + '="' + e.hex + '"';
				return t < 1 ? n + " " + r + '-opacity="' + t.toFixed(2).slice(1) + '"' : n
			}

			function i(e, r, t) {
				var n = e + r;
				return void 0 !== t && (n += " " + t), n
			}
			r.render = function(e, r, t) {
				var s = n.getOptions(r),
					u = e.modules.size,
					a = e.modules.data,
					c = u + 2 * s.margin,
					l = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					d = "<path " + o(s.color.dark, "stroke") + ' d="' + function(e, r, t) {
						for (var n = "", o = 0, s = !1, u = 0, a = 0; a < e.length; a++) {
							var c = Math.floor(a % r),
								l = Math.floor(a / r);
							c || s || (s = !0), e[a] ? (u++, a > 0 && c > 0 && e[a - 1] || (n += s ? i("M", c + t, .5 + l + t) : i("m", o, 0), o = 0, s = !1), c + 1 < r && e[a + 1] || (n += i("h", u), u = 0)) : o++
						}
						return n
					}(a, u, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + c + " " + c + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + d + "</svg>\n";
				return "function" == typeof t && t(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, r) {
			function t(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var r = e.slice().replace("#", "").split("");
				if (r.length < 3 || 5 === r.length || r.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== r.length && 4 !== r.length || (r = Array.prototype.concat.apply([], r.map((function(e) {
					return [e, e]
				})))), 6 === r.length && r.push("F", "F");
				var t = parseInt(r.join(""), 16);
				return {
					r: t >> 24 & 255,
					g: t >> 16 & 255,
					b: t >> 8 & 255,
					a: 255 & t,
					hex: "#" + r.slice(0, 6).join("")
				}
			}
			r.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var r = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					n = e.width && e.width >= 21 ? e.width : void 0,
					o = e.scale || 4;
				return {
					width: n,
					scale: n ? 4 : o,
					margin: r,
					color: {
						dark: t(e.color.dark || "#000000ff"),
						light: t(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, r.getScale = function(e, r) {
				return r.width && r.width >= e + 2 * r.margin ? r.width / (e + 2 * r.margin) : r.scale
			}, r.getImageWidth = function(e, t) {
				var n = r.getScale(e, t);
				return Math.floor((e + 2 * t.margin) * n)
			}, r.qrToImageData = function(e, t, n) {
				for (var o = t.modules.size, i = t.modules.data, s = r.getScale(o, n), u = Math.floor((o + 2 * n.margin) * s), a = n.margin * s, c = [n.color.light, n.color.dark], l = 0; l < u; l++)
					for (var d = 0; d < u; d++) {
						var f = 4 * (l * u + d),
							h = n.color.light;
						if (l >= a && d >= a && l < u - a && d < u - a) h = c[i[Math.floor((l - a) / s) * o + Math.floor((d - a) / s)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/qrcode/node_modules/isarray/index.js");
			i.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo()
				} catch (r) {
					return !1
				}
			}();
			var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, r, t) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? a(this, e) : function(e, r, t, n) {
					if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer) return function(e, r, t, n) {
						if (t < 0 || r.byteLength < t) throw new RangeError("'offset' is out of bounds");
						if (r.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === t && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, t) : new Uint8Array(r, t, n);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = c(e, o);
						return o
					}(e, r, t, n);
					if ("string" == typeof r) return function(e, r) {
						var t = 0 | d(r),
							n = u(e, t),
							o = n.write(r);
						o !== t && (n = n.slice(0, o));
						return n
					}(e, r);
					return function(e, r) {
						if (i.isBuffer(r)) {
							var t = 0 | s(r.length),
								n = u(e, t);
							return 0 === n.length ? n : (r.copy(n, 0, 0, t), n)
						}
						if (r) {
							if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || (o = r.length) != o ? u(e, 0) : c(e, r);
							if ("Buffer" === r.type && Array.isArray(r.data)) return c(e, r.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, r)
				}(this, e, r, t) : new i(e, r, t)
			}

			function s(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function u(e, r) {
				var t;
				return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = i.prototype : (null === (t = e) && (t = new i(r)), t.length = r), t
			}

			function a(e, r) {
				var t = u(e, r < 0 ? 0 : 0 | s(r));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < r; ++n) t[n] = 0;
				return t
			}

			function c(e, r) {
				for (var t = r.length < 0 ? 0 : 0 | s(r.length), n = u(e, t), o = 0; o < t; o += 1) n[o] = 255 & r[o];
				return n
			}

			function l(e, r) {
				var t;
				r = r || 1 / 0;
				for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
					if ((t = e.charCodeAt(s)) > 55295 && t < 57344) {
						if (!o) {
							if (t > 56319) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === n) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = t;
							continue
						}
						if (t < 56320) {
							(r -= 3) > -1 && i.push(239, 191, 189), o = t;
							continue
						}
						t = 65536 + (o - 55296 << 10 | t - 56320)
					} else o && (r -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, t < 128) {
						if ((r -= 1) < 0) break;
						i.push(t)
					} else if (t < 2048) {
						if ((r -= 2) < 0) break;
						i.push(t >> 6 | 192, 63 & t | 128)
					} else if (t < 65536) {
						if ((r -= 3) < 0) break;
						i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
					} else {
						if (!(t < 1114112)) throw new Error("Invalid code point");
						if ((r -= 4) < 0) break;
						i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
					}
				}
				return i
			}

			function d(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, r, t) {
				void 0 === r ? (t = this.length, r = 0) : void 0 === t && "string" == typeof r ? (t = this.length, r = 0) : isFinite(r) && (r |= 0, isFinite(t) ? t |= 0 : t = void 0);
				var n = this.length - r;
				if ((void 0 === t || t > n) && (t = n), e.length > 0 && (t < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, r, t, n) {
					return function(e, r, t, n) {
						for (var o = 0; o < n && !(o + t >= r.length || o >= e.length); ++o) r[o + t] = e[o];
						return o
					}(l(r, e.length - t), e, t, n)
				}(this, e, r, t)
			}, i.prototype.slice = function(e, r) {
				var t, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < e && (r = e), i.TYPED_ARRAY_SUPPORT)(t = this.subarray(e, r)).__proto__ = i.prototype;
				else {
					var o = r - e;
					t = new i(o, void 0);
					for (var s = 0; s < o; ++s) t[s] = this[s + e]
				}
				return t
			}, i.prototype.copy = function(e, r, t, n) {
				if (t || (t = 0), n || 0 === n || (n = this.length), r >= e.length && (r = e.length), r || (r = 0), n > 0 && n < t && (n = t), n === t) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (r < 0) throw new RangeError("targetStart out of bounds");
				if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - r < n - t && (n = e.length - r + t);
				var o, s = n - t;
				if (this === e && t < r && r < n)
					for (o = s - 1; o >= 0; --o) e[o + r] = this[o + t];
				else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < s; ++o) e[o + r] = this[o + t];
				else Uint8Array.prototype.set.call(e, this.subarray(t, t + s), r);
				return s
			}, i.prototype.fill = function(e, r, t) {
				if ("string" == typeof e) {
					if ("string" == typeof r ? (r = 0, t = this.length) : "string" == typeof t && (t = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
				} else "number" == typeof e && (e &= 255);
				if (r < 0 || this.length < r || this.length < t) throw new RangeError("Out of range index");
				if (t <= r) return this;
				var o;
				if (r >>>= 0, t = void 0 === t ? this.length : t >>> 0, e || (e = 0), "number" == typeof e)
					for (o = r; o < t; ++o) this[o] = e;
				else {
					var s = i.isBuffer(e) ? e : new i(e),
						u = s.length;
					for (o = 0; o < t - r; ++o) this[o + r] = s[o % u]
				}
				return this
			}, i.concat = function(e, r) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return u(null, 0);
				var t;
				if (void 0 === r)
					for (r = 0, t = 0; t < e.length; ++t) r += e[t].length;
				var o = a(null, r),
					s = 0;
				for (t = 0; t < e.length; ++t) {
					var c = e[t];
					if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
					c.copy(o, s), s += c.length
				}
				return o
			}, i.byteLength = d, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var r = new i(e);
				return r.fill(0), r
			}, e.exports.from = function(e) {
				return new i(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, r) {
			var t = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == t.call(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033.6dda1e61f320e3163721.js.map