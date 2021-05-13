// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.f103aacaf109aaa362bc.js
// Retrieved at 5/13/2021, 1:30:26 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./node_modules/ethers/_version.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = "4.0.48"
		},
		"./node_modules/ethers/errors.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/_version.js");
			t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.MISSING_NEW = "MISSING_NEW", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION";
			var s = !1,
				a = !1;

			function o(e, r, s) {
				if (a) throw new Error("unknown error");
				r || (r = t.UNKNOWN_ERROR), s || (s = {});
				var o = [];
				Object.keys(s).forEach((function(e) {
					try {
						o.push(e + "=" + JSON.stringify(s[e]))
					} catch (c) {
						o.push(e + "=" + JSON.stringify(s[e].toString()))
					}
				})), o.push("version=" + n.version);
				var i = e;
				o.length && (e += " (" + o.join(", ") + ")");
				var c = new Error(e);
				throw c.reason = i, c.code = r, Object.keys(s).forEach((function(e) {
					c[e] = s[e]
				})), c
			}
			t.throwError = o, t.checkNew = function(e, r) {
				e instanceof r || o("missing new", t.MISSING_NEW, {
					name: r.name
				})
			}, t.checkArgumentCount = function(e, r, n) {
				n || (n = ""), e < r && o("missing argument" + n, t.MISSING_ARGUMENT, {
					count: e,
					expectedCount: r
				}), e > r && o("too many arguments" + n, t.UNEXPECTED_ARGUMENT, {
					count: e,
					expectedCount: r
				})
			}, t.setCensorship = function(e, r) {
				s && o("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), a = !!e, s = !!r
			}, t.checkNormalize = function() {
				try {
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function(e) {
							try {
								"test".normalize(e)
							} catch (t) {
								throw new Error("missing " + e)
							}
						})), String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					o("platform missing String.prototype.normalize", t.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: e.message
					})
				}
			};
			var i = {
					debug: 1,
					default: 2,
					info: 2,
					warn: 3,
					error: 4,
					off: 5
				},
				c = i.default;

			function l(e, t) {
				c > i[e] || console.log.apply(console, t)
			}

			function d() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				l("warn", e)
			}
			t.setLogLevel = function(e) {
				var t = i[e];
				null != t ? c = t : d("invliad log level - " + e)
			}, t.warn = d, t.info = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				l("info", e)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var s = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, a = "0123456789abcdef".split(""), o = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], d = function(e, t, r) {
							return function(n) {
								return new N(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, s) {
								return new N(e, t, s).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = d(e, t, "hex");
							r.create = function() {
								return new N(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < l.length; ++n) {
								var s = l[n];
								r[s] = d(e, t, s)
							}
							return r
						}, p = [{
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
								var r = u(e, t, "hex");
								r.create = function(r) {
									return new N(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < l.length; ++n) {
									var s = l[n];
									r[s] = u(e, t, s)
								}
								return r
							}
						}], h = {}, f = [], b = 0; b < p.length; ++b)
						for (var v = p[b], x = v.bits, g = 0; g < x.length; ++g) {
							var E = v.name + "_" + x[g];
							f.push(E), h[E] = v.createMethod(x[g], v.padding)
						}

					function N(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, s = e.length, a = this.blocks, i = this.byteCount, c = this.blockCount, l = 0, d = this.s; l < s;) {
							if (this.reset)
								for (this.reset = !1, a[0] = this.block, r = 1; r < c + 1; ++r) a[r] = 0;
							if (t)
								for (r = this.start; l < s && r < i; ++l) a[r >> 2] |= e[l] << o[3 & r++];
							else
								for (r = this.start; l < s && r < i; ++l)(n = e.charCodeAt(l)) < 128 ? a[r >> 2] |= n << o[3 & r++] : n < 2048 ? (a[r >> 2] |= (192 | n >> 6) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (a[r >> 2] |= (224 | n >> 12) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), a[r >> 2] |= (240 | n >> 18) << o[3 & r++], a[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = a[c], r = 0; r < c; ++r) d[r] ^= a[r];
								_(d), this.reset = !0
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
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, s = this.extraBytes, o = 0, i = 0, c = ""; i < n;) {
							for (o = 0; o < t && i < n; ++o, ++i) e = r[o], c += a[e >> 4 & 15] + a[15 & e] + a[e >> 12 & 15] + a[e >> 8 & 15] + a[e >> 20 & 15] + a[e >> 16 & 15] + a[e >> 28 & 15] + a[e >> 24 & 15];
							i % t == 0 && (_(r), o = 0)
						}
						return s && (e = r[o], s > 0 && (c += a[e >> 4 & 15] + a[15 & e]), s > 1 && (c += a[e >> 12 & 15] + a[e >> 8 & 15]), s > 2 && (c += a[e >> 20 & 15] + a[e >> 16 & 15])), c
					}, N.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							s = this.extraBytes,
							a = 0,
							o = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); o < n;) {
							for (a = 0; a < t && o < n; ++a, ++o) c[o] = r[a];
							o % t == 0 && _(r)
						}
						return s && (c[a] = r[a], e = e.slice(0, i)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, s = this.outputBlocks, a = this.extraBytes, o = 0, i = 0, c = []; i < s;) {
							for (o = 0; o < r && i < s; ++o, ++i) e = i << 2, t = n[o], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % r == 0 && _(n)
						}
						return a && (e = i << 2, t = n[o], a > 0 && (c[e] = 255 & t), a > 1 && (c[e + 1] = t >> 8 & 255), a > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var _ = function(e) {
						var t, r, n, s, a, o, c, l, d, u, m, p, h, f, b, v, x, g, E, N, _, O, C, j, w, y, I, T, M, A, k, S, R, P, U, D, B, G, F, L, V, H, Y, q, W, X, z, K, J, Z, $, Q, ee, te, re, ne, se, ae, oe, ie, ce, le, de;
						for (n = 0; n < 48; n += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | c >>> 31), r = (h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | o >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = s ^ (l << 1 | d >>> 31), r = a ^ (d << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = o ^ (u << 1 | m >>> 31), r = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (p << 1 | h >>> 31), r = d ^ (h << 1 | p >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (s << 1 | a >>> 31), r = m ^ (a << 1 | s >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, f = e[0], b = e[1], X = e[11] << 4 | e[10] >>> 28, z = e[10] << 4 | e[11] >>> 28, T = e[20] << 3 | e[21] >>> 29, M = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, Y = e[41] << 18 | e[40] >>> 14, P = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, x = e[12] << 12 | e[13] >>> 20, K = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, A = e[33] << 13 | e[32] >>> 19, k = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, de = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, B = e[15] << 6 | e[14] >>> 26, g = e[25] << 11 | e[24] >>> 21, E = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, $ = e[35] << 15 | e[34] >>> 17, S = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, j = e[6] << 28 | e[7] >>> 4, w = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, G = e[26] << 25 | e[27] >>> 7, F = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, _ = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, q = e[8] << 27 | e[9] >>> 5, W = e[9] << 27 | e[8] >>> 5, y = e[18] << 20 | e[19] >>> 12, I = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, L = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, O = e[48] << 14 | e[49] >>> 18, C = e[49] << 14 | e[48] >>> 18, e[0] = f ^ ~v & g, e[1] = b ^ ~x & E, e[10] = j ^ ~y & T, e[11] = w ^ ~I & M, e[20] = P ^ ~D & G, e[21] = U ^ ~B & F, e[30] = q ^ ~X & K, e[31] = W ^ ~z & J, e[40] = te ^ ~ne & ae, e[41] = re ^ ~se & oe, e[2] = v ^ ~g & N, e[3] = x ^ ~E & _, e[12] = y ^ ~T & A, e[13] = I ^ ~M & k, e[22] = D ^ ~G & L, e[23] = B ^ ~F & V, e[32] = X ^ ~K & Z, e[33] = z ^ ~J & $, e[42] = ne ^ ~ae & ie, e[43] = se ^ ~oe & ce, e[4] = g ^ ~N & O, e[5] = E ^ ~_ & C, e[14] = T ^ ~A & S, e[15] = M ^ ~k & R, e[24] = G ^ ~L & H, e[25] = F ^ ~V & Y, e[34] = K ^ ~Z & Q, e[35] = J ^ ~$ & ee, e[44] = ae ^ ~ie & le, e[45] = oe ^ ~ce & de, e[6] = N ^ ~O & f, e[7] = _ ^ ~C & b, e[16] = A ^ ~S & j, e[17] = k ^ ~R & w, e[26] = L ^ ~H & P, e[27] = V ^ ~Y & U, e[36] = Z ^ ~Q & q, e[37] = $ ^ ~ee & W, e[46] = ie ^ ~le & te, e[47] = ce ^ ~de & re, e[8] = O ^ ~f & v, e[9] = C ^ ~b & x, e[18] = S ^ ~j & y, e[19] = R ^ ~w & I, e[28] = H ^ ~P & D, e[29] = Y ^ ~U & B, e[38] = Q ^ ~q & X, e[39] = ee ^ ~W & z, e[48] = le ^ ~te & ne, e[49] = de ^ ~re & se, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (s) e.exports = h;
					else
						for (b = 0; b < f.length; ++b) n[f[b]] = h[f[b]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/bytes.js": function(e, t, r) {
			"use strict";
			var n = this && this.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
				return t.default = e, t
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/ethers/errors.js"));

			function a(e) {
				return !!e.toHexString
			}

			function o(e) {
				return e.slice ? e : (e.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function i(e) {
				if (!e || parseInt(String(e.length)) != e.length || "string" == typeof e) return !1;
				for (var t = 0; t < e.length; t++) {
					var r = e[t];
					if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1
				}
				return !0
			}

			function c(e) {
				if (null == e && s.throwError("cannot convert null value to array", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), a(e) && (e = e.toHexString()), "string" == typeof e) {
					var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
					t || s.throwError("invalid hexidecimal string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== t[1] && s.throwError("hex string must have 0x prefix", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), (e = e.substring(2)).length % 2 && (e = "0" + e);
					for (var r = [], n = 0; n < e.length; n += 2) r.push(parseInt(e.substr(n, 2), 16));
					return o(new Uint8Array(r))
				}
				return i(e) ? o(new Uint8Array(e)) : (s.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function l(e) {
				for (var t = [], r = 0, n = 0; n < e.length; n++) {
					var s = c(e[n]);
					t.push(s), r += s.length
				}
				var a = new Uint8Array(r),
					i = 0;
				for (n = 0; n < t.length; n++) a.set(t[n], i), i += t[n].length;
				return o(a)
			}

			function d(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = a, t.isArrayish = i, t.arrayify = c, t.concat = l, t.stripZeros = function(e) {
				var t = c(e);
				if (0 === t.length) return t;
				for (var r = 0; 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = c(e)).length) throw new Error("cannot pad");
				var r = new Uint8Array(t);
				return r.set(e, t - e.length), o(r)
			}, t.isHexString = d;
			var u = "0123456789abcdef";

			function m(e) {
				if (a(e)) return e.toHexString();
				if ("number" == typeof e) {
					e < 0 && s.throwError("cannot hexlify negative value", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e >= 9007199254740991 && s.throwError("out-of-range", s.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; e;) t = u[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof e) {
					var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return r || s.throwError("invalid hexidecimal string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== r[1] && s.throwError("hex string must have 0x prefix", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (i(e)) {
					for (var n = [], o = 0; o < e.length; o++) {
						var c = e[o];
						n.push(u[(240 & c) >> 4] + u[15 & c])
					}
					return "0x" + n.join("")
				}
				return s.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function p(e, t) {
				for (d(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function h(e) {
				var t, r = 0,
					n = "0x",
					a = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && s.throwError("at least on of recoveryParam or v must be specified", s.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), n = p(e.r, 32), a = p(e.s, 32), "string" == typeof(r = e.v) && (r = parseInt(r, 16));
					var o = e.recoveryParam;
					null == o && null != e.v && (o = 1 - r % 2), r = 27 + o
				} else {
					var i = c(e);
					if (65 !== i.length) throw new Error("invalid signature");
					n = m(i.slice(0, 32)), a = m(i.slice(32, 64)), 27 !== (r = i[64]) && 28 !== r && (r = 27 + r % 2)
				}
				return {
					r: n,
					s: a,
					recoveryParam: r - 27,
					v: r
				}
			}
			t.hexlify = m, t.hexDataLength = function(e) {
				return d(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, r) {
				return d(e) || s.throwError("invalid hex data", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && s.throwError("hex data length must be even", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (d(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = p, t.splitSignature = h, t.joinSignature = function(e) {
				return m(l([(e = h(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				s = r("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + n.keccak_256(s.arrayify(e))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					a = new n.BigNumber(r.dividedBy(s)),
					o = new n.BigNumber("100").multipliedBy(a);
				return new n.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = r("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "h", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/config.ts"),
				d = r("./src/graphql/operations/PollVote.json"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/models/Poll/index.ts"),
				p = r("./src/reddit/endpoints/governance/requester.ts");
			var h = r("./src/reddit/endpoints/governance/wallet.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/models/Vote/index.ts"),
				v = r("./src/reddit/selectors/gov.ts"),
				x = r("./src/reddit/actions/governance/constants.ts"),
				g = r("./src/reddit/actions/governance/errorToast.ts");
			const E = Object(s.a)(x.b),
				N = Object(s.a)(x.c),
				_ = Object(s.a)(x.e),
				O = (Object(s.a)(x.f), Object(s.a)(x.g), Object(s.a)(x.h)),
				C = Object(s.a)(x.i),
				j = Object(s.a)(x.j),
				w = Object(s.a)(x.k),
				y = Object(s.a)(x.q),
				I = Object(s.a)(x.r),
				T = Object(s.a)(x.s),
				M = Object(s.a)(x.t),
				A = Object(s.a)(x.u),
				k = Object(s.a)(x.v),
				S = Object(s.a)(x.w),
				R = Object(s.a)(x.x),
				P = (e, t) => async (r, n, {
					apiContext: s,
					gqlContext: a
				}) => {
					let o, c = n().polls.models[e];
					if (r(j({
							pollId: e
						})), (o = c.type === m.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...d,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, n) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${l.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							r(_({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(w(o.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(m.f)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === b.a.notVoted && r(Object(i.bb)(e))
						}
					} else r(C({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(g.a)(r, o.error || o.errors[0].messsage)
				}, U = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					r(T());
					const d = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${l.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: d
					});
					u.ok ? (r(M({
						...u.body,
						subredditId: e.subredditId
					})), r(Object(c.f)({
						kind: f.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(a.a)(e.amount)), n.fbt._param("tokenName", Object(v.n)(s(), {
							subredditId: e.subredditId
						})), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(o.f)())) : (r(y({
						error: u.error
					})), Object(g.a)(r, u.error))
				}, D = e => async (t, r, {
					apiContext: n
				}) => {
					t(k());
					const s = await Object(h.a)(n(), e);
					s.ok ? t(S(s.body)) : t(A({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r = 3e4, n = 3e5) {
				return async (s, a, o) => new Promise((i, c) => {
					const l = Date.now() + n,
						d = () => {
							c(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > l) return d();
							const n = Date.now();
							await e(s, a, o);
							const m = await t(a);
							if (m) i();
							else if (!1 === m) c();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < l ? setTimeout(u, r) : d()
							}
						};
					setTimeout(u, r)
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, r) {
			e.exports = {
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
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				i = r.n(o);

			function c(e) {
				return s.a.createElement("div", {
					className: i.a.overview
				}, e.image, s.a.createElement("div", {
					className: i.a.description
				}, s.a.createElement("div", {
					className: i.a.grid
				}, s.a.createElement("div", {
					className: i.a.descriptionTitle,
					title: e.title
				}, e.title), s.a.createElement("div", {
					className: i.a.amountCell
				}, s.a.createElement(a.a, {
					amount: e.pointsAmount,
					className: i.a.amount,
					subredditId: e.subredditId
				})), s.a.createElement("div", {
					className: i.a.descriptionSubtitle
				}, e.subtitle), s.a.createElement("div", {
					className: i.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				subredditIcon: "_3OT024bIB7-_eUL8vmIzMN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/claims/constants.ts");
			const u = Object(l.a)(d.a),
				m = Object(l.a)(d.b);
			var p = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				h = r("./src/reddit/actions/governance/index.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				v = r("./src/reddit/endpoints/governance/crypto.ts"),
				x = r("./src/reddit/helpers/crypto/transactions.ts"),
				g = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				E = r("./src/reddit/helpers/governance/tokens.ts"),
				N = r("./src/reddit/helpers/trackers/crypto.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/crypto/claims.ts"),
				j = r("./src/reddit/selectors/gov.ts"),
				w = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				y = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				I = r("./src/reddit/components/SubredditIcon/index.tsx"),
				T = r("./src/reddit/selectors/subreddit.ts"),
				M = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				A = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				k = r("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				S = r.n(k);

			function R(e) {
				const t = Object(o.e)(t => Object(C.b)(t, e)),
					r = t && t.pointsToClaim;
				if (!r) throw new Error("Expected claim amount to approve");
				const s = Object(o.e)(t => Object(T.U)(t, e)),
					i = Object(o.e)(t => Object(j.n)(t, e));
				return a.a.createElement(A.a, {
					subredditId: e.subredditId,
					image: a.a.createElement(I.b, {
						className: S.a.subredditIcon,
						subredditOrProfile: s
					}),
					title: n.fbt._("Claim {pointsName}", [n.fbt._param("pointsName", i)], {
						hk: "zLhei"
					}),
					subtitle: n.fbt._("For your contributions to {subredditName}", [n.fbt._param("subredditName", s.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: r
				})
			}
			const P = e => a.a.createElement(M.b, {
				values: [
					[n.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(M.c)(), e.transaction.arguments[1]],
					[Object(M.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(c.a)((function(e) {
				const {
					onClose: t,
					subredditId: r
				} = e, s = Object(o.d)(), c = Object(_.a)(), {
					currentPointsAmount: l,
					nextPointsClaim: d,
					pointsName: I,
					tokenConversion: T,
					walletProvider: M
				} = Object(o.e)(Object(i.c)({
					currentPointsAmount: t => Object(j.h)(t, e),
					nextPointsClaim: t => Object(C.b)(t, e),
					pointsName: t => Object(j.n)(t, e),
					tokenConversion: t => Object(j.m)(t, e),
					walletProvider: t => Object(j.r)(t, e)
				}));
				if (!d) throw new Error("No available claim to make");
				if (!d.address) return a.a.createElement(w.a, {
					onClose: t
				});
				if (!M) throw new Error("No wallet provider");
				const A = Object(x.b)(M.extra.contracts.distribution.address, d.round, d.address, d.userKarma, d.signature),
					k = e => {
						c(Object(N.a)("points_claim", r, S, e))
					},
					S = Object(E.b)(d.pointsToClaim, T);
				return a.a.createElement(y.a, {
					approvalOverview: a.a.createElement(R, {
						subredditId: r
					}),
					approvalDetails: a.a.createElement(P, {
						transaction: A
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), s(Object(f.f)(Object(f.e)(n.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), O.b.SuccessCommunity))), s(m({
							subredditId: r
						})), async function(e, t, r, n, s) {
							await Object(g.a)(t, r), await e(Object(b.a)(Object(h.h)({
								subredditId: n
							}), async e => {
								const t = Object(j.h)(e(), {
									subredditId: n
								});
								return s !== t || null
							})), await e(Object(p.b)({
								forceFetch: !0
							}))
						}(s, M, e.hash, r, l).then(() => {
							c(Object(N.b)("points_claim", r, S)), s(function(e) {
								return Object(f.f)(Object(f.e)(n.fbt._("Your {pointsName} are ready!", [n.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), O.b.SuccessCommunityGreen))
							}(I))
						}).catch(e => {
							k(e.toString()), s(function(e) {
								return Object(f.f)(Object(f.e)(n.fbt._("Failed to claim your {pointsName}. Try again later", [n.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), O.b.Error))
							}(I))
						}).finally(() => {
							s(u({
								subredditId: r
							}))
						})
					},
					onTransactionFailure: k,
					subredditId: r,
					transaction: A,
					transactionIntent: Object(v.c)(r)
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3RwZXlqQ-Iin-F-rL6IYG4",
				header: "_2jRdJa8cJJOIUqpk7tjmJM",
				title: "c4tRBYxcJYSuTBRs4uJBu",
				closeButton: "_23b4K8MIubjQq2ix5KI8QR",
				body: "_1WFLRa1qVzmEB1vs-gujyU",
				leftSection: "I4Uc5svBBVMAC3Gv3cumu",
				sectionHeader: "_2zaE6P94B156zFeiUyAHGj",
				content: "_1Yqz3rGaFmyEoxy_Wc_MrB",
				rightSection: "_-4IOB0_BjX0SdDgbB8E5e"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/addQueryParams/index.ts"),
				l = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = r("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				p = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				h = r.n(p);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const b = Object(o.c)({
					userId: e => {
						const t = Object(d.i)(e);
						return t ? t.id : ""
					}
				}),
				v = Object(a.b)(b)((function(e) {
					const {
						onClose: t,
						userId: r
					} = e;
					return s.a.createElement("div", {
						className: h.a.container
					}, s.a.createElement("header", {
						className: h.a.header
					}, s.a.createElement("div", {
						className: h.a.title
					}, f._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), s.a.createElement(l.a, {
						className: h.a.closeButton,
						onClick: t
					})), s.a.createElement("div", {
						className: h.a.body
					}, s.a.createElement("section", {
						className: h.a.leftSection
					}, s.a.createElement("div", {
						className: h.a.sectionHeader
					}, f._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), s.a.createElement("div", {
						className: h.a.content
					}, s.a.createElement(u.a, {
						index: "1"
					}, f._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(u.a, {
						index: "2"
					}, f._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), s.a.createElement(u.a, {
						index: "3"
					}, f._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(u.a, {
						index: "4"
					}, f._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), s.a.createElement("section", {
						className: h.a.rightSection
					}, s.a.createElement(m.a, {
						url: Object(c.a)("http://www.reddit.com/vault/", {
							u: r
						}),
						scale: 5
					}))))
				}));
			t.b = Object(i.a)(v)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(n.createContext)(o);

			function c(e) {
				const t = t => s.a.createElement(i.Consumer, null, ({
					apiContext: r,
					gqlContext: n
				}) => s.a.createElement(e, a({
					apiContext: r,
					gqlContext: n
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
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
				return w
			})), r.d(t, "c", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/uniqueId.js"),
				a = r.n(s),
				o = r("./node_modules/raf/index.js"),
				i = r.n(o),
				c = r("./node_modules/react/index.js"),
				l = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				f = r("./src/higherOrderComponents/asModal/index.tsx"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/layout/row/Inline/index.tsx"),
				x = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = r.n(x);
			var E = Object(f.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return l.a.createElement("div", {
						className: g.a.wrapper
					}, l.a.createElement(v.a, {
						className: g.a.titleRow
					}, r), l.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), l.a.createElement(v.a, {
						className: g.a.buttonRow
					}, l.a.createElement(b.i, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				N = r("./src/reddit/controls/ErrorText/index.m.less"),
				_ = r.n(N);
			const O = Object(u.c)({
				activeModalId: h.a
			});
			class C extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
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
						className: r,
						errorModalBody: s,
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(_.a.wrapper, r)
					}, l.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && l.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const j = Object(d.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(C),
				w = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(j, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				y = e => l.a.createElement(w, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
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
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: n
					}, l)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				v = e => s.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class g extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
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
						errors: a = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(f, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
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
						values: r,
						maxLength: n,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.eb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.eb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e, t) {
				const [r, s] = Object(n.useState)(e);
				return [r, e => {
					t.current && s(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
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
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(o);
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
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				a = r.n(s);
			t.a = n.a.div("inlineRow", a.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.f103aacaf109aaa362bc.js.map