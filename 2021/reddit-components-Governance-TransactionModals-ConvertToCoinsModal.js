// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.73e4b0b1a35c28935950.js
// Retrieved at 7/14/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ConvertToCoinsModal"], {
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
			var a = !1,
				s = !1;

			function o(e, r, a) {
				if (s) throw new Error("unknown error");
				r || (r = t.UNKNOWN_ERROR), a || (a = {});
				var o = [];
				Object.keys(a).forEach((function(e) {
					try {
						o.push(e + "=" + JSON.stringify(a[e]))
					} catch (i) {
						o.push(e + "=" + JSON.stringify(a[e].toString()))
					}
				})), o.push("version=" + n.version);
				var c = e;
				o.length && (e += " (" + o.join(", ") + ")");
				var i = new Error(e);
				throw i.reason = c, i.code = r, Object.keys(a).forEach((function(e) {
					i[e] = a[e]
				})), i
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
				a && o("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), s = !!e, a = !!r
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
			var c = {
					debug: 1,
					default: 2,
					info: 2,
					warn: 3,
					error: 4,
					off: 5
				},
				i = c.default;

			function d(e, t) {
				i > c[e] || console.log.apply(console, t)
			}

			function l() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				d("warn", e)
			}
			t.setLogLevel = function(e) {
				var t = c[e];
				null != t ? i = t : l("invliad log level - " + e)
			}, t.warn = l, t.info = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				d("info", e)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var a = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, s = "0123456789abcdef".split(""), o = [0, 8, 16, 24], c = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], i = [224, 256, 384, 512], d = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, r) {
							return function(n) {
								return new x(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, a) {
								return new x(e, t, a).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = l(e, t, "hex");
							r.create = function() {
								return new x(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < d.length; ++n) {
								var a = d[n];
								r[a] = l(e, t, a)
							}
							return r
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: i,
							createMethod: m
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: i,
							createMethod: m
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var r = u(e, t, "hex");
								r.create = function(r) {
									return new x(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < d.length; ++n) {
									var a = d[n];
									r[a] = u(e, t, a)
								}
								return r
							}
						}], p = {}, b = [], h = 0; h < f.length; ++h)
						for (var v = f[h], g = v.bits, E = 0; E < g.length; ++E) {
							var y = v.name + "_" + g[E];
							b.push(y), p[y] = v.createMethod(g[E], v.padding)
						}

					function x(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					x.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, a = e.length, s = this.blocks, c = this.byteCount, i = this.blockCount, d = 0, l = this.s; d < a;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, r = 1; r < i + 1; ++r) s[r] = 0;
							if (t)
								for (r = this.start; d < a && r < c; ++d) s[r >> 2] |= e[d] << o[3 & r++];
							else
								for (r = this.start; d < a && r < c; ++d)(n = e.charCodeAt(d)) < 128 ? s[r >> 2] |= n << o[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++d)), s[r >> 2] |= (240 | n >> 18) << o[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], s[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
							if (this.lastByteIndex = r, r >= c) {
								for (this.start = r - c, this.block = s[i], r = 0; r < i; ++r) l[r] ^= s[r];
								O(l), this.reset = !0
							} else this.start = r
						}
						return this
					}, x.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						O(n)
					}, x.prototype.toString = x.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, a = this.extraBytes, o = 0, c = 0, i = ""; c < n;) {
							for (o = 0; o < t && c < n; ++o, ++c) e = r[o], i += s[e >> 4 & 15] + s[15 & e] + s[e >> 12 & 15] + s[e >> 8 & 15] + s[e >> 20 & 15] + s[e >> 16 & 15] + s[e >> 28 & 15] + s[e >> 24 & 15];
							c % t == 0 && (O(r), o = 0)
						}
						return a && (e = r[o], a > 0 && (i += s[e >> 4 & 15] + s[15 & e]), a > 1 && (i += s[e >> 12 & 15] + s[e >> 8 & 15]), a > 2 && (i += s[e >> 20 & 15] + s[e >> 16 & 15])), i
					}, x.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							a = this.extraBytes,
							s = 0,
							o = 0,
							c = this.outputBits >> 3;
						e = a ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(c);
						for (var i = new Uint32Array(e); o < n;) {
							for (s = 0; s < t && o < n; ++s, ++o) i[o] = r[s];
							o % t == 0 && O(r)
						}
						return a && (i[s] = r[s], e = e.slice(0, c)), e
					}, x.prototype.buffer = x.prototype.arrayBuffer, x.prototype.digest = x.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, a = this.outputBlocks, s = this.extraBytes, o = 0, c = 0, i = []; c < a;) {
							for (o = 0; o < r && c < a; ++o, ++c) e = c << 2, t = n[o], i[e] = 255 & t, i[e + 1] = t >> 8 & 255, i[e + 2] = t >> 16 & 255, i[e + 3] = t >> 24 & 255;
							c % r == 0 && O(n)
						}
						return s && (e = c << 2, t = n[o], s > 0 && (i[e] = 255 & t), s > 1 && (i[e + 1] = t >> 8 & 255), s > 2 && (i[e + 2] = t >> 16 & 255)), i
					};
					var O = function(e) {
						var t, r, n, a, s, o, i, d, l, u, m, f, p, b, h, v, g, E, y, x, O, C, j, w, N, I, _, M, P, k, A, S, T, L, z, D, R, G, U, B, F, V, q, H, W, J, Q, Y, X, $, Z, K, ee, te, re, ne, ae, se, oe, ce, ie, de, le;
						for (n = 0; n < 48; n += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], d = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | i >>> 31), r = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (i << 1 | o >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = a ^ (d << 1 | l >>> 31), r = s ^ (l << 1 | d >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = o ^ (u << 1 | m >>> 31), r = i ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = d ^ (f << 1 | p >>> 31), r = l ^ (p << 1 | f >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (a << 1 | s >>> 31), r = m ^ (s << 1 | a >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, b = e[0], h = e[1], J = e[11] << 4 | e[10] >>> 28, Q = e[10] << 4 | e[11] >>> 28, M = e[20] << 3 | e[21] >>> 29, P = e[21] << 3 | e[20] >>> 29, ce = e[31] << 9 | e[30] >>> 23, ie = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, q = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, z = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, Y = e[22] << 10 | e[23] >>> 22, X = e[23] << 10 | e[22] >>> 22, k = e[33] << 13 | e[32] >>> 19, A = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, R = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, y = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Z = e[35] << 15 | e[34] >>> 17, S = e[45] << 29 | e[44] >>> 3, T = e[44] << 29 | e[45] >>> 3, w = e[6] << 28 | e[7] >>> 4, N = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, G = e[26] << 25 | e[27] >>> 7, U = e[27] << 25 | e[26] >>> 7, x = e[36] << 21 | e[37] >>> 11, O = e[37] << 21 | e[36] >>> 11, K = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, H = e[8] << 27 | e[9] >>> 5, W = e[9] << 27 | e[8] >>> 5, I = e[18] << 20 | e[19] >>> 12, _ = e[19] << 20 | e[18] >>> 12, se = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, B = e[38] << 8 | e[39] >>> 24, F = e[39] << 8 | e[38] >>> 24, C = e[48] << 14 | e[49] >>> 18, j = e[49] << 14 | e[48] >>> 18, e[0] = b ^ ~v & E, e[1] = h ^ ~g & y, e[10] = w ^ ~I & M, e[11] = N ^ ~_ & P, e[20] = L ^ ~D & G, e[21] = z ^ ~R & U, e[30] = H ^ ~J & Y, e[31] = W ^ ~Q & X, e[40] = te ^ ~ne & se, e[41] = re ^ ~ae & oe, e[2] = v ^ ~E & x, e[3] = g ^ ~y & O, e[12] = I ^ ~M & k, e[13] = _ ^ ~P & A, e[22] = D ^ ~G & B, e[23] = R ^ ~U & F, e[32] = J ^ ~Y & $, e[33] = Q ^ ~X & Z, e[42] = ne ^ ~se & ce, e[43] = ae ^ ~oe & ie, e[4] = E ^ ~x & C, e[5] = y ^ ~O & j, e[14] = M ^ ~k & S, e[15] = P ^ ~A & T, e[24] = G ^ ~B & V, e[25] = U ^ ~F & q, e[34] = Y ^ ~$ & K, e[35] = X ^ ~Z & ee, e[44] = se ^ ~ce & de, e[45] = oe ^ ~ie & le, e[6] = x ^ ~C & b, e[7] = O ^ ~j & h, e[16] = k ^ ~S & w, e[17] = A ^ ~T & N, e[26] = B ^ ~V & L, e[27] = F ^ ~q & z, e[36] = $ ^ ~K & H, e[37] = Z ^ ~ee & W, e[46] = ce ^ ~de & te, e[47] = ie ^ ~le & re, e[8] = C ^ ~b & v, e[9] = j ^ ~h & g, e[18] = S ^ ~w & I, e[19] = T ^ ~N & _, e[28] = V ^ ~L & D, e[29] = q ^ ~z & R, e[38] = K ^ ~H & J, e[39] = ee ^ ~W & Q, e[48] = de ^ ~te & ne, e[49] = le ^ ~re & ae, e[0] ^= c[n], e[1] ^= c[n + 1]
					};
					if (a) e.exports = p;
					else
						for (h = 0; h < b.length; ++h) n[b[h]] = p[b[h]]
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
			var a = n(r("./node_modules/ethers/errors.js"));

			function s(e) {
				return !!e.toHexString
			}

			function o(e) {
				return e.slice ? e : (e.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function c(e) {
				if (!e || parseInt(String(e.length)) != e.length || "string" == typeof e) return !1;
				for (var t = 0; t < e.length; t++) {
					var r = e[t];
					if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1
				}
				return !0
			}

			function i(e) {
				if (null == e && a.throwError("cannot convert null value to array", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), s(e) && (e = e.toHexString()), "string" == typeof e) {
					var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
					t || a.throwError("invalid hexidecimal string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== t[1] && a.throwError("hex string must have 0x prefix", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), (e = e.substring(2)).length % 2 && (e = "0" + e);
					for (var r = [], n = 0; n < e.length; n += 2) r.push(parseInt(e.substr(n, 2), 16));
					return o(new Uint8Array(r))
				}
				return c(e) ? o(new Uint8Array(e)) : (a.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function d(e) {
				for (var t = [], r = 0, n = 0; n < e.length; n++) {
					var a = i(e[n]);
					t.push(a), r += a.length
				}
				var s = new Uint8Array(r),
					c = 0;
				for (n = 0; n < t.length; n++) s.set(t[n], c), c += t[n].length;
				return o(s)
			}

			function l(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = s, t.isArrayish = c, t.arrayify = i, t.concat = d, t.stripZeros = function(e) {
				var t = i(e);
				if (0 === t.length) return t;
				for (var r = 0; 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = i(e)).length) throw new Error("cannot pad");
				var r = new Uint8Array(t);
				return r.set(e, t - e.length), o(r)
			}, t.isHexString = l;
			var u = "0123456789abcdef";

			function m(e) {
				if (s(e)) return e.toHexString();
				if ("number" == typeof e) {
					e < 0 && a.throwError("cannot hexlify negative value", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e >= 9007199254740991 && a.throwError("out-of-range", a.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; e;) t = u[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof e) {
					var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return r || a.throwError("invalid hexidecimal string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== r[1] && a.throwError("hex string must have 0x prefix", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (c(e)) {
					for (var n = [], o = 0; o < e.length; o++) {
						var i = e[o];
						n.push(u[(240 & i) >> 4] + u[15 & i])
					}
					return "0x" + n.join("")
				}
				return a.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function f(e, t) {
				for (l(e) || a.throwError("invalid hex string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function p(e) {
				var t, r = 0,
					n = "0x",
					s = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && a.throwError("at least on of recoveryParam or v must be specified", a.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), n = f(e.r, 32), s = f(e.s, 32), "string" == typeof(r = e.v) && (r = parseInt(r, 16));
					var o = e.recoveryParam;
					null == o && null != e.v && (o = 1 - r % 2), r = 27 + o
				} else {
					var c = i(e);
					if (65 !== c.length) throw new Error("invalid signature");
					n = m(c.slice(0, 32)), s = m(c.slice(32, 64)), 27 !== (r = c[64]) && 28 !== r && (r = 27 + r % 2)
				}
				return {
					r: n,
					s,
					recoveryParam: r - 27,
					v: r
				}
			}
			t.hexlify = m, t.hexDataLength = function(e) {
				return l(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, r) {
				return l(e) || a.throwError("invalid hex data", a.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && a.throwError("hex data length must be even", a.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (l(e) || a.throwError("invalid hex string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = f, t.splitSignature = p, t.joinSignature = function(e) {
				return m(d([(e = p(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				a = r("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + n.keccak_256(a.arrayify(e))
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
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t),
					s = new n.BigNumber(r.dividedBy(a)),
					o = new n.BigNumber("100").multipliedBy(s);
				return new n.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditCoins.json");
			var i = r("./src/reddit/featureFlags/subredditPoints.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const l = Object(s.a)(d.nb),
				u = (e, t, r) => async (n, a, {
					gqlContext: s
				}) => {
					var d, u;
					if (!i.a.has(t.toLowerCase())) return;
					if (void 0 !== a().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const m = await ((e, t) => Object(o.a)(e, {
						...c,
						variables: {
							subreddit: t
						}
					}))(s(), e);
					if (m.ok) {
						const t = m.body;
						n(l({
							subredditId: e,
							amount: (null === (u = null === (d = t.data.subredditInfoById) || void 0 === d ? void 0 : d.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "i", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/models/Gold/ProductOffer.ts"),
				x = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				C = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/models/Payments/index.ts");
			const w = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				N = e => e.map(e => e.message).join(" : "),
				I = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await Object(C.f)(o(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
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
				}, _ = (e, t, r, a, s, o) => async (i, d, {
					gqlContext: l
				}) => {
					var u;
					const m = d(),
						p = () => i(Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = s === y.c.Premium,
						x = s === y.c.Powerups,
						O = {};
					if (x && o) O.powerUps = {
						subredditId: o,
						isAnonymous: r
					};
					else if (b) {
						const e = Object(v.c)(m, {
							provider: j.b.Stripe
						});
						if (!e) return;
						O.premium = {
							pricePackage: e
						}
					}
					let w, _, M = "";
					try {
						M = await i(I(t, a, O))
					} catch (k) {
						return f.c.captureException(k), void(k.message && i(Object(h.stripeApiError)(k.message)))
					}
					i(Object(h.stripeTokenPending)());
					const P = Object(g.y)(m);
					if (P || (w = await i(Object(h.validateAndCreateStripeToken)(e)), _ = Object(g.v)(m), w)) try {
						const t = c()(),
							n = P || _ ? w && _ ? Object(C.h)(l(), t, M, w.id) : P ? Object(C.j)(l(), t, M, P) : null : Object(C.i)(l(), t, M, w.id),
							s = await n;
						if (!(null == s ? void 0 : s.ok)) return void p();
						const m = s.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void i(Object(h.stripeApiError)(N(m.errors)));
						const {
							ok: f,
							payment: v,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = m;
						if (f && v.status === C.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return void(r.message ? i(Object(h.stripeApiError)(r.message)) : p());
							let n;
							if (!(n = P ? await Object(C.e)(l(), c()(), v.id, P) : await Object(C.d)(l(), c()(), v.id, w.id, _)).ok) return void p();
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== C.a.Paid) return void p()
						} else if (f && v.status !== C.a.Paid) return void p();
						const y = Object(E.j)(d());
						y && (x && o ? i(G({
							subredditId: o,
							powerupsCount: a,
							user: y,
							isAnonymous: r
						})) : b && i(U({
							user: y
						})))
					} catch (k) {
						f.c.captureException(k), p()
					}
				}, M = (e, t, r, n, a) => async (s, o, {
					gqlContext: d
				}) => {
					var l;
					const m = o(),
						p = n === y.c.Premium,
						b = n === y.c.Powerups,
						g = {};
					if (b && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (p) {
						const e = Object(v.c)(m, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let x = "";
					try {
						x = await s(I(e, r, g))
					} catch (M) {
						return f.c.captureException(M), M.message && s(Object(h.paypalApiError)(M.message)), null
					}
					const O = i.a.redditUrl;
					let _ = {
						_o: O,
						o: x,
						pt: n
					};
					b && a && (_ = {
						..._,
						r: a
					});
					try {
						const e = Object(u.a)(`${O}/framedModal/paypal-finish`, {
								..._,
								s: !0
							}),
							n = Object(u.a)(`${O}/framedModal/paypal-finish`, _),
							i = c()(),
							m = await Object(C.g)(d(), i, x, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return s(Object(h.paypalApiError)(N(e.errors))), null;
							const n = Object(E.j)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === C.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && n) return a ? s(G({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : p && s(U({
									user: n
								})), null
							}
						}
					} catch (M) {
						f.c.captureException(M)
					}
					return s(Object(h.paypalApiError)(w())), null
				}, P = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var s;
					try {
						const n = c()(),
							o = await Object(C.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(h.paypalApiError)(N(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						f.c.captureException(o)
					}
					return r(Object(h.paypalApiError)(w())), !1
				}, k = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(C.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(a)), a[0] && e(Object(h.selectSavedCard)(a[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						f.c.captureException(a), e(Object(h.savedCardsSuccess)([]))
					}
				}, A = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(C.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(N(a))
					} catch (a) {
						f.c.captureException(a)
					}
				}, S = Object(m.a)(b.O), T = Object(m.a)(b.P), L = Object(m.a)(b.Q), z = e => async (t, r) => {
					await t(S(e)), t(Object(l.f)({
						kind: p.b.Error,
						duration: l.a,
						text: e
					}))
				}, D = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					a(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(C.b)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(z(n[0].message));
							a(L({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						f.c.captureException(c), a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, R = Object(m.a)(b.S), G = e => async (t, r) => {
					t(R(e)), t(Object(x.k)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(O.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, U = Object(m.a)(b.W), B = Object(m.a)(b.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return M
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				f = r("./src/redditGQL/operations/ProductOffers.json");
			var p = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(a.a)(b.db),
				v = Object(a.a)(b.cb),
				g = Object(a.a)(b.bb),
				E = Object(a.a)(b.Z),
				y = Object(a.a)(b.Y),
				x = Object(a.a)(b.X),
				O = Object(a.a)(b.Eb),
				C = Object(a.a)(b.Cb),
				j = Object(a.a)(b.Db),
				w = Object(a.a)(b.Hb),
				N = Object(a.a)(b.Gb),
				I = Object(a.a)(b.Fb),
				_ = e => async t => {
					t(Object(o.f)({
						kind: i.b.Error,
						duration: o.a,
						text: e
					}))
				}, M = (e, t) => async r => {
					e === c.c.Premium ? r(k()) : t && r(P(e, t))
				}, P = (e, t) => async (r, a, {
					gqlContext: s
				}) => {
					const o = a();
					if (!Object(p.h)(o, {
							subredditId: t,
							type: e
						})) {
						r(h());
						try {
							const n = await ((e, t, r, n) => Object(l.a)(e, {
								...f,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(s(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(v({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(g(e)), r(_(e))
						}
					}
				}, k = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, o;
					const i = c.c.Premium;
					e(E());
					try {
						const t = await ((e, t) => Object(l.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(y({
								productOffers: null !== (o = r.data.globalProductOffers.offers) && void 0 !== o ? o : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(x(t)), e(_(t))
					}
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, o, c;
					e(O());
					try {
						const t = await (e => Object(l.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(j({
								subscriptions: null !== (c = null === (o = r.data.identity) || void 0 === o ? void 0 : o.econSubscriptions) && void 0 !== c ? c : []
							}))
						}
					} catch (i) {
						s.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(C(t)), e(_(t))
					}
				}, S = e => async (t, r, {
					gqlContext: a
				}) => {
					var s;
					t(w(e));
					try {
						const r = await Object(d.b)(a(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: a
								} = n.data.cancelEconRecurringPayment;
							if (null == a ? void 0 : a.length) throw new Error(a[0].message);
							t(I({
								orderId: e
							}))
						}
						return !0
					} catch (o) {
						const e = null !== (s = o.message) && void 0 !== s ? s : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(N(e)), t(_(e)), !1
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return f
			})), r.d(t, "cardElementChange", (function() {
				return p
			})), r.d(t, "stripeTokenPending", (function() {
				return b
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return E
			})), r.d(t, "toggleRememberCard", (function() {
				return y
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "_deleteSavedCard", (function() {
				return O
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return j
			})), r.d(t, "savedCardsSuccess", (function() {
				return w
			})), r.d(t, "loadSavedCards", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.B),
				l = Object(s.a)(c.w),
				u = Object(s.a)(c.b),
				m = Object(s.a)(c.y),
				f = Object(s.a)(c.a),
				p = Object(s.a)(c.E),
				b = Object(s.a)(c.G),
				h = Object(s.a)(c.F),
				v = Object(s.a)(c.D),
				g = e => async (t, r) => {
					const a = r(),
						s = Object(i.h)(a),
						o = Object(i.l)(a),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: o
						});
					if (s.trim()) {
						if (!d && c) return c;
						t(h(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(f({
							message: e
						}))
					}
				}, E = Object(s.a)(c.x), y = Object(s.a)(c.H), x = Object(s.a)(c.C), O = Object(s.a)(c.g), C = e => async (t, r, {
					apiContext: n
				}) => {
					t(O(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, j = Object(s.a)(c.z), w = Object(s.a)(c.A), N = () => async (e, t, {
					apiContext: r
				}) => {
					e(j());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(n)), n[0] && e(x(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(w([]))
					}
				}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "h", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/config.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/reddit/models/Poll/index.ts"),
				m = r("./src/redditGQL/operations/PollVote.json"),
				f = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/reddit/endpoints/governance/wallet.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				v = r("./src/reddit/selectors/crypto/points.ts"),
				g = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/governance/errorToast.ts");
			const y = Object(a.a)(g.b),
				x = Object(a.a)(g.c),
				O = Object(a.a)(g.e),
				C = (Object(a.a)(g.f), Object(a.a)(g.g), Object(a.a)(g.h)),
				j = Object(a.a)(g.i),
				w = Object(a.a)(g.j),
				N = Object(a.a)(g.k),
				I = Object(a.a)(g.q),
				_ = Object(a.a)(g.r),
				M = Object(a.a)(g.s),
				P = Object(a.a)(g.t),
				k = Object(a.a)(g.u),
				A = Object(a.a)(g.v),
				S = Object(a.a)(g.w),
				T = Object(a.a)(g.x),
				L = (e, t) => async (r, n, {
					apiContext: a,
					gqlContext: s
				}) => {
					let o, i = n().polls.models[e];
					if (r(w({
							pollId: e
						})), (o = i.type === u.a.GA ? await ((e, t, r) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(s(), e, t) : await
							function(e, t, r, n) {
								return Object(f.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(a(), i.subredditId, e, t)).ok) {
						if (i.type === u.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							r(O({
								pollId: i.id,
								optionId: t,
								options: e
							}))
						} else r(N(o.body));
						const a = n();
						if ((i = a.polls.models[e]) && Object(u.d)(i)) {
							const {
								postId: e
							} = i, t = a.posts.models[e];
							t && t.voteState === h.a.notVoted && r(Object(c.fb)(e))
						}
					} else r(j({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(E.a)(r, o.error || o.errors[0].messsage)
				}, z = (e, t) => async (r, a, {
					apiContext: c
				}) => {
					var l;
					r(M());
					const u = a().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(f.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(c(), {
						...e,
						contentId: u
					});
					m.ok ? (r(P({
						...m.body,
						subredditId: e.subredditId
					})), r(Object(i.f)({
						kind: b.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(s.a)(e.amount)), n.fbt._param("tokenName", (null === (l = Object(v.b)(a(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(o.f)())) : (r(I({
						error: m.error
					})), Object(E.a)(r, m.error))
				}, D = e => async (t, r, {
					apiContext: n
				}) => {
					t(A());
					const a = await Object(p.a)(n(), e);
					a.ok ? t(S(a.body)) : t(k({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r = 3e4, n = 3e5) {
				return async (a, s, o) => new Promise((c, i) => {
					const d = Date.now() + n,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const n = Date.now();
							await e(a, s, o);
							const m = await t(s);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < d ? setTimeout(u, r) : l()
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(c.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(i.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = r.n(c);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: i.a.title
				}, e.children), a.a.createElement(o.a, {
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					s = `${c.a.assetPath}/${n}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return a.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
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
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/Governance/Token/index.tsx"),
				l = r("./src/reddit/helpers/governance/tokens.ts"),
				u = r("./src/reddit/selectors/crypto/points.ts"),
				m = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				f = r.n(m);
			const p = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(s.b)(p)((function(e) {
				var t;
				return a.a.createElement("div", {
					className: Object(c.a)(f.a.container, e.className, {
						[f.a.small]: e.small
					})
				}, a.a.createElement(d.a, {
					className: Object(c.a)(f.a.token, {
						[f.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(l.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/gov.ts"),
				c = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				i = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				d = r.n(i);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const t = Object(s.e)(t => Object(o.e)(t, e));
				return a.a.createElement("div", {
					className: d.a.currentBalance
				}, l._("Current balance:", null, {
					hk: "2NDvrq"
				}), a.a.createElement(c.a, {
					className: d.a.currentBalanceAmount,
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
				a = r.n(n),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/reddit/actions/gold/productOffers.ts"),
				c = r("./src/reddit/hooks/useThunkDispatch.ts"),
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./node_modules/fbt/lib/FbtPublic.js"),
				u = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx");
			const f = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M12.7 27.6c6.7 0 12-1.6 12-3.6v16.1c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6v-16c0 1.9 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M21.9 26.3a29 29 0 01-8.6 1.3c.2 3.5.3 10.8.2 16 3 0 5.8-.4 7.8-1 .3-4.6 0-11.6.6-16.3z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M2.8 30.1c-.1-.7-.2-1.5.3-2 .6-.3 1.4 0 1.8.5 1.8 1.7 1.3 2.6 1.4 5v5.1c0 1.4-.6 1.8-1.7.6C3.4 38 3.3 37 3.2 35.6c-.3-2 0-3.6-.4-5.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M24.7 24c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6 0-1.9 5.4-3.5 12-3.5 6.7 0 12 1.6 12 3.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M24.7 24.3c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM24.7 32.2c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M24.7 24.3l-.4-.6-1.2-.8c-1.2-.5-2.8-1-4.7-1.2a35.2 35.2 0 00-13 .8c-1 .3-2 .7-2.8 1.2-.4.2-.7.5-.7.6V29l.2 6.8v4.4l.7.4 2.3.8 2.6.5a37.8 37.8 0 0010.5 0c1.6-.2 3.3-.6 4.5-1.2l.4-.2.2-.2.1-.1v-.3l.2-2.5.2-4.7.5-8.3a60 60 0 012 15.4l-.1.4a3 3 0 01-.1.6l-.2.6-.3.4-.7.7a4 4 0 01-.6.4l-.6.3-2.4.7-4.5.6a45 45 0 01-12.5-1.1l-1.9-.7a5 5 0 01-1.7-1.3 2 2 0 01-.5-1.2v-1-1.8-3.6l-.1-7V24.2l.1-.6c0-.2.2-.4.3-.5.5-.6 1-1 1.5-1.2l1.6-.7a34.3 34.3 0 0111.8-1.1c1.7.2 4 .6 6 1.4 1 .4 2 .9 2.5 1.4.3.3.6.5.7.8l.1.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M12.7 44.4C6.4 44.4 0 42.9 0 40.1V24.3c0-2.8 6.4-4.2 12.7-4.2 6.4 0 12.8 1.4 12.8 4.2v15.8c0 2.8-6.4 4.3-12.8 4.3zm0-22.8c-7.2 0-11.2 1.8-11.2 2.7v15.8c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V24.3c0-.9-4-2.7-11.3-2.7z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M34.8 7.8c6.6 0 12-1.6 12-3.5v39.4c0 2-5.4 3.6-12 3.6s-12-1.6-12-3.6V4.3c0 2 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M44 6.6a29 29 0 01-8.6 1.2c-.4 13 .6 26.5.2 39.4 3 0 5.8-.4 7.8-1 1-13.2-1.3-26.4.5-39.6z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M24.6 10.1c-.1-.7-.2-1.5.4-2 .5-.3 1.3 0 1.8.5 1.7 1.7 1.6 4.4 1.5 6.9-.3 4.5-.5 9-.4 13.6 0 2.2.7 11.1.5 13.2-.1 1.4-.6 1.8-1.7.6-1.2-1.3-1.3-3.5-1.3-5l-.1-13.2c0-4.9.3-9.8-.7-14.6z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M46.8 4.3c0 2-5.4 3.5-12 3.5s-12-1.6-12-3.5c0-2 5.4-3.5 12-3.5s12 1.5 12 3.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M46.8 4.3c0 .6-.3 1.1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 6.7c-.5-.2-1-.6-1.4-1-.4-.3-.8-.8-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 12.2c0 .5-.3 1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 14.6l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 20c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6a48.7 48.7 0 0019 0c.6-.1 1-.3 1.5-.6.5-.2 1-.6 1-1.1zM46.8 28c0 .5-.3 1-.7 1.4l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM46.8 35.8c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M46.8 4.3l-.2-.4-.1-.2-.3-.3c-.5-.4-1.3-.8-2.2-1A35.5 35.5 0 0027.9 2c-1.4.2-2.7.6-3.6 1.2-.4.3-.8.7-.8 1V4.9a2901 2901 0 01.6 21.3v10.6l.1 5.3v1.6c0-.1 0 0 0 0 0-.1 0 0 0 0 .3.2 1 .6 1.7.8 1.2.5 2.6.7 4 1A36.3 36.3 0 0044 44.3a4.1 4.1 0 001.4-.8v.1-1-2.2l.1-8.2c.2-10.6.5-20.3.9-28a163.1 163.1 0 011.4 39v.4l-.2.7-.3.6-.4.4c-.6.5-1.1.8-1.7 1a16 16 0 01-3.3 1 36 36 0 01-15.8-.7c-1-.3-2-.6-3-1.3a3 3 0 01-.5-.7l-.3-.5v-.5-1.5-2.9-5.7L22 12.7V7.9a39290.5 39290.5 0 000-3.5V4c0-.2 0-.4.2-.5l.2-.4.2-.3c.7-.7 1.5-1 2.2-1.4l2.3-.7a33.5 33.5 0 0114 .1c1.6.4 3 1 4 1.5 1.2.6 1.8 1.5 1.7 2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M34.8 48c-6.3 0-12.7-1.5-12.7-4.3V4.3C22 1.5 28.5 0 34.8 0c6.4 0 12.8 1.5 12.8 4.3v39.4c0 2.8-6.4 4.3-12.8 4.3zm0-46.5c-7.3 0-11.2 1.8-11.2 2.8v39.4c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V4.3c0-1-4-2.8-11.3-2.8z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M22.6 47.5c5.6 0 10.1-5.2 10.1-11.6 0-6.4-4.5-11.6-10-11.6-5.7 0-10.2 5.2-10.2 11.6 0 6.4 4.5 11.6 10.1 11.6z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M28.5 30.2c.3.4.7.8 1.2 1 .5.2 1.2-.1 1.2-.7 0-.3-.2-.5-.3-.7-.7-1.1-2.3-3.5-3.8-3.5-1.7.1 1.3 3.4 1.7 3.9z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M16.3 39.8l.2 1.6c0 1 .2 2.1.6 3.3.1.6.3 1.3.7 1.8l.6.5.3.2h3.6c1.4 0 2.8-.4 4-1a10 10 0 003.3-2.9 12.2 12.2 0 000-14.7 9.2 9.2 0 00-2.7-2.1L26 26l-.7-.3a9.7 9.7 0 00-3.3-.4h-1.7l-.8-.1h-.4c-.3.2-.6.7-.7 1.1-.4.9-.6 1.8-.8 2.7l-.3 2.7a14.6 14.6 0 01.2-6l.4-.8.7-.7.6-.2h3.2c2.2 0 4.3.7 6 2 1.6 1.2 2.8 2.8 3.5 4.6a13.9 13.9 0 010 10.4 11 11 0 01-6.5 6.4 9 9 0 01-3.2.4 4046.6 4046.6 0 01-4-.2 2 2 0 01-.9-.7c-.4-.5-.6-1.2-.8-2l-.3-2.1v-3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M19.5 47.5c5.5 0 10-5.2 10-11.6 0-6.4-4.5-11.6-10-11.6-5.6 0-10.2 5.2-10.2 11.6 0 6.4 4.6 11.6 10.2 11.6z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M24.5 46l.5-.5.4-.3.5-.6a11.8 11.8 0 003.4-7.6c0-1.5 0-2.8-.3-3.7-.4-1.6-1.1-3.2-2.1-4.6a10 10 0 00-4-3.2 8.5 8.5 0 00-9.5 2c-2.1 2-3.3 4.8-3.4 7.7A12.6 12.6 0 0012 43c.8 1 1.7 2 2.8 2.7a9 9 0 006.7 1.3c1-.3 2-.7 2.8-1.2-.7.6-1.6 1.2-2.7 1.6-1.2.4-2.5.6-3.8.4a9.2 9.2 0 01-5.6-2.8 12.8 12.8 0 01-3.1-6.8 13.4 13.4 0 01.7-6.9l.3-.7.4-.8.4-.7.2-.3.2-.4c.7-.9 1.4-1.6 2.3-2.3l.6-.4.7-.4.6-.4.4-.1.4-.2.7-.2.7-.2h.8l.7-.1c1 0 2 .1 2.9.4l1.3.5.6.3.6.4c.2 0 .4.2.6.4l.5.4 1 1 .4.5.4.5.4.6.3.5a12.9 12.9 0 011.2 9.5l-.3 1-.3.7-.2.6-.7 1.1-.4.6c0 .2-.2.3-.4.5-.5.7-1 1.2-1.6 1.6l-.7.5-.4.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M19.8 42.7c-3.3 0-6-3-6-6.8 0-3.7 2.7-6.8 6-6.8 1 0 2 .3 2.8.7.5.4.7 1.1.4 1.7-.2.6-.9.9-1.4.5-.6-.3-1.2-.4-1.8-.4-2 0-3.8 2-3.8 4.3 0 2.4 1.7 4.3 3.8 4.3 1.4 0 2.6-.7 3.3-2 .3-.6 1-.8 1.5-.4.5.3.7 1 .3 1.7-1 2-3 3.2-5 3.2z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M20.8 40.6c1.6-.2 3-1.4 4-2.7l-.2-.1c-.5-.4-1.2-.2-1.5.4-.7 1.3-2 2-3.3 2-1.5 0-2.9-1-3.5-2.5.8 2 2.7 3.2 4.5 2.9z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M16.2 40.3a6.7 6.7 0 01.2-8 4.8 4.8 0 016.6-.7c.3-.7 0-1.4-.4-1.8-.9-.4-1.8-.7-2.8-.7-3.3 0-6 3-6 6.8s2.7 6.8 6 6.8c1 0 2.1-.3 3-.9-2.5 1.3-5.1.5-6.6-1.5z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M12 30.5c-.9 1.7-1.3 4-1.3 5.9 0 2.8 2.2 9 8 10 .4.1.8-.1.8-.5l-.1-.3c-.7-1-2.2-1.1-3.3-1.8-2-1.3-3-2.8-3.6-4.8-.7-2.2-.8-4.6 0-6.7a7.5 7.5 0 015.1-4.4c.9-.2 1.9-.2 2.5-.8.7-.7-.4-1.2-1.2-1.2-1.8 0-5 1-6.9 4.6z",
					fill: "#fff"
				})),
				p = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M44.35 29.16V43.3l-17.62 3.77V32.93l17.62-3.77z",
					fill: "#D0DDDF"
				}), a.a.createElement("path", {
					d: "M26.73 32.93v14.15L3.9 42.65V28.5l10.05-12.68 12.8 17.11z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M8.39 21.76a55.6 55.6 0 01-3.25 4.32c-.5.59-1.04 1.17-1.35 1.87-.32.7-.37 2.28.07 2.9.72-.44 1.11-1.4 1.63-2.07.64-.82 1.53-1.75 2.2-2.54 1.83-2.18 3.58-4.67 5.4-6.85.23-.26.54-.53.88-.57.37-.05.67.34.77.48 2.99 4.2 5.96 7.9 8.98 11.56a66.11 66.11 0 003.01 3.41c.4-.58.44-1.37.24-2.06s-.58-1.3-.97-1.9l-3.96-6.17a46.92 46.92 0 00-2.39-3.49 46.77 46.77 0 00-3.39-3.76c-1.42-1.47-2.62-2.57-4.05-.57-1.29 1.8-2.55 3.63-3.82 5.44z",
					fill: "#D0DDDF"
				}), a.a.createElement("path", {
					d: "M13.55 9.43L30.9 5.72a2.1 2.1 0 012.12.81L46.35 24.7c.71.96.55 2.32-.36 3.08l-1.64 1.38-17.62 3.77 1.64-1.37a2.28 2.28 0 00.36-3.09L15.18 10.04a1.58 1.58 0 00-1.63-.61z",
					fill: "#EA0027"
				}), a.a.createElement("path", {
					d: "M41.72 27.4c-1.9.4-3.81.76-5.73 1.1l-1.89.33-3.2.54c-.57.1-1.16.2-1.68.46a6.2 6.2 0 00-2.05 1.99c-.1.13-.2.29-.15.45.07.24.4.23.65.18 4.6-.98 9.18-2.09 13.73-3.33 1.17-.32 3.23-.77 3.9-1.95.53-.94-.45-.65-.98-.45-.84.31-1.72.5-2.6.68z",
					fill: "#A1000A"
				}), a.a.createElement("path", {
					d: "M28.73 28.47c.71.97.55 2.32-.36 3.09l-1.64 1.37-12.8-17.11L3.9 28.5l-1.6-1.87a2.6 2.6 0 01-.06-3.28L12.65 10a1.58 1.58 0 012.53.04l13.55 18.43z",
					fill: "#EA0027"
				}), a.a.createElement("path", {
					d: "M2.22 23.34c.24-.55 3.56-4.9 7.41-9.93l1.47-1.91.74-.97.37-.48.19-.24a1.93 1.93 0 01.87-.64c.25-.08.42-.1.63-.15l1.17-.26 2.29-.51c3-.67 5.7-1.28 7.64-1.74l4.22-.99 1.07-.24.55-.13a2.63 2.63 0 012.56.9l.1.13.1.12.16.22 5.5 7.3 5.55 7.44 1.39 1.86.69.93a2.99 2.99 0 01.65 1.34 3.11 3.11 0 01-.87 2.9l-.14.13-.11.1-.22.18-.44.37-.43.37-.12.1-.02.02.05 8.1.02 6.39-9.68 2.08L26.74 48l-12.21-2.46-11.3-2.34.06-4.63.06-3.67.14-6.25-1.05-1.28c-.18-.23-.33-.4-.51-.65a2.9 2.9 0 01.1-3.54 2.8 2.8 0 00-.14 2.8c.23.47.63.8 1 1.19l.58.59.64.66.2 3.62.18 3.66.14 3.59L4.7 41l.02.83v.05l.01.01v.02l.02.03h.04l.01-.01h.06l.26.05 1 .18 1.84.33c1.14.21 2.11.4 2.87.57l8.3 1.82 7.6 1.63 9.01-1.82 8.25-1.7.02-14 1.48-1.25.32-.28a1.85 1.85 0 00.57-.93 1.9 1.9 0 00-.17-1.4c-.11-.2-.3-.44-.47-.67l-.5-.68-3.99-5.37-7.5-10.1-.9-1.2-.22-.3a1.66 1.66 0 00-.66-.52 1.56 1.56 0 00-.83-.12L31 6.2l-.18.04-1.42.31-5.5 1.2-10.36 2.17c-.12.04-.24.1-.34.18-.11.08-.18.18-.32.35l-.76.95-1.65 2.03-3.44 4.17a712.42 712.42 0 01-4.81 5.74z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M26.74 47.79l-.14-.03-23.4-4.54V28.76l-1.42-1.68a3.31 3.31 0 01-.09-4.16L12.11 9.57c.33-.41.79-.7 1.3-.82l17.35-3.71c1.06-.22 2.16.2 2.8 1.08L46.9 24.29a2.98 2.98 0 01-.47 4.03l-1.4 1.16v14.39l-18.3 3.92zM4.58 42.08l22.14 4.3 16.95-3.63V28.83l1.88-1.58c.63-.53.75-1.47.26-2.14L32.46 6.95c-.33-.45-.9-.67-1.43-.55L13.7 10.1a.88.88 0 00-.51.33L2.77 23.78c-.55.7-.53 1.71.05 2.4l1.76 2.06v13.84z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M19.17 38.34a3.95 3.95 0 01-2.35 2.42c-1.17.43-2.58.29-3.65-.25l-.4-.2-.36-.24c-.23-.17-.47-.33-.66-.53-.2-.2-.4-.39-.58-.6-.16-.21-.31-.43-.46-.66a8.9 8.9 0 01-.68-1.44 6.35 6.35 0 01-.28-1.61l.15-.1.89 1.08c.32.34.6.72.95 1.02.64.67 1.4 1.22 2.21 1.61.81.41 1.73.6 2.62.46.9-.16 1.73-.58 2.5-1.1l.1.14z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M18.11 36.14c.44.35.73.65.99.9l.66.67.61.65c.24.25.54.52.92.92-.42.36-.93.48-1.45.43a2.33 2.33 0 01-1.4-.71c-.37-.4-.6-.9-.66-1.39-.06-.5.02-1 .33-1.47zM6.7 31.23c.05-.8.31-1.54.85-2.2.25-.33.63-.61 1.09-.82a2.44 2.44 0 011.55-.07c.26.06.45.2.68.3.18.13.37.26.53.42a4.38 4.38 0 011.32 3.22c-.67-.44-1.19-.92-1.7-1.33a4.12 4.12 0 00-1.46-.87h-.12c-.09-.04-.17.01-.27 0-.2.05-.44.1-.7.26-.52.27-1.08.7-1.77 1.1zM17.37 33.14c.05-.8.32-1.54.85-2.2.26-.33.64-.62 1.1-.82a2.44 2.44 0 011.54-.07c.26.06.45.19.68.3.18.13.38.26.53.4a4.38 4.38 0 011.32 3.23c-.67-.44-1.18-.92-1.69-1.33a4.11 4.11 0 00-1.47-.87h-.12c-.08-.03-.17.01-.27 0-.2.05-.44.11-.7.26-.52.27-1.08.7-1.77 1.1zM40.82 18.12l-3.9-5.23-16.81 3.6 3.9 5.23 16.8-3.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M29.38 22.86c4.52 0 8.18-5 8.18-11.17S33.9.52 29.38.52s-8.18 5-8.18 11.17 3.66 11.17 8.18 11.17z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M24.7 6.5c-.27.44-.57.9-1.04 1.11-.48.21-1.17.01-1.25-.5-.04-.27.1-.53.22-.77.6-1.11 1.85-3.6 3.35-3.72 1.67-.13-.97 3.38-1.27 3.88z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M34.5 15.46c.12.16.22 1.35.12 2.94-.06.79-.15 1.68-.38 2.59-.12.45-.27.9-.53 1.34a2.1 2.1 0 01-.54.62 1.4 1.4 0 01-.82.29c-1.08.05-2.01.1-2.7.16a6.23 6.23 0 01-2.09-.12 7.2 7.2 0 01-2.03-.81 9.84 9.84 0 01-3.16-3.1 14.78 14.78 0 01-2.2-8.4 14.29 14.29 0 012.05-7.06 8.88 8.88 0 012.61-2.66 8.13 8.13 0 013.4-1.2C28.8-.02 29.4 0 29.87.02l1.5.06.36.02c.07 0 .2 0 .3.02l.3.06c.4.13.72.42.95.77.35.56.47 1.07.58 1.56.2.98.25 1.89.27 2.75.01.87-.02 1.68-.09 2.45-.23-.69-.47-1.5-.74-2.38-.27-.86-.55-1.78-.9-2.56a4.5 4.5 0 00-.43-.73l-.1-.1c-.04 0-.07 0-.1.02-.01 0 .01.01-.04.02l-.3.02c-.79.06-1.45.06-1.91.02a5.96 5.96 0 00-4.27 1.12 8.2 8.2 0 00-2.66 3.6 13.5 13.5 0 00-.54 8.43c.67 2.61 2.13 4.83 4.02 6.07.95.62 1.99.96 3 1l3.25-.04a.5.5 0 00.36-.15c.13-.12.25-.3.35-.48.42-.8.78-2.2 1.02-3.43s.38-2.32.43-2.68z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M32.65 23.23c4.52 0 8.18-5 8.18-11.16C40.83 5.9 37.17.9 32.65.9s-8.18 5-8.18 11.17c0 6.16 3.66 11.16 8.18 11.16z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M28.55 21.75c-.12-.04-.7-.38-1.37-1.1-.66-.72-1.4-1.8-1.95-3.09-.55-1.28-.9-2.75-1.05-4.1-.14-1.36-.12-2.61-.02-3.5.14-1.57.55-3.18 1.29-4.71a10 10 0 013.37-3.95c.74-.51 1.6-.85 2.5-1.06.9-.22 1.85-.18 2.74-.02.92.16 1.75.56 2.52 1.01.36.25.74.5 1.06.8.16.14.33.27.48.43l.45.47c1 1.12 1.74 2.44 2.24 3.8.51 1.38.8 2.81.88 4.23.18 2.83-.4 5.65-1.67 7.98a10.62 10.62 0 01-2.45 3.02c-.97.82-2.1 1.4-3.27 1.65a6.35 6.35 0 01-3.34-.17 7.47 7.47 0 01-2.56-1.5c.77.35 1.72.72 2.74.83 1.03.12 2.1-.04 3.02-.42.93-.38 1.71-.97 2.32-1.55l.43-.43.36-.42c.24-.25.4-.51.57-.7a11.8 11.8 0 002.32-5.6c.14-1 .2-2 .12-2.98-.01-.5-.1-.97-.17-1.46-.1-.47-.18-.95-.33-1.4-.26-.92-.64-1.8-1.1-2.59A8.91 8.91 0 0037 3.1a6.23 6.23 0 00-4.57-1.81 6.4 6.4 0 00-4.18 1.94 10.18 10.18 0 00-2.38 3.78 15.23 15.23 0 00-.63 8.09c.23 1.19.7 2.8 1.4 4.1a10 10 0 001.1 1.66c.15.23.34.4.47.54l.33.35z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M33.13 18.62c-2.69 0-4.87-2.94-4.87-6.55 0-3.62 2.18-6.56 4.87-6.56.77 0 1.53.25 2.21.72.44.3.6 1.02.39 1.6-.23.59-.76.82-1.2.52-.43-.3-.9-.46-1.4-.46-1.71 0-3.1 1.88-3.1 4.18s1.39 4.17 3.1 4.17c1.08 0 2.07-.74 2.64-1.99.25-.56.8-.73 1.21-.39.42.34.55 1.08.3 1.64-.9 1.96-2.45 3.12-4.15 3.12z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M36.98 13.86a.69.69 0 00-.84-.06c.13.2.25.44.22.91-.04.48-.67 1.3-1.7 1.84-1.07.54-2.8.2-3.78-1.63a5.01 5.01 0 01-.85-2.85c0-2.3 1.39-4.18 3.1-4.18.5 0 .97.16 1.4.46.44.3.97.07 1.2-.52.23-.6.03-1.36-.44-1.64-.06.26-.44.41-.8.41-.94.01-1.73-.78-3.27.31-2.46 2.1-3.21 5.37-2.18 8.7.87 1.81 2.37 3.01 4.09 3.01 1.7 0 3.25-1.16 4.14-3.12.26-.56.13-1.3-.29-1.64z",
					fill: "#C08D41"
				}), a.a.createElement("path", {
					d: "M26.69 6.37c-.74 1.7-1.1 4-1.1 5.93 0 2.81 1.8 9 6.56 10.17.27.07.62-.22.6-.57 0-.1-.05-.2-.1-.3-.58-1.07-1.8-1.14-2.67-1.82-1.68-1.31-2.44-2.85-2.92-4.84-.53-2.18-.6-4.58.06-6.7.66-2.13 2.35-3.93 4.12-4.44.7-.2 1.48-.24 2-.85.59-.7-.36-1.24-.97-1.24-1.44 0-3.99.98-5.58 4.66z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M44.95 24.16l-16.56 3.17-4.38-5.61 16.8-3.6 4.14 6.04z",
					fill: "#EA0027"
				}), a.a.createElement("path", {
					d: "M23.92 21.97l-4.21-5.63 1.82-.39.1.45-1.12.24 3.6 4.82 16.3-3.5-.5-.67.37-.28.94 1.26-17.3 3.7zM3.36 28.07l10.27-12.5.33-.4.29.4 12.48 17.36-13.1-16.88.61.01-9.81 12.87-1.07-.86z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M26.72 32.89l4.37-1.13 4.38-1.08c1.46-.35 2.9-.78 4.38-1.03s2.97-.47 4.5-.54l.01.1c-1.41.56-2.86.97-4.32 1.34-1.45.39-2.95.58-4.42.86l-4.44.8-4.44.77-.02-.1z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M28.73 28.47a60.07 60.07 0 01-3.81-4.29c-.62-.73-1.2-1.48-1.79-2.23l-1.72-2.28c-1.14-1.54-2.22-3.1-3.27-4.7a59.78 59.78 0 01-2.96-4.93A59.43 59.43 0 0119 14.32c1.2 1.48 2.38 2.98 3.5 4.52l1.67 2.33c.53.79 1.09 1.57 1.6 2.37a60.42 60.42 0 012.96 4.93z",
					fill: "#F99"
				}), a.a.createElement("path", {
					d: "M41.5 38.6c-.02.42-.05.85-.27 1.2-.2.33-.54.54-.87.73a21.6 21.6 0 01-3.77 1.97c-2.46.89-5.32.93-7.32 2.62 4.51-.46 8.87-1.87 13.19-3.27a.72.72 0 00.34-.18c.12-.14.12-.36.1-.55-.19-3.18-.13-6.38.18-9.56-.45-.02-1.63-.13-1.9.3-.23.37.17 1.67.2 2.11.15 1.54.19 3.09.12 4.63z",
					fill: "#fff"
				})),
				b = () => a.a.createElement("svg", {
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
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4l4.7-1.5 8.6-3c.4 0 .2-.7-.3-.6z",
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
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.3-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), a.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1a36357.5 36357.5 0 014 6.7c.3.2.4.7.7 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.6 1.4 2 .6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.6 2.6 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
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
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.2 4.2 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3a130162.5 130162.5 0 01-12.3-2.1l-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4l-3.7-.7-6-1-6-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2.1 0l.2-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5a10672 10672 0 007.4 1.3l6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6l-14-2.5-2.1-.4c-.4 0-.6.6-.2.7z",
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
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8l1.6 1.9 4.2 4.7 1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1a589887.3 589887.3 0 01-9.5 13L35 45.8l-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1v-.2c0 .2 0 .4.2.6 0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), a.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6.3 0 .6.5.7.7l1.3 1.6 4 4.8c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6a9462 9462 0 01-7.6-1.4l-6-1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1c.1-.2.4-.3.6-.3l1.6-.7 5.2-2.3 10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
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
			var h = r("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/IntroModal/index.m.less"),
				v = r.n(h);

			function g(e) {
				const {
					subreddit: t,
					pointsName: r
				} = e;
				return a.a.createElement("div", {
					className: v.a.container
				}, a.a.createElement(u.a, {
					colored: !0
				}, l.fbt._("Convert your Community Points into Reddit Coins", null, {
					hk: "2dqZYD"
				})), a.a.createElement("div", {
					className: v.a.sectionsContainer
				}, a.a.createElement(E, {
					image: a.a.createElement(f, null),
					header: l.fbt._("Convert", null, {
						hk: "4ytE6"
					}),
					description: l.fbt._("Choose how many Reddit Coins you want to get by converting your {pointsName}.", [l.fbt._param("pointsName", r)], {
						hk: "4gNGWI"
					})
				}), a.a.createElement(E, {
					image: a.a.createElement(p, null),
					header: l.fbt._("Exclusive to the community", null, {
						hk: "4kPlC3"
					}),
					description: t ? l.fbt._("Coins you convert from {pointsName} can only be used in {communityName}.", [l.fbt._param("pointsName", r), l.fbt._param("communityName", t.displayText)], {
						hk: "30CKZW"
					}) : l.fbt._("Coins you convert from Community Points can only be used in the community in which you bought them.", null, {
						hk: "1BcyV1"
					})
				}), a.a.createElement(E, {
					image: a.a.createElement(b, null),
					header: l.fbt._("Award", null, {
						hk: "3TbqKH"
					}),
					description: l.fbt._("Use Coins to award your favorite posts and comments, to highlight them and to reward the author.", null, {
						hk: "YNrVQ"
					})
				})), a.a.createElement("div", {
					className: v.a.footer
				}, a.a.createElement(m.i, {
					onClick: e.onContinue
				}, l.fbt._("Convert {pointsName}", [l.fbt._param("pointsName", r)], {
					hk: "4CnbBc"
				}))))
			}

			function E(e) {
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
			var y = r("./node_modules/bignumber.js/bignumber.js"),
				x = r.n(y),
				O = r("./node_modules/react-redux/es/index.js"),
				C = r("./node_modules/reselect/es/index.js"),
				j = r("./src/reddit/actions/gold/econPurchase.ts"),
				w = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				N = r("./src/reddit/actions/governance/index.ts"),
				I = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/actions/toaster.ts"),
				M = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				P = r("./src/reddit/endpoints/governance/crypto.ts"),
				k = r("./src/reddit/helpers/crypto/transactions.ts"),
				A = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				S = r("./src/reddit/helpers/trackers/crypto.ts"),
				T = r("./src/reddit/hooks/useTracking.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				z = r("./src/reddit/selectors/gold/econPurchase.ts"),
				D = r("./src/reddit/selectors/gold/productOffers.ts"),
				R = r("./src/reddit/selectors/gov.ts"),
				G = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				U = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx");

			function B(e) {
				return a.a.createElement(U.b, {
					values: [
						[Object(U.a)(), e.contractAddress],
						[l.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"]
					]
				})
			}
			var F = r("./src/reddit/controls/FormFields/index.tsx"),
				V = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				q = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				H = r("./src/reddit/components/Governance/Token/index.tsx"),
				W = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				J = r("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/ApprovalOverview.m.less"),
				Q = r.n(J);
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function X(e, t) {
				return e ? new x.a(t || 0).dividedToIntegerBy(e).toNumber() : 0
			}

			function $(e) {
				const {
					pointsAmount: t,
					price: r,
					pointsBalance: n,
					pointsName: s,
					pricePending: o,
					subreddit: c,
					tokenConversion: i
				} = e, d = new x.a(t).dividedBy(i), l = X(r, t);
				return a.a.createElement("div", {
					className: Q.a.container
				}, a.a.createElement("div", {
					className: Q.a.conversion
				}, a.a.createElement("div", {
					className: Q.a.pointsAmount
				}, a.a.createElement(F.c, {
					className: Q.a.pointsInput,
					disabled: !r,
					type: "number",
					label: `${c.displayText} ${s}`,
					value: d,
					placeholder: "0",
					onChange: t => (t => {
						const n = t && new x.a(t).multipliedBy(i).toFixed(0),
							a = X(r, n);
						e.onChange(n, a)
					})(t.currentTarget.value),
					onBlur: () => {
						if (!t) return void e.onChange("", 0);
						const a = x.a.maximum(x.a.minimum(t, n), 0).toFixed(0),
							s = X(r, a),
							o = s ? new x.a(s).multipliedBy(r).toFixed(0) : "";
						e.onChange(o, s)
					}
				}), a.a.createElement(H.a, {
					className: Q.a.pointsInputIcon,
					subredditId: c.id
				})), a.a.createElement("div", {
					className: Q.a.chevron
				}, a.a.createElement("svg", {
					width: "8",
					height: "24",
					viewBox: "0 0 8 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M1 1L7 12L1 23",
					stroke: "#D3D6DA",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))), a.a.createElement("div", {
					className: Q.a.coinsAmount
				}, a.a.createElement(q.a, {
					className: Q.a.coinIcon
				}), !r && o ? a.a.createElement(V.a, {
					className: Q.a.loadingIcon,
					sizePx: 5
				}) : l, a.a.createElement("div", {
					className: Q.a.coinsLabel
				}, Y._("Reddit Coins", null, {
					hk: "4n6R5v"
				})))), a.a.createElement(W.a, {
					subredditId: c.id
				}), r || o ? a.a.createElement("div", {
					className: Q.a.disclaimer
				}, Y._("Note: converted Coins will be only eligible for use in the community you've earned points. You'll see your updated coin balance when giving awards in this community.", null, {
					hk: "1AgEx3"
				})) : a.a.createElement("div", {
					className: Q.a.errorLoading
				}, Y._("There was an error loading the conversion price. Please try again later.", null, {
					hk: "NYpbS"
				})))
			}
			const Z = 100;

			function K(e) {
				var t, r;
				const {
					subreddit: s,
					pointsDetails: o
				} = e, d = o.contractAddress;
				if (!d) throw new Error("No community points contract address");
				const u = s.id,
					m = {
						subredditId: u
					},
					{
						pointsBalance: f,
						productOffer: p,
						productOffersPending: b,
						subredditLockedCoins: h
					} = Object(O.e)(Object(C.c)({
						pointsBalance: e => Object(R.e)(e, m),
						productOffer: e => {
							var t;
							return null === (t = Object(D.h)(e, {
								subredditId: u,
								type: i.c.CoinConversion
							})) || void 0 === t ? void 0 : t[0]
						},
						productOffersPending: D.g,
						subredditLockedCoins: e => Object(z.a)(e, m)
					})),
					v = null === (r = null === (t = null == p ? void 0 : p.pricePackages) || void 0 === t ? void 0 : t[0]) || void 0 === r ? void 0 : r.price,
					g = Object(c.a)(),
					E = Object(T.a)(),
					[y, U] = Object(n.useState)(""),
					[F, V] = Object(n.useState)(0);
				Object(n.useEffect)(() => {
					if (v && !y) {
						const e = x.a.minimum(new x.a(v).multipliedBy(Z), f).toFixed(0);
						U(e), V(new x.a(e).dividedBy(v).toNumber())
					}
				}, [v]);
				const q = o.displayConversion,
					H = e => {
						E(Object(S.a)("coins", u, new x.a(y).dividedBy(q).toFixed(), e))
					},
					W = () => g(Object(I.f)());
				return a.a.createElement(G.a, {
					approvalOverview: a.a.createElement($, {
						pointsAmount: y,
						onChange: (e, t) => {
							U(e), V(t)
						},
						pointsBalance: f,
						pointsName: o.name,
						price: v,
						pricePending: !v && b,
						subreddit: s,
						tokenConversion: q
					}),
					approvalDetails: a.a.createElement(B, {
						contractAddress: d
					}),
					onClose: W,
					onTransactionSuccess: async e => {
						W(), g(function() {
							const e = Object(_.e)(l.fbt._("Processing your conversion...", null, {
								hk: "4dA09t"
							}), L.b.SuccessCommunity);
							return e.duration = 15e3, Object(_.f)(e)
						}()), async function(e, t, r, n, a) {
							await Object(A.a)(t, r);
							const s = Object(j.a)(n.id, n.name, {
								force: !0
							});
							await e(Object(M.a)(s, async e => {
								const t = Object(z.a)(e(), {
									subredditId: n.id
								});
								return a < t || null
							})), e(Object(N.h)({
								subredditId: n.id
							}))
						}(g, o, e.hash, s, h).then(() => {
							E(Object(S.b)("coins", u, new x.a(y).dividedBy(q).toFixed())), g(function() {
								const e = Object(_.e)(l.fbt._("Your Coins are ready!", null, {
									hk: "7ewJ6"
								}), L.b.SuccessCommunityGreen);
								return e.duration = 15e3, Object(_.f)(e)
							}())
						}).catch(e => {
							H(e.toString()), g(Object(_.f)(Object(_.e)(l.fbt._("There was an error while purchasing your Coins. Please try again later", null, {
								hk: "nEHTT"
							}), L.b.Error)))
						})
					},
					onTransactionFailure: H,
					subredditId: u,
					transaction: F ? async () => {
						const e = await g(Object(w.b)(p, F, {
							subredditId: u,
							userCoinsInSubreddit: {
								subredditId: u
							}
						}));
						if (!e) throw new Error("Failed to get econ order for coin conversion");
						return Object(k.c)(d, y, e)
					} : null,
					transactionIntent: Object(P.d)(u),
					transactionIsBlockedOnIOS: !0
				})
			}
			t.default = Object(s.a)((function() {
				const e = Object(c.a)(),
					{
						pointsDetails: t,
						subreddit: r
					} = Object(d.c)(),
					s = null == r ? void 0 : r.id;
				if (!t || !r || !s) throw new Error("Expected subreddit id");
				Object(n.useEffect)(() => {
					e(Object(o.c)(i.c.CoinConversion, s))
				}, [e, s]);
				const [l, u] = Object(n.useState)(!0);
				return l ? a.a.createElement(g, {
					onContinue: () => u(!1),
					pointsName: t.name,
					subreddit: r
				}) : a.a.createElement(K, {
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
				return N
			})), r.d(t, "c", (function() {
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(a),
				o = r("./node_modules/raf/index.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./src/higherOrderComponents/asModal/index.tsx"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/layout/row/Inline/index.tsx"),
				g = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = r.n(g);
			var y = Object(b.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: E.a.wrapper
					}, d.a.createElement(v.a, {
						className: E.a.titleRow
					}, r), d.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: E.a.buttonRow
					}, d.a.createElement(h.i, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = r("./src/reddit/controls/ErrorText/index.m.less"),
				O = r.n(x);
			const C = Object(u.c)({
				activeModalId: p.a
			});
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`
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
						activeModalId: t,
						className: r,
						errorModalBody: a,
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(O.a.wrapper, r)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), t === c && d.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: s
					}, a || e))
				}
			}
			const w = Object(l.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(f.i)(t))
				}))(j),
				N = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(w, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				I = e => d.a.createElement(N, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
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
				return f
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/controls/ErrorText/index.tsx"),
				i = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = o.a.input("input", u.a),
				p = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						...c
					} = e, i = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: p
					}, a.a.createElement(f, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, c)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				h = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: o,
						className: c,
						redditStyle: i,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: p
					}, a.a.createElement(f, m({
						innerRef: n
					}, d)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				v = e => a.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class E extends a.a.Component {
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
					return e.map((e, o) => a.a.createElement(b, {
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
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(d.b, {
						className: u.a.trash
					})), !!s[o] && a.a.createElement(c.b, {
						className: u.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: o,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && r.length >= n) && !c;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && i && a.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && a.a.createElement(v, {
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
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
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
				return x
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return _
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				p = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const v = (e, t, r, n, s) => {
				const {
					premium: o,
					...c
				} = s, i = (null == o ? void 0 : o.pricePackage) || r.pricePackages[0], l = new a.a(i.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: l,
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
			const E = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				y = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				x = (e, t, r, n) => Object(h.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				O = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				C = (e, t, r, n) => Object(h.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				w = (e, t, r, n, a) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				N = (e, t) => Object(h.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				I = e => Object(h.a)(e, {
					...b,
					variables: {}
				}),
				_ = (e, t) => Object(h.a)(e, {
					...p,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "n", (function() {
				return g
			}));
			var n, a = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, r) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const f = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				v = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function g(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./src/config.ts"),
				a = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(s.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: a.hb.GET
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

			function c(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: a.hb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
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

			function c(e, t) {
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
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				c = r.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), a.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), a.a.createElement("path", {
				className: Object(s.a)(c.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), a.a.createElement("path", {
				className: Object(s.a)(c.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), a.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
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
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, s, o;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				a = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				s = r("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var c = (e = o, t) => {
					switch (t.type) {
						case s.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case a.b:
						case a.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === a.b
								}
							};
						default:
							return e
					}
				},
				i = r("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, r, n, a, s;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == o ? void 0 : o.contracts,
					i = null == c ? void 0 : c.unlocked,
					d = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					u = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
					m = (null == i ? void 0 : i.decimals) || 0,
					f = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == i ? void 0 : i.address) || "",
					contracts: c,
					decimals: m,
					displayConversion: f,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == i ? void 0 : i.token) || ""
				}
			}
			var m = (e = d, t) => {
				switch (t.type) {
					case i.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: u(n)
						}
					}
					default:
						return e
				}
			};
			const f = {};
			var p = (e = f, t) => {
				switch (t.type) {
					case i.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, a = Object.keys(n).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[r]: n[a]
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: c,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var o = (e = s, t) => {
				switch (t.type) {
					case a.nb: {
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
				subredditLockedCoins: o
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: c.a
				}
			});
			const i = (e, t) => {
				var r, n, a;
				return t ? null === (a = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function d() {
				const e = Object(a.ab)(),
					t = Object(n.e)(t => Object(a.q)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const l = (e, t) => {
				var r;
				const n = null === (r = i(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby || n === s.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const s = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return v
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, o;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(a.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				u = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(u, c.p, (e, t) => m(e, t) || null),
				p = Object(n.a)(f, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(f, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				s = {},
				o = (e, t) => {
					const r = f(e, t);
					if (r) return r.mainHeader
				},
				c = (e, t) => {
					const r = f(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				i = (e, t) => {
					const r = f(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const r = d(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = d(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				f = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
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
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.73e4b0b1a35c28935950.js.map